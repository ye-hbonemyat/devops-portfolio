# gitops-argocd-reference

## Purpose

A concise Argo CD reference showing environment promotion, reconciliation, drift handling and rollback without embedding organization-specific assumptions.

## Proposed design

Use an ApplicationSet-based structure unless the tutorial comparison demonstrates that app-of-apps is clearer for the final scope. Keep platform add-ons and product workloads separated.

```text
clusters/{dev,staging,prod}/
apps/<app>/base/
apps/<app>/overlays/{dev,staging,prod}/
platform/
argocd/
docs/
```

## Demonstrate

- Kustomize overlays or Helm values with an explicit selection rationale.
- Pull-request promotion using immutable image references.
- Automated reconciliation policy by environment.
- Sync waves only where dependencies genuinely require ordering.
- Drift visibility, controlled self-healing and rollback procedure.
- Argo CD project boundaries, destination restrictions and repository access guidance.
- SOPS integration documentation without keys or encrypted employer material.
- Bootstrap trust boundary and disaster recovery considerations.

## Validation

Render every environment, validate against schemas, enforce policies, scan config and check documentation links. Do not require a live cluster for repository CI.
