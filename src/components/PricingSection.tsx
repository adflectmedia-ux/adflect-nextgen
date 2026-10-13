import React, { useState } from 'react';
import { 
  Check, 
  MessageCircle, 
  Phone, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight,
  Info
} from 'lucide-react';
import { PRICING_PLANS, DISPLAY_PHONE, getWhatsAppUrl, GENERAL_WHATSAPP_MESSAGE } from '../data/pricing';

export const PricingSection: React.FC = () => {
  const [selectedBillingTab, setSelectedBillingTab] = useState<'all' | 'monthly' | 'yearly'>('all');

  return (
    <section id="pricing" className="py-24 bg-[#05070D] relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-sky-600/10 via-blue-600/15 to-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-mono font-semibold text-sky-400 uppercase tracking-widest mb-3">
            04. Transparent Investment
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Simple, Accessible Pricing for <span className="text-gradient">Every Learner</span>
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            High-caliber agency skills without exorbitant fees. Choose flexible monthly billing or pay once upfront to save ₹1,000 on the complete 12-month program.
          </p>

          {/* Quick admissions WhatsApp phone highlight */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs">
            <span className="text-slate-400">Admissions Desk Direct:</span>
            <a
              href={`tel:${DISPLAY_PHONE.replace(/\s+/g, '')}`}
              className="font-mono text-sky-400 hover:text-sky-300 font-semibold flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{DISPLAY_PHONE}</span>
            </a>
            <span className="text-slate-600">·</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Admission Processing</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid (Monthly vs Yearly) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {PRICING_PLANS.map((plan) => {
            const isYearly = plan.id === 'yearly';

            return (
              <div
                key={plan.id}
                className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  isYearly
                    ? 'bg-gradient-to-b from-[#0C152F] via-[#091024] to-[#070B18] border-2 border-sky-400/50 shadow-2xl shadow-sky-950/80'
                    : 'glass-panel border-slate-800/80 hover:border-sky-500/30'
                }`}
              >
                {/* Best Value Badge for Yearly */}
                {isYearly && (
                  <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-sky-500 to-blue-600 border border-sky-300/40 shadow-md flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-sky-200" />
                    <span>Best Value — Save ₹1,000</span>
                  </div>
                )}

                <div>
                  {/* Plan Header */}
                  <div className="mb-6">
                    <div className="text-xs font-mono text-sky-400 uppercase tracking-wider mb-1">
                      {isYearly ? 'FULL 12-MONTH COMMITMENT' : 'MONTH-TO-MONTH FLEXIBILITY'}
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-slate-300 mt-1">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price Tag */}
                  <div className="pb-6 mb-6 border-b border-slate-800">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-mono">
                        {plan.price}
                      </span>
                      <span className="text-xs text-slate-400">
                        / {plan.frequency}
                      </span>
                    </div>

                    <div className="mt-2 text-xs font-medium text-sky-300">
                      {plan.totalCommitment}
                    </div>

                    <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* Included Features */}
                  <div className="mb-8">
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                      What’s Included:
                    </div>
                    <ul className="space-y-2.5">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                          <Check className={`w-4 h-4 shrink-0 mt-0.5 ${isYearly ? 'text-sky-400' : 'text-slate-400'}`} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  {/* WhatsApp Enrolment Button (Opens prefilled WhatsApp message) */}
                  <a
                    href={getWhatsAppUrl(plan.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-6 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 transition-all duration-200 shadow-lg ${
                      isYearly
                        ? 'bg-gradient-to-r from-sky-500 via-blue-600 to-sky-600 hover:from-sky-400 hover:to-blue-500 text-white shadow-sky-600/30 border border-sky-300/40'
                        : 'bg-sky-600 hover:bg-sky-500 text-white shadow-sky-900/30 border border-sky-500/30'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-300" />
                    <span>Enrol via WhatsApp ({plan.name})</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
                  </a>

                  {/* Payment Terms Bullet */}
                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-col gap-1 text-[11px] text-slate-400">
                    {plan.terms.map((t, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-slate-600" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Clear Transparent Comparison Breakdown */}
        <div className="max-w-4xl mx-auto glass-panel rounded-2xl p-6 sm:p-8 border border-sky-900/30 mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-wider mb-4">
            <Info className="w-4 h-4 text-sky-400" />
            <span>Plan Comparison & Terms Overview</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 font-mono">
                  <th className="py-3 px-3">Feature / Parameter</th>
                  <th className="py-3 px-3 text-slate-300">Monthly Plan</th>
                  <th className="py-3 px-3 text-sky-400">Yearly Plan (Best Value)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                <tr>
                  <td className="py-3 px-3 font-medium">Pricing Schedule</td>
                  <td className="py-3 px-3 font-mono">₹500 / month</td>
                  <td className="py-3 px-3 font-mono text-sky-300 font-bold">₹5,000 one-time</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-medium">12-Month Total Outlay</td>
                  <td className="py-3 px-3 font-mono">₹6,000</td>
                  <td className="py-3 px-3 font-mono text-emerald-400 font-bold">₹5,000 (Save ₹1,000)</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-medium">Dedicated Learning App Access</td>
                  <td className="py-3 px-3">Included during active months</td>
                  <td className="py-3 px-3 text-sky-300">Continuous 12-Month Access</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-medium">All 14 Core Curriculum Areas</td>
                  <td className="py-3 px-3">Included</td>
                  <td className="py-3 px-3 text-sky-300">Included</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-medium">Live Doubt-Solving Sessions</td>
                  <td className="py-3 px-3">Included</td>
                  <td className="py-3 px-3 text-sky-300">Priority Support Included</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-medium">Module & Graduation Certificates</td>
                  <td className="py-3 px-3">Issued upon passing assessments</td>
                  <td className="py-3 px-3 text-sky-300">Full Program Certificate Track</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-medium">Entrepreneur Collaboration Consideration</td>
                  <td className="py-3 px-3">Standard pool (subject to selection)</td>
                  <td className="py-3 px-3 text-sky-300">Priority review (subject to selection)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* General Enquiry CTA Strip */}
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-xl bg-gradient-to-r from-[#091124] to-[#0A1428] border border-sky-800/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Have questions about payment options or batch timings?</h4>
              <p className="text-xs text-slate-300">Chat with Adflect on WhatsApp or call us directly.</p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`tel:${DISPLAY_PHONE.replace(/\s+/g, '')}`}
              className="px-4 py-2 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>Call Desk</span>
            </a>
            <a
              href={getWhatsAppUrl(GENERAL_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors flex items-center gap-1.5 shadow-md shadow-emerald-900/30"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>General Enquiry</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
