---
path: '/blog/2017/8/15/bpf-updates-09'
date: '2017-08-16T13:43:16.000Z'
title: 'BPF updates 09'
categories:
  - Technology
tags:
  - bpf-updates
ogSummary: 'This is issue 09 of the regular newsletter around BPF written by Alexander Alemayhu. It summarizes ongoing development, presentations, videos and other information related to BPF and XDP. It is released roughly once a week.'
---

This is issue 09 of the regular newsletter around BPF written by Alexander Alemayhu. It summarizes ongoing development, presentations, videos and other information related to BPF and XDP. It is released roughly once a week.

---

The highlights since the previous issue

- New comparison instructions for reducing register pressure, stack usage and potentially smaller programs.
- RFC patchset for BPF socket redirect with a awesome new helper function `bpf_sk_redirect_map`.
- Verifier fixes, more tests and alignment tracking work got [merged](https://www.spinics.net/lists/netdev/msg448342.html).
- The XDP redirect series got [merged](https://www.mail-archive.com/netdev@vger.kernel.org/msg177988.html).
- XDP support for tap got [merged](https://www.spinics.net/lists/kernel/msg2579871.html)

The latest couple of iteration of the alignment tracking are really interesting. It now also comes with some documentation describing the register value tracking and the verifier pruning. Checkout the patches section for all the links.

The Linux 4.13 merge window ended several weeks ago weeks ago and net-next opened up around the same time with a brand new [status page](http://vger.kernel.org/~davem/net-next.html). No need to ask for the status anymore for people not being attentive enough. :)

Some more interesting topics

- iproute improvements to error handling reports for tail calls and support for loading map in map.
- LLVM [5.0.0-rc1](http://lists.llvm.org/pipermail/llvm-dev/2017-July/115882.html) is ready for testing.
- MIPS eBPF JIT finally merged.
- Virtio optimizations for XDP.

While a MIPS patch did get applied in June. One file got lost in transmit, but that's now corrected.

## Presentations

### Videos

#### [Tech Talks @ Kinvolk: Introduction to eBPF Programming by Alban Crequy](https://www.youtube.com/watch?v=CmTtl_OtYvc)

Nice introduction to eBPF with demos, code and diagrams.

#### [Jesper Dangaard Brouer - XDP eXpress Data Path](https://www.youtube.com/watch?v=fQiM3PUJCL4&feature=youtu.be)

Great technology overview of XDP.

#### [eBPF and IO Visor Project](https://www.youtube.com/watch?v=p01BsNDX-lk)

Mostly high level introductory talk.

### Slides

#### [Landlock: programmatic access control](https://landlock-lsm.github.io/talks/2017-06-21_landlock-linuxkit-sig.pdf)

A look at Landlock and how eBPF and some other things are used to reduce security threats.

## In case you missed it

#### [Tracing a packet journey using Linux tracepoints, perf and eBPF](https://blog.yadutaf.fr/2017/07/28/tracing-a-packet-journey-using-linux-tracepoints-perf-ebpf/)

Cool tracing tutorial with some perf examples. Also checkout the companion github repository.

#### [The anatomy of “Hello World” python program in bcc](http://nanxiao.me/en/the-anatomy-of-hello-world-python-program-in-bcc/)

Detailed walkthrough of a BCC example.

#### [XDP Newbies...](https://www.mail-archive.com/netdev@vger.kernel.org/msg162375.html)

> Which is a place where people can talk about getting up to speed with setting up an XDP build environment and writing XDP programs.

You can subscribe by sending a email to `majordomo@vger.kernel.org`, with a message body containing `subscribe xdp-newbies`. No subject is needed, but you can of course add one if you like.

## Projects

A new batch of random projects from Github. Check them out and Remember to give a star, if you like the project ;)

#### [Tracepkt](https://github.com/yadutaf/tracepkt)

> Trace a ping packet journey across network interfaces and namespace on recent Linux. Supports IPv4 and IPv6.

#### [ocaml-bpf](https://github.com/ygrek/ocaml-bpf)

> OCaml embedded eBPF assembler.

#### [bpftrace](https://github.com/ajor/bpftrace)

> BPFtrace is a DTrace-style dynamic tracing tool for linux, based on the extended BPF capabilities available in recent Linux kernels. BPFtrace uses LLVM as a backend to compile scripts to BPF-bytecode and makes use of BCC for interacting with the Linux BPF system.

#### [tcptracer-bpf](https://github.com/weaveworks/tcptracer-bpf)

> tcptracer-bpf is an eBPF program using kprobes to trace TCP events (connect, accept, close). The eBPF program is compiled to an ELF object file.

#### [FlameGraph](https://github.com/brendangregg/FlameGraph)

> Stack trace visualizer [http://www.brendangregg.com/flamegraphs.html](http://www.brendangregg.com/flamegraphs.html)

#### [BPF userspace tool](https://github.com/Netronome/bpf-tool)

> The tool allows listing programs and maps on the system as well as simple dumping and modification of the maps.

## [Random cool note](https://twitter.com/netdev01/status/892567359285862400)

> Netdev 2.2 Call for papers is out! [https://www.netdevconf.org/2.2/submit-proposal.html](https://www.netdevconf.org/2.2/submit-proposal.html) … Dont wait for that last minute rush!

## Patches

- Thomas Richter, [[PATCHv3] perf bpf: Fix endianness problem when loading parameters in prologue](https://patchwork.kernel.org/patch/9901463/)
- Edward Cree, [[PATCH net-next] bpf/verifier: track liveness for pruning](https://patchwork.kernel.org/patch/9899897/)
- Eric Dumazet, [[PATCH net] tcp: fix possible deadlock in TCP stack vs BPF filter](https://patchwork.ozlabs.org/patch/801382/)
- Jason Wang [[PATCH net-next V2 0/3] XDP support for tap](https://www.spinics.net/lists/kernel/msg2578715.html)
  - [PATCH net-next V2 1/3] tap: use build_skb() for small packet](https://www.spinics.net/lists/kernel/msg2578714.html)
  - [PATCH net-next V2 2/3] net: export some generic xdp helpers](https://www.spinics.net/lists/kernel/msg2578711.html)
  - [PATCH net-next V2 3/3] tap: XDP support](https://www.spinics.net/lists/kernel/msg2578713.html)
- Daniel Borkmann, [[PATCH net 0/2] Minor fix in `bpf_convert_ctx_access`](https://www.mail-archive.com/netdev@vger.kernel.org/msg182194.html)
  - [[PATCH net 1/2] net: fix compilation when busy poll is not enabled](https://www.mail-archive.com/netdev@vger.kernel.org/msg182196.html)
  - [[PATCH net 2/2] bpf: fix two missing `target_size` settings in `bpf_convert_ctx_access`](https://www.mail-archive.com/netdev@vger.kernel.org/msg182195.html)
- Daniel Borkmann, [[PATCH] bpf: fix `bpf_trace_printk` on 32 bit](https://www.mail-archive.com/netdev@vger.kernel.org/msg182199.html)
- William Tu, [[PATCHv2 net-next] selftests: bpf: add check for ip XDP redirect](https://www.spinics.net/lists/netdev/msg448881.html)
- Wang Nan, [[PATCH] perf test llvm: Fix f_mode endianness problem](https://www.spinics.net/lists/kernel/msg2578481.html)
- Daniel Borkmann, [[PATCH iproute2 master] bpf: unbreak libelf linkage for bpf obj loader](http://www.spinics.net/lists/netdev/msg448592.html)
- Daniel Borkmann, [[PATCH net-next v2 0/9] Add BPF_J{LT,LE,SLT,SLE} instructions](https://www.spinics.net/lists/netdev/msg448612.html)
  - [[PATCH net-next v2 1/9] bpf: add BPF_J{LT,LE,SLT,SLE} instructions](https://www.spinics.net/lists/netdev/msg448610.html)
  - [[PATCH net-next v2 2/9] bpf, x86: implement jiting of BPF_J{LT,LE,SLT,SLE}](https://www.spinics.net/lists/netdev/msg448607.html)
  - [[PATCH net-next v2 3/9] bpf, arm64: implement jiting of BPF_J{LT,LE,SLT,SLE}](https://www.spinics.net/lists/netdev/msg448614.html)
  - [[PATCH net-next v2 4/9] bpf, sparc64: implement jiting of BPF_J{LT, LE, SLT, SLE}](https://www.spinics.net/lists/netdev/msg448613.html)
  - [[PATCH net-next v2 5/9] bpf, s390x: implement jiting of BPF_J{LT,LE,SLT,SLE}](https://www.spinics.net/lists/netdev/msg448611.html)
  - [[PATCH net-next v2 6/9] bpf, ppc64: implement jiting of BPF_J{LT,LE,SLT,SLE}](https://www.spinics.net/lists/netdev/msg448605.html)
  - [[PATCH net-next v2 7/9] bpf, nfp: implement jiting of BPF_J{LT,LE}](https://www.spinics.net/lists/netdev/msg448608.html)
  - [[PATCH net-next v2 8/9] bpf: enable BPF_J{LT,LE,SLT,SLE} opcodes in verifier](https://www.spinics.net/lists/netdev/msg448606.html)
  - [[PATCH net-next v2 9/9] bpf: add test cases for new BPF_J{LT, LE, SLT, SLE} instructions](https://www.spinics.net/lists/netdev/msg448609.html)
- Tom Herbert, [[PATCH RFC 0/2] stap: Socket tap](https://www.mail-archive.com/netdev@vger.kernel.org/msg181428.html)
  - [[PATCH RFC 1/2] bpf: Add a BPF return code to disconnect a connection](https://www.mail-archive.com/netdev@vger.kernel.org/msg181430.html)
  - [[PATCH RFC 2/2] stap: Socket tap](https://www.mail-archive.com/netdev@vger.kernel.org/msg181429.html)
- Joel Fernandes, [[PATCH RFC v2 0/5] add arm64 cross compilation support to BPF samples](https://www.spinics.net/lists/kernel/msg2574591.html)
  - [[PATCH RFC v2 1/5] samples/bpf: Use getppid instead of getpgrp for array map stress](https://www.spinics.net/lists/kernel/msg2574592.html)
  - [[PATCH RFC v2 2/5] samples/bpf: Enable cross compiler support](https://www.spinics.net/lists/kernel/msg2574599.html)
  - [[PATCH RFC v2 3/5] samples/bpf: Fix inline asm issues building samples on arm64](https://www.spinics.net/lists/kernel/msg2574601.html)
  - [[PATCH RFC v2 4/5] samples/bpf: Fix pt_regs issues when cross-compiling](https://www.spinics.net/lists/kernel/msg2574596.html)
  - [[PATCH RFC v2 5/5] samples/bpf: Add documentation on cross compilation](https://www.spinics.net/lists/kernel/msg2574595.html)
- James Hogan, [[RFC PATCH 0/2] `bpf_trace_printk()` fixes](https://www.mail-archive.com/netdev@vger.kernel.org/msg181435.html)
  - [[RFC PATCH 1/2] bpf: Fix `bpf_trace_printk` on 32-bit architectures](https://www.mail-archive.com/netdev@vger.kernel.org/msg181436.html)
  - [[RFC PATCH 2/2] bpf: Initialise mod[] in `bpf_trace_printk`](https://www.mail-archive.com/netdev@vger.kernel.org/msg181434.html)
- Edward Cree, [[PATCH v5 net-next 00/12] bpf: rewrite value tracking in verifier](https://www.mail-archive.com/linux-kernel@vger.kernel.org/msg1463044.html)
  - [[PATCH v5 net-next 01/12] bpf/verifier: rework value tracking](https://www.mail-archive.com/linux-kernel@vger.kernel.org/msg1463048.html)
  - [[PATCH v5 net-next 02/12] bpf/verifier: track signed and unsigned min/max values](https://www.mail-archive.com/linux-kernel@vger.kernel.org/msg1463047.html)
  - [[PATCH v5 net-next 03/12] bpf/verifier: more concise register state logs for constant var_off](https://www.mail-archive.com/linux-kernel@vger.kernel.org/msg1463049.html)
  - [[PATCH v5 net-next 04/12] selftests/bpf: change test_verifier expectations](https://www.mail-archive.com/linux-kernel@vger.kernel.org/msg1463050.html)
  - [[PATCH v5 net-next 05/12] selftests/bpf: rewrite test_align](https://www.mail-archive.com/linux-kernel@vger.kernel.org/msg1463051.html)
  - [[PATCH v5 net-next 06/12] selftests/bpf: add a test to test_align](https://www.mail-archive.com/linux-kernel@vger.kernel.org/msg1463052.html)
  - [[PATCH v5 net-next 07/12] selftests/bpf: add test for bogus operations on pointers](https://www.mail-archive.com/linux-kernel@vger.kernel.org/msg1463053.html)
  - [[PATCH v5 net-next 08/12] selftests/bpf: don't try to access past `MAX_PACKET_OFF` in test_verifier](https://www.mail-archive.com/linux-kernel@vger.kernel.org/msg1463054.html)
  - [[PATCH v5 net-next 09/12] selftests/bpf: add tests for subtraction & negative numbers](https://www.mail-archive.com/linux-kernel@vger.kernel.org/msg1463055.html)
  - [[PATCH v5 net-next 10/12] selftests/bpf: variable offset negative tests](https://www.mail-archive.com/linux-kernel@vger.kernel.org/msg1463056.html)
  - [[PATCH v5 net-next 11/12] Documentation: describe the new eBPF verifier value tracking behaviour](https://www.mail-archive.com/linux-kernel@vger.kernel.org/msg1463057.html)
  - [[PATCH v5 net-next 12/12] bpf/verifier: increase complexity limit to 128k](https://www.mail-archive.com/linux-kernel@vger.kernel.org/msg1463059.html)
- Yonghong Song, [[PATCH net-next v4 0/2] bpf: add support for `sys_{enter|exit}_*` tracepoints](https://www.spinics.net/lists/netdev/msg447768.html)
  - [[PATCH net-next v4 1/2] bpf: add support for `sys_enter__` and `sys_exit__` tracepoints](https://www.spinics.net/lists/netdev/msg447769.html)
  - [[PATCH net-next v4 2/2] bpf: add a test case for `syscalls/sys_{enter|exit}_*` tracepoints](https://www.spinics.net/lists/netdev/msg447770.html)
- Mickaël Salaün, [[PATCH net-next v2 1/2] bpf: Move `check_uarg_tail_zero()` upward](https://www.spinics.net/lists/netdev/msg448057.html)
- Mickaël Salaün, [PATCH net-next v2 2/2] bpf: Extend `check_uarg_tail_zero()` checks](https://www.spinics.net/lists/netdev/msg448056.html)
- William Tu, [[PATCH net-next] selftests: bpf: add a test for XDP redirect](https://www.spinics.net/lists/netdev/msg448116.html)
- John Fastabend, [[net-next PATCH v2] bpf: devmap fix mutex in rcu critical section](https://patchwork.ozlabs.org/patch/798146/)
- John Fastabend, [[RFC PATCH 0/6] BPF socket redirect](https://www.spinics.net/lists/netdev/msg447591.html)
  - [[RFC PATCH 1/6] net: early init support for strparser](https://www.spinics.net/lists/netdev/msg447592.html)
  - [[RFC PATCH 2/6] net: add `sendmsg_locked` and `sendpage_locked` to `af_inet6`](https://www.spinics.net/lists/netdev/msg447593.html)
  - [[RFC PATCH 3/6] net: fixes for `skb_send_sock`](https://www.spinics.net/lists/netdev/msg447594.html)
  - [[RFC PATCH 4/6] net: sockmap with sk redirect support](https://www.spinics.net/lists/netdev/msg447595.html)
  - [[RFC PATCH 5/6] net: bpf, add skb to sk lookup routines](https://www.spinics.net/lists/netdev/msg447596.html)
  - [[RFC PATCH 6/6] net: sockmap sample program](https://www.spinics.net/lists/netdev/msg447597.html)
- Daniel Borkmann, [[PATCH net] bpf: fix byte order test in test_verifier](https://www.mail-archive.com/netdev@vger.kernel.org/msg181028.html)
- Daniel Borkmann, [[PATCH net 0/2] Two BPF fixes for s390](https://www.spinics.net/lists/netdev/msg447642.html)
  - [[PATCH net 1/2] bpf, s390: fix jit branch offset related to ldimm64](https://www.spinics.net/lists/netdev/msg447641.html)
  - [[PATCH net 2/2] bpf, s390: fix build for libbpf and selftest suite](https://www.spinics.net/lists/netdev/msg447640.html)
- David Daney, [[PATCH] MIPS: Add missing file for eBPF JIT.](https://www.spinics.net/lists/kernel/msg2572599.html)
- John Fastabend, [[net-next PATCH v2] net: comment fixes against BPF devmap helper calls](https://patchwork.ozlabs.org/patch/797861/)
- Joel Fernandes, [[PATCH] samples/bpf: Fix cross compiler error with bpf sample](https://patchwork.ozlabs.org/patch/797628/)
- Thomas Richter, [[PATCHv2] bpf: fix `selftest/bpf/test_pkt_md_access` on s390x](https://www.spinics.net/lists/kernel/msg2572763.html)
- William Tu, [[PATCH net-next] bpf: fix the printing of ifindex](https://www.spinics.net/lists/netdev/msg447217.html)
- Phil Sutter, [[iproute PATCH] bpf: Make bytecode-file reading a little more robust](https://patchwork.ozlabs.org/patch/796617/)
- William Tu, [[PATCH net] samples/bpf: fix bpf tunnel cleanup](https://py3.patchwork.dja.id.au/patch/45517/)
- Daniel Borkmann, [[PATCH net] bpf: don't indicate success when `copy_from_user` fails](https://www.spinics.net/lists/netdev/msg446225.html)
- John Fastabend, [[PATCH] bpf: testing: fix devmap tests](https://patchwork.ozlabs.org/patch/794157/)
- Luiz Augusto von Dentz, [[PATCH BlueZ] monitor: Use BPF to filter packets by index](https://www.spinics.net/lists/linux-bluetooth/msg71245.html)
- Jakub Kicinski, [[PATCH net] bpf: don't zero out the info struct in `bpf_obj_get_info_by_fd()`](https://www.spinics.net/lists/netdev/msg445868.html)
- Jakub Kicinski, [[PATCH net-next] bpf: install libbpf headers on 'make install'](https://www.mail-archive.com/netdev@vger.kernel.org/msg178899.html)
- Jakub Kicinski, [[PATCH net-next] bpf: add helper capable of reading out instructions](https://www.spinics.net/lists/netdev/msg445628.html)
- Daniel Borkmann, [[PATCH iproute2 master v2 0/2] Minor BPF updates](https://www.spinics.net/lists/netdev/msg445415.html)
  - [[PATCH iproute2 master v2 1/2] bpf: improve error reporting around tail calls](https://www.spinics.net/lists/netdev/msg445416.html)
  - [[PATCH iproute2 master v2 2/2] bpf: fix mnt path when from env](https://www.spinics.net/lists/netdev/msg445417.html)
- Edward Cree, [[PATCH net 0/2] bpf: fix verifier min/max handling in BPF_SUB](https://www.spinics.net/lists/netdev/msg445323.html)
  - [[PATCH net 1/2] selftests/bpf: subtraction bounds test](https://www.spinics.net/lists/netdev/msg445324.html)
  - [[PATCH net 2/2] bpf/verifier: fix min/max handling in `BPF_SUB`](https://www.spinics.net/lists/netdev/msg445325.html)
- Dan Carpenter, [[PATCH net-next] bpf: `dev_map_alloc()` shouldn't return NULL](https://www.spinics.net/lists/netdev/msg445394.html)
- Douglas Caetano dos Santos, [[PATCH] bpf.2: ffix](https://www.spinics.net/lists/linux-man/msg11780.html)
- Daniel Borkmann, [[PATCH net 0/5] BPF map value adjust fix](https://www.spinics.net/lists/netdev/msg445226.html)
  - [[PATCH net 1/5] bpf: fix mixed signed/unsigned derived min/max value bounds](https://www.spinics.net/lists/netdev/msg445231.html)
  - [[PATCH net 2/5] bpf: allow to specify log level and reduce it for test_verifier](https://www.spinics.net/lists/netdev/msg445229.html)
  - [[PATCH net 3/5] bpf: fix up test cases with mixed signed/unsigned bounds](https://www.spinics.net/lists/netdev/msg445227.html)
  - [[PATCH net 4/5] bpf: add test for mixed signed and unsigned bounds checks](https://www.spinics.net/lists/netdev/msg445230.html)
  - [[PATCH net 5/5] bpf: more tests for mixed signed and unsigned bounds checks](https://www.spinics.net/lists/netdev/msg445228.html)
- Jason Wang [[PATCH net-next V2 0/5] Refine virtio-net XDP](https://www.mail-archive.com/netdev@vger.kernel.org/msg178282.html)
  - [[PATCH net-next V2 1/5] virtio_ring: allow to store zero as the ctx](https://www.mail-archive.com/netdev@vger.kernel.org/msg178281.html)
  - [[PATCH net-next V2 2/5] virtio-net: pack headroom into ctx for mergeable buffers](https://www.mail-archive.com/netdev@vger.kernel.org/msg178280.html)
  - [[PATCH net-next V2 3/5] virtio-net: switch to use new ctx API for small buffer](https://www.mail-archive.com/netdev@vger.kernel.org/msg178279.html)
  - [[PATCH net-next V2 4/5] virtio-net: do not reset during XDP set](https://www.mail-archive.com/netdev@vger.kernel.org/msg178278.html)
  - [[PATCH net-next V2 5/5] virtio-net: switch off offloads on demand if possible on XDP set](https://www.mail-archive.com/netdev@vger.kernel.org/msg178277.html)
- John Fastabend, [[net-next PATCH] net: fix build error in devmap helper calls](https://www.mail-archive.com/netdev@vger.kernel.org/msg178088.html)
- John Fastabend, [[net-next PATCH 00/12] Implement XDP bpf_redirect](https://www.mail-archive.com/netdev@vger.kernel.org/msg177974.html)
  - [[net-next PATCH 01/12] ixgbe: NULL xdp_tx rings on resource cleanup](https://www.mail-archive.com/netdev@vger.kernel.org/msg177975.html)
  - [[net-next PATCH 02/12] net: xdp: support xdp generic on virtual devices](https://www.mail-archive.com/netdev@vger.kernel.org/msg177976.html)
  - [[net-next PATCH 03/12] xdp: add bpf_redirect helper function](https://www.mail-archive.com/netdev@vger.kernel.org/msg177978.html)
  - [[net-next PATCH 04/12] xdp: sample program for new bpf_redirect helper](https://www.mail-archive.com/netdev@vger.kernel.org/msg177977.html)
  - [[net-next PATCH 05/12] net: implement XDP_REDIRECT for xdp generic](https://www.mail-archive.com/netdev@vger.kernel.org/msg177980.html)
  - [[net-next PATCH 06/12] ixgbe: add initial support for xdp redirect](https://www.mail-archive.com/netdev@vger.kernel.org/msg177981.html)
  - [[net-next PATCH 07/12] xdp: add trace event for xdp redirect](https://www.mail-archive.com/netdev@vger.kernel.org/msg177979.html)
  - [[net-next PATCH 08/12] bpf: add devmap, a map for storing net device references](https://www.mail-archive.com/netdev@vger.kernel.org/msg177982.html)
  - [[net-next PATCH 09/12] bpf: add `bpf_redirect_map` helper routine](https://www.mail-archive.com/netdev@vger.kernel.org/msg177983.html)
  - [[net-next PATCH 10/12] xdp: Add batching support to redirect map](https://www.mail-archive.com/netdev@vger.kernel.org/msg177984.html)
  - [[net-next PATCH 11/12] net: add notifier hooks for devmap bpf map](https://www.mail-archive.com/netdev@vger.kernel.org/msg177986.html)
  - [[net-next PATCH 12/12] xdp: bpf redirect with map sample program](https://www.mail-archive.com/netdev@vger.kernel.org/msg177985.html)
- Andy Gospodarek, [[PATCH net-next] samples/bpf: add option for native and skb mode for redirect apps](https://www.spinics.net/lists/netdev/msg444789.html)
- Cong Wang, [[Patch net] bpf: check NULL for `sk_to_full_sk()` return value](https://www.spinics.net/lists/netdev/msg444765.html)
- Daniel Borkmann, [[PATCH iproute2 -master 0/3] BPF updates](https://www.spinics.net/lists/netdev/msg444697.html)
  - [[PATCH iproute2 -master 1/3] bpf: remove obsolete samples](https://www.spinics.net/lists/netdev/msg444695.html)
  - [[PATCH iproute2 -master 2/3] bpf: support loading map in map from obj](https://www.spinics.net/lists/netdev/msg444698.html)
  - [[PATCH iproute2 -master 3/3] bpf: dump id/jited info for cls/act programs](https://www.spinics.net/lists/netdev/msg444696.html)
- Yonghong Song, [bpf: generate better lowering code for certain select/setcc instructions](http://llvm.org/viewvc/llvm-project?rev=308080&view=rev)
- Yonghong Song, [bpf: fix a compilation bug due to unused variable for release build](http://llvm.org/viewvc/llvm-project?rev=308083&view=rev)
- Kefeng Wang, [[PATCH] bpf: fix return in `bpf_skb_adjust_net`](https://www.spinics.net/lists/netdev/msg444333.html)
- Colin King, [[PATCH][bpf-next] bpf: add missing break in for the `TCP_BPF_SNDCWND_CLAMP` case](https://patchwork.kernel.org/patch/9825277/)
- Lawrence Brakmo, [[PATCH net-next] bpf: fix return in `load_bpf_file`](https://www.spinics.net/lists/netdev/msg443487.html)
- Yonghong Song, [[PATCH net v2] samples/bpf: fix a build issue](https://www.spinics.net/lists/netdev/msg441745.html)
- Al Viro, [[RFC] `get_compat_bpf_fprog()`: don't copyin field-by-field](https://www.spinics.net/lists/netdev/msg443938.html)
- Rafael Espindola, [Fully fix the movw/movt addend.](http://llvm.org/viewvc/llvm-project?view=revision&revision=307730)

Please note that netdev receives a lot of patches and the list above is not meant to be comprehensive.

Happy eBPF hacking! ;)
