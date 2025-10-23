---
path: '/blog/2017/10/24/bpf-updates-12'
date: '2017-10-25T13:35:41.000Z'
title: 'BPF Updates 12'
categories:
  - Technology
tags:
  - bpf-updates
ogSummary: 'Issue 12 of the BPF newsletter by Alexander Alemayhu, covering recent developments, presentations, videos, and updates on BPF and XDP.'
---

import authors from 'utils/author-data';

This is issue 12 of the regular newsletter around BPF written by Alexander Alemayhu. It summarizes ongoing development, presentations, videos and other information related to BPF and XDP. It is released roughly once a week.

---

The highlights since the last time

- Generic metadata transfer from XDP into skb via new helper function `bpf_xdp_adjust_meta`.
- `bpf_perf_event_read_value` helper function series got merged.
- Multiple programs can now be attached to a cgroup.
- A new map type `cpumap` for XDP got merged.

The addition of metadata transfer from XDP allows XDP programs to apply early filters to extract metadata from packets and make it available to BPF programs later in the forwarding chain such as programs attached to clsact qdiscs.

The new values available via the perf helper make it easier to normalize measurements. `cpumap` let's you redirect XDP frames to remote CPU's where these can handle the packet representation and fire up the networking stack.

More interesting topics

- More fields added to `bpf_prog_info`.
- Netronome bpftool upstreamed.
- LPM performance improvements.
- 32-bit eBPF encoding support.

The BPF tooling is evolving and introspection is getting better.

## Presentations

### Talks

#### [All Systems Go! 2017 - A gentle introduction to [e]BPF](https://media.ccc.de/v/ASG2017-92-a_gentle_introduction_to_e_bpf#video&t=63)

Beginner friendly overview of BPF.

#### [All Systems Go! 2017 - High-performance Linux monitoring with eBPF](https://media.ccc.de/v/ASG2017-139-high-performance_linux_monitoring_with_ebpf#video&t=64)

Intro to BPF and short part on how it's being leveraged in weaveworks.

#### [All Systems Go! 2017 - Using BPF in Kubernetes](https://media.ccc.de/v/ASG2017-134-using_bpf_in_kubernetes)

Nice talk focusing on some of the use cases in the cloud.

#### [Kernel Recipes 2017 - EBPF and XDP - Eric Leblond](https://kernel-recipes.org/en/2017/talks/ebpf-and-xdp/)

Overview of how Suricata uses BPF Nice to see the version number for the various features / work mentioned. The slides also has some code.

#### [Kernel Recipes 2017 - Performance Analysis with BPF - Brendan Gregg](https://kernel-recipes.org/en/2017/talks/performance-analysis-with-bpf/)

Introduction to BPF focusing on BCC and tracing.

### Slides

#### [eBPF cgroup filters for data usage accounting on Android](https://www.linuxplumbersconf.org/2017/ocw//system/presentations/4791/original/eBPF%20cgroup%20filters%20for%20data%20usage%20accounting%20on%20Android.pdf)

Interesting work on how to use BPF for wifi data usage.

#### [Cilium – Kernel Native Security & DDOS Mitigation for Microservices with BPF](https://www.slideshare.net/techcet/cilium-kernel-native-security-ddos-mitigation-for-microservices-with-bpf)

High level introduction to Cilium with some new ongoing work on Cilium. If you are using / interested in Kafka, worth checking out for the API filtering.

#### [eBPF Implementation for FreeBSD](https://docs.google.com/presentation/d/1jtqjq1x3XUOSmtBrEvZnHRgcJT6ldFmcFfdChaic2VA/edit#slide=id.p)

Interesting slides on eBPF port to FreeBSD.

## In case you missed it

#### [Heap Allocation Flamegraphs](https://epickrram.blogspot.no/2017/09/heap-allocation-flamegraphs.html)

Post on using one of the grave tools for tracing JVM processes.

#### [Linux の BPF : (5) eBPF による Linux Kernel Tracing](http://mmi.hatenablog.com/entry/2017/09/04/231922)

Going through a tracing example using kernel 4.12.

#### [An intro to using eBPF to filter packets in the Linux kernel](https://opensource.com/article/17/9/intro-ebpf)

