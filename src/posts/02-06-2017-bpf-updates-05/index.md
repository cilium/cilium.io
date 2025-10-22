---
path: '/blog/2017/5/31/bpf-updates-05'
date: '2017-06-02T15:00:53.000Z'
title: 'BPF Weekly Updates 05'
categories:
  - Technology
tags:
  - bpf
  - bpf-updates
  - ebpf
  - linux
ogSummary: 'Weekly eBPF newsletter covering Linux 4.12-rc3 release, MIPS eBPF JIT implementation, ARM 32-bit JIT v2, stack depth tracking for BPF-to-BPF function calls, BPF ID system introduction, and hardware offload improvements. Essential updates for kernel developers.'
---

import authors from 'utils/author-data';

This is issue 05 of the regular newsletter around BPF written by Alexander Alemayhu. It summarizes ongoing development, presentations, videos and other information related to BPF and XDP. It is released roughly once a week.

---

Linux 4.12-rc3 was released last week. One usual `[GIT] Networking` pull request with some BPF fixes made it in. You can read all the highlights in [26th May](http://www.mail-archive.com/linux-kernel@vger.kernel.org/msg1406659.html). Also the [release email](http://www.mail-archive.com/linux-kernel@vger.kernel.org/msg1407286.html) briefly mentions BPF

> Anyway, rc3 has a little bit of everything. The biggest single change is actually just a documentation update (the intel pstate docs were converted to rst format), so the diffstat actually looks a bit odd with a wuarter just being documentation. There's also some tooling updates (perf and some bpf selftest).

More interesting highlights

- ARM 32-bit eBPF JIT saw a v2.
- MIPS eBPF JIT is in the works.
- The stack depth tracking, one step closer BPF to BPF functions.

Checkout the patches section for all the links.

## Videos

### [Open-NFP - Transparent eBPF Offload: Playing Nice with the Linux Kernel](https://www.youtube.com/watch?v=W2v7zgUGp8A)

Introductory webinar on eBPF and XDP. It's mostly basic, so great talk for someone new to eBPF.

## In case you missed it

### [Further Reading](http://docs.cilium.io/en/stable/bpf/#further-reading)

The Cilium BPF and XDP reference guide has a growing collection of links to BPF content all around the web.

## Patches

- Daniel Borkmann, [[PATCH net v2 0/5] Various BPF fixes](https://www.mail-archive.com/netdev@vger.kernel.org/msg170113.html)
  - [[PATCH net v2 1/5] bpf: fix incorrect pruning decision when alignment must be tracked](https://www.mail-archive.com/netdev@vger.kernel.org/msg170112.html)
  - [[PATCH net v2 2/5] bpf: properly reset caller saved regs after helper call and ld_abs/ind](https://www.mail-archive.com/netdev@vger.kernel.org/msg170115.html)
  - [[PATCH net v2 3/5] bpf: add `bpf_clone_redirect` to `bpf_helper_changes_pkt_data`](https://www.mail-archive.com/netdev@vger.kernel.org/msg170114.html)
  - [[PATCH net v2 4/5] bpf: fix wrong exposure of map_flags into fdinfo for lpm](https://www.mail-archive.com/netdev@vger.kernel.org/msg170116.html)
  - [[PATCH net v2 5/5] bpf: add various verifier test cases](https://www.mail-archive.com/netdev@vger.kernel.org/msg170111.html)
- David Daney, [[PATCH] `test_bpf`: Add a couple of tests for `BPF_JSGE`](https://www.spinics.net/lists/netdev/msg436901.html)
- David Daney, [[PATCH 0/5] MIPS: Implement eBPF JIT](https://www.spinics.net/lists/kernel/msg2517660.html)
  - [[PATCH 1/5] MIPS: Optimize uasm insn lookup.](https://www.spinics.net/lists/kernel/msg2517665.html)
  - [[PATCH 2/5] MIPS: Correctly define DBSHFL type instruction opcodes.](https://www.spinics.net/lists/kernel/msg2517661.html)
  - [[PATCH 3/5] MIPS: Add some instructions to uasm.](https://www.spinics.net/lists/kernel/msg2517662.html)
  - [[PATCH 4/5] MIPS: Sort uasm enum opcode elements.](https://www.spinics.net/lists/kernel/msg2517663.html)
  - [[PATCH 5/5] MIPS: Add support for eBPF JIT.](https://www.spinics.net/lists/kernel/msg2517664.html)
- Teng Qin, [[PATCH v2 net-next 0/3] bpf: Add BPF support to all perf_event](https://www.spinics.net/lists/netdev/msg437068.html)
  - [[PATCH v2 net-next 1/3] perf, bpf: Add BPF support to all perf_event types](https://www.spinics.net/lists/kernel/msg2517762.html)
  - [[PATCH v2 net-next 2/3] samples/bpf: add samples for more perf event types](https://www.spinics.net/lists/kernel/msg2517761.html)
  - [[PATCH v2 net-next 3/3] bpf: update perf event helper functions documentatio](https://www.spinics.net/lists/kernel/msg2517763.html)
- Yonghong Song, [[llvm] r304043 - [bpf] disallow global_addr+off folding](http://llvm.org/viewvc/llvm-project?view=revision&revision=304043)
- Jesper Dangaard Brouer, [[PATCH net] samples/bpf: `bpf_load.c` order of `prog_fd[]` should correspond with ELF order](https://patchwork.ozlabs.org/patch/768589/)
- Jesper Dangaard Brouer, [[PATCH RFC] bpf: handle XDP features for bpf tail calls](https://patchwork.ozlabs.org/patch/768529/)
- Shubham Bansal, [[PATCH v2] arm: eBPF JIT compiler](https://www.spinics.net/lists/arm-kernel/msg583771.html)
- Alexei Starovoitov, [[PATCH net-next 0/9] bpf: stack depth tracking](https://www.spinics.net/lists/netdev/msg437603.html)
  - [[PATCH net-next 1/9] bpf: free up `BPF_JMP` | `BPF_CALL` | `BPF_X` opcode](https://www.spinics.net/lists/netdev/msg437607.html)
  - [[PATCH net-next 2/9] bpf: split bpf core interpreter](https://www.spinics.net/lists/netdev/msg437602.html)
  - [[PATCH net-next 3/9] bpf: teach verifier to track stack depth](https://www.spinics.net/lists/netdev/msg437605.html)
  - [[PATCH net-next 4/9] bpf: reconcile `bpf_tail_call` and stack_depth](https://www.spinics.net/lists/netdev/msg437610.html)
  - [[PATCH net-next 5/9] bpf: track stack depth of classic bpf programs](https://www.spinics.net/lists/netdev/msg437611.html)
  - [[PATCH net-next 6/9] bpf: fix `stack_depth` usage by `test_bpf.ko`](https://www.spinics.net/lists/netdev/msg437612.html)
  - [[PATCH net-next 7/9] bpf: use different interpreter depending on required stack size](https://www.spinics.net/lists/netdev/msg437613.html)
  - [[PATCH net-next 8/9] bpf: change x86 JITed program stack layout](https://www.spinics.net/lists/netdev/msg437606.html)
  - [[PATCH net-next 9/9] bpf: take advantage of stack_depth tracking in x64 JIT](https://www.spinics.net/lists/netdev/msg437609.html)
- Martin KaFai Lau, [[PATCH net-next 0/8] Introduce bpf ID](https://www.mail-archive.com/netdev@vger.kernel.org/msg170871.html)
  - [[PATCH net-next 1/8] bpf: Introduce bpf_prog ID](https://www.mail-archive.com/netdev@vger.kernel.org/msg170872.html)
  - [[PATCH net-next 2/8] bpf: Introduce bpf_map ID](https://www.mail-archive.com/netdev@vger.kernel.org/msg170873.html)
  - [[PATCH net-next 3/8] bpf: Add `BPF_(PROG|MAP)_GET_NEXT_ID` command](https://www.mail-archive.com/netdev@vger.kernel.org/msg170874.html)
  - [[PATCH net-next 4/8] bpf: Add `BPF_PROG_GET_FD_BY_ID`](https://www.mail-archive.com/netdev@vger.kernel.org/msg170870.html)
  - [[PATCH net-next 5/8] bpf: Add `BPF_MAP_GET_FD_BY_ID`](https://www.mail-archive.com/netdev@vger.kernel.org/msg170876.html)
  - [[PATCH net-next 6/8] bpf: Add `jited_len` to struct `bpf_prog`](https://www.mail-archive.com/netdev@vger.kernel.org/msg170877.html)
  - [[PATCH net-next 7/8] bpf: Add `BPF_OBJ_GET_INFO_BY_FD`](https://www.mail-archive.com/netdev@vger.kernel.org/msg170869.html)
  - [[PATCH net-next 8/8] bpf: Test for bpf ID](https://www.mail-archive.com/netdev@vger.kernel.org/msg170875.html)
- Jakub Kicinski, [[PATCH net-next 0/9] nfp: move BPF offload code into app](https://www.mail-archive.com/netdev@vger.kernel.org/msg170996.html)
  - [[PATCH net-next 1/9] sched: add helper for updating statistics on all actions](https://www.mail-archive.com/netdev@vger.kernel.org/msg170995.html)
  - [[PATCH net-next 2/9] nfp: add missing fall through statements](https://www.mail-archive.com/netdev@vger.kernel.org/msg170992.html)
  - [[PATCH net-next 3/9] nfp: turn reading PCIe RTsym parameters into a helper](https://www.mail-archive.com/netdev@vger.kernel.org/msg170994.html)
  - [[PATCH net-next 4/9] nfp: move port init to apps](https://www.mail-archive.com/netdev@vger.kernel.org/msg170993.html)
  - [[PATCH net-next 5/9] nfp: report app name in ethtool -i](https://www.mail-archive.com/netdev@vger.kernel.org/msg170987.html)
  - [[PATCH net-next 6/9] nfp: move eBPF offload files to BPF app directory](https://www.mail-archive.com/netdev@vger.kernel.org/msg170989.html)
  - [[PATCH net-next 7/9] nfp: move bpf offload code to the BPF app](https://www.mail-archive.com/netdev@vger.kernel.org/msg170988.html)
  - [[PATCH net-next 8/9] nfp: move basic eBPF stats to app-specific code](https://www.mail-archive.com/netdev@vger.kernel.org/msg170990.html)
  - [[PATCH net-next 9/9] nfp: fix memory leak on FW load error](https://www.mail-archive.com/netdev@vger.kernel.org/msg170991.html)

Please note that netdev receives a lot of patches and the list above is not meant to be comprehensive.

Happy eBPF hacking!
