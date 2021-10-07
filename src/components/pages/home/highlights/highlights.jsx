import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import LockIcon from './images/lock.inline.svg';
import SearchIcon from './images/search.inline.svg';
import ServiceIcon from './images/service.inline.svg';
import Item from './item/item';

const list = [
  {
    title: 'Networking',
    items: [
      {
        icon: ServiceIcon,
        title: 'Native support for service type Load Balancer and Egress',
        description: `<p>Kubernetes doesn't come with an implenentation of Load Balancing. This is usually left as an exercise for your cloud provider or in private cloud environments an exercise for your networking team. Cilium can attract this traffic with BGP and accelerate leveraging XDP and eBPF. Together these technologies provide a very robust and secure implementation of Load Balancing.</p><p>Cilium and eBPF operate at the kernel layer. With this level of context we can make intelligent decisions about how to connect different workloads whether on the same node or between clusters. With eBPF and XDP Cilium enables significant improvements in latency and performance and eliminates the need for kube-proxy entirely.</p>`,
      },
      {
        icon: ServiceIcon,
        title: 'Native support for service type Load Balancer and Egress',
        description: `<p>Kubernetes doesn't come with an implenentation of Load Balancing. This is usually left as an exercise for your cloud provider or in private cloud environments an exercise for your networking team. Cilium can attract this traffic with BGP and accelerate leveraging XDP and eBPF. Together these technologies provide a very robust and secure implementation of Load Balancing.</p><p>Cilium and eBPF operate at the kernel layer. With this level of context we can make intelligent decisions about how to connect different workloads whether on the same node or between clusters. With eBPF and XDP Cilium enables significant improvements in latency and performance and eliminates the need for kube-proxy entirely.</p>`,
      },
      {
        icon: ServiceIcon,
        title: 'Native support for service type Load Balancer and Egress',
        description: `<p>Kubernetes doesn't come with an implenentation of Load Balancing. This is usually left as an exercise for your cloud provider or in private cloud environments an exercise for your networking team. Cilium can attract this traffic with BGP and accelerate leveraging XDP and eBPF. Together these technologies provide a very robust and secure implementation of Load Balancing.</p><p>Cilium and eBPF operate at the kernel layer. With this level of context we can make intelligent decisions about how to connect different workloads whether on the same node or between clusters. With eBPF and XDP Cilium enables significant improvements in latency and performance and eliminates the need for kube-proxy entirely.</p>`,
      },
    ],
  },
  {
    title: 'Observability',
    items: [
      {
        icon: SearchIcon,
        title: 'Identity-aware Visibility',
        description: `<p>Kubernetes doesn't come with an implenentation of Load Balancing. This is usually left as an exercise for your cloud provider or in private cloud environments an exercise for your networking team. Cilium can attract this traffic with BGP and accelerate leveraging XDP and eBPF. Together these technologies provide a very robust and secure implementation of Load Balancing.</p><p>Cilium and eBPF operate at the kernel layer. With this level of context we can make intelligent decisions about how to connect different workloads whether on the same node or between clusters. With eBPF and XDP Cilium enables significant improvements in latency and performance and eliminates the need for kube-proxy entirely.</p>`,
      },
      {
        icon: SearchIcon,
        title: 'Identity-aware Visibility',
        description: `<p>Kubernetes doesn't come with an implenentation of Load Balancing. This is usually left as an exercise for your cloud provider or in private cloud environments an exercise for your networking team. Cilium can attract this traffic with BGP and accelerate leveraging XDP and eBPF. Together these technologies provide a very robust and secure implementation of Load Balancing.</p><p>Cilium and eBPF operate at the kernel layer. With this level of context we can make intelligent decisions about how to connect different workloads whether on the same node or between clusters. With eBPF and XDP Cilium enables significant improvements in latency and performance and eliminates the need for kube-proxy entirely.</p>`,
      },
      {
        icon: SearchIcon,
        title: 'Identity-aware Visibility',
        description: `<p>Kubernetes doesn't come with an implenentation of Load Balancing. This is usually left as an exercise for your cloud provider or in private cloud environments an exercise for your networking team. Cilium can attract this traffic with BGP and accelerate leveraging XDP and eBPF. Together these technologies provide a very robust and secure implementation of Load Balancing.</p><p>Cilium and eBPF operate at the kernel layer. With this level of context we can make intelligent decisions about how to connect different workloads whether on the same node or between clusters. With eBPF and XDP Cilium enables significant improvements in latency and performance and eliminates the need for kube-proxy entirely.</p>`,
      },
    ],
  },
  {
    title: 'Security',
    items: [
      {
        icon: LockIcon,
        title: 'Transparent Encryption',
        description: `<p>Kubernetes doesn't come with an implenentation of Load Balancing. This is usually left as an exercise for your cloud provider or in private cloud environments an exercise for your networking team. Cilium can attract this traffic with BGP and accelerate leveraging XDP and eBPF. Together these technologies provide a very robust and secure implementation of Load Balancing.</p><p>Cilium and eBPF operate at the kernel layer. With this level of context we can make intelligent decisions about how to connect different workloads whether on the same node or between clusters. With eBPF and XDP Cilium enables significant improvements in latency and performance and eliminates the need for kube-proxy entirely.</p>`,
      },

      {
        icon: LockIcon,
        title: 'Transparent Encryption',
        description: `<p>Kubernetes doesn't come with an implenentation of Load Balancing. This is usually left as an exercise for your cloud provider or in private cloud environments an exercise for your networking team. Cilium can attract this traffic with BGP and accelerate leveraging XDP and eBPF. Together these technologies provide a very robust and secure implementation of Load Balancing.</p><p>Cilium and eBPF operate at the kernel layer. With this level of context we can make intelligent decisions about how to connect different workloads whether on the same node or between clusters. With eBPF and XDP Cilium enables significant improvements in latency and performance and eliminates the need for kube-proxy entirely.</p>`,
      },

      {
        icon: LockIcon,
        title: 'Transparent Encryption',
        description: `<p>Kubernetes doesn't come with an implenentation of Load Balancing. This is usually left as an exercise for your cloud provider or in private cloud environments an exercise for your networking team. Cilium can attract this traffic with BGP and accelerate leveraging XDP and eBPF. Together these technologies provide a very robust and secure implementation of Load Balancing.</p><p>Cilium and eBPF operate at the kernel layer. With this level of context we can make intelligent decisions about how to connect different workloads whether on the same node or between clusters. With eBPF and XDP Cilium enables significant improvements in latency and performance and eliminates the need for kube-proxy entirely.</p>`,
      },
    ],
  },
];

const Highlights = () => (
  <section className="mt-10 md:mt-20 lg:mt-28">
    <Container className="grid gap-4 md:gap-6 lg:gap-8 md:grid-cols-2 xl:grid-cols-3">
      {list.map(({ title, items }, index) => (
        <div key={index}>
          <Heading tag="h2">{title}</Heading>
          <div className="grid grid-cols-1 gap-4 mt-6 lg:mt-9 md:gap-6 lg:gap-8 auto-rows-fr">
            {items.map((item, index) => (
              <Item {...item} key={index} />
            ))}
          </div>
        </div>
      ))}
    </Container>
  </section>
);

export default Highlights;
