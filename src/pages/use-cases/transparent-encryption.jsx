import React from 'react';

import JoinUsCard from 'components/pages/use-cases/cards';
import UseCaseCard from 'components/pages/use-cases/cards/use-case-card';
import IntroSection from 'components/pages/use-cases/intro-section';
import PageTitle from 'components/pages/use-cases/page-title';
import VideoFeatureSection from 'components/pages/use-cases/video-feature-section';
import AscendLogo from 'icons/logo-ascend.inline.svg';
import CosmonicLogo from 'icons/logo-cosmonic.inline.svg';
import JeediBee from 'images/pages/usecase/jedi-bee.png';
import MainLayout from 'layouts/main/main';

const introContent = {
  title: 'Transparent Encryption',
  category: 'Security',
  tagline: 'Encryption without operational headache ',
  subHeading: 'How can I encrypt traffic on my clusters while minimizing operational overhead?',
  description:
    'Many compliance frameworks require encryption, but Kubernetes lacks native pod-to-pod encryption. Two common solutions to this problem are embedding encryption within the application or using a service mesh. Embedding encryption within the app is complex and requires application and security expertise. On the other hand, most service mesh implementations are very complex and challenging to manage and operate.  ',
  imageSrc: JeediBee,
  imageAlt: 'Jeedi Bee',
};

const sectionContent1 = {
  title: 'What does Cilium provides?',
  description:
    'Cilium provides a straightforward solution for enabling the encryption of all node-to-node traffic with just one switch, no application changes or additional proxies. Cilium features automatic key rotation with overlapping keys, efficient datapath encryption through in-kernel IPsec or WireGuard, and can encrypt all traffic, including non-standard traffic like UDP. Simply configuring all nodes across all clusters with a common key and all communication between nodes is automatically encrypted.  ',
  videoSrc: 'https://www.youtube.com/embed/RAmJXsMeACU',
  whiteBackground: true,
};

const testimonials = [
  {
    logo: <AscendLogo />,
    title: 'Achieving HIPPA compliance with Cilium’s transparent encryption',
    CTAtext: 'Read The Case Study',
    url: 'https://www.cncf.io/case-studies/ascend/',
    description:
      'Ascend switched to using Cilium as their solution for data encryption and has since experienced significant improvements. With Cilium, Ascend was able to simplify the encryption process, eliminating the need for and mitiagting issues with certificate-init-containers and application based encryption. This transition has allowed Ascend to achieve seamless data encryption and maintain HIPAA compliance with ease.',
  },
  {
    logo: <CosmonicLogo />,
    title: 'Seamless Network Security and Privacy with Cilium',
    CTAtext: 'Read The Blog Post',
    url: 'https://cilium.io/blog/2023/01/18/cosmonic-user-story/',
    description:
      'The Cosmonic team uses Cilium for transparent encryption. In the words of Dan Norris, the infrastucture team for Cosmonic. “With WireGuard, all the internal traffic is encrypted. I don’t have to worry about it and I don’t have to manage a PKI infrastructure. That was the killer feature. I don’t have to worry about a service mesh. I’ve run service meshes before. It’s great but that’s yet another system to manage. [With Cilium], you can just toggle that flag and you’re done.”',
  },
];

const TransparentEncryptionPage = () => {
  const pageTitle = introContent.title;
  return (
    <>
      <PageTitle title={pageTitle} />
      <MainLayout>
        <section className="bg-[#F6F7F8]">
          <IntroSection {...introContent} />
          <VideoFeatureSection {...sectionContent1} />
          <UseCaseCard
            heading="Who’s using Cilium’s Transparent Encryption?"
            testimonials={testimonials}
          />
          <JoinUsCard />
        </section>
      </MainLayout>
    </>
  );
};

export default TransparentEncryptionPage;
