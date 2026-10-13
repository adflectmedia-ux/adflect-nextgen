export interface CurriculumArea {
  id: string;
  number: string;
  title: string;
  category: 'Tech & AI' | 'Creative' | 'Business & Growth' | 'Career';
  simpleExplanation: string; // Plain explanation: Yeh hota kya hai
  whatYouWillDo: string; // What you actually learn and do
  aiAdvantage: string; // AI workflow advantage
  practicalOutput: string; // Real-world practical output
  iconName: string;
}

export interface DeliverableItem {
  id: string;
  title: string;
  description: string;
  category: string;
  tag: string;
  highlight?: boolean;
}

export interface PricingPlan {
  id: 'monthly' | 'yearly';
  name: string;
  tagline: string;
  price: string;
  frequency: string;
  totalCommitment: string;
  savingsNote?: string;
  badge?: string;
  description: string;
  features: string[];
  terms: string[];
  whatsappMessage: string;
  popular?: boolean;
}
