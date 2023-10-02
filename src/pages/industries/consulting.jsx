import BulletSection from 'components/pages/industries/bullet-section';
import Hero from 'components/pages/industries/hero';
import AdopterTestimonial from 'components/pages/industries/testimonial';
import MainLayout from 'layouts/main/main';

const heroContent = {
  heading: 'Consulting ',
  texts: [
    'Consultancy companies build and maintain software and infrastructure for diverse customers varying in size, industry, and technology stack. Customers typically have different requirements for fault tolerance, scalability, financial expenses, security, and more. As infrastructure stacks continue to evolve, consultancy firms need solutions that meet client expectations and also prepare their platforms for the future. ',
    'World-leading consulting companies are now turning to Cilium, leveraging its capabilities to deliver secure, high-performance, and observable cloud native solutions. By adopting Cilium, consultancies ensure streamlined operations across varied client environments and position themselves at the forefront of cloud native innovations, catering to clients ranging from startups, nationwide banks  and large enterprises.',
  ],
};

const efficodeTestimonial = {
  description:
    'Efficode is the leading DevOps consulting company in northern Europe, helping companies move to a cloud-native thinking in their operations and technology. ',
  withPerson: true,
  qoutedText:
    'Efficode is the leading DevOps consulting company in northern Europe, helping companies move to a cloud-native thinking in their operations and technology. ',
  name: '',
  role: '',
};

const ConsultingPage = () => (
  <MainLayout>
    <Hero {...heroContent}>
      <AdopterTestimonial {...efficodeTestimonial} />
    </Hero>
    <BulletSection />
  </MainLayout>
);

export default ConsultingPage;
