import React from 'react';
import { 
  Bot, 
  Code2, 
  Globe, 
  Megaphone, 
  Sparkles, 
  Workflow, 
  Film, 
  BriefcaseBusiness,
  CheckCircle2,
  Building2,
  ArrowRight
} from 'lucide-react';
import { DISPLAY_PHONE, getWhatsAppUrl, GENERAL_WHATSAPP_MESSAGE } from '../data/pricing';

export const AboutAdflect: React.FC = () => {
  const adflectPillars = [
    {
      title: 'Artificial Intelligence & Agents',
      desc: 'Integrating generative models, multimodal automation, and customized business AI copilots into everyday workflows.',
      icon: Bot
    },
    {
      title: 'Software & Mobile App Development',
      desc: 'Architecting robust full-stack applications, mobile experiences, scalable database models, and cloud infrastructure.',
      icon: Code2
    },
    {
      title: 'Modern Web Engineering',
      desc: 'Crafting ultra-fast, responsive web applications, modern component libraries, and conversion-engineered landing systems.',
      icon: Globe
    },
    {
      title: 'Performance Digital Marketing',
      desc: 'Running data-driven client acquisition campaigns, targeted paid ads, search engine dominance, and conversion rate optimization.',
      icon: Megaphone
    },
    {
      title: 'Strategic Branding & Identity',
      desc: 'Designing memorable brand books, corporate typography systems, and commercial graphic assets that command premium value.',
      icon: Sparkles
    },
    {
      title: 'Business Workflow Automation',
      desc: 'Eliminating repetitive human busywork using connected APIs, webhook triggers, CRM pipelines, and no-code/low-code integrations.',
      icon: Workflow
    },
    {
      title: 'Commercial Content Creation',
      desc: 'Producing high-impact video reels, storytelling scripts, podcast engineering, and retention-focused multimedia assets.',
      icon: Film
    },
    {
      title: 'Enterprise Business Solutions',
      desc: 'Formulating end-to-end go-to-market strategies, operational SOPs, client contracts, and sustainable monetization funnels.',
      icon: BriefcaseBusiness
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#070B16] relative border-t border-b border-sky-950/40">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-sky-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono font-semibold text-sky-400 uppercase tracking-widest mb-3">
            01. The Agency Behind The Program
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-5">
            Real Experience. <span className="text-gradient">Real Workflows.</span> Not Outdated Theory.
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            The NextGen Program was founded on a simple observation: conventional academic courses teach theoretical concepts disconnected from how modern companies operate. At <strong className="text-white">Adflect Business Solutions</strong>, founded by <strong className="text-sky-300">Mudassir Mirza</strong>, our daily work involves solving hard problems for commercial clients. We package that exact battlefield experience into a systematic 12-month program.
          </p>
        </div>

        {/* 8 Practical Agency Disciplines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {adflectPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="glass-panel glass-panel-hover rounded-xl p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>DISCIPLINE {String(idx + 1).padStart(2, '0')}</span>
                  <span className="text-sky-400/80">LIVE AGENCY STACK</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Founder & Mission Banner */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 lg:p-10 border border-sky-500/20 bg-gradient-to-r from-[#090F1E] via-[#0A1326] to-[#070B16]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-wider mb-2">
                <Building2 className="w-4 h-4" />
                <span>Founded by Mudassir Mirza · Adflect Business Solutions</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                Architecting Next-Generation Digital Leaders, Innovators & Modern Entrepreneurs.
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6 max-w-2xl">
                Every framework, methodology, and technical workflow taught inside the NextGen Program reflects actual commercial work delivered by Adflect Business Solutions. You gain direct, hands-on experience in client acquisition, software architecture, full-funnel digital marketing, AI automation, and building scalable ventures designed for the modern digital economy.
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  <span>Real commercial production workflows</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  <span>AI-first engineering & marketing architectures</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  <span>Practical execution & sustainable business systems</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href={getWhatsAppUrl(GENERAL_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 text-xs font-semibold text-center text-white bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 rounded-xl transition-all shadow-lg shadow-sky-600/25 flex items-center justify-center gap-2 border border-sky-400/30"
              >
                <span>Connect With Admissions Desk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#pricing"
                className="w-full py-3.5 px-5 text-xs font-medium text-center text-slate-300 hover:text-white bg-[#0E162C] hover:bg-[#131F3F] border border-sky-900/50 rounded-xl transition-colors"
              >
                View Plans & Enroll (From ₹500/mo)
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
