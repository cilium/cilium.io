import React from 'react';

import Button from 'components/shared/button/button';
import Container from 'components/shared/container/container';
import Heading from 'components/shared/heading';

import illustration from './images/illustration.svg';

const title = 'Discover Cilium';
const description =
  'Join us at our weekly InstallFest Meetup, learn and discuss how to setup and get started with Cilium.';
const buttonText = 'Discover Now';
const buttonUrl = '/learn';

const Discover = () => (
  <section className="mt-10 md:mt-20 lg:mt-28 xl:mt-32">
    <Container>
      <div className="flex flex-col sm:flex-row max-w-[1006px] justify-between items-center space-y-8 sm:space-y-0 sm:space-x-10 sm:mr-8">
        <div>
          <Heading tag="h2" size="sm">
            {title}
          </Heading>
          <p className="mt-2.5 md:text-lg max-w-xl">{description}</p>
          <Button className="mt-6" to={buttonUrl}>
            {buttonText}
          </Button>
        </div>
        <img className="h-auto w-72 lg:w-max" src={illustration} alt="" />
      </div>
    </Container>
  </section>
);
export default Discover;
