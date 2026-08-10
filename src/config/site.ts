export const site = {
  name: 'Ye Hbone Myat',
  title: 'Senior Cloud Infrastructure & DevOps Consultant',
  description:
    'Senior Cloud Infrastructure and DevOps Consultant specializing in AWS, Kubernetes, Terraform, cloud migration, GitOps, reliability and cloud cost optimization.',
  email: 'yehbone.m@gmail.com',
  location: 'Bangkok, Thailand',
  siteUrl: 'https://example.com', // TODO: replace after choosing a domain.
  githubUrl: null, // TODO: add the exact GitHub profile URL.
  linkedinUrl: null, // TODO: add the exact LinkedIn profile URL.
  resumeUrl: '/resume/ye-hbone-myat-resume.pdf',
} as const;

export const navigation = [
  { href: '/services/', label: 'Services' },
  { href: '/work/', label: 'Work' },
  { href: '/about/', label: 'About' },
  { href: '/lab/', label: 'Lab' },
  { href: '/contact/', label: 'Contact' },
] as const;
