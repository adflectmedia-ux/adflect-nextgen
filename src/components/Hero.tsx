import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Shield, Phone, MessageCircle, Play } from 'lucide-react';
import { DISPLAY_PHONE, getWhatsAppUrl, GENERAL_WHATSAPP_MESSAGE } from '../data/pricing';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden flex items-center">
      {/* Background ambient futuristic lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[450px] bg-gradient-to-tr from-sky-600/15 via-blue-700/10 to-cyan-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and Call to Actions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Clean unboxed editorial kicker (Anti-slop / zero-pill compliant) */}
            <div className="flex items-center gap-2.5 text-xs font-semibold tracking-widest text-sky-400 mb-5 uppercase font-mono">
              <span className="w-2 h-2 rounded-sm bg-sky-400 inline-block shadow-sm shadow-sky-400" />
              <span>Adflect Presents — NextGen Program</span>
              <span className="text-slate-600 hidden sm:inline">·</span>
              <span className="text-slate-400 hidden sm:inline normal-case tracking-normal font-sans font-medium">12-Month Digital Accelerator</span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.12]">
              Learn Today. <br />
              <span className="text-gradient">Build Tomorrow.</span>
            </h1>

            {/* Concise Program Description */}
            <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-2xl leading-relaxed font-normal">
              A transformative 12-month digital skills, career and business development program by{' '}
              <strong className="text-white font-semibold">Adflect Business Solutions</strong>, founded by{' '}
              <strong className="text-sky-300 font-semibold">Mudassir Mirza</strong>. Master 14 real-world domains—from artificial intelligence and full-stack software development to digital marketing, sales, and sustainable online income creation.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#pricing"
                className="px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-sky-500 via-blue-600 to-sky-600 hover:from-sky-400 hover:to-blue-500 rounded-xl transition-all duration-200 shadow-xl shadow-sky-600/25 flex items-center justify-center gap-2 group border border-sky-400/40"
              >
                <span>Enrol Now</span>
                <ArrowRight className="w-4 h-4 text-sky-200 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#curriculum"
                className="px-7 py-3.5 text-sm font-medium text-slate-200 hover:text-white bg-[#0B1224]/80 hover:bg-[#111A33] border border-sky-900/50 hover:border-sky-500/40 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                <span>Explore Program</span>
              </a>

              <a
                href={getWhatsAppUrl(GENERAL_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 text-xs font-medium text-sky-300 hover:text-sky-100 bg-sky-950/40 hover:bg-sky-900/50 border border-sky-800/40 rounded-xl transition-colors flex items-center justify-center gap-1.5"
                title="Direct WhatsApp Helpline"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span className="font-mono">{DISPLAY_PHONE}</span>
              </a>
            </div>

            {/* Core Trust & Inclusions Strip (Unboxed metadata with separators) */}
            <div className="pt-6 border-t border-slate-800/80 w-full flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-400">
              <div className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>12-Month Comprehensive Track</span>
              </div>
              <span className="text-slate-700">·</span>
              <div className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>14 Practical Core Areas</span>
              </div>
              <span className="text-slate-700">·</span>
              <div className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Dedicated Learning App</span>
              </div>
              <span className="text-slate-700">·</span>
              <div className="flex items-center gap-1.5 text-slate-300">
                <Shield className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Verified Module Certificates</span>
              </div>
            </div>

          </div>

          {/* Right Column: Futuristic Interactive Program Terminal & App Showcase (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative gradient border */}
              <div className="p-1 rounded-2xl bg-gradient-to-b from-sky-500/30 via-blue-900/20 to-transparent shadow-2xl shadow-sky-950/60">
                <div className="bg-[#090F1E] rounded-xl border border-sky-500/20 p-5 sm:p-6 backdrop-blur-xl">
                  
                  {/* Console Header */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-slate-700" />
                      <div className="w-3 h-3 rounded-full bg-slate-700" />
                      <div className="w-3 h-3 rounded-full bg-sky-500/80" />
                      <span className="ml-2 font-mono text-xs text-slate-400">adflect-nextgen.app/hub</span>
                    </div>
                    <span className="text-[11px] font-mono text-sky-400 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-800/40">
                      12-MONTH ACTIVE TRACK
                    </span>
                  </div>

                  {/* Active Program Card Preview */}
                  <div className="bg-[#050811] rounded-lg border border-sky-900/30 p-4 mb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="text-[11px] font-mono uppercase text-sky-400 tracking-wider">Adflect Learning Suite</div>
                        <h4 className="text-sm font-bold text-white mt-0.5">NextGen Digital Mastery Hub</h4>
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-400/30 flex items-center justify-center text-sky-300">
                        <Sparkles className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Progress & Architecture bars */}
                    <div className="space-y-2.5">
                      <div>
                        <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                          <span>Curriculum Integration</span>
                          <span className="font-mono text-sky-300">14 Domains</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-sky-500 to-blue-500 rounded-full w-full" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 pt-2">
                        <div className="p-2.5 rounded-lg bg-[#0C1326] border border-sky-900/40">
                          <span className="text-[10px] text-slate-400 block">Learning Delivery</span>
                          <span className="text-xs font-semibold text-slate-200">Dedicated App + Notes</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-[#0C1326] border border-sky-900/40">
                          <span className="text-[10px] text-slate-400 block">Workflows</span>
                          <span className="text-xs font-semibold text-sky-300">AI-Assisted Production</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Highlight Core Modules Pill-Free List */}
                  <div className="space-y-2 mb-4">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Featured Modules</div>
                    
                    <div className="p-2.5 rounded-lg bg-[#060A14] border border-slate-800/80 flex items-center justify-between text-xs hover:border-sky-500/30 transition-colors">
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-sky-400 text-[11px]">01</span>
                        <span className="font-medium text-slate-200">Artificial Intelligence & Automation</span>
                      </div>
                      <span className="text-[11px] text-slate-500 font-mono">Agent Workflows</span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-[#060A14] border border-slate-800/80 flex items-center justify-between text-xs hover:border-sky-500/30 transition-colors">
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-sky-400 text-[11px]">02</span>
                        <span className="font-medium text-slate-200">Web & App Software Architecture</span>
                      </div>
                      <span className="text-[11px] text-slate-500 font-mono">Full-Stack</span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-[#060A14] border border-slate-800/80 flex items-center justify-between text-xs hover:border-sky-500/30 transition-colors">
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-sky-400 text-[11px]">04</span>
                        <span className="font-medium text-slate-200">Earn Money Online & Client Systems</span>
                      </div>
                      <span className="text-[11px] text-slate-500 font-mono">Monetization</span>
                    </div>
                  </div>

                  {/* Bottom admission badge & direct helpline */}
                  <div className="p-3 rounded-lg bg-gradient-to-r from-sky-950/60 to-blue-950/40 border border-sky-800/40 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400" />
                      <div>
                        <div className="text-[11px] font-semibold text-slate-200">Admissions Open for 2026 Batch</div>
                        <div className="text-[10px] text-slate-400">Direct admission guidance on WhatsApp</div>
                      </div>
                    </div>
                    <a
                      href={`tel:${DISPLAY_PHONE.replace(/\s+/g, '')}`}
                      className="text-xs font-mono text-sky-400 hover:text-sky-300 font-semibold"
                    >
                      Call Desk
                    </a>
                  </div>

                </div>
              </div>

              {/* Floating aesthetic feature card */}
              <div className="hidden sm:flex items-center gap-3 absolute -bottom-5 -left-6 p-3.5 rounded-xl bg-[#0B1326]/95 border border-sky-500/30 shadow-xl backdrop-blur-md">
                <div className="w-9 h-9 rounded-lg bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400">
                  <Play className="w-4 h-4 fill-sky-400" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Dedicated App Ecosystem</div>
                  <div className="text-[11px] text-slate-400">Lectures · Notes · Quizzes · Live Doubt-Solving</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
