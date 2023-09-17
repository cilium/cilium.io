import React from 'react';

import Container from 'components/shared/container/container';

import bloombergImage from './img/bloomberg.png';

const Hero = () => {
  const companyDetails = [
    {
      imgSrc: bloombergImage,
      intro:
        'Bloomberg successfully enhanced the security and access control of its BQuant Enterprise workloads through the implementation of robust network security measures.',
      details:
        'We started by looking at some other tools, and we first used [the cloud provider CNI]. But we found that Cilium, with its host-based policies and its ability to replace what we had out of the box, was really valuable.',
      profileName: 'Anne Zepecki',
      role: 'Team Lead for the BQuant Enterprise Identity Management team',
    },
  ];
  return (
    <Container className="bg-[#F6F7F8] pb-[147px]">
      <div className="items-center justify-between lg:flex">
        <div>
          <h2 className="py-10 text-3xl font-bold lg:pb-[86px] lg:pt-[95px] lg:text-4xl">
            Financial Services
          </h2>
          <div className="items-start justify-start gap-[103px] lg:flex">
            <div className="flex flex-col gap-6 lg:flex lg:w-[610px] lg:flex-col lg:gap-6">
              <p>
                Regulatory oversight is a hallmark of the financial industry. Cilium’s detailed
                traffic monitoring and logging mechanisms assist institutions in maintaining clear
                audit trails, ensuring regulatory compliance are met and forensic investigations are
                facilitated.
              </p>
              <p>
                The world of fintech revolves around APIs – from mobile banking apps to complex
                trading platforms. Cilium's API-aware network security ensures that these critical
                gateways can be fortified, understanding and guarding against any malicious patterns
                in API calls.
              </p>
              <p>
                With Cilium, financial services can achieve improved observability, maintain
                security controls, and weave in security governance for Kubernetes environments in
                On-prem/Hybrid/Multi-Cloud environments including
                AKS/EKS/GCP/OpenShift/Rancher/SUSE, etc.
              </p>
            </div>

            <figure>
              {/* Added a negative margin because of extra padding within default image */}
              <img
                src="https://s3-alpha-sig.figma.com/img/7eb9/f4ea/02ffd5a315d93a10d4c4433634053841?Expires=1694995200&Signature=CZKaArYVDI8~bbgFY2dSxacGD2~dbIFYe-ZTTVVQ4-U3SO7cUmGYblAzFi2cCLoMEe~dLylXOAnxY-fudHNXZzY0tUQ1qg3wKSXZUVlQ16johaNC52xY0~3yGoZtIAEFCfuz3LTDHRcWLzWpd0u84jOqRB4umglhGPrMBbH77TyUhTD~~RiMbghfRJvfDea0axOdekxoHkDBKHy3hpsyJhrfLHmurN7Y5V4wbC~E-mW0JK8rJ0eFnOEfbJMYOSOqh6Q3HLB8f2AAG1pJJCW1lNkrMDaI4byYB1~lRvXwdKSV4997MtoxE8cJQoqcSg7yT0RVu9pr4hf2kF6XfcnNOA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
                className="h-[470px] w-[470px] lg:-mt-16"
              />
            </figure>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;

{
  /* <CompanyTestimonial companyDetails={companyDetails} /> */
}
