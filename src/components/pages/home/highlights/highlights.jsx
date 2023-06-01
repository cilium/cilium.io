import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import AuditIcon from './images/audit.inline.svg';
import BandWidthIcon from './images/bandwidth-latency-optimization.inline.svg';
import BGPIcon from './images/bgp.inline.svg';
import ConnectivityIcon from './images/connectivity.inline.svg';
import EgressGatewayIcon from './images/egress-gateway.inline..svg';
import EncryptionIcon from './images/encryption.inline.svg';
import MetricsIcon from './images/metrics.inline.svg';
import NativeSupportIcon from './images/native-support.inline.svg';
import NetworkPolicyIcon from './images/network-policy.inline.svg';
import ObservabilityIcon from './images/observability.inline.svg';
import ScalableKubernetesIcon from './images/scalable-kubernetes.inline.svg';
import ServiceMesh from './images/service-mesh.inline.svg';
import VisibilityIcon from './images/visibility.inline.svg';
import ItemCard from './item/item-card';

const list = [
  {
    title: 'Networking',
    items: [
      {
        icon: ScalableKubernetesIcon,
        title: 'High Performance Networking (CNI)',
        path: 'cni',
      },
      {
        icon: NativeSupportIcon,
        title: 'Layer 4 Load Balancer',
        path: 'load-balancer',
      },
      {
        icon: ConnectivityIcon,
        title: 'Cluster Mesh',
        path: 'cluster-mesh',
      },
      {
        icon: BandWidthIcon,
        title: 'Bandwidth and Latency Optimization',
        path: 'bandwidth-optimization',
      },
      {
        icon: BGPIcon,
        title: 'BGP',
        path: 'bgp',
      },
      {
        icon: EgressGatewayIcon,
        title: 'Egress Gateway',
        path: 'egress-gateway',
      },
      {
        icon: ServiceMesh,
        title: 'Service Mesh',
        path: 'service-mesh',
      },
    ],
  },

  {
    title: 'Observability',
    items: [
      {
        icon: VisibilityIcon,
        title: 'Identity-aware Visibility',
      },
      {
        icon: ObservabilityIcon,
        title: 'Advanced Self Service Observability',
      },
      {
        icon: VisibilityIcon,
        title: 'Identity-aware Visibility',
      },
      {
        icon: ObservabilityIcon,
        title: 'Advanced Self Service Observability',
      },
      {
        icon: MetricsIcon,
        title: 'Network Metrics + Policy Troubleshooting',
      },
      {
        icon: NativeSupportIcon,
        title: 'Service Load Balancing',
      },
      {
        icon: ScalableKubernetesIcon,
        title: 'Scalable Kubernetes CNI',
      },
      {
        icon: ConnectivityIcon,
        title: 'Multi-cluster Connectivity',
      },
    ],
  },
  {
    title: 'Security',
    items: [
      {
        icon: EncryptionIcon,
        title: 'Transparent Encryption',
      },

      {
        icon: AuditIcon,
        title: 'Security Forensics + Audit',
      },
      {
        icon: EncryptionIcon,
        title: 'Transparent Encryption',
      },

      {
        icon: AuditIcon,
        title: 'Security Forensics + Audit',
      },

      {
        icon: NetworkPolicyIcon,
        title: 'Advanced Network Policy',
      },
      {
        icon: NativeSupportIcon,
        title: 'Service Load Balancing',
        description: `<p>Kubernetes doesn't come with an implementation of Load Balancing. This is usually left as an exercise for your cloud provider or in private cloud environments an exercise for your networking team. Cilium can attract this traffic with BGP and accelerate leveraging XDP and eBPF. Together these technologies provide a very robust and secure implementation of Load Balancing.</p><p>Cilium and eBPF operate at the kernel layer. With this level of context we can make intelligent decisions about how to connect different workloads whether on the same node or between clusters. With eBPF and XDP Cilium enables significant improvements in latency and performance and eliminates the need for kube-proxy entirely.</p>`,
      },
      {
        icon: ScalableKubernetesIcon,
        title: 'Scalable Kubernetes CNI',
        description: `Cilium’s control and data plane has been built from the ground up for large-scale and highly dynamic cloud native environments where 100s and even 1000s of containers are created and destroyed within seconds. Cilium’s control plane is highly optimized, running in Kubernetes clusters of up to 5K nodes and 100K pods. Cilium’s data plane uses eBPF for efficient load-balancing and incremental updates, avoiding the pitfalls of large iptables rulesets. Cilium is fully IPv6-aware.`,
      },
      {
        icon: ConnectivityIcon,
        title: 'Multi-cluster Connectivity',
        description: `With standard Kubernetes networking each cluster is an island, requiring proxies to connect workloads across clusters for the purposes of migration, disaster-recovery, or geographic locality. Cilium Cluster Mesh creates a single zone of connectivity for load-balancing, observability and security between nodes across multiple clusters, enabling simple, high-performance cross-cluster connectivity.`,
      },
    ],
  },
];

const Highlights = () => (
  <section className="mt-12">
    <Container>
      {list.map(({ title, items }, index) => (
        <div key={index} className="md:mb-16">
          <Heading className="py-6 text-center" tag="h2" size="sm">
            {title}
          </Heading>
          <ul className="block gap-8 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3">
            {items.map((item, index) => (
              <div key={index} className="mb-4 rounded-lg border bg-white shadow-sm md:mb-0">
                <ItemCard {...item} />
              </div>
            ))}
          </ul>
        </div>
      ))}
    </Container>
  </section>
);

export default Highlights;
