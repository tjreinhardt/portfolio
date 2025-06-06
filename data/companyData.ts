import { CompanyInfo, AIService, Customer, BusinessModel, LaunchInfo, Social } from '../typings';

export const companyInfo: CompanyInfo = {
  _createdAt: '2024-01-01',
  _id: '1',
  _updatedAt: '2024-01-01',
  _rev: '1',
  _type: 'companyInfo' as const,
  name: "Breme AI",
  tagline: "Revolutionizing Food Industry Intelligence",
  description: "Strategic POS acquisition combined with AI-powered food intelligence creates the most valuable data platform in the $9.4T food industry",
  mission: "To become the central nervous system of the food industry through strategic POS acquisition and AI-powered data intelligence",
  vision: "A world where food industry data prevents restaurant failures, ensures food safety, and optimizes the entire food ecosystem",
  values: [
    'Data Transparency & Privacy',
    'Restaurant Success & Survival',
    'Food Safety & Health',
    'Sustainable Growth',
    'Innovation & Excellence'
  ],
  founded: "2024",
  headquarters: "Reno, NV",
  stage: "Pre-Seed",
  logo: '/logo-placeholder.svg',
  heroImage: '/hero-bg.svg',
  aboutCompany: 'Breme AI is transforming the food industry through comprehensive data intelligence. From our proprietary POS systems that capture granular product data at the source, to AI-powered insights that optimize everything from supply chains to customer health outcomes, we provide unprecedented visibility into every stage of the food lifecycle.',
  socials: []
};

export const aiServices: AIService[] = [
  {
    _createdAt: '2024-01-01',
    _id: '1',
    _updatedAt: '2024-01-01',
    _rev: '1',
    _type: 'aiService' as const,
    id: "1",
    title: "POS Acquisition & Integration Platform",
    description: "Strategic acquisition of established POS companies with immediate access to restaurant data and client relationships",
    icon: "🏢",
    features: [
      "Target companies with 100+ restaurant clients",
      "Seamless AI integration into existing systems",
      "Preserve client relationships during transition", 
      "Immediate data access from day one"
    ],
    benefits: [
      "Instant market access vs years of customer acquisition",
      "Established revenue streams from day one",
      "Proven business models with existing profitability",
      "Built-in trust and client relationships"
    ],
    pricing: "Strategic acquisition investment",
    implementation: "6-18 months per acquisition"
  },
  {
    _createdAt: '2024-01-01',
    _id: '2',
    _updatedAt: '2024-01-01',
    _rev: '1',
    _type: 'aiService' as const,
    id: "2", 
    title: "Data-for-Discount Intelligence Engine",
    description: "Revolutionary pricing model where restaurants save money in exchange for data sharing with complete transparency and control",
    icon: "💰",
    features: [
      "25% discount for anonymized transaction data",
      "50% discount + revenue share for comprehensive data",
      "Complete opt-in/opt-out control",
      "Transparent data usage policies"
    ],
    benefits: [
      "Solves restaurant failure crisis (17% fail year 1)",
      "Immediate cost savings for struggling restaurants",
      "Revenue sharing creates ongoing partnership",
      "Builds trust through transparency"
    ],
    pricing: "Discount-based revenue model",
    implementation: "Real-time integration"
  },
  {
    _createdAt: '2024-01-01',
    _id: '3',
    _updatedAt: '2024-01-01',
    _rev: '1',
    _type: 'aiService' as const,
    id: "3",
    title: "Health & Safety Intelligence Network", 
    description: "AI-powered food safety and health monitoring across the entire food ecosystem to prevent outbreaks and optimize nutrition",
    icon: "🛡️",
    features: [
      "Real-time contamination detection",
      "Supply chain traceability",
      "Allergen prevention systems",
      "Health trend analysis"
    ],
    benefits: [
      "Prevent foodborne illness (48M Americans affected annually)",
      "Reduce food waste (40% of food is wasted globally)",
      "Supply chain optimization ($74B lost annually)",
      "Predictive health insights"
    ],
    pricing: "Enterprise licensing + partnerships",
    implementation: "Continuous monitoring"
  }
];

