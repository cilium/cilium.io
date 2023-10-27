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
import NetworkPolicyIcon from 'icons/highlights/network-policy.inline.svg';
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
};

const Card = ({ icon, title, description, buttonText, buttonLink, buttonTarget, className }) => {
  const Icon = iconList[icon];

  return (
    <article
      className={classNames(
        'flex flex-col rounded-xl bg-white px-6 py-8 shadow-primary',
        className
      )}
    >
      <Icon className="h-10 w-10 lg:h-16 lg:w-16" />
      <Heading className="mt-5 leading-tight" tag="h3" size="xs">
        {title}
      </Heading>
      <p className="mt-2.5 w-full pb-6" dangerouslySetInnerHTML={{ __html: description }} />
      <Link
        to={buttonLink}
        target={buttonTarget}
        type="text"
        theme="primary"
        rel="noopener noreferrer"
        className="mt-auto flex gap-2 border-t border-gray-3 pt-6"
      >
        <span>{buttonText}</span>
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
