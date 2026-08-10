export interface CaseStudy {
  slug: string;
  title: string;
  summary: string;
  result: string;
  overview: string;
  challenge: string;
  constraints: string[];
  approach: string[];
  workflow: string[];
  decisions: string[];
  outcome: string;
  technologies: string[];
  lessons: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'zero-downtime-multi-cloud-migration',
    title: 'Zero-Downtime Multi-Cloud Migration',
    summary:
      'A staged, Terraform-led move from DigitalOcean toward AWS and GCP.',
    result: 'Approximately 30% lower cost · zero downtime',
    overview:
      'A production property technology platform needed to improve infrastructure efficiency by moving workloads from DigitalOcean toward AWS and GCP.',
    challenge:
      'Change the underlying cloud foundation without interrupting the product, while creating a more repeatable operating model and improving resource utilization.',
    constraints: [
      'Production continuity was essential.',
      'The migration crossed cloud providers and Kubernetes environments.',
      'Infrastructure details and company-specific topology remain confidential.',
    ],
    approach: [
      'Represented target infrastructure with Terraform to make changes reviewable and repeatable.',
      'Planned a staged rollout with explicit validation points rather than a single cutover event.',
      'Used observability to compare behavior during transition and maintained a rollback mindset throughout.',
      'Standardized infrastructure definitions to reduce configuration divergence across environments.',
    ],
    workflow: [
      'Assess',
      'Codify with Terraform',
      'Stage workloads',
      'Validate',
      'Cut over',
    ],
    decisions: [
      'Treat infrastructure consistency as a migration control, not only a maintenance benefit.',
      'Separate migration readiness from cutover readiness.',
      'Measure utilization after the move to confirm the new platform delivered the intended efficiency.',
    ],
    outcome:
      'The migration completed with zero downtime, reduced infrastructure cost by approximately 30%, and improved resource utilization.',
    technologies: ['Terraform', 'Kubernetes', 'AWS', 'GCP', 'DigitalOcean'],
    lessons:
      'Safe migrations are operational programs: infrastructure code, staged delivery, observability, validation and rollback planning must work together.',
  },
  {
    slug: 'automating-aws-cost-optimization',
    title: 'Automating AWS Cost Optimization',
    summary:
      'Policy-driven scale-down automation for non-production infrastructure.',
    result: 'Approximately 15% infrastructure cost reduction',
    overview:
      'Non-production infrastructure presented a recurring opportunity to reduce spend when full capacity was not required.',
    challenge:
      'Turn a repetitive cost-saving task into dependable automation without creating operational surprises for engineering teams.',
    constraints: [
      'Automation needed clear scheduling and predictable behavior.',
      'Safeguards and maintainability mattered as much as immediate savings.',
      'Only the approved implementation details are described here.',
    ],
    approach: [
      'Used AWS Step Functions to coordinate the automation workflow.',
      'Implemented Python Lambda functions for controlled scale-down actions.',
      'Designed schedules around non-production usage patterns.',
      'Kept the workflow observable and structured for safe maintenance.',
    ],
    workflow: ['Schedule', 'Evaluate', 'Scale down', 'Record outcome'],
    decisions: [
      'Use orchestration to make each step visible and easier to reason about.',
      'Automate a well-understood operating policy instead of relying on ad hoc scripts.',
      'Favor reversible scaling actions and explicit failure handling.',
    ],
    outcome:
      'The automation reduced infrastructure cost by approximately 15% while removing repetitive manual work.',
    technologies: ['AWS Step Functions', 'AWS Lambda', 'Python', 'AWS'],
    lessons:
      'FinOps improvements are most durable when cost controls become part of the platform’s operating model.',
  },
  {
    slug: 'production-kubernetes-gitops-platform',
    title: 'Production Kubernetes & GitOps Platform',
    summary:
      'A reproducible platform approach spanning delivery, security and observability.',
    result: 'Consistent, reviewable production operations',
    overview:
      'Production Kubernetes environments require more than cluster provisioning: teams need a dependable path from infrastructure definition to workload delivery and operations.',
    challenge:
      'Create a platform practice where infrastructure and application changes are reproducible, reviewable, observable and secured throughout their lifecycle.',
    constraints: [
      'The public case study intentionally excludes internal topology and scale.',
      'Multiple platform concerns had to be treated as one operating system.',
      'Controls needed to support delivery rather than become manual bottlenecks.',
    ],
    approach: [
      'Used Terraform and Terragrunt for infrastructure consistency.',
      'Managed Kubernetes packaging with Helm and delivery with Argo CD.',
      'Applied SOPS-backed secrets workflows and layered cloud and runtime security tooling.',
      'Integrated observability and audit signals into production operations.',
    ],
    workflow: ['Terraform', 'EKS', 'Helm', 'Argo CD', 'Observability'],
    decisions: [
      'Use Git as the review and reconciliation boundary.',
      'Keep secret values outside plain-text configuration.',
      'Design observability and security alongside platform delivery, not after it.',
    ],
    outcome:
      'The platform approach established a consistent foundation for production delivery, security controls, change review and operational visibility.',
    technologies: [
      'AWS',
      'EKS',
      'Terraform',
      'Terragrunt',
      'Docker',
      'Kubernetes',
      'Helm',
      'Argo CD',
      'SOPS',
      'Datadog',
      'CloudTrail',
      'Cloudflare',
      'GuardDuty',
      'Sysdig',
    ],
    lessons:
      'A production platform is a set of operating conventions as much as a set of tools. Reconciliation, security and telemetry need clear ownership.',
  },
  {
    slug: 'disaster-recovery-readiness',
    title: 'Disaster Recovery Readiness',
    summary:
      'Exercises that turned recovery objectives into tested operational practice.',
    result: 'Two drills met established RTO/RPO targets',
    overview:
      'Disaster recovery plans provide confidence only when teams can execute and verify them under controlled conditions.',
    challenge:
      'Coordinate recovery exercises across technical and non-technical stakeholders while preserving the confidentiality of systems and recovery targets.',
    constraints: [
      'Recovery target values and internal architecture are confidential.',
      'Exercises needed clear roles, evidence and communication.',
      'Normal operations had to remain protected during drills.',
    ],
    approach: [
      'Defined the exercise scope, dependencies and success criteria.',
      'Prepared runbooks, communication paths and evidence collection.',
      'Executed recovery steps with time and integrity checks.',
      'Captured findings and follow-up improvements after each exercise.',
    ],
    workflow: ['Plan', 'Brief', 'Exercise', 'Verify', 'Improve'],
    decisions: [
      'Treat stakeholder communication as part of recovery engineering.',
      'Validate both recovery timing and service correctness.',
      'Use every exercise to improve the next runbook and readiness review.',
    ],
    outcome:
      'Two disaster recovery drills were successfully executed and met the established RTO/RPO targets.',
    technologies: ['Disaster recovery', 'Runbooks', 'Observability', 'AWS'],
    lessons:
      'Recovery readiness is built through repeatable practice, evidence and iteration—not documentation alone.',
  },
];
