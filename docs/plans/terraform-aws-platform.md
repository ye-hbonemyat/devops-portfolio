# terraform-aws-platform

## Purpose

A production-minded, educational AWS platform reference that demonstrates module boundaries, environment composition, security decisions, CI and maintainability. It must use fictional names and safe defaults and must not claim to be universally production-ready without adaptation.

## Proposed structure

```text
terraform-aws-platform/
├── .github/workflows/
├── modules/{vpc,eks,rds,iam}/
├── environments/{dev,staging,prod}/
├── docs/{architecture,security,decisions}.md
├── Makefile
└── README.md
```

## Scope

- Versioned providers and Terraform constraints.
- VPC boundaries, private/public subnet intent and egress tradeoffs.
- EKS control plane, managed node group interfaces and workload identity.
- RDS interfaces with encryption, backup and deletion-protection guidance.
- Narrow IAM module responsibilities; avoid a generic policy factory.
- Remote-state pattern documentation without real buckets or credentials.
- Environment composition that prevents copy/paste drift.
- CI: formatting, validation, TFLint, Checkov or Trivy config scan, and documentation checks.

## Quality gates

`terraform fmt -check -recursive`, `terraform validate` in initialized test fixtures, TFLint, security scan and example documentation. Any plan requires explicit credentials and approval; CI should not access a live account.

## Decisions to document

Module scope, state boundaries, environment promotion, Kubernetes version policy, network cost tradeoffs, secrets exclusion, provider upgrades and destruction protection.

## Delivery milestones

1. Architecture and ADRs.
2. VPC and IAM interfaces with tests.
3. EKS module and example.
4. RDS module and example.
5. Environment composition and CI.
6. Threat model, cost notes and release tag.
