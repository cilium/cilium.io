import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import AlibabaCloudLogo from 'icons/logo-alibaba-cloud.inline.svg';
import AWSLogo from 'icons/logo-aws.inline.svg';
import AzureLogo from 'icons/logo-azure.inline.svg';
import GoogleLogo from 'icons/logo-google.inline.svg';
import IbmCloudLogo from 'icons/logo-ibm-cloud.inline.svg';
import KubernetesLogo from 'icons/logo-kubernetes.inline.svg';
import LinuxLogo from 'icons/logo-linux.inline.svg';
import MirantisLogo from 'icons/logo-mirantis.inline.svg';
import OpenshiftLogo from 'icons/logo-openshift.inline.svg';
import OracleCloudLogo from 'icons/logo-oracle-cloud.inline.svg';
import RancherLogo from 'icons/logo-rancher.inline.svg';
import VmwareLogo from 'icons/logo-vmware.inline.svg';

const title = 'Platforms';
const logos = [
  GoogleLogo,
  AzureLogo,
  RancherLogo,
  MirantisLogo,
  OpenshiftLogo,
  OracleCloudLogo,
  LinuxLogo,
  AWSLogo,
  VmwareLogo,
  IbmCloudLogo,
  KubernetesLogo,
  AlibabaCloudLogo,
];

const Platforms = () => (
  <section className="mt-10 md:mt-20">
    <Container>
      <Heading tag="h2">{title}</Heading>
      <div className="flex flex-wrap items-center justify-center grid-cols-2 mt-6 xs:grid xl:justify-between justify-items-center gap-y-5 gap-x-6 sm:flex md:mt-8 md:gap-x-14 lg:gap-x-20 md:gap-y-6 lg:mt-11">
        {logos.map((logo, index) => {
          const Logo = logo;
          return <Logo className="w-auto h-10" key={index} />;
        })}
      </div>
    </Container>
  </section>
);

export default Platforms;