// Customer Benefits (End-Consumer Value Propositions)
export const customers = [
  {
    _createdAt: '2024-01-01',
    _id: '1',
    _updatedAt: '2024-01-01',
    _rev: '1',
    _type: 'customer' as const,
    id: "1",
    name: "Smart Dining Rewards",
    industry: "Consumer Benefits Program",
    size: "Individual Consumers",
    challenge: "Lack of dining rewards and personalized recommendations",
    solution: "10% cashback plus personalized meal recommendations",
    results: [
      "10% cashback on all participating restaurants",
      "Personalized meal recommendations",
      "Health goal tracking integration",
      "Exclusive member-only deals"
    ],
    testimonial: "Get 10% cashback on every meal plus personalized recommendations based on your health goals and preferences.",
    avatar: "/customers/rewards.svg",
    status: "Active"
  },
  {
    _createdAt: '2024-01-01',
    _id: '2',
    _updatedAt: '2024-01-01',
    _rev: '1',
    _type: 'customer' as const,
    id: "2", 
    name: "Safe Ride Home Program",
    industry: "DUI Prevention Initiative",
    size: "Community Safety",
    challenge: "Drunk driving incidents from restaurant patrons",
    solution: "Free Uber rides home when drinking detected",
    results: [
      "Free rides home after drinking",
      "Partnership with Uber/Lyft",
      "24/7 availability",
      "Community safety focus"
    ],
    testimonial: "Free Uber rides home when you've been drinking. We're committed to keeping our community safe.",
    avatar: "/customers/safety.svg",
    status: "Active"
  },
  {
    _createdAt: '2024-01-01',
    _id: '3',
    _updatedAt: '2024-01-01',
    _rev: '1',
    _type: 'customer' as const,
    id: "3",
    name: "Social Savings Network", 
    industry: "Group Dining Benefits",
    size: "Social Groups",
    challenge: "Lack of group dining incentives",
    solution: "Group discounts and social dining rewards",
    results: [
      "Group dining discounts",
      "Friend referral bonuses", 
      "Social dining rewards",
      "Community building"
    ],
    testimonial: "Bring friends and save more. Group discounts, friend referrals, and social dining rewards.",
    avatar: "/customers/social.svg",
    status: "Active"
  },
  {
    _createdAt: '2024-01-01',
    _id: '4',
    _updatedAt: '2024-01-01',
    _rev: '1',
    _type: 'customer' as const,
    id: "4",
    name: "Health & Wellness Tracking",
    industry: "Nutrition Integration", 
    size: "Health-Conscious Consumers",
    challenge: "Difficulty tracking nutrition from restaurant meals",
    solution: "Seamless fitness app integration for nutrition tracking",
    results: [
      "MyFitnessPal integration",
      "Apple Health connectivity",
      "Nutrition goal tracking",
      "Health insights"
    ],
    testimonial: "Seamless integration with fitness apps to track nutrition and achieve your health goals.",
    avatar: "/customers/health.svg",
    status: "Active"
  }
];

export const businessModel: BusinessModel = {
  _createdAt: '2024-01-01',
  _id: '1',
  _updatedAt: '2024-01-01',
  _rev: '1',
  _type: 'businessModel' as const,
  title: "Strategic POS Acquisition + AI Data Platform",
  description: "Acquire established POS companies to gain immediate access to restaurant data, then enhance with AI capabilities",
  keyComponents: [
    {
      title: 'POS System Acquisition',
      description: 'Strategic acquisition of POS companies with 100+ restaurant clients',
      details: [
        'Target POS systems with 100+ restaurant clients',
        'Focus on profitable, established companies',
        'Maintain existing client relationships',
        'Preserve operational continuity'
      ]
    },
    {
      title: 'AI Integration Platform',
      description: 'Seamless integration of AI capabilities into existing POS infrastructure',
      details: [
        'Real-time data processing and analysis',
        'Predictive analytics for business optimization',
        'Health and safety monitoring systems',
        'Supply chain intelligence'
      ]
    },
    {
      title: 'Data-for-Discount Model',
      description: 'Revolutionary pricing where restaurants save money by sharing data',
      details: [
        'Standard Plan: Market rate, no data sharing (0% savings)',
        'Smart Insights Plan: 25% discount for anonymized data',
        'Data Partner Plan: 50% discount + revenue share',
        'Complete opt-in/opt-out control'
      ]
    }
  ],
  revenueStreams: [
    {
      source: "POS Subscription Revenue",
      description: "Monthly/annual subscriptions from acquired POS systems",
      percentage: "40%",
      model: "Recurring subscription"
    },
    {
      source: "Data Licensing",
      description: "Licensing food industry data to health, finance, and food companies",
      percentage: "30%",
      model: "Enterprise licensing"
    },
    {
      source: "Partnership Revenue",
      description: "Revenue sharing from integrations with apps and services",
      percentage: "20%",
      model: "Revenue sharing"
    },
    {
      source: "Enterprise Analytics",
      description: "Custom analytics and insights for large enterprise clients",
      percentage: "10%",
      model: "Project-based"
    }
  ],
  competitiveAdvantages: [
    "Source-level data access through POS acquisition creates unmatched data quality",
    "Immediate market access vs years of customer acquisition",
    "Data-for-discount model solves restaurant failure crisis",
    "Network effects: more restaurants = better insights = more valuable partnerships"
  ]
};

