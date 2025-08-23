import React from 'react';

import BulletSection from 'components/pages/industries/bullet-section';
import Hero from 'components/pages/industries/hero';
import IndustryUseCases from 'components/pages/industries/industry-usecase';
import Testimonial from 'components/pages/industries/testimonial';
import UseCaseCard from 'components/pages/use-cases/use-case-card';
import Community from 'components/shared/community';
import Heading from 'components/shared/heading';
import SEO from 'components/shared/seo';
import AlibabaCloudLogo from 'icons/logo-alibaba-cloud.inline.svg';
import AzureLogo from 'icons/logo-azure.inline.svg';
import DBSchenkerLogo from 'icons/logo-dbschenker.inline.svg';
import IlionxLogo from 'icons/logo-ilionx.inline.svg';
import QingCloudLogo from 'icons/logo-qingcloud.inline.svg';
import AutomationImage1 from 'images/pages/outcomes/network-automation/automation-1.png';
import AutomationImage2 from 'images/pages/outcomes/network-automation/automation-2.png';
import AutomationImage3 from 'images/pages/outcomes/network-automation/automation-3.png';
import AutomationImage4 from 'images/pages/outcomes/network-automation/automation-4.png';
import NetworkBee from 'images/pages/outcomes/network-automation/network-bee.png';
import MainLayout from 'layouts/main/main';

const heroContent = {
  heading: 'Network Automation',
  tagline: 'Automate and simplify Kubernetes networking at scale',
  texts: [
    'Manual network configuration can’t keep up with the speed of cloud native environments. In Kubernetes, where workloads are dynamic and infrastructure is distributed, traditional approaches to networking create bottlenecks, inconsistencies, and operational risk.',
    'Cilium brings automation to the core of Kubernetes networking. Cilium makes it possible to configure, secure, and observe network behavior automatically through identity-aware policies that adapt to workload changes, dynamic service discovery, an eBPF-powered datapath, and seamless integration with CI/CD and GitOps workflows.',
  ],
  imageSrc: NetworkBee,
  imageAlt: 'network bee',
};

const IlionxTestimonial = {
  logo: 'ilionx',
  description:
    'Ilionx is an IT services company that provides consulting and solutions in cloud, data, security, and digital transformation',
  quotedText: [
    'If I use Cilium network policies and the API from Kubernetes I can automate everything easier. I can educate the development teams on how to use their own network policies and how to make a fence around their own application making it almost completely self-service.',
    'Everything that we can do with CIlium network policies makes automation better. It’s really easy. The self-service makes it a lot more sellable and usable to our development teams.',
  ],
  withPerson: true,
  name: 'Remy Simons',
  role: 'Managing Consultant – Cloud/Platform Engineer, Ilionx',
  url: 'https://www.cncf.io/case-studies/ilionx',
  CTAtext: 'Read The Case Study',
};

const RabobankTestimonial = {
  logo: 'rabobank',
  description:
    'Rabobank is a global cooperative bank headquartered in the Netherlands, specializing in food and agriculture financing, retail banking, and sustainable financial services.',
  quotedText: [
    'We had to migrate 400 teams and it was a lot of work. That’s also why we did a lot of automation, to make it easy for the users themselves. If you give teams the power, they already have the best knowledge of what they need to do. With Cilium now in place, almost no maintenance needs to be done by our team, besides upgrading Cilium once in a while.',
  ],
  withPerson: true,
  name: 'Frank Potter',
  role: 'Devops Engineer, Rabobank',
  url: 'https://www.cncf.io/case-studies/rabobank/',
  CTAtext: 'Read The Case Study',
};

const GDataTestimonial = {
  logo: 'gdata',
  description:
    'G DATA CyberDefense is a cybersecurity company specializing in antivirus software, threat detection, and IT security solutions.',
  quotedText: [
    'In our platform, we have a diverse application set. Every team can choose to work in the programming language of their choice – we have Java, C#, Python, and Go. With Kubernetes and Cilium, we can streamline the process so that not everyone has to manage security policies.',
    'Previously, we had to contact our IT department and submit a ticket for them to manually make changes to network policy. Now developers can self-service, which speeds up the development process for the application teams and also increases our security on the backend.',
  ],
  withPerson: true,
  name: 'Jan Jansen',
  role: 'Platform Engineer, G DATA CyberDefense',
  url: 'https://www.cncf.io/case-studies/g-data-cyberdefense/',
  CTAtext: 'Read The Case Study',
};

