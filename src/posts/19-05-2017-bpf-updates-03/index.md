---
path: '/blog/2017/5/17/bpf-updates-03'
date: '2017-05-18T21:40:44.000Z'
author: ' Alexander Alemayhu'
title: 'BPF updates 03'
categories:
  - Technology
tags:
  - bpf
  - bpf-updates
  - ebpf
ogSummary: 'This issue of the BPF Updates newsletter covers kernel 4.12-rc1 changes, ARM 32-bit JIT progress, alignment tracking in the verifier, and useful learning resources on eBPF, ELF loaders, and XDP.'
---

This is issue 03 of the regular newsletter around BPF written by Alexander Alemayhu. It summarizes ongoing development, presentations, videos and other information related to BPF and XDP. It is released roughly once a week.

---

The Linux kernel merge window closed up last week and v4.12-rc1 was released. One usual `[GIT] Networking` pull request was sent before the rc and one the day after. The are some BPF related fixes, see dates for all the highlights

- [9th May](https://www.spinics.net/lists/netdev/msg434497.html)
- [15th May](https://www.spinics.net/lists/netdev/msg435111.html)

More interesting topics

- [BPF relocations](https://www.mail-archive.com/netdev@vger.kernel.org/msg167958.html)
- [ARM 32-bit JIT](https://www.spinics.net/lists/netdev/msg434852.html)

## In case you missed it

A lot of good content showed up this week. Check them all out below

### [bpf.h and you...](https://www.spinics.net/lists/xdp-newbies/msg00179.html)

Great walk-through on writing a eBPF program. Starts from the header includes to the main bits.

### [eBPF, part 2: Syscall and Map Types](https://ferrisellis.com/posts/ebpf_syscall_and_maps/)

Overview of `bpf(2)` with sections on the commands and map types. Also nice to see links to the various upstream commits.

### [Monitoring the Control Plane](http://firstclassfunc.com/2017/05/monitoring-the-control-plane/)

Interesting read on capturing routing information with BPF.

### [Contextually speaking...](https://www.spinics.net/lists/xdp-newbies/msg00181.html)

Provides descriptions on the BPF program types and walkthrough some of them with a example at the end.

### [Elf Hello World Tutorial](http://www.cirosantilli.com/elf-hello-world/)

Useful for understanding how loaders (iproute2, etc) parse BPF ELF file.

### [XDP Newbies...](https://www.mail-archive.com/netdev@vger.kernel.org/msg162375.html)

> Which is a place where people can talk about getting up to speed with setting up an XDP build environment and writing XDP programs.

You can subscribe by sending a email to `majordomo@vger.kernel.org`, with a message body containing `subscribe xdp-newbies`. No subject is needed, but you can of course add one if you like.

## [Random cool note](https://twitter.com/qeole/status/862588507147169797)

> Debugging #eBPF: there is now an IDA processor available on GitHub.

## Patches

- Daniel Borkmann, [[PATCH net] bpf, arm64: fix faulty emission of map access in tail calls](https://www.mail-archive.com/netdev@vger.kernel.org/msg167864.html)
- Daniel Borkmann, [[PATCH net v2 0/2] Two generic xdp related follow-ups](https://www.mail-archive.com/netdev@vger.kernel.org/msg167982.html)
  - [[PATCH net v2 1/2] xdp: add flag to enforce driver mode](https://www.mail-archive.com/netdev@vger.kernel.org/msg167984.html)
  - [[PATCH net v2 2/2] xdp: refine xdp api with regards to generic xdp](https://www.mail-archive.com/netdev@vger.kernel.org/msg167983.html)
- Daniel Borkmann, [[PATCH iproute2 -master 0/2] Two misc BPF updates](https://www.spinics.net/lists/netdev/msg434904.html)
  - [[PATCH iproute2 -master 1/2] bpf: update printing of generic xdp mode](https://www.spinics.net/lists/netdev/msg434905.html)
  - [[PATCH iproute2 -master 2/2] bpf: dump error to the user when retrieving pinned prog fails](https://www.spinics.net/lists/netdev/msg434903.html)
- David Miller, [[PATCH v2 0/7] bpf: Add alignment tracker to verifier.](https://www.spinics.net/lists/netdev/msg434707.html)
  - [[PATCH v2 1/7] bpf: Track alignment of register values in the verifier.](https://www.spinics.net/lists/netdev/msg434708.html)
  - [[PATCH v2 2/7] bpf: Do per-instruction state dumping in verifier when log_level > 1.](https://www.spinics.net/lists/netdev/msg434709.html)
  - [[PATCH v2 3/7] bpf: Add strict alignment flag for `BPF_PROG_LOAD`.](https://www.spinics.net/lists/netdev/msg434710.html)
  - [[PATCH v2 4/7] bpf: Add `bpf_verify_program()` to the library.](https://www.spinics.net/lists/netdev/msg434711.html)
  - [[PATCH v2 5/7] bpf: Add verifier test case for alignment.](https://www.spinics.net/lists/netdev/msg434715.html)
  - [[PATCH v2 6/7] bpf: Make use of alignment information in `check_val_ptr_alignment()`.](https://www.spinics.net/lists/netdev/msg434713.html)
  - [[PATCH v2 7/7] bpf: Adjust test_verifier for alignment changes.](https://www.spinics.net/lists/netdev/msg434714.html)
- David Miller, [[PATCH v2 0/3] bpf: Track MAP pointer alignment](https://www.spinics.net/lists/netdev/msg435073.html)
  - [[PATCH v2 1/3] bpf: Use 1\<\<16 data-preserve-html-node="true" as ceiling for immediate alignment in verifier.](https://www.spinics.net/lists/netdev/msg435074.html)
  - [[PATCH v2 2/3] bpf: Track alignment of MAP pointers in verifier.](https://www.spinics.net/lists/netdev/msg435071.html)
  - [[PATCH v2 3/3] bpf: Update MAP test_verifier.c tests wrt. alignment.](https://www.spinics.net/lists/netdev/msg435072.html)
- Andy Gospodarek, [[PATCH net] samples/bpf: run cleanup routines when receiving SIGTERM](https://www.spinics.net/lists/netdev/msg434761.html)
- Jakub Kicinski, [[PATCH net-next 0/9] nfp: LSO, checksum and XDP datapath updates](https://www.mail-archive.com/netdev@vger.kernel.org/msg168356.html)
  - [[PATCH net-next 1/9] nfp: don't enable TSO on the device when disabled](https://www.mail-archive.com/netdev@vger.kernel.org/msg168358.html)
  - [[PATCH net-next 2/9] nfp: rename `l4_offset` in struct `nfp_net_tx_desc` to `lso_hdrlen`](https://www.mail-archive.com/netdev@vger.kernel.org/msg168357.html)
  - [[PATCH net-next 3/9] nfp: support LSO2 capability](https://www.mail-archive.com/netdev@vger.kernel.org/msg168357.html)
  - [[PATCH net-next 4/9] nfp: don't assume RSS and IRQ moderation are always enabled](https://www.mail-archive.com/netdev@vger.kernel.org/msg168360.html)
  - [[PATCH net-next 5/9] nfp: version independent support for chained RSS metadata](https://www.mail-archive.com/netdev@vger.kernel.org/msg168355.html)
  - [[PATCH net-next 6/9] nfp: add CHECKSUM_COMPLETE support](https://www.mail-archive.com/netdev@vger.kernel.org/msg168354.html)
  - [[PATCH net-next 7/9] nfp: complete the XDP TX ring only when it's full](https://www.mail-archive.com/netdev@vger.kernel.org/msg168361.html)
  - [[PATCH net-next 8/9] nfp: add a helper for wrapping descriptor index](https://www.mail-archive.com/netdev@vger.kernel.org/msg168362.html)
  - [[PATCH net-next 9/9] nfp: eliminate an if statement in calculation of completed frames](https://www.mail-archive.com/netdev@vger.kernel.org/msg168353.html)

Please note that netdev receives a lot of patches and the list above is not meant to be comprehensive.

Happy eBPF hacking!
