---
date: '2023-04-12T11:00:00.000Z'
externalUrl: 'https://isovalent.com/labs/migrating-to-cilium/'
ogImage: cover.jpg
categories:
  - Networking
place: Online
title: 'Migrating to Cilium'
ogSummary: 'Migrating to Cilium from another CNI is a very common task. But how do we minimize the impact during the migration? How do we ensure pods on the legacy CNI can still communicate to Cilium-managed during pods during the migration? How do we execute the migration safely, while avoiding a overly complex approach or using a separate tool such as Multus?
With the use of the new Cilium CRD CiliumNodeConfig, running clusters can be migrated on a node-by-node basis, without disrupting existing traffic or requiring a complete cluster outage or rebuild.
In this lab, you will migrate your cluster from an existing CNI to Cilium. While we use Flannel in this simple lab, you can leverage the same approach for other CNIs.'
draft: false
from: 'Isovalent'
---
