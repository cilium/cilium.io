---
path: /blog/2026/03/23/native-mtls-cilium
date: 2026-03-23T09:00:00.000Z
title: "Native mTLS for Cilium: Transparent Encryption Meets Cloud Native Identity"
isFeatured: true
ogImage: native-mtls-cover.png
ogSummary: "Cilium now brings native, inline mTLS to the Kubernetes datapath — unifying authentication and encryption in a single step, with zero application changes."
categories:
  - Technology
tags:
  - Cilium
  - mTLS
  - Security
  - Encryption
  - Service Mesh
  - eBPF
  - SPIRE
  - SPIFFE
  - KubeCon
  - CNCF
---

# Native mTLS for Cilium: Transparent Encryption Meets Cloud Native Identity

*Announcing native mutual TLS in the Cilium datapath — zero-drop, inline encryption with Kubernetes-native identity, no sidecars required.*

![Native mTLS for Cilium](native-mtls-cover.png)

Today at [KubeCon + CloudNativeCon Europe 2026](https://events.linuxfoundation.org/kubecon-cloudnativecon-europe/) in Amsterdam, we are excited to announce **native mTLS support in Cilium** — a major step forward for transparent, zero-trust encryption in Kubernetes. This capability brings inline mutual TLS directly into the Cilium datapath, unifying authentication and encryption into a single operation. No sidecars, no dropped first packets, and no application changes required.

Mutual TLS has long been the gold standard for workload-to-workload security in cloud native environments, but achieving it has historically meant accepting significant operational complexity. With this release, Cilium eliminates that tradeoff.
# How Open Source Drives Innovation: Lessons from the Evolution of the Service Mesh

In the Cilium project, we’ve always believed that open source isn’t just a way to share code, it’s also a way to drive innovation. By putting ideas into the public domain, engineers learn from them, challenge them, and build on them to drive progress forward. The evolution of the service mesh towards ztunnel is a perfect case study of this process in action. Projects like Cilium, Istio, and Linkerd have each contributed unique approaches, learning from one another to enhance performance, scalability, and user experience.

# Different Paths, Same Destination

When the service mesh pattern first emerged, sidecars were the dominant model. Projects like Istio and Linkerd standardized on injecting a proxy alongside each application instance, offering consistent L7 observability, security, and traffic management. But as these meshes grew in adoption, so did the operational complexity and performance overhead of sidecar-heavy architectures.

Interestingly, Linkerd actually started with a per-node proxy model in its earliest versions. The idea was to avoid the complexity of managing sidecars altogether. However, they encountered real limitations which led them to pivot toward a sidecar-based approach. It was a pragmatic move: sidecars gave them per-pod context and control, which was hard to achieve with the technologies available at the time.

# Cilium: Rethinking Service Mesh with eBPF

Fast forward a few years, and the landscape had changed. Cilium introduced a sidecarless service mesh built on eBPF, which enabled per-pod visibility, identity, and policy enforcement, all without the need for injected sidecar proxies. With eBPF running directly in the Linux kernel, Cilium was able to revisit the original promise of node-local simplicity while delivering per-pod context and control.

This was a major inflection point. By removing the operational burden of sidecars while maintaining strong security and observability guarantees, Cilium opened the door to a new generation of service mesh architectures that removed the need for a sidecar injected into each and every pod.

# Enter ztunnel

Cilium’s introduction of the sidecarless approach led to months of debate and discussion about the pros and cons. In our view, healthy discussion and probing different technical positions can lead to real progress. The following year, Istio Ambient was announced, proposing a new data plane model for Istio that eliminates sidecars in favor of a per-node ztunnel component for Layer 4 security, and an optional Layer 7 proxy layer for application traffic control.

[Performance results](https://arxiv.org/pdf/2411.02267) for Ambient are promising—lower CPU usage, faster pod starts, and improved network efficiency compared to Istio’s traditional sidecar deployments. But what really piqued our interest is that for encrypted TCP connections, the ztunnel approach even out-performs Cilium. 

One of the main reasons for ztunnel’s better performance is that by encrypting a TCP payload stream, it can avoid the per-packet encryption overhead inherent in Cilium’s use of WireGuard/IPsec.

But this performance boost does come with a few trade-offs.

One area to consider is upgrades. Cilium’s eBPF programs can be left in the kernel during a control plane upgrade, allowing data to continue flowing while user space components are replaced or restarted. With ztunnel, any TCP connections will need to be torn down during upgrade.

Another factor, which may be important to some users, is that WireGuard and IPsec can be used to encrypt any IP traffic, whereas ztunnel is limited to TCP traffic.

# Bringing ztunnel to Cilium

When we started looking at [bringing ztunnel support into Cilium](https://github.com/cilium/cilium/issues/38548), it seemed like we could combine the best of both worlds. The top-tier performance of ztunnel, combined with Cilium’s ease of policy control, and the ability to support all types of IP traffic.

Bringing ztunnel support into Cilium brings native mTLS to the data path and enables enhanced performance for ztunnel encrypted connections.
## The Challenge: Authentication Without Encryption

Cilium's [existing mutual authentication](https://isovalent.com/blog/post/2022-05-03-servicemesh-security/) capability (introduced as beta in Cilium 1.14) was a significant innovation, using eBPF to verify workload identity at the datapath level. However, it addressed only half of the mTLS promise:

- **Session vs network based authentication.** The mutual authentication handshake had nodes authenticate each other and encapsulate all network traffic to build an authenticated and encrypted virtual network rather than doing session based authentication.
- **First packets were dropped.** When a new identity pair communicated for the first time, the initial packet was dropped while an out-of-band TLS 1.3 handshake completed between Cilium agents. Applications had to tolerate this retry penalty.
- **External dependencies were required.** A full SPIRE deployment was mandatory — adding infrastructure complexity for teams that simply wanted encrypted pod-to-pod communication.

The following diagram illustrates this existing flow:

```
                     FIRST PACKET (DROPPED)

  Pod A          BPF Datapath         Cilium Agent (A)       Cilium Agent (B)
    |                 |                     |                       |
    |-- 1. Packet --> |                     |                       |
    |                 |-- 2. Policy check:  |                       |
    |                 |   auth_type = SPIRE |                       |
    |                 |-- 3. auth_map       |                       |
    |                 |   lookup -> MISS    |                       |
    |                 |                     |                       |
    |   X DROPPED     |-- 4. Signal ----->> |                       |
    |                 |                     |-- 5. Get SPIFFE cert  |
    |                 |                     |   from SPIRE          |
    |                 |                     |== 6. TLS 1.3 ======>> |
    |                 |                     |   (out-of-band)       |
    |                 |                     |   7. Validate cert  <<|
    |                 |<<-- 8. Write -------|                       |
    |                 |   auth_map entry    |                       |


                     SUBSEQUENT PACKETS (ALLOWED, BUT PLAINTEXT)

  Pod A          BPF Datapath (A)                      BPF Datapath (B)    Pod B
    |                 |                                       |               |
    |-- 9. Packet --> |                                       |               |
    |                 |-- auth_map lookup -> HIT              |               |
    |                 |========= PLAINTEXT ================>> |-- forward --> |
```

While this approach is elegant for pure identity verification, it leaves a critical gap in environments that require confidentiality guarantees — which is, increasingly, every production Kubernetes cluster.

## Introducing Native mTLS: Ztunnel Integration

Cilium's native mTLS is powered by a [forked version of ztunnel](https://github.com/cilium/ztunnel) — a lightweight, per-node Rust proxy originally from Istio's ambient mesh — reengineered to integrate directly with the Cilium control plane and **SPIRE** as the certificate authority. We introduced native SPIRE support into ztunnel ([cilium/ztunnel#4](https://github.com/cilium/ztunnel/pull/4)), replacing the upstream CA dependency with SPIRE's Delegated Identity API. SPIRE is the **only** CA mode supported in Cilium's mTLS solution, providing a production-grade, [CNCF-graduated](https://www.cncf.io/projects/spiffe/) identity foundation.

While we are currently maintaining a fork to accelerate these capabilities, our goal is to align with and eventually upstream these improvements to the broader ecosystem.

Here is what this looks like in practice:

```
  Pod A             Ztunnel              Ztunnel              Pod B
  (enrolled)        (Node A)             (Node B)             (enrolled)
    |                  |                    |                    |
    |-- App traffic -->|                    |                    |
    |   (plaintext)    |                    |                    |
    |                  |                    |                    |
    |   PLAINTEXT      |  ENCRYPTED mTLS    |    PLAINTEXT       |
    |  --------------> |  ==============>   |  ----------------> |
    |                  |  HBONE tunnel      |                    |
    |                  |  HTTP/2 CONNECT    |  [ztunnel decrypts |
    |                  |  over mTLS 1.3     |   and delivers     |
    |                  |  to :15008         |   into pod]        |
    |                  |                    |                    |
```

**Every packet is encrypted.** There is no plaintext window, no dropped first packets, and no separate WireGuard or IPsec layer to configure. The connection is held inline by ztunnel until the mTLS tunnel is established, then traffic flows bidirectionally through an [HBONE](https://istio.io/latest/docs/ambient/architecture/hbone/) (HTTP/2 CONNECT) tunnel.

### How It Works

Traffic interception is handled through lightweight in-pod iptables rules:

1. **Pod enrollment**: When a namespace is labeled with `io.cilium/mtls-enabled=true`, the Cilium agent enrolls all pods in that namespace. It enters each pod's network namespace and installs iptables rules that redirect outbound traffic to ztunnel on port `15001`.

2. **mTLS tunnel establishment**: Ztunnel on the source node looks up the destination workload via XDS (streamed from the Cilium agent) and initiates an mTLS 1.3 connection to the destination node's ztunnel on port `15008`. The SPIFFE identity — `spiffe://<trust-domain>/ns/<namespace>/sa/<service-account>` — is embedded in the certificate and verified at both ends.

3. **Traffic delivery**: The destination ztunnel decrypts the traffic and delivers it into the target pod, bypassing the interception rules via an in-pod mark. The application sees a normal plaintext connection and is completely unaware encryption happened.

4. **Certificate management via SPIRE**: Workload certificates are issued by **SPIRE**, the CNCF-graduated implementation of the SPIFFE standard. The Cilium operator automatically registers SPIRE entries for enrolled service accounts, and ztunnel obtains short-lived X.509-SVIDs directly from the local SPIRE agent via workload attestation. This provides a robust, standards-based identity foundation with automatic certificate rotation.

## Architecture Deep Dive

The control plane is cleanly split across the Cilium agent (per-node) and the Cilium operator (cluster-wide), following Cilium's Hive cell architecture.

### Agent-Side Control Plane

Each Cilium agent runs two servers that communicate with the local ztunnel instance, while SPIRE handles certificate issuance:

```
┌──────────────────────────────────────────────────────────────────┐
│  cilium-agent (per node)                                          │
│                                                                   │
│  ┌──────────────────────────────────────────────────────────┐     │
│  │ ZDS Server (Unix socket: /var/run/cilium/ztunnel.sock)   │     │
│  │ Pod enrollment/disenrollment via netns FD passing        │     │
│  └──────────────────────────────────────────────────────────┘     │
│  ┌──────────────────────────────────────────────────────────┐     │
│  │ XDS Server (Unix socket: /var/run/cilium/xds.sock)       │     │
│  │ Streams workload addresses + authorization policies      │     │
│  └──────────────────────────────────────────────────────────┘     │
│                              │                                    │
│                              ▼                                    │
│                         ztunnel proxy                             │
│                              │                                    │
│                              ▼                                    │
│                    SPIRE Agent (per node)                         │
│                    Workload attestation + X.509-SVID issuance     │
└──────────────────────────────────────────────────────────────────┘
```

- **ZDS (Ztunnel Discovery Service)**: Handles pod lifecycle. On enrollment, it enters the pod's network namespace, creates iptables redirect rules, and passes the netns file descriptor to ztunnel via protobuf over a Unix domain socket. On disenrollment, it cleans up.

- **XDS (xDS Discovery Service)**: Watches `CiliumEndpoint` and `CiliumEndpointSlice` resources and streams them as `istio.workload.Address` protos to ztunnel using gRPC Delta Aggregated Discovery Service (dADS). This tells ztunnel which workloads exist, their IPs, and whether they speak HBONE.

- **SPIRE Agent**: Runs as a DaemonSet alongside ztunnel on each node. Ztunnel obtains short-lived X.509-SVIDs (SPIFFE Verifiable Identity Documents) directly from the SPIRE agent through workload attestation. The SPIRE agent validates the workload's identity using Kubernetes selectors (namespace + service account) and issues certificates signed by the SPIRE server's trust chain.

### Operator-Side Control Plane

The Cilium operator handles cluster-wide SPIRE identity registration:

```
┌──────────────────────────────────────────────────────────────────┐
│  cilium-operator (cluster-wide)                                   │
│                                                                   │
│  Namespace Reflector ──► EnrolledNamespace Table (StateDB)        │
│  ServiceAccount Reflector ──► ServiceAccount Table (StateDB)      │
│                      │                                            │
│                      ▼                                            │
│           Enrollment Reconciler ──► SPIRE Server (entry CRUD)     │
└──────────────────────────────────────────────────────────────────┘
```

When a namespace is enrolled, the operator queries all service accounts in that namespace and creates corresponding SPIRE registration entries with SPIFFE IDs in the format `spiffe://<trust-domain>/ns/<namespace>/sa/<service-account>`, parented under `/ztunnel`. When a namespace is un-enrolled, those entries are cleaned up.

## Enrollment Model: Gradual Rollout by Namespace

A key design decision is that mTLS enrollment is **per-namespace**, controlled by a single label:

```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: production
  labels:
    io.cilium/mtls-enabled: "true"
```

This gives platform teams a natural rollout mechanism: enable mTLS for individual namespaces as they are ready, without affecting the rest of the cluster. Mixed traffic scenarios work predictably:

| Source | Destination | Result |
|--------|-------------|--------|
| Enrolled | Enrolled | **Encrypted** (mTLS over HBONE) |
| Enrolled | Non-enrolled | Plaintext passthrough |
| Non-enrolled | Enrolled | Plaintext (captured by ztunnel, but not encrypted) |
| Non-enrolled | Non-enrolled | Normal Cilium datapath (no ztunnel involvement) |

Encryption only occurs when **both** pods are enrolled. Mixed traffic degrades gracefully to plaintext without breakage or hard failures.

## Why This Matters

### 1. mTLS by Default, Without Operational Overhead

Enrolled namespaces get mTLS with zero application changes, code modifications, sidecar injection, or certificate management burden on developers. Platform teams label a namespace and encryption is on.

### 2. No Dropped Packets

Unlike the existing mutual auth approach, ztunnel holds connections inline while the mTLS tunnel is established. There is no "first packet drop" penalty — connections succeed on the first attempt.

### 3. Kubernetes-Native Identity

Workload identity is expressed as `spiffe://<trust-domain>/ns/<namespace>/sa/<service-account>`, aligning directly with Kubernetes RBAC primitives.

### 4. Production-Grade Identity with SPIRE

Workload certificates are managed by [SPIRE](https://spiffe.io/), the CNCF-graduated reference implementation of the SPIFFE standard. SPIRE provides automatic certificate rotation, workload attestation via Kubernetes node and pod selectors, and a trust chain rooted in a dedicated SPIRE server. The Cilium operator automates SPIRE registration entry management — when a namespace is enrolled, all service account identities are automatically registered with SPIRE.

### 5. Best of Both Worlds: Performance & Flexibility

By encrypting a TCP payload stream, ztunnel can avoid the per-packet encryption overhead inherent in IPsec. This provides a significant performance boost for TCP-heavy workloads. Meanwhile, users requiring encryption for non-TCP traffic or hitless upgrades can still opt for Cilium’s WireGuard or IPsec modes.

### 6. Ecosystem Convergence

By integrating ztunnel's L4 proxy capabilities with Cilium's eBPF-powered datapath and SPIRE's identity framework, this solution brings together three CNCF projects into a cohesive, standards-based mTLS stack. It establishes a clean path toward L7 waypoint proxies in the future, and it means Cilium users benefit from the combined innovation across the cloud native ecosystem.

## Comparison: Before and After

|                      | Existing Mutual Auth              | Native mTLS (Ztunnel)            |
|----------------------|-----------------------------------|----------------------------------|
| **Encryption**       | Requires enabling IPsec/WireGuard   | Built-in mTLS on every packet    |
| **First packet**     | Dropped until handshake completes | Held inline — no drops           |
| **Identity**         | `spiffe://.../identity/<num-id>`  | `spiffe://.../ns/<ns>/sa/<sa>`   |
| **Enrollment**       | Per CiliumNetworkPolicy rule      | Per namespace label              |
| **Cert source**      | SPIRE only                        | SPIRE (automated registration)   |
| **Granularity**      | Per identity pair (BPF cache)     | Per workload pair (H2 mux)       |
| **App changes**      | None                              | None                             |

## Getting Started

Enabling native mTLS requires three things:

1. **Enable the ztunnel feature** in your Cilium Helm values:

```yaml
ztunnel:
  enabled: true
```

2. **Deploy ztunnel** as a DaemonSet (managed via Helm).

3. **Enroll namespaces** by adding the label:

```bash
kubectl label namespace <name> io.cilium/mtls-enabled=true
```

That's it. All pods in enrolled namespaces will automatically have their traffic encrypted with mTLS. You can verify the status with:

```bash
cilium status
```

The ztunnel component will appear in the output, showing enrollment state and certificate health.

## A Joint Effort: Microsoft and Isovalent

Native mTLS in Cilium is the product of a deep, joint engineering collaboration between **Microsoft** and **Isovalent** (the creators of Cilium, now part of Cisco). Microsoft's team has been **the driving force of the ztunnel feature** in the upstream Cilium codebase, a reflection of the shared commitment to building this capability in the open, for the entire community.

The work spans multiple areas:

**Core control plane** — merged upstream into Cilium:
- Remote workload awareness ([#41945](https://github.com/cilium/cilium/pull/41945))
- ZDS server for pod enrollment ([#42364](https://github.com/cilium/cilium/pull/42364))
- Namespace-based mTLS enrollment ([#41944](https://github.com/cilium/cilium/pull/41944))
- XDS namespace filtering ([#43128](https://github.com/cilium/cilium/pull/43128))
- `cilium status` integration ([#43227](https://github.com/cilium/cilium/pull/43227))

**Datapath and deployment** — enabling production readiness:
- Idempotent in-pod iptables rules ([#42122](https://github.com/cilium/cilium/pull/42122))
- go-iptables library migration ([#42160](https://github.com/cilium/cilium/pull/42160))
- Helm-managed ztunnel DaemonSet ([#43763](https://github.com/cilium/cilium/pull/43763))
- Configurable SPIRE client ([#44136](https://github.com/cilium/cilium/pull/44136))
- Namespace enrollment reconciler for SPIRE ([#44275](https://github.com/cilium/cilium/pull/44275))

**Ztunnel fork** ([cilium/ztunnel](https://github.com/cilium/ztunnel)) — native SPIRE support:

A key piece of this collaboration was introducing native SPIRE support directly into ztunnel. Upstream ztunnel was designed exclusively for Istio's control plane and its built-in CA (istiod) — it had no concept of SPIRE as a certificate authority. We introduced SPIRE's Delegated Identity API into ztunnel ([#4](https://github.com/cilium/ztunnel/pull/4)), enabling ztunnel to obtain X.509-SVIDs directly from the local SPIRE agent via workload attestation. This includes PID-based attestation where each workload is individually verified by its container process ID, providing stronger security guarantees than metadata-only approaches. SPIRE is the **only** CA mode supported in Cilium's mTLS solution — there is no fallback to Istio's CA. We look forward to contributing these changes back to the upstream ztunnel project to ensure long-term ecosystem alignment.

- Unix socket support for XDS ([#1](https://github.com/cilium/ztunnel/pull/1))
- Native SPIRE workload attestation via Delegated Identity API ([#4](https://github.com/cilium/ztunnel/pull/4))
- CI: container image build pipeline ([#7](https://github.com/cilium/ztunnel/pull/7))

**Testing** — comprehensive validation:
- Encryption connectivity tests ([#43229](https://github.com/cilium/cilium/pull/43229))
- Feature checks and e2e scenarios ([#43255](https://github.com/cilium/cilium/pull/43255), [#43803](https://github.com/cilium/cilium/pull/43803))

# Conclusion: Open Source Drives Us All Forward

The journey to native mTLS in Cilium is a perfect case study in how open source drives innovation. By putting ideas into the public domain, engineers learn from, challenge, and build upon them. The evolution of the service mesh has seen many paths, from the early sidecar models of Istio and Linkerd to Cilium’s eBPF-powered sidecarless approach. Each iteration has been a response to the community's need for better performance and lower operational complexity.

When Istio Ambient introduced ztunnel, it offered a new data plane model that offered new efficiency gains in encrypting TCP payload streams. By integrating ztunnel support into Cilium, we are embracing the "best of both worlds." We combine the top-tier performance of ztunnel for TCP and native mTLS with Cilium’s robust policy control and the flexibility of WireGuard/IPsec for non-TCP traffic and hitless upgrades.

This integration is the result of a healthy feedback loop where great ideas are shared, refined, and reimagined. At Isovalent and Microsoft, we are proud to be part of a community where learning goes both ways. By converging the innovations of Cilium, Istio, and SPIRE, we ensure that the ecosystem remains modular, resilient, and focused on the user.

Because when open source wins, _users win_.
## Join Us at KubeCon Europe 2026

Come see native mTLS in action at [CiliumCon](https://events.linuxfoundation.org/kubecon-cloudnativecon-europe/co-located-events/ciliumcon/) and visit the Cilium project booth in the Project Pavilion throughout KubeCon + CloudNativeCon Europe 2026 in Amsterdam. Our team will be demonstrating the feature live and answering questions.

## Getting Involved

- [Cilium Documentation](https://docs.cilium.io/en/stable/)
- [Cilium GitHub](https://github.com/cilium/cilium)
- [Join the Cilium Slack](https://slack.cilium.io/)
- [Cilium Community](https://cilium.io/get-involved/)
- [CiliumCon Europe 2026](https://events.linuxfoundation.org/kubecon-cloudnativecon-europe/co-located-events/ciliumcon/)

---

*Native mTLS for Cilium — transparent, inline encryption with SPIRE-backed SPIFFE identity. No sidecars. No dropped packets. No compromises.*