Beginner friendly post with a accompanying example for tracing.

#### [IP Accounting and Access Lists with systemd](http://0pointer.net/blog/ip-accounting-and-access-lists-with-systemd.html)

Simple cgroup/BPF packet counting and blacklist via systemd.

#### [XDP on Power](https://sthbrx.github.io/blog/2017/07/17/xdp-on-power/)

XDP on the Power architecture.

#### [Cilium v0.10 & v0.11 Released: Double the Fun - Two Updates in One!](https://www.cilium.io/blog/2017/9/29/cilium-v010-v011-released-double-the-fun-two-updates-in-one)

Great post on the recent progress made in the Cilium project.

## Projects

A couple of new GitHub projects. Please star if you like the projects ;)

#### [Cilium client API example](https://github.com/cilium/client-example)

> Simple example illustrating use of the Cilium API.

#### [ebpf_asm](https://github.com/solarflarecom/ebpf_asm)

> An assembler for eBPF programs written in an Intel-like assembly syntax.

#### [go-ebpf](https://github.com/andrewkroh/go-ebpf)

> eBPF programs without a libbcc dependency

#### [generic-ebpf](https://github.com/YutaroHayakawa/generic-ebpf)

> Generic eBPF VM. Currently support FreeBSD kernel, FreeBSD userspace, Linux kernel, Linux userspace and MacOSX userspace.

## [Random cool note](https://twitter.com/netdev01/status/916396288253378561)

