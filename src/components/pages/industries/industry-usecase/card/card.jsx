import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import ArrowIcon from 'icons/arrow.inline.svg';
import BandWidthIcon from 'icons/highlights/bandwidth-latency-optimization.inline.svg';
import BGPIcon from 'icons/highlights/bgp.inline.svg';
import EgressGatewayIcon from 'icons/highlights/egress-gateway.inline.svg';
import EncryptionIcon from 'icons/highlights/encryption.inline.svg';
import KubeProxyIcon from 'icons/highlights/kubeproxy.inline.svg';
import MulticastIcon from 'icons/highlights/multicast.inline.svg';
import NetworkFlowIcon from 'icons/highlights/network-flow.inline.svg';
import NetworkPolicyIcon from 'icons/highlights/network-policy.inline.svg';
import AdvancedProtocolVisibilityIcon from 'icons/highlights/protocol-visibility.inline.svg';
import RuntimeEnforcementIcon from 'icons/highlights/runtime-enforcement.inline.svg';
import ScalableKubernetesIcon from 'icons/highlights/scalable-kubernetes.inline.svg';
import ServiceMapIcon from 'icons/highlights/service-map.inline.svg';
import ServiceMeshIcon from 'icons/highlights/service-mesh.inline.svg';
import NativeSupportIcon from 'images/pages/industries/media-entertainment/native-support.inline.svg';

const iconList = {
  bandWidth: BandWidthIcon,
  serviceMesh: ServiceMeshIcon,
  scalableKubernetes: ScalableKubernetesIcon,
  bgp: BGPIcon,
  encryption: EncryptionIcon,
  networkPolicy: NetworkPolicyIcon,
  runtimeEnforcement: RuntimeEnforcementIcon,
  nativeSupport: NativeSupportIcon,
  serviceMap: ServiceMapIcon,
  egressGateway: EgressGatewayIcon,
  kubeProxy: KubeProxyIcon,
  'protocol-visibility': AdvancedProtocolVisibilityIcon,
  'network-flow': NetworkFlowIcon,
  multicast: MulticastIcon,
};

const Card = ({ icon, title, description, buttonText, buttonLink, buttonTarget, className }) => {
  const Icon = iconList[icon];

  return (
    <article
      className={classNames(
        'flex flex-col rounded-xl bg-white dark:bg-gray-2 px-6 py-8 shadow-primary',
        className
      )}
    >
      <Icon className="h-10 w-10 lg:h-16 lg:w-16" />
      <Heading className="mt-5 leading-tight text-black" tag="h3" size="xs">
        {title}
      </Heading>
      <p
        className="mt-2.5 w-full pb-6  text-black"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <Link
        to={buttonLink}
        target={buttonTarget}
        type="text"
        theme="primary"
        className="mt-auto flex gap-2 border-t border-t border-gray-3 dark:border-gray-600 pt-6"
      >
        {buttonText}
        <ArrowIcon />
      </Link>
    </article>
  );
};

Card.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
  buttonTarget: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Card.defaultProps = {
  className: null,
};

export default Card;
