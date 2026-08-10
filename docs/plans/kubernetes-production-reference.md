# kubernetes-production-reference

## Purpose

A provider-neutral set of manifests and operational guidance for production Kubernetes workloads. Examples should be renderable and validated without a cluster.

## Proposed content

- Namespaces and labels with clear ownership.
- Deployments and Services with selectors that are mechanically tested.
- Ingress as an optional overlay, with controller assumptions documented.
- Resource requests and limits with sizing guidance rather than fake production values.
- Startup, readiness and liveness probes.
- HPA examples and metrics prerequisites.
- PodDisruptionBudget and rollout considerations.
- Default-deny and explicitly allowed NetworkPolicies.
- Pod security context and restricted Pod Security Standards guidance.
- Secrets strategy documentation using SOPS or External Secrets, with no values committed.
- ServiceMonitor or equivalent monitoring example kept optional.
- Kustomize bases and environment overlays suitable for GitOps.

## Validation

Run Kustomize rendering, kubeconform against pinned Kubernetes schemas, policy checks with Kyverno CLI or Conftest, YAML formatting and broken-link checks. No cluster contact in CI.

## Documentation

Explain failure behavior, safe rollouts, autoscaling prerequisites, disruption math, network-policy testing, secret rotation and which parameters must be set from real workload evidence.