const sectionContent1 = {
  heading: 'Make your networking configuration as dynamic as your workloads',
  paragraphs: [
    'As workloads in cloud native environments scale, shift, and redeploy across clusters and clouds, manual network configuration quickly becomes unsustainable. Engineers are left to manage rigid IP rules, duplicate policies across environments, and react to changes rather than design systems that adapt automatically.',
    'Cilium addresses this by making the network programmable and declarative. It allows teams to specify intent once, using workload identity and Kubernetes-native components, and then trust that connectivity, security, and observability will respond in real time as the environment changes. This means less time spent developing and debugging YAML, fewer outages due to misconfigured rules, and increased confidence when deploying infrastructure or adding new services.',
    'By removing manual steps from the networking stack, Cilium helps platform and security teams move faster, reduce risk, and operate more reliably in even the most dynamic environments.',
  ],
  imageSrc: AutomationImage1,
  imageAlt: 'cilium dashboard and semantic rules',
  imageRight: true,
};

const sectionContent2 = {
  heading: 'Enforcing identity-driven policies instead of IP-based rules',
  paragraphs: [
    'As workloads scale, restart, or move across nodes and clusters, IP addresses change constantly, creating configuration gaps, or a need for continual manual updates.',
    'Cilium solves this by applying security policies tied to Kubernetes-native identities like service accounts, pod labels, and namespaces. These identities remain consistent even as workloads shift, so policies follow services automatically without requiring engineers to rewrite or reapply static rules. This keeps network behavior predictable, secure, and in sync with your infrastructure design, with little to no manual intervention.',
  ],
  imageSrc: AutomationImage2,
  imageWidth: 624,
  imageHeight: 431,
  imageAlt: 'identities with cilium',
  imageRight: true,
};

const sectionContent3 = {
  heading: 'Dynamic connectivity without manual updates',
  paragraphs: [
    'Services in Kubernetes are always changing, either scaling up, down, or shifting across nodes. Manually updating routing or access rules to stay up-to-date is inefficient and error-prone.',
    'Cilium automates this by integrating deeply with Kubernetes. As services come and go, Cilium updates routing and policies in real time, ensuring that communication paths stay correct and secure without any effort.',
  ],
  imageSrc: AutomationImage3,
  imageWidth: 624,
  imageHeight: 399,
  imageAlt: ' illustration',
  imageRight: false,
};

const sectionContent4 = {
  heading: 'Consistent policy across clusters and clouds',
  paragraphs: [
    'Cilium’s Cluster Mesh and cluster-wide policies make it possible to apply security rules consistently across namespaces, regions, or even different cloud providers. This unified approach removes the need to duplicate network configurations for each environment, reduces operational overhead, and minimizes the risk of inconsistencies, ensuring reliable protection no matter where workloads run.',
  ],
  videoSrc: 'https://www.youtube.com/embed/yikVhGM2ye8',
  imageRight: true,
};

const sectionContent5 = {
  heading: 'eBPF programs and secures the network in the kernel',
  paragraphs: [
    'Rather than relying on centralized firewalls or sidecar proxies, Cilium enforces security policies directly at the source of traffic using eBPF inside the Linux kernel. This distributed model applies identity-aware policies consistently across all nodes, clusters, and environments, without introducing bottlenecks.',
    'With visibility and control from Layer 3 to Layer 7, Cilium prevents unauthorized lateral movement and delivers scalable, low-overhead [Zero Trust Networking](https://cilium.io/outcomes/zero-trust/) enforcement across cloud native infrastructure.',
  ],
  imageSrc: AutomationImage4,
  imageWidth: 624,
  imageHeight: 399,
  imageAlt: ' illustration',
  imageRight: false,
};

const sectionContent6 = {
  heading: 'Automated networking built for GitOps and CI/CD',
  paragraphs: [
    'Modern infrastructure is managed as code, and your networking should be too. With Cilium, network policies are declarative, version-controlled, and Kubernetes-native, making them easy to integrate into the same pipelines and workflows you use for deploying applications.',
    'You can define policies in Git, review them through pull requests, and apply them automatically through CI/CD or GitOps tools. This makes your network configuration more consistent, easier to audit, and easier to automate, while ensuring that your infrastructure stays secure and in sync across all environments.',
  ],
  videoSrc: 'https://www.youtube.com/embed/Ab9sctO-8Uk',
  imageRight: true,
};

