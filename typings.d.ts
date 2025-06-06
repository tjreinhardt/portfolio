interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}


interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  address: string;
  backgroundInformation: string;
  email: string;
  role: string;
  heroImage: Image;
  name: string;
  phoneNumber: string;
  profilePic: Image;
}

// New Company-focused interfaces
export interface CompanyInfo extends SanityBody {
  _type: "companyInfo";
  name: string;
  tagline: string;
  description: string;
  mission: string;
  vision: string;
  values: string[];
  founded: string;
  headquarters: string;
  stage: string;
  logo: string;
  heroImage: string;
  aboutCompany: string;
  socials: Social[];
}

export interface AIService extends SanityBody {
  _type: "aiService";
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  benefits: string[];
  pricing: string;
  implementation: string;
}

export interface Customer extends SanityBody {
  _type: "customer";
  id: string;
  name: string;
  industry: string;
  size: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial: string;
  avatar: string;
  status: string;
}

export interface BusinessModel extends SanityBody {
  _type: "businessModel";
  title: string;
  description: string;
  keyComponents: KeyComponent[];
  revenueStreams: RevenueStream[];
  competitiveAdvantages: string[];
}

export interface LaunchInfo extends SanityBody {
  _type: "launchInfo";
  currentStage: string;
  stageDescription: string;
  timeline: TimelinePhase[];
  fundingNeeds: {
    preSeed: FundingRound;
    seedRound: FundingRound;
  };
  risks: string[];
  mitigationStrategies: string[];
}

export interface Technology extends SanityBody {
  _type: "skill";
  image: Image;
  progress: number;
  title: string;
}

export interface Skill extends SanityBody {
  _type: "skill";
  image: Image;
  progress: number;
  title: string;
}

export interface Experience extends SanityBody {
  _type: "experience";
  company: string;
  companyImage: Image;
  dateStarted: string;
  dateEnded: string;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  technologies: Technology[];
}

export interface Project extends SanityBody {
  _type: "project";
  title: string;
  image: Image;
  linkToBuild: string;
  summary: string;
  technologies: Technology[];
}

export interface Social extends SanityBody {
  _type: "social";
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  url: string;
}

interface RevenueStream {
  source: string;
  description: string;
  percentage: string;
  model: string;
}

interface KeyComponent {
  title: string;
  description: string;
  details: string[];
}

interface TimelinePhase {
  phase: string;
  status: string;
  duration: string;
  description: string;
  milestones: string[];
}

interface FundingRound {
  amount: string;
  purpose: string;
  timeline: string;
  keyUses: string[];
}

interface KeyMetric {
  metric: string;
  value: string;
  description: string;
  icon: string;
}

interface PricingPlan {
  name: string;
  price: string;
  dataSharing: string;
  description: string;
  features: string[];
  savings: string;
  ideal: string;
  commitment: string;
}
