---
path: '/blog/2020/10/28/ebpf-summit-day-1'
date: '2020-10-28T16:00:00.000Z'
isPopular: false
title: 'eBPF Summit Day 1 Recap'
categories:
  - Community
tags:
  - eBPF
  - BPF
  - Conference
  - Summit
ogImage: ogimage.png
ogSummary: "The first day of the eBPF Summit is a wrap and it certainly was an amazing
day full of information about eBPF, the technology that is changing the shape
of Linux networking, observability, and performance."
---

# eBPF Summit Day One

The first day of the **[eBPF Summit](https://ebpf.io/summit-2020)** is a wrap and it certainly was an amazing
day full of information about eBPF, the technology that is changing the shape
of Linux networking, observability, and performance.

If you missed the keynote and lightning talks from Day 1 you can **[watch the replay](https://www.youtube.com/watch?v=1GSgyvn4N7E&feature=youtu.beif)**
of the event in its entirety. Individual talks, along with their links,
will be made available within the next week.

Thomas Graf started by greeting attendees with a warm message of "Be kind,
be human." He went on to say that the team expected hundreds of attendees, but
the event turnout far surpassed any original expectations with over 2,200+ registrations
from over 1,100+ different companies.

Thomas then set the stage for the keynote and
lightning talks to follow which would prove to be a very diverse set of topics from a
diverse group of presenters ranging from college graduate students to industry leaders.
Whether you're a newcomer to eBPF or a veteran with years of experience,
there's sure to be something new for you.

Full-length video of the eBPF Summit, day one:

<div style={{ position: 'relative', width: '100%', maxWidth: '1008px', paddingBottom: '56.25%', cursor: 'pointer' }}>
    <iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
        src="https://www.youtube.com/embed/1GSgyvn4N7E?color=white" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
    ></iframe>
</div>

## A Beginner’s Guide to eBPF Programming by Liz Rice (Aqua)

[See on Youtube.](https://www.youtube.com/watch?v=lrSExTfS-iQ)

The opening keynote talk, titled "Beginners Guide to eBPF Programming," was
presented by Liz Rice from Aqua Security. Liz started us off with a brief
explanation of what an eBPF program is, along with explaining the difference
between user and kernel space. She went on to provide an overview of what an eBPF
map is, and how an eBPF program can be triggered based on an event. She then
demonstrated how to easily and quickly build an eBPF program that can print
"Hello, World" based on a kprobe. A kprobe is commonly used for debugging or
monitoring production systems. After showing us how to do this with the bcc
library, Liz then demonstrated how to store this data in an eBPF map, which
creates a more scalable solution, as well as how to retrieve that data from a
user space application. If you are new to eBPF, Liz provided an amazing
introduction in this opening keynote talk.

## BPF as a Fundamentally Better Dataplane by Daniel Borkmann (Isovalent)

[See on Youtube.](https://www.youtube.com/watch?v=Qhm1Zn_BNi4)

Next up, Daniel Borkmann presented a talk titled "BPF as a Fundamentally Better
Dataplane." Daniel started with an overview of eBPF and how it functions as an
execution engine. Daniel cited the improvements that have been
made to the kernel's support for eBPF, including support for eBPF to eBPF functions
calls, bounded loops, global variables, static linking, BTF, and support for up to
1 million instructions per program. All of this allows for solving a lot of
interesting use cases. Daniel also discussed reducing the kernel's attack surface
with eBPF and showed how the workflow to implement an eBPF-based fix can be much
faster and easier to deploy than waiting on a backported kernel from a specific
distribution. He went on to talk about improving kernel scalability and extensibility
with eBPF and how XDP compares to DPDK performance in load balancing and DDoS
mitigation use cases. In addition, he discussed how implementing eBPF-based policy
for containers and Pods can perform better and faster than a traditional firewall.
Then he discussed how an eBPF-based solution can be used in the case of Pod-to-Pod
networking to improve raw performance, as well as in the case of service load balancing
to a backend application. He detailed how recently-merged support for
`bpf_redirect_peer()` and `bpf_redirect_neigh()` can improve Pod-to-Pod connectivity
by eliminating the host stack overhead, resulting in significant performance gains.
Finally, he showed how eBPF can be used to implement bandwidth management, TCP
congestion control, and more.

## Our eBPF Journey at Datadog by Tabitha Sable and Laurent Bernaille (Datadog)

[See on Youtube.](https://www.youtube.com/watch?v=6mTVuZUHLBg)

After a short break, Tabitha Sable and Laurent Bernaille presented "Our eBPF
Journey at Datadog." Datadog runs tens of thousands of hosts, dozens of Kubernetes
clusters, and operates on multiple cloud providers. Their cloud architecture
relies on per-Pod routable IP addresses, ensuring that each cluster is directly
accessible using a unique range. As a result, IP address space management and
cross-cluster discovery become more challenging. Initially, Datadog relied on
various CNI plugins for each provider but there were differences between
providers. Network policy support was lacking in many cases, and there was no
easy way to implement end-to-end encryption. For service load balancing, the
initial design relied on kube-proxy and iptables, however at scale this
overhead became challenging as well. While IPVS was able to alleviate some of
the initial pain, it came with the additional challenges of connection
tracking, not at one but two layers, and IPVS lacked feature parity with iptables.
Inherently, neither solution was designed to be a client-side load balancer,
especially not for Kubernetes. As a result of these requirements, Datadog
selected Cilium as their CNI plugin. With Cilium, Datadog was able to
completely remove kube-proxy and also began enforcing network policies using eBPF.
Cilium was a good fit because it is a universal CNI for multiple cloud providers,
and has the ability to easily enable end-to-end encryption. In addition to looking
at internal traffic, Datadog is also exploring eBPF for network edge filtering,
DDoS mitigation, routing, and even more as they continue to build eBPF into their
own product offerings around security, compliance, and network performance.

## Security Auditing and Enforcement using eBPF by KP Singh (Google)

[See on Youtube.](https://www.youtube.com/watch?v=XFJw37Vwzcc)

Next up, KP Singh from Google presented "Security Auditing and Enforcement using
BPF." His talk focused on his motivations for building Linux Security Modules on
eBPF. In 2019, KP was presented with a request for some audit data which was not
available and his work in this area led him to building an all-new way to do
auditing and enforcement in Linux. Kernel Runtime Security Instrumentation, or
KRSI, is responsible for both monitoring what is taking place on a system along
with the enforcement. Around 200 LSM hooks provide all the data needed for
LSMs to make appropriate decisions. He then showed us the code—or rather,
walked us through an eBPF program line by line. To close, he presented an overview
of new eBPF features recently merged into the kernel, such as eBPF ring buffers,
the `bpf_d_path()` helper, storage blobs aka `bpf_local_storage()`, sleepable
eBPF programs, and boot-time loading. Work on atomic operations is presently in
progress. KP believes that, while eBPF may not replace other LSMs, the two
solutions can peacefully co-exist.

## Lightning Talks

Finally, there was a great selection of lightning talks, each one just 5 minutes
in length but full of useful information for the eBPF community. Here's a quick
list of the presenters and topics:

- Bryce Kahle (Datadog) - [How and When You Should Measure CPU Overhead of eBPF Programs](https://www.youtube.com/watch?v=b0TxKiGMWpI)
- Brandon Cook (Adobe Systems) - [eBPF at Adobe](https://www.youtube.com/watch?v=7UQ2CU6UEGY)
- Andreas Gersmeyer (Red Hat) - [Using BCC and bpftrace with Performance Co-pilot](https://www.youtube.com/watch?v=XmMVhvjmD9I)
- Bradley Whitfield (Capital One) - [Building a Secure and Maintainable PaaS](https://www.youtube.com/watch?v=hwOpCKBaJ-w)
- Lorenzo Fontana (Sysdig) - [Debugging the eBPF Virtual Machine](https://www.youtube.com/watch?v=W6rgaghycFI)
- Jianlin Lv (Arm) - [Enabling eBPF Superpowers on ARM64 with Cilium](https://www.youtube.com/watch?v=Sk_Kn-1pWt8)
- Beatriz Martinez (Isovalent) - [Zero Instrumentation Monitoring with Your First Steps in eBPF](https://www.youtube.com/watch?v=GaY2d8e-gk0)
- Javier Honduvilla Coto (Facebook) - [rbperf: Understanding Ruby with BPF](https://www.youtube.com/watch?v=oeGom1zl0a8)
- Pablo Moncada (MasMovil) - [Scaling a Multi-tenant K8S Cluster in a Telco](https://www.youtube.com/watch?v=JH3pcmhNEHA)
- Jakub Sinicki (Cloudflare) - [Steering Connections to Sockets with BPF Socket Lookup Hooks](https://www.youtube.com/watch?v=vCJ8kDYI8ZE)
- Manali Shukla (Cisco) - [Hardware Breakpoint Implementation in BCC](https://www.youtube.com/watch?v=Nw-tTmxIHUA)
- Sam White (Gitlab) - [Securing Kubernetes Clusters with DevSecOps and Gitlab](https://www.youtube.com/watch?v=kwQ0ooO3UM8)
- Lou Xun (CCP Games) - [Traffic Control the Rabbit(MQ) with Rust using RedBPF](https://www.youtube.com/watch?v=s-Tn-xjUnPE)

Thomas Graf wrapped up the day by thanking all of the presenters as well as the
team working in the background to help support the event and make it a success.
Read on for our coverage of
**[day 2 of the eBPF Summit](/blog/2020/10/29/ebpf-summit-day-2)**.
