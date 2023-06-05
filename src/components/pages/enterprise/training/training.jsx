import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import LinuxfoundationLogo from 'icons/LF-Training-logo-color.inline.svg';
import AcendLogo from 'icons/logo-acend.inline.svg';
import IsovalentLogo from 'icons/logo-isovalent.inline.svg';
import SoloioLogo from 'icons/logo-soloio.inline.svg';

const title = 'Training';
const description =
  'The following partners offer Cilium related training in accordance with the training partner requirements of the Cilium project.';

const logos = {
  acend: AcendLogo,
  isovalent: IsovalentLogo,
  linuxfoundation: LinuxfoundationLogo,
  soloio: SoloioLogo
};

const items = [
  {
    logoName: 'acend',
    title: 'Cilium Basics',
    description:
      'This one-day training in English or German provides a practical and clear introduction to Cilium, an eBPF-based networking, observability and security stack for cloud and on-premise infrastructure.',
    buttonText: 'Learn more',
    buttonLink: 'https://www.acend.ch/en/trainings/cilium/',
    buttonTarget: '_blank',
  },
  {
    logoName: 'isovalent',
    title: 'Getting started with Cilium',
    description:
      'Quickly get started with Cilium in our interactive tutorials with a live environment.',
    buttonText: 'Explore Tutorials',
    buttonLink: 'https://isovalent.com/labs/',
    buttonTarget: '_blank',
  },
  {
    logoName: 'linuxfoundation',
    title: 'Introduction to Cilium (LFS146x)',
    description: 'Introductory course from the Linux Foundation on how to get started with Cilium',
    buttonText: 'Enroll Today',
    buttonLink: 'https://training.linuxfoundation.org/training/introduction-to-cilium-lfs146x/',
    buttonTarget: '_blank',
  },
  {
    logoName: 'soloio',
    title: 'Introduction to Cilium',
    description: 'In this workshop, you will learn the essential skills to deploy the Cilium CNI on a test Kubernetes cluster, gather metrics, and enforce network policies.',
    buttonText: 'Get Started',
    buttonLink: 'https://academy.solo.io/introduction-to-cilium-with-fundamentals-for-cilium-certification',
    buttonTarget: '_blank',
  },
];

const Training = () => (
  <section className="py-10 md:py-20 lg:py-28" id="trainings">
    <Container>
      <Heading className="text-center" tag="h2">
        {title}
      </Heading>
      <p
        className="with-link-primary mx-auto mt-4 max-w-[592px] text-center text-lg"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <div className="mt-12 flex flex-col space-y-8 md:flex-row md:justify-between md:space-y-0 md:space-x-8">
        {items.map(
          (
            { logoName, title, description, buttonText, buttonLink, buttonTarget, buttonDisabled },
            index
          ) => {
            const Logo = logos[logoName];

            return (
              <div
                className="relative mx-auto flex max-w-[592px] basis-1/2 flex-col rounded-xl bg-white p-4 shadow-card sm:p-6 md:p-8"
                key={index}
              >
                <Logo className="h-9" />
                <Heading className="mt-7" size="2xs" tag="h3">
                  {title}
                </Heading>
                <p className="mt-2.5 mb-5 text-sm sm:text-base xl:text-lg">{description}</p>
                <Button
                  className="mt-auto w-full self-start md:w-auto"
                  theme="primary-1"
                  to={buttonLink}
                  target={buttonTarget || null}
                  rel={buttonTarget ? 'noopener noreferrer' : null}
                  disabled={buttonDisabled}
                >
                  {buttonText}
                </Button>
              </div>
            );
          }
        )}
      </div>
    </Container>
  </section>
);

export default Training;
