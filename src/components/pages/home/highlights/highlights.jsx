import { Popover, Transition } from '@headlessui/react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import ChevronIcon from 'icons/chevron.inline.svg';

import LockIcon from './images/lock.inline.svg';
import SearchIcon from './images/search.inline.svg';
import ServiceIcon from './images/service.inline.svg';

const items = [
  {
    icon: ServiceIcon,
    title: 'Native support for service type Load Balancer and Egress',
    description: `<p>Kubernetes doesn't come with an implenentation of Load Balancing. This is usually left as an exercise for your cloud provider or in private cloud environments an exercise for your networking team. Cilium can attract this traffic with BGP and accelerate leveraging XDP and eBPF. Together these technologies provide a very robust and secure implementation of Load Balancing.</p><p>Cilium and eBPF operate at the kernel layer. With this level of context we can make intelligent decisions about how to connect different workloads whether on the same node or between clusters. With eBPF and XDP Cilium enables significant improvements in latency and performance and eliminates the need for kube-proxy entirely.</p>`,
  },
  {
    icon: SearchIcon,
    title: 'Identity-aware Visibility',
    description: `<p>Kubernetes doesn't come with an implenentation of Load Balancing. This is usually left as an exercise for your cloud provider or in private cloud environments an exercise for your networking team. Cilium can attract this traffic with BGP and accelerate leveraging XDP and eBPF. Together these technologies provide a very robust and secure implementation of Load Balancing.</p><p>Cilium and eBPF operate at the kernel layer. With this level of context we can make intelligent decisions about how to connect different workloads whether on the same node or between clusters. With eBPF and XDP Cilium enables significant improvements in latency and performance and eliminates the need for kube-proxy entirely.</p>`,
  },
  {
    icon: LockIcon,
    title: 'Transparent Encryption',
    description: `<p>Kubernetes doesn't come with an implenentation of Load Balancing. This is usually left as an exercise for your cloud provider or in private cloud environments an exercise for your networking team. Cilium can attract this traffic with BGP and accelerate leveraging XDP and eBPF. Together these technologies provide a very robust and secure implementation of Load Balancing.</p><p>Cilium and eBPF operate at the kernel layer. With this level of context we can make intelligent decisions about how to connect different workloads whether on the same node or between clusters. With eBPF and XDP Cilium enables significant improvements in latency and performance and eliminates the need for kube-proxy entirely.</p>`,
  },
  {
    icon: ServiceIcon,
    title: 'Native support for service type Load Balancer and Egress',
    description: `<p>Kubernetes doesn't come with an implenentation of Load Balancing. This is usually left as an exercise for your cloud provider or in private cloud environments an exercise for your networking team. Cilium can attract this traffic with BGP and accelerate leveraging XDP and eBPF. Together these technologies provide a very robust and secure implementation of Load Balancing.</p><p>Cilium and eBPF operate at the kernel layer. With this level of context we can make intelligent decisions about how to connect different workloads whether on the same node or between clusters. With eBPF and XDP Cilium enables significant improvements in latency and performance and eliminates the need for kube-proxy entirely.</p>`,
  },
  {
    icon: SearchIcon,
    title: 'Identity-aware Visibility',
    description: `<p>Kubernetes doesn't come with an implenentation of Load Balancing. This is usually left as an exercise for your cloud provider or in private cloud environments an exercise for your networking team. Cilium can attract this traffic with BGP and accelerate leveraging XDP and eBPF. Together these technologies provide a very robust and secure implementation of Load Balancing.</p><p>Cilium and eBPF operate at the kernel layer. With this level of context we can make intelligent decisions about how to connect different workloads whether on the same node or between clusters. With eBPF and XDP Cilium enables significant improvements in latency and performance and eliminates the need for kube-proxy entirely.</p>`,
  },
  {
    icon: LockIcon,
    title: 'Transparent Encryption',
    description: `<p>Kubernetes doesn't come with an implenentation of Load Balancing. This is usually left as an exercise for your cloud provider or in private cloud environments an exercise for your networking team. Cilium can attract this traffic with BGP and accelerate leveraging XDP and eBPF. Together these technologies provide a very robust and secure implementation of Load Balancing.</p><p>Cilium and eBPF operate at the kernel layer. With this level of context we can make intelligent decisions about how to connect different workloads whether on the same node or between clusters. With eBPF and XDP Cilium enables significant improvements in latency and performance and eliminates the need for kube-proxy entirely.</p>`,
  },
  {
    icon: ServiceIcon,
    title: 'Native support for service type Load Balancer and Egress',
    description: `<p>Kubernetes doesn't come with an implenentation of Load Balancing. This is usually left as an exercise for your cloud provider or in private cloud environments an exercise for your networking team. Cilium can attract this traffic with BGP and accelerate leveraging XDP and eBPF. Together these technologies provide a very robust and secure implementation of Load Balancing.</p><p>Cilium and eBPF operate at the kernel layer. With this level of context we can make intelligent decisions about how to connect different workloads whether on the same node or between clusters. With eBPF and XDP Cilium enables significant improvements in latency and performance and eliminates the need for kube-proxy entirely.</p>`,
  },
  {
    icon: SearchIcon,
    title: 'Identity-aware Visibility',
    description: `<p>Kubernetes doesn't come with an implenentation of Load Balancing. This is usually left as an exercise for your cloud provider or in private cloud environments an exercise for your networking team. Cilium can attract this traffic with BGP and accelerate leveraging XDP and eBPF. Together these technologies provide a very robust and secure implementation of Load Balancing.</p><p>Cilium and eBPF operate at the kernel layer. With this level of context we can make intelligent decisions about how to connect different workloads whether on the same node or between clusters. With eBPF and XDP Cilium enables significant improvements in latency and performance and eliminates the need for kube-proxy entirely.</p>`,
  },
  {
    icon: LockIcon,
    title: 'Transparent Encryption',
    description: `<p>Kubernetes doesn't come with an implenentation of Load Balancing. This is usually left as an exercise for your cloud provider or in private cloud environments an exercise for your networking team. Cilium can attract this traffic with BGP and accelerate leveraging XDP and eBPF. Together these technologies provide a very robust and secure implementation of Load Balancing.</p><p>Cilium and eBPF operate at the kernel layer. With this level of context we can make intelligent decisions about how to connect different workloads whether on the same node or between clusters. With eBPF and XDP Cilium enables significant improvements in latency and performance and eliminates the need for kube-proxy entirely.</p>`,
  },
];

const Highlights = () => (
  <section className="mt-20 lg:mt-28">
    <Container className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 auto-rows-fr">
      {items.map(({ icon: Icon, title, description }, index) => (
        <Popover className="relative" key={index}>
          {({ open }) => (
            <>
              <Popover.Button
                className={classNames(
                  'flex items-center p-6 border rounded-lg border-gray-3 w-full h-full',
                  open && 'border-b-0 rounded-b-none'
                )}
              >
                <Icon className="flex-shrink-0 w-16 h-auto lg:w-max" />
                <Heading className="mx-6 text-left lg:mx-8" size="xs" tag="h3">
                  {title}
                </Heading>
                <ChevronIcon className="flex-shrink-0 w-auto h-4 ml-auto rotate-90 lg:h-6" />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute z-10 w-full p-6 -translate-x-1/2 bg-white border border-t-0 rounded-b-lg border-gray-3 top-11/12 left-1/2">
                  <div dangerouslySetInnerHTML={{ __html: description }} />
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      ))}
    </Container>
  </section>
);

Highlights.propTypes = {};

Highlights.defaultProps = {};

export default Highlights;
