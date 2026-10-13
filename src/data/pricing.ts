import { PricingPlan } from '../types';

export const WHATSAPP_PHONE = '918928282005';
export const DISPLAY_PHONE = '+91 8928282005';

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'monthly',
    name: 'Monthly Plan',
    tagline: 'Flexible month-to-month access for steady skill building',
    price: '₹500',
    frequency: 'per month',
    totalCommitment: '₹6,000 total for 12 months',
    description: 'Pay on a monthly subscription basis with continuous access to the learning app, modules, and community as you progress.',
    features: [
      'Full 12-month modular curriculum access as released',
      'Dedicated learning app & mobile/web access',
      'On-demand recorded lectures & study materials',
      'Downloadable PDFs & digital cheat-sheets',
      'App-based exams & module quizzes',
      'Student community & live doubt-solving sessions',
      'Module completion certificates upon passing',
      'Practical projects & portfolio guidance',
      'Pay-as-you-go monthly flexibility'
    ],
    terms: [
      'Billed monthly at ₹500/month',
      'No hidden platform charges',
      'Total cost across 12 months: ₹6,000'
    ],
    whatsappMessage: 'Hello Adflect Team, I want to enrol in the Adflect NextGen Program on the Monthly Plan (₹500/month, ₹6,000 total for 12 months). Please guide me through the admission process.',
    popular: false
  },
  {
    id: 'yearly',
    name: 'Yearly Plan',
    tagline: 'Complete 12-month program access with maximum upfront savings',
    price: '₹5,000',
    frequency: 'one-time for full 12 months',
    totalCommitment: 'Save ₹1,000 compared to monthly billing',
    savingsNote: 'Save ₹1,000 instantly',
    badge: 'Best Value',
    description: 'One single upfront payment giving you complete, uninterrupted access to all 12 months of the program with top priority support.',
    features: [
      'All 14 core curriculum areas & updates for 12 months',
      'Instant ₹1,000 savings compared to monthly plan',
      'Uninterrupted access to dedicated learning app',
      'Complete repository of recorded lectures & notes',
      'All downloadable PDFs, templates & resources',
      'Module certificates & full program graduation certificate',
      'Priority live doubt-solving & portfolio reviews',
      'Career, freelancing & startup advisory',
      'Priority consideration for entrepreneur collaborations (subject to selection)'
    ],
    terms: [
      'One-time payment of ₹5,000 for the full 12-month cycle',
      'Saves ₹1,000 over monthly plan (₹6,000 vs ₹5,000)',
      'Direct admission confirmation via WhatsApp desk'
    ],
    whatsappMessage: 'Hello Adflect Team, I want to enrol in the Adflect NextGen Program on the Yearly Plan (₹5,000 one-time / Save ₹1,000). Please guide me through the admission process.',
    popular: true
  }
];

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export const GENERAL_WHATSAPP_MESSAGE = 'Hello Adflect Team, I have an enquiry regarding the Adflect NextGen Program. Could you please share more details about the curriculum and admissions?';
