---
path: '/blog/2025/11/29/peacesandy-cilium-internship-experience'
date: '2025-11-29T13:00:00.000Z'
title: 'Contributing to Cilium Through the LFX Mentorship Program'
ogImage: lfxacceptanceemail.png
isFeatured: false
ogSummary: 'A detailed reflection on my 3-month LFX Mentorship improving Cilium’s SEO, AEO, and AIO to enhance discoverability, structured data, and AI-driven search performance.'
categories:
  - Community
tags:
  - Cilium
  - LFX
  - Open Source
---

import authors from 'utils/author-data';

The past three months have been both educational and transformative, as I have had the opportunity to contribute to Cilium through the LFX Mentorship Program. This journey brought growth, hands-on learning, and meaningful collaboration with my mentor and the broader open-source community. Working closely with the my mentor helped me expand my technical skills while experiencing the true spirit of open-source contribution. In this article, I share my whole experience in the LFX Mentorship Program and my work on evaluating and improving Cilium’s SEO, AEO, and AIO.

## What is the LFX Mentorship Program?

The LFX Mentorship Program is an initiative by The Linux Foundation designed to encourage global participation in open-source development. Similar to programs like Google Summer of Code, it offers contributors the opportunity to work on real open-source projects under the guidance of experienced project maintainers for 3 months. It provides hands-on experience, mentorship, and a pathway to becoming an active member of the open-source community.

## About Cilium

Cilium is an open-source, cloud-native networking solution that provides secure, observable, and high-performance connectivity between workloads, powered by eBPF, a revolutionary Linux kernel technology. It enables advanced networking, load balancing, and security capabilities without requiring any changes to applications.

Trusted by organizations running large-scale, modern infrastructure, Cilium is a core building block of cloud-native platforms. Contributing to Cilium gave me valuable exposure to real-world challenges in networking, cloud infrastructure, and open-source development. I first discovered Cilium as an exciting open-source project, applied for the mentorship, and was thrilled and immensely grateful to be selected.

## My Internship Experience

At the start of my internship, I spent time gaining a deep understanding of the project by reading the codebase, learning its architecture, and identifying key pain points. My mentor, Bill Mulligan, played a considerable role in shaping my experience. He set up weekly meetings and stayed consistently available through one-on-one Slack conversations to support my progress.

From our first introductory call, I knew this internship would offer immense learning opportunities, and it exceeded my expectations. My mentor is incredibly supportive, which makes the experience rewarding. Along the way, I learned a lot about eBPF, cloud-native, and Kubernetes, which have become very valuable to me.

Over the course of the internship, I sharpened my technical skills, improved my understanding of cloud-native networking, and gained confidence working on a widely adopted open-source project. I feel truly fulfilled contributing to Cilium, and I’m proud of the impact I made.

Cilium is an exciting and welcoming project for anyone interested in open-source, and I’m grateful to have been part of it.

## My Contributions

Once my internship officially began, we aligned on a clear, ambitious goal: improve Cilium's SEO, AEO, and AIO so that both search engines and modern AI systems could better understand, surface, and recommend Cilium’s content. To stay aligned throughout the project, my mentor set up consistent weekly check-ins and a Slack communication channel. These regular touchpoints helped us maintain momentum, review progress, and rapidly iterate on improvements as insights emerged.

We approached the project systematically. I started by addressing foundational issues on the site, fixing broken links, cleaning up metadata, and enhancing the SEO component to support richer structured data across the Cilium website. From there, I moved on to updating metadata for key pages, refining blog titles and descriptions, and ensuring every page had a canonical URL to prevent duplicate content issues. I also reorganized the heading hierarchy across multiple sections to make them more transparent for both humans and search engines. I refactored the blog tagging system to highlight only the most frequently used tags.

After improving the site's overall health, I shifted my focus to more advanced optimizations. I updated article-level metadata (author, publication date, and descriptions), added alt text for accessibility, and introduced standardized frontmatter for automation, especially on blog pages. I also improved user experience and search performance by adding TL;DR sections to key documentation pages and implementing FAQ schemas where appropriate. I wrote the FAQ and added a dedicated page for it on the website, improving its chances of appearing in featured snippets and AI-generated summaries.

On the AI optimization side, I reworked meta descriptions to be more keyword-specific and user-focused, reinforced a clean heading hierarchy, and added unique IDs to major sections for better deep linking. I added metadata blocks at the top of pages for better machine readability and implemented answer-first formatting, ensuring the core answer to a query appears early in the content. These changes were significant for AI search engines like Perplexity, Bing Copilot, and Google SGE, which rely heavily on structured clarity.

Although some pages didn’t require major restructuring, I still added custom anchor IDs and deep links so AI assistants could accurately reference key sections. Throughout this process, every update was tested, reviewed, and refined through our weekly check-ins, ensuring that improvements aligned with Cilium’s broader documentation and website goals.

To close out the project, I established baseline performance metrics in Google Search Console and keyword ranking tools. After the updates went live, I tracked whether Cilium began appearing in rich results such as FAQs, snippets, and AI-generated answer panels. The early results were positive, showing increased visibility, improved metadata usage, and better alignment with modern search and AI engines.

This internship was a uniquely rewarding experience. It allowed me to work at the intersection of technical writing, SEO strategy, AI search-readiness, and documentation architecture, while contributing meaningfully to a major open-source project. I’m proud of the improvements I made, and even more excited to see how Cilium continues to grow in visibility and accessibility across both traditional search engines and the emerging landscape of AI-driven discovery.

## Impact

The improvements made during this internship significantly strengthened the discoverability, accessibility, and overall clarity of Cilium’s website. By enhancing SEO, implementing structured metadata, refining heading hierarchies, and optimizing content for AI-driven search, cilium.io is now better positioned to appear in traditional search results and emerging AI-generated answer platforms.

These updates help users, whether new contributors, engineers, or organizations evaluating Cilium, find accurate, well-structured information faster. The implementation of FAQ schema, improved meta descriptions, and TL;DR sections also ensures that key concepts are more easily understood and more likely to surface in featured snippets, rich results, and AI chat interfaces.

Beyond immediate gains, the changes introduced more consistency across the website and established a scalable foundation that future contributors and maintainers can build on. By making Cilium’s content more machine-readable and search-friendly, this project supports long-term visibility, better onboarding for newcomers, and stronger engagement across the broader open-source ecosystem.

## Summary

I am deeply grateful to everyone who made this internship experience meaningful. To my mentor, Bill Mulligan, thank you for believing in me and guiding me with patience, clarity, and kindness. Your feedback, your time, and your willingness to review every PR and answer every question made this journey so much smoother. And to Paul Arah, thank you for your thoughtful reviews and comments; they strengthened my work in ways I truly appreciate.

A special thank you to my friends, Oluchi Nwenyi and Victoria Nduka, LFX Intern alumni, for always being there to answer my endless questions and for offering invaluable support throughout this internship.

I have genuinely enjoyed this experience and learned so much more than I expected. To anyone considering participating in the LFX mentorship: please apply. There is an incredible range of skills needed in open-source projects, and you don’t need to “fit perfectly” or feel like you already have the right experience. Don’t count yourself out. There is room for you to grow, contribute, and thrive.

The Cilium ecosystem will always hold a special place in my heart.

And finally, thank you to the Linux Foundation for creating the LFX Mentorship Program. It is truly a life-changing opportunity.

<BlogAuthor {...authors.PeaceSandy} />
