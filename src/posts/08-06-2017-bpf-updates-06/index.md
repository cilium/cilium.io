---
path: '/blog/2017/6/7/bpf-updates-06'
date: '2017-06-08T19:53:58.000Z'
title: 'BPF updates 06'
categories:
  - eBPF
tags:
  - bpf-updates
  - bpf
  - ebpf
---

{{preview}}

Linux 4.12-rc4 was released this week. No new BPF changes were in this release, but several patches were applied on netdev. The highlights are

- The BPF id patches which were ready last week but had to be re-spin because of merge conflicts.
- All perf events now have BPF support.

Other interesting topics

- VF XDP support for the qede driver.
- Better alignment tracking and improvements to the verifier.

{{/preview}}

This is issue 06 of the regular newsletter around BPF written by Alexander Alemayhu. It summarizes ongoing development, presentations, videos and other information related to BPF and XDP. It is released roughly once a week.

---

Linux 4.12-rc4 was released this week. No new BPF changes were in this release, but several patches were applied on netdev. The highlights are

- The BPF id patches which were ready last week but had to be re-spin because of merge conflicts.
- All perf events now have BPF support.

Other interesting topics

- VF XDP support for the qede driver.
- Better alignment tracking and improvements to the verifier.

See the patches section for all the links.

## Videos

### [Netdev 2.1 - XDP for the Rest of Us By Andy Gospodarek + Jesper Dangaard Brouer](https://youtu.be/iBkR4gvjxtE)

