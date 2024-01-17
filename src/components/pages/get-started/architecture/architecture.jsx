import React from 'react';

import Container from 'components/shared/container/container';
import Heading from 'components/shared/heading';

const title = 'Architecture';
const description =
  "Cilium comprises four key components: the Cilium agent, the Cilium client command line tool, the Cilium operator, and the Cilium CNI plugin. The agent, running on all cluster nodes, configures networking, load balancing, policies, and monitoring via Kubernetes or APIs that describe networking, service load-balancing, network policies, and visibility & monitoring requirements. The client tool, bundled with the agent, inspects and manages the local agent's status, offering direct access to eBPF maps. The operator centrally manages cluster tasks, handling them collectively rather than per node. The CNI plugin, invoked by Kubernetes during pod scheduling or termination, interacts with the node's Cilium API to configure necessary datapaths for networking, load balancing, and network policies.";
const Architecture = () => (
  <section className="mt-10 md:mt-20 lg:mt-28">
    <Container className="grid grid-cols-12 gap-y-8 md:gap-x-8 md:gap-y-12 lg:gap-y-16">
      <div className="col-span-full lg:col-span-5 flex flex-col justify-center">
        <Heading className="text-center" tag="h2">
          {title}
        </Heading>
        <p className="mt-5 md:text-lg">{description}</p>
      </div>
      <div className="flex flex-col justify-center it..ems-center lg:items-start lg:col-span-7">
        <iframe
          className="xl:max-w-[664px] w-full"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/LCQ89uBB7zE?si=udmn0u7mTWY_dbqK"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </Container>
  </section>
);

export default Architecture;
