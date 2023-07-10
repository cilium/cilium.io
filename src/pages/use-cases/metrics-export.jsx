import React from 'react';

import JoinUsCard from 'components/pages/use-cases/cards';
import UseCaseCard from 'components/pages/use-cases/cards/use-case-card';
import ImageFeatureSection from 'components/pages/use-cases/image-feature-section';
import IntroSection from 'components/pages/use-cases/intro-section';
import PageTitle from 'components/pages/use-cases/page-title';
import VideoFeatureSection from 'components/pages/use-cases/video-feature-section';
import GrafanaLogo from 'icons/logo-grafana.inline.svg';
import RafayLogo from 'icons/logo-rafay.inline.svg';
import SproutfiLogo from 'icons/logo-sproutfi.inline.svg';
import ExcelBee from 'images/pages/usecase/excel-bee.png';
import MetricsImage1 from 'images/pages/usecase/metrics-1.png';
import MainLayout from 'layouts/main/main';

const introContent = {
  title: 'Metrics & Tracing Export',
  category: 'Observability',
  tagline: 'Valuable insights for troubleshooting, optimization, and performance monitoring',
  subHeading:
    'Monitor and analyze the performance and behavior of your Cilium-managed Kubernetes environment',
  description:
    'Metrics alone may lack context for effective issue diagnosis. Configuring metrics exporters and integrating them with monitoring systems can be error-prone and manual. Inadequate, inconsistent, or incorrect metrics can  be misleading, resulting in incorrect conclusions about the application state. Troubleshooting often requires correlating metrics with traces for a comprehensive system understanding.  ',
  imageSrc: ExcelBee,
  imageAlt: 'Kubernetes Bee',
};

const sectionContent1 = {
  title: 'Metrics and Tracing With Cilium ',
  description:
    "Cilium's Metrics and Tracing export feature provides a seamless and integrated solution empowering users to monitor, analyze, and optimize their Kubernetes environments with ease. By leveraging the power of Prometheus metrics, combined with Hubble's network behavior insights, Cilium enables users to gain deep visibility into their applications and network while simplifying the setup and configuration process. Cilium also integrates with various tracing systems, such as Jaeger, Zipkin, and OpenTelemetry, to provide distributed tracing capabilities. Cilium is optimized to handle high data volumes without compromising on performance.",
  videoSrc: 'https://www.youtube.com/embed/_xBF277SF8o',
};

const sectionContent2 = {
  title: 'Comprehensive and Rich Set of Metrics',
  description:
    'Cilium captures a plethora of metrics, including latency, request rates, and error rates for your applications. These metrics are exported in a standardized Prometheus format, which can be easily integrated with your existing monitoring and visualization tools, enabling you to track your network performance in real-time.',
  imageSrc: MetricsImage1,
  imageAlt: 'cilium metrics and tracing with grafana illustration',
  whiteBackground: true,
};

const sectionContent3 = {
  title: 'Distributed Tracing',
  description:
    'Cilium supports popular distributed tracing frameworks like Jaeger and Zipkin. With this, you can visualize request flow through your services, identify bottlenecks and optimize for efficiency. Cilium’s tracing provides a granular view of service interactions, bringing clarity to complex distributed systems.',
  videoSrc: 'https://www.youtube.com/embed/l3zY7wHUkBA',
};

const testimonials = [
  {
    logo: <GrafanaLogo />,
    title: 'eBPF-powered observability for Kubernetes and cloud native infrastructure',
    CTAtext: 'Read The Blog Post',
    url: 'https://grafana.com/blog/2022/10/24/grafana-and-cilium-deep-ebpf-powered-observability-for-kubernetes-and-cloud-native-infrastructure/',
    description:
      'Cilium generates a rich stream of service-identity-aware connectivity metrics and events, which makes backend observability like the Grafana LGTM stack or Grafana Cloud the natural complement to Cilium’s robust connectivity observability capabilities. ',
  },
  {
    title: 'Cilium-powered Enterprise Kubernetes Management for Platform Teams',
    logo: <RafayLogo />,
    description:
      'Rafay Leverages Cilium for Visibility via Prometheus metrics and Hubble to deliver the automation developers and operations want with the right level of standardization, control, and governance platform teams need. ',
  },
];

const MetricsExportPage = () => {
  const pageTitle = introContent.title;
  return (
    <>
      <PageTitle title={pageTitle} />
      <MainLayout>
        <section className="bg-[#F6F7F8]">
          <IntroSection {...introContent} />
          <VideoFeatureSection {...sectionContent1} />
          <ImageFeatureSection {...sectionContent2} />
          <VideoFeatureSection {...sectionContent3} />
          <UseCaseCard
            heading="Who’s using Cilium for Metrics and Tracing Export?"
            testimonials={testimonials}
          />
          <JoinUsCard />
        </section>
      </MainLayout>
    </>
  );
};

export default MetricsExportPage;
