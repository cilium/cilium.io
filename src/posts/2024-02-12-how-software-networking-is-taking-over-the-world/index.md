---
path: '/blog/2024/02/12/how-software-networking-is-taking-over-the-world'
date: '2024-02-12T12:00:00.000Z'
title: 'How Software Networking Is Taking Over The World'
ogImage: cover.png
ogSummary: 'A list of all Cilium talks and sessions at KubeCon EU 2024'
categories:
  - Community
---

![](cover.png)

For decades we’ve been taught by hardware manufacturers that networking and packet manipulation requires dedicated hardware based on expensive, specialized silicon. However, that’s no longer the case. Kernel-level technologies such as [eBPF](https://ebpf.io), combined with huge improvements in server CPU throughput and multi-core/threading, are today allowing us to run complex, even bespoke networking capabilities on commodity hardware. Let’s look into how this has evolved from software defined networking to today’s cloud native deployments.

## In The Beginning, There Was The Hardware

We don’t have to go too far through the history books to head back to a time when the thought of a consumer CPU being part of the networking data path would send shivers down the spines of both the networking team and the applications teams. Industries were created, enough marketing material to fill several libraries were developed and the computer industry accepted that dedicated hardware was required to manage the application traffic between servers and the outside world.

Network hardware quickly evolved from just ensuring traffic would get from A to B: manufacturers added the capabilities to segment traffic, make quality of service guarantees, and ensure that they had control of who/what hardware was on the network with access control lists. Originally just focussing on the network tenants, it didn’t take long for the hardware companies to start to move their technologies into the actual traffic itself. Routers would inspect the destination for traffic and forward it to other locations if needed, Firewalls would inspect incoming traffic based on destination and port and would compare this to sets of rules that would either permit or deny the incoming traffic. Then finally the technologies progressed from the traffic behavior to the application behavior, which involves looking (and understanding) the application traffic (also known as Layer 7) and making decisions based upon incoming application requests. The most common of these were web application hardware that understands the “request” of incoming web traffic (such as GET /users or POST /login) and performs traffic decisions such as `block` or `forward` to another server through a set of rules.

## The Problem With Software

There are many reasons as to why packet processing was originally moved to dedicated networking devices, however, the main and hopefully obvious one is mainly that local (on your server/machine/laptop) packet processing performance would be woeful compared to silicon created solely for that purpose. The speeds of networking interconnects improved at a rapid pace (10mbit -> 100mbit -> 1Gbit -> 10Gbit -> 100 Gbit etc..), and each speed increase would suddenly come with it a large bump up in the amount of data/packets that a CPU would have to process locally. These speeds are usually referred to as “wire-speed” (due to the speeds of traffic on the physical wires), most hardware vendors would aim to ensure that their devices would be capable of processing traffic at “wire-speed” to ensure that the processing work would not incur any bottleneck on the network.

People trying to use commercial hardware/software to replicate the behavior of dedicated silicon would often be met with disappointment. The Journal of Universal Computer Science has a [paper](https://www.jucs.org/jucs_16_21/impact_of_cpu_bound/jucs_16_21_3299_3313_salah.pdf) detailing experiments of replicating high traffic rates from 2010. The journal goes on to state that on a 1 Gigabit connection, an expectation of 700 Kpps (thousand packets per second) is the expected rate. However in testing traffic forwarding on this commercial hardware the resulting rates were around 350 K pps and 75 K pps for both Linux and Windows respectively. Also when reaching these rates the CPU availability for running applications was in the single digits, effectively meaning that we can process the packets but the applications that are receiving the data may well be unresponsive. It’s worth noting that the above experiment was also purely UDP forwarding of packets, in the event we would want to inspect the application data itself and make decisions based upon that we would incur even larger performance penalties.

## Software Catches Up

In the years since that paper was written, there has been a huge evolution in the commercial hardware, CPUs have grown horizontally instead of vertically (single CPU core speed growth has all but stopped, and the focus of chip manufacturers has been multiple packaged cores).

- 2015: Intel Core i7-6700 3.4Ghz (4 cores, 4 threads)
- 2017: Intel Core i7-8700 3.2Ghz (6 cores, 12 threads)
- 2019: Intel Core i7-9700 3.0Ghz (8 cores, 8 threads)
- 2021: Intel Core i7-11700 2.5Ghz (8 cores, 16 threads)
- 2023: Intel Core i7-13700 2.1Ghz (16 cores, 24 threads)

\*_data taken from [eatyourbytes.com](https://www.eatyourbytes.com/launchyear/2023/) (and subsequent years)_

It would be a huge disservice to point out that the efficiency of single-core processing also hasn’t hugely increased, however the above is to illustrate that the architecture is changing. The network cards themselves sit on much faster connections to the CPU itself such as PCI-Express, and often come with offloading engines for certain repetitive tasks reducing the load on the CPU (such as a TCP offloading engine).

Additionally, the application architecture has had a huge shift, due to the increase in processing capacity the model typically runs multiple workloads on a single machine either through virtualization or containerisation. This has dramatically increased the amount of east-west traffic both on a single network and actually within a server itself. This leads to a requirement for processing network packets within the server itself; having to push traffic out of the server to an external network device for network reasons here is going to increase the latency for the application.

As mentioned above both the hardware **and** the evolution of the application architecture has pushed the requirement for more localized network processing. However, until relatively recently, this would still be a very inefficient model because processing packets in userland comes with huge performance penalties. For each packet, the kernel will first need to perform its workflow and then it will need to copy that packet to userland, where lower-priority application code can process it and finally return a response, leading to another data copy as the packet transitions into the kernel. For higher performance, we would need to write code that runs inside the kernel where it is largely free of the overhead of user programs etc. However pushing code upstream to the Linux kernel has to go through a rigorous process, and there is no guarantee that it would be accepted. You could potentially manage your copy of a kernel with your network code in and accept the huge amount of technical debt moving forward. Kernel modules are a potential option, but they still come with the overhead and technical debt of managing a continuing stream of new releases and patching for older kernels, not to mention the risk of bugs bringing down the whole server.
For commercial operating systems such as Windows, there are no clear routes to have code added to their kernel.

## Enter eBPF 🐝

The demands of the applications, the improved hardware and the limitations/restrictions of the operating system have been met with the innovation of eBPF. Simply put, eBPF technology allows developers to write code that will run in a sandbox environment inside the kernel. Suddenly this technology allowed developers to write code that runs in a highly efficient and privileged environment and can interact with the network stack with minimal performance penalties.

eBPF allows functions to be attached to specific events within a running Kernel. For networking, we would attach our functions to events such as a network packet being received (_ingress_) or a packet being sent (_egress_). Our eBPF function can then act upon this packet, such as filter it (firewall) or change its destination (_load balancing_) etc.

Originally the eBPF project allowed connectivity through to the Linux Kernel Packet Scheduler (aka TC/Traffic Control), the packets that an eBPF program can see have already been processed by the kernel at this point. However additional functionality exposed by allowing eBPF programs to be attached to XDP (eXpress Data Path) events exposed two huge improvements:

- eBPF programs could interact with packets before the kernel would process them
- eBPF programs can be loaded by the NIC driver (if supported) to run on the NIC itself, effectively offloading various processing activities from both the Kernel and the server CPU itself.

With the innovations from eBPF programs and hooks in the Kernel, we can now start to realize the levels of performance on commercial hardware that before were only available through specific-purpose silicon. An example of this was discussed by the developers of Cilium at [KubeCon North America 2022](https://kccncna2022.sched.com/event/182DB/100gbits-clusters-with-cilium-building-tomorrows-networking-data-plane-daniel-borkmann-nikolay-aleksandrov-isovalent), where they talked about reaching 100Gbit/S with IPv6 clusters.

## Taking eBPF to the next level with Cilium

The Cilium project was the first cloud native network project built exclusively to take advantage of the features and performance of eBPF. Built from the ground up it immediately provided various benefits both in simplicity and in performance around networking. However as the project has grown and adopted additional features from eBPF it now provides unique insights into the network traffic entering, within and exiting your clusters (along with tying it to Kubernetes objects) with the Hubble project.

As Cilium has become the defacto CNI for the majority of Kubernetes clusters, the project has grown and adapted to provide additional functionality such as creating technologies to bridge numerous clusters or to endpoints that exist externally to a Kubernetes cluster, allowing traffic to flow between container workloads and workload outside. Finally taking some of the technologies from the Cilium project itself to replace existing Kubernetes projects to improve performance and scalability as clusters mature and grow.
