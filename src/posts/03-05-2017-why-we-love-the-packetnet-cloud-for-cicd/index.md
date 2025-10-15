---
path: '/blog/2017/5/2/cicd-and-why-we-love-the-packetnet-cloud'
date: '2017-05-03T16:17:00.000Z'
title: 'Why we love the packet.net cloud for CI/CD'
categories:
  - How-To
tags:
  - ci/cd
  - kubernetes
  - testing
ogSummary: 'How Cilium built a reliable CI/CD pipeline for eBPF container networking using packet.net bare metal cloud. Learn why nested containers in CI platforms fail for network testing and how bare metal infrastructure solved our Kubernetes and Docker integration testing challenges.'
---

A while ago we started thinking about how to build a continous integration (CI) testing infrastructure that would help us maintain the reliability and stability of Cilium as we add more features and integrate with orchestration systems like Kubernetes and Docker. This post describes our process for building a CI environment capable of testing a container networking & security infrastructure. It's also a thank you to packet.net for supporting Cilium along with many other open source projects. For more, read on...

**tl;dr [packet.net](https://www.packet.net/) and their bare metal cloud made it easy for us to leverage our existing developer Vagrant setup to run complex CI tests that themselves need to create/destroy containers.**

The core function of Cilium is to provide visibility and control over network traffic coming in or out of a container. For example, when a new container is created, Cilium learns about the identity of the container from an orchestration framework like Docker/Kubernetes and then compiles a [BPF](http://docs.cilium.io/en/stable/bpf/) program to apply the appropriate L3/L4/L7 security policies associated with that container.

As a result, a major consideration for architecting our CI environment is that Cilium tests themselves need to create/destroy containers.

Common CI/CD environments such as Travis CI or CircleCI are fantastic and provided a great foundation to run build and unit tests but both leverage container technology themselves to sandbox builds. This makes starting containers from within such tests complicated.

We briefly looked at DinD (Docker in Docker) but quickly dismissed the option for [multiple reasons](https://jpetazzo.github.io/2015/09/03/do-not-use-docker-in-docker-for-ci/). We also looked at Rkt and its capability to [run pods with KVM hypervisor as stage1](https://rocket.readthedocs.io/en/latest/Documentation/running-kvm-stage1/). The latter seemed interesting but at first glance seemed to have a lot of moving pieces and was a more significant departure from how developers were currently running tests on their own machines using [Vagrant](https://www.vagrantup.com/).

In parallel, the CNCF had just announced their [1000 node bare metal cluster](https://www.cncf.io/cluster/) to foster testing of community projects. Unfortunately, the cluster was intended for one time large scale tests, rather than fractional and continous use by multiple projects. Seeing our struggle, Zachary Smith, CEO of packet, reached out and kindly offered resources on the packet.net cloud.

For those not familiar with packet: packet is a bare metal cloud which makes provisioning of bare metal machines very simple and offers developer friendly APIs for automation. You can find more information on their [website](https://www.packet.net/features/).

Simple access to a bare metal resources was intriguing so we gave it a shot. Provisioning the machines and setting up as Jenkins on them was extremely simple and done in less than a morning. Only minutes after provisioning we had the first CI testrun ongoing using our existing [Vagrantfile](https://raw.githubusercontent.com/cilium/cilium/master/Vagrantfile) which was already capable of running the testsuite.

All it took was to add the simple `Jenkinsfile` below:

```
pipeline {
    agent {
        label 'vagrant'
    }
    options {
        timeout(time: 30, unit: 'MINUTES')
    }
    stages {
        stage('Build') {
            environment {
                MEMORY = '4096'
                RUN_TEST_SUITE = '1'
            }
            steps {
                sh './contrib/vagrant/start.sh'
            }
        }
    }
    post {
        always {
            sh 'vagrant destroy -f'
        }
    }
}
```

For us, using a bare metal cloud had two keep benefits:

- Performance benchmark tests execute quickly and reliably.
- The Vagrant environment for CI testing matches exactly what developers already have in place on their own machines, making it trivial to reproduce test failures locally.

We couldn't be happier with our CI environment and we are continuously extending coverage.

Huge shoutout to [packet.net](https://www.packet.net/), we are very grateful for their support of Cilium!
