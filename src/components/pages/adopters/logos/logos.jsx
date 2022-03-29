import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import AlibabaCloudLogo from './images/alibaba-cloud.inline.svg';
import AppuioLogo from './images/appuio.inline.svg';
import AWSLogo from './images/aws.inline.svg';
import AzureLogo from './images/azure.inline.svg';
import DigitalOceanLogo from './images/digitalocean.inline.svg';
import GoogleCloudLogo from './images/google-cloud.inline.svg';
import KindLogo from './images/kind.inline.svg';
import KopsLogo from './images/kops.inline.svg';
import KubesprayLogo from './images/kuberspray.inline.svg';
import OpenStackLogo from './images/openstack.inline.svg';
import ScalewayLogo from './images/scaleway.inline.svg';
import TencentCloudLogo from './images/tencent-cloud.inline.svg';

const logos = {
  aws: AWSLogo,
  tencentCloud: TencentCloudLogo,
  googleCloud: GoogleCloudLogo,
  azure: AzureLogo,
  appuio: AppuioLogo,
  alibabaCloud: AlibabaCloudLogo,
  scaleway: ScalewayLogo,
  digitalOcean: DigitalOceanLogo,
  openStack: OpenStackLogo,
  kind: KindLogo,
  kubespray: KubesprayLogo,
  kops: KopsLogo,
};

const spaceXClassNames = {
  sm: 'mx-5 md:mx-7 lg:mx-9',
  md: 'mx-6 md:mx-10 lg:mx-14',
};

const Logos = ({ title, items, spaceXSize }) => (
  <section className="mt-10 md:mt-20 lg:mt-28 xl:mt-32">
    <Container>
      <Heading className="text-center" tag="h2">
        {title}
      </Heading>
      <div className="mt-3 flex flex-wrap justify-center">
        {items.map((logo, index) => {
          const Logo = logos[logo];
          return (
            <Logo
              className={classNames(
                'mt-5 h-12 w-auto text-gray-1 md:mt-8 md:h-14 lg:mt-11 lg:h-16',
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
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  spaceXSize: PropTypes.oneOf(Object.keys(spaceXClassNames)).isRequired,
};

export default Logos;
