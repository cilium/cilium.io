import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import bloomberg from './images/bloomberg.svg';
import datadog from './images/datadog.svg';
import digitalOcean from './images/digital-ocean.svg';
import form3 from './images/form3.svg';
import postFinance from './images/post-finance.svg';
import tripcom from './images/trip-com.svg';
import wso2 from './images/wso2.svg';
import Slider from './slider';

const ITEMS = [
  {
    icon: { src: digitalOcean, width: 219, alt: 'Digital Ocean' },
    text: 'Cilium enabled us to acquire more sophisticated customers.',
    link: 'https://www.cncf.io/case-studies/digitalocean/',
  },
  {
    icon: { src: tripcom, width: 158, alt: 'Trip.com' },
    text: 'Cilium is just stable. We have been running it in production for almost 5 years and we haven’t had any major incidents in the dataplane which is very important for our applications.',
    link: 'https://www.cncf.io/case-studies/trip-com-group/',
  },
  {
    icon: { src: wso2, width: 107, alt: 'WSO2' },
    text: 'To us, Cilium is a single solution that covers a large number of our platform feature requirements. Before, we couldn’t find a single solution to all of our challenges but when we used Cilium, it was a perfect match.',
    link: 'https://www.cncf.io/case-studies/wso2/',
  },
  {
    icon: { src: postFinance, width: 142, alt: 'Post Finance' },
    text: 'With Cilium, our pods start up much faster, scale faster, and more. We’ve rarely had issues with Cilium, or had it be the cause of an incident which is a good thing because if you don’t notice something then it is not in the way and working as intended.',
    link: 'https://www.cncf.io/case-studies/postfinance/',
  },
  {
    icon: { src: form3, width: 133, alt: 'Form3' },
    text: 'The value Cilium added to our FPS platform was massively simplifying our problem. If Cilium did not exist, it would have been much tougher to solve that requirement of being able to switch off one data center and have everything carry on running.',
    link: 'https://www.cncf.io/case-studies/form3/ ',
  },
  {
    icon: { src: bloomberg, width: 181, alt: 'Bloomberg' },
    text: 'We introduced Cilium initially as our CNI, and we’ve been able to build a lot of really valuable functionality on top of it for our data sandbox and our sandbox storage functionality.',
    link: 'https://www.cncf.io/case-studies/bloomberg-2/',
  },
  {
    icon: { src: datadog, width: 163, alt: 'Datadog' },
    text: 'eBPF and Cilium helped us to push the boundaries both within operations and also with product development. To do things safer, faster, and more easily than what we could have with traditional techniques.',
    link: 'https://www.cncf.io/case-studies/datadog/',
  },
];

const InProduction = () => (
  <section className="in-production bg-gray-4 py-10 mt-10 md:mt-20 md:py-20 lg:mt-28 lg:pt-32 lg:pb-[136px]">
    <Container className="flex flex-col 2xl:max-w-[1248px] md:max-w-[calc(100%-4.5rem)] sm:max-w-[calc(100%-10rem)] max-w-full xl:max-w-[calc(100%-8rem)] !px-0">
      <Heading className="mb-2 self-center text-center px-4 md:mb-6 lg:mb-12" tag="h2">
        Cilium in Production
      </Heading>
      <Slider>
        {ITEMS.map(({ icon, text, link }, index) => (
          <div
            className="!flex bg-white h-full shadow-card flex-col rounded-xl p-6 xl:p-8 xl:pb-7"
            key={index}
          >
            <div>
              <img src={icon.src} alt={icon.alt} height={40} width={icon.width} />
              <p className="mt-7 mb-5">“{text}”</p>
            </div>
            <div className="mt-auto flex border-t border-gray-3 pt-6 leading-none">
              <Link
                className="relative"
                key={index}
                type="text"
                theme="primary"
                to={link}
                rel="noopener noreferrer"
                target="_blank"
              >
                Read case study
              </Link>
            </div>
          </div>
        ))}
      </Slider>
      <Button
        className="w-full xs:w-[238px] mx-auto max-w-[calc(100%-40px)] !rounded-md mt-12 sm:mt-5"
        theme="primary-1"
        to="#use-cases"
      >
        See All Case Studies
      </Button>
    </Container>
  </section>
);

export default InProduction;
