import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

// import ScalableKubernetesIcon from 'components/pages/home/highlights/images/scalable-kubernetes.inline.svg';
import JoinUsCard from 'components/pages/use-cases/cards';
import ClickHouseLogo from 'icons/logo-clickhouse.inline.svg';
import Form3Logo from 'icons/logo-form3.inline.svg';
import AstronautBee from 'images/pages/usecase/astronaut-bee.png';
import ClusterMeshImage1 from 'images/pages/usecase/clustermesh-1.png';
import ClusterMeshImage4 from 'images/pages/usecase/clustermesh-4.png';
import ClusterMeshImage2 from 'images/pages/usecase/clutsermesh-2.png';
import ClusterMeshImage3 from 'images/pages/usecase/clutsermesh-3.png';
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
              <h2 className="text-4xl font-bold">Cluster Mesh</h2>
              <small className="font-semibold text-[#8E98AC]">
                Unleashing the Power of Multi-Cluster Networking with Cilium ClusterMesh
              </small>
            </div>
            <div>
              <div className="block items-center gap-8 md:flex">
                <div className="pb-4 md:basis-[55%] md:pb-0 lg:basis-2/4">
                  <h3 className="my-4 max-w-2xl text-xl font-bold md:my-8">
                    Seamless connectivity for multiple Kubernetes clusters
                  </h3>
                  <p>
                    Multi-cluster kubernetes setups are often adopted for reasons like fault
                    isolation, scalability, and geographical distribution. This approach can lead to
                    networking complexities. Traditional networking models, in this context,
                    struggle with service discovery, network segmentation, policy enforcement, and
                    load balancing across clusters. Additionally, managing security protocols and
                    policies across multiple environments can be a challenging endeavor due to the
                    distributed nature of services.
                  </p>
                </div>
                <div className="relative lg:basis-2/4">
                  <img
                    className="hidden max-h-[300px] md:block lg:absolute lg:top-2/4 lg:left-2/4 lg:-translate-y-1/2 lg:-translate-x-1/2 lg:overflow-hidden"
                    src={AstronautBee}
                    alt="astronaut bee"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-16">
          <div className="container mx-auto w-10/12">
            <div className="block items-center gap-8 md:flex">
              <div className="pb-4 md:basis-[55%] md:pb-0 lg:basis-2/4">
                <h3 className="mb-4 text-xl font-bold ">
                  ClusterMesh - Cilium’s multi-cluster Networking Implementation
                </h3>
                <p>
                  Cilium Cluster Mesh allows you to connect the networks of multiple clusters in
                  such as way that pods in each cluster can discover and access services in all
                  other clusters of the mesh, provided all the clusters run Cilium as their CNI.
                  This allows effectively joining multiple clusters into a large unified network,
                  regardless of the Kubernetes distribution or location each of them is running.{' '}
                </p>
              </div>
              <div className="lg:basis-2/4">
                <iframe
                  className="h-[300px] w-full"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/1fsXtqg4Pkw"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white py-16">
          <div className="container mx-auto w-10/12">
            <div className="block items-center gap-8 md:flex">
              <div className="pb-4 md:basis-[55%] md:pb-0 lg:basis-2/4">
                <h3 className="mb-4 text-xl font-bold ">High Availability and Fault Tolerance</h3>
                <p>
                  ClusterMesh enhances your services high availability and fault tolerance. It
                  supports the operation of Kubernetes clusters in multiple regions or availability
                  zones. If resources become temporarily unavailable, are misconfigured in one
                  cluster, or offline for upgrades, it enables failover to other clusters, ensuring
                  your services remain accessible at all times.
                </p>
              </div>
              <div className="lg:basis-2/4">
                <img src={ClusterMeshImage1} />
              </div>
            </div>
          </div>
        </div>
        <div className="py-16">
          <div className="container mx-auto w-10/12">
            <div className="block items-center gap-8 md:flex">
              <div className="lg:basis-2/4">
                <img src={ClusterMeshImage2} />
              </div>
              <div className="pb-4 md:basis-[55%] md:pb-0 lg:basis-2/4">
                <h3 className="mb-4 text-xl font-bold ">Transparent Service Discovery</h3>
                <p>
                  ClusterMesh automates service discovery across your Kubernetes clusters. Using
                  standard Kubernetes services, it automatically merges services with identical
                  names and namespaces across clusters into a global service. This means your
                  applications can discover and interact with services, irrespective of the cluster
                  they reside in, greatly simplifying cross-cluster communication.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-16">
          <div className="container mx-auto w-10/12">
            <div className="block items-center gap-8 md:flex">
              <div className="pb-4 md:basis-[55%] md:pb-0 lg:basis-2/4">
                <h3 className="mb-4 text-xl font-bold ">Effortless Pod IP Routing</h3>
                <p>
                  ClusterMesh is able to handle Pod IP routing across multiple Kubernetes clusters
                  at native performance. By using either tunneling or direct-routing, it circumvents
                  the need for any gateways or proxies. This allows your pods to communicate across
                  clusters seamlessly, enhancing the overall efficiency of your microservice
                  architecture.
                </p>
              </div>
              <div className="lg:basis-2/4">
                <iframe
                  className="h-[300px] w-full"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/VBOONHW65NU"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white py-16">
          <div className="container mx-auto w-10/12">
            <div className="block items-center gap-8 md:flex">
              <div className="lg:basis-2/4">
                <img src={ClusterMeshImage3} />
              </div>
              <div className="pb-4 md:basis-[55%] md:pb-0 lg:basis-2/4">
                <h3 className="mb-4 text-xl font-bold ">Shared Services Across Clusters</h3>
                <p>
                  ClusterMesh enables sharing of services such as secrets management, logging,
                  monitoring, or DNS between all clusters. This reduces operational overhead,
                  simplifies management, and maintains isolation between tenant clusters.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-16">
          <div className="container mx-auto w-10/12">
            <div className="block items-center gap-8 md:flex">
              <div className="pb-4 md:basis-[55%] md:pb-0 lg:basis-2/4">
                <h3 className="mb-4 text-xl font-bold ">Uniform Network Policy Enforcement</h3>
                <p>
                  ClusterMesh enhances your services high availability and fault tolerance. It
                  supports the operation of Kubernetes clusters in multiple regions or availability
                  zones. If resources become temporarily unavailable, are misconfigured in one
                  cluster, or offline for upgrades, it enables failover to other clusters, ensuring
                  your services remain accessible at all times.
                </p>
              </div>
              <div className="lg:basis-2/4">
                <img src={ClusterMeshImage4} />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 mb-12">
          <div className="container mx-auto w-10/12">
            <h3 className="mb-8 text-center text-xl font-bold">
              Who’s using Cilium for Multi Cluster Networking?
            </h3>
            <div className="flex flex-col gap-8 md:gap-12">
              <div
                className="block gap-4 rounded-[10px] bg-white  px-6 py-8 sm:items-center  md:flex md:px-12"
                style={{ boxShadow: `${customShadow}` }}
              >
                <div className="block basis-2/4 items-center justify-around gap-8 md:flex">
                  <div className="flex flex-col gap-6">
                    <div className="mx-auto">
                      <Form3Logo />
                    </div>
                    <a
                      href="https://www.youtube.com/embed/vKgRf4OzTIE"
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
                  <p className="mb-5 font-bold">Multi-cluster networking with Cilium at Form3</p>
                  <p className="mb-2">
                    “We have payment services deployed on GCP, Azure, and AWS on their managed
                    Kubernetes offerings. Due to regulatory requirements, we also have FPS services
                    deployed on bare metal Kubernetes clusters across two data centers clustered
                    using Cilium ClusterMesh. Our engineers only need to support and understand only
                    one technology. Cilium is the company standard for networking and security, it
                    has allowed us to secure our environment and gives us the possibility to merge
                    our cloud services in the future.”
                  </p>
                  <p>Adelina Simion - Technology Evangelist, Form3</p>
                </div>
              </div>
              <div
                className="block gap-4  rounded-[10px] bg-white  px-6 py-8 sm:items-center  md:flex md:px-12"
                style={{ boxShadow: `${customShadow}` }}
              >
                <div className="block basis-2/4 items-center justify-around gap-8 md:flex">
                  <div className="flex flex-col gap-6 ">
                    <div className="mx-auto">
                      <ClickHouseLogo />
                    </div>
                    <a
                      href="https://www.youtube.com/watch?v=-C86fBMcp5Q"
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
                    Building ClickHouseLogo Cloud From Scratch in a Year
                  </p>
                  <p>
                    We use Cilium because it uses eBPF and provides high throughput, lower latency,
                    and less resource consumption, especially when the number of services is large.
                    It also works well across all three major cloud providers, including Google GKE
                    and Azure AKS, which was a critical factor in our choice.
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
