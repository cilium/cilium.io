---
path: '/blog/2017/7/7/57h5usdogcy8a0daqrgfu7ikxpgzmw'
date: '2017-07-07T20:44:07.000Z'
title: 'Tutorial: Applying HTTP security rules with Kubernetes'
categories:
  - How-To
tags:
  - Kubernetes
  - http
  - cilium
ogSummary: 'This blog post focuses on Layer 7 (HTTP) policy rules and how to apply them for both outgoing and incoming connections in the context of a Kubernetes cluster using a ThirdPartyResource. This is a first step in integrating L7 policies into the Kubernetes world, next steps will involve integration with Istio and the Envoy proxy. We will talk about our plans and the details how Cilium empowers both of them in one of the next blog posts.'
---

This blog post focuses on Layer 7 (HTTP) policy rules and how to apply them for both outgoing and incoming connections in the context of a Kubernetes cluster using a [ThirdPartyResource](https://kubernetes.io/docs/tasks/access-kubernetes-api/extend-api-third-party-resource/). This is a first step in integrating L7 policies into the Kubernetes world, next steps will involve integration with [Istio](https://istio.io/) and the [Envoy proxy](https://github.com/lyft/envoy). We will talk about our plans and the details how Cilium empowers both of them in one of the next blog posts.

The Cilium [0.9 release](https://www.cilium.io/blog/2017/5/31/cilium-v09-released-hello-kubernetes) ([Release Notes](https://github.com/cilium/cilium/releases/tag/v0.9.0)) was a big step towards awesome Kubernetes integration. One of the many things that we added is a new [ThirdPartyResource](https://kubernetes.io/docs/tasks/access-kubernetes-api/extend-api-third-party-resource/) named `CiliumNetworkPolicy`. The purpose of `CiliumNetworkPolicy` is to extend the standardized [`NetworkPolicy`](https://kubernetes.io/docs/concepts/services-networking/network-policies/) resource and make all of the Cilium functionality available that is not yet accessible via the standard `NetworkPolicy`.

## Step by Step Guide

This step by step guide shows how to apply HTTP security rules in three easy steps.

### Step1: Deploy demo app

We start out with a standard Kubernetes cluster with three worker nodes:

    $ kubectl get nodes
    NAME      STATUS    AGE
    worker0   Ready     115d
    worker1   Ready     115d
    worker2   Ready     115d

Cilium is [deployed as DaemonSet](http://docs.cilium.io/en/stable/gettingstarted/#getting-started-using-kubernetes):

    $ kubectl -n kube-system get pods
    NAME                                    READY     STATUS    RESTARTS   AGE
    cilium-0srz0                            1/1       Running   0          10h
    cilium-153hp                            1/1       Running   0          10h
    cilium-5pk5c                            1/1       Running   2          10h
    cilium-consul-0kf04                     1/1       Running   1          17h

We deploy a simple demo application in the form of Kubernetes deployments. This will create three deployments: app1, app2, and app3\. It will also make app1 available via a service app1-service.

    $ kubectl create -f https://raw.githubusercontent.com/cilium/cilium/master/examples/minikube/demo.yaml
    service "app1-service" created
    deployment "app1" created
    deployment "app2" created
    deployment "app3" created

We can now check the status of these deployments:

    $ kubectl get pods
       NAME                       READY     STATUS              RESTARTS   AGE
       po/app1-2741898079-66lz0   0/1       ContainerCreating   0          40s
       po/app1-2741898079-jwfmk   1/1       Running             0          40s
       po/app2-2889674625-wxs08   0/1       ContainerCreating   0          40s
       po/app3-3000954754-fbqtz   0/1       ContainerCreating   0          40s

### Step 2: Create L7/HTTP security policy

We want to define a Layer7 (HTTP) policy to protect app1\. app1 has two API endpoints which can be called: `GET /public` and `GET /private`. We want to continue allowing `GET /public` but prohibit all calls to `GET /private`. The following policy achieves this:

```yaml
apiVersion: 'cilium.io/v1'
kind: CiliumNetworkPolicy
description: 'L7 policy for getting started using Kubernetes guide'
metadata:
  name: 'rule1'
spec:
  endpointSelector:
    matchLabels:
      id: app1
  ingress:
    - fromEndpoints:
        - matchLabels:
            id: app2
    - toPorts:
        - ports:
            - port: '80'
              protocol: TCP
          rules:
            HTTP:
              - method: 'GET'
                path: '/public'
```

We can now import this Layer 7 (HTTP) policy using `kubectl`:

    $ kubectl create -f https://raw.githubusercontent.com/cilium/cilium/master/examples/minikube/l3_l4_l7_policy.yaml

### Step 3: Test the policy

`app1` is now protected. While we can still access `app1/public` from `app2`...

    $ kubectl exec $APP2_POD -- curl -s http://${SVC_IP}/public
    { 'val': 'this is public' }

... and we can no longer access `app1/private`.

    $ kubectl exec $APP2_POD -- curl -s http://${SVC_IP}/private
    Access denied

### Next Steps

This is just a first preview into our first step to integrate HTTP layer policies into Kubernetes. We will cover more of our upcoming next steps in follow-up blog posts:

- Adding L7/HTTP security rules definitions to the Kubernetes `NetworkPolicy` to no longer require a `ThirdPartyResource` or `CustomResourceDefinition`.
- Integration with [Envoy proxy](https://github.com/lyft/envoy) to enable protocols beyond HTTP (gRPC, MongoDB, ...)
- The difference between a shared proxy vs a side car proxy model and how Cilium can provide to run a hybrid model where this decision can be made per pod.
- Tight cooperation with the Envoy proxy where Cilium can share the existing context information is has, e.g. source security identity for ingress rules, existing service loadbalancing/routing decision.
- Kernel-assisted acceleration of the Envoy proxy
- Adding support for `CustomResoureDefinition` as `ThirdPartyResource` will be deprecated with Kubernetes 1.8

Stay tuned for more blog posts but feel free to ask questions or provide feedback on our journey so far.
