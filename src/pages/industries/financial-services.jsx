/* eslint-disable react/prop-types */
import React from 'react';

import BulletSection from 'components/pages/industries/bullet-section';
import Hero from 'components/pages/industries/hero';
import IndustryUseCases from 'components/pages/industries/industry-usecase/industry-usecase';
import ResourcesCard from 'components/pages/industries/resources';
import Stats from 'components/pages/industries/stats';
import Testimonial from 'components/pages/industries/testimonial';
import FeaturedTalks from 'components/shared/featured-talks';
import SEO from 'components/shared/seo';
import BloombergLogo from 'icons/logo-bloomberg.inline.svg';
import MainLayout from 'layouts/main';

const heroContent = {
  heading: 'Financial Services ',
  texts: [
    'Regulatory oversight is a hallmark of the financial industry. Cilium’s detailed traffic monitoring and logging mechanisms assist institutions in maintaining clear audit trails, ensuring regulatory compliance are met and forensic investigations are facilitated. ',
    "The world of fintech revolves around APIs – from mobile banking apps to complex trading platforms. Cilium's API-aware network security ensures that these critical gateways can be fortified, understanding and guarding against any malicious patterns in API calls.",
    'With Cilium, financial services can achieve improved observability, maintain security controls, and weave in security governance for Kubernetes environments in On-prem/Hybrid/Multi-Cloud environments including AKS/EKS/GCP/OpenShift/Rancher/SUSE, etc.',
  ],
};

const bloombergTestimonial = {
  description:
    'Bloomberg successfully enhanced the security and access control of its BQuant Enterprise workloads through the implementation of robust network security measures.',
  quotedText:
    'We started by looking at some other tools, and we first used [the cloud provider CNI]. But we found that Cilium, with its host-based policies and its ability to replace what we had out of the box, was really valuable.',
  withPerson: true,
  name: 'Anne Zepecki',
  role: 'Team Lead for the BQuant Enterprise Identity Management team',
  url: 'https://www.cncf.io/case-studies/bloomberg-2/',
  logo: BloombergLogo,
};

const bulletSection1 = {
  heading: 'Converging  Compliance, Security, and Modern Networking',
  text: 'Free your Security and Operations Teams from manual checks—Cilium ensures your traffic is encrypted to the highest standards, aligning SNIs with destination DNS names and vetting certificates for trusted origins. Go beyond traditional measures by embedding compliance and security directly into your DevOps flow. From Open Banking and GDPR to PCI-DSS and ATM security, Cilium keeps you ahead of industry regulations. Embrace Kubernetes confidently, infusing your application and network lifecycle with cutting-edge policies and eliminating potential technical debts. ',
};

const financialUsecases = [
  {
    icon: '',
    title: 'Transparent Encryption ',
    url: 'www.wwwdjdvnmdvdnmvdv.com',
    description:
      'Elevate compliance and lower risk with Cilium transparent encryption. With just one switch, no application changes, service meshes  or additional proxies',
  },
];

const financialResources = [
  {
    imageSrc: '',
    imageAlt: '',
    title: '',
    url: '',
    description: '',
  },
];

const FinancialServices = () => (
  <MainLayout theme="gray">
    <Hero {...heroContent}>
      <Testimonial {...bloombergTestimonial} />
    </Hero>
    <BulletSection {...bulletSection1} />
    <Stats />
    <FeaturedTalks />
    <ResourcesCard
      heading="Join Global Finance Leaders in the  Cloud Native Networking Revolution "
      resources={financialResources}
    />
    <IndustryUseCases
      heading="Cilium’s Solutions for Financial Services"
      usecases={financialUsecases}
    />
  </MainLayout>
);

export default FinancialServices;

export const Head = ({ location: { pathname } }) => <SEO slug={pathname} />;
