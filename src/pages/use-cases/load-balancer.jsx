import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

// import ScalableKubernetesIcon from 'components/pages/home/highlights/images/scalable-kubernetes.inline.svg';
import JoinUsCard from 'components/pages/use-cases/cards';
import Link from 'components/shared/link/link';
import SezamLogo from 'icons/logo-seznam.inline.svg';
import YahooLogo from 'icons/logo-yahoo.inline.svg';
import DetectiveBeeImage from 'images/pages/usecase/detective-bee.png';
import MainLayout from 'layouts/main/main';

import ArrowIcon from '../../icons/arrow.inline.svg';

const ItemPage = () => {
  const customShadow = '0px 4px 4px rgba(0, 0, 0, 0.25)';
  return (
    <MainLayout>
      <section className="bg-[#F6F7F8]">
        <div className="pt-8 pb-16">
          <div className="container mx-auto w-10/12">
            <div>
              <span className=" my-3 inline-block rounded-[5px] bg-[#6b91c7]/30 py-1 px-12 font-bold text-[#6B91C7]">
                Networking
              </span>
              <h2 className="text-4xl font-bold">Layer 4 Load Balancer</h2>
              <small className="font-semibold text-[#8E98AC]">
                High Performance Load Balancing with Low Overhead
              </small>
            </div>
            <div>
              <div className="block items-center gap-8 md:flex">
                <div className="pb-4 md:basis-[55%] md:pb-0 lg:basis-2/4">
                  <h3 className="my-4 max-w-2xl text-xl font-bold md:my-8">
                    How can I implement efficient L4 load balancing with low overhead and cost?
                  </h3>
                  <p>
                    Configuring and managing load balancing into your cluster can be challenging due
                    to the complexity involved in setting up connectivity and synchronization
                    between the clusters and the outside world. Traditional hardware load balancers
                    can be very costly while software load balancers may not provide the performance
                    you need. External-to-Pod (North-South) LB also typically requires additional
                    tooling, adding more complexity, cost, and overhead.
                  </p>
                </div>
                <div className="relative lg:basis-2/4">
                  <img
                    className="hidden max-h-[300px] md:block lg:absolute lg:top-2/4 lg:left-2/4 lg:-translate-y-1/2 lg:-translate-x-1/2 lg:overflow-hidden"
                    src={DetectiveBeeImage}
                    alt="jedi bee"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-white py-16">
          <div className="container mx-auto w-10/12">
            <div className="block items-center gap-8 md:flex">
              <div className="pb-4 md:basis-[55%] md:pb-0 lg:basis-2/4">
                <h3 className="mb-4 text-xl font-bold ">
                  XDP and eBPF powered scalable Load Balancing and Ingress
                </h3>
                <p>
                  Cilium can attract traffic with BGP and accelerate it leveraging XDP and eBPF.
                  Together these technologies provide a very robust and secure implementation of
                  Load Balancing. Cilium and eBPF operate at the kernel layer. With this level of
                  context intelligent decisions can be made about how to connect different workloads
                  whether on the same node or between clusters. With eBPF and XDP Cilium enables
                  significant improvements in latency and performance. Cilium Standalone load
                  balancer offers a high-performance LB, providing huge throughput gains at a
                  reduced CPU overhead.
                </p>
              </div>
              <div className="lg:basis-2/4">
                <iframe
                  className="h-[300px] w-full"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/OIyPm6K4ooY"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
        <div className="py-16">
          <div className="container mx-auto w-10/12">
            <div className="block items-center gap-8 md:flex">
              <div className="pb-4 md:basis-[55%] md:pb-0 lg:basis-2/4">
                <h3 className="mb-4 text-xl font-bold ">
                  Cilium Standalone Layer 4 Load Balancer XDP
                </h3>
                <p>
                  Cilium's high performance, robust load balancing implementation is tuned for the
                  scale and churn of cloud native environments. You can replace expensive legacy
                  boxes in your network with Cilium as a standalone load balancer. This unlocks the
                  potential of DSR and Maglev for handling north/south traffic in on-premises
                  environments without requiring Kubernetes to manage the network border.
                </p>
              </div>
              <div className="lg:basis-2/4">
                <iframe
                  className="h-[300px] w-full"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/xwjZF3alO7g"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 mb-12">
          <div className="container mx-auto w-10/12">
            <h3 className="mb-8 text-center text-xl font-bold">
              Who’s using Cilium for Layer 4 Load Balancing?
            </h3>
            <div className="flex flex-col gap-8 md:gap-12">
              <div
                className="block gap-4 rounded-[10px] bg-white  px-6 py-8 sm:items-center  md:flex md:px-12"
                style={{ boxShadow: `${customShadow}` }}
              >
                <div className="block basis-2/4 items-center justify-around gap-8 md:flex">
                  <div className="flex flex-col gap-6">
                    <div className="mx-auto">
                      <SezamLogo />
                    </div>
                    <a
                      href="https://cilium.io/blog/2022/04/12/cilium-standalone-L4LB-XDP/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mx-auto  flex items-center gap-3  font-semibold text-[#3B82F6]"
                    >
                      Read The Blog Post
                      <span>
                        <ArrowIcon />
                      </span>
                    </a>
                  </div>
                  <div className="my-8 h-[1px] w-full bg-[#6B91C7] md:h-[140px] md:w-[1px]" />
                </div>

                <div className="w-full  text-center">
                  <p className="mb-5 font-bold">
                    Efficiently handling production traffic with Cilium Standalone Layer 4 Load
                    Balancer XDP
                  </p>
                  <p>
                    Seznam previously used a multiple tier setup - ECMP routing as the first tier +
                    IPVS as the second tier (L4 load balancer (L4LB)) + Envoy proxy as the third
                    tier (L7 load balancer). They experienced increased traffic during COVID and
                    needed a way to utilize hardware efficiently. Using L4LB XDP consumed only half
                    of a single CPU compared to 2x18 CPUs when IPVS was handling the traffic. By
                    switching to L4LB XDP at the driver layer, Seznam was able to save 36 CPUs while
                    doubling throughput.
                  </p>
                </div>
              </div>
              <div
                className="block gap-4  rounded-[10px] bg-white  px-6 py-8 sm:items-center  md:flex md:px-12"
                style={{ boxShadow: `${customShadow}` }}
              >
                <div className="block basis-2/4 items-center justify-around gap-8 md:flex">
                  <div className="flex flex-col gap-6 ">
                    <div className="mx-auto">
                      <YahooLogo />
                    </div>
                    <a
                      href="https://www.youtube.com/watch?v=-C86fBMcp5Q"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mx-auto  flex items-center gap-3  font-semibold text-[#3B82F6]"
                    >
                      Watch the Talk
                      <span>
                        <ArrowIcon />
                      </span>
                    </a>
                  </div>
                  <div className="my-8 h-[1px] w-full bg-[#6B91C7] md:h-[140px] md:w-[1px]" />
                </div>

                <div className="w-full  text-center">
                  <p className="mb-5 font-bold">
                    Software L4 Load Balancing for Kubernetes Services at Yahoo
                  </p>
                  <p>
                    <q>
                      Yahoo needed a way to solve LB APIs not being optimized for dynamic updates,
                      the absence of autoscaling, and a severe performance degradation with large
                      number of cluster services. Switching to Cilium L4 LB powered by XDP provided
                      Yahoo with performance on par with hardware LBs, ability to hook into
                      Kubernetes to dynamically configure backends, support for direct return mode,
                      high availability, and resiliency through Maglev consistent hashing.
                    </q>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-0 pb-12 md:pb-24 md:pt-8">
          <JoinUsCard />
        </div>
      </section>
    </MainLayout>
  );
};

export default ItemPage;
