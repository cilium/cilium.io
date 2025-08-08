import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import AuditIcon from 'icons/highlights/audit.inline.svg';
import BandWidthIcon from 'icons/highlights/bandwidth-latency-optimization.inline.svg';
import BGPIcon from 'icons/highlights/bgp.inline.svg';
import ConnectivityIcon from 'icons/highlights/connectivity.inline.svg';
import EgressGatewayIcon from 'icons/highlights/egress-gateway.inline.svg';
import EncryptionIcon from 'icons/highlights/encryption.inline.svg';
import KubeProxyIcon from 'icons/highlights/kubeproxy.inline.svg';
import MetricsIcon from 'icons/highlights/metrics-export.inline.svg';
import MulticastIcon from 'icons/highlights/multicast.inline.svg';
import NativeSupportIcon from 'icons/highlights/native-support.inline.svg';
import NetworkFlowLogs from 'icons/highlights/network-flow.inline.svg';
import NetworkPolicyIcon from 'icons/highlights/network-policy.inline.svg';
import AdvancedProtocolVisibilityIcon from 'icons/highlights/protocol-visibility.inline.svg';
import RuntimeEnforcementIcon from 'icons/highlights/runtime-enforcement.inline.svg';
import ScalableKubernetesIcon from 'icons/highlights/scalable-kubernetes.inline.svg';
import ServiceMapIcon from 'icons/highlights/service-map.inline.svg';
import ServiceMeshIcon from 'icons/highlights/service-mesh.inline.svg';

import ItemCard from './item/item-card';

const title = 'Use Cases';

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
      {
        icon: MulticastIcon,
        title: 'Multicast',
        path: 'multicast',
      },
      {
        icon: MulticastIcon,
        title: 'Host Firewall',
        path: 'host-firewall',
      },
      {
        icon: ServiceMapIcon,
        title: 'Ingress',
        path: 'ingress',
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
        title: 'Runtime Security',
        path: 'runtime-security',
      },
    ],
  },
];

const Highlights = () => (
  <section className="pt-10 md:pt-20 lg:pt-32 bg-white dark:bg-[#0f1d3e]" id="use-cases">
    <Container>
      <Heading className="text-center dark:text-gray-3 text-black" tag="h2">
        {title}
      </Heading>
      {list.map(({ title, items }, index) => (
        <div key={index} id={title.toLowerCase()}>
          <Heading className="pb-10 pt-14 md:pt-20 dark:text-gray-3 text-black" tag="h2" size="sm">
            {title}
          </Heading>
          <ul className="grid grid-cols-1 gap-6 md:auto-rows-fr md:grid-cols-2 md:gap-8 lg:grid lg:auto-rows-fr lg:grid-cols-3">
            {items.map((item, index) => (
              <li>
                <ItemCard {...item} key={item.title + index} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Container>
  </section>
);

export default Highlights;
