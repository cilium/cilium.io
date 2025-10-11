---
path: '/blog/2017/7/10/bpf-updates-08'
date: '2017-07-10T09:11:13.000Z'
title: 'BPF updates 08'
categories:
  - Technology
tags:
  - bpf-updates
  - bpf
  - ebpf
ogSummary: 'Linux 4.12 released with BPF improvements. i40e driver gains XDP support for drop, pass, and TX actions. New BPF_PROG_TYPE_SOCKET_OPS enables TCP connection control.'
---

This is issue 08 of the regular newsletter around BPF written by Alexander Alemayhu. It summarizes ongoing development, presentations, videos and other information related to BPF and XDP. It is released roughly once a week.

---

Linux 4.12 was released and net-next is closed. The Kernel Newbies release notes is still under construction but worth checking out for the BPF commits in [4.12](https://kernelnewbies.org/Linux_4.12).

Most of the new patches from the lists should show up in the next release candidate for 4.13\. Some highlights from the recent activity are

- i40e gets XDP support for drop, pass and tx actions.
- Iterations of the alignment tracking work. The main changes; dropped RFC tag and added more tests.
- NFP flag for XDP offload mode to offer more flexibility for programs that can be offloaded.
- The new `BPF_PROG_TYPE_SOCKET_OPS` series got [merged](https://www.spinics.net/lists/netdev/msg443208.html).

More interesting topics

- iproute gets support for `IFLA_XDP_PROG_ID`. Also `cls_bpf` and `act_bpf` start using the BPF program id.
- BPF program id available for i40e via `XDP_QUERY_PROG`.
- A new function helper `bpf_skb_adjust_room` for adjusting net headroom.

One issue reoccurring is the header asm issue. While BPF can mix and match headers from kernel and userspace, the asm headers seem to be causing pain. Will one more hack be added on top of BPF, or will we see a clean / nice solution emerge from the [disccusions](https://www.mail-archive.com/netdev@vger.kernel.org/msg174021.html)?

## Presentations

### Videos

#### [SmartNIC Architecture, Open Programming Models Overview - DXDD Europe](https://youtu.be/Bffoywnkytc)

Netronome has support for offloading XDP programs. The talk covers the options for programming their cards, and shows how BPF fits into their architecture.

### Slides

#### [Velocity 2017 Performance analysis superpowers with Linux eBPF](https://www.slideshare.net/brendangregg/velocity-2017-performance-analysis-superpowers-with-linux-ebpf)

The slides are mostly focusing on the BCC tool chain. Very informative diagrams on the tracing options.

#### [The BSD Packet Filter A New Architecture for User-level Packet Capture](http://step.polymtl.ca/~suchakra/PWL-Jun28-MTL.pdf)

This is walk-through of the original BPF paper. The slides are really good. This serves as a great introduction or reviewing the concepts of the old and new BPF.

## In case you missed it

#### [Notes on BPF & eBPF](https://jvns.ca/blog/2017/06/28/notes-on-bpf---ebpf/)

The post describes the basics. Also nice to see a short explanation on control flow graph. The links to all of the example programs / code are useful for beginners.

#### [[iovisor-dev] minutes: IO Visor TSC/Dev Call](https://lists.iovisor.org/pipermail/iovisor-dev/2017-June/000847.html)

Looks like there will be more XDP patches showing up soon :)

## Projects

Below is a list of random projects on Github. Check them out and Remember to give a star, if you like the project ;)

#### [tbpoc-bpf](https://github.com/qmonnet/tbpoc-bpf)

> Stateful packet processing: two-color token-bucket PoC in BPF

#### [VALE BPF Extention Module](https://github.com/YutaroHayakawa/vale-bpf)

> Vale-bpf module is an extention of VALE software switch.
>
> This module makes VALE possible to program with eBPF.

#### [Linux Tracing Workshops Materials](https://github.com/goldshtn/linux-tracing-workshop)

> This repository contains examples and hands-on labs for various Linux tracing workshops, focusing on modern tracing tools

#### [bpf-map](https://github.com/cilium/bpf-map)

> A small tool to generically introspect BPF maps without requiring to be aware of the specific data structures stored inside. Can print the metadata of the map or its contents in hexadecimal form.

#### [ebpf-disasm](https://github.com/badboy/ebpf-disasm)

> A simple eBPF disassembler, based on rbpf.
>
> It loads the compiled eBPF code from an ELF file and prints it out.

## Patches

- Lawrence Brakmo, [[PATCH net-next] bpf: fix to bpf_setsockops](https://www.spinics.net/lists/netdev/msg443249.html)
- Daniel Borkmann, [[PATCH net-next 0/7] Misc BPF helper/verifier improvements](https://www.spinics.net/lists/netdev/msg443210.html)
  - [[PATCH net-next 1/7] bpf, net: add `skb_mac_header_len` helper](https://www.spinics.net/lists/netdev/msg443209.html)
  - [[PATCH net-next 2/7] bpf: add `bpf_skb_adjust_room` helper](https://www.spinics.net/lists/netdev/msg443214.html)
  - [[PATCH net-next 3/7] bpf: simplify narrower ctx access](https://www.spinics.net/lists/netdev/msg443213.html)
  - [[PATCH net-next 4/7] bpf: export whether tail call has jited owner](https://www.spinics.net/lists/netdev/msg443212.html)
  - [[PATCH net-next 5/7] bpf: extend `bpf_trace_printk` to support %i](https://www.spinics.net/lists/netdev/msg443211.html)
  - [[PATCH net-next 6/7] bpf, verifier: add additional patterns to `evaluate_reg_imm_alu`](https://www.spinics.net/lists/netdev/msg443216.html)
  - [[PATCH net-next 7/7] bpf: add various test cases for verifier selftest](https://www.spinics.net/lists/netdev/msg443215.html)
- Lawrence Brakmo, [[PATCH net-next v6 00/16] bpf: Adds support for sock_ops](https://www.spinics.net/lists/netdev/msg443170.html)
  - [[PATCH net-next v6 01/16] bpf: BPF support for sock_ops](https://www.spinics.net/lists/netdev/msg443173.html)
  - [[PATCH net-next v6 02/16] bpf: program to load and attach sock_ops BPF progs](https://www.spinics.net/lists/netdev/msg443168.html)
  - [[PATCH net-next v6 03/16] bpf: Support for per connection SYN/SYN-ACK RTOs](https://www.spinics.net/lists/netdev/msg443171.html)
  - [[PATCH net-next v6 04/16] bpf: Sample bpf program to set SYN/SYN-ACK RTOs](https://www.spinics.net/lists/netdev/msg443180.html)
  - [[PATCH net-next v6 05/16] bpf: Support for setting initial receive window](https://www.spinics.net/lists/netdev/msg443179.html)
  - [[PATCH net-next v6 06/16] bpf: Sample bpf program to set initial window](https://www.spinics.net/lists/netdev/msg443165.html)
  - [[PATCH net-next v6 07/16] bpf: Add setsockopt helper function to bpf](https://www.spinics.net/lists/netdev/msg443172.html)
  - [[PATCH net-next v6 08/16] bpf: Add TCP connection BPF callbacks](https://www.spinics.net/lists/netdev/msg443164.html)
  - [[PATCH net-next v6 09/16] bpf: Sample BPF program to set buffer sizes](https://www.spinics.net/lists/netdev/msg443166.html)
  - [[PATCH net-next v6 10/16] bpf: Add support for changing congestion control](https://www.spinics.net/lists/netdev/msg443175.html)
  - [[PATCH net-next v6 11/16] bpf: Sample BPF program to set congestion control](https://www.spinics.net/lists/netdev/msg443167.html)
  - [[PATCH net-next v6 12/16] bpf: Adds support for setting initial cwnd](https://www.spinics.net/lists/netdev/msg443169.html)
  - [[PATCH net-next v6 13/16] bpf: Sample BPF program to set initial cwnd](https://www.spinics.net/lists/netdev/msg443176.html)
  - [[PATCH net-next v6 14/16] bpf: Adds support for setting sndcwnd clamp](https://www.spinics.net/lists/netdev/msg443174.html)
  - [[PATCH net-next v6 15/16] bpf: Sample bpf program to set sndcwnd clamp](https://www.spinics.net/lists/netdev/msg443177.html)
  - [[PATCH net-next v6 16/16] bpf: update tools/include/uapi/linux/bpf.h](https://www.spinics.net/lists/netdev/msg443178.html)
- Edward Cree, [[TEST PATCH] bpf/verifier: roll back ptr&const handling, and fix signed bounds](https://www.mail-archive.com/linux-kernel@vger.kernel.org/msg1435355.html)
- Yonghong Song, [[llvm] r306685 - bpf: remove unnecessary truncate operation](http://llvm.org/viewvc/llvm-project?view=revision&revision=306685)
- Daniel Borkmann, [[PATCH net] bpf: prevent leaking pointer via xadd on unpriviledged](https://www.spinics.net/lists/netdev/msg442767.html)
- Edward Cree, [[iovisor-dev] [PATCH v3 net-next 00/12] bpf: rewrite value tracking in verifier](https://www.spinics.net/lists/netdev/msg442458.html)
  - [[iovisor-dev] [PATCH v3 net-next 01/12] selftests/bpf: add test for mixed signed and unsigned bounds checks](https://www.spinics.net/lists/netdev/msg442459.html)
  - [[iovisor-dev] [PATCH v3 net-next 02/12] bpf/verifier: rework value tracking](https://www.spinics.net/lists/netdev/msg442460.html)
  - [[iovisor-dev] [PATCH v3 net-next 03/12] nfp: change bpf verifier hooks to match new verifier data structures](https://www.spinics.net/lists/netdev/msg442461.html)
  - [[iovisor-dev] [PATCH v3 net-next 04/12] bpf/verifier: track signed and unsigned min/max values](https://www.spinics.net/lists/netdev/msg442462.html)
  - [[iovisor-dev] [PATCH v3 net-next 05/12] bpf/verifier: more concise register state logs for constant var_off](https://www.spinics.net/lists/netdev/msg442470.html)
  - [[iovisor-dev] [PATCH v3 net-next 06/12] selftests/bpf: change test_verifier expectations](https://www.spinics.net/lists/netdev/msg442463.html)
  - [[iovisor-dev] [PATCH v3 net-next 07/12] selftests/bpf: rewrite test_align](https://www.spinics.net/lists/netdev/msg442464.html)
  - [[iovisor-dev] [PATCH v3 net-next 08/12] selftests/bpf: add a test to test_align](https://www.spinics.net/lists/netdev/msg442465.html)
  - [[iovisor-dev] [PATCH v3 net-next 09/12] selftests/bpf: add test for bogus operations on pointers](https://www.spinics.net/lists/netdev/msg442469.html)
  - [[iovisor-dev] [PATCH v3 net-next 10/12] selftests/bpf: don't try to access past `MAX_PACKET_OFF` in `test_verifier`](https://www.spinics.net/lists/netdev/msg442466.html)
  - [[iovisor-dev] [PATCH v3 net-next 11/12] selftests/bpf: add tests for subtraction & negative numbers](https://www.spinics.net/lists/netdev/msg442467.html)
  - [[iovisor-dev] [PATCH v3 net-next 12/12] selftests/bpf: variable offset negative tests](https://www.spinics.net/lists/netdev/msg442468.html)
- Martin KaFai Lau, [[PATCH net-next] bpf: Fix out-of-bound access on interpreters[]](https://patchwork.ozlabs.org/patch/781809/)
- Jason Wang, [[PATCH net] virtio-net: unbreak cusmed packet for small buffer XDP](https://patchwork.kernel.org/patch/9813373/)
- Martin KaiFai Lau, [[PATCH net-next 0/2] bpf: Add syscall lookup support for fd array and htab](https://www.spinics.net/lists/netdev/msg442604.html)
  - [[PATCH net-next 1/2] bpf: Add syscall lookup support for fd array and htab](https://www.spinics.net/lists/netdev/msg442605.html)
  - [[PATCH net-next 2/2] bpf: Add test for syscall on fd array/htab lookup](https://www.spinics.net/lists/netdev/msg442606.html)
- Daniel Borkmann, [[PATCH iproute2] bpf: indicate lderr when `bpf_apply_relo_data` fails](https://www.spinics.net/lists/netdev/msg442370.html)
- Jakub Kicinski, [[PATCH iproute2 0/3] ip-link: XDP flags and offload mode](https://www.spinics.net/lists/netdev/msg442363.html)
  - [[PATCH iproute2 1/3] bpf: print xdp offloaded mode](https://www.spinics.net/lists/netdev/msg442364.html)
  - [[PATCH iproute2 2/3] bpf: add xdpdrv for requesting XDP driver mode](https://www.spinics.net/lists/netdev/msg442366.html)
  - [[PATCH iproute2 3/3] bpf: allow requesting XDP HW offload](https://www.spinics.net/lists/netdev/msg442365.html)
- Yonghong Song, [[PATCH net-next] bpf: possibly avoid extra masking for narrower load in verifier](https://www.spinics.net/lists/netdev/msg441963.html)
- Shubham Bansal, [[PATCH] Added Support for `BPF_CALL` | `BPF_JMP`.](http://www.mail-archive.com/linux-kernel@vger.kernel.org/msg1430003.html)
- David Daney, [[PATCH RFC 0/3] bpf/arm64/mips: Avoid inline asm in BPF](https://www.mail-archive.com/netdev@vger.kernel.org/msg173949.html)
  - [[PATCH RFC 1/3] arm64: Gate inclusion of asm/sysreg.h by **EMITTING_BPF**](https://www.mail-archive.com/netdev@vger.kernel.org/msg173951.html)
  - [[PATCH RFC 2/3] samples/bpf: Add define **EMITTING_BPF** when building BPF](https://www.mail-archive.com/netdev@vger.kernel.org/msg173950.html)
  - [[PATCH RFC 3/3] MIPS: Include file changes to enable building BPF code with llvm](https://www.mail-archive.com/netdev@vger.kernel.org/msg173948.html)
- Martin KaFai La, [[PATCH v3 net-next 0/9] bpf: xdp: Report `bpf_prog` ID in `IFLA_XDP`](https://www.spinics.net/lists/netdev/msg440723.html)
  - [[PATCH v3 net-next 1/9] net: Add `IFLA_XDP_PROG_ID`](https://www.spinics.net/lists/netdev/msg440721.html)
  - [[PATCH v3 net-next 2/9] bpf: mlx4: Report `bpf_prog` ID during `XDP_QUERY_PROG`](https://www.spinics.net/lists/netdev/msg440722.html)
  - [[PATCH v3 net-next 3/9] bpf: mlx5e: Report `bpf_prog` ID during `XDP_QUERY_PROG`](https://www.spinics.net/lists/netdev/msg440725.html)
  - [[PATCH v3 net-next 4/9] bpf: `virtio_net`: Report `bpf_prog` ID during `XDP_QUERY_PROG`](https://www.spinics.net/lists/netdev/msg440720.html)
  - [[PATCH v3 net-next 5/9] bpf: bnxt: Report `bpf_prog` ID during `XDP_QUERY_PROG`](https://www.spinics.net/lists/netdev/msg440719.html)
  - [[PATCH v3 net-next 6/9] bpf: thunderx: Report `bpf_prog` ID during `XDP_QUERY_PROG`](https://www.spinics.net/lists/netdev/msg440724.html)
  - [[PATCH v3 net-next 7/9] bpf: ixgbe: Report `bpf_prog` ID during `XDP_QUERY_PROG`](https://www.spinics.net/lists/netdev/msg440717.html)
  - [[PATCH v3 net-next 8/9] bpf: nfp: Report `bpf_prog` ID during `XDP_QUERY_PROG`](https://www.spinics.net/lists/netdev/msg440718.html)
  - [[PATCH v3 net-next 9/9] bpf: qede: Report `bpf_prog` ID during `XDP_QUERY_PROG`](https://www.spinics.net/lists/netdev/msg440726.html)
- Yonghong Song, [[llvm] r305559 - bpf: set missing types in insn tablegen file](http://llvm.org/viewvc/llvm-project?rev=305559&view=rev)
- Yonghong Song, [[llvm] r305560 - bpf: avoid load from read-only sections](http://llvm.org/viewvc/llvm-project?rev=305560&view=rev)
- Yonghong Song, [[llvm] r305608 - bpf: fix a strict-aliasing issue](http://llvm.org/viewvc/llvm-project?rev=305608&view=rev)
- Jakub Kicinski, [[PATCH net-next 0/8] xdp: offload mode](https://www.spinics.net/lists/netdev/msg441794.html)
  - [[PATCH net-next 1/8] xdp: pass XDP flags into install handlers](https://www.spinics.net/lists/netdev/msg441796.html)
  - [[PATCH net-next 2/8] xdp: add HW offload mode flag for installing programs](https://www.spinics.net/lists/netdev/msg441802.html)
  - [[PATCH net-next 3/8] nfp: xdp: move driver XDP setup into a separate function](https://www.spinics.net/lists/netdev/msg441801.html)
  - [[PATCH net-next 4/8] nfp: bpf: don't offload XDP programs in DRV_MODE](https://www.spinics.net/lists/netdev/msg441800.html)
  - [[PATCH net-next 5/8] nfp: bpf: release the reference on offloaded programs](https://www.spinics.net/lists/netdev/msg441795.html)
  - [[PATCH net-next 6/8] nfp: bpf: add support for `XDP_FLAGS_HW_MODE`](https://www.spinics.net/lists/netdev/msg441799.html)
  - [[PATCH net-next 7/8] xdp: add reporting of offload mode](https://www.spinics.net/lists/netdev/msg441797.html)
  - [[PATCH net-next 8/8] nfp: xdp: report if program is offloaded](https://www.spinics.net/lists/netdev/msg441798.html)
- Wang Nan, [[PATCH] perf test llvm: Avoid error when `PROFILE_ALL_BRANCHES` is set](https://patchwork.kernel.org/patch/9795735/)
- Jeff Kirsher, [[net-next 00/15][pull request] 40GbE Intel Wired LAN Driver Updates 2017-06-20](https://www.spinics.net/lists/netdev/msg441505.html)
  - [[net-next 01/15] i40e: add XDP support for pass and drop actions](https://www.spinics.net/lists/netdev/msg441507.html)
  - [[net-next 02/15] i40e: add support for XDP_TX action](https://www.spinics.net/lists/netdev/msg441518.html)
  - [[net-next 03/15] i40evf: assign `num_active_queues` inside `i40evf_alloc_queues`](https://www.spinics.net/lists/netdev/msg441520.html)
  - [[net-next 04/15] i40e/i40evf: update WOL and `I40E_AQC_ADDR_VALID_MASK` flags](https://www.spinics.net/lists/netdev/msg441509.html)
  - [[net-next 05/15] i40e: use `dev_dbg` instead of `dev_info` when warning about missing routine](https://www.spinics.net/lists/netdev/msg441516.html)
  - [[net-next 06/15] i40e: comment that udp_port must be in host byte order](https://www.spinics.net/lists/netdev/msg441515.html)
  - [[net-next 07/15] i40e: Fix potential out of bound array access](https://www.spinics.net/lists/netdev/msg441513.html)
  - [[net-next 08/15] i40e: Support firmware CEE DCB UP to TC map re-definition](https://www.spinics.net/lists/netdev/msg441508.html)
  - [[net-next 09/15] i40e: Add message for unsupported MFP mode](https://www.spinics.net/lists/netdev/msg441511.html)
  - [[net-next 10/15] i40e: genericize the partition bandwidth control](https://www.spinics.net/lists/netdev/msg441519.html)
  - [[net-next 11/15] i40e: Add support for OEM firmware version](https://www.spinics.net/lists/netdev/msg441506.html)
  - [[net-next 12/15] i40e: fix disabling overflow promiscuous mode](https://www.spinics.net/lists/netdev/msg441517.html)
  - [[net-next 13/15] i40e: clear only cause_ena bit](https://www.spinics.net/lists/netdev/msg441512.html)
  - [[net-next 14/15] i40e: Handle PE_CRITERR properly with IWARP enabled](https://www.spinics.net/lists/netdev/msg441514.html)
  - [[net-next 15/15] i40e: don't hold RTNL lock for the entire reset](https://www.spinics.net/lists/netdev/msg441510.html)
- Daniel Borkmann, [[PATCH net-next] bpf, i40e: Report `bpf_prog` id during `XDP_QUERY_PROG`](https://www.spinics.net/lists/netdev/msg441686.html)
- Yonghong Song, [[PATCH] samples/bpf: fix a build problem](https://patchwork.ozlabs.org/patch/779110/)
- Daniel Borkmann, [[PATCH net-next] bpf: expose prog id for `cls_bpf` and `act_bpf`](https://patchwork.ozlabs.org/patch/779055/)
- Martin KaFai Lau, [[PATCH iproute2 net-next] bpf: Add support for `IFLA_XDP_PROG_ID`](https://patchwork.ozlabs.org/patch/779164/)

Please note that netdev receives a lot of patches and the list above is not meant to be comprehensive.

Happy eBPF hacking!
