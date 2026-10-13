import React from 'react';
import { 
  Smartphone, 
  Video, 
  FileText, 
  Download, 
  HelpCircle, 
  Award, 
  Hammer, 
  FolderCheck, 
  Users2, 
  MessagesSquare, 
  Compass, 
  Rocket, 
  Briefcase, 
  Handshake,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { PROGRAM_DELIVERABLES } from '../data/deliverables';
import { getWhatsAppUrl, GENERAL_WHATSAPP_MESSAGE } from '../data/pricing';

const deliverableIcons: Record<string, React.ElementType> = {
  'learning-app': Smartphone,
  'recorded-lectures': Video,
  'digital-notes-materials': FileText,
  'downloadable-pdfs': Download,
  'exams-quizzes': HelpCircle,
  'certificates': Award,
  'practical-projects': Hammer,
  'portfolio-support': FolderCheck,
  'student-community': Users2,
  'live-doubt-solving': MessagesSquare,
  'career-freelance-guidance': Compass,
  'business-opportunities': Rocket,
  'potential-job-opportunities': Briefcase,
  'entrepreneur-collaboration': Handshake
};

export const DeliverablesSection: React.FC = () => {
  return (
    <section id="deliverables" className="py-24 bg-[#070B16] relative border-t border-sky-950/40">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-sky-600/5 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-700/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono font-semibold text-sky-400 uppercase tracking-widest mb-3">
            03. The Complete Student Toolkit
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            What You’ll Get: <span className="text-gradient">Resources, Platform & Opportunities</span>
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Everything engineered to take you from foundational concepts to market-ready capability. All materials, live interactions, and support systems are included in both monthly and yearly plans.
          </p>
        </div>

        {/* Featured Visual Spotlight: Dedicated Learning App & Portal Preview */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 lg:p-10 mb-16 border border-sky-500/20 bg-gradient-to-br from-[#091024] via-[#080E20] to-[#050812]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-sky-400 mb-3">
                <Smartphone className="w-4 h-4" />
                <span>CENTRALIZED LEARNING INFRASTRUCTURE</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-tight">
                Your Dedicated Learning App & Digital Study Hub
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Learn seamlessly at your own pace with our custom application. Watch high-definition recorded lectures with timestamps, download digital notes and PDFs, test your knowledge with app-based quizzes, and submit practical assignments directly to mentors.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-200">
                    <strong className="text-white">Seamless Cross-Platform Access:</strong> Available on mobile phones, tablets, and desktop web browsers.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-200">
                    <strong className="text-white">Structured Study Packs:</strong> Digital notes, frameworks, code snippets, and downloadable cheat-sheets.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-200">
                    <strong className="text-white">Verified Assessments:</strong> App-based quizzes and milestone evaluations for credential qualification.
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#pricing"
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-sky-500 hover:bg-sky-400 rounded-lg transition-colors shadow-md shadow-sky-500/20"
                >
                  Join Program & Access App
                </a>
                <a
                  href={getWhatsAppUrl(GENERAL_WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 text-xs font-medium text-slate-300 hover:text-white bg-[#0B1428] border border-sky-800/40 rounded-lg transition-colors"
                >
                  Ask Admissions Team
                </a>
              </div>
            </div>

            {/* Custom Interactive App UI Vector Mockup */}
            <div className="lg:col-span-6">
              <div className="bg-[#050811] rounded-xl border border-sky-500/25 p-5 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-sky-400" />
                    <span className="font-mono text-xs text-slate-200 font-semibold">ADFLECT NEXTGEN APP</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">
                    APP ACTIVE
                  </span>
                </div>

                {/* Dashboard grid preview */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-[#0A1022] border border-sky-900/40">
                    <span className="text-[10px] font-mono text-slate-400 block mb-1">RECORDED LECTURES</span>
                    <span className="text-base font-bold text-white">Full Access</span>
                    <span className="text-[10px] text-sky-400 block mt-1">12-Month Archive</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#0A1022] border border-sky-900/40">
                    <span className="text-[10px] font-mono text-slate-400 block mb-1">STUDY MATERIALS</span>
                    <span className="text-base font-bold text-white">Digital Notes & PDFs</span>
                    <span className="text-[10px] text-sky-400 block mt-1">Instant Downloads</span>
                  </div>
                </div>

                {/* Module stream card */}
                <div className="p-3.5 rounded-lg bg-[#080E1C] border border-slate-800 space-y-2 mb-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-200">Interactive Quiz & Capstone Tracker</span>
                    <span className="text-[10px] font-mono text-sky-400">Score & Assessment</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-sky-400 to-blue-500 w-3/4 rounded-full" />
                  </div>
                  <div className="flex justify-between text-[11px] text-slate-400">
                    <span>Practical Submissions</span>
                    <span className="font-mono text-slate-300">Certified Milestone</span>
                  </div>
                </div>

                {/* Live doubt solving bar */}
                <div className="p-2.5 rounded-lg bg-sky-950/40 border border-sky-800/40 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <MessagesSquare className="w-4 h-4 text-sky-400" />
                    <span className="text-slate-200 text-[11px]">Live Doubt Solving & Mentor Access</span>
                  </div>
                  <span className="text-[10px] font-mono text-sky-300 font-semibold">Weekly Sessions</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 14 Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROGRAM_DELIVERABLES.map((item) => {
            const Icon = deliverableIcons[item.id] || Sparkles;
            return (
              <div
                key={item.id}
                className={`glass-panel glass-panel-hover rounded-xl p-5 flex flex-col justify-between ${
                  item.highlight ? 'border-sky-500/30 bg-sky-950/20' : ''
                }`}
              >
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-sky-400/90 tracking-wide">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>{item.category}</span>
                  <span className="text-sky-400/70">Included</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Opportunity Disclaimer Note (Honest, accurate claims as requested) */}
        <div className="mt-12 p-4 rounded-xl bg-[#090E1D] border border-slate-800 text-xs text-slate-400 leading-relaxed">
          <strong className="text-slate-300">Important Note on Placement & Collaborations:</strong> Certificates are awarded for eligible completed programs and modules upon meeting assessment criteria. Job recommendations, client referrals, and opportunities to collaborate with entrepreneurs and industry professionals are subject to student performance, project evaluation, portfolio readiness, and availability. We maintain rigorous standards so that real skills drive real opportunities.
        </div>

      </div>
    </section>
  );
};
