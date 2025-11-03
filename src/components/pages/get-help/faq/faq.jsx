import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import Item from './item';

const title = 'FAQ';
const items = [
  {
    question: 'What is Cilium?',
    answer:
      'Cilium is an open source, cloud native solution for providing, securing, and observing network connectivity between workloads, fueled by the revolutionary Kernel technology eBPF.',
  },
  {
    question: 'How does Cilium use eBPF?',
    answer:
      'Cilium uses eBPF programs attached to various points in the Linux kernel, such as network interfaces and system calls. This allows it to inspect, modify, route, and secure network packets in real-time.',
  },
  {
    question: 'Why should I choose Cilium over traditional Kubernetes networking solutions?',
    answer:
      'Cilium offers a modern, eBPF-powered alternative to traditional Kubernetes networking.Unlike kube-proxy, which relies on iptables and manual rule management, Cilium uses an eBPF dataplane that eliminates this complexity. The result is faster, more reliable, and highly scalable service routing, especially in large or dynamic Kubernetes clusters.',
  },
  {
    question: 'Does Cilium support multi-cluster networking?',
    answer:
      'Yes, Cilium supports multi-cluster networking through its Cluster Mesh feature. Cluster Mesh connects multiple Cilium-powered clusters, allowing pods in one cluster to discover and access services in other clusters seamlessly. This enables secure, scalable, and transparent communication across clusters running Cilium as their CNI.',
  },
  {
    question: 'How does Cilium handle security policies?',
    answer:
      'Cilium enforces security policies using identity-based controls, runtime enforcement, and transparent encryption.Instead of relying on traditional IP-based rules, Cilium assigns identities to workloads and applies fine-grained, context-aware policies that secure communication between services in modern, dynamic environments.',
  },
  {
    question: 'How can I contribute to Cilium?',
    answer:
      'As an open-source, cloud-native networking solution, Cilium welcomes contributions to its codebase, documentation, and community. You can get involved by following the project on GitHub, joining discussions on Slack, engaging on Twitter, subscribing to the newsletter, or watching tutorials on YouTube. Contributions can include reporting issues, submitting code improvements, writing guides, or helping others in the community.',
  },
  {
    question: 'Where can I find Cilium tutorial or workshop?',
    answer:
      'Get hands-on experience with Cilium through interactive courses, tutorials, and official documentation. Practice using Cilium’s networking, observability, and security features in labs provided by companies within the Cilium ecosystem.',
  },
];

const Faq = () => (
  <section className="mt-10 md:mt-20 lg:mt-28 xl:mt-40">
    <Container size="xs">
      <Heading className="text-center" size="lg" tag="h2">
        {title}
      </Heading>
      <dl className="mt-6 md:mt-10 lg:mt-14">
        {items.map((item, index) => {
          const faqId = `faq${index + 1}`;
          return <Item {...item} faqId={faqId} key={index} isDefaultOpen={index === 0} />;
        })}
      </dl>
    </Container>
  </section>
);

export default Faq;
