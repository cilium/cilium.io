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
  <section className="mt-10 md:mt-20">
    <Container>
      <Heading tag="h2">{title}</Heading>
      <div className="grid flex-wrap items-center justify-center grid-cols-2 mt-6 justify-items-center gap-y-5 gap-x-6 xs:flex md:mt-8 md:gap-x-14 lg:gap-x-20 md:gap-y-6 lg:mt-11">
        {logos.map((logo, index) => {
          const Logo = logo;
          return <Logo className="h-8 md:h-10 lg:h-[50px] w-auto" key={index} />;
        })}
      </div>
    </Container>
  </section>
);

export default Platforms;
