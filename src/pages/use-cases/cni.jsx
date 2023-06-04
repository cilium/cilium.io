import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

// import ScalableKubernetesIcon from 'components/pages/home/highlights/images/scalable-kubernetes.inline.svg';
import JoinUsCard from 'components/pages/use-cases/cards';
import Link from 'components/shared/link/link';
import AscendLogo from 'icons/logo-ascend.inline.svg';
import CosmonicLogo from 'icons/logo-cosmonic.inline.svg';
import JediBeeImage from 'images/pages/usecase/jedi-bee.png';
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
              <h2 className="text-4xl font-bold">High Performance Cloud Native Networking (CNI)</h2>
              <small className="font-semibold text-[#8E98AC]">
                Enhance the speed and efficiency of your Kubernetes and cloud native networks
              </small>
            </div>
            <div>
              <div className="block items-center gap-8 md:flex">
                <div className="pb-4 md:basis-[55%] md:pb-0 lg:basis-2/4">
                  <h3 className="my-4 text-xl font-bold md:my-8">
                    How can I have scalable and consistent networking across clouds?
                  </h3>
                  <p>
                    There are dozens of CNIs available for Kubernetes but, their features, scale,
                    and performance vary greatly. Many of them rely on a legacy technology
                    (iptables) that cannot handle the scale and churn of Kubernetes environments
                    leading to increased latency and reduced throughput. Most CNIs also only offer
                    support for L3/L4 Kubernetes network policy but little beyond. Many Cloud
                    Provider have their own custom CNIs which results in operational complexity for
                    customers operating in multi-cloud environments.
                  </p>
                </div>
                <div className="relative lg:basis-2/4">
                  <img
                    className="hidden max-h-[300px] md:block lg:absolute lg:top-2/4 lg:left-2/4 lg:-translate-y-1/2 lg:-translate-x-1/2 lg:overflow-hidden"
                    src={JediBeeImage}
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
                <h3 className="mb-4 text-xl font-bold ">What does Cilium provides?</h3>
                <p>
                  Cilium provides a straightforward solution for enabling the encryption of all
                  node-to-node traffic with just one switch, no application changes or additional
                  proxies. Cilium features automatic key rotation with overlapping keys, efficient
                  datapath encryption through in-kernel IPsec or WireGuard, and can encrypt all
                  traffic, including non-standard traffic like UDP. Simply configuring all nodes
                  across all clusters with a common key and all communication between nodes is
                  automatically encrypted.
                </p>
              </div>
              <div className="lg:basis-2/4">
                {/* <iframe
                  className="h-[300px] w-full"
                  src=""
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                /> */}
                <iframe
                  className="h-[300px] w-full"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/RAmJXsMeACU"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 mb-12">
          <div className="container mx-auto w-10/12">
            <h3 className="mb-8 text-center text-xl font-bold">
              Who’s using Cilium’s Transparent Encryption?
            </h3>
            <div className="flex flex-col gap-8 md:gap-12">
              <div
                className="block gap-4 rounded-[10px] bg-white  px-6 py-8 sm:items-center  md:flex md:px-12"
                style={{ boxShadow: `${customShadow}` }}
              >
                <div className="block basis-2/4 items-center justify-around gap-8 md:flex">
                  <div className="flex flex-col gap-6">
                    <div className="mx-auto">
                      <AscendLogo />
                    </div>
                    <a
                      href="https://www.cncf.io/case-studies/ascend/"
                      target="_blank"
                      rel="noopener noreferrer"
                      to="item-page"
                      className="mx-auto  flex items-center gap-3  font-semibold text-[#3B82F6]"
                    >
                      Read The Case Study
                      <span>
                        <ArrowIcon />
                      </span>
                    </a>
                  </div>
                  <div className="my-8 h-[1px] w-full bg-[#6B91C7] md:h-[140px] md:w-[1px]" />
                </div>

                <div className="w-full  text-center">
                  <p className="mb-5 font-bold">
                    Achieving HIPPA compliance with Cilium’s transparent encryption
                  </p>
                  <p>
                    <q>
                      Ascend switched to using Cilium as their solution for data encryption and has
                      since experienced significant improvements. With Cilium, Ascend was able to
                      simplify the encryption process, eliminating the need for and mitiagting
                      issues with certificate-init-containers and application based encryption. This
                      transition has allowed Ascend to achieve seamless data encryption and maintain
                      HIPAA compliance with ease.
                    </q>
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
                      <CosmonicLogo />
                    </div>
                    <Link
                      to="item-page"
                      className="mx-auto  flex items-center gap-3  font-semibold text-[#3B82F6]"
                    >
                      Read The Case Study
                      <span>
                        <ArrowIcon />
                      </span>
                    </Link>
                  </div>
                  <div className="my-8 h-[1px] w-full bg-[#6B91C7] md:h-[140px] md:w-[1px]" />
                </div>

                <div className="w-full  text-center">
                  <p className="mb-5 font-bold">
                    Seamless Network Security and Privacy with Cilium
                  </p>
                  <p>
                    <q>
                      The Cosmonic team uses Cilium for transparent encryption. In the words of Dan
                      Norris, the infrastucture team lead for Cosmonic. “With WireGuard, all the
                      internal traffic is encrypted. I don’t have to worry about it and I don’t have
                      to manage a PKI infrastructure. That was the killer feature. I don’t have to
                      worry about a service mesh. I’ve run service meshes before. It’s great but
                      that’s yet another system to manage. With Cilium, you can just toggle that
                      flag and you’re done.”
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
