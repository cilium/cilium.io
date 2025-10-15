---
path: '/blog/2017/4/24/launch-of-bpf-xdp-documentation'
date: '2017-04-24T13:45:24.000Z'
title: 'Launch of BPF & XDP Documentation'
categories:
  - Technology
tags:
  - cilium
  - bpf
  - xdp
  - documentation
  - guide
ogSummary: 'The Cilium team is excited to sponsor GlueCon 2017 near Denver, CO, showcasing API, microservices, and container security demos this week.'
---

We are excited to announce the "**BPF & XDP Reference Guide**" as part of the Cilium project documentation. We have received various requests on further technical information about BPF and XDP with the desire to learn more about the technology that is driving the Cilium project.

Daniel Borkmann, kernel developer, cilium contributor and one of the BPF subsystem maintainers, has started to put together a comprehensive and detailed document which describes BPF and XDP in great depth:

**[BPF and XDP Reference Guide](http://docs.cilium.io/en/stable/bpf/)**

It is still being actively worked on but we wanted to share this with other developers interested in BPF and XDP as early as possible.

# BPF and XDP Reference Guide

BPF is a highly flexible and efficient “virtual machine”-like construct in the Linux kernel allowing to execute bytecode at various hook points in a safe manner. It is used in a number of Linux kernel subsystems, most prominently networking, tracing and security (f.e. sandboxing).

While BPF has existed since 1992, this document covers the extended Berkley Paket Filter (eBPF) version which has first appeared in Kernel 3.18 and obsoletes the original version which is being referred to as “classic” BPF (cBPF) these days. cBPF is known to many as being the packet filter language use by tcpdump. Nowadays, the Linux kernel runs eBPF only and loaded cBPF bytecode is transparently translated into an eBPF representation in the kernel before program execution. This documentation will generally refer to the term BPF unless explicit differences between eBPF and cBPF are being pointed out.

Even though the name Berkley Packet Filter hints at a packet filtering specific purpose, the instruction set is generic and flexible enough these days that there are many use cases for BPF apart from networking. See [BPF Users](http://docs.cilium.io/en/stable/bpf/#projects-using-bpf) for a list of projects which use BPF.

Cilium uses BPF heavily in its data path, see [Architecture Guide](http://docs.cilium.io/en/stable/architecture/) for further information. The goal of this chapter is to provide an BPF reference guide in oder to gain understanding of BPF its networking specific use including loading BPF programs with tc (traffic control) and XDP (eXpress Data Path), and to aide developing Cilium’s BPF templates.

## BPF Architecture

BPF does not define itself by only providing its instruction set, but also by offering further infrastructure around it such as maps that act as efficient key / value stores, helper functions to interact with and leverage kernel functionality, tail calls for calling into other BPF programs, security hardening primitives, a pseudo file system for pinning objects (maps, programs), and infrastructure for allowing BPF to be offloaded, for example, to a network card.

LLVM provides an BPF back end, such that tools like clang can be used to compile C into an BPF object file, which can then be loaded into the kernel.  BPF is deeply tied into the Linux kernel and allows for full programmability without sacrificing native kernel performance.

Last but not least, also the kernel subsystems making use of BPF are part of BPF’s infrastructure. The two main subsystems discussed throughout this document are tc and XDP where BPF programs can be attached to. XDP BPF programs are attached at the earliest networking driver stage and trigger a run of the BPF program upon packet reception. By definition, this achieves the best possible packet processing performance since packets cannot get processed at an even earlier point in software. Driver support is necessary in order to use XDP BPF programs, though. However, tc BPF programs don’t need any driver support and can be attached to receive and transmit paths of any networking device, including virtual ones such as veth devices since they hook later in the kernel stack compared to XDP. Apart from tc and XDP programs, there are various other kernel subsystems as well that use BPF such as tracing (kprobes, uprobes, tracepoints, etc).

The following subsections provide further details on individual aspects of the BPF architecture.

Read the full guide here: **[BPF and XDP Reference Guide](http://docs.cilium.io/en/stable/bpf/)**
