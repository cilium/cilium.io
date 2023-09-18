// /* eslint-disable react/prop-types */
// import BulletsCard from 'components/pages/industries/BulletsCard';
// import React from 'react';

// import GlobalLeaders from 'components/pages/industries/adopter-resources/adopter-resources';
// import CompanyLogos from 'components/pages/industries/adopters-logo/adopters-logo';
// import CompanyStats from 'components/pages/industries/adopters-stats/adopters-stats';
// import Community from 'components/pages/industries/Community';
// import VideoCard from 'components/pages/industries/featured-talks/featured-talks';
// import MainSection from 'components/pages/industries/hero/hero';
// import postfinanceImage from 'components/pages/industries/img/postfinance.png';
// import CiliumSolutions from 'components/pages/industries/industry-usecase/industry-usecase';
// import Container from 'components/shared/container';
// import SEO from 'components/shared/seo';
// import MainLayout from 'layouts/main';

// const items = [
//   {
//     iframe: (
//       <iframe
//         style={{ borderRadius: '12px', display: 'block', margin: 'auto', width: '100%' }}
//         width="384"
//         height="216"
//         src="https://www.youtube.com/embed/NHqdG-aZxOk?si=Ep-HeI8G8XvD36FU"
//         title="YouTube video player"
//         frameBorder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//         allowfullscreen
//       />
//     ),
//     title: 'Building a secure, maintainable Kubernetes PaaS with Cilium',
//     description: 'Bradley Whitfield, Platform Engineer, Capital One',
//   },
//   {
//     iframe: (
//       <iframe
//         style={{ borderRadius: '12px', display: 'block', margin: 'auto', width: '100%' }}
//         width="384"
//         height="216"
//         src="https://www.youtube.com/embed/NHqdG-aZxOk?si=Ep-HeI8G8XvD36FU"
//         title="YouTube video player"
//         frameBorder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//         allowfullscreen
//       />
//     ),
//     title: 'Building a secure, maintainable Kubernetes PaaS with Cilium',
//     description: 'Bradley Whitfield, Platform Engineer, Capital One',
//   },
//   {
//     iframe: (
//       <iframe
//         style={{ borderRadius: '12px', display: 'block', margin: 'auto', width: '100%' }}
//         width="384"
//         height="216"
//         src="https://www.youtube.com/embed/NHqdG-aZxOk?si=Ep-HeI8G8XvD36FU"
//         title="YouTube video player"
//         frameBorder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//         allowfullscreen
//       />
//     ),
//     title: 'Building a secure, maintainable Kubernetes PaaS with Cilium',
//     description: 'Bradley Whitfield, Platform Engineer, Capital One',
//   },
// ];

// const cardItems = [
//   {
//     imgSrc: postfinanceImage,
//     alt: 'post finance',
//     title: 'Post Finance picks Cilium for Cloud Native Networking',
//     text: 'Cilium helped the post finance team build a scalable Kubernetes platform which meets the demanding requirements to run mission-critical banking software in production.',
//     link: '',
//   },
//   {
//     imgSrc: postfinanceImage,
//     alt: 'post finance',
//     title: 'Post Finance picks Cilium for Cloud Native Networking',
//     text: 'Cilium helped the post finance team build a scalable Kubernetes platform which meets the demanding requirements to run mission-critical banking software in production.',
//     link: '',
//   },
//   {
//     imgSrc: postfinanceImage,
//     alt: 'post finance',
//     title: 'Post Finance picks Cilium for Cloud Native Networking',
//     text: 'Cilium helped the post finance team build a scalable Kubernetes platform which meets the demanding requirements to run mission-critical banking software in production.',
//     link: '',
//   },
// ];

// const FinancialServices = () => (
//   <MainLayout theme="gray">
//     <section>
//       <div className="bg-[#F6F7F8] pb-[147px]">
//         <Container>
//           <MainSection />
//         </Container>
//       </div>
//       <div className="lg:pb-28">
//         <Container>
//           <BulletsCard>
//             <span>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="45"
//                 height="51"
//                 viewBox="0 0 45 51"
//                 fill="none"
//               >
//                 <path
//                   d="M22.5 0L44.5836 12.75V38.25L22.5 51L0.416351 38.25V12.75L22.5 0Z"
//                   fill="#0073E5"
//                 />
//               </svg>
//             </span>
//             <div>
//               <h2 className="text-[36px] font-bold lg:pb-6">
//                 Converging Compliance, Security, and Modern Networking
//               </h2>
//               <p>
//                 Free your Security and Operations Teams from manual checks—Cilium ensures your
//                 traffic is encrypted to the highest standards, aligning SNIs with destination DNS
//                 names and vetting certificates for trusted origins. Go beyond traditional measures
//                 by embedding compliance and security directly into your DevOps flow. From Open
//                 Banking and GDPR to PCI-DSS and ATM security, Cilium keeps you ahead of industry
//                 regulations. Embrace Kubernetes confidently, infusing your application and network
//                 lifecycle with cutting-edge policies and eliminating potential technical debts.
//               </p>
//             </div>
//           </BulletsCard>
//           <CompanyStats />
//         </Container>
//       </div>
//       <div className="featured-talks bg-[#F6F7F8] py-12">
//         <Container>
//           <h3 className="text-center text-[36px] font-bold lg:mb-[64px]">Featured talks</h3>
//           <VideoCard items={items} />
//         </Container>
//       </div>
//       <div>
//         <Container>
//           <div className="py-24">
//             <CompanyLogos />
//           </div>
//           <div>
//             <h3 className="mb-10 text-center text-[36px] font-bold">
//               Join Global Finance Leaders in the Cloud Native Networking Revolution
//             </h3>
//             <GlobalLeaders cardItems={cardItems} />
//           </div>
//           <div className="py-24">
//             <h3 className=" text-center text-[36px] font-bold lg:my-20">
//               Cilium’s Solutions for Financial Services
//             </h3>
//             <CiliumSolutions />
//           </div>
//         </Container>
//       </div>
//       <div className="bg-[#F6F7F8] py-10 lg:py-28">
//         <Container>
//           <h3 className=" mb-12 text-center text-[36px] font-bold ">Community</h3>
//           <Community />
//         </Container>
//       </div>
//     </section>
//   </MainLayout>
// );

// export default FinancialServices;

// export const Head = ({ location: { pathname } }) => <SEO slug={pathname} />;
