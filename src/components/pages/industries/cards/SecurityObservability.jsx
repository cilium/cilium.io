import React from 'react';

import Container from 'components/shared/container/container';

import Bee from './img/bee-security.png';

const SecurityObservability = () => (
  <div>
    <Container>
      <h2 className="text-3xl font-bold">
        Tetragon: eBPF-based Security Observability and Runtime Enforcement
      </h2>
      <div className="items-center lg:flex lg:gap-10">
        <p className="w-full py-8 lg:max-w-[694px] lg:py-0 lg:text-center">
          Tetragon is a flexible Kubernetes-aware security observability and runtime enforcement
          tool that applies policy and filtering directly with eBPF, allowing for reduced
          observation overhead, tracking of any process, and real-time enforcement of policies.
        </p>
        <figure className="lg:mt-8">
          <img className="w-60" src={Bee} alt="bee" />
        </figure>
      </div>
    </Container>
  </div>
);

export default SecurityObservability;
