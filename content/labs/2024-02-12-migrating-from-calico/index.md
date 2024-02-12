---
date: '2024-02-12T14:00:00.000Z'
externalUrl: 'https://isovalent.com/labs/migrating-from-calico/'
ogImage: cover.png
categories:
  - Networking
place: Online
title: 'Migrating From Calico'
ogSummary: 'Migrating to Cilium from another CNI is a very common task. But how do we minimize the impact during the migration? How do we ensure pods on the legacy CNI can still communicate to Cilium-managed during pods during the migration? How do we execute the migration safely, while avoiding a overly complex approach or using a separate tool such as Multus? With the use of the new Cilium CRD CiliumNodeConfig, running clusters can be migrated on a node-by-node basis, without disrupting existing traffic or requiring a complete cluster outage or rebuild. In this lab, you will migrate your cluster from Calico to Cilium.'
draft: false
from: 'Isovalent'
---
