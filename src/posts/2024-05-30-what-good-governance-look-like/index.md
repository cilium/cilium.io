---
path: '/blog/2024/05/30/what-good-governance-looks-like'
date: '2024-05-30T17:00:00.000Z'
title: 'What Good Governance Looks Like (My Experience as an LFX Mentee for Cilium)'
categories:
  - Community
tags:
  - cilium
ogImage: ogimage.webp
ogSummary: "When I was early in my programming journey and learned what open source was, I immediately knew I wanted to eventually get involved in some capacity. There are many aspects I love about it: the sense of community, the collaboration of talented people pushing forward new technological innovations, the creation of software that is free and available for anyone to use. I knew there was a potential for me to learn and grow through my own involvement as well as contribute to an ecosystem I valued." 
---

When I was early in my programming journey and learned what open source was, I immediately knew I wanted to eventually get involved in some capacity. There are many aspects I love about it: the sense of community, the collaboration of talented people pushing forward new technological innovations, the creation of software that is free and available for anyone to use. I knew there was a potential for me to learn and grow through my own involvement as well as contribute to an ecosystem I valued.

However, after purusing the [Linux Foundation Mentorship portal](https://mentorship.lfx.linuxfoundation.org/#projects_all), I was starting to get a little disheartened. At the time of applying (at the end of February, the tailend of getting into the Spring term), I wasn’t seeing a lot of opportunities that matched with my skillset as a recent web development bootcamp grad. I thought perhaps the LFX Mentorship may not be the right fit for the skills I had at the time, and I should  keep looking for open source opportunities elsewhere.

Right before throwing in the towel, one particular project caught my eye. It stood out among the rest as it was a writing-focused project, with its only required skill being Markdown. I had never heard of open source governance up until this point, but it seemed like something I could get into. I sent in one of my final papers for my religious studies degree as a writing sample, and proceeded to forget about it. 

It was to my surprise that about a week later I was informed that I had been accepted. I was completely blown away. From applying, to learning I was accepted, to actually starting the mentorship project was about a 2-week span – a total whirlwind!

I have now had the opportunity to extensively research multiple systems of governance within the CNCF landscape and use what I’ve learned to edit and add to Cilium’s existing governance docs, as well as create new ones.

As I am now on the tailend of the LFX Mentorship program, I wanted to share some of what I have learned being immersed in governance for these past 12 weeks. I came in knowing exactly nothing about how open source projects operate, and am now leaving with a solid knowledge base to jump off of.  It has been fun to demystify this ecosystem, as I now feel like I know how to navigate an open source project, what to look for, and how to contribute. I have been introduced to a whole new world, a world that I will continue to interact with in some capacity (even just as an end-user, or ‘Adopter’ in open source language) for the rest of my career. 

---

To begin my journey through open source project governance, I started by reading through many CNCF projects’ governance docs. I then created a list of the top 3 qualities that my favorites had and attempted to bring them into my work with the governance docs in Cilium where I could.

## 1. Clear Communication of Values

It is a common practice to see values listed as one of the first things on a governance document. Many spout inspiration from Kubernetes ([and for good reason](https://www.kubernetes.dev/community/values/)). I did always appreciate seeing a non-Kubernetes inspired list, simply because it often felt more tailored to the specific project. An intentional list of values can be a great introduction to the culture of the project to a potential contributor.

However, perhaps even more powerful than simply listing the values at the top is continuing to embody these values in the rest of the documents. These values can be embedded in your processes, word choices, and tone. Examples include pairing the value of ‘Participation’ with a detailed contributor ladder, or matching the value of ‘Inclustivity’ with a warm and encouraging tone. If you have taken the time to find the values that match your project, this embodiment will likely seep through naturally.

## 2. Never Enough Details

Whether this is one of your first interactions with the project, or you are a veteran contributor, everyone benefits from feeling supported by a well-thought-out set of processes and systems.

This quote from [The Open Source Way](https://www.theopensourceway.org/the_open_source_way-guidebook-2.0.html#_project_and_community_governance) really highlighted this for me:

  “In 2018, the Kubernetes project added a set of detailed, comprehensive Role Handbooks for their Release Team. These handbooks outlined information related to the Release Team role, including qualifications necessary for joining the team, duties members of the team perform, and details on the team’s decision-making processes. As a result, the Release Team became the most popular point of entry for project contributions; new participants knew exactly what to expect. Other teams within Kubernetes followed suit—and experienced a doubling or even tripling of the number of new contributors.”

Here’s a question to think about: what are some pain points, anxieties, or uncertainties that are stopping someone from contributing to our project? How many of these could be lessened through proper communication and supportive language?

## 3. A Living Document, reflective of Current Practices

While this one really can’t be determined by an outsider, it is important that everything in your projects’ governance is reflective of actual practices. This obviously includes not having outdated or incorrect information within the docs themselves, but also includes making any implicit practices as explicit as possible. Having unclear governance docs can be a sign that there are some processes you take for granted that could be helpful to write down for someone new to the project. 

Not regularly updating or fleshing out your current practices can make the process of on-boarding new contributors to the project more clunky than it needs to be. Assuming you are actively seeking new contributors and are wanting to grow the talent and responsibilities of existing contributors, seeking to be as transparent as possible will help you achieve this goal. This can help set expectations and give contributors clear guidelines and goalposts to work towards, and feel supported in their process of growing as a leader within your project.

---

I want to thank my mentor Bill Mulligan and the Cilium project for having me on as a mentee, as well as the LFX Mentorship program as a whole for providing this great opportunity to become immersed in open source. The PRs I was able to work on and merge will hopefully allow the project to run more efficiently through enhanced knowledge sharing and systems. 

I am happy to share that I have contributed in the following ways:

  - Moved governance docs into the community repo
    - cilium/cilium - [#31692](https://github.com/cilium/cilium/pull/31692)
    - cilium/community - [#93](https://github.com/cilium/community/pull/93)
    - cilium/.github - [#9](https://github.com/cilium/.github/pull/9)

  - Documented admins for the various tools that Cilium uses
    - cilium/community - [#97](https://github.com/cilium/community/pull/97)

  - Added clarification and editorial changes to Cilium’s governance and contributor ladder docs 
    - cilium/community - [#100](https://github.com/cilium/community/pull/100), [#114](https://github.com/cilium/community/pull/114), [#122](https://github.com/cilium/community/pull/122)
  
  - Added repository lifecycle docs, including a list of all repositories within the Cilium organization and their scope, issue form templates, and a sub-project voting system  
    - cilium/community - [#105](https://github.com/cilium/community/pull/105)

  - Proposed changes to streamline the Cilium Feature Proposal (CFP) approval process 
    - cilium/design-cfps - [#37](https://github.com/cilium/design-cfps/pull/37)
    - cilium/cilium - [#32477](https://github.com/cilium/cilium/pull/32477)

I have enjoyed my experience and have learned a lot, and would encourage anyone thinking about participating to apply. There are a wide range of skillsets needed in open source projects, so don’t count yourself out on the basis of not having what you have deemed are the *right* knowledge base or *right* experience. If you are interested in it and ready to learn, you can likely carve out a space for yourself. Good luck, and I hope to see you participating in a future term!

*Written by Katie Struthers, [@katiestruthers](https://github.com/katiestruthers)*