const testimonials = [
  {
    logo: AlibabaCloudLogo,
    title: 'Solving latency and scaling network performance',
    CTAs: [
      {
        CTAtext: 'Read The Case Study',
        url: 'https://www.cncf.io/case-studies/alibaba/',
      },
    ],
    description:
      'Alibaba Cloud integrated Cilium into its ACK infrastructure to address critical service latency and networking limitations. By combining Cilium with Terway, they eliminated the need for a separate CNI and gained advanced network policy capabilities, resulting in significantly faster performance, simplified policy enforcement, and a more scalable, automated network stack.',
  },
  {
    title: 'Delivering high-performance cloud networking',
    logo: AzureLogo,
    CTAs: [
      {
        CTAtext: 'Read The Case Study',
        url: 'https://azure.microsoft.com/en-us/blog/azure-cni-with-cilium-most-scalable-and-performant-container-networking-in-the-cloud/',
      },
    ],
    description:
      'Microsoft Azure adopted Cilium into Azure CNI to provide the most scalable and performant container networking solution in the cloud. Cilium’s eBPF-powered dataplane enables dynamic, policy-driven networking that adapts automatically as workloads grow across clusters.',
  },
  {
    logo: QingCloudLogo,
    title: 'Automating scalable networking across KubeSphere',

    description:
      'QingCloud integrated Cilium into its KubeSphere platform and KubeKey deployment tool to provide high-performance eBPF-powered networking to its customers. By enabling seamless Cilium deployment, QingCloud boosted scalability, attracted more tech-savvy customers, and improved the developer experience throughout its public cloud platform.',
    CTAs: [
      {
        CTAtext: 'Read The Case Study',
        url: 'https://www.cncf.io/case-studies/qingcloud/',
      },
    ],
  },
  {
    logo: DBSchenkerLogo,
    title: 'Building a scalable, future-ready networking platform',

    description:
      'DB Schenker adopted Cilium for its eBPF-powered networking, enabling a smooth migration with chaining mode and removing the need for kube-proxy and a service mesh. This reduced latency, improved performance, and simplified operations. With Hubble for observability, the team gained real-time visibility, better security, and faster troubleshooting, making Cilium a core part of their scalable and automated infrastructure strategy.',
    CTAs: [
      {
        CTAtext: 'Read The Case Study',
        url: 'https://www.cncf.io/case-studies/db-schenker/',
      },
    ],
  },
  {
    logo: IlionxLogo,
    title: 'Automating Kubernetes networking and security at scale',

    description:
      'Ilionx chose Cilium as their networking and security foundation to power automated traffic control and policy enforcement across their Kubernetes platform, enabling secure multi-tenancy and replacing previously manual, error-prone configurations. By integrating Cilium, Ilionx streamlined network operations, improved observability, and gave development teams a self-service experience.',
    CTAs: [
      {
        CTAtext: 'Read The Case Study',
        url: 'https://www.cncf.io/case-studies/ilionx/',
      },
    ],
  },
];

const AutomationSolutions = [
  {
    icon: 'kubeProxy',
    title: 'Kube-proxy Replacement',
    description:
      'Cilium replaces kube-proxy with an eBPF-powered dataplane, removing the need for iptables-based rules and manual configurations. This makes service routing faster, more reliable, and easier to scale, even in large or rapidly changing clusters.',
    buttonLink: '/use-cases/kube-proxy',
  },

  {
    icon: 'networkPolicy',
    title: 'Network Policy',
    description:
      'Cilium defines network intent using identity-based Kubernetes-native policies, not IP addresses. Policies update automatically as workloads scale, restart, or move across clusters based on pod labels, namespaces, or service accounts. This ensures consistent and automated IP-based rule enforcement across dynamic contexts by removing the need for manual management.',
    buttonLink: '/use-cases/network-policy',
  },
];

const NetworkAutomationPage = () => (
  <MainLayout theme="gray">
    <Hero {...heroContent} imageStyle="h-auto lg:w-[300px] mx-auto" />
    <Testimonial {...GDataTestimonial} className="my-10 md:my-20 lg:my-32" />
    <BulletSection {...sectionContent1} className="mt-10 md:mt-20 lg:mt-32" />
    <Testimonial {...IlionxTestimonial} className="mt-10 md:mt-20 lg:mt-32" />
    <Heading tag="h2" className="mt-10 md:mt-20 lg:mt-32 text-center dark:text-white text-black">
      How Cilium Delivers Network Automation
    </Heading>
    <BulletSection {...sectionContent2} className="mt-10 md:mt-20 lg:mt-32" />
    <BulletSection {...sectionContent3} className="mt-10 md:mt-20 lg:mt-32" />
    <BulletSection {...sectionContent4} className="mt-10 md:mt-20 lg:mt-32" />
    <BulletSection {...sectionContent5} className="mt-10 md:mt-20 lg:mt-32" />
    <BulletSection {...sectionContent6} className="mt-10 md:mt-20 lg:mt-32" />
    <Testimonial {...RabobankTestimonial} className="mt-10 md:mt-20 lg:mt-32" />
    <UseCaseCard heading="Who’s using Cilium for Network Automation" testimonials={testimonials} />
    <IndustryUseCases
      heading="Cilium’s Solutions for Network Automation"
      usecases={AutomationSolutions}
    />
    <Community className="mt-10 md:mt-20 lg:mt-32" theme="gray" isTitleCentered />
  </MainLayout>
);

export default NetworkAutomationPage;

// eslint-disable-next-line react/prop-types
export const Head = ({ location: { pathname } }) => {
  const pageMetadata = {
    title: heroContent.heading,
    description: 'How Cilium delivers Network Automation',
    slug: pathname,
  };
  return <SEO data={pageMetadata} />;
};
