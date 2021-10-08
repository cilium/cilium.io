import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import AuditIcon from './images/audit.inline.svg';
import ConnectivityIcon from './images/connectivity.inline.svg';
import EncryptionIcon from './images/encryption.inline.svg';
import MetricsIcon from './images/metrics.inline.svg';
import NativeSupportIcon from './images/native-support.inline.svg';
import NetworkPolicyIcon from './images/network-policy.inline.svg';
import ObservabilityIcon from './images/observability.inline.svg';
import ScalableKubernetesIcon from './images/scalable-kubernetes.inline.svg';
import VisibilityIcon from './images/visibility.inline.svg';
import Item from './item/item';

const list = [
  {
    title: 'Networking',
    items: [
      {
        icon: NativeSupportIcon,
        title: 'Native support for service type Load Balancer and Egress',
        description: `<p>Kubernetes doesn't come with an implenentation of Load Balancing. This is usually left as an exercise for your cloud provider or in private cloud environments an exercise for your networking team. Cilium can attract this traffic with BGP and accelerate leveraging XDP and eBPF. Together these technologies provide a very robust and secure implementation of Load Balancing.</p><p>Cilium and eBPF operate at the kernel layer. With this level of context we can make intelligent decisions about how to connect different workloads whether on the same node or between clusters. With eBPF and XDP Cilium enables significant improvements in latency and performance and eliminates the need for kube-proxy entirely.</p>`,
      },
      {
        icon: ScalableKubernetesIcon,
        title: 'Scalable Kubernetes CNI',
        description: `<p>Kubernetes doesn't come with an implenentation of Load Balancing. This is usually left as an exercise for your cloud provider or in private cloud environments an exercise for your networking team. Cilium can attract this traffic with BGP and accelerate leveraging XDP and eBPF. Together these technologies provide a very robust and secure implementation of Load Balancing.</p><p>Cilium and eBPF operate at the kernel layer. With this level of context we can make intelligent decisions about how to connect different workloads whether on the same node or between clusters. With eBPF and XDP Cilium enables significant improvements in latency and performance and eliminates the need for kube-proxy entirely.</p>`,
      },
      {
        icon: ConnectivityIcon,
        title: 'Multi-cluster Connectivity',
        description: `<p>Kubernetes doesn't come with an implenentation of Load Balancing. This is usually left as an exercise for your cloud provider or in private cloud environments an exercise for your networking team. Cilium can attract this traffic with BGP and accelerate leveraging XDP and eBPF. Together these technologies provide a very robust and secure implementation of Load Balancing.</p><p>Cilium and eBPF operate at the kernel layer. With this level of context we can make intelligent decisions about how to connect different workloads whether on the same node or between clusters. With eBPF and XDP Cilium enables significant improvements in latency and performance and eliminates the need for kube-proxy entirely.</p>`,
      },
    ],
  },
  {
    title: 'Observability',
    items: [
      {
        icon: VisibilityIcon,
        title: 'Identity-aware Visibility',
        description: `<p>Kubernetes doesn't come with an implenentation of Load Balancing. This is usually left as an exercise for your cloud provider or in private cloud environments an exercise for your networking team. Cilium can attract this traffic with BGP and accelerate leveraging XDP and eBPF. Together these technologies provide a very robust and secure implementation of Load Balancing.</p><p>Cilium and eBPF operate at the kernel layer. With this level of context we can make intelligent decisions about how to connect different workloads whether on the same node or between clusters. With eBPF and XDP Cilium enables significant improvements in latency and performance and eliminates the need for kube-proxy entirely.</p>`,
      },
      {
        icon: ObservabilityIcon,
        title: 'Advanced Self Service Observability',
        description: `<p>Kubernetes doesn't come with an implenentation of Load Balancing. This is usually left as an exercise for your cloud provider or in private cloud environments an exercise for your networking team. Cilium can attract this traffic with BGP and accelerate leveraging XDP and eBPF. Together these technologies provide a very robust and secure implementation of Load Balancing.</p><p>Cilium and eBPF operate at the kernel layer. With this level of context we can make intelligent decisions about how to connect different workloads whether on the same node or between clusters. With eBPF and XDP Cilium enables significant improvements in latency and performance and eliminates the need for kube-proxy entirely.</p>`,
      },
      {
        icon: MetricsIcon,
        title: 'Network Metrics + Policy Troubleshooting',
        description: `<p>Kubernetes doesn't come with an implenentation of Load Balancing. This is usually left as an exercise for your cloud provider or in private cloud environments an exercise for your networking team. Cilium can attract this traffic with BGP and accelerate leveraging XDP and eBPF. Together these technologies provide a very robust and secure implementation of Load Balancing.</p><p>Cilium and eBPF operate at the kernel layer. With this level of context we can make intelligent decisions about how to connect different workloads whether on the same node or between clusters. With eBPF and XDP Cilium enables significant improvements in latency and performance and eliminates the need for kube-proxy entirely.</p>`,
      },
    ],
  },
  {
    title: 'Security',
    items: [
      {
        icon: EncryptionIcon,
        title: 'Transparent Encryption',
        description: `<p>Kubernetes doesn't come with an implenentation of Load Balancing. This is usually left as an exercise for your cloud provider or in private cloud environments an exercise for your networking team. Cilium can attract this traffic with BGP and accelerate leveraging XDP and eBPF. Together these technologies provide a very robust and secure implementation of Load Balancing.</p><p>Cilium and eBPF operate at the kernel layer. With this level of context we can make intelligent decisions about how to connect different workloads whether on the same node or between clusters. With eBPF and XDP Cilium enables significant improvements in latency and performance and eliminates the need for kube-proxy entirely.</p>`,
      },

      {
        icon: AuditIcon,
        title: 'Security Forensics + Audit',
        description: `<p>Kubernetes doesn't come with an implenentation of Load Balancing. This is usually left as an exercise for your cloud provider or in private cloud environments an exercise for your networking team. Cilium can attract this traffic with BGP and accelerate leveraging XDP and eBPF. Together these technologies provide a very robust and secure implementation of Load Balancing.</p><p>Cilium and eBPF operate at the kernel layer. With this level of context we can make intelligent decisions about how to connect different workloads whether on the same node or between clusters. With eBPF and XDP Cilium enables significant improvements in latency and performance and eliminates the need for kube-proxy entirely.</p>`,
      },

      {
        icon: NetworkPolicyIcon,
        title: 'Advanced Network Policy',
        description: `<p>Kubernetes doesn't come with an implenentation of Load Balancing. This is usually left as an exercise for your cloud provider or in private cloud environments an exercise for your networking team. Cilium can attract this traffic with BGP and accelerate leveraging XDP and eBPF. Together these technologies provide a very robust and secure implementation of Load Balancing.</p><p>Cilium and eBPF operate at the kernel layer. With this level of context we can make intelligent decisions about how to connect different workloads whether on the same node or between clusters. With eBPF and XDP Cilium enables significant improvements in latency and performance and eliminates the need for kube-proxy entirely.</p>`,
      },
    ],
  },
];

const Highlights = () => (
  <section className="mt-10 md:mt-20 lg:mt-28">
    <Container className="grid gap-4 md:gap-6 lg:gap-8 md:grid-cols-2 xl:grid-cols-3 auto-rows-fr">
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