export const launchInfo: LaunchInfo = {
  _createdAt: '2024-01-01',
  _id: '1',
  _updatedAt: '2024-01-01',
  _rev: '1',
  _type: 'launchInfo' as const,
  currentStage: "Pre-Seed Funding",
  stageDescription: "Seeking $500K-$1.2M to build founding team and develop AI prototype",
  timeline: [
    {
      phase: "Pre-Seed Funding",
      status: "Current",
      duration: "0-6 months",
      description: "Build founding team and develop AI prototype",
      milestones: [
        "Full-time founding team",
        "AI prototype development", 
        "Initial partnership discussions",
        "Market validation"
      ]
    },
    {
      phase: "Prototype Development", 
      status: "Planned",
      duration: "6-18 months",
      description: "Build AI integration platform and establish partnerships",
      milestones: [
        "AI integration platform build",
        "Data privacy framework",
        "Partnership pilot programs",
        "Series A preparation"
      ]
    },
    {
      phase: "Strategic Acquisition",
      status: "Planned",
      duration: "18-30 months", 
      description: "Execute first POS acquisition and launch data platform",
      milestones: [
        "First POS company acquisition",
        "100+ restaurant integration",
        "Data platform launch",
        "Partnership ecosystem activation"
      ]
    },
    {
      phase: "Market Launch",
      status: "Planned",
      duration: "30-42 months",
      description: "Scale to multi-state presence and platform dominance",
      milestones: [
        "Multi-state market presence",
        "10,000+ restaurant network",
        "Major partnership launches",
        "Platform ecosystem dominance"
      ]
    }
  ],
  fundingNeeds: {
    preSeed: {
      amount: "$500K-$1.2M",
      purpose: "Team building and prototype development",
      timeline: "0-6 months",
      keyUses: [
        "Full-time founding team salaries",
        "AI prototype development",
        "Initial partnership development",
        "Market validation research"
      ]
    },
    seedRound: {
      amount: "$50M-$200M",
      purpose: "Strategic POS acquisition and platform launch",
      timeline: "18-30 months",
      keyUses: [
        "First POS company acquisition",
        "AI platform development",
        "Partnership ecosystem build",
        "Market expansion"
      ]
    }
  },
  risks: [
    "POS acquisition targets may be overvalued",
    "Restaurant industry adoption challenges",
    "Data privacy regulatory changes",
    "Competition from established players"
  ],
  mitigationStrategies: [
    "Thorough due diligence on acquisition targets",
    "Gradual rollout with pilot programs",
    "Proactive compliance and privacy-first approach",
    "Focus on unique data-for-discount value proposition"
  ]
};

export const socials: Social[] = [
  {
    _id: 'social-1',
    _type: 'social',
    _createdAt: '2024-01-01',
    _updatedAt: '2024-01-01',
    _rev: '1',
    title: 'LinkedIn',
    url: 'https://linkedin.com/company/breme-ai'
  },
  {
    _id: 'social-2',
    _type: 'social',
    _createdAt: '2024-01-01',
    _updatedAt: '2024-01-01',
    _rev: '1',
    title: 'Twitter',
    url: 'https://twitter.com/breme_ai'
  },
  {
    _id: 'social-3',
    _type: 'social',
    _createdAt: '2024-01-01',
    _updatedAt: '2024-01-01',
    _rev: '1',
    title: 'GitHub',
    url: 'https://github.com/breme-ai'
  }
];

export default {
  companyInfo,
  aiServices,
  customers,
  businessModel,
  launchInfo,
  socials
}; 