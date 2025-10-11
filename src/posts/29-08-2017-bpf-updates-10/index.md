---
path: '/blog/2017/8/29/bpf-updates-10'
date: '2017-08-29T15:50:18.000Z'
title: 'BPF updates 10'
categories:
  - Technology
tags:
  - bpf-updates
  - ebpf
  - bpf
ogSummary: 'Issue 10 of the BPF newsletter by Alexander Alemayhu, covering updates, presentations, videos, and ongoing developments around BPF and XDP.'
---

This is issue 10 of the regular newsletter around BPF written by Alexander Alemayhu. It summarizes ongoing development, presentations, videos and other information related to BPF and XDP. It is released roughly once a week.

---

The highlights since last time are

- A new iteration of the Landlock unprivileged sandbox series.
- A new iteration of the socket redirect series.
- ARM eBPF JIT got finally [merged](https://www.spinics.net/lists/netdev/msg451025.html).
- Bug fixes and tests.

Now that there is 32bit eBPF JIT support for ARM, will more embedded devices start running eBPF? [Marvell routers](https://www.mail-archive.com/netdev@vger.kernel.org/msg169582.html), wifi devices soon? :) Also worth checking out the Landlock documentation, which is really nice, both rendered and the code comments.

Some interesting topics from the lists

- [XDP redirect measurements, gotchas and tracepoints](https://www.spinics.net/lists/xdp-newbies/msg00269.html)
- [Permissions for eBPF objects](https://www.mail-archive.com/netdev@vger.kernel.org/msg185150.html)
- [modifying packets in XDP](https://www.spinics.net/lists/xdp-newbies/msg00284.html)
- [What library to use ?](https://www.spinics.net/lists/xdp-newbies/msg00266.html)

## Presentations

### Slides

#### [Past, Present And Future Of High Speed Packet Filtering On Linux](https://cdn.shopify.com/s/files/1/0177/9886/files/phv2017-gbertin.pdf)

Great slides on DDoS mitigation approaches with code examples for XDP.

### Videos

#### [FRNOG 28 - Quentin Monnet (6Wind) : Introduction à eBPF](http://www.dailymotion.com/video/x5x9pxh)

Short introductory talk to eBPF.

#### [USENIX ATC '17: Performance Superpowers with Enhanced BPF](https://www.youtube.com/watch?feature=em-subs_digest&v=oc9000dM9-k&app=desktop)

Entertaining talk introducing BPF and highlighting some of the challenges. One of the more interesting ideas mentioned is the need for a higher level language. This seems like great a opportunity for someone to create a new language that fits the mindset of the users better.

## In case you missed it

#### [Cilium 0.10.1 release](https://github.com/cilium/cilium/releases/tag/0.10.1)

The 0.10.1 release had a couple nice updates like a more compact monitor output, policy revision number, CIDR based filter, and much more. See the [release notes](https://github.com/cilium/cilium/blob/0.10.1/NEWS.rst) for all the details.

#### [sched-time.py and generalizing workloads](https://josefbacik.github.io/kernel/scheduler/bcc/bpf/2017/08/03/sched-time.html)

Debugging post using BCC.

#### [Parse `BPF_ARRAY` macro in bcc](http://nanxiao.me/en/parse-bpf-array-macro-in-bcc/)

Closer look at one of the maps macros in BCC.

#### [Linux Load Averages: Solving the Mystery](http://www.brendangregg.com/blog/2017-08-08/linux-load-averages.html)

Mostly about load averages, but there is one or two mentions of eBPF in there.

#### [Netdev 2.2 Registration](https://www.netdevconf.org/2.2/registration.html)

The early bird registration is still open til September, but why wait? There are already some interesting sessions scheduled like [XDP for the Rest of Us](https://www.netdevconf.org/2.2/session.html?gospodarek-xdp-workshop) and [XDP + Netem = XNetem](https://www.netdevconf.org/2.2/session.html?hemminger-XNetem-talk).

#### [XDP Newbies...](https://www.mail-archive.com/netdev@vger.kernel.org/msg162375.html)

> Which is a place where people can talk about getting up to speed with setting up an XDP build environment and writing XDP programs.

You can subscribe by sending a email to `majordomo@vger.kernel.org`, with a message body containing `subscribe xdp-newbies`. No subject is needed, but you can of course add one if you like.

## Projects

While grav itself is not strictly BPF related, the tools in the repository utilize BCC.

#### [grav](https://github.com/epickrram/grav)

> A collection of tools to help visualise process execution.

## [Random cool note](https://twitter.com/sargun/status/885280696348037120)

> eBPF is just a gateway drug to writing kernel code.

## Patches

- John Fastabend, [[net-next PATCH 0/9] sockmap UAPI updates and fixes](https://www.mail-archive.com/netdev@vger.kernel.org/msg185436.html)
  - [[net-next PATCH 1/9] bpf: convert sockmap field `attach_bpf_fd2` to type](https://www.mail-archive.com/netdev@vger.kernel.org/msg185437.html)
  - [[net-next PATCH 2/9] bpf: sockmap, remove STRPARSER `map_flags` and add multi-map support](https://www.mail-archive.com/netdev@vger.kernel.org/msg185438.html)
  - [[net-next PATCH 3/9] bpf: sockmap add missing `rcu_read_(un)lock` in `smap_data_ready`](https://www.mail-archive.com/netdev@vger.kernel.org/msg185439.html)
  - [[net-next PATCH 4/9] bpf: additional sockmap self tests](https://www.mail-archive.com/netdev@vger.kernel.org/msg185440.html)
  - [[net-next PATCH 5/9] bpf: more SK_SKB selftests](https://www.mail-archive.com/netdev@vger.kernel.org/msg185441.html)
  - [[net-next PATCH 6/9] bpf: harden sockmap program attach to ensure correct map type](https://www.mail-archive.com/netdev@vger.kernel.org/msg185442.html)
  - [[net-next PATCH 7/9] bpf: sockmap indicate sock events to listeners](https://www.mail-archive.com/netdev@vger.kernel.org/msg185443.html)
  - [[net-next PATCH 8/9] bpf: sockmap requires `STREAM_PARSER` add Kconfig entry](https://www.mail-archive.com/netdev@vger.kernel.org/msg185444.html)
  - [[net-next PATCH 9/9] bpf: test_maps add sockmap stress test](https://www.mail-archive.com/netdev@vger.kernel.org/msg185445.html)
- Eric Biggers, [strparser: initialize all callbacks](https://www.spinics.net/lists/netdev/msg451622.html)
- Mickaël Salaün, [[PATCH net-next v7 00/10] Landlock LSM: Toward unprivileged sandboxing](https://www.spinics.net/lists/linux-api/msg23437.html)
  - [[PATCH net-next v7 01/10] selftest: Enhance kselftest_harness.h with a step mechanism](https://www.spinics.net/lists/linux-api/msg23431.html)
  - [[PATCH net-next v7 02/10] bpf: Add eBPF program subtype and `is_valid_subtype()` verifier](https://www.spinics.net/lists/linux-api/msg23440.html)
  - [[PATCH net-next v7 03/10] bpf,landlock: Define an eBPF program type for a Landlock rule](https://www.spinics.net/lists/linux-api/msg23433.html)
  - [[PATCH net-next v7 04/10] bpf: Define `handle_fs` and add a new helper `bpf_handle_fs_get_mode()`](https://www.spinics.net/lists/linux-api/msg23435.html)
  - [[PATCH net-next v7 05/10] landlock: Add LSM hooks related to filesystem](https://www.spinics.net/lists/linux-api/msg23439.html)
  - [[PATCH net-next v7 06/10] seccomp,landlock: Handle Landlock events per process hierarchy](https://www.spinics.net/lists/linux-api/msg23441.html)
  - [[PATCH net-next v7 07/10] landlock: Add ptrace restrictions](https://www.spinics.net/lists/linux-api/msg23434.html)
  - [[PATCH net-next v7 08/10] bpf: Add a Landlock sandbox example](https://www.spinics.net/lists/linux-api/msg23432.html)
  - [[PATCH net-next v7 09/10] bpf,landlock: Add tests for Landlock](https://www.spinics.net/lists/linux-api/msg23438.html)
  - [[PATCH net-next v7 10/10] landlock: Add user and kernel documentation for Landlock](https://www.spinics.net/lists/linux-api/msg23436.html)
- William Tu, [[PATCH net-next 0/3] gre: add `collect_md` mode for ERSPAN tunnel](https://www.mail-archive.com/netdev@vger.kernel.org/msg185131.html)
  - [[PATCH net-next 1/3] gre: refactor the `gre_fb_xmit`](https://www.mail-archive.com/netdev@vger.kernel.org/msg185132.html)
  - [[PATCH net-next 2/3] gre: add `collect_md` mode to ERSPAN tunnel](https://www.mail-archive.com/netdev@vger.kernel.org/msg185134.html)
  - [[PATCH net-next 3/3] samples/bpf: extend `test_tunnel_bpf.sh` with ERSPAN](https://www.mail-archive.com/netdev@vger.kernel.org/msg185133.html)
- Jakub Kicinski, [[PATCH net-next] selftests/bpf: check the instruction dumps are populated](https://www.mail-archive.com/netdev@vger.kernel.org/msg185185.html)
- Dan Carpenter, [[PATCH net-next] bpf: fix oops on allocation failure](https://www.mail-archive.com/netdev@vger.kernel.org/msg185177.html)
- David Ahern, [[PATCH v2 net-next 0/8] bpf: Add option to set mark and priority in cgroup sock programs](https://www.spinics.net/lists/netdev/msg451856.html)
  - [[PATCH v2 net-next 1/8] bpf: Add support for recursively running cgroup sock filters](https://www.spinics.net/lists/netdev/msg451857.html)
  - [[PATCH v2 net-next 2/8] bpf: Add mark and priority to sock options that can be set](https://www.spinics.net/lists/netdev/msg451863.html)
  - [[PATCH v2 net-next 3/8] bpf: Allow cgroup sock filters to use `get_current_uid_gid` helper](https://www.spinics.net/lists/netdev/msg451864.html)
  - [[PATCH v2 net-next 4/8] samples/bpf: Update sock test to allow setting mark and priority](https://www.spinics.net/lists/netdev/msg451858.html)
  - [[PATCH v2 net-next 5/8] samples/bpf: Add detach option to `test_cgrp2_sock`](https://www.spinics.net/lists/netdev/msg451859.html)
  - [[PATCH v2 net-next 6/8] samples/bpf: Add option to dump socket settings](https://www.spinics.net/lists/netdev/msg451862.html)
  - [[PATCH v2 net-next 7/8] samples/bpf: Add test case for nested socket options](https://www.spinics.net/lists/netdev/msg451860.html)
  - [[PATCH v2 net-next 8/8] samples/bpf: Update cgroup socket examples to use uid gid helper](https://www.spinics.net/lists/netdev/msg451861.html)
- Edward Cree, [[PATCH v2 net-next 0/5] bpf: verifier fixes](https://www.spinics.net/lists/netdev/msg451320.html)
  - [[PATCH v2 net-next 1/5] selftests/bpf: add a test for a bug in liveness-based pruning](https://www.spinics.net/lists/netdev/msg451321.html)
  - [[PATCH v2 net-next 2/5] bpf/verifier: when pruning a branch, ignore its write marks](https://www.spinics.net/lists/netdev/msg451322.html)
  - [[PATCH v2 net-next 3/5] selftests/bpf: add a test for a pruning bug in the verifier](https://www.spinics.net/lists/netdev/msg451323.html)
  - [[PATCH v2 net-next 4/5] bpf/verifier: remove `varlen_map_value_access` flag](https://www.spinics.net/lists/netdev/msg451324.html)
  - [[PATCH v2 net-next 5/5] bpf/verifier: document liveness analysis](https://www.spinics.net/lists/netdev/msg451325.html)
- Sabrina Dubroca, [[PATCH net] tcp: fix refcnt leak with ebpf congestion control](https://patchwork.ozlabs.org/patch/805838/)
- Yuchung Cheng, [[PATCH net] bpf: fix bpf_setsockopts return value](https://www.spinics.net/lists/netdev/msg451634.html)
- Jesper Dangaard Brouer, [[V3 PATCH net-next 0/5] xdp: more work on xdp tracepoints](https://www.spinics.net/lists/netdev/msg451519.html)
  - [[V3 PATCH net-next 1/5] xdp: remove `bpf_warn_invalid_xdp_redirect`](https://www.spinics.net/lists/netdev/msg451520.html)
  - [[V3 PATCH net-next 2/5] xdp: make generic xdp redirect use tracepoint `trace_xdp_redirect`](https://www.spinics.net/lists/netdev/msg451521.html)
  - [[V3 PATCH net-next 3/5] ixgbe: use return codes from `ndo_xdp_xmit` that are distinguishable](https://www.spinics.net/lists/netdev/msg451522.html)
  - [[V3 PATCH net-next 4/5] xdp: remove `net_device` names from `xdp_redirect` tracepoint](https://www.spinics.net/lists/netdev/msg451523.html)
  - [[V3 PATCH net-next 5/5] xdp: get tracepoints `xdp_exception` and `xdp_redirect` in sync](https://www.spinics.net/lists/netdev/msg451518.html)
- Shubham Bansal, [[PATCH net-next] bpf, doc: Add arm32 as arch supporting eBPF JIT](https://www.spinics.net/lists/netdev/msg451357.html)
- Daniel Borkmann, [[PATCH net-next] bpf: netdev is never null in `__dev_map_flush`](https://www.spinics.net/lists/netdev/msg451399.html)
- Brenden Blanco, [[iovisor-dev] [RFC] pktgen: add bpf fill support](https://lists.iovisor.org/pipermail/iovisor-dev/2017-August/001001.html)
- Yonghong Song, [[llvm] r311567 - bpf: close the file descriptor after probe inside getHostCPUNameForBPF](http://llvm.org/viewvc/llvm-project?view=revision&revision=311567)
- Colin King, [[PATCH][net-next] MIPS,bpf: fix missing break in switch statement](https://www.spinics.net/lists/netdev/msg451169.html)
- Daniel Borkmann, [[PATCH net] bpf: fix map value attribute for hash of maps](https://www.spinics.net/lists/netdev/msg451161.html)
- Daniel Borkmann, [[PATCH net-next 0/2] Two minor BPF cleanups](https://www.spinics.net/lists/netdev/msg451175.html)
  - [[PATCH net-next 1/2] bpf: misc xdp redirect cleanups](https://www.spinics.net/lists/netdev/msg451173.html)
  - [[PATCH net-next 2/2] bpf: minor cleanups for `dev_map`](https://www.spinics.net/lists/netdev/msg451174.html)
- Yonghong Song, [http://llvm.org/viewvc/llvm-project?view=revision&revision=311522](http://llvm.org/viewvc/llvm-project?view=revision&revision=311522)
- Phil Sutter, [[iproute PATCH v2] lib/bpf: Don't leak fp in `bpf_find_mntpt()`](https://www.spinics.net/lists/netdev/msg450750.html)
- Daniel Borkmann, [[PATCH net-next] bpf: fix double free from `dev_map_notification()`](https://www.spinics.net/lists/netdev/msg450600.html)
- Daniel Borkmann, [[PATCH net] bpf, doc: also add s390x as arch to sysctl description](https://www.mail-archive.com/netdev@vger.kernel.org/msg183895.html)
- Eric Leblond, [[PATCH] tools lib bpf: improve warning](https://www.spinics.net/lists/netdev/msg450590.html)
- Daniel Borkmann [[PATCH net-next v2 0/2] BPF inline improvements](https://www.spinics.net/lists/netdev/msg450470.html)
  - [[PATCH net-next v2 1/2] bpf: make htab inlining more robust wrt assumptions](https://www.spinics.net/lists/netdev/msg450469.html)
  - [[PATCH net-next v2 2/2] bpf: inline map in map lookup functions for array and htab](https://www.spinics.net/lists/netdev/msg450471.html)
- Martin KaFai La, [[PATCH net-next 0/2] bpf: Allow selecting numa node during map creation](https://www.spinics.net/lists/netdev/msg450365.html)
  - [[PATCH net-next 1/2] bpf: Allow selecting numa node during map creation](https://www.spinics.net/lists/netdev/msg450364.html)
  - [[PATCH net-next 2/2] bpf: Allow numa selection in `INNER_LRU_HASH_PREALLOC` test of `map_perf_test`](https://www.spinics.net/lists/netdev/msg450363.html)
- Shubham Bansal, [[PATCH net-next v4] arm: eBPF JIT compiler](https://www.spinics.net/lists/arm-kernel/msg602416.html)
- David Daney, [[PATCH 0/3] MIPS,bpf: Improvements for MIPS eBPF JIT](http://www.mail-archive.com/linux-kernel@vger.kernel.org/msg1473318.html)
  - [[PATCH 1/3] MIPS,bpf: Fix using `smp_processor_id()` in preemptible splat.](http://www.mail-archive.com/linux-kernel@vger.kernel.org/msg1473319.html)
  - [[PATCH 2/3] MIPS,bpf: Implement JLT, JLE, JSLT and JSLE ops in the eBPF JIT.](http://www.mail-archive.com/linux-kernel@vger.kernel.org/msg1473320.html)
  - [[PATCH 3/3] MIPS,bpf: Cache value of BPF_OP(insn->code) in eBPF JIT.](http://www.mail-archive.com/linux-kernel@vger.kernel.org/msg1473317.html)
- Daniel Borkmann, [[PATCH net] bpf, doc: improve sysctl knob description](https://www.spinics.net/lists/netdev/msg450308.html)
- Dan Carpenter, [[PATCH net-next] bpf: fix a return in `sockmap_get_from_fd()`](https://patchwork.ozlabs.org/patch/803058/)
- Martin KaFai Lau, [[PATCH net-next] bpf: Fix map-in-map checking in the verifier](https://www.spinics.net/lists/netdev/msg450183.html)
- Daniel Borkmann, [[PATCH net-next 0/2] Two BPF smap related followups](https://www.spinics.net/lists/netdev/msg449999.htmlcwhttps://www.spinics.net/lists/netdev/msg449999.html)
  - [[PATCH net-next 1/2] bpf: don't enable preemption twice in `smap_do_verdict`](https://www.spinics.net/lists/netdev/msg449997.html)
  - [[PATCH net-next 2/2] bpf: reuse tc bpf prologue for sk skb progs](https://www.spinics.net/lists/netdev/msg449998.htmlhttps://www.spinics.net/lists/netdev/msg449998.html)
- Jesper Dangaard Brouer, [[PATCH 0/2] xdp: adjust xdp redirect tracepoint](https://www.mail-archive.com/netdev@vger.kernel.org/msg183305.html)
  - [[PATCH 1/2] ixgbe: change `ndo_xdp_xmit` return code on xmit errors](https://www.mail-archive.com/netdev@vger.kernel.org/msg183306.html)
  - [[PATCH 2/2] xdp: adjust xdp redirect tracepoint to include return error code](https://www.mail-archive.com/netdev@vger.kernel.org/msg183307.html)
- Daniel Borkmann, [[PATCH net-next] bpf: no need to nullify ri->map in `xdp_do_redirect`](https://www.spinics.net/lists/netdev/msg449962.html)
- Daniel Borkmann, [[PATCH net-next] bpf: fix liveness propagation to parent in stack slots](https://www.spinics.net/lists/netdev/msg449958.html)
- John Fastabend, [[net-next PATCH] net: rcu lock and preempt disable missing around generic xdp](https://www.spinics.net/lists/netdev/msg449746.html)
- John Fastabend, [[net-next PATCH 0/2] bpf: sockmap build fixes](https://www.spinics.net/lists/netdev/msg449792.html)
  - [[net-next PATCH 1/2] bpf: sockmap state change warning fix](https://www.spinics.net/lists/netdev/msg449793.html)
  - [[net-next PATCH 2/2] bpf: `sock_map` fixes for `!CONFIG_BPF_SYSCALL` and `!STREAM_PARSER`](https://www.spinics.net/lists/netdev/msg449794.html)
- John Fastabend, [[net-next PATCH 00/10] BPF: sockmap and sk redirect support](https://www.spinics.net/lists/netdev/msg449598.html)
  - [[net-next PATCH 01/10] net: early init support for strparser](https://www.spinics.net/lists/netdev/msg449599.html)
  - [[net-next PATCH 02/10] net: add `sendmsg_locked` and `sendpage_locked` to `af_inet6`](https://www.spinics.net/lists/netdev/msg449600.html)
  - [[net-next PATCH 03/10] net: fixes for `skb_send_sock`](https://www.spinics.net/lists/netdev/msg449601.html)
  - [[net-next PATCH 04/10] bpf: introduce new program type for skbs on sockets](https://www.spinics.net/lists/netdev/msg449602.html)
  - [[net-next PATCH 05/10] bpf: export `bpf_prog_inc_not_zero`](https://www.spinics.net/lists/netdev/msg449603.html)
  - [[net-next PATCH 06/10] bpf: sockmap with sk redirect support](https://www.spinics.net/lists/netdev/msg449605.html)
  - [[net-next PATCH 07/10] bpf: add access to sock fields and pkt data from `sk_skb` programs](https://www.spinics.net/lists/netdev/msg449606.html)
  - [[net-next PATCH 08/10] bpf: sockmap sample program](https://www.spinics.net/lists/netdev/msg449607.html)
  - [[net-next PATCH 09/10] bpf: selftests: add tests for new `__sk_buff` members](https://www.spinics.net/lists/netdev/msg449608.html)
  - [[net-next PATCH 10/10] bpf: selftests add sockmap tests](https://www.spinics.net/lists/netdev/msg449609.html)
- Jason Wang, [[PATCH] tun: thread safe `tun_build_skb()`](https://patchwork.kernel.org/patch/9903915/)
- Daniel Díaz, [[PATCH] tools lib bpf: Fix double file test in Makefile](https://patchwork.kernel.org/patch/9902185/)
- Edward Cree, [[PATCH v3 net-next] bpf/verifier: track liveness for pruning](https://patchwork.kernel.org/patch/9902429/)
- Daniel Borkmann, [[PATCH net] bpf: fix `bpf_trace_printk` on 32 bit archs](https://patchwork.ozlabs.org/patch/801802/)
- Michael Ellerman, [[PATCH v2] bpf: Update sysctl documentation to list all supported architectures](https://patchwork.ozlabs.org/patch/802502/)
- Daniel Borkmann, [[net-next PATCH] bpf: devmap: remove unnecessary value size check](https://patchwork.ozlabs.org/patch/801916/)

Please note that netdev receives a lot of patches and the list above is not meant to be comprehensive.

Happy eBPF hacking! ;)