Extensive walk-through of the XDP programs in the [prototype-kernel](https://github.com/netoptimizer/prototype-kernel) repository. The talk is overall great and covers several BPF and XDP concepts from the programmer perspective. Also nice to hear tips, tricks and pitfalls being covered.

## In case you missed it

### [Cilium v0.9 Released: Hello Kubernetes!](https://www.cilium.io/blog/2017/5/31/cilium-v09-released-hello-kubernetes)

Cilium 0.9.0 was released last week.

### [XDP Newbies...](https://www.mail-archive.com/netdev@vger.kernel.org/msg162375.html)

> Which is a place where people can talk about getting up to speed with setting up an XDP build environment and writing XDP programs.

You can subscribe by sending a email to `majordomo@vger.kernel.org`, with a message body containing `subscribe xdp-newbies`. No subject is needed, but you can of course add one if you like.

## [Random cool note](https://twitter.com/GianArb/status/871808740080615424)

> 55 pages about how to improve container security. @ciliumproject #BPF, best practices, @coreos clair, #apparmor [http://scaledocker.com](http://scaledocker.com)

## Some patches

- Craig Topper, [[llvm] r304324 - [BPF] Correct the file name of the -gen-asm-matcher output file to not start with X86.](http://llvm.org/viewvc/llvm-project?rev=304324&view=rev)
- Chenbo Feng, [[PATCH net-next v2 1/2] bpf: Allow `CGROUP_SKB` eBPF program to access `sk_buff`](https://www.spinics.net/lists/netdev/msg437923.html)
- Chenbo Feng, [[PATCH net-next v2 2/2] bpf: Remove the capability check for cgroup skb eBPF program](https://www.spinics.net/lists/netdev/msg437922.html)
- Martin KaFai Lau, [[PATCH v3 net-next 0/8] Introduce bpf ID](https://www.spinics.net/lists/netdev/msg438573.html)
  - [[PATCH v3 net-next 1/8] bpf: Introduce bpf_prog ID](https://www.spinics.net/lists/netdev/msg438579.html)
  - [[PATCH v3 net-next 2/8] bpf: Introduce bpf_map ID](https://www.spinics.net/lists/netdev/msg438577.html)
  - [[PATCH v3 net-next 3/8] bpf: Add `BPF_(PROG|MAP)_GET_NEXT_ID` command](https://www.spinics.net/lists/netdev/msg438575.html)
  - [[PATCH v3 net-next 4/8] bpf: Add `BPF_PROG_GET_FD_BY_ID`](https://www.spinics.net/lists/netdev/msg438572.html)
  - [[PATCH v3 net-next 5/8] bpf: Add `BPF_MAP_GET_FD_BY_ID`](https://www.spinics.net/lists/netdev/msg438571.html)
  - [[PATCH v3 net-next 6/8] bpf: Add `jited_len` to struct `bpf_prog`](https://www.spinics.net/lists/netdev/msg438576.html)
  - [[PATCH v3 net-next 7/8] bpf: Add `BPF_OBJ_GET_INFO_BY_FD`](https://www.spinics.net/lists/netdev/msg438578.html)
  - [[PATCH v3 net-next 8/8] bpf: Test for bpf ID](https://www.spinics.net/lists/netdev/msg438574.html)
- David Miller, [[PATCH net-next] bpf: Take advantage of stack_depth tracking in sparc64 JIT](https://www.spinics.net/lists/netdev/msg437932.html)
- Alexei Starovoitov, [[PATCH v4 net-next 0/3] bpf: Add BPF support to all perf_event](http://www.mail-archive.com/linux-kernel@vger.kernel.org/msg1411973.html)
  - [[PATCH v4 net-next 1/3] perf, bpf: Add BPF support to all perf_event types](http://www.mail-archive.com/linux-kernel@vger.kernel.org/msg1411972.html)
  - [[PATCH v4 net-next 2/3] samples/bpf: add tests for more perf event types](http://www.mail-archive.com/linux-kernel@vger.kernel.org/msg1411978.html)
  - [[PATCH v4 net-next 3/3] bpf: update perf event helper functions documentation](http://www.mail-archive.com/linux-kernel@vger.kernel.org/msg1411979.html)
- Yuval Mintz, [[PATCH net-next 00/11] qed\*: Support VF XDP attachment](https://www.mail-archive.com/netdev@vger.kernel.org/msg139507.html)
  - [[PATCH net-next 01/11] qed: Add bitmaps for VF CIDs](https://www.mail-archive.com/netdev@vger.kernel.org/msg171602.html)
  - [[PATCH net-next 02/11] qed: Create L2 queue database](https://www.mail-archive.com/netdev@vger.kernel.org/msg171608.html)
  - [[PATCH net-next 03/11] qed\*: L2 interface to use the SB structures directly](https://www.mail-archive.com/netdev@vger.kernel.org/msg171609.html)
  - [[PATCH net-next 04/11] qed: Pass vf_params when creating a queue-cid](https://www.mail-archive.com/netdev@vger.kernel.org/msg171605.html)
  - [[PATCH net-next 05/11] qed: Assign a unique per-queue index to queue-cid](https://www.mail-archive.com/netdev@vger.kernel.org/msg171613.html)
  - [[PATCH net-next 06/11] qed: Make VF legacy a bitfield](https://www.mail-archive.com/netdev@vger.kernel.org/msg171607.html)
  - [[PATCH net-next 07/11] qed: IOV db support multiple queues per qzone](https://www.mail-archive.com/netdev@vger.kernel.org/msg171610.html)
  - [[PATCH net-next 08/11] qed: Multiple qzone queues for VFs](https://www.mail-archive.com/netdev@vger.kernel.org/msg171606.html)
  - [[PATCH net-next 09/11] qed: VFs to try utilizing the doorbell bar](https://www.mail-archive.com/netdev@vger.kernel.org/msg171612.html)
  - [[PATCH net-next 10/11] qed: VF XDP support](https://www.mail-archive.com/netdev@vger.kernel.org/msg171604.html)
  - [[PATCH net-next 11/11] qede: VF XDP support](https://www.mail-archive.com/netdev@vger.kernel.org/msg171611.html)
- Daniel Borkmann, [[PATCH net-next] bpf: cgroup skb progs cannot access ld_abs/ind](https://patchwork.ozlabs.org/patch/771946/)
- Daniel Borkmann, [[PATCH net] bpf, arm64: use separate register for state in stxr](https://patchwork.ozlabs.org/patch/772377/)
- Edward Cree, [[RFC PATCH net-next 0/5] bpf: rewrite value tracking in verifier](https://www.spinics.net/lists/kernel/msg2526933.html)
  - [[RFC PATCH net-next 1/5] selftests/bpf: add test for mixed signed and unsigned bounds checks](https://www.spinics.net/lists/kernel/msg2526942.html)
  - [[RFC PATCH net-next 2/5] bpf/verifier: rework value tracking](https://www.spinics.net/lists/kernel/msg2526951.html)
  - [[RFC PATCH net-next 3/5] bpf/verifier: feed pointer-to-unknown-scalar casts into scalar ALU path](https://www.spinics.net/lists/kernel/msg2526952.html)
  - [[RFC PATCH net-next 4/5] bpf/verifier: track signed and unsigned min/max values](https://www.spinics.net/lists/kernel/msg2526945.html)
  - [[RFC PATCH net-next 5/5] selftests/bpf: change test_verifier expectations](https://www.spinics.net/lists/kernel/msg2526950.html)

Please note that netdev receives a lot of patches and the list above is not meant to be comprehensive.
