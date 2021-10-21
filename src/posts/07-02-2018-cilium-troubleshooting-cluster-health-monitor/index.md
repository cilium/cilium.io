---
path: '/blog/2018/2/6/cilium-troubleshooting-cluster-health-monitor'
date: '2018-02-07T17:20:00.000Z'
title: 'Connectivity Troubleshooting with cilium-health'
categories:
  - Deep Dive
tags:
  - troubleshooting
ogSummary: As we approach the upcoming 1.0 release, the Cilium community has been putting a lot of effort towards monitoring and troubleshooting. This has led to the development of several new tools in the project which we'll explore in this blog series. In this first part, we will cover **cilium-health**, a tool for troubleshooting intra-cluster connectivity issues.`
---

As we approach the upcoming 1.0 release, the Cilium community has been putting a lot of effort towards monitoring and troubleshooting. This has led to the development of several new tools in the project which we'll explore in this blog series. In this first part, we will cover **cilium-health**, a tool for troubleshooting intra-cluster connectivity issues.

---

## What’s cilium-health ?

**cilium-health** is a new tool available in Cilium which provides visibility into the overall health of the cluster’s networking connectivity.

    Agent for hosting and querying the Cilium health status API

    Usage:
      cilium-health [flags]
      cilium-health [command]

    Available Commands:
      get         Display local cilium agent status
      ping        Check whether the cilium-health API is up
      status      Display cilium connectivity to other nodes

    Flags:
          --admin string     Expose resources over 'unix' socket, 'any' socket (default "any")
      -c, --cilium string    URI to Cilium server API
      -d, --daemon           Run as a daemon
      -D, --debug            Enable debug messages
      -H, --host string      URI to cilium-health server API
      -i, --interval int     Interval (in seconds) for periodic connectivity probes (default 60)
      -p, --passive          Only respond to HTTP health checks
          --pidfile string   Write the PID to the specified file

    Use "cilium-health [command] --help" for more information about a command.

It aims to answer the following questions:

Is Cilium successfully deployed on all cluster nodes? Can my cluster nodes reach one another? Can endpoints/pods on each node reach each other? What is the network latency between nodes and endpoints? If there are connectivity issues, where do I look next to resolve them?

The following example shows usage of the **cilium-health** tool. It assumes that you've already deployed Cilium into your cluster, for which you can get more information here. **cilium-health** can be run from any node:

    $ cilium-health status
    Probe time:   2018-02-06T19:40:16Z
    Nodes:
     k8s1 (localhost):
       Host connectivity to 192.168.36.11:
         ICMP:          OK, RTT=1.258166ms
         HTTP via L3:   OK, RTT=434.173µs
       Endpoint connectivity to 10.10.0.172:
         ICMP:          OK, RTT=1.266885ms
         HTTP via L3:   OK, RTT=554.219µs
     k8s2:
       Host connectivity to 192.168.36.12:
         ICMP:          OK, RTT=1.53503ms
         HTTP via L3:   OK, RTT=2.420321ms
       Endpoint connectivity to 10.10.1.172:
         ICMP:          OK, RTT=2.081433ms
         HTTP via L3:   OK, RTT=6.550839ms

The first line describes the time that the cluster connectivity was probed. By default, the connectivity is probed roughly once every sixty seconds. Running the command as above will return the status during the most recent probe. If you have any reason to suspect that a connectivity issue was introduced more recently, you can run `cilium-health status --probe` to actively probe the cluster connectivity at any point. In `--probe` mode, cilium-health will synchronously probe the connectivity and report it back when it gets the results. This may take a few seconds.

After this, the command prints a list of all known nodes in the cluster. This list is determined through the same mechanism that Cilium uses to connect all cluster nodes together. If the list provided by **cilium-health** does not include all of your cluster nodes, then this means that Cilium was not successfully deployed on all cluster nodes or it indicates a problem with the orchestration system (e.g. Kubernetes).

For each node, the output displays the name of the node, then multiple paths related to that node: Is the localhost able to reach the remote node via ICMP and HTTP? In this case, the tool reports "OK", and the Round Trip Time (RTT) of the last probe. Is the local node able to reach the special health-checking endpoint on the remote node over ICMP and HTTP? Again, we can see the status and a snapshot of the most recent RTT.

