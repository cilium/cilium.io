import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import AuditIcon from './images/audit.inline.svg';
import BandWidthIcon from './images/bandwidth-latency-optimization.inline.svg';
import BGPIcon from './images/bgp.inline.svg';
import ConnectivityIcon from './images/connectivity.inline.svg';
import EgressGatewayIcon from './images/egress-gateway.inline.svg';
import EncryptionIcon from './images/encryption.inline.svg';
import KubeProxyIcon from './images/kubeproxy.inline.svg';
import MetricsIcon from './images/metrics-export.inline.svg';
import NativeSupportIcon from './images/native-support.inline.svg';
import NetworkFlowLogs from './images/network-flow.inline.svg';
import NetworkPolicyIcon from './images/network-policy.inline.svg';
import AdvancedProtocolVisibilityIcon from './images/protocol-visibility.inline.svg';
import RuntimeEnforcementIcon from './images/runtime-enforcement.inline.svg';
import ScalableKubernetesIcon from './images/scalable-kubernetes.inline.svg';
import ServiceMapIcon from './images/service-map.inline.svg';
import ServiceMeshIcon from './images/service-mesh.inline.svg';
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
        icon: KubeProxyIcon,
        title: 'Kube-proxy Replacement',
        path: 'kube-proxy',
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
        icon: ServiceMeshIcon,
        title: 'Service Mesh',
        path: 'service-mesh',
      },
      {
        icon: AuditIcon,
        title: 'Gateway API',
        path: 'gateway-api',
      },
    ],
  },

  {
    title: 'Observability',
    items: [
      {
        icon: ServiceMapIcon,
        title: 'Service Map',
        path: 'service-map',
      },
      {
        icon: MetricsIcon,
        title: 'Metrics & Tracing Export',
        path: 'metrics-export',
      },
      {
        icon: NetworkFlowLogs,
        title: 'Identity-aware L3/L4/DNS Network Flow Logs',
        path: 'network-flow-logs',
      },
      {
        icon: AdvancedProtocolVisibilityIcon,
        title: 'Advanced Network Protocol Visibility',
        path: 'protocol-visibility',
      },
    ],
  },

  {
    title: 'Security',
    items: [
      {
        icon: EncryptionIcon,
        title: 'Transparent Encryption',
        path: 'transparent-encryption',
      },
      {
        icon: NetworkPolicyIcon,
        title: 'Network Policy',
        path: 'network-policy',
      },

      {
        icon: RuntimeEnforcementIcon,
        title: 'Runtime Enforcement',
        path: 'runtime-enforcement',
      },
    ],
  },
];

const Highlights = () => (
  <section className="mt-12" id="use-cases">
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
