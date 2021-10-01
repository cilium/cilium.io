import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import AWSLogo from 'icons/logo-aws.inline.svg';
import AzureLogo from 'icons/logo-azure.inline.svg';
import GoogleLogo from 'icons/logo-google.inline.svg';
import KubernetesLogo from 'icons/logo-kubernetes.inline.svg';
import OpenshiftLogo from 'icons/logo-openshift.inline.svg';
import VmwareLogo from 'icons/logo-vmware.inline.svg';

const title = 'Supported plattforms';
const logos = [AWSLogo, GoogleLogo, AzureLogo, KubernetesLogo, VmwareLogo, OpenshiftLogo];

const Platforms = () => (
  <section className="mt-20">
    <Container>
      <Heading tag="h2">{title}</Heading>
      <div className="flex flex-wrap items-center justify-center mt-8 gap-x-14 lg:gap-x-20 gap-y-6 lg:mt-11">
        {logos.map((logo, index) => {
          const Logo = logo;
          return <Logo className="h-10 lg:h-[50px] w-auto" key={index} />;
        })}
      </div>
    </Container>
  </section>
);

export default Platforms;
