import React from 'react';
import { 
  Briefcase, 
  Globe2, 
  Rocket, 
  Laptop, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { getWhatsAppUrl, GENERAL_WHATSAPP_MESSAGE } from '../data/pricing';

export const PathwaysSection: React.FC = () => {
  const pathways = [
    {
      title: 'High-Growth Tech & Digital Roles',
      tagline: 'Modern employment in tech companies',
      desc: 'Build the technical competence and portfolio proof required for modern job titles including Frontend Developer, Digital Marketer, Creative Producer, and AI Operations Associate.',
      roles: ['Frontend Web Developer', 'Growth & Performance Marketer', 'Content & Video Specialist', 'AI Automation Associate'],
      icon: Briefcase
    },
    {
      title: 'High-Ticket Independent Freelancing',
      tagline: 'Global clients & location independence',
      desc: 'Position yourself on Upwork, LinkedIn, and direct outbound channels. Price your services by value, secure international client contracts, and build recurring monthly retainers.',
      roles: ['UI/UX & Web Developer', 'Media Buyer & Ads Strategist', 'Commercial Video Editor', 'Digital Operations Consultant'],
      icon: Laptop
    },
    {
      title: 'Digital Agency & Studio Startup',
      tagline: 'Build a scalable client services company',
      desc: 'Adopt Adflect’s own operational model. Learn how to package service offerings, hire and manage team members, set up client SOPs, and scale an agency past individual capacity.',
      roles: ['Digital Marketing Agency', 'Creative Design Studio', 'Web Development Boutique', 'Automation Consulting Agency'],
      icon: Rocket
    },
    {
      title: 'Micro-SaaS & Solopreneur Ventures',
      tagline: 'Digital products, media & tech tools',
      desc: 'Combine software coding with marketing distribution. Validate digital tools, monetize niche media assets, and build scalable automated income streams.',
      roles: ['Micro-SaaS Founder', 'Digital Asset Creator', 'Productized Service Operator', 'Tech-Driven Creator'],
      icon: Globe2
    }
  ];

  return (
    <section className="py-24 bg-[#070B16] relative border-t border-sky-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono font-semibold text-sky-400 uppercase tracking-widest mb-3">
            07. Career & Monetization Trajectories
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Where Can NextGen <span className="text-gradient">Take You?</span>
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            The program is deliberately multidisciplinary so you can choose the pathway that aligns with your personal ambition—whether corporate careers, solo freelancing, or launching an enterprise.
          </p>
        </div>

        {/* 4 Pathways Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {pathways.map((path) => {
            const Icon = path.icon;
            return (
              <div
                key={path.title}
                className="glass-panel glass-panel-hover rounded-xl p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-sky-400/90">{path.tagline}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {path.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-5">
                    {path.desc}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-slate-800">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Target Roles & Outcomes:</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {path.roles.map((r, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-xs text-slate-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                          <span>{r}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>12-MONTH PREPARATION</span>
                  <span className="text-sky-400 font-sans">Full Portfolio Track</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action strip */}
        <div className="text-center">
          <a
            href={getWhatsAppUrl('Hello Adflect Team, I want to discuss which career pathway in the NextGen Program best suits my profile.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 hover:text-sky-300 bg-sky-950/40 border border-sky-800/60 px-5 py-2.5 rounded-lg transition-colors"
          >
            <span>Discuss Your Career Background With Us on WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
