---
path: '/blog/2017/9/18/bpf-updates-11'
date: '2017-09-18T18:30:41.000Z'
title: 'BPF Updates 11'
categories:
  - Technology
tags:
  - bpf-updates
  - bpf
ogSummary: 'Linux 4.13 was released last week and net-next closed around the same time. The last `[GIT] Networking` pull request includes a couple of BPF fixes and so do the two after the merge window opened up as well. See the dates for all the details'
---

This is issue 11 of the regular newsletter around BPF written by Alexander Alemayhu. It summarizes ongoing development, presentations, videos and other information related to BPF and XDP. It is released roughly once a week.

---

The highlights since last time are

- New helper functions `bpf_perf_read_counter_time` and `bpf_perf_prog_read_time`.
- Initial BPF assembly support in LLVM.
- LRU map lookup improvements.

Linux 4.13 was released last week and net-next closed around the same time. The last `[GIT] Networking` pull request includes a couple of BPF fixes and so do the two after the merge window opened up as well. See the dates for all the details

- [01 September 2017](https://www.spinics.net/lists/netdev/msg453325.html).
- [05 September 2017](https://www.spinics.net/lists/netdev/msg453873.html).
- [09 September 2017](https://marc.info/?l=linux-netdev&m=150493364601151&w=2).

LLVM [5.0.0](http://lists.llvm.org/pipermail/llvm-dev/2017-September/117136.html) was released. For BPF there is some fixes like improved code generation for certain instructions which can prevent your program from being rejected. Also the latest release of iproute2 [4.13](https://lkml.org/lkml/2017/9/5/547) is worth checking out for the map in map support and the improved error messages for tailcalls.

## Presentations

### Slides

#### [Making the Kernel’s Networking Data Path Programmable with BPF and XDP.](http://schd.ws/hosted_files/ossna2017/da/BPFandXDP.pdf)

Great slides covering the what, why and how on BPF and XDP. Also has an interesting graph on the number of contributions to the BPF subsystem from v4.1 - v4.13+.

### [Cilium - Network security for microservices](https://www.slideshare.net/ThomasGraf5/cilium-network-security-for-microservices)

Updated Cilium slides presented at Open Source Summit North America. Includes new performance numbers around XDP for DDoS mitigation, kernel proxy (kproxy), and socket redirect.

#### [Our Experiences Deploying Kubernetes With IPv6](https://www.slideshare.net/AndrMartins102/our-experiences-deploying-kubernetes-with-i-pv6-79744014/1)

While primarily on Kubernetes and IPv6, this shows how Cilium fits into that picture.

#### [Performance Analysis Superpowers with Linux BPF](http://schd.ws/hosted_files/ossna2017/b8/OSS2017_BPF_superpowers.pdf)

Covering the use cases for BPF with a emphasis on tracing. Several programs shown that utilize BCC. The slide on possible improvements to BCC is interesting.

### Videos

#### [Future:Net 2017 - Layer 7 is the New Layer 4: Cilium – Layer 7 Aware Networking & Security with BPF](https://www.youtube.com/watch?v=k0KQz6JrKXc)

Great talk on the potential of BPF for application level security and more.

#### [Future:Net 2017 - The Rise of Programmable Networks](https://www.youtube.com/watch?v=1o18dGtzWBM)

Nice introduction to BPF with a focus on some of the history of IO Visor and related things.

#### [Future:Net 2017 - The Role of Hardware and IO Processors in the Ongoing Network Transformation](https://www.youtube.com/watch?v=t8iFUng2ID8)

Panel from some of the NIC vendors talking about smartNICs. BPF is mentioned as a option for the dataplane and offloading.

## In case you missed it

#### [Terraform recipes to test Cilium on Kubernetes](http://acalustra.com/terraform-recipes-to-test-cilium-on-kubernetes.html)

Mostly related to Cilium, but there is some introductory information on BPF and XDP.

#### [eBPF, Microservices, Docker, and Cilium: From Novice to Seasoned](http://www.adelzaalouk.me/2017/security-bpf-docker-cillium/)

Introduction to BPF focusing mostly on Cilium. The post also covers parts of the bpf(2) syscall with code from the v4.11 kernel.

#### [An update on gobpf - ELF loading, uprobes, more program types](https://kinvolk.io/blog/2017/09/an-update-on-gobpf---elf-loading-uprobes-more-program-types/)

A look at the progress made in gobpf and how far it's come. Also has some kprobe examples in there.

#### [Linux の BPF : (3) eBPF の基礎](http://mmi.hatenablog.com/entry/2017/09/01/173735)

Introductory post using code from the 4.7 kernel. While some of it is dated, most of it should still apply today, for example the sample code.

#### [Linux の BPF : (4) Clang による eBPF プログラムの作成と，BPF Compiler Collection (BCC)](http://mmi.hatenablog.com/entry/2017/09/03/213612)

Nice post going through some code from the kernel, LLVM, BCC programs and the code generation.

#### [[iovisor-dev] Accessing user memory and minor page faults](https://lists.iovisor.org/pipermail/iovisor-dev/2017-August/001018.html)

Interesting post on tracing experiences.

## [Random cool note](https://twitter.com/diptanu/status/899424568422486016)

> Mind blown by eBPF performance! A simple ingress firewall I wrote using XDP processes 11 million packets/s. Time for more optimizations!

## Patches

- Ingo Molnar, [[PATCH] tools/include: Sync kernel ABI headers with tooling headers](https://patchwork.kernel.org/patch/9950603/)
- Yonghong Song, [[llvm] r313055 - bpf: Add BPF AsmParser support in LLVM](http://llvm.org/viewvc/llvm-project?rev=313055&view=rev)
- Yonghong Song, [[llvm] r312978 - bpf: add " ll" in the `LD_IMM64` asmstring](http://llvm.org/viewvc/llvm-project?rev=312978&view=rev)
- Jesper Dangaard Brouer, [[V3 PATCH net] xdp: implement `xdp_redirect_map` for generic XDP](https://www.mail-archive.com/netdev@vger.kernel.org/msg187772.html)
- Rafael Buchbinder, [[PATCH] extensions: `libxt_bpf`: fix missing `__NR_bpf` declaration](https://www.spinics.net/lists/netfilter-devel/msg49552.html)
- Paul Chaignon, [[iovisor-dev] [PATCH RFC v2] bpf: allow map helpers access to map values directly](https://lists.iovisor.org/pipermail/iovisor-dev/2017-September/001049.html)
- John Fastabend, [[net PATCH 0/3] Fixes for XDP/BPF](https://www.mail-archive.com/netdev@vger.kernel.org/msg187693.html)
  - [[net PATCH 1/3] net: rcu lock and preempt disable missing around generic xdp](https://www.mail-archive.com/netdev@vger.kernel.org/msg187695.html)
  - [[net PATCH 2/3] bpf: add support for sockmap detach programs](https://www.mail-archive.com/netdev@vger.kernel.org/msg187694.html)
  - [[net PATCH 3/3] bpf: devmap, use `cond_resched` instead of `cpu_relax`](https://www.mail-archive.com/netdev@vger.kernel.org/msg187696.html)
- Eric Dumazet, [[PATCH net] tcp: fix a request socket leak](https://www.spinics.net/lists/netdev/msg454379.html)
- Yonghong Song, [[llvm] r312833 - bpf: proper print imm64 expression in inst printer](http://llvm.org/viewvc/llvm-project?view=revision&revision=312833)
- Daniel Borkmann, [[PATCH net] bpf: make error reporting in `bpf_warn_invalid_xdp_action` more clear](https://patchwork.ozlabs.org/patch/811887/)
- Yonghong Song, [[llvm] r312840 - bpf: fix test failures due to previous bpf change of assembly code syntax](http://llvm.org/viewvc/llvm-project?rev=312840&view=rev)
- Thomas Meyer, [[PATCH] selftests/bpf: Make `bpf_util` work on uniprocessor systems](https://patchwork.kernel.org/patch/9943741/)
- Jesper Dangaard Brouer, [[V2 PATCH net-next 0/2] Fixes for `XDP_REDIRECT` map](https://www.mail-archive.com/netdev@vger.kernel.org/msg187410.html)
  - [[V2 PATCH net-next 1/2] xdp: implement `xdp_redirect_map` for generic XDP](https://www.mail-archive.com/netdev@vger.kernel.org/msg187411.html)
  - [[V2 PATCH net-next 2/2] xdp: catch invalid `XDP_REDIRECT` API usage](https://www.mail-archive.com/netdev@vger.kernel.org/msg187412.html)
- Daniel Borkmann, [[PATCH net] bpf: don't select potentially stale ri->map from buggy xdp progs](https://www.spinics.net/lists/netdev/msg454187.html)
- Yonghong Song, [[PATCH net] perf/bpf: fix a clang compilation issue](https://patchwork.ozlabs.org/patch/811279/)
- Jiong Wang, [[PATCH RFC] Add BPF AsmParser support in LLVM](https://www.spinics.net/lists/xdp-newbies/msg00328.html)
- Naresh Kamboju, [[PATCH v2 1/2] selftests: bpf: `test_kmod.sh`: check if module is present in the path before insert](https://patchwork.kernel.org/patch/9941749/)
  - [[PATCH v2 2/2] selftests: bpf: `test_kmod.sh`: use modprobe on target device](https://patchwork.kernel.org/patch/9941747/)
- Jason Wang, [[PATCH net-next 1/2] tun: reserve extra headroom only when XDP is set](https://patchwork.ozlabs.org/patch/809504/)
  - [[PATCH net-next 2/2] tun: rename `generic_xdp` to `skb_xdp`](https://patchwork.ozlabs.org/patch/809503/)
- Eric Dumazet, [[PATCH net-next] bpf: fix numa_node validation](https://patchwork.ozlabs.org/patch/809934/)
- Daniel Borkmann, [[PATCH iproute2 master 0/2] Two minor BPF updates](https://www.spinics.net/lists/netdev/msg453706.html)
  - [[PATCH iproute2 master 1/2] bpf: minor cleanups for `bpf_trace_pipe`](https://www.spinics.net/lists/netdev/msg453707.html)
  - [[PATCH iproute2 master 2/2] bpf: consolidate dumps to use `bpf_dump_prog_info`](https://www.spinics.net/lists/netdev/msg453708.html)
- Joel Fernandes, [[PATCH RFC v3 0/4] Add cross-compilation support to eBPF samples](https://patchwork.ozlabs.org/cover/809345/)
  - [[PATCH RFC v3 1/4] samples/bpf: Use getppid instead of getpgrp for array map stress](https://patchwork.ozlabs.org/patch/809349/)
  - [[PATCH RFC v3 2/4] samples/bpf: Enable cross compiler support](https://patchwork.ozlabs.org/patch/809347/)
  - [[PATCH RFC v3 3/4] samples/bpf: Fix `pt_regs` issues when cross-compiling](https://patchwork.ozlabs.org/patch/809348/)
  - [[PATCH RFC v3 4/4] samples/bpf: Add documentation on cross compilation](https://patchwork.ozlabs.org/patch/809346/)
- Yonghong Song, [[PATCH v2 net-next 0/4] bpf: add two helpers to read perf event enabled/running time](https://www.spinics.net/lists/netdev/msg453393.html)
  - [[PATCH v2 net-next 1/4] bpf: add helper `bpf_perf_read_counter_time` for perf event array map](https://www.spinics.net/lists/netdev/msg453390.html)
  - [[PATCH v2 net-next 2/4] bpf: add a test case to read enabled/running time for perf array](https://www.spinics.net/lists/netdev/msg453392.html)
  - [[PATCH v2 net-next 3/4] bpf: add helper `bpf_perf_prog_read_time`](https://www.spinics.net/lists/netdev/msg453391.html)
  - [[PATCH v2 net-next 4/4] bpf: add a test case for helper `bpf_perf_prog_read_time`](https://www.spinics.net/lists/netdev/msg453394.html)
- John Fastabend, [[net-next PATCH] bpf: sockmap update/simplify memory accounting scheme](https://patchwork.ozlabs.org/patch/808940/)
- Sandipan Das, [[PATCH 1/1] bpf: take advantage of `stack_depth` tracking in powerpc JIT](https://patchwork.ozlabs.org/patch/808943/)
- William Tu, [[iovisor-dev] [PATCH RFC] bpf: add connection tracking helper functions](https://lists.iovisor.org/pipermail/iovisor-dev/2017-September/001023.html)
- David Ahern, [[PATCH net-next] bpf: Collapse offset checks in `sock_filter_is_valid_access`](https://www.spinics.net/lists/netdev/msg453252.html)
- Martin KaFai La, [[PATCH net-next 0/3] bpf: Improve LRU map lookup performance](https://patchwork.ozlabs.org/cover/808532/)
  - [[PATCH net-next 1/3] bpf: Add `lru_hash_lookup` performance test](https://patchwork.ozlabs.org/patch/808535/)
  - [[PATCH net-next 2/3] bpf: Inline LRU map lookup](https://patchwork.ozlabs.org/patch/808533/)
  - [[PATCH net-next 3/3] bpf: Only set node->ref = 1 if it has not been set](https://patchwork.ozlabs.org/patch/808534/)
- David Ahern, [[PATCH v3 net-next 0/7] bpf: Add option to set mark and priority in cgroup sock programs](https://patchwork.ozlabs.org/cover/808436/)
  - [[PATCH v3 net-next 1/7] bpf: Add mark and priority to sock options that can be set](https://patchwork.ozlabs.org/patch/808437/)
  - [[PATCH v3 net-next 2/7] bpf: Allow cgroup sock filters to use `get_current_uid_gid` helper](https://patchwork.ozlabs.org/patch/808441/)
  - [[PATCH v3 net-next 3/7] samples/bpf: Update sock test to allow setting mark and priority](https://patchwork.ozlabs.org/patch/808443/)
  - [[PATCH v3 net-next 4/7] samples/bpf: Add detach option to `test_cgrp2_sock`](https://patchwork.ozlabs.org/patch/808442/)
  - [[PATCH v3 net-next 5/7] samples/bpf: Add option to dump socket settings](https://patchwork.ozlabs.org/patch/808438/)
  - [[PATCH v3 net-next 6/7] samples/bpf: Update cgrp2 socket tests](https://patchwork.ozlabs.org/patch/808440/)
  - [[PATCH v3 net-next 7/7] samples/bpf: Update cgroup socket examples to use uid gid helper](https://patchwork.ozlabs.org/patch/808439/)
- Chenbo Feng, [[PATCH 0/3] Security: add lsm hooks for checking permissions on eBPF objects](https://www.spinics.net/lists/netdev/msg453071.html)
  - [[PATCH 1/3] security: bpf: Add eBPF LSM hooks to security module](https://www.spinics.net/lists/netdev/msg453072.html)
  - [[PATCH 2/3] security: bpf: Add eBPF LSM hooks and security field to eBPF map](https://www.spinics.net/lists/netdev/msg453073.html)
  - [[PATCH 3/3] selinux: bpf: Implement the selinux checks for eBPF object](https://www.spinics.net/lists/netdev/msg453074.html)
- Eric Dumazet, [[PATCH net-next] x86: `bpf_jit`: small optimization in `emit_bpf_tail_call()`](https://www.spinics.net/lists/netdev/msg452960.html)
- Tariq Toukan, [[PATCH net-next] samples/bpf: Fix compilation issue in redirect dummy program](https://patchwork.ozlabs.org/patch/808209/)
- Colin Ian King, [[PATCH][net-next][V3] bpf: `test_maps`: fix typos, "conenct" and "listeen"](https://patchwork.kernel.org/patch/9930285/)
- Phil Sutter, [[iproute PATCH] lib/bpf: Fix bytecode-file parsing](https://patchwork.ozlabs.org/patch/807148/)
- Jesper Dangaard Brouer, [[PATCH net-next 0/7] XDP redirect tracepoints](https://patchwork.ozlabs.org/cover/807122/)
  - [[PATCH net-next 1/7] xdp: remove redundant argument to `trace_xdp_redirect`](https://patchwork.ozlabs.org/patch/807123/)
  - [[PATCH net-next 2/7] xdp: tracepoint `xdp_redirect` also need a map argument](https://patchwork.ozlabs.org/patch/807124/)
  - [[PATCH net-next 3/7] xdp: make xdp tracepoints report bpf prog id instead of `prog_tag`](https://patchwork.ozlabs.org/patch/807125/)
  - [[PATCH net-next 4/7] xdp: separate `xdp_redirect` tracepoint in error case](https://patchwork.ozlabs.org/patch/807126/)
  - [[PATCH net-next 5/7] xdp: separate `xdp_redirect` tracepoint in map case](https://patchwork.ozlabs.org/patch/807127/)
  - [[PATCH net-next 6/7] samples/bpf: `xdp_redirect` load XDP dummy prog on TX device](https://patchwork.ozlabs.org/patch/807128/)
  - [[PATCH net-next 7/7] samples/bpf: `xdp_monitor` tool based on tracepoints](https://patchwork.ozlabs.org/patch/807129/)

Please note that netdev receives a lot of patches and the list above is not meant to be comprehensive.

Happy eBPF hacking! ;)
