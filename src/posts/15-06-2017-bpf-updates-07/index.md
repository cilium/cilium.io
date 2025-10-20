---
path: '/blog/2017/6/15/bpf-updates-07'
date: '2017-06-15T16:22:21.000Z'
author: 'Alexander Alemayhu'
title: 'BPF updates 07'
categories:
  - Technology
tags:
  - bpf
  - bpf-updates
  - ebpf
ogSummary: 'Linux 4.12-rc5 was recently released. No BPF changes where included, but a usual [GIT] Networking pull request was made afterwards. You can see the changes in 15th June.'
---

This is issue 07 of the regular newsletter around BPF written by Alexander Alemayhu. It summarizes ongoing development, presentations, videos and other information related to BPF and XDP. It is released roughly once a week.

---

Linux 4.12-rc5 was recently released. No BPF changes where included, but a usual `[GIT] Networking` pull request was made afterwards. You can see the changes in [15th June](https://patchwork.ozlabs.org/patch/776103/).

There were also several other patches to netdev and related lists. Most of them are fixes. The highlights are

- New program type `BPF_PROG_TYPE_SOCKET_OPS` is in the works.
- Reporting XDP program ids via netlink.
- Improvements to the bpf tests.
- MIPS eBPF JIT got [applied](https://www.spinics.net/lists/netdev/msg440291.html).

## In case you missed it

### [eBPF and systems performance](https://www.oreilly.com/ideas/ebpf-and-systems-performance?cmp=tw-webops-confreg-article-vlca17_gregg_article_ac)

Short post explaining what eBPF is.

### [Build issues for samples/bpf/ after rebase or git pull (solved)](https://www.spinics.net/lists/xdp-newbies/msg00208.html)

One of the not so obvious things when building bpf programs is the headers. If your project is reusing the kernel infrastructure you will need to keep your headers synchronized. This post tells you how.

### [[iovisor-dev] minutes: IO Visor TSC/Dev Meeting](https://lists.iovisor.org/pipermail/iovisor-dev/2017-June/000808.html)

From the meeting notes, looks like there will some interesting upcoming BPF talks in LA.

### [XDP Newbies...](https://www.mail-archive.com/netdev@vger.kernel.org/msg162375.html)

> Which is a place where people can talk about getting up to speed with setting up an XDP build environment and writing XDP programs.

You can subscribe by sending a email to `majordomo@vger.kernel.org`, with a message body containing `subscribe xdp-newbies`. No subject is needed, but you can of course add one if you like.

## [Random cool note](https://twitter.com/kinvolkio/status/872057905603911680)

> Merged! @weaveworks' #WeaveScope now uses #eBPF as default for connection info: [https://github.com/weaveworks/scope/pull/2535](https://github.com/weaveworks/scope/pull/2535) …
>
> Background: [https://www.weave.works/blog/improving-performance-reliability-weave-scope-ebpf/](https://www.weave.works/blog/improving-performance-reliability-weave-scope-ebpf/) …

## Patches

- Daniel Borkmann, [[PATCH net] bpf, tests: fix endianness selection](https://patchwork.ozlabs.org/patch/773390/)
- Martin KaFai Lau, [[PATCH net-next 1/2] bpf: Fix `test_bpf_obj_id()` when the `bpf_jit_enable` sysctl is diabled](https://www.spinics.net/lists/netdev/msg439434.html)
- Martin KaFai Lau, [[PATCH net-next 2/2] bpf: Fix `test_obj_id.c` for llvm 5.0](https://www.spinics.net/lists/netdev/msg439433.html)
- Chenbo Feng, [[PATCH net-next] bpf: Remove duplicate tcp_filter hook in ipv6](https://patchwork.ozlabs.org/patch/774126/)
- Daniel Borkmann, [[PATCH net-next 0/8] Misc BPF updates](https://www.mail-archive.com/netdev@vger.kernel.org/msg172962.html)
  - [[PATCH net-next 1/8] bpf: avoid excessive stack usage for `perf_sample_data`](https://www.mail-archive.com/netdev@vger.kernel.org/msg172960.html)
  - [[PATCH net-next 2/8] bpf: don't check spilled reg state for non-STACK_SPILLed type slots](https://www.mail-archive.com/netdev@vger.kernel.org/msg172964.html)
  - [[PATCH net-next 3/8] bpf: reset id on CONST_IMM transition](https://www.mail-archive.com/netdev@vger.kernel.org/msg172967.html)
  - [[PATCH net-next 4/8] bpf: reset id on spilled regs in `clear_all_pkt_pointers`](https://www.mail-archive.com/netdev@vger.kernel.org/msg172965.html)
  - [[PATCH net-next 5/8] bpf, tests: add a test for htab lookup + update traversal](https://www.mail-archive.com/netdev@vger.kernel.org/msg172963.html)
  - [[PATCH net-next 6/8] bpf, tests: set rlimit also for test_align, so it doesn't fail](https://www.mail-archive.com/netdev@vger.kernel.org/msg172961.html)
  - [[PATCH net-next 7/8] bpf: remove `cg_skb_func_proto` and use `sk_filter_func_proto` directly](https://www.mail-archive.com/netdev@vger.kernel.org/msg172959.html)
  - [[PATCH net-next 8/8] bpf: add `bpf_set_hash` helper for tc progs](https://www.mail-archive.com/netdev@vger.kernel.org/msg172966.html)
- Daniel Borkmann, [[PATCH net-next] bpf, arm64: take advantage of stack_depth tracking](https://www.spinics.net/lists/netdev/msg439741.html)
- Jakub Kicinski, [[PATCH net-next] xdp: add reporting of offload mode](https://www.mail-archive.com/netdev@vger.kernel.org/msg173217.html)
- Jesper Dangaard Brouer, [[PATCH net-next] selftests/bpf: make correct use of exit codes in bpf selftests](https://patchwork.ozlabs.org/patch/775159/)
- Yonghong Song, [[llvm] r305301 - bpf: clang-format on BPFAsmPrinter.cpp](http://llvm.org/viewvc/llvm-project?rev=305301&view=rev)
- Lawrence Brakmo, [[RFC PATCH net-next 00/15] bpf: Add new SOCKET_OPS program type](https://www.spinics.net/lists/netdev/msg440117.html)
  - [[RFC PATCH net-next 01/15] net: BPF support for socket ops](https://www.spinics.net/lists/netdev/msg440120.html)
  - [[RFC PATCH net-next 02/15] bpf: program to load socketops BPF programs](https://www.spinics.net/lists/netdev/msg440123.html)
  - [[RFC PATCH net-next 03/15] bpf: Support for per connection SYN/SYN-ACK RTOs](https://www.spinics.net/lists/netdev/msg440124.html)
  - [[RFC PATCH net-next 04/15] bpf: Sample bpf program to set SYN/SYN-ACK RTOs](https://www.spinics.net/lists/netdev/msg440127.html)
  - [[RFC PATCH net-next 05/15] bpf: Support for setting initial receive window](https://www.spinics.net/lists/netdev/msg440119.html)
  - [[RFC PATCH net-next 06/15] bpf: Sample bpf program to set initial window](https://www.spinics.net/lists/netdev/msg440126.html)
  - [[RFC PATCH net-next 07/15] bpf: Add setsockopt helper function to bpf](https://www.spinics.net/lists/netdev/msg440121.html)
  - [[RFC PATCH net-next 08/15] bpf: Add TCP connection BPF callbacks](https://www.spinics.net/lists/netdev/msg440131.html)
  - [[RFC PATCH net-next 09/15] bpf: Sample BPF program to set buffer sizes](https://www.spinics.net/lists/netdev/msg440133.html)
  - [[RFC PATCH net-next 10/15] bpf: Add support for changing congestion control](https://www.spinics.net/lists/netdev/msg440134.html)
  - [[RFC PATCH net-next 11/15] bpf: Sample BPF program to set congestion control](https://www.spinics.net/lists/netdev/msg440132.html)
  - [[RFC PATCH net-next 12/15] bpf: Adds support for setting initial cwnd](https://www.spinics.net/lists/netdev/msg440122.html)
  - [[RFC PATCH net-next 13/15] bpf: Sample BPF program to set initial cwnd](https://www.spinics.net/lists/netdev/msg440125.html)
  - [[RFC PATCH net-next 14/15] bpf: Adds support for setting sndcwnd clamp](https://www.spinics.net/lists/netdev/msg440130.html)
  - [[RFC PATCH net-next 15/15] bpf: Sample bpf program to set sndcwnd clamp](https://www.spinics.net/lists/netdev/msg440129.html)
- Yonghong Song, [[PATCH 0/2] bpf: permit bpf program narrower loads for ctx fields](https://www.spinics.net/lists/netdev/msg440209.html)
  - [[PATCH 1/2] bpf: permits narrower load from bpf program context fields](https://www.spinics.net/lists/netdev/msg440210.html)
  - [[PATCH 2/2] selftests/bpf: Add test cases to test narrower ctx field loads](https://www.spinics.net/lists/netdev/msg440211.html)
- David Daney, [[PATCH v2 0/5] MIPS: Implement eBPF JIT.](https://www.spinics.net/lists/netdev/msg440206.html)
  - [[PATCH v2 1/5] MIPS: Optimize uasm insn lookup.](https://www.spinics.net/lists/netdev/msg440207.html)
  - [[PATCH v2 2/5] MIPS: Correctly define DBSHFL type instruction opcodes.](https://www.spinics.net/lists/netdev/msg440205.html)
  - [[PATCH v2 3/5] MIPS: Add some instructions to uasm.](https://www.spinics.net/lists/netdev/msg440202.html)
  - [[PATCH v2 4/5] MIPS: Add support for eBPF JIT.](https://www.spinics.net/lists/netdev/msg440204.html)
  - [[PATCH v2 5/5] MIPS: Give `__secure_computing()` access to syscall arguments.](https://www.spinics.net/lists/netdev/msg440203.html)
- David Daney, [[PATCH 0/4] bpf: Changes needed (or desired) for MIPS support](https://www.spinics.net/lists/netdev/msg440232.html)
  - [[PATCH 1/4] tools: `bpf_jit_disasm`: Handle large images.](https://www.spinics.net/lists/netdev/msg440233.html)
  - [[PATCH 2/4] test_bpf: Add test to make conditional jump cross a large number of insns.](https://www.spinics.net/lists/netdev/msg440231.html)
  - [[PATCH 3/4] bpf: Add MIPS support to samples/bpf.](https://www.spinics.net/lists/netdev/msg440229.html)
  - [[PATCH 4/4] samples/bpf: Fix tracex5 to work with MIPS syscalls.](https://www.spinics.net/lists/netdev/msg440230.html)
- Martin KaFai La, [[PATCH v2 net-next 0/9] bpf: xdp: Report `bpf_prog` ID in `IFLA_XDP`](https://www.spinics.net/lists/netdev/msg440175.html)
  - [[PATCH v2 net-next 1/9] net: Add `IFLA_XDP_PROG_ID`](https://www.spinics.net/lists/netdev/msg440174.html)
  - [[PATCH v2 net-next 2/9] bpf: mlx4: Report `bpf_prog` ID during `XDP_QUERY_PROG`](https://www.spinics.net/lists/netdev/msg440172.html)
  - [[PATCH v2 net-next 3/9] bpf: mlx5e: Report `bpf_prog` ID during `XDP_QUERY_PROG`](https://www.spinics.net/lists/netdev/msg440180.html)
  - [[PATCH v2 net-next 4/9] bpf: `virtio_net`: Report `bpf_prog` ID during `XDP_QUERY_PROG`](https://www.spinics.net/lists/netdev/msg440178.html)
  - [[PATCH v2 net-next 5/9] bpf: bnxt: Report `bpf_prog` ID during `XDP_QUERY_PROG`](https://www.spinics.net/lists/netdev/msg440183.html)
  - [[PATCH v2 net-next 6/9] bpf: thunderx: Report `bpf_prog` ID during `XDP_QUERY_PROG`](https://www.spinics.net/lists/netdev/msg440176.html)
  - [[PATCH v2 net-next 7/9] bpf: ixgbe: Report `bpf_prog` ID during `XDP_QUERY_PROG`](https://www.spinics.net/lists/netdev/msg440173.html)
  - [[PATCH v2 net-next 8/9] bpf: nfp: Report `bpf_prog` ID during `XDP_QUERY_PROG`](https://www.spinics.net/lists/netdev/msg440181.html)
  - [[PATCH v2 net-next 9/9] bpf: qede: Report `bpf_prog` ID during `XDP_QUERY_PROG`](https://www.spinics.net/lists/netdev/msg440182.html)
- Daniel Borkmann, [[PATCH iproute2 master] bpf: provide fallback defs for `__NR_bpf` when not avail](https://www.spinics.net/lists/netdev/msg440461.html)
- Tariq Toukan, [[PATCH net-next 00/10] mlx4 XDP performance improvements](https://www.mail-archive.com/netdev@vger.kernel.org/msg173775.html)
  - [[PATCH net-next 01/10] net/mlx4_en: Remove unused argument in TX datapath function](https://www.mail-archive.com/netdev@vger.kernel.org/msg173785.html)
  - [[PATCH net-next 02/10] net/mlx4_en: Optimized single ring steering](https://www.mail-archive.com/netdev@vger.kernel.org/msg173777.html)
  - [[PATCH net-next 03/10] net/mlx4_en: Improve receive data-path](https://www.mail-archive.com/netdev@vger.kernel.org/msg173780.html)
  - [[PATCH net-next 04/10] net/mlx4_en: Improve transmit CQ polling](https://www.mail-archive.com/netdev@vger.kernel.org/msg173776.html)
  - [[PATCH net-next 05/10] net/mlx4_en: Improve stack xmit function](https://www.mail-archive.com/netdev@vger.kernel.org/msg173782.html)
  - [[PATCH net-next 06/10] net/mlx4_en: Improve XDP xmit function](https://www.mail-archive.com/netdev@vger.kernel.org/msg173781.html)
  - [[PATCH net-next 07/10] net/mlx4_en: Poll XDP TX completion queue in RX NAPI](https://www.mail-archive.com/netdev@vger.kernel.org/msg173778.html)
  - [[PATCH net-next 08/10] net/mlx4_en: Increase default TX ring size](https://www.mail-archive.com/netdev@vger.kernel.org/msg173779.html)
  - [[PATCH net-next 09/10] `net/mlx4_en`: Replace `TXBB_SIZE` multiplications with shift operations](https://www.mail-archive.com/netdev@vger.kernel.org/msg173783.html)
  - [[PATCH net-next 10/10] `net/mlx4_en`: Refactor `mlx4_en_free_tx_desc`](https://www.mail-archive.com/netdev@vger.kernel.org/msg173784.html)

Please note that netdev receives a lot of patches and the list above is not meant to be comprehensive.

Happy eBPF hacking!