These paths for each node describe the nature of the connectivity to that node - can the node be reached at all? If so, can endpoints on that node be reached if there is no policy applied? Traditionally, ICMP (ping) is often used to probe connectivity and latency to a host, however in some deployments, operators may choose to drop ICMP traffic on the fabric. Even if ICMP is being dropped on the fabric, legitimate HTTP requests (over TCP) should still be allowed. Furthermore, the latency for the HTTP requests provide an indication of the expected response time for an application for which Cilium provides networking and security.

## Hands-on: Troubleshooting an iptables issue

So what happens when things aren't working, and how can we interpret the output of **cilium-health**? We hit an issue with the following symptoms recently:

_We deployed Cilium and spawned up some endpoints but we were unable to connect between endpoints on different nodes._

In order to troubleshoot, we used the **cilium-health** tool to have a starting point on troubleshooting, with the following output:

    $ cilium-health status
    Probe time:   2018-02-06T23:57:45Z
    Nodes:
     k8s1 (localhost):
       Host connectivity to 192.168.36.11:
         ICMP:          OK, RTT=424.945µs
         HTTP via L3:   OK, RTT=1.085883ms
       Endpoint connectivity to 10.10.0.172:
         HTTP via L3:   OK, RTT=2.100516ms
         ICMP:          OK, RTT=445.51µs
     k8s2:
       Host connectivity to 192.168.36.12:
         ICMP:          OK, RTT=573.414µs
         HTTP via L3:   OK, RTT=2.710255ms
       Endpoint connectivity to 10.10.1.172:
         ICMP:          Connection timed out
         HTTP via L3:   Connection timed out

For some reason, the nodes could connect to one another, but endpoints couldn't be reached on other nodes. The output was similar when observed from the other node, again with only the local endpoint appearing to be reachable. This tells us a few important pieces of information:

- The underlying connectivity between the nodes is working fine.
- The traffic gets dropped somewhere within the remote host.
- The health checking endpoint does not have connectivity which rules out a user error when configuring policy. The issue affects traffic before it reaches the policy evaluation layer.

Further investigation on the node revealed a netfilter misconfiguration. The FORWARD chain was set to the default policy DROP which resulted in all packets to be dropped when forwarded from the overlay network device to Cilium.

## Under the hood

On each node where cilium is running, it spawns instances of the cilium-health daemon. One of these instances runs co-located with Cilium, with access to the Cilium API which feeds it the IP addresses of all cilium-health daemons operating in the cluster. This instance is responsible for periodically sending ICMP and HTTP requests to each of these IPs to check connectivity and measure the latency for the remote host to respond.

Another instance of the cilium-health daemon is launched on each node in a similar way to an endpoint. This one doesn’t communicate with the main Cilium daemon, but simply serves responses to incoming HTTP requests from the other cilium-health daemons. The probes which test this path are running over the same datapath logic as any other regular endpoint, so if it’s not working, then something is likely wrong for all endpoints on the node; whereas if connectivity to this node works, then it suggests that any other connectivity issues observed must occur with additional features above, for instance layer 7 policies or services. Finally, this endpoint has special “reserved” labels associated with it so that it can be easily identified:

    root@k8s1:~# cilium endpoint list
    ENDPOINT   POLICY (ingress)   POLICY (egress)   IDENTITY   LABELS (source:key[=value])                      IPv6                 IPv4            STATUS
               ENFORCEMENT        ENFORCEMENT
    29898      Disabled           Disabled          299        reserved:health                                 f00d::a0f:0:0:74ca   10.15.242.54    ready
    ...

## Summary

Cilium-health provides an instant snapshot of the health of a Cilium cluster from a connectivity perspective.

Is Cilium running on all Cluster nodes? (All nodes are being listed) Can all my nodes reach each other? (No connectivity issues between nodes) Do any of the nodes have configuration issues which prevent the health-checking endpoints to be reached? (No connectivity issues to to health-checking endpoints) Is something on the network blocking ICMP or HTTP?

Stay tuned for upcoming blog posts that will dig into where to look next.

These insights can assist troubleshooting issues in the underlying network (such as routing or tunneling issues) or misconfigurations of node settings (such as firewall rules inadvertently interrupting the flow of traffic). They can help to point towards which tools will provide additional information, and speed up problem diagnosis in your clusters.

Happy troubleshooting!
