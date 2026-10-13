import React from 'react';
import { Quote, Sparkles, Building, Linkedin, MessageCircle, ArrowRight } from 'lucide-react';
import { DISPLAY_PHONE, getWhatsAppUrl, GENERAL_WHATSAPP_MESSAGE } from '../data/pricing';

export const FounderSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#05070D] relative border-t border-sky-950/40">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-sky-600/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono font-semibold text-sky-400 uppercase tracking-widest mb-3">
            06. Leadership & Vision
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Meet the Founder: <span className="text-gradient">Mudassir Mirza</span>
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Founder of Adflect Business Solutions and Architect of the NextGen Program.
          </p>
        </div>

        {/* Founder Showcase Card */}
        <div className="glass-panel rounded-2xl p-6 sm:p-10 border border-sky-500/20 bg-gradient-to-br from-[#091024] via-[#070D1D] to-[#050812]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Founder Identity Card (Clean, futuristic, no logo box) */}
            <div className="lg:col-span-4 flex flex-col items-center sm:items-start lg:items-center text-center lg:text-center">
              <div className="w-full max-w-xs p-6 rounded-2xl bg-gradient-to-b from-[#0B1530] to-[#060A18] border border-sky-500/30 shadow-2xl relative mb-5">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-sky-900/40">
                  <span className="text-[10px] font-mono text-sky-400 uppercase tracking-wider">FOUNDER PROFILE</span>
                  <span className="w-2 h-2 rounded-full bg-sky-400 shadow-sm shadow-sky-400" />
                </div>
                
                <h3 className="text-2xl font-extrabold text-white tracking-tight">Mudassir Mirza</h3>
                <p className="text-xs text-sky-400 font-mono mt-1 font-semibold">Founder & Strategic Lead</p>
                <p className="text-xs text-slate-300 mt-2 font-medium">Adflect Business Solutions</p>

                <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 space-y-1 text-left font-mono">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Initiative:</span>
                    <span className="text-sky-300">NextGen Program</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Duration:</span>
                    <span className="text-slate-300">12 Months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Focus:</span>
                    <span className="text-slate-300">AI & Execution</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={getWhatsAppUrl('Hello Mudassir Mirza / Adflect Team, I would like to learn more about the NextGen Program vision and admissions.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 rounded-xl transition-all shadow-md shadow-sky-600/20 flex items-center gap-2 border border-sky-400/30"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-300" />
                  <span>Connect with Founder's Desk</span>
                </a>
              </div>
            </div>

            {/* Right: Message & Philosophy */}
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-wider mb-3">
                <Quote className="w-4 h-4 text-sky-400" />
                <span>Founder's Note to Ambitious Learners</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-snug">
                "The future doesn't belong to people who simply know definitions. It belongs to builders who can wield modern tools, solve commercial problems, and ship results."
              </h3>

              <div className="space-y-4 text-sm text-slate-300 leading-relaxed font-normal mb-8">
                <p>
                  When I started <strong className="text-white">Adflect Business Solutions</strong>, we realized how difficult it was to hire people with true end-to-end capability. Most candidates had theoretical degrees or superficial crash-course certificates, but couldn’t deploy a website, run an ad campaign that brought real sales, write modern code with AI assistance, or speak to a client professionally.
                </p>
                <p>
                  We built the <strong className="text-white">Adflect NextGen Program</strong> to dismantle this barrier. It is a rigorous, 12-month learning journey where you work on what actually moves the needle in our agency: software engineering, performance marketing, AI automation, video storytelling, sales psychology, and sustainable business foundations.
                </p>
                <p>
                  Whether your dream is to land high-paying tech roles, run an independent freelancing agency, or launch your own venture, this program gives you the exact tools, hands-on experience, and community to build your future.
                </p>
              </div>

              {/* Founder Credo Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-800 text-xs">
                <div>
                  <div className="font-mono text-sky-400 text-[11px] mb-1">PRACTICE FIRST</div>
                  <div className="text-slate-300 font-medium">Real agency projects, zero simulated toy exercises</div>
                </div>
                <div>
                  <div className="font-mono text-sky-400 text-[11px] mb-1">AI-LEVERAGED</div>
                  <div className="text-slate-300 font-medium">Modern workflows that multiply your output speed</div>
                </div>
                <div>
                  <div className="font-mono text-sky-400 text-[11px] mb-1">ACCESSIBLE VALUE</div>
                  <div className="text-slate-300 font-medium">From ₹500/month so every deserving student can join</div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
