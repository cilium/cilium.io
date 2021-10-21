---
path: '/blog/2018/06/26/cilium-11'
date: '2018-06-26T09:01:01.000Z'
title: 'Cilium 1.1: Istio sidecar mode, cri-o/containerd support, improved efficiency & scale, init policies'
categories:
  - Releases
  - Announcements
tags:
  - announcement
  - releases
ogSummary: "We are excited to announce Cilium 1.1. 33 contributors have contributed 965 commits to this release. Below is a list of highlighted features and
architectural improvements that have made the 1.1 release in addition to the
countless bugfixes."
---

We are excited to announce Cilium 1.1. 33 contributors have contributed 964
commits to this release. Below is a list of highlighted features and
architectural improvements that have made the 1.1 release in addition to the
countless bugfixes.

## What is Cilium?

Cilium is open source software for transparently securing the network
connectivity between application services deployed using Linux container
management platforms like Docker and Kubernetes.

At the foundation of Cilium is a new Linux kernel technology called BPF, which
enables the dynamic insertion of powerful security visibility and control logic
within Linux itself. Because BPF runs inside the Linux kernel, Cilium security
policies can be applied and updated without any changes to the application code
or container configuration.

See the section [Introduction to Cilium](http://docs.cilium.io/en/v1.1/intro/)
for a more detailed introduction to Cilium.

## Highlights

- **[Deep Istio Integration](#DeepIstioIntegration)**
  - **mTLS compatibility:** New alternative mode to enforce Cilium application
    protocol security policies directly in the [Istio] sidecar proxy managed by
    [Pilot] to support application level policy enforcement when [Mutual TLS]
    is in effect. Pod and port-level policies continue to be enforced outside
    of the pod.
  - **Istio guide:** New getting started guide based on Istio 0.8.0 release
    that features Helm charts to deploy Istio.
  - **Init policies:** A new init identity covers the time span of a pod while it
    is being initialized, i.e. while the labels and or policy of an endpoint is
    not known yet. The init policy enforces a configurable policy. It is in particular importance to Istio architectures because the sidecar proxy of a pod is required to have privileges to communicate
    with the control plane running in the `istio-system` namespace.
- **Support for additional container runtimes**
  - The runtimes are automatically detected as reliably as possible but can
    also be explicitly specified using the `--container-runtime` option.
  - **[cri-o](https://github.com/kubernetes-incubator/cri-o)**: Includes an
    extension of the [minikube getting started
    guide](https://cilium.readthedocs.io/en/v1.1/gettingstarted/minikube/) with
    the cri-o specific deployment steps.
  - **[containerd](https://github.com/containerd/containerd)**
- **Additional Network Security for Kubernetes**
  - **podSelector && namespaceSelector:** Support for the new combined
    podSelector and namespaceSelector in NetworkPolicy as introduced in
    Kubernetes 1.11.
  - **Service accounts:** Ability to match on the [Kubernetes Service Account] association of a pod. Please
    [see example below](#ServiceAccount).
  - **NodePort security:** Ability to differentiate between local host and
    traffic that is SNATed to the node IP when entering the node. This allows
    differentiation between host traffic performing health checks and external
    accesses via NodePort. Old behavior can be preserved with the
    `--k8s-legacy-host-allows-world` option.
  - **Changing pod labels:** The policy enforcement layer now supports
    containers and pods changing their labels on the fly.
  - **Policy correlation:** Annotations of a CiliumNetworkPolicy are now
    mirrored in the status field for each node. This simplifies the correlation of
    what policy is being enforced on which node.
- **Extended IP/CIDR policy enforcement capabilities**
  - **Combined IP+L4/L7:** Support to specify port and application protocol
    (L7) rules that only apply in combination with IP/CIDR matching.
  - **Unlimited # of CIDR prefix lengths:** CIDR enforcement implementation with new BPF
    longest-prefix-match map when available. Leads to support of unlimited number of prefix lengths.
- **Improved connection tracker efficiency**
  - **CT cleanup on deny:** Removal of connection tracking entries when policy
    denies the traffic. This is possible because the policy enforcement cost is
    only O(1).
  - **Improved UDP conntrack:** More aggressive cleaning of connection
    tracking table for non-TCP traffic. This primarily improves resource usage
    of workloads such as [Prometheus] metrics scraping causing a continuously large
    number of DNS lookups per second.
- **Efficiency & Scale**
  - **Large identity count environments:** Massive improvement of identity
    allocation performance in environments with several thousand workload
    identities.
  - **MTU improvements:** Better MTU handling by implementing the encapsulation
    packet overhead via the MTU metric of the transmission route to allow using
    the full MTU on receive. This reduces the probability of fragmentation and
    packet drops.
- **Additional Prometheus metrics**
  - **L3/L4/L7 forwards/drops:** Counters for all forwarded and rejected
    traffic on both packet and application protocol request layer. Packet level
    metrics are exported directly from the BPF datapath using efficient per-CPU
    maps. Application protocol metrics are exported by the proxies.
  - **Status as a metric:** Representation of all status-relevant failure
    scenarios such as the number of failing controllers.
- **Reliability Work**
  - **Support for changing host IPs:** If you add or change one of the
    IPs of the host, it will be properly detected and policy is applied
    accordingly. This is made possible by replying to all ARP requests with the
    virtual MAC address of the Cilium router regardless of the IP being
    requested as all traffic is always L3 forwarded.
  - **Continous BPF synchronization:** Synchronization of policy to BPF maps is
    now done via controllers. If something modifies the state of the BPF maps
    other than Cilium, the state in the BPF map is automatically fixed again.
  - **Reuse of devices & routes:** Network devices and routes are no longer
    re-created but modified if possible to ensure continued connectivity across
    agent restarts.
  - **Synchronous CNI plugin:** The CNI plugin is now performing the plumbing
    in a synchronous fashion. This guarantees that networking is being
    provided from the moment the application container is being spawned. See
    [init policy](#InitPolicy) to define policy privileges for the duration
    when workload identity is not known yet.
  - **TCP keepalive support:** Envoy and the Kafka proxy now enable TCP
    keepalive by default to ensure that persistent connections are never
    subject to connection tracking expiration even if no data is being sent for
    days.
  - **IPv6:** Improved handling of unsupported IPv6 extension headers.
- **Operations**
  - **Require k8s PodCIDR allocation:** New agent options
    `--k8s-require-ipv4-pod-cidr` and `--k8s-require-ipv6-pod-cidr` to require
    the Kubernetes PodCIDR to be provided by Kubernetes via the Node resource.
  - **IPv6:** New `--ipv6-cluster-alloc-cidr` option to specify the IPv6 CIDR
    when Cilium allocates the per node IPv6 CIDR.
  - **CNI compatibility:** Rename of default CNI configuration name from
    `10-cilium.conf` to `00-cilium.conf` to simplify plugging Cilium into
    existing Kubernetes environments as some CNI plugins do not remove the
    configuration file when they get uninstalled.
  - **State pruning:** New `clean-cilium-state` option in the Kubernetes
    ConfigMap which will trigger running an [init container] when the Cilium
    pods starts up to clean all existing state before Cilium starts up.
  - **BPF filesystem:** Improved automatic mounting of the BPF filesystem when
    Cilium is being run in a separate mount namespace.
  - **Ubuntu 18.04 base image:** The base image for the Cilium container image has been
    upgraded to Ubuntu 18.04.
- **Documentation**
  - **Kubernetes versions:** Documentation now features multiple tabs to
    provide example YAML files for different Kubernetes versions to account
    for different resource naming versioning requirements.
  - **Istio GSG:** New [getting started guide with Istio 0.8](https://cilium.readthedocs.io/en/v1.1/gettingstarted/istio/).
  - **cri-o:** New [getting started guide using cri-o](https://cilium.readthedocs.io/en/v1.1/gettingstarted/minikube/).
  - **Elasticsearch:** New [Elasticsearch getting started guide](http://docs.cilium.io/en/v1.1/gettingstarted/elasticsearch/).
  - **BPF reference guide:** Additions to the [BPF reference guide] including
    sections on XDP, iproute2, and LLVM.

<a name="DeepIstioIntegration"></a>

## Deep Istio integration

Cilium deeply integrates with [Istio]. Cilium operates as a CNI plugin and
provides connectivity as well as transparent security starting packet level
all the way up to API level. Among many things, Istio can provide [Mutual TLS]-based authentication between Istio managed services as well as authorization.
Both are implemented with the help of a sidecar proxy running inside of the
application pod. When running Istio in combination with Cilium, Cilium can:

- Secure the Istio sidecar and control plane. More on this below.
- Run in a [Mutual TLS]-compatible configuration
  allowing Cilium to enforce Cilium security policies using the Istio sidecar
  architecture.
- Enhance the performance of Istio and Envoy by reducing the
  overhead introduced by the sidecar architecture. More details on this can be
  found in this separate [blog post](/blog/2018/04/24/cilium-10).

### Restrict unsupported protocols

Istio ignores network traffic for protocols that are not supported by Istio.
This includes all UDP, ICMP and IPv6 traffic. Traffic using these unsupported
protocols is thus not subject to Istio's authentication and authorization rules
and will bypass enforcement.

Cilium guarantees enforcement of all security policies outside of the pod
regardless of the protocol being used. Cilium follows a strict whitelist model
which will result in rejection of any unknown traffic. This allows restriction of
traffic with protocols not supported by Istio and cover scenarios such as:

- Prevent a compromised pod to leak information using a UDP based gossip
  protocol by only allowing UDP traffic to kube-dns running in the
  kube-system namespace.
- Apply security policies to TCP ports which are excluded from the sidecar
  redirection logic. This could include restriction of traffic to only the
  port that is being redirected to the sidecar.
- Prevent a compromised pod to leak information to a public IPv6 address
  which would otherwise bypass the proxy.

### Securing the Sidecar

The sidecar proxy itself is not subject to any security rules as the proxy is
being excepted from the redirection logic else it would cause a continuous loop.
As Cilium provides enforcement outside of the pod, the traffic of a potentially
compromised sidecar proxy is still subject to the security policies rules by:

- Limiting communication to allowed services in the cluster to complement
  [Mutual TLS]. This is particularly important as a compromised sidecar gains
  access to all other services that are _not_ using [Mutual TLS] because there is
  no ingress protection on the receiving side of the service.

- Preventing a pod from leaking sensitive information by either not allowing the
  pod to communicate outside of the cluster at all or by limiting it to well-known
  IP/CIDR ranges on well known ports.

### Securing the Control Plane

All Istio sidecars communicate with the Istio control plane that is deployed
within the cluster. This communication is required for operations and
application pods are required to have access to these services. Here are a
few examples of how Cilium improves security of the overall architecture:

- Only allow application pods that have been injected with an Istio sidecar
  to have access to the control plane. This can be achieved having Cilium
  policies match on Istio annotation added to pods during injection.
  Pods without an injected Istio sidecar proxy should not have access to the
  control plane.

- The Istio control plane collects a lot of sensitive information as it manages
  certificates, performs tracing and host authorization logic. The control
  plane components obviously must be subject to security policies to prevent
  leaking of this information.

### mTLS-compatible API-aware security policies

Prior to the 1.1 release, use of the Istio [Mutual TLS] functionality
encrypted all of the TCP traffic between services, which restricted the capability
of Cilium to enforce API-aware security policies for such services. Starting
with Cilium 1.1, Cilium is capable of reusing the Envoy instance running as a
sidecar inside the pod to enforce the Cilium security policies.

No change to the policies is required. All API level policies will be enforced
in the sidecar and all policies on a pod/service and port level continue to be
applied outside of the pod. Thus it will continue to include network traffic
that is currently unsupported by Istio.

Please follow the [Istio Getting Started Guide] to learn how to run Cilium in
the [Mutual TLS] compatible mode.

<a name="InitPolicy"></a>

### Init Policy

Security labels are bound to pod and container labels. Certain labels are only
associated with a pod while the pod is being initialized. Consequently, the
privileges granted by the policy matching on such labels are only applied while
the pod is being initialized. This can lead to lack of connectivity
while a pod or container initialization. Cilium 1.1 introduces a new init
policy concept which allows definition of privileges which should be applied to pods and
containers that are being initialized.

**Kubernetes Example:**

    apiVersion: "cilium.io/v2"
    kind: CiliumNetworkPolicy
    metadata:
      name: init-allow-dns
    specs:
      - endpointSelector:
          matchLabels:
            "reserved:init": ""
        egress:
        - toEntities:
          - all
          toPorts:
          - ports:
            - port: "53"
              protocol: UDP

The above example allows all pods in the initialization phase to emit traffic on
port 53/UDP regardless of the destination. Instead of an entities match on
`all`, this policy could also match on the labels of kube-dns
`k8s-app=kube-dns`, see [kube-dns policy example] for more information.

<a name="ServiceAccount"></a>

### Kubernetes Service Account Policy

The service account of a pod is either defined via the [service account
admission controller]
(https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#serviceaccount)
or can be directly specified in the Pod, Deployment, ReplicationController
resource like this:

    apiVersion: v1
    kind: Pod
    metadata:
      name: my-pod
    spec:
      serviceAccountName: leia
      ...

The following example grants any pod running under the service account of
"luke" to issue a `HTTP GET /public` request on TCP port 80 to all pods
running associated to the service account of "leia".

    apiVersion: "cilium.io/v2"
    kind: CiliumNetworkPolicy
    metadata:
      name: "k8s-svc-account"
    spec:
      endpointSelector:
        matchLabels:
          io.cilium.k8s.policy.serviceaccount: leia
      ingress:
      - fromEndpoints:
        - matchLabels:
            io.cilium.k8s.policy.serviceaccount: luke
        toPorts:
        - ports:
          - port: '80'
            protocol: TCP
          rules:
            HTTP:
            - method: GET
              path: "/public$"

## Upgrade Notes

<a name="upgradeWorld"></a>

### Changed Behavior: External traffic no longer classified as host

In Cilium 1.0, all traffic from the host, including from local processes and
traffic that is masqueraded from the outside world to the host IP, was
classified as from the `host` entity (`reserved:host` label).

Cilium 1.1 introduces the capability to differentiate between traffic emitted
from local processes and traffic that was merely masqueraded on the host. This
provides additional security control in environments where masquerading cannot
be disabled for one reason or another.

In order to not break any existing deployments, the following migration step is
required:

- An existing Kubernetes `DaemonSet` with an existing `ConfigMap` will preserve
  the behavior. The user is required to edit the `ConfigMap` `cilium-config` and
  add the option: `legacy-host-allows-world: "false"`.

- New deployments will automatically opt into the new behavior as the default
  `ConfigMap` already contains the option `legacy-host-allows-world: "false"`.

### Changed Behavior: MTU

Cilium 1.0 by default configured the MTU of all Cilium-related devices and
endpoint devices to 1450 bytes, to guarantee that packets sent from an endpoint
would remain below the MTU of a tunnel. This had the side-effect that when a
Cilium-managed pod made a request to an outside (world) IP, if the response
came back in 1500B chunks, then it would be fragmented when transmitted to the
`cilium_host` device. These fragments then pass through the Cilium policy
logic. Latter IP fragments would not contain L4 ports, so if any L4 or L4+L7
policy was applied to the destination endpoint, then the fragments would be
dropped. This could cause disruption to network traffic.

Cilium 1.1 fixes the above issue by increasing the MTU of the Cilium-related
devices and endpoint devices to 1500B (or larger based on container runtime
settings), then, given Cilium is configured to run in tunneling mode,
configures a route within the endpoint at a lower MTU to ensure that
transmitted packets will fit within tunnel encapsulation. This addresses the
above issue for all new pods.

Upgrading to Cilium 1.1 will not automatically adjust the MTU of existing pods.
Pods must be restarted in order for them to receive the new MTU setting. New
pods will automatically be configured with the improved MTU settings.

## Upgrade Instructions

As usual, follow the [upgrade
guide](https://cilium.readthedocs.io/en/v1.1/install/upgrade/) to upgrade your
Cilium deployment. Feel free to ping us on [Slack](http://cilium.io/slack).

## Release

- Container image: `docker.io/cilium/cilium:v1.1.0`

### Binaries

- [cilium-agent-x86_64](http://releases.cilium.io/v1.1.0/cilium-agent-x86_64) ([c38ff8680d8e05552036](http://releases.cilium.io/v1.1.0/cilium-agent-x86_64.sha256sum))
- [cilium-bugtool-x86_64](http://releases.cilium.io/v1.1.0/cilium-bugtool-x86_64) ([569dfc27d5ac035a538c](http://releases.cilium.io/v1.1.0/cilium-bugtool-x86_64.sha256sum))
- [cilium-health-x86_64](http://releases.cilium.io/v1.1.0/cilium-health-x86_64) ([9c4142dde33ee32aef27](http://releases.cilium.io/v1.1.0/cilium-health-x86_64.sha256sum))
- [cilium-node-monitor-x86_64](http://releases.cilium.io/v1.1.0/cilium-node-monitor-x86_64) ([aff6d94547905f6f3561](http://releases.cilium.io/v1.1.0/cilium-node-monitor-x86_64.sha256sum))
- [cilium-x86_64](http://releases.cilium.io/v1.1.0/cilium-x86_64) ([4b20d05abf571ed28e53](http://releases.cilium.io/v1.1.0/cilium-x86_64.sha256sum))
- [v1.1.0.tar.gz](http://releases.cilium.io/v1.1.0/v1.1.0.tar.gz) ([3dfda64d8bb9733ae137](http://releases.cilium.io/v1.1.0/v1.1.0.tar.gz.sha256sum))
- [v1.1.0.zip](http://releases.cilium.io/v1.1.0/v1.1.0.zip) ([3afbfca4e94a90c3ad0b](http://releases.cilium.io/v1.1.0/v1.1.0.zip.sha256sum))

[istio]: https://istio.io/
[pilot]: https://istio.io/docs/concepts/traffic-management/pilot/
[mutual tls]: https://istio.io/docs/concepts/security/mutual-tls/
[prometheus]: https://github.com/prometheus/prometheus
[init container]: https://kubernetes.io/docs/concepts/workloads/pods/init-containers/
[go 1.10]: https://blog.golang.org/go1.10
[bpf reference guide]: https://cilium.readthedocs.io/en/v1.1/bpf/
[kube-dns policy example]: https://github.com/cilium/cilium/blob/master/examples/policies/kubernetes/namespace/kubedns-policy.yaml
[kubernetes service account]: https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/
[istio getting started guide]: https://cilium.readthedocs.io/en/v1.1/gettingstarted/istio/
