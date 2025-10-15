---
path: '/blog/2017/11/20/bpf-updates-13'
date: '2017-11-20T16:32:45.000Z'
title: 'BPF Updates 13'
categories:
  - Technology
tags:
  - bpf
  - bpf-updates
  - ebpf
  - netdev
  - linux-kernel
ogSummary: 'Summary of ongoing BPF and XDP development, presentations, and patches for Linux kernel v4.15.'
---

This is issue 13 of the regular newsletter around BPF written by Alexander Alemayhu. It summarizes ongoing development, presentations, videos and other information related to BPF and XDP. It is released roughly once a week.

---

The v4.15 merge window is open and LWN.net already has a summary on [part 1](https://lwn.net/SubscriberLink/739341/f18f047b49653547/) out. Which contains a BPF section listing some of the new things:

> BPF
>
> The user-space bpftool utility can be used to examine and manipulate BPF programs and maps; see this man page for more information.
>
> Hooks have been added to allow security modules to control access to BPF objects; see this changelog for more information.
>
> A new BPF-based device controller has been added; it uses the version-2 control-group interface. Documentation for this feature is entirely absent, but one can look at the sample program added in this commit that uses it.

The highlights since last time

- New helper function `bpf_getsockops` to retrieve socket options. supports `TCP_CONGESTION` for now. The new `BPF_SOCK_OPS_BASE_RTT` feature significantly improves TCP-NV.
- It is now possible to attach multiple programs to tracepoint / kprobes / uprobes. The programs will run in sequence. With the change for trace points one application does not exclude others from attaching to the same call.

More interesting topics

- New helper function `bpf_override_function` under discussion to allow for error injection via kprobes.
- BPF runtime finally gets a [FAQ section](https://git.kernel.org/pub/scm/linux/kernel/git/davem/net-next.git/tree/Documentation/bpf/bpf_design_QA.txt) in the kernel's documentation directory.
- bpftool gets support for dumping JSON.

## Presentations

#### [Cilium - Kernel Native Security & DDOS Mitigation for Microservices with BPF](https://dockercon.docker.com/watch/8RL2xBhXdhwz2NFCbVZzdF)

The slides of Cynthia's talk were already in the [last issue](https://www.cilium.io/blog/2017/10/24/bpf-updates-12). Docker has since published the recording as well, definitely worth watching the recording. Fun talk on Cilium, BPF, and Kafka.

#### [Linux Networking Development](http://vger.kernel.org/~davem/Seoul_NIPA_2017/Seoul_NIPA_2017_part1.pdf)

Focusing on development areas in the kernel. Also some advice in there for aspiring kernel developers. ;-)

#### [XDP: The Future of Networks](http://vger.kernel.org/~davem/Seoul_NIPA_2017/Seoul_NIPA_2017_part2.pdf)

Great introduction to BPF and XDP. With some myth busting and potential improvements.

#### [A Gentle Introduction to [e]BPF - Michael Schubert, Kinvolk GmbH](https://schd.ws/hosted_files/osseu17/7e/a-gentle-introduction-to-ebpf.pdf)

Good introduction to BPF. Also nice that it shows the structures, links to some tools and verifier.

#### [LISA 17 - Fast and Safe Production Monitoring of JVM Applications with BPF Magic](https://www.dropbox.com/s/99594woy145d34n/JVM-BPF.pptx?dl=0)

Focusing on the tracing case with Java but the approaches could still be applied to other environments.

#### [LISA17 Container Performance Analysis](https://www.slideshare.net/brendangregg/lisa17-container-performance-analysis)

Goes through some of the tools used at Netflix and a lot of other smaller tools for tracing. The emphasis on identifying the bottlenecks sounds good.

#### [LISA17 Linux Performance Monitoring With BPF](https://www.dropbox.com/s/9syrh64qaxzz4pz/BPF-workshop.pptx?dl=0)

Lab session for tracing tools with BCC. This is useful for learning about tracing on Linux. It also answers basic question what is tracepoints, kprobes, uprobes, etc. and what are some of the limitations to dynamic tracing. Looks like a lot of fun.

#### [XDP – eXpress Data Path An in-kernel network fast-path A technology overview](http://people.netfilter.org/hawk/presentations/driving-IT2017/driving-IT-2017_XDP_eBPF_technology_Jesper_Brouer.pdf)

Great introduction to BPF and XDP. Also explains the problems and why it is needed.

## In case you missed it

#### [Reports from Netconf and Netdev](https://lwn.net/Articles/738912/)

LWN.net coverage of the discussions from netconf and all the talks from netdev. All lot of interesting BPF topics in there. Check it out!

#### [security things in Linux v4.14](https://outflux.net/blog/archives/2017/11/14/security-things-in-linux-v4-14/)

The security summary contains a section eBPF JIT 32-bit ARM support and seccomp improvements.

#### [SystemTap 3.2 release](https://www.mail-archive.com/linux-kernel@vger.kernel.org/msg1516567.html)

SystemTap now has an experimental eBPF backend.

#### [Another attempt to address the tracepoint ABI problem](https://lwn.net/SubscriberLink/737530/6321597a8a64352e/)

Steven Rostedt proposes different scheme where tracepoints are placed but no trace event. Then on userspace a kernel module have to be loaded and there would be no need to add this to the kernel ABI. Will moving the ABI to a module really solve this problem?

#### [Using eBPF and XDP in Suricata](https://lwn.net/SubscriberLink/737771/4862652df9170712/)

LWN.net coverage of Eric Leblond's talk from Kernel Recipes. The recording was already in the [last issue](https://www.cilium.io/blog/2017/10/24/bpf-updates-12).

## Projects

#### [awesome-ebpf](https://github.com/zoidbergwill/awesome-ebpf)

> A curated list of awesome projects related to eBPF

#### [k8s-snowflake](https://github.com/jessfraz/k8s-snowflake)

> Configs and scripts for bootstrapping an opinionated Kubernetes cluster anywhere.

#### [libseccomp](https://github.com/seccomp/libseccomp)

> The libseccomp library provides an easy to use, platform independent, interface to the Linux Kernel's syscall filtering mechanism. The libseccomp API is designed to abstract away the underlying BPF based syscall filter language and present a more conventional function-call based filtering interface that should be familiar to, and easily adopted by, application developers.

#### [cbpf-rust](https://github.com/mmisono/rust-cbpf)

> Userspace cBPF interpreter and cBPF to eBPF converter

#### [vltrace](https://github.com/pmem/vltrace)

> vltrace is a syscall tracing tool which utilizes eBPF - an efficient tracing feature of the Linux kernel.

## [Random cool note](https://twitter.com/bmatheny/status/924022314177409025)

> We blew way past 7Mpps with UDP+XDP. I’m sure you know that already though :)

