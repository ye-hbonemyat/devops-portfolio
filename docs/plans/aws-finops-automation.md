# aws-finops-automation

## Purpose

A sanitized educational implementation inspired by the general pattern of scheduling non-production capacity. It must be original code, use fictional resources and avoid implying it is employer software.

## Proposed architecture

EventBridge Scheduler triggers a Step Functions state machine. Small Python Lambda functions discover only explicitly opted-in resources, validate guardrails, perform reversible scale actions and emit structured audit events and metrics.

## Guardrails

- Tag-based opt-in; never broad account-wide discovery by default.
- Explicit account and region allowlists.
- Dry-run mode as the default.
- Protected-resource tag and production-name rejection.
- Idempotent actions and bounded retries.
- Least-privilege IAM with documented permissions.
- Manual override and clear recovery instructions.
- Budget and CloudWatch observability guidance.

## Repository content

Terraform infrastructure, typed Python, unit tests for selection and guardrails, Step Functions ASL, architecture diagram, threat model, cost model using illustrative inputs, runbook and CI.

## Validation

Terraform formatting/validation/TFLint, Python lint/type/test, ASL validation where practical, IAM policy scan and secret scan. Deployment remains opt-in and requires explicit AWS credentials.