> Schedule is out! Dont miss this amazing event. Come to the land of Kimchi and Palaces. Hangout with awesome geeks. [https://www.netdevconf.org/2.2/schedule.html](https://www.netdevconf.org/2.2/schedule.html)

## Patches

- Daniel Borkmann, [[PATCH net 0/3] Fix for BPF devmap percpu allocation splat](https://patchwork.ozlabs.org/cover/827067/)
  - [[PATCH net 1/3] mm, percpu: add support for `__GFP_NOWARN` flag](https://patchwork.ozlabs.org/patch/827066/)
  - [[PATCH net 2/3] bpf: fix splat for illegal devmap percpu allocation](https://patchwork.ozlabs.org/patch/827065/)
  - [[PATCH net 3/3] bpf: do not test for `PCPU_MIN_UNIT_SIZE` before percpu allocations](https://patchwork.ozlabs.org/patch/827064/)
- Richard Weinber, [[PATCH 1/3] bpf: Don't check for current being NULL](https://patchwork.kernel.org/patch/10009545/)
  - [[PATCH 2/3] bpf: Remove dead variable](https://patchwork.kernel.org/patch/10009543/)
  - [[PATCH 3/3] bpf: Make sure that ->comm does not change under us.](https://patchwork.kernel.org/patch/10009547/)
- Tariq Toukan, [[PATCH net-next 0/3] mlx4_en XDP TX improvements](https://www.spinics.net/lists/netdev/msg459623.html)
  - [[PATCH net-next 1/3] net/mlx4_en: Replace netdev parameter with priv in XDP xmit function](https://www.spinics.net/lists/netdev/msg459622.html)
  - [[PATCH net-next 2/3] `net/mlx4_en`: Obsolete call to generic `write_desc` in XDP xmit flow](https://www.spinics.net/lists/netdev/msg459628.html)
  - [[PATCH net-next 3/3] `net/mlx4_en`: `XDP_TX`, assign constant values of TX descs on ring creaion](https://www.spinics.net/lists/netdev/msg459629.html)
- Chenbo Feng, [[PATCH net-next v6 0/5] bpf: security: New file mode and LSM hooks for eBPF object permission control](https://www.spinics.net/lists/netdev/msg460707.html)
  - [[PATCH net-next v6 1/5] bpf: Add file mode configuration into bpf maps](https://www.spinics.net/lists/netdev/msg460712.html)
  - [[PATCH net-next v6 2/5] bpf: Add tests for eBPF file mode](https://www.spinics.net/lists/netdev/msg460708.html)
  - [[PATCH net-next v6 3/5] security: bpf: Add LSM hooks for bpf object related syscall](https://www.spinics.net/lists/netdev/msg460710.html)
  - [[PATCH net-next v6 4/5] selinux: bpf: Add selinux check for eBPF syscall operations](https://www.spinics.net/lists/netdev/msg460709.html)
  - [[PATCH net-next v6 5/5] selinux: bpf: Add addtional check for bpf object file receive](https://www.spinics.net/lists/netdev/msg460711.html)
- Jakub Kicinski, [[PATCH net-next 0/4] bpf: move context info out of the verifier](https://patchwork.ozlabs.org/cover/826552/)
  - [[PATCH net-next 1/4] bpf: split verifier and program ops](https://patchwork.ozlabs.org/patch/826553/)
  - [[PATCH net-next 2/4] bpf: remove the verifier ops from program structure](https://patchwork.ozlabs.org/patch/826554/)
  - [[PATCH net-next 3/4] bpf: move knowledge about post-translation offsets out of verifier](https://patchwork.ozlabs.org/patch/826556/)
  - [[PATCH net-next 4/4] bpf: allow access to skb->len from offloads](https://patchwork.ozlabs.org/patch/826555/)
- Jakub Kicinski, [[PATCH net v2] bpf: disallow arithmetic operations on context pointer](https://www.spinics.net/lists/netdev/msg460690.html)
- Jakub Kicinski, [[PATCH net-next] tools: bpftool: use more common tag format](https://www.mail-archive.com/netdev@vger.kernel.org/msg194010.html)
- Jakub Kicinski, [[PATCH net-next 00/12] nfp: bpf: support direct packet access](https://www.spinics.net/lists/netdev/msg460001.html)
  - [[PATCH net-next 01/12] bpf: verifier: set reg_type on context accesses in second pass](https://www.spinics.net/lists/netdev/msg460013.html)
  - [[PATCH net-next 02/12] nfp: bpf: reorder arguments to `emit_ld_field_any()`](https://www.spinics.net/lists/netdev/msg460010.html)
  - [[PATCH net-next 03/12] nfp: bpf: add missing return in jne_imm optimization](https://www.spinics.net/lists/netdev/msg460003.html)
  - [[PATCH net-next 04/12] nfp: bpf: fix compare instructions](https://www.spinics.net/lists/netdev/msg460011.html)
  - [[PATCH net-next 05/12] nfp: bpf: add mov helper](https://www.spinics.net/lists/netdev/msg460012.html)
  - [[PATCH net-next 06/12] nfp: bpf: implement byte swap instruction](https://www.spinics.net/lists/netdev/msg460004.html)
  - [[PATCH net-next 07/12] nfp: bpf: support BPF offload only on little endian](https://www.spinics.net/lists/netdev/msg460002.html)
  - [[PATCH net-next 08/12] nfp: bpf: fix context accesses](https://www.spinics.net/lists/netdev/msg460005.html)
  - [[PATCH net-next 09/12] nfp: bpf: separate I/O from checks for legacy data load](https://www.spinics.net/lists/netdev/msg460009.html)
  - [[PATCH net-next 10/12] nfp: bpf: add support for direct packet access - read](https://www.spinics.net/lists/netdev/msg460008.html)
  - [[PATCH net-next 11/12] nfp: bpf: direct packet access - write](https://www.spinics.net/lists/netdev/msg460007.html)
  - [[PATCH net-next 12/12] nfp: bpf: support direct packet access in TC](https://www.spinics.net/lists/netdev/msg460006.html)
- Jesper Dangaard Brouer, [[net-next V8 PATCH 0/5] New bpf cpumap type for XDP_REDIRECT](https://www.spinics.net/lists/netdev/msg460551.html)
  - [[net-next V8 PATCH 1/5] bpf: introduce new bpf cpu map type `BPF_MAP_TYPE_CPUMAP`](https://www.spinics.net/lists/netdev/msg460552.html)
  - [[net-next V8 PATCH 2/5] bpf: XDP_REDIRECT enable use of cpumap](https://www.spinics.net/lists/netdev/msg460555.html)
  - [[net-next V8 PATCH 3/5] bpf: cpumap xdp_buff to skb conversion and allocation](https://www.spinics.net/lists/netdev/msg460553.html)
  - [[net-next V8 PATCH 4/5] bpf: cpumap add tracepoints](https://www.spinics.net/lists/netdev/msg460554.html)
  - [[net-next V8 PATCH 5/5] samples/bpf: add cpumap sample program `xdp_redirect_cpu`](https://www.spinics.net/lists/netdev/msg460556.html)
- Jakub Kicinski, [[PATCH net-next v2 0/7] bpf: get rid of global verifier state and reuse instruction printer](https://patchwork.ozlabs.org/cover/823378/)
  - [[PATCH net-next v2 1/7] selftests/bpf: add a test for verifier logs](https://patchwork.ozlabs.org/patch/823379/)
  - [[PATCH net-next v2 2/7] bpf: encapsulate verifier log state into a structure](https://patchwork.ozlabs.org/patch/823385/)
  - [[PATCH net-next v2 3/7] bpf: move global verifier log into verifier environment](https://patchwork.ozlabs.org/patch/823383/)
  - [[PATCH net-next v2 4/7] bpf: move instruction printing into a separate file](https://patchwork.ozlabs.org/patch/823382/)
  - [[PATCH net-next v2 5/7] tools: bpftool: use the kernel's instruction printer](https://patchwork.ozlabs.org/patch/823380/)
  - [[PATCH net-next v2 6/7] bpf: don't rely on the verifier lock for metadata_dst allocation](https://patchwork.ozlabs.org/patch/823381/)
  - [[PATCH net-next v2 7/7] bpf: write back the verifier log buffer as it gets filled](https://patchwork.ozlabs.org/patch/823384/)
- Jiong Wang, [[PATCH, bpf-llvm] Fix bug on silently truncating 64-bit immediate](https://lists.iovisor.org/pipermail/iovisor-dev/2017-October/001123.html)
- Richard Weinberger, [[PATCH] bpf: devmap: Check attr->max_entries more carefully](https://patchwork.kernel.org/patch/10009601/)
- Colin King, [PATCH bpf-next: bpf: remove redundant variable old_flags](https://patchwork.kernel.org/patch/9999311/)
- Steven Rostedt, [[PATCH] tracing: bpf: Hide bpf trace events when they are not used](https://www.mail-archive.com/linux-kernel@vger.kernel.org/msg1511785.html)
- Jakub Kicinski, [[PATCH net-next 00/15] nfp: bpf ABIv2 and multi port](https://patchwork.ozlabs.org/cover/823052/)
  - [[PATCH net-next 01/15] nfp: output control messages to `trace_devlink_hwmsg()`](https://patchwork.ozlabs.org/patch/823063/)
  - [[PATCH net-next 02/15] nfp: bpf: lift the single-port limitation](https://patchwork.ozlabs.org/patch/823065/)
  - [[PATCH net-next 03/15] nfp: bpf: use the power of sparse to check we encode registers right](https://patchwork.ozlabs.org/patch/823061/)
  - [[PATCH net-next 04/15] nfp: bpf: move software reg helpers and cmd table out of translator](https://patchwork.ozlabs.org/patch/823068/)
  - [[PATCH net-next 05/15] nfp: bpf: encode all 64bit shifts](https://patchwork.ozlabs.org/patch/823067/)
  - [[PATCH net-next 06/15] nfp: bpf: remove register rename](https://patchwork.ozlabs.org/patch/823066/)
  - [[PATCH net-next 07/15] nfp: bpf: remove packet marking support](https://patchwork.ozlabs.org/patch/823059/)
  - [[PATCH net-next 08/15] nfp: add more white space to the instruction defines](https://patchwork.ozlabs.org/patch/823057/)
  - [[PATCH net-next 09/15] nfp: bpf: encode LMEM accesses](https://patchwork.ozlabs.org/patch/823062/)
  - [[PATCH net-next 10/15] nfp: bpf: encode extended LM pointer operands](https://patchwork.ozlabs.org/patch/823053/)
  - [[PATCH net-next 11/15] nfp: bpf: move to datapath ABI version 2](https://patchwork.ozlabs.org/patch/823060/)
  - [[PATCH net-next 12/15] nfp: bpf: calculate code store ECC](https://patchwork.ozlabs.org/patch/823058/)
  - [[PATCH net-next 13/15] nfp: bpf: pad code with valid nops](https://patchwork.ozlabs.org/patch/823054/)
  - [[PATCH net-next 14/15] nfp: bpf: byte swap the instructions](https://patchwork.ozlabs.org/patch/823056/)
  - [[PATCH net-next 15/15] nfp: bpf: pass dst register to ld_field instruction](https://patchwork.ozlabs.org/patch/823055/)
- Yonghong Song, [[llvm] r315889 - bpf: fix bug on silently truncating 64-bit immediate](http://llvm.org/viewvc/llvm-project?rev=315889&view=rev)
- Shmulik Ladkani, [[PATCH v2] netfilter: `xt_bpf`: Fix `XT_BPF_MODE_FD_PINNED` mode of '`xt_bpf_info_v1`'](https://patchwork.ozlabs.org/patch/823229/)
- Christina Jacob, [[PATCH v2] XDP Program for Ip forward](https://lkml.org/lkml/2017/10/10/88)
  - [[PATCH 1/1] xdp: Sample xdp program implementing ip forward](https://lkml.org/lkml/2017/10/10/90)
- Martin KaFai Lau, [[PATCH net-next 0/3] bpf: Misc improvements and a new usage on bpf obj name](https://patchwork.ozlabs.org/cover/822200/)
  - [[PATCH net-next 1/3] bpf: Change `bpf_obj_name_cpy()` to better ensure map's name is init by 0](https://patchwork.ozlabs.org/patch/822203/)
  - [[PATCH net-next 2/3] bpf: Use char in prog and map name](https://patchwork.ozlabs.org/patch/822201/)
  - [[PATCH net-next 3/3] bpf: Append prog->aux->name in `bpf_get_prog_name()`](https://patchwork.ozlabs.org/patch/822202/)
- Yonghong Song, [[PATCH net-next v7 0/5] bpf: add two helpers to read perf event enabled/running time](https://patchwork.ozlabs.org/cover/821914/)
  - [[PATCH net-next v7 1/5] bpf: perf event change needed for subsequent bpf helpers](https://patchwork.ozlabs.org/patch/821919/)
  - [[PATCH net-next v7 2/5] bpf: add helper `bpf_perf_event_read_value` for perf event array map](https://patchwork.ozlabs.org/patch/821916/)
  - [[PATCH net-next v7 3/5] bpf: add a test case for helper `bpf_perf_event_read_value`](https://patchwork.ozlabs.org/patch/821917/)
  - [[PATCH net-next v7 4/5] bpf: add helper `bpf_perf_prog_read_value`](https://patchwork.ozlabs.org/patch/821918/)
  - [[PATCH net-next v7 5/5] bpf: add a test case for helper `bpf_perf_prog_read_value`](https://patchwork.ozlabs.org/patch/821915/)
- Craig Gallek, [[PATCH net-next v3 0/2] libbpf: support more map options](https://patchwork.ozlabs.org/cover/821847/)
  - [[PATCH net-next v3 1/2] libbpf: parse maps sections of varying size](https://patchwork.ozlabs.org/patch/821849/)
  - [[PATCH net-next v3 2/2] libbpf: use map_flags when creating maps](https://patchwork.ozlabs.org/patch/821848/)
- Jesper Dangaard Brouer, [[net-next PATCH 0/3] Improve xdp_monitor samples/bpf](https://www.spinics.net/lists/netdev/msg458700.html)
  - [[net-next PATCH 1/3] samples/bpf: xdp_monitor first 8 bytes are not accessible by bpf](https://www.spinics.net/lists/netdev/msg458701.html)
  - [[net-next PATCH 2/3] samples/bpf: `xdp_monitor` also record `xdp_exception` tracepoint](https://www.spinics.net/lists/netdev/msg458702.html)
  - [[net-next PATCH 3/3] samples/bpf: xdp_monitor increase memory rlimit](https://www.spinics.net/lists/netdev/msg458703.html)
- Alexei Starovoitov, [[PATCH net] bpf: fix liveness marking](https://patchwork.ozlabs.org/patch/822129/)
- Alexei Starovoitov, [[PATCH v2 net-next 0/8] bpf: muli prog support for cgroup-bpf](https://www.spinics.net/lists/netdev/msg457938.html)
  - [[PATCH v2 net-next 1/8] bpf: multi program support for cgroup+bpf](https://www.spinics.net/lists/netdev/msg457941.html)
  - [[PATCH v2 net-next 2/8] bpf: introduce `BPF_PROG_QUERY` command](https://www.spinics.net/lists/netdev/msg457940.html)
  - [[PATCH v2 net-next 3/8] bpf: enforce return code for cgroup-bpf programs](https://www.spinics.net/lists/netdev/msg457942.html)
  - [[PATCH v2 net-next 4/8] libbpf: introduce `bpf_prog_detach2()`](https://www.spinics.net/lists/netdev/msg457939.html)
  - [[PATCH v2 net-next 5/8] samples/bpf: add multi-prog cgroup test case](https://www.spinics.net/lists/netdev/msg457944.html)
  - [[PATCH v2 net-next 6/8] libbpf: sync bpf.h](https://www.spinics.net/lists/netdev/msg457945.html)
  - [[PATCH v2 net-next 7/8] libbpf: add support for `BPF_PROG_QUERY`](https://www.spinics.net/lists/netdev/msg457943.html)
  - [[PATCH v2 net-next 8/8] samples/bpf: use `bpf_prog_query()` interface](https://www.spinics.net/lists/netdev/msg457983.html)
- Yonghong Song, [[llvm] r314911 - bpf: fix an insn encoding issue for neg insn](http://llvm.org/viewvc/llvm-project?rev=314911&view=rev)
- Alexei Starovoitov, [[PATCH net] bpf: fix `bpf_tail_call()` x64 JIT](http://patchwork.ozlabs.org/patch/821051/)
- Jakub Kicinski, [[PATCH net-next v4 0/3] tools: add bpftool](https://www.spinics.net/lists/netdev/msg458469.html)
  - [[PATCH net-next v4 1/3] tools: rename tools/net directory to tools/bpf](https://www.spinics.net/lists/netdev/msg458470.html)
  - [[PATCH net-next v4 2/3] tools: bpf: add bpftool](https://www.spinics.net/lists/netdev/msg458472.html)
  - [[PATCH net-next v4 3/3] tools: bpftool: add documentation](https://www.spinics.net/lists/netdev/msg458471.html)
- Eric Dumazet, [[PATCH net] socket, bpf: fix possible use after free](https://marc.info/?l=linux-netdev&m=150697205813377&w=2)
- Stephen Hemminger, [[PATCH net-next] samples/bpf: fix warnings in `xdp_monitor_user`](https://www.spinics.net/lists/netdev/msg457697.html)
- Martin KaFai Lau, [[PATCH net-next] bpf: Fix compiler warning on info.map_ids for 32bit platform](https://patchwork.ozlabs.org/patch/820040/)
- Yonghong Song, [[llvm] r314469 - bpf: fix a bug for disassembling ld_pseudo inst](http://llvm.org/viewvc/llvm-project?rev=314469&view=rev)
- Paul Chaignon, [[PATCH RFC v3] bpf: allow map helpers access to map values directly](https://lists.iovisor.org/pipermail/iovisor-dev/2017-September/001105.html)
- Mark Rutland, [EBPF-triggered WARNING at mm/percpu.c:1361 in v4-14-rc2](https://patchwork.kernel.org/patch/9975851/)
- Yonghong Song, [[llvm] r314376 - bpf: add new insns for `bswap_to_le` and negation](http://llvm.org/viewvc/llvm-project?rev=314376&view=rev)
- Martin KaFai Lau, [[PATCH net-next 0/5] bpf: Extend `bpf_{prog,map}_info`](https://patchwork.ozlabs.org/cover/819319/)
  - [[PATCH net-next 1/5] bpf: Add name, `load_time`, uid and `map_ids` to `bpf_prog_info`](https://patchwork.ozlabs.org/patch/819321/)
  - [[PATCH net-next 2/5] bpf: Add `map_name` to `bpf_map_info`](https://patchwork.ozlabs.org/patch/819322/)
  - [[PATCH net-next 3/5] bpf: libbpf: Provide basic API support to specify BPF obj name](https://patchwork.ozlabs.org/patch/819323/)
  - [[PATCH net-next 4/5] bpf: Swap the order of checking `prog_info` and `map_info`](https://patchwork.ozlabs.org/patch/819318/)
  - [[PATCH net-next 5/5] bpf: Test new fields in `bpf_attr` and `bpf_{prog,map}_info`](https://patchwork.ozlabs.org/patch/819320/)
- Matt Redfearn, [[PATCH] MIPS: bpf: Fix uninitialised target compiler error](https://lkml.org/lkml/2017/9/27/109)
- Edward Cree, [[PATCH v2 net-next 0/2] bpf/verifier: disassembly improvements](https://www.spinics.net/lists/netdev/msg456853.html)
  - [[PATCH v2 net-next 1/2] bpf/verifier: improve disassembly of `BPF_END` instructions](https://www.spinics.net/lists/netdev/msg456848.html)
  - [[PATCH v2 net-next 2/2] bpf/verifier: improve disassembly of `BPF_NEG` instructions](https://www.spinics.net/lists/netdev/msg456851.html)
- Daniel Borkmann, [[PATCH net-next 0/6] BPF metadata for direct access](https://www.spinics.net/lists/netdev/msg456521.html)
  - [[PATCH net-next 1/6] bpf: rename `bpf_compute_data_end` into `bpf_compute_data_pointers`](https://www.spinics.net/lists/netdev/msg456522.html)
  - [[PATCH net-next 2/6] bpf: add meta pointer for direct access](https://www.spinics.net/lists/netdev/msg456525.html)
  - [[PATCH net-next 3/6] bpf: update bpf.h uapi header for tools](https://www.spinics.net/lists/netdev/msg456526.html)
  - [[PATCH net-next 4/6] bpf: improve selftests and add tests for meta pointer](https://www.spinics.net/lists/netdev/msg456524.html)
  - [[PATCH net-next 5/6] bpf, nfp: add meta data support](https://www.spinics.net/lists/netdev/msg456523.html)
  - [[PATCH net-next 6/6] bpf, ixgbe: add meta data support](https://www.spinics.net/lists/netdev/msg456527.html)
- Jason Wang, [[PATCH net-next] virtio-net: correctly set xdp_xmit for mergeable buffer](https://patchwork.kernel.org/patch/9965257/)
- Yonghong Song, [[PATCH] bpf: add support for neg insn and change format of bswap insn](https://www.mail-archive.com/netdev@vger.kernel.org/msg189757/0001-bpf-add-support-for-neg-insn-and-change-format-of-bs.patch)
- Edward Cree, [[PATCH net-next] bpf/verifier: improve disassembly of BPF_END instructions](https://www.spinics.net/lists/netdev/msg456041.html)
- Cong Wang, [[Patch net-next v2] net_sched: use idr to allocate bpf filter handles](https://www.spinics.net/lists/netdev/msg456677.html)
- Jiong Wang, [[llvm] r313958 - bpf: refactor inst patterns with more mnemonics](http://llvm.org/viewvc/llvm-project?rev=313958&view=rev)
- Jiong Wang, [[llvm] r313959 - bpf: refactor inst patterns with better inheritance](http://llvm.org/viewvc/llvm-project?rev=313959&view=rev)
- Jiong Wang, [[llvm] r313960 - bpf: add 32bit register set](http://llvm.org/viewvc/llvm-project?rev=313960&view=rev)
- Jiong Wang, [[llvm] r313961 - bpf: initial 32-bit ALU encoding support in assembler](http://llvm.org/viewvc/llvm-project?rev=313961&view=rev)
- Craig Gallek, [[PATCH net-next v2] bpf: Optimize lpm trie delete](https://patchwork.ozlabs.org/patch/817197/)
- Joel Fernandes, [[PATCH v4 0/4] Add cross-compilation support to eBPF samples](https://www.spinics.net/lists/netdev/msg455739.html)
  - [[PATCH v4 1/4] samples/bpf: Use getppid instead of getpgrp for array map stress](https://www.spinics.net/lists/netdev/msg455745.html)
  - [[PATCH v4 2/4] samples/bpf: Enable cross compiler support](https://www.spinics.net/lists/netdev/msg455744.html)
  - [[PATCH v4 3/4] samples/bpf: Fix pt_regs issues when cross-compiling](https://www.spinics.net/lists/netdev/msg455743.html)
  - [[PATCH v4 4/4] samples/bpf: Add documentation on cross compilation](https://www.spinics.net/lists/netdev/msg455742.html)
- Daniel Borkmann, [[PATCH iproute2 master 0/2] BPF/XDP json follow-up](https://www.spinics.net/lists/netdev/msg455965.html)
  - [[PATCH iproute2 master 1/2] json: move json printer to common library](https://www.spinics.net/lists/netdev/msg455967.html)
  - [[PATCH iproute2 master 2/2] bpf: properly output json for xdp](https://www.spinics.net/lists/netdev/msg455966.html)
- Edward Cree, [[PATCH net] net: change skb->`mac_header` when Generic XDP calls `adjust_head`](https://patchwork.ozlabs.org/patch/815745/)
- Jason Wang [[PATCH net-next 1/3] virtio-net: remove unnecessary parameter of `virtnet_xdp_xmit()`](https://www.spinics.net/lists/netdev/msg455385.html)
  - [[PATCH net-next 2/3] virtio-net: add packet len average only when needed during XDP](https://www.spinics.net/lists/netdev/msg455384.html)
  - [[PATCH net-next 3/3] virtio-net: support XDP_REDIRECT](https://www.spinics.net/lists/netdev/msg455383.html)
- Eric Dumazet, [[PATCH net] bpf: do not disable/enable BH in `bpf_map_free_id()`](https://patchwork.ozlabs.org/patch/815636/)
- Jiong Wang, [[PATCH RFC 0/4] Initial 32-bit eBPF encoding support](https://www.spinics.net/lists/xdp-newbies/msg00353.html)
  - [[PATCH RFC 1/4] Improve instruction encoding descriptions](https://www.spinics.net/lists/xdp-newbies/msg00354.html)
  - [[PATCH RFC 2/4] Improve class inheritance in instruction patterns](https://www.spinics.net/lists/xdp-newbies/msg00355.html)
  - [[PATCH RFC 4/4] Initial 32-bit ALU encoding support in assembler](https://www.spinics.net/lists/xdp-newbies/msg00356.html)
  - [[PATCH RFC 3/4] New 32-bit register set](https://www.spinics.net/lists/xdp-newbies/msg00357.html)
- Yonghong Song, [[PATCH net] bpf: one perf event close won't free bpf program attached by another perf event](https://www.spinics.net/lists/netdev/msg455274.html)
- Daniel Borkmann, [[PATCH net v2] bpf: fix ri->`map_owner` pointer on `bpf_prog_realloc`](https://www.spinics.net/lists/netdev/msg455557.html)
- Yonghong Song, [[llvm] r313593 - bpf: add inline-asm support](http://llvm.org/viewvc/llvm-project?rev=313593&view=rev)
- Craig Gallek, [[PATCH net-next 0/3] Implement delete for BPF LPM trie](https://www.spinics.net/lists/netdev/msg455193.html)
  - [[PATCH net-next 1/3] bpf: Implement `map_delete_elem` for `BPF_MAP_TYPE_LPM_TRIE`](https://www.spinics.net/lists/netdev/msg455194.html)
  - [[PATCH net-next 2/3] bpf: Add uniqueness invariant to trivial lpm test implementation](https://www.spinics.net/lists/netdev/msg455196.html)
  - [[PATCH net-next 3/3] bpf: Test deletion in `BPF_MAP_TYPE_LPM_TRIE`](https://www.spinics.net/lists/netdev/msg455195.html)
- Tobias Klauser, [[PATCH] bpf: devmap: pass on return value of `bpf_map_precharge_memlock`](https://patchwork.ozlabs.org/patch/814911/)
- Simon Dardis, [[llvm] r313281 - [bpf] Fix test to always use little endian.](http://llvm.org/viewvc/llvm-project?rev=313281&view=rev)
- Edward Cree, [[PATCH net] bpf/verifier: reject `BPF_ALU64|BPF_END`](https://patchwork.ozlabs.org/patch/814279/)

Please note that netdev receives a lot of patches and the list above is not meant to be comprehensive.

<BlogAuthor {...authors.alexanderAlemayhu} />