## Patches

Please note that netdev and llvm-commits receive a lot of patches and the list below is not meant to be comprehensive.

#### LLVM

- Alexei Starovoitov, [[llvm] r318615 - [bpf] remove unused variable](http://llvm.org/viewvc/llvm-project?rev=318615&view=rev)
- Alexei Starovoitov, [[llvm] r318614 - [bpf] allow direct and indirect calls](http://llvm.org/viewvc/llvm-project?rev=318614&view=rev)
- Yonghong Song, [[llvm] r318358 - bpf: enable llvm-objdump to print out symbolized jmp target](http://llvm.org/viewvc/llvm-project?rev=318358&view=rev)
- Yonghong Song, [[llvm] r318442 - bpf: print backward branch target properly](http://llvm.org/viewvc/llvm-project?rev=318442&view=rev)
- Yonghong Song, [[llvm] r316469 - bpf: fix a bug in bpf-isel trunc-op optimization](http://llvm.org/viewvc/llvm-project?rev=316469&view=rev)
- Yonghong Song, [[llvm] r316519 - bpf: fix an uninitialized variable issue](http://llvm.org/viewvc/llvm-project?rev=316519&view=rev)
- Yonghong Song, [[llvm] r316481 - bpf: fix a bug in trunc-op optimization](http://llvm.org/viewvc/llvm-project?rev=316481&view=rev)

#### netdev

- Jakub Kicinski, [[PATCH net 00/10] bpf: offload: check netdev pointer in the drivers and namespace trouble](https://patchwork.ozlabs.org/cover/839433/)
  - [[PATCH net 01/10] bpf: offload: add comment warning developers about double destroy](https://patchwork.ozlabs.org/patch/839423/)
  - [[PATCH net 02/10] bpf: offload: limit offload to `cls_bpf` and xdp programs only](https://patchwork.ozlabs.org/patch/839424/)
  - [[PATCH net 03/10] bpf: offload: rename the ifindex field](https://patchwork.ozlabs.org/patch/839432/)
  - [[PATCH net 04/10] bpf: offload: move offload device validation out to the drivers](https://patchwork.ozlabs.org/patch/839431/)
  - [[PATCH net 05/10] net: xdp: don't allow device-bound programs in driver mode](https://patchwork.ozlabs.org/patch/839425/)
  - [[PATCH net 06/10] bpf: turn `bpf_prog_get_type()` into a wrapper](https://patchwork.ozlabs.org/patch/839430/)
  - [[PATCH net 07/10] bpf: offload: ignore namespace moves](https://patchwork.ozlabs.org/patch/839429/)
  - [[PATCH net 08/10] bpftool: revert printing program device bound info](https://patchwork.ozlabs.org/patch/839428/)
  - [[PATCH net 09/10] bpf: revert report offload info to user space](https://patchwork.ozlabs.org/patch/839427/)
  - [[PATCH net 10/10] bpf: make `bpf_prog_offload_verifier_prep()` static inline](https://patchwork.ozlabs.org/patch/839426/)
- Song Liu, [[RFC v2 0/6] enable creating [k,u]probe with `perf_event_open`](https://patchwork.ozlabs.org/cover/837299/)
  - [[RFC v2 1/6] perf: Add new type `PERF_TYPE_PROBE`](https://patchwork.ozlabs.org/patch/837302/)
  - [[RFC v2 2/6] perf: copy new perf_event.h to tools/include/uapi](https://patchwork.ozlabs.org/patch/837306/)
  - [[RFC v2 3/6] perf: implement kprobe support to `PERF_TYPE_PROBE`](https://patchwork.ozlabs.org/patch/837301/)
  - [[RFC v2 4/6] perf: implement uprobe support to `PERF_TYPE_PROBE`](https://patchwork.ozlabs.org/patch/837307/)
  - [[RFC v2 5/6] bpf: add option for `bpf_load.c` to use `PERF_TYPE_PROBE`](https://patchwork.ozlabs.org/patch/837303/)
  - [[RFC v2 6/6] bpf: add new test `test_many_kprobe`](https://patchwork.ozlabs.org/patch/837304/)
  - [[RFC] bcc: Try use new API to create [k,u]probe with `perf_event_open`](https://patchwork.ozlabs.org/patch/837305/)
  - [[RFC] `perf_event_open.2`: add new type `PERF_TYPE_PROBE`](https://patchwork.ozlabs.org/patch/837300/)
- Yonghong Song, [[PATCH net-next 0/3 v3] bpf: improve verifier `ARG_CONST_SIZE_OR_ZERO` semantics](https://patchwork.ozlabs.org/cover/837288/)
  - [[PATCH net-next 1/3 v3] bpf: improve verifier `ARG_CONST_SIZE_OR_ZERO` semantics](https://patchwork.ozlabs.org/patch/837287/)
  - [[PATCH net-next 2/3 v3] bpf: change helper `bpf_probe_read` arg2 type to `ARG_CONST_SIZE_OR_ZERO`](https://patchwork.ozlabs.org/patch/837290/)
  - [[PATCH net-next 3/3 v3] bpf: fix and add test cases for `ARG_CONST_SIZE_OR_ZERO` semantics change](https://patchwork.ozlabs.org/patch/837289/)
- Lawrence Brakmo, [[PATCH net-next v2 0/6] bpf: Fix bugs in sock_ops samples](https://patchwork.ozlabs.org/cover/836997/)
  - [[PATCH net-next v2 1/6] bpf: Fix `tcp_synrto_kern.c` sample program](https://patchwork.ozlabs.org/patch/836992/)
  - [[PATCH net-next v2 2/6] bpf: Fix `tcp_rwnd_kern.c` sample program](https://patchwork.ozlabs.org/patch/836993/)
  - [[PATCH net-next v2 3/6] bpf: Fix `tcp_bufs_kern.c` sample program](https://patchwork.ozlabs.org/patch/836996/)
  - [[PATCH net-next v2 4/6] bpf: Fix `tcp_cong_kern.c` sample program](https://patchwork.ozlabs.org/patch/836991/)
  - [[PATCH net-next v2 5/6] bpf: Fix `tcp_iw_kern.c` sample program](https://patchwork.ozlabs.org/patch/836995/)
  - [[PATCH net-next v2 6/6] bpf: Fix `tcp_clamp_kern.c` sample program](https://patchwork.ozlabs.org/patch/836994/)
- Prashant Bhole, [[PATCH net-next V4 0/3] tools: bpftool: show filenames of pinned objects](https://patchwork.ozlabs.org/cover/835588/)
  - [[PATCH net-next V4 1/3] tools: bpftool: open pinned object without type check](https://patchwork.ozlabs.org/patch/835589/)
  - [[PATCH net-next V4 2/3] tools: bpftool: show filenames of pinned objects](https://patchwork.ozlabs.org/patch/835590/)
  - [[PATCH net-next V4 3/3] tools: bpftool: optionally show filenames of pinned objects](https://patchwork.ozlabs.org/patch/835591/)
- Jakub Kicinski, [[PATCH net-next v2 00/15] bpf: add offload as a first class citizen](https://patchwork.ozlabs.org/cover/834089/)
  - [[PATCH net-next v2 01/15] net: bpf: rename `ndo_xdp` to ndo_bpf](https://patchwork.ozlabs.org/patch/834103/)
  - [[PATCH net-next v2 02/15] bpf: offload: add infrastructure for loading programs for a specific netdev](https://patchwork.ozlabs.org/patch/834100/)
  - [[PATCH net-next v2 03/15] bpf: report offload info to user space](https://patchwork.ozlabs.org/patch/834104/)
  - [[PATCH net-next v2 04/15] bpftool: print program device bound info](https://patchwork.ozlabs.org/patch/834090/)
  - [[PATCH net-next v2 05/15] xdp: allow attaching programs loaded for specific device](https://patchwork.ozlabs.org/patch/834101/)
  - [[PATCH net-next v2 06/15] `cls_bpf`: allow attaching programs loaded for specific device](https://patchwork.ozlabs.org/patch/834102/)
  - [[PATCH net-next v2 07/15] nfp: bpf: drop support for `cls_bpf` with legacy actions](https://patchwork.ozlabs.org/patch/834095/)
  - [[PATCH net-next v2 08/15] nfp: bpf: remove the register renumbering leftovers](https://patchwork.ozlabs.org/patch/834096/)
  - [[PATCH net-next v2 09/15] nfp: bpf: remove unnecessary include of nfp_net.h](https://patchwork.ozlabs.org/patch/834098/)
  - [[PATCH net-next v2 10/15] nfp: bpf: refactor offload logic](https://patchwork.ozlabs.org/patch/834099/)
  - [[PATCH net-next v2 11/15] nfp: bpf: require seamless reload for program replace](https://patchwork.ozlabs.org/patch/834093/)
  - [[PATCH net-next v2 12/15] nfp: bpf: move program prepare and free into offload.c](https://patchwork.ozlabs.org/patch/834097/)
  - [[PATCH net-next v2 13/15] nfp: bpf: move translation prepare to offload.c](https://patchwork.ozlabs.org/patch/834091/)
  - [[PATCH net-next v2 14/15] nfp: bpf: move to new BPF program offload infrastructure](https://patchwork.ozlabs.org/patch/834094/)
  - [[PATCH net-next v2 15/15] bpf: remove old offload/analyzer](https://patchwork.ozlabs.org/patch/834092/)
- Christina Jacob, [[PATCH v4 0/1] XDP program for ip forward](https://patchwork.ozlabs.org/cover/834242/)
  - [[PATCH v4 1/1] xdp: Sample xdp program implementing ip forward](https://patchwork.ozlabs.org/patch/834241/)
- Dan Carpenter, [[PATCH net-next] xdp: sample: Missing curly braces in read_route()](https://patchwork.ozlabs.org/patch/837684/)
- Josef Bacik, [[PATCH 0/4] [v6] Add the ability to do BPF directed error injection](https://lkml.org/lkml/2017/11/17/446)
  - [[PATCH 1/4] add infrastructure for tagging functions as error injectable](https://lkml.org/lkml/2017/11/17/448)
  - [[PATCH 2/4] btrfs: make open_ctree error injectable](https://lkml.org/lkml/2017/11/17/449)
  - [[PATCH 3/4] bpf: add a `bpf_override_function` helper](https://lkml.org/lkml/2017/11/17/447)
  - [[PATCH 4/4] samples/bpf: add a test for `bpf_override_return`](https://lkml.org/lkml/2017/11/17/450)
- Lawrence Brakmo, [[PATCH net-next] bpf: Rename `tcp_bbf.readme` to `tcp_bpf.readme`](https://patchwork.ozlabs.org/patch/834432/)
- Sandipan Das, [[RFC PATCH] bpf: Add helpers to read useful `task_struct` members](https://patchwork.kernel.org/patch/10039583/)
- Roman Gushchin, [[PATCH v3 net-next 0/5] eBPF-based device cgroup controller](https://www.spinics.net/lists/netdev/msg465071.html)
  - [[PATCH v3 net-next 1/5] `device_cgroup`: add `DEVCG_` prefix to `ACC_*` and `DEV_*` constants](https://www.spinics.net/lists/netdev/msg465066.html)
  - [[PATCH v3 net-next 2/5] `device_cgroup`: prepare code for bpf-based device controller](https://www.spinics.net/lists/netdev/msg465070.html)
  - [[PATCH v3 net-next 3/5] bpf, cgroup: implement eBPF-based device controller for cgroup v2](https://www.spinics.net/lists/netdev/msg465072.html)
  - [[PATCH v3 net-next 4/5] bpf: move `cgroup_helpers` from samples/bpf/ to tools/testing/selftesting/bpf/](https://www.spinics.net/lists/netdev/msg465067.html)
  - [[PATCH v3 net-next 5/5] selftests/bpf: add a test for device cgroup controller](https://www.spinics.net/lists/netdev/msg465069.html)
- Jakub Kicinski, [[PATCH net-next] tools: bpftool: move `p_err()` and `p_info()` from main.h to common.c](https://www.mail-archive.com/netdev@vger.kernel.org/msg198226.html)
- Colin King, [[PATCH net-next] net: sched: `cls_bpf`: use bitwise & rather than logical && on `gen_flags`](https://patchwork.kernel.org/patch/10039257/)
- Craig Gallek, [[PATCH] [net-next v2] bpf: fix verifier NULL pointer dereference](https://patchwork.ozlabs.org/patch/833404/)
- Arnd Bergmann, [[PATCH 1/2] [net-next] bpf: fix link error without CONFIG_NET](https://patchwork.kernel.org/patch/10038423/)
  - [[PATCH 2/2] [net-next] bpf: fix out-of-bounds access warning in bpf_check](https://patchwork.kernel.org/patch/10038425/)
- Eric Dumazet, [[PATCH net] bpf: fix lockdep splat](https://www.spinics.net/lists/netdev/msg467241.html)
- Prashant Bhole, [tools: bpf: handle long path in jit disasm](https://patchwork.ozlabs.org/patch/833248/)
- Jakub Kicinski, [[PATCH net-next 0/8] nfp: TC block fixes, app fallback and dev_alloc()](https://patchwork.ozlabs.org/cover/833250/)
  - [[PATCH net-next 1/8] nfp: flower: app should use struct nfp_repr](https://patchwork.ozlabs.org/patch/833257/)
  - [[PATCH net-next 2/8] nfp: flower: vxlan - ensure no sleep in atomic context](https://patchwork.ozlabs.org/patch/833258/)
  - [[PATCH net-next 3/8] nfp: bpf: reject TC offload if XDP loaded](https://patchwork.ozlabs.org/patch/833255/)
  - [[PATCH net-next 4/8] nfp: reorganize the app table](https://patchwork.ozlabs.org/patch/833256/)
  - [[PATCH net-next 5/8] nfp: bpf: fall back to core NIC app if BPF not selected](https://patchwork.ozlabs.org/patch/833251/)
  - [[PATCH net-next 6/8] nfp: switch to `dev_alloc_page()`](https://patchwork.ozlabs.org/patch/833252/)
  - [[PATCH net-next 7/8] nfp: use a counter instead of log message for allocation failures](https://patchwork.ozlabs.org/patch/833253/)
  - [[PATCH net-next 8/8] nfp: improve defines for constants in ethtool](https://patchwork.ozlabs.org/patch/833254/)
- Daniel Borkmann, [[PATCH net-next 0/3] BPF range marking improvements for meta data](https://patchwork.ozlabs.org/cover/833134/)
  - [[PATCH net-next 1/3] bpf: minor cleanups after merge](https://patchwork.ozlabs.org/patch/833132/)
  - [[PATCH net-next 2/3] bpf: also improve pattern matches for meta access](https://patchwork.ozlabs.org/patch/833135/)
  - [[PATCH net-next 3/3] bpf: add test cases to bpf selftests to cover all meta tests](https://patchwork.ozlabs.org/patch/833133/)
- Jakub Kicinski, [[PATCH net-next] security: bpf: replace include of linux/bpf.h with forward declarations](https://patchwork.ozlabs.org/patch/833083/)
- Jakub Kicinski, [[PATCH net-next 0/2] nfp: bpf: rename `ALU_OP_NEG` and support `BPF_NEG`](https://patchwork.ozlabs.org/cover/833059/)
  - [[PATCH net-next 1/2] nfp: bpf: rename `ALU_OP_NEG` to `ALU_OP_NOT`](https://patchwork.ozlabs.org/patch/833058/)
  - [[PATCH net-next 2/2] nfp: bpf: support [`BPF_ALU` | `BPF_ALU64`] | `BPF_NEG`](https://patchwork.ozlabs.org/patch/833060/)
- Jesper Dangaard Brouer, [[net-next PATCH] bpf: cpumap micro-optimization in `cpu_map_enqueue`](https://www.spinics.net/lists/netdev/msg464218.html)
- Alexei Starovoitov, [[PATCH net-next] bpf: fix verifier memory leaks](https://patchwork.ozlabs.org/patch/832855/)
- John Fastabend, [[net PATCH] bpf: remove SK_REDIRECT from UAPI](https://www.spinics.net/lists/netdev/msg464135.html)
- Alexei Starovoitov, [[PATCH v2 net-next] bpf: reduce verifier memory consumption](https://patchwork.ozlabs.org/patch/832800/)
- Jakub Kicinski, [[RFC] net: dummy: add BPF offload callbacks for test purposes](https://patchwork.ozlabs.org/patch/832821/)
- Björn Töpel, [[RFC PATCH 00/14] Introducing AF_PACKET V4 support](https://www.mail-archive.com/netdev@vger.kernel.org/msg197187.html)
  - [[RFC PATCH 01/14] packet: introduce AF_PACKET V4 userspace API](https://www.mail-archive.com/netdev@vger.kernel.org/msg197191.html)
  - [[RFC PATCH 02/14] packet: implement PACKET_MEMREG setsockopt](https://www.mail-archive.com/netdev@vger.kernel.org/msg197188.html)
  - [[RFC PATCH 03/14] packet: enable AF_PACKET V4 rings](https://www.mail-archive.com/netdev@vger.kernel.org/msg197201.html)
  - [[RFC PATCH 04/14] packet: enable Rx for AF_PACKET V4](https://www.mail-archive.com/netdev@vger.kernel.org/msg197190.html)
  - [[RFC PATCH 05/14] packet: enable Tx support for AF_PACKET V4](https://www.mail-archive.com/netdev@vger.kernel.org/msg197189.html)
  - [[RFC PATCH 06/14] netdevice: add AF_PACKET V4 zerocopy ops](https://www.mail-archive.com/netdev@vger.kernel.org/msg197192.html)
  - [[RFC PATCH 07/14] packet: wire up zerocopy for AF_PACKET V4](https://www.mail-archive.com/netdev@vger.kernel.org/msg197197.html)
  - [[RFC PATCH 08/14] i40e: `AF_PACKET` V4 `ndo_tp4_zerocopy` Rx support](https://www.mail-archive.com/netdev@vger.kernel.org/msg197196.html)
  - [[RFC PATCH 09/14] i40e: `AF_PACKET` V4 `ndo_tp4_zerocopy` Tx support](https://www.mail-archive.com/netdev@vger.kernel.org/msg197194.html)
  - [[RFC PATCH 10/14] samples/tpacket4: added tpbench](https://www.mail-archive.com/netdev@vger.kernel.org/msg197195.html)
  - [[RFC PATCH 11/14] veth: added support for PACKET_ZEROCOPY](https://www.mail-archive.com/netdev@vger.kernel.org/msg197193.html)
  - [[RFC PATCH 12/14] samples/tpacket4: added veth support](https://www.mail-archive.com/netdev@vger.kernel.org/msg197199.html)
  - [[RFC PATCH 13/14] i40e: added XDP support for TP4 enabled queue pairs](https://www.mail-archive.com/netdev@vger.kernel.org/msg197198.html)
  - [[RFC PATCH 14/14] xdp: introducing `XDP_PASS_TO_KERNEL` for `PACKET_ZEROCOPY` use](https://www.mail-archive.com/netdev@vger.kernel.org/msg197200.html)
- Jason Wang, [[PATCH net-next V2 0/3] support changing steering policies in tuntap](https://patchwork.ozlabs.org/cover/832326/)
  - [[PATCH net-next V2 1/3] tun: abstract flow steering logic](https://patchwork.ozlabs.org/patch/832325/)
  - [[PATCH net-next V2 2/3] tun: introduce ioctls to set and get steering policies](https://patchwork.ozlabs.org/patch/832324/)
  - [[PATCH net-next V2 3/3] tun: add eBPF based queue selection method](https://patchwork.ozlabs.org/patch/832323/)
- Alexei Starovoitov, [[PATCH net-next] bpf: document answers to common questions about BPF](https://patchwork.ozlabs.org/patch/832218/)
- Alexei Starovoitov, [[PATCH net-next] bpf: reduce verifier memory consumption](https://www.spinics.net/lists/netdev/msg463754.html)
- Yonghong Song, [[PATCH net-next] bpf: avoid `rcu_dereference` inside `bpf_event_mutex` lock region](https://patchwork.ozlabs.org/patch/832161/)
- Alexei Starovoitov, [[PATCH net-next] selftests/bpf: remove useless `bpf_trace_printk`](https://patchwork.ozlabs.org/patch/831658/)
- Tushar Dave, [[PATCH net-next] samples/bpf: adjust rlimit `RLIMIT_MEMLOCK` for `xdp_redirect_map`](https://patchwork.ozlabs.org/patch/831562/)
- Tushar Dave, [[PATCH net-next] samples/bpf: adjust rlimit `RLIMIT_MEMLOCK` for xdp1](https://patchwork.ozlabs.org/patch/831544/)
- John Fastabend, [[net PATCH 0/2] sockmap fixes](https://www.mail-archive.com/netdev@vger.kernel.org/msg196615.html)
  - [[net PATCH 1/2] bpf: `bpf_compute_data` uses incorrect cb structure](https://www.mail-archive.com/netdev@vger.kernel.org/msg196614.html)
  - [[net PATCH 2/2] bpf: rename sk_actions to align with bpf infrastructure](https://www.mail-archive.com/netdev@vger.kernel.org/msg196616.html)
- Quentin Monnet, [[PATCH net-next] tools: bpftool: add bash completion for bpftool](https://www.mail-archive.com/linux-kernel@vger.kernel.org/msg1522706.html)
- Gianluca Borello, [[PATCH net-next] bpf: remove `tail_call` and `get_stackid` helper declarations from bpf.h](https://www.spinics.net/lists/netdev/msg462765.html)
- Chenbo Feng, [[PATCH net-next v7 0/5] bpf: security: New file mode and LSM hooks for eBPF object permission control](https://patchwork.ozlabs.org/cover/827794/)
  - [[PATCH net-next v7 1/5] bpf: Add file mode configuration into bpf maps](https://patchwork.ozlabs.org/patch/827795/)
  - [[PATCH net-next v7 2/5] bpf: Add tests for eBPF file mode](https://patchwork.ozlabs.org/patch/827799/)
  - [[PATCH net-next v7 3/5] security: bpf: Add LSM hooks for bpf object related syscall](https://patchwork.ozlabs.org/patch/827796/)
  - [[PATCH net-next v7 4/5] selinux: bpf: Add selinux check for eBPF syscall operations](https://patchwork.ozlabs.org/patch/827797/)
  - [[PATCH net-next v7 5/5] selinux: bpf: Add addtional check for bpf object file receive](https://patchwork.ozlabs.org/patch/827798/)
- Jakub Kicinski, [[PATCH net-next 00/12] tools: bpftool: Add JSON output to bpftool](https://patchwork.ozlabs.org/cover/829394/)
  - [[PATCH net-next 01/12] tools: bpftool: copy JSON writer from iproute2 repository](https://patchwork.ozlabs.org/patch/829395/)
  - [[PATCH net-next 02/12] tools: bpftool: add option parsing to bpftool, --help and --version](https://patchwork.ozlabs.org/patch/829396/)
  - [[PATCH net-next 03/12] tools: bpftool: introduce --json and --pretty options](https://patchwork.ozlabs.org/patch/829407/)
  - [[PATCH net-next 04/12] tools: bpftool: add JSON output for `bpftool prog show *` command](https://patchwork.ozlabs.org/patch/829406/)
  - [[PATCH net-next 05/12] tools: bpftool: add JSON output for `bpftool prog dump jited *` command](https://patchwork.ozlabs.org/patch/829397/)
  - [[PATCH net-next 06/12] tools: bpftool: add JSON output for `bpftool prog dump xlated *` command](https://patchwork.ozlabs.org/patch/829401/)
  - [[PATCH net-next 07/12] tools: bpftool: add JSON output for `bpftool map *` commands](https://patchwork.ozlabs.org/patch/829402/)
  - [[PATCH net-next 08/12] tools: bpftool: add JSON output for `bpftool batch file FILE` command](https://patchwork.ozlabs.org/patch/829403/)
  - [[PATCH net-next 09/12] tools: bpftool: turn err() and info() macros into functions](https://patchwork.ozlabs.org/patch/829404/)
  - [[PATCH net-next 10/12] tools: bpftool: provide JSON output for all possible commands](https://patchwork.ozlabs.org/patch/829399/)
  - [[PATCH net-next 11/12] tools: bpftool: add cosmetic changes for the manual pages](https://patchwork.ozlabs.org/patch/829398/)
  - [[PATCH net-next 12/12] tools: bpftool: update documentation for --json and --pretty usage](https://patchwork.ozlabs.org/patch/829400/)
- Jakub Kicinski, [[PATCH net-next 0/8] tools: bpftool: add a "version" command, and fix several items](https://patchwork.ozlabs.org/cover/828402/)
  - [[PATCH net-next 1/8] tools: bpftool: add pointer to file argument to `print_hex()`](https://patchwork.ozlabs.org/patch/828394/)
  - [[PATCH net-next 2/8] tools: bpftool: fix return value when all eBPF programs have been shown](https://patchwork.ozlabs.org/patch/828395/)
  - [[PATCH net-next 3/8] tools: bpftool: use err() instead of info() if there are too many insns](https://patchwork.ozlabs.org/patch/828400/)
  - [[PATCH net-next 4/8] tools: bpftool: add `bpftool prog help` as real command i.r.t exit code](https://patchwork.ozlabs.org/patch/828401/)
  - [[PATCH net-next 5/8] tools: bpftool: print only one error message on byte parsing failure](https://patchwork.ozlabs.org/patch/828396/)
  - [[PATCH net-next 6/8] tools: bpftool: print all relevant byte opcodes for "load double word"](https://patchwork.ozlabs.org/patch/828397/)
  - [[PATCH net-next 7/8] tools: bpftool: show that `opcodes` or `file FILE` should be exclusive](https://patchwork.ozlabs.org/patch/828398/)
  - [[PATCH net-next 8/8] tools: bpftool: add a command to display bpftool version](https://patchwork.ozlabs.org/patch/828399/)
- Lawrence Brakmo, [[PATCH net-next 0/5] bpf: add support for `BASE_RTT`](https://patchwork.ozlabs.org/cover/828757/)
  - [[PATCH net-next 1/5] bpf: add support for `BPF_SOCK_OPS_BASE_RTT`](https://patchwork.ozlabs.org/patch/828760/)
  - [[PATCH net-next 2/5] bpf: Adding helper function `bpf_getsockops`](https://patchwork.ozlabs.org/patch/828759/)
  - [[PATCH net-next 3/5] bpf: Add `BPF_SOCKET_OPS_BASE_RTT` support to `tcp_nv`](https://patchwork.ozlabs.org/patch/828758/)
  - [[PATCH net-next 4/5] bpf: sample `BPF_SOCKET_OPS_BASE_RTT` program](https://patchwork.ozlabs.org/patch/828761/)
  - [[PATCH net-next 5/5] bpf: create samples/bpf/tcp_bpf.readme](https://patchwork.ozlabs.org/patch/828756/)
- John Fastabend, [[net PATCH 0/5] sockmap fixes for net](https://www.spinics.net/lists/netdev/msg461277.html)
  - [[net PATCH 1/5] bpf: enforce TCP only support for sockmap](https://www.spinics.net/lists/netdev/msg461278.html)
  - [[net PATCH 2/5] bpf: avoid preempt enable/disable in sockmap using `tcp_skb_cb` region](https://www.spinics.net/lists/netdev/msg461279.html)
  - [[net PATCH 3/5] bpf: remove mark access for SK_SKB program types](https://www.spinics.net/lists/netdev/msg461280.html)
  - [[net PATCH 4/5] bpf: require `CAP_NET_ADMIN` when using sockmap maps](https://www.spinics.net/lists/netdev/msg461281.html)
  - [[net PATCH 5/5] bpf: require `CAP_NET_ADMIN` when using devmap](https://www.spinics.net/lists/netdev/msg461282.html)
- Daniel Borkmann, [[PATCH net 0/3] Two BPF fixes for range marking](https://patchwork.ozlabs.org/cover/828901/)
  - [[PATCH net 1/3] bpf: fix off by one for range markings with L{'{'}T,E} patterns](https://patchwork.ozlabs.org/patch/828899/)
  - [[PATCH net 2/3] bpf: fix pattern matches for direct packet access](https://patchwork.ozlabs.org/patch/828902/)
  - [[PATCH net 3/3] bpf: add test cases to bpf selftests to cover all access tests](https://patchwork.ozlabs.org/patch/828900/)
- Jesper Dangaard Brouer, [[net-next PATCH] bpf: cpumap fix potential lost wake-up problem](https://patchwork.ozlabs.org/patch/829524/)
- Jakub Kicinski, [[PATCH net-next 0/9] nfp: bpf: stack support in offload](https://patchwork.ozlabs.org/cover/829570/)
  - [[PATCH net-next 1/9] nfp: bpf: add helper for emitting nops](https://patchwork.ozlabs.org/patch/829571/)
  - [[PATCH net-next 2/9] nfp: bpf: refactor `nfp_bpf_check_ptr()`](https://patchwork.ozlabs.org/patch/829594/)
  - [[PATCH net-next 3/9] nfp: bpf: add stack write support](https://patchwork.ozlabs.org/patch/829573/)
  - [[PATCH net-next 4/9] nfp: bpf: add stack read support](https://patchwork.ozlabs.org/patch/829590/)
  - [[PATCH net-next 5/9] nfp: bpf: optimize the RMW for stack accesses](https://patchwork.ozlabs.org/patch/829574/)
  - [[PATCH net-next 6/9] nfp: bpf: allow stack accesses via modified stack registers](https://patchwork.ozlabs.org/patch/829593/)
  - [[PATCH net-next 7/9] nfp: bpf: support accessing the stack beyond 64 bytes](https://patchwork.ozlabs.org/patch/829592/)
  - [[PATCH net-next 8/9] nfp: bpf: support stack accesses via non-constant pointers](https://patchwork.ozlabs.org/patch/829591/)
  - [[PATCH net-next 9/9] nfp: bpf: optimize mov64 a little](https://patchwork.ozlabs.org/patch/829572/)
- Yonghong Song, [[PATCH net-next v3 0/3] bpf: permit multiple bpf attachments for a single perf tracepoint event](https://patchwork.ozlabs.org/cover/829786/)
  - [[PATCH net-next v3 1/3] bpf: use the same condition in perf event set/free bpf handler](https://patchwork.ozlabs.org/patch/829788/)
  - [[PATCH net-next v3 2/3] bpf: permit multiple bpf attachments for a single perf event](https://patchwork.ozlabs.org/patch/829785/)
  - [[PATCH net-next v3 3/3] bpf: add a test case to test single tp multiple bpf attachment](https://patchwork.ozlabs.org/patch/829787/)
- Quentin Monnet, [[PATCH net-next] tools: bpftool: try to mount bpffs if required for pinning objects](https://patchwork.ozlabs.org/patch/830083/)
- John Fastabend, [[net PATCH] bpf: devmap fix arithmetic overflow in bitmap_size calculation](https://patchwork.ozlabs.org/patch/828187/)
- Alexei Starovoitov, [[PATCH v2 net-next] selftests/bpf: fix broken build of test_maps](https://patchwork.ozlabs.org/patch/829064/)
