export const profile = {
  name: 'Md Sohanur Rahman',
  title: 'Backend Software Engineer',
  location: 'Pabna, Bangladesh',
  tagline: 'I build scalable backends.',
  summary:
    'Backend Engineer with 3+ years building scalable, high-traffic systems in Node.js, NestJS, and TypeScript — across travel-tech, AI-powered matrimony, and multi-tenant property management. Strong with third-party integrations (Stripe, Travelport, RateHawk, Twilio) and deploying on AWS and Azure.',
}

export const socials = {
  github: 'https://github.com/rahman-sohan',
  linkedin: 'https://www.linkedin.com/in/rahmansohan/',
  email: 'mailto:mdsohanurrahman63@gmail.com',
}

export type Job = {
  company: string
  url: string
  productUrl?: string
  logo: string
  role: string
  type: string
  period: string
  location: string
  blurb: string
  bullets: string[]
  tech: string[]
}

export const jobs: Job[] = [
  {
    company: 'Walima Ltd (Durbin Inspiring Limited)',
    url: 'https://walima.app',
    logo: '/logos/logo.svg',
    role: 'Software Engineer',
    type: 'Hybrid',
    period: 'Jul 2025 – Present',
    location: 'Mirpur DOHS, Dhaka',
    blurb: 'AI-powered matrimony platform focused on intelligent matchmaking and meaningful connections.',
    bullets: [
      'Built a hybrid matchmaking engine combining weighted scoring across 8 compatibility dimensions with pgvector semantic search — reducing irrelevant match suggestions by an estimated 35%.',
      'Designed BullMQ async pipelines and a Redis caching layer, improving average API response time for recommendation feeds.',
      'Shipped a real-time chat system and multi-channel notifications (Firebase FCM, Twilio SMS, Nodemailer), plus Stripe subscription and payment flows with webhook handling.',
      'Set up AWS S3 media storage, Sentry error monitoring, and role-based admin management with fraud detection rules.',
    ],
    tech: ['NestJS', 'TypeScript', 'PostgreSQL', 'Redis', 'pgvector', 'BullMQ', 'Stripe', 'Twilio', 'AWS S3'],
  },
  {
    company: 'Sharetrip Ltd.',
    url: 'https://sharetrip.net',
    logo: '/logos/sharetrip.png',
    role: 'Software Engineer',
    type: 'On-site',
    period: 'Apr 2023 – Apr 2025',
    location: 'Bashundhara R/A, Dhaka',
    blurb: "First & leading all-in-one travel solution company in Bangladesh.",
    bullets: [
      'Optimised hotel search across 3M+ records using MongoDB autocomplete and geoSearch with 2dsphere indexing — cutting average search latency by ~40%.',
      'Led backend migration from Sails.js to NestJS and database migration from Elasticsearch to MongoDB, improving maintainability and reducing infrastructure cost.',
      'Integrated RateHawk and Travelport APIs to enable two-way hotel distribution between local and international partners for B2B and B2C platforms.',
      'Built and maintained hotel booking, payments, refunds, and authentication services used by hundreds of daily active business clients.',
    ],
    tech: ['NestJS', 'Node.js', 'TypeScript', 'MySQL', 'MongoDB', 'Redis', 'RateHawk', 'Travelport'],
  },
  {
    company: 'ScaleBridger Corp.',
    url: 'https://scalebridger.com',
    productUrl: 'https://www.trps.com',
    logo: '/logos/scalebridger.png',
    role: 'Backend (TypeScript) Developer',
    type: 'Part-time',
    period: 'Apr 2025 – Mar 2026',
    location: 'Austin, Texas, USA',
    blurb: 'Multi-tenant property management platform connecting tenants and property managers.',
    bullets: [
      'Built a multi-tenant property management REST API using Node.js, TypeScript, Express, PostgreSQL, and Sequelize with JWT authentication and RBAC.',
      'Developed a Socket.IO real-time booking chat system supporting text, templates, and attachments for tenant–manager communication.',
      'Integrated Azure Blob Storage for document/media uploads, Twilio SMS for booking alerts, and SendGrid for transactional email.',
    ],
    tech: ['Node.js', 'TypeScript', 'Express', 'PostgreSQL', 'Sequelize', 'Socket.IO', 'Azure Blob', 'Twilio', 'SendGrid'],
  },
]

export const skillGroups = [
  {
    name: 'Languages & Frameworks',
    items: ['Node.js', 'NestJS', 'Express', 'JavaScript', 'TypeScript'],
  },
  {
    name: 'Databases & Caching',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  },
  {
    name: 'API Integrations',
    items: ['Stripe', 'Travelport', 'RateHawk', 'Twilio', 'Guesty', 'Firebase FCM', 'SendGrid'],
  },
  {
    name: 'Tools & Practices',
    items: ['Docker', 'Linux', 'Git', 'RabbitMQ', 'TypeORM', 'Prisma', 'Mongoose', 'Elasticsearch', 'Swagger', 'REST APIs'],
  },
]

export const exploring =
  'pgvector semantic search at scale · event-driven pipelines (BullMQ, RabbitMQ) · multi-tenant architecture · AWS & Azure deployments.'

export const highlights = [
  {
    label: 'Problem Solving',
    text: '500+ programming problems solved across LeetCode and LightOJ; regular contests on Codeforces and vjudge.',
  },
  {
    label: 'Award',
    text: 'ITEE FE Full-Passer Exam 2021 (FE02-0054) — achieved 26th position in Bangladesh.',
  },
]

export const education = {
  school: 'University of Rajshahi',
  degree: 'B.Sc. (Engg.) in Computer Science and Engineering',
  period: '2017 – 2022',
  location: 'Rajshahi, Bangladesh',
}
