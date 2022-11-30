---
path: '/blog/2022/11/30/cilium-google-season-of-docs-2022'
date: '2022-11-30T17:00:00.000Z'
title: 'Cilium Google Season of Docs Case Study'
ogImage: ogimage.png
ogSummary: "Learn how Google Season of Docs went for Cilium"
categories:
  - Community
tags:
  - Cilium
---

**Cilium Google Season of Docs Case Study: Reorganize Cilium Features and Getting Started**

Organization or Project: [Cilium](https://docs.cilium.io/en/v1.12/contributing/development/season_of_docs/)

Organization Description: Cilium (current version 1.11, first released in 2017) is an Apache 2.0-licensed project for providing, securing, and observing network connectivity between container workloads - cloud native, and built around the revolutionary Linux Kernel technology eBPF. Our users adopt Cilium to solve their cloud networking, observability, and security issues at scale including running some of the largest Kubernetes clusters in the world. Cilium has a large community of contributors from over 50 countries around the world. Multiple companies have staff paid to work on Cilium too. Cilium is an incubating project in the Cloud Native Computing Foundation and is the networking data plane for Google Kubernetes Engine and Anthos.

*Authors: _Bill Mulligan_*
*November 30th, 2022* 

## **Problem Statement**

Cloud native networking and security are complex topics that even long time practitioners struggle to master. Cilium documentation has grown organically over time and the project has mainly been used by advanced cloud native users. The documentation lacks the structure that new, and even existing, users can rely on to quickly find the information they need. In addition, users sometimes struggle to discover all of the features and functionality of Cilium because the documentation does not make them easily discoverable. Finally, new users often have questions about how to troubleshoot setting up their network.

Improving the structure of the documentation will help new users adopt Cilium and reduce the support load on the community.

## **Project Description**

### **Creating the proposal**

The Cilium team knew about Season of Docs from other CNCF projects that had participated in the past. We had some open PRs about restructuring the documentation, but nobody was finding the time to finish them. Two people from the Cilium team (Liz and Bill) volunteered to create a project proposal.

Once the proposal was written, we shared it in the weekly developer meeting for feedback. People were really excited about finally having someone to look at the overall docs structure! We made a PR of the proposal in the docs and had it approved by the maintainers. Finally, we opened our Open Collective account to participate and receive payments.

#### **Budget**

We estimated that hiring a part time writer would cost roughly $1,500 a month which helped us come up with our $9,000 project budget. We also included some extra to buy our writer Cilium swag to show what they did for the project.

After our interviews, we really liked two of the applicants and were having a hard time choosing between them because they would each bring different things to the project. We ultimately asked them if they would be willing to split the budget to each work on different parts of the project. Both writers agreed so we moved forward with a split budget with each writer working on a different part of the project proposal. We liked what they each brought to the project and would recommend it for other projects faced with a similar decision.

### **Participants**

The core team working on this project was:

* Liz Rice (Cilium)
* Quentin Monnet (Cilium)
* Bill Mulligan (Cilium)
* Yoyo Wu (Technical Writer)
* Divine Odazie (Developer Relations)

To find our technical writer, we created a Google Form to apply and promoted it on Twitter, the Cilium Slack, and our newsletter. We had 26 applications and ended up interviewing 5 people. Of the people interviewed, we really liked Yoyo Wu’s previous experience restructuring documentation with Google Season of Docs and Divine’s excitement for Cilium (he even made some PRs leading up to the application).

Once both agreed to work on different parts of the projects (Yoyo on restructuring and Divine on the Getting Started Guide) we began to work with them. We set up weekly and bi-weekly calls to coordinate our work. Divine was in the same time zone as the Cilium team so it was easy to find a time while Yoyo was several time zones over, but she preferred to meet in the evening so it worked out well.

The Cilium team worked with Divine to find some good first issues in the getting started guide to get familiar with the project then had him dive into improving the documentation and adding additional links and resources that would be helpful for people just getting started. It was great to have a new set of eyes to look over the getting started guides to help spot things that the rest of us took for granted.

With Yoyo, we started with the outline of the documentation in a Google doc. She then went through and suggested changes for restructuring it. We took these suggestions to the sig-docs channel in our slack for further feedback. After we all agreed on the new structure, Yoyo went ahead and started making the changes to the documentation structure.

The check-ins were very helpful to keep all of the PRs moving and we would recommend anyone else doing GSoD to also set up regular meetings with their technical writer. Divine has now gone on to make contributions to the Kubernetes projects around Cilium and Yoyo was inspired to help improve the documentation around eBPF too!

### **Timeline**

Once we applied, we started putting together the previous work that had been done to restructure the docs. After we found out we were accepted, we started the application and interview process and hired our technical writers. With them onboard, we were able to quickly move through our objectives and actually were able to hit them ahead of time.

We hired and onboarded our writers in May. In May and June Yoyo audited the existing docs and came up with the new structure. She continued to work on merging PRs for the restructure through October before moving on to other parts of the project. Divine came up with a structure for his work in June and completed updating the Getting Started updates by September.

We were happy with our estimation of the amount of time it would take and were slightly ahead of schedule the whole time.

### **Results**

Across the project, we were able to merge [14 pull requests](https://github.com/cilium/cilium/pulls?q=is%3Apr+is%3Aclosed+label%3Agsod-22). These included:

* Restructuring each section of our documentation
* Adding relevant video content to our docs
* Updating our navigation bar and fixing formatting issues
* Retiring old documentation

In addition, Divine was able to make his first contribution to the Kubernetes project and Yoyo has continued to contribute to the Cilium documentation!

### **Metrics**

In our proposal, we proposed three metrics:

* The number of Slack questions covered in the documentation decreasing
* The number of Github issues covered in the documentation decreasing
* The number of pull requests from new contributors increasing

Because of the metrics we chose, it wasn’t easy to capture the data and it was difficult to determine the trends exactly. The number of PRs from new contributors increased over the whole project and anecdotally the number of slack questions and Github issues also decreased. We also found that maintainers of the project were more happy with the documentation structure too.

### **Analysis**

Google Season of Docs has been a great success for the Cilium project! It was great to finally be able to have time to restructure the documentation to make it easier for new people to get started and for people to find the information that they need. Beyond that, we also think we have a good structure for adding new documentation going forward.

It was great to have more people contributing to the Cilium documentation and even better that both of our technical writers were so inspired by the program that they are continuing to contribute more to open source!

It wasn’t all smooth sailing the whole time. We would sometimes lose track of which PRs were in flight and what we all were currently working on. We tried to help solve this by creating GSoD tags in Github to make the PRs easily findable, but in the future it may be better just to create a projects board to know the status of everything being worked on.

While restructuring the documentation had a pretty clear goal, “simplifying” the getting started was not as clear and we struggled a little bit to define the start and finish of that part of the project. It would be better to have more clear objectives in the future.

Finally, it would have been better to choose better metrics to track for the success of our project. The ones we chose were difficult to collect and we had to try upon more anecdotal evidence instead.

## **Summary**

Google Season of Docs was a smashing success for Cilium. We accomplished all of our goals and we got more people excited about open source!

We really liked the opportunity to work with both of our technical writers and what they each brought to the project. It was great to see them dive head first into Cilum and bring new energy to our documentation. While cloud networking can be a difficult topic to pick up, both of our technical writers were able to connect right to it.

For future projects, we would recommend:

* Don’t be afraid to split your project between technical writers if they can each bring something different to the project. Be sure to talk with them to make sure they are ok with it, but if they all agree, it can be fun to bring multiple perspectives to the work
* Find a good process to track your work from the beginning and make sure you have clear end goals. What starts out simple can quickly grow and be harder to piece back together. Know where everything is and where it ends.
* Meet regularly with your technical writer and welcome them to the community! It's fun to have new people in the community and they bring a fresh set of eyes.
* Go ahead and apply for Google Season of Docs! We weren’t sure if we had the time to do the project, but it has been a great experience overall and we hope to do it again in the future.

## **Appendix**

### **Acknowledgments**

Our team would like to thank the whole Google Season of Docs team for running the program. We found it to be very smooth and a great experience overall. We hope to participate again in the future.
