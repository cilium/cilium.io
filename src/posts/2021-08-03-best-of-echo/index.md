---
path: '/blog/2021/08/03/best-of-echo'
date: '2021-08-03T17:00:00.000Z'
title: 'eBPF and Cilium Office Hours - Highlights from Season 1'
isPopular: true
categories:
  - Community
tags:
  - eBPF
  - BPF
  - Cilium
ogImage: ogimage.png
ogSummary: 'Catch the best moments from Season 1 of eBPF and Cilium Office Hours, featuring demos, debugging, XDP deep dives, and insights from top experts.'
---

[eBPF and Cilium Office Hours](https://www.youtube.com/playlist?list=PLDg_GiBbAx-mY3VFLPbLHcxo6wUjejAOC)
(also known as eCHO) is a weekly YouTube livestream, hosted by Liz Rice and Duffie Cooley, about the world of
eBPF, Cilium and related projects. Most weeks we welcome a guest to show us what
they have been working on and share their insights. In place of this week's live episode (while we
take a well-deserved summer break!) here's a look back at some of our favourite
moments from what we might call Season 1.

## Thomas introduces the Cilium CLI

We started the series with a bang: Thomas Graf joined Liz for a demo-rich [introduction to Cilium](https://youtu.be/80OYrzS1dCA?t=768). For many viewers this was the first peak at the new [Cilium CLI added in 1.10](/blog/2021/05/20/cilium-110#cli). We saw how easy it is to use this to install Cilium and Hubble and get a quick view of status and network connectivity.

<YoutubeIframe embedId='80OYrzS1dCA?t=768'/>

## Duffie debugs a routing issue

For another look at the Cilium CLI check out the [episode where Duffie dives
into it](https://www.youtube.com/watch?v=ndjmaM1i0WQ) - and ends up debugging a
curious routing issue along the way!

<YoutubeIframe embedId='ndjmaM1i0WQ'/>

## Flamegraphs

Thomas returned to the eCHO show a few weeks later to share some [performance
benchmarking results](https://youtu.be/2lGag_j4dIw). The TL;DR from this show:
eBPF implementations shine when it comes to network performance. Thomas even
shared [flame graphs](https://youtu.be/2lGag_j4dIw?t=3038) that show why this is
the case.

<YoutubeIframe embedId='2lGag_j4dIw'/>

## If it's good enough for Linus

Given that [Linus Torvalds himself loves WireGuard](https://youtu.be/-awkPi3D60E?t=540),
this seems like a technology worth knowing about. This episode with Martynas
Pumputis is packed with interesting content, from background on packet flows in
Cilium, through the story of how Martynas and Sebastian Wicki worked on the
implementation, to a demo that makes the theory concrete.

<YoutubeIframe embedId='-awkPi3D60E?start=540'/>

## It's always DNS

You know how whenever something goes wrong "it's always DNS"? [Laurent Bernaille from Datadog shared some war stories](https://youtu.be/mo0RIJZypbQ?t=168) that illustrated some of the unexpectedly wide range of ways in which DNS can indeed be the cause of failure.

<YoutubeIframe embedId='mo0RIJZypbQ?start=168'/>

## eBPF is not just for Linux

One of the biggest developments in eBPF this year has been the revelation that
it's being supported in Windows. [Dave Thaler from Microsoft](https://youtu.be/LrrV-eo6fug?t=317) joined eCHO to
explain how what we had all previously thought of as a Linux technology actually
makes sense in other kernels too.

<YoutubeIframe embedId='LrrV-eo6fug?start=317'/>

## Diving into XDP

Kernel maintainer Daniel Borkmann gave us a [deep dive into XDP](https://youtu.be/OIyPm6K4ooY), from the first
suggestion that perhaps eBPF could be added to network drivers through to some
of the use-cases for XDP in Cilium today, including load balancing and
kube-proxy replacement.

<YoutubeIframe embedId='OIyPm6K4ooY'/>

## Networking explainers

If you want to learn about some of the networking capabilities that Cilium
provides, check out the great explanations that Joe Stringer provides in episode
6 about features added in Cilium 1.10. For example, this episode covers what we mean by an [Egress IP Gateway](https://youtu.be/y5xcvr_fgxc?t=463), or [BGP Service Announcement](https://youtu.be/y5xcvr_fgxc?t=924).

<YoutubeIframe embedId='y5xcvr_fgxc?t=463'/>

## Coming up in Season 2

We've had many more wonderful guests over the last few weeks, including [Kris
Nóva](https://youtu.be/d2I2kLd7AwU), [Antonio Ojea](https://youtu.be/yabzjJMdI08), and [Itay Shakury](https://youtu.be/aOgidMoPz9A). If you have ideas for folks you'd like to
see joining us on eCHO, we'd be very happy to see your suggestions as issues in
the [eCHO GitHub repo](https://github.com/isovalent/eCHO).
