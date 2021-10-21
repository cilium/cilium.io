---
path: '/blog/2017/5/10/bpf-updates-02'
date: '2017-05-10T16:46:43.000Z'
title: 'BPF updates 02'
categories:
  - eBPF
tags:
  - bpf
  - kernel
  - xdp
  - updates
  - bpf-updates
---

{{preview}}

This is issue 02 of the regular newsletter around BPF written by Alexander Alemayhu. It summarizes ongoing development, presentations, videos and other information related to BPF and XDP. It is released roughly once a week

{{/preview}}

This is issue 02 of the regular newsletter around BPF written by Alexander Alemayhu. It summarizes ongoing development, presentations, videos and other information related to BPF and XDP. It is released roughly once a week.

---

The Linux kernel merge window opened up last week and some of the highlights can be found as always in the `[GIT] Networking` pull requests from [2nd May 2017](https://www.spinics.net/lists/netdev/msg433609.html) and [4th May 2017](https://www.spinics.net/lists/netdev/msg433995.html).

If you are interested in other subsystems [LWN.net](https://lwn.net/) has a summary on the current [merge window](https://lwn.net/Articles/721581/) status, and their section on BPF says

> The BPF virtual machine subsystem has seen a few improvements. Maps are now able to contain other maps, allowing them to be cascaded to multiple levels. There is a new in-kernel testing framework for BPF programs, controlled by the new `BPF_PROG_TEST_RUN` command to the bpf() system call. And there is now a just-in-time BPF compiler for the SPARC64 architecture.

There is ongoing work to add netlink extended ACK reporting in iproute2, see [ip: Initial support for extack errors](https://www.spinics.net/lists/netdev/msg433408.html) and [iproute: Add support for extended ack to rtnl_talk](https://www.spinics.net/lists/netdev/msg433823.html) for more details.

More interesting developments are:

- [b0e92279d3ec](https://git.kernel.org/pub/scm/linux/kernel/git/davem/net-next.git/commit/?id=b0e92279d3ec3656152c4dfa1c8b28fa40ca66d7) (Merge branch 'thunderx-xdp', 2017-05-02)
- [85f68fe89832](https://git.kernel.org/pub/scm/linux/kernel/git/davem/net.git/commit/?id=85f68fe89832) (bpf, arm64: implement jiting of BPF_XADD, 2017-05-01).
- [e3bf4c61da80](https://git.kernel.org/pub/scm/linux/kernel/git/davem/net.git/commit/?id=e3bf4c61da80) (sparc64: Fix BPF JIT wrt. branches and ldimm64 instructions., 2017-05-01)
- [3a5795b83d57](https://git.kernel.org/pub/scm/linux/kernel/git/davem/net.git/commit/?id=3a5795b83d57) (bpf: lru: Add map-in-map LRU example, 2017-04-14)

Not all of the changes and highlights hitting mainline now are new and might have been partially mentioned in last [week's issue](https://www.cilium.io/blog/2017/5/2/bpf-updates-01-2017-05-02).

## Presentations

### Videos

#### [Netdev 2.1 - Busy Polling By Eric Dumazet](https://www.youtube.com/watch?v=X0xBCoQGUvg)

The talk is mainly on Busy Polling, with one slide on future BPF work with regards to siloing through SO_REUSEPORT, which has recently been [addressed upstream](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=b1d9fc41aab11f9520b2e0d57ae872e2ec5d6f32).

> linux-4.12 changes (cont)
>
> Ideally, we should add eBPF support so that `SO_REUSEPORT` enabled listeners can choose the appropriate silo (per RX queue listener) directly at SYN time, using an appropriate `SO_ATTACH_REUSEPORT_EBPF` program.
>
> Same eBPF filter would apply for UDP traffic.

### Slides

#### [XDP - eXpress Data Path, Lund Linux Con](http://people.netfilter.org/hawk/presentations/LLC2017/XDP_DDoS_protecting_LLC2017.pdf)

Great beginner friendly slides on XDP. Also worth checking out the cool collection of sample programs in the [prototype-kernel](https://github.com/netoptimizer/prototype-kernel/tree/master/kernel/samples/bpf) repository.

#### [Trace Aggregation and Collection with eBPF](http://step.polymtl.ca/~suchakra/eBPF-5May2017.pdf)

Good overview on tracing. The diagrams throughout the slides are also very informative and help get a overview of the programmer model in BPF land.

#### [What impact has CloudNative on kernel networking?](https://docs.google.com/presentation/d/1dwSKSBGpUHD3WO5xxzZWj8awV_-xL-oYhvqQMOBhhtk/edit#slide=id.g203aae413f_0_0)

Nice slides on HTTP aware networking security enforcement.

## In case you missed it

If you are ready to do some BPF programming but not sure where to start? Some interesting projects to make that easier are:

### [BPF Compiler Collection (BCC)](https://github.com/iovisor/bcc)

The IO Visor Project provides front ends so you can write [Python](https://github.com/iovisor/bcc/blob/master/docs/tutorial_bcc_python_developer.md), [Lua](https://github.com/iovisor/bcc/tree/master/src/lua) or [Go](https://github.com/iovisor/gobpf). They also have a nice collection of useful programs which can discover real bugs. Also worth checking out their [XDP intro](https://www.iovisor.org/technology/xdp).

### [rbpf](https://github.com/qmonnet/rbpf)

Don't want to write Go, Lua, Python or restricted C code? There is a Rust alternative path in user space.

### [p4c-xdp](https://github.com/vmware/p4c-xdp)

Translate p4 programs into XDP.

### [USENIX/LISA 2016 Linux bcc/BPF Tools](http://www.brendangregg.com/blog/2017-04-29/usenix-lisa-2016-bcc-bpf-tools.html)

Good overview on some of the BCC tools and overall tracing.

### [Demo: May the Fourth be with you](https://www.cilium.io/blog/2017/5/4/demo-may-the-force-be-with-you)

You probably have watched it, but if not this is an awesome demo.

### [Linux Kernel Developers' Netconf 2017](http://vger.kernel.org/netconf2017.html)

The netconf page for [netdev 2.1](http://netdevconf.org/2.1/) got [recently updated](https://twitter.com/davem_dokebi/status/861713796913655810) with more links. Check it out!

### [XDP Newbies Mailing List](https://www.mail-archive.com/netdev@vger.kernel.org/msg162375.html)

> Which is a place where people can talk about getting up to speed with setting up an XDP build environment and writing XDP programs.

You can subscribe by sending a email to `majordomo@vger.kernel.org`, with a message body containing `subscribe xdp-newbies`. No subject is needed, but you can of course add one if you like.

## [Random cool note](https://twitter.com/majek04/status/860066075140141056)

> Solarflare drivers v4.10.6.1002 "XDP: Preview of RX side XDP support; This allows for RX filtering to use the DROP" [https://t.co/fwwK2tYa1g](https://t.co/fwwK2tYa1g)

## Patches

- Alexei Starovoitov, [[PATCH net-next] selftests/bpf: get rid of -D**x86_64**](https://www.mail-archive.com/netdev@vger.kernel.org/msg166839.html)
- David Miller, [[PATCH] selftests: bpf: Use `bpf_endian.h` in `test_xdp.c`](https://patchwork.ozlabs.org/patch/757650/)
- David Miller, [[PATCH 0/2] Fix some bpf program testing framework bugs](https://www.mail-archive.com/netdev@vger.kernel.org/msg166737.html)
  - [[PATCH 1/2] bpf: Do not dereference user pointer in `bpf_test_finish()`.](https://www.mail-archive.com/netdev@vger.kernel.org/msg166740.html)
  - [[PATCH 2/2] bpf: Align packet data properly in program testing framework.](https://www.mail-archive.com/netdev@vger.kernel.org/msg166741.html)
- Daniel Borkmann, [[PATCH] xdp: use common helper for netlink extended ack reporting](https://patchwork.ozlabs.org/patch/757822/)
- Daniel Borkmann, [[PATCH net] bpf, arm64: fix jit branch offset related to ldimm64](https://www.spinics.net/lists/arm-kernel/msg579070.html)
- Daniel Borkmann, [[PATCH net] bpf: don't let ldimm64 leak map addresses on unprivileged](https://patchwork.ozlabs.org/patch/759495/)
- Daniel Borkmann, [[PATCH net 0/2] Two generic xdp related follow-ups](https://www.mail-archive.com/netdev@vger.kernel.org/msg167734.html)
  - [[PATCH net 1/2] xdp: add flag to enforce driver mode](https://www.mail-archive.com/netdev@vger.kernel.org/msg167733.html)
  - [[PATCH net 2/2] xdp: disallow use of native and generic hook at once](https://www.mail-archive.com/netdev@vger.kernel.org/msg167732.html)
- Geert Uytterhoeven, [[PATCH] test_bpf: Use ULL suffix for 64-bit constants](https://www.mail-archive.com/netdev@vger.kernel.org/msg166904.html)
- Jesper Dangaard Brouer, [[net-next PATCH 0/4] Improve bpf ELF-loader under samples/bpf](https://www.mail-archive.com/netdev@vger.kernel.org/msg166673.html)
  - [[net-next PATCH 1/4] samples/bpf: adjust rlimit RLIMIT_MEMLOCK for traceex2, tracex3 and tracex4](https://www.mail-archive.com/netdev@vger.kernel.org/msg166671.html)
  - [[net-next PATCH 2/4] samples/bpf: make bpf_load.c code compatible with ELF maps section changes](https://www.mail-archive.com/netdev@vger.kernel.org/msg166670.html)
  - [[net-next PATCH 3/4] samples/bpf: load_bpf.c make callback fixup more flexible](https://www.mail-archive.com/netdev@vger.kernel.org/msg166672.html)
  - [[net-next PATCH 4/4] samples/bpf: export map_data[] for more info on maps](https://www.mail-archive.com/netdev@vger.kernel.org/msg166674.html)
- Sunil Goutham, [[PATCH 0/9] net: thunderx: Adds XDP support](https://www.spinics.net/lists/arm-kernel/msg579013.html)
  - [[PATCH 1/9] net: thunderx: Support for page recycling](https://www.spinics.net/lists/arm-kernel/msg579018.html)
  - [[PATCH 2/9] net: thunderx: Optimize RBDR descriptor handling](https://www.spinics.net/lists/arm-kernel/msg579014.html)
  - [[PATCH 3/9] net: thunderx: Optimize CQE_TX handling](https://www.spinics.net/lists/arm-kernel/msg579019.html)
  - [[PATCH 4/9] net: thunderx: Cleanup receive buffer allocation](https://www.spinics.net/lists/arm-kernel/msg579020.html)
  - [[PATCH 5/9] net: thunderx: Add basic XDP support](https://www.spinics.net/lists/arm-kernel/msg579015.html)
  - [[PATCH 6/9] net: thunderx: Add support for XDP_DROP](https://www.spinics.net/lists/arm-kernel/msg579016.html)
  - [[PATCH 7/9] net: thunderx: Add support for XDP_TX](https://www.spinics.net/lists/arm-kernel/msg579017.html)
  - [[PATCH 8/9] net: thunderx: Support for XDP header adjustment](https://www.spinics.net/lists/arm-kernel/msg579028.html)
  - [[PATCH 9/9] net: thunderx: Optimize page recycling for XDP](https://www.spinics.net/lists/arm-kernel/msg579021.html)
- Or Gerlitz, [[iproute] tc: Reflect HW offload status](https://patchwork.ozlabs.org/patch/758566/)
- Yuval Mintz, [[PATCH net 0/5] qed\*: General fixes](https://www.mail-archive.com/netdev@vger.kernel.org/msg167617.html)
  - [[PATCH net 1/5] qede: Fix XDP memory leak on unload](https://www.mail-archive.com/netdev@vger.kernel.org/msg167623.html)
  - [[PATCH net 2/5] qed: Fix VF removal sequence](https://www.mail-archive.com/netdev@vger.kernel.org/msg167621.html)
  - [[PATCH net 3/5] qed: Tell QM the number of tasks](https://www.mail-archive.com/netdev@vger.kernel.org/msg167622.html)
  - [[PATCH net 4/5] qed: Correct doorbell configuration for !4Kb pages](https://www.mail-archive.com/netdev@vger.kernel.org/msg167618.html)
  - [[PATCH net 5/5] qede: Split PF/VF ndos.](https://www.mail-archive.com/netdev@vger.kernel.org/msg167619.html)
- Yonghong Song, [[PATCH net-next] selftests/bpf: add a test case to check verifier pointer arithmetic](https://patchwork.ozlabs.org/patch/757842/).
- Yonghong Song, [[llvm] r302055 - [bpf] add relocation support](http://llvm.org/viewvc/llvm-project?rev=302055&view=rev)
- Yonghong Song, [[llvm] r302265 - [bpf] fix a bug which causes incorrect big endian reloc fixup](http://llvm.org/viewvc/llvm-project?view=revision&revision=302265)
- David Ahern, [[PATCH net-next iproute2 0/3] ip: Initial support for extack errors](https://www.spinics.net/lists/netdev/msg433408.html)
  - [[PATCH net-next iproute2 1/3] netlink: import netlink message parsing from kernel](https://www.spinics.net/lists/netdev/msg433409.html)
  - [[PATCH net-next iproute2 2/3] netlink: Add support for extended ack to rtnl_talk](https://www.spinics.net/lists/netdev/msg433412.html)
  - [[PATCH net-next iproute2 3/3] ip link: Add extack handling for setlink](https://www.spinics.net/lists/netdev/msg433410.html)
- Stephen Hemminger, [[RFC] iproute: Add support for extended ack to rtnl_talk](https://www.spinics.net/lists/netdev/msg433823.html)

Please note that netdev receives a lot of patches and the list above is not meant to be comprehensive.

Happy eBPF hacking!
