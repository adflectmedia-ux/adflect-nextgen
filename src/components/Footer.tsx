import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { DISPLAY_PHONE, getWhatsAppUrl, GENERAL_WHATSAPP_MESSAGE } from '../data/pricing';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#03050A] border-t border-sky-950/60 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand Column (2 cols) - Pure typographic wordmark, no logo */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <span className="text-lg font-extrabold tracking-wider text-white uppercase font-mono">
                ADFLECT <span className="text-sky-400 font-semibold tracking-normal">NEXTGEN</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              A 12-month career, digital skills, and business development program engineered by{' '}
              <strong className="text-slate-200">Adflect Business Solutions</strong>, founded by{' '}
              <strong className="text-sky-300">Mudassir Mirza</strong>.
            </p>

            <div className="space-y-1.5 pt-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                <a href={`tel:${DISPLAY_PHONE.replace(/\s+/g, '')}`} className="hover:text-white font-mono">
                  {DISPLAY_PHONE}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <a href={getWhatsAppUrl(GENERAL_WHATSAPP_MESSAGE)} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  WhatsApp Admissions Desk
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold">
              Curriculum & Skills
            </div>
            <ul className="space-y-2 text-xs">
              <li><a href="#curriculum" className="hover:text-sky-300 transition-colors">AI & Automation</a></li>
              <li><a href="#curriculum" className="hover:text-sky-300 transition-colors">Web & App Development</a></li>
              <li><a href="#curriculum" className="hover:text-sky-300 transition-colors">Digital Marketing & Ads</a></li>
              <li><a href="#curriculum" className="hover:text-sky-300 transition-colors">Video & Graphic Design</a></li>
              <li><a href="#curriculum" className="hover:text-sky-300 transition-colors">Sales & Client Acquisition</a></li>
              <li><a href="#curriculum" className="hover:text-sky-300 transition-colors">Earn Money Online</a></li>
            </ul>
          </div>

          {/* Program Resources Column */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold">
              Student Platform
            </div>
            <ul className="space-y-2 text-xs">
              <li><a href="#deliverables" className="hover:text-sky-300 transition-colors">Dedicated Learning App</a></li>
              <li><a href="#deliverables" className="hover:text-sky-300 transition-colors">Recorded Lecture Archive</a></li>
              <li><a href="#deliverables" className="hover:text-sky-300 transition-colors">Digital Notes & Study Guides</a></li>
              <li><a href="#deliverables" className="hover:text-sky-300 transition-colors">App-Based Quizzes</a></li>
              <li><a href="#deliverables" className="hover:text-sky-300 transition-colors">Module Certificates</a></li>
              <li><a href="#deliverables" className="hover:text-sky-300 transition-colors">Student Peer Network</a></li>
            </ul>
          </div>

          {/* Enrollment Column */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold">
              Admissions
            </div>
            <ul className="space-y-2 text-xs">
              <li><a href="#pricing" className="hover:text-sky-300 transition-colors">Monthly Plan (₹500/mo)</a></li>
              <li><a href="#pricing" className="hover:text-sky-300 transition-colors">Yearly Plan (₹5,000 / Best Value)</a></li>
              <li><a href="#admissions" className="hover:text-sky-300 transition-colors">4-Step Enrollment Guide</a></li>
              <li><a href="#contact" className="hover:text-sky-300 transition-colors">Admissions Desk Direct</a></li>
            </ul>
          </div>

        </div>

        {/* Transparent Compliance & Policy Statement (Honest, accurate copy as mandated) */}
        <div className="py-8 border-b border-slate-900 space-y-2 text-[11px] text-slate-500 leading-relaxed">
          <div className="flex items-center gap-1.5 text-slate-400 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
            <span>Academic & Opportunity Transparency Statement</span>
          </div>
          <p>
            The Adflect NextGen Program is a practical skills training initiative by Adflect Business Solutions. Certificates are awarded upon successful completion of required modules, assessments, and approved project assignments. Adflect does not make exaggerated or false promises regarding automatic employment, accredited degrees, or guaranteed income. Opportunities to collaborate with active entrepreneurs and industry professionals, as well as job and client referrals, are merit-based and strictly subject to individual student performance, portfolio evaluation, availability, and selection.
          </p>
        </div>

        {/* Bottom Bar: Copyright and credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Adflect Business Solutions. All rights reserved. Founded by Mudassir Mirza.
          </div>
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-slate-300 transition-colors">About Adflect</a>
            <span aria-hidden="true">·</span>
            <a href="#pricing" className="hover:text-slate-300 transition-colors">Pricing & Plans</a>
            <span aria-hidden="true">·</span>
            <a href={`tel:${DISPLAY_PHONE.replace(/\s+/g, '')}`} className="hover:text-sky-400 transition-colors font-mono">
              {DISPLAY_PHONE}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
