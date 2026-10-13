import React from 'react';
import { CreditCard, MessageSquareText, UserCheck, KeyRound, ArrowRight } from 'lucide-react';
import { DISPLAY_PHONE, getWhatsAppUrl, GENERAL_WHATSAPP_MESSAGE } from '../data/pricing';

export const AdmissionSteps: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Choose Your Plan',
      desc: 'Select between the Monthly Plan (₹500/month) for flexible payment or the Yearly Plan (₹5,000 one-time) to save ₹1,000.',
      icon: CreditCard
    },
    {
      num: '02',
      title: 'WhatsApp Desk Verification',
      desc: `Reach out directly to Chat with Adflect at ${DISPLAY_PHONE} with your chosen plan and profile details.`,
      icon: MessageSquareText
    },
    {
      num: '03',
      title: 'Seamless Onboarding',
      desc: 'Complete your registration and payment confirmation securely with direct receipt and acknowledgment.',
      icon: UserCheck
    },
    {
      num: '04',
      title: 'Immediate App & Hub Access',
      desc: 'Receive your dedicated learning app login, orientation guide, study materials repository, and student community invite.',
      icon: KeyRound
    }
  ];

  return (
    <section id="admissions" className="py-24 bg-[#05070D] relative border-t border-sky-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono font-semibold text-sky-400 uppercase tracking-widest mb-3">
            08. Streamlined Enrollment
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            How to Enrol in <span className="text-gradient">4 Simple Steps</span>
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            We keep admissions direct, personal, and transparent. No complicated portals or third-party gateways. Chat with Adflect directly on WhatsApp.
          </p>
        </div>

        {/* 4 Steps Horizontal Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((st) => {
            const Icon = st.icon;
            return (
              <div
                key={st.num}
                className="glass-panel glass-panel-hover rounded-xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-sky-400 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-850/50">
                      STEP {st.num}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">
                    {st.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {st.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-500">
                  FAST ONBOARDING
                </div>
              </div>
            );
          })}
        </div>

        {/* WhatsApp Enrolment Action Bar */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-[#0C152F] via-[#091024] to-[#060B18] border border-sky-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs font-mono text-sky-400 uppercase tracking-wider mb-1">
              READY TO COMMENCE YOUR 12-MONTH JOURNEY?
            </div>
            <h4 className="text-lg font-bold text-white">
              Connect with Admissions Desk on WhatsApp: {DISPLAY_PHONE}
            </h4>
            <p className="text-xs text-slate-300 mt-1">
              Admissions team is active daily to answer your queries and verify registrations.
            </p>
          </div>

          <a
            href={getWhatsAppUrl(GENERAL_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 rounded-xl transition-all shadow-lg shadow-sky-600/30 flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
          >
            <span>Message Admissions on WhatsApp</span>
            <ArrowRight className="w-4 h-4 text-sky-200" />
          </a>
        </div>

      </div>
    </section>
  );
};
