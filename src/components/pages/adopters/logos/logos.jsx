import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import AlibabaCloudLogo from './images/alibaba-cloud.inline.svg';
import AmazonEKSlogo from './images/amazon-eks.inline.svg';
import AppuioLogo from './images/appuio.inline.svg';
import AWSLogo from './images/aws.inline.svg';
import AzureLogo from './images/azure.inline.svg';
import AzureKsLogo from './images/azureks.inline.svg';
import CivoLogo from './images/civo.inline.svg';
import ConstellationLogo from './images/constellation.inline.svg';
import CraneLogo from './images/crane.inline.svg';
import DaoCloudLogo from './images/daocloud.inline.svg';
import DeckhouseLogo from './images/deckhouse.inline.svg';
import DigitalOceanLogo from './images/digitalocean.inline.svg';
import EquinixLogo from './images/equinix.inline.svg';
import ExoscaleLogo from './images/exoscale.inline.svg';
import GardernerLogo from './images/gardener.inline.svg';
import GoogleKeLogo from './images/gke.inline.svg';
import GoogleCloudLogo from './images/google-cloud.inline.svg';
import HetznerLogo from './images/hetzner.inline.svg';
import K8ELogo from './images/k8e.inline.svg';
import KindLogo from './images/kind.inline.svg';
import KopsLogo from './images/kops.inline.svg';
import KubeaszLogo from './images/kubeasz.inline.svg';
import KubekeyLogo from './images/kubekey.inline.svg';
import KubeoneLogo from './images/kubeone.inline.svg';
import KubesprayLogo from './images/kuberspray.inline.svg';
import NineLogo from './images/nine.inline.svg';
import OpenShiftLogo from './images/openshift.inline.svg';
import OpenStackLogo from './images/openstack.inline.svg';
import Rke2Logo from './images/rke2.inline.svg';
import ScalewayLogo from './images/scaleway.inline.svg';
import SovereignLogo from './images/sovereign.inline.svg';
import TencentCloudLogo from './images/tencent-cloud.inline.svg';

const logos = {
  aws: AWSLogo,
  constellation: ConstellationLogo,
  tencentCloud: TencentCloudLogo,
  googleCloud: GoogleCloudLogo,
  azure: AzureLogo,
  appuio: AppuioLogo,
  alibabaCloud: AlibabaCloudLogo,
  deckhouse: DeckhouseLogo,
  k8e: K8ELogo,
  scaleway: ScalewayLogo,
  equinix: EquinixLogo,
  digitalOcean: DigitalOceanLogo,
  openStack: OpenStackLogo,
  kind: KindLogo,
  kubespray: KubesprayLogo,
  kops: KopsLogo,
  amazonEks: AmazonEKSlogo,
  gardener: GardernerLogo,
  googleKe: GoogleKeLogo,
  azureKs: AzureKsLogo,
  crane: CraneLogo,
  kubeasz: KubeaszLogo,
  kubekey: KubekeyLogo,
  kubeone: KubeoneLogo,
  rke2: Rke2Logo,
  nine: NineLogo,
  daocloud: DaoCloudLogo,
  civo: CivoLogo,
  sovereign: SovereignLogo,
  openshift: OpenShiftLogo,
  exoscale: ExoscaleLogo,
  hetzner: HetznerLogo,
};

const spaceXClassNames = {
  sm: 'mx-4 md:mx-6 lg:mx-[26px]',
  md: 'mx-4 md:mx-6 lg:mx-8',
};

const Logos = ({ title, items, spaceXSize, id }) => (
  <section className="pt-10 md:pt-20 lg:pt-28 xl:pt-32" id={id}>
    <Container size="md">
      <Link className="text-center" to={`#${id}`}>
        <Heading tag="h2">{title}</Heading>
      </Link>
      <div className="mx-0 mt-4 flex flex-wrap justify-center md:mt-6 lg:mx-[-26px] lg:mt-8">
        {items.map((logo, index) => {
          const Logo = logos[logo];
          return (
            <Logo
              className={classNames(
                'mt-4 h-12 w-auto text-gray-1 md:mt-6 md:h-14 lg:mt-8 lg:h-16',
                spaceXClassNames[spaceXSize]
              )}
              key={index}
            />
          );
        })}
      </div>
    </Container>
  </section>
);

Logos.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  spaceXSize: PropTypes.oneOf(Object.keys(spaceXClassNames)).isRequired,
};

Logos.defaultProps = {
  id: null,
};

export default Logos;
