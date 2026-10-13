import React from 'react';
import { Lightbulb, Cpu, Hammer, CheckCircle, ArrowRight } from 'lucide-react';

export const LearningApproach: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'First-Principles Understanding',
      tagline: 'Deconstruct before you assemble',
      desc: 'We strip away jargon. You learn why a system works before touching tools—whether it is how LLM tokenization functions, how marketing attribution converts, or how web browser rendering pipelines execute.',
      icon: Lightbulb
    },
    {
      num: '02',
      title: 'AI-Assisted Workflow Integration',
      tagline: '10x leverage through modern tooling',
      desc: 'Learn how modern agency practitioners use AI agents, Claude, Gemini, and automation APIs to eliminate boilerplate work, debug issues in seconds, and prototype at 10x traditional speed.',
      icon: Cpu
    },
    {
      num: '03',
      title: 'Hands-On Client Simulation',
      tagline: 'Build real artifacts, not toy exercises',
      desc: 'No generic to-do list apps or mock blog templates. Every assignment mirrors an authentic business requirement from Adflect’s commercial agency work with real constraints and deliverables.',
      icon: Hammer
    },
    {
      num: '04',
      title: 'Rigorous Review & Portfolios',
      tagline: 'Proof of skill that wins contracts & roles',
      desc: 'Code reviews, design critique, and positioning feedback from practitioners. Your completed milestones become case studies in your public portfolio to prove your capability to employers or clients.',
      icon: CheckCircle
    }
  ];

  return (
    <section className="py-24 bg-[#060913] relative border-t border-sky-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono font-semibold text-sky-400 uppercase tracking-widest mb-3">
            05. Pedagogical Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            How You Will Learn: <span className="text-gradient">The 4-Stage Agency Method</span>
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            A battle-tested learning framework designed to build muscle memory, problem-solving independence, and commercial confidence.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="glass-panel glass-panel-hover rounded-xl p-6 flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-extrabold text-sky-400/80">
                      {step.num}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400 group-hover:bg-sky-500/20 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white mb-1 group-hover:text-sky-300 transition-colors">
                    {step.title}
                  </h3>
                  <div className="text-xs font-mono text-sky-400/80 mb-3">
                    {step.tagline}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center text-[11px] font-mono text-slate-500">
                  <span>STAGE {idx + 1} OF 4</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
