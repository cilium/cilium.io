---
path: '/blog/2017/5/24/bpf-updates-04'
date: '2017-05-24T21:53:54.000Z'
title: 'BPF updates 04'
categories:
  - Technology
tags:
  - bpf-updates
  - bpf
  - ebpf
ogSummary: 'Linux 4.12-rc2 was released last week. One usual [GIT] Networking pull request made it in which includes two BPF fixes. See 18th May for the details.'
---

This is issue 04 of the regular newsletter around BPF written by Alexander Alemayhu. It summarizes ongoing development, presentations, videos and other information related to BPF and XDP. It is released roughly once a week.

---

Linux 4.12-rc2 was released last week. One usual `[GIT] Networking` pull request made it in which includes two BPF fixes. See [18th May](http://www.mail-archive.com/linux-kernel@vger.kernel.org/msg1399669.html) for the details.

In [last week's issue](https://www.cilium.io/blog/2017/5/17/bpf-updates-03) ARM 32-bit was mentioned. As you can see from the patches section an eBPF JIT RFC just got posted recently. Checkout the discussion on the [linux-arm-kernel](https://www.spinics.net/lists/kernel/msg2514912.html) list.

Other interesting news 0day kernel testing bot for [BPF selftests](https://www.mail-archive.com/netdev@vger.kernel.org/msg168831.html). The patches do go through extensive review, but hopefully this catches regressions if any.

## Videos

### [Infrastructure 2017 - Alfonso Acosta - High-performance Linux monitoring with eBPF](https://www.youtube.com/watch?v=k4jqTLtdrxQ)

Nice talk on BPF and how Weaveworks is leveraging it in scope.

### [PyCon 2017 - Alex Gartrell - Executing python functions in the linux kernel by transpiling to bpf](https://youtu.be/CpqMroMBGP4)

Good talk on BPF with a python centric perspective. The walk-through is great and easy to follow.

## In case you missed it

### [BPF Verifier Overview](https://www.spinics.net/lists/xdp-newbies/msg00185.html)

Interesting read on the verifier. It explains some of the checks performed and why.

### [Alignment in BPF verifier](https://www.mail-archive.com/netdev@vger.kernel.org/msg169180.html)

Some of this stuff is over my head, but from the reading it looks like we have a new algorithm for alignment checking. The early implementation is in [python](https://gist.github.com/ecree-solarflare/0665d5b46c2d8d08de2377fbd527de8d). While initially on a different topic, the thread on [[PATCH v2 1/3] bpf: Use 1<<16 data-preserve-html-node="true" as ceiling for immediate alignment in verifier.](https://www.spinics.net/lists/netdev/msg435542.html) is worth reading to get the full context.

### [An entertaining eBPF XDP adventure](https://suchakra.wordpress.com/2017/05/23/an-entertaining-ebpf-xdp-adventure/)

Fun read on the solving a challenge. Starts out with basics and goes into code examples.

### [XDP Newbies...](https://www.mail-archive.com/netdev@vger.kernel.org/msg162375.html)

> Which is a place where people can talk about getting up to speed with setting up an XDP build environment and writing XDP programs.

You can subscribe by sending a email to `majordomo@vger.kernel.org`, with a message body containing `subscribe xdp-newbies`. No subject is needed, but you can of course add one if you like.

## [Random cool note](https://twitter.com/brendangregg/status/866078955530444800)

> as I've said to a number of people job hunting in systems engineering: BPF experience is hot and getting hotter

## Patches

- Daniel Borkmann, [[PATCH net] bpf: adjust verifier heuristics](http://www.mail-archive.com/netdev@vger.kernel.org/msg168842.html)
- Daniel Borkmann, [[PATCH net 0/3] BPF pruning follow-up](https://www.mail-archive.com/netdev@vger.kernel.org/msg169875.html)
  - [[PATCH net 1/3] bpf: fix incorrect pruning decision when alignment must be tracked](https://www.mail-archive.com/netdev@vger.kernel.org/msg169874.html)
  - [[PATCH net 2/3] bpf: properly reset caller saved regs after helper call and ld_abs/ind](https://www.mail-archive.com/netdev@vger.kernel.org/msg169872.html)
  - [[PATCH net 3/3] bpf: add various verifier test cases](https://www.mail-archive.com/netdev@vger.kernel.org/msg169873.html)
- Yonghong Song, [[PATCH net v2] selftests/bpf: fix broken build due to types.h](https://www.spinics.net/lists/netdev/msg435609.html)
- Jesper Dangaard Brouer, [[RFC net-next PATCH 0/5] XDP driver feature API and handling change to xdp_buff](https://www.spinics.net/lists/netdev/msg435772.html)
  - [[RFC net-next PATCH 1/5] samples/bpf: `xdp_tx_iptunnel` make use of map_data[]](https://www.spinics.net/lists/netdev/msg435767.html)
  - [[RFC net-next PATCH 2/5] mlx5: fix bug reading `rss_hash_type` from CQE](https://www.spinics.net/lists/netdev/msg435770.html)
  - [[RFC net-next PATCH 3/5] net: introduce XDP driver features interface](https://www.spinics.net/lists/netdev/msg435769.html)
  - [[RFC net-next PATCH 4/5] net: new XDP feature for reading HW rxhash from drivers](https://www.spinics.net/lists/netdev/msg435768.html)
  - [[RFC net-next PATCH 5/5] mlx5: add XDP rxhash feature for driver mlx5](https://www.spinics.net/lists/netdev/msg435771.html)
- Teng Qin, [[PATCH net-next 0/2] perf, bpf: add support for HW_CACHE and RAW events](https://www.spinics.net/lists/netdev/msg436441.html)
  - [[PATCH net-next 1/2] perf, bpf: add support for HW_CACHE and RAW events](https://www.spinics.net/lists/netdev/msg436520.html)
  - [[PATCH net-next 2/2] samples/bpf: add samples for HW_CACHE / RAW events](https://www.spinics.net/lists/netdev/msg436442.html)
- Teng Qin, [[PATCH net-next] bpf: update perf event helper function signature and documentation](https://www.spinics.net/lists/netdev/msg436455.html)
- Shubham Bansal, [[PATCH] RFC: arm: eBPF JIT compiler](https://www.mail-archive.com/linux-kernel@vger.kernel.org/msg1403296.html)
- Gustavo A. R. Silva, [[PATCH] kernel: bpf: remove dead code](https://www.spinics.net/lists/netdev/msg436238.html)

Please note that netdev receives a lot of patches and the list above is not meant to be comprehensive.

Happy eBPF hacking!
