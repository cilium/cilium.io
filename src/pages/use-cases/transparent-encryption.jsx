import React from 'react';

import ScalableKubernetesIcon from 'components/pages/home/highlights/images/scalable-kubernetes.inline.svg';
import Link from 'components/shared/link/link';
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
                Security
              </span>
              <h2 className="text-4xl font-bold">Transparent Encryption</h2>
              <small className="font-semibold text-[#8E98AC]">
                Encryption Without Operational Headache
              </small>
            </div>
            <div>
              <h3 className="my-4 max-w-2xl text-xl font-bold md:my-8">
                How can I encrypt traffic on my clusters while minimizing operational overhead?
              </h3>
              <div className="block items-center gap-8 md:flex">
                <p className="pb-6 md:basis-[55%] md:pb-0 lg:basis-2/4">
                  Many compliance frameworks require encryption, but Kubernetes lacks native
                  pod-to-pod encryption. Two common solutions to this problem are embedding
                  encryption within the application or using a service mesh. Embedding encryption
                  within the app is complex and requires application and security expertise. On the
                  other hand, most service mesh implementations are very complex and challenging to
                  manage and operate.
                </p>
                <div className="lg:basis-2/4">
                  <iframe
                    className="w-full"
                    src="https://www.youtube.com/embed/AjaGmTVBIfI"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-white py-6">
          <div className="container mx-auto w-10/12">
            <h3 className="mb-2 text-xl font-bold ">What does Cilium provides?</h3>
            <div className="block items-center gap-8 md:flex">
              <p className="pb-6 md:basis-[55%] md:pb-0 lg:basis-2/4">
                Cilium provides a straightforward solution for enabling the encryption of all
                node-to-node traffic with just one switch, no application changes or additional
                proxies. Cilium features automatic key rotation with overlapping keys, efficient
                datapath encryption through in-kernel IPsec or WireGuard, and can encrypt all
                traffic, including non-standard traffic like UDP. Simply configuring all nodes
                across all clusters with a common key and all communication between nodes is
                automatically encrypted.
              </p>
              <div className="lg:basis-2/4">
                <iframe
                  className="h-[300px] w-full"
                  src="https://www.youtube.com/embed/AjaGmTVBIfI"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 mb-12">
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
                      <ScalableKubernetesIcon />
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
              {/*  */}
              <div
                className="block gap-4  rounded-[10px] bg-white  px-6 py-8 sm:items-center  md:flex md:px-12"
                style={{ boxShadow: `${customShadow}` }}
              >
                <div className="block basis-2/4 items-center justify-around gap-8 md:flex">
                  <div className="flex flex-col gap-6 ">
                    <div className="mx-auto">
                      <ScalableKubernetesIcon />
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
            </div>
          </div>
        </div>
        <div className="pt-0 pb-12 md:pb-24 md:pt-8">
          <div className="container mx-auto w-10/12">
            <h3 className="mb-8 text-center text-xl font-bold">Want to Learn More?</h3>
            <div className="flex flex-col flex-wrap gap-8 md:grid md:grid-cols-2 md:gap-8 lg:grid lg:grid-cols-3 lg:gap-16">
              <div
                className="rounded-[10px] bg-white p-6 text-center"
                style={{ boxShadow: `${customShadow}` }}
              >
                <p className="font-bold">Join the Cilium community</p>
                <p className="mx-auto w-full max-w-[320px] pt-2 pb-8">
                  Cilium is an open source project that anyone in the community can use, improve,
                  and enjoy. We'd love you to join us! Find out what's happening and get involved.
                </p>
                <button
                  type="button"
                  className="rounded-[10px] bg-[#0080FF] py-2 px-6 text-center font-bold text-white"
                >
                  Join the community
                </button>
              </div>
              <div
                className="rounded-[10px] bg-white p-6 text-center"
                style={{ boxShadow: `${customShadow}` }}
              >
                <p className="font-bold">Join the Cilium community</p>
                <p className="mx-auto w-full max-w-[320px] pt-2 pb-8">
                  Cilium is an open source project that anyone in the community can use, improve,
                  and enjoy. We'd love you to join us! Find out what's happening and get involved.
                </p>
                <button
                  type="button"
                  className="rounded-[10px] bg-[#0080FF] py-2 px-6 text-center font-bold text-white"
                >
                  Join the community
                </button>
              </div>
              <div
                className="rounded-[10px] bg-white p-6 text-center"
                style={{ boxShadow: `${customShadow}` }}
              >
                <p className="font-bold">Join the Cilium community</p>
                <p className="mx-auto w-full max-w-[320px] pt-2 pb-8">
                  Cilium is an open source project that anyone in the community can use, improve,
                  and enjoy. We'd love you to join us! Find out what's happening and get involved.
                </p>
                <button
                  type="button"
                  className="rounded-[10px] bg-[#0080FF] py-2 px-6 text-center font-bold text-white"
                >
                  Join the community
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ItemPage;
