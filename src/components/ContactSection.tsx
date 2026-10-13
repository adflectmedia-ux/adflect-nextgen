import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { DISPLAY_PHONE, WHATSAPP_PHONE, getWhatsAppUrl, GENERAL_WHATSAPP_MESSAGE } from '../data/pricing';

export const ContactSection: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [selectedPlan, setSelectedPlan] = useState<'yearly' | 'monthly' | 'general'>('yearly');
  const [userBackground, setUserBackground] = useState('');
  const [userCity, setUserCity] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const planText =
      selectedPlan === 'yearly'
        ? 'Yearly Plan (₹5,000 / Best Value)'
        : selectedPlan === 'monthly'
        ? 'Monthly Plan (₹500/month)'
        : 'General Enquiry / Need Guidance';

    const message = `Hello Adflect NextGen Team,
My Name: ${fullName.trim() || 'Prospective Student'}
Interested In: ${planText}
Location/City: ${userCity.trim() || 'Not specified'}
Current Background: ${userBackground.trim() || 'Aspiring Student/Professional'}

I would like to receive admission details and start my registration.`;

    const url = getWhatsAppUrl(message);
    setSubmitted(true);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-24 bg-[#05070D] relative border-t border-sky-950/40">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-600/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono font-semibold text-sky-400 uppercase tracking-widest mb-3">
            10. Admissions Desk
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Connect with <span className="text-gradient">Admissions & Enrol</span>
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Have questions or ready to secure your seat? Chat with Adflect directly on WhatsApp or call our official desk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Helpline & Agency Information (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Phone & WhatsApp card */}
            <div className="glass-panel rounded-2xl p-6 sm:p-7 border border-sky-500/30 bg-gradient-to-br from-[#091124] to-[#070B18]">
              <div className="text-xs font-mono text-sky-400 uppercase tracking-wider mb-2">
                OFFICIAL ADMISSIONS HOTLINE
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {DISPLAY_PHONE}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Active daily for calls, SMS, and WhatsApp admission guidance. Chat with Adflect for instant verification and seat allotment.
              </p>

              <div className="space-y-3">
                <a
                  href={`tel:${DISPLAY_PHONE.replace(/\s+/g, '')}`}
                  className="w-full py-3 px-4 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 transition-colors flex items-center justify-center gap-2 border border-slate-700"
                >
                  <Phone className="w-4 h-4 text-sky-400" />
                  <span>Call {DISPLAY_PHONE}</span>
                </a>

                <a
                  href={getWhatsAppUrl(GENERAL_WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Direct WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Program & Agency Credentials Card */}
            <div className="glass-panel rounded-2xl p-6 border border-slate-800 text-xs text-slate-300 space-y-3">
              <div className="font-mono text-sky-400 uppercase tracking-wider text-[11px]">
                ADFLECT BUSINESS SOLUTIONS
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Operating globally with headquarters in India. Remote learning delivery across all states.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>admissions@adflect.com · Founder Desk: Mudassir Mirza</span>
              </div>
              <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-500 font-mono">
                COHORT ADMISSIONS OPEN · 12-MONTH DURATION
              </div>
            </div>

          </div>

          {/* Right Column: Interactive WhatsApp Pre-Enrollment Dispatcher (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-sky-500/25">
              
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Quick Admission Enquiry Composer
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Fill in your details below to instantly generate a tailored WhatsApp admission message.
                  </p>
                </div>
                <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400">
                  <MessageCircle className="w-4 h-4" />
                </div>
              </div>

              <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full bg-[#070B18] border border-slate-800 focus:border-sky-500 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
                  />
                </div>

                {/* Plan Selection */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    Select Your Preferred Plan *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    <button
                      type="button"
                      onClick={() => setSelectedPlan('yearly')}
                      className={`p-3 rounded-lg text-left text-xs border transition-all ${
                        selectedPlan === 'yearly'
                          ? 'border-sky-400 bg-sky-950/60 text-white shadow-sm'
                          : 'border-slate-800 bg-[#070B18] text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div className="font-bold text-white">Yearly Plan</div>
                      <div className="font-mono text-sky-300 mt-0.5">₹5,000 one-time</div>
                      <div className="text-[10px] text-emerald-400 mt-0.5">Save ₹1,000</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedPlan('monthly')}
                      className={`p-3 rounded-lg text-left text-xs border transition-all ${
                        selectedPlan === 'monthly'
                          ? 'border-sky-400 bg-sky-950/60 text-white shadow-sm'
                          : 'border-slate-800 bg-[#070B18] text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div className="font-bold text-white">Monthly Plan</div>
                      <div className="font-mono text-slate-300 mt-0.5">₹500 / month</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">₹6,000 total</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedPlan('general')}
                      className={`p-3 rounded-lg text-left text-xs border transition-all ${
                        selectedPlan === 'general'
                          ? 'border-sky-400 bg-sky-950/60 text-white shadow-sm'
                          : 'border-slate-800 bg-[#070B18] text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div className="font-bold text-white">General Inquiry</div>
                      <div className="font-mono text-slate-300 mt-0.5">Ask questions</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">Counseling</div>
                    </button>
                  </div>
                </div>

                {/* City / State */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      Your City / State
                    </label>
                    <input
                      type="text"
                      value={userCity}
                      onChange={(e) => setUserCity(e.target.value)}
                      placeholder="e.g. Mumbai, Maharashtra"
                      className="w-full bg-[#070B18] border border-slate-800 focus:border-sky-500 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      Current Background
                    </label>
                    <input
                      type="text"
                      value={userBackground}
                      onChange={(e) => setUserBackground(e.target.value)}
                      placeholder="e.g. College Student / Working / Freelancer"
                      className="w-full bg-[#070B18] border border-slate-800 focus:border-sky-500 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 hover:from-emerald-500 hover:to-sky-500 transition-all duration-200 shadow-lg shadow-emerald-950/50 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Launch WhatsApp Message to +91 8928282005</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="flex items-center gap-2 text-[11px] text-slate-400 justify-center pt-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Opens WhatsApp directly with your prefilled details for rapid processing.</span>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
