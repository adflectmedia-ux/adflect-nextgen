import React, { useState } from 'react';
import { 
  Cpu, 
  Code, 
  TrendingUp, 
  BadgeDollarSign, 
  Palette, 
  Video, 
  Briefcase, 
  Coins, 
  Users, 
  Terminal, 
  ShieldCheck, 
  FolderGit2, 
  MessageSquare, 
  Layers,
  Search,
  Sparkles,
  FolderKanban,
  HelpCircle,
  Activity
} from 'lucide-react';
import { CORE_CURRICULUM_AREAS } from '../data/curriculum';

const iconMap: Record<string, React.ElementType> = {
  Cpu,
  Code,
  TrendingUp,
  BadgeDollarSign,
  Palette,
  Video,
  Briefcase,
  Coins,
  Users,
  Terminal,
  ShieldCheck,
  FolderGit2,
  MessageSquare,
  Layers
};

export const CurriculumSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Tech & AI', 'Business & Growth', 'Creative', 'Career'];

  const filteredModules = CORE_CURRICULUM_AREAS.filter((mod) => {
    const matchesCategory = selectedCategory === 'All' || mod.category === selectedCategory;
    const matchesSearch =
      mod.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mod.simpleExplanation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mod.whatYouWillDo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mod.practicalOutput.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="curriculum" className="py-20 md:py-28 bg-[#040814] relative border-t border-sky-950/40">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-sky-600/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-700/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono font-semibold text-sky-400 uppercase tracking-widest mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-sky-400 rounded-none inline-block shadow-sm shadow-sky-400" />
            <span>02. Core Capabilities Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            What You’ll Learn: <span className="text-gradient">14 Core Areas Explained</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Understand each subject in clear, straightforward terms: what it actually is, the practical skills you will build, and how modern AI tools multiply your execution speed.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-800/80">
          
          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 sm:px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-xl whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold shadow-md shadow-sky-500/30 border border-sky-400'
                    : 'text-slate-400 hover:text-white bg-[#070D1E] border border-slate-800 hover:border-sky-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic, skill, or keyword..."
              className="w-full bg-[#070D1E] border border-slate-800 focus:border-sky-400 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors font-mono"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

        </div>

        {/* 14 Core Areas Grid - Streamlined, Clean, No tools bracket, No core topics clutter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredModules.map((module) => {
            const Icon = iconMap[module.iconName] || Code;
            return (
              <div
                key={module.id}
                className="glass-panel rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-sky-950/70 hover:border-sky-500/40 transition-all duration-300 relative group bg-gradient-to-b from-[#080E20]/90 via-[#070B18]/85 to-[#040712]/95 shadow-xl"
              >
                {/* Futuristic corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-sky-400/30 group-hover:border-sky-400 transition-colors pointer-events-none rounded-tr-xl" />

                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-400/25 flex items-center justify-center text-sky-400 group-hover:bg-sky-500/20 group-hover:border-sky-400/50 transition-all shadow-sm shadow-sky-500/10 shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 text-[11px] font-mono text-sky-400 uppercase tracking-wider">
                          <span>MODULE {module.number}</span>
                          <span className="text-slate-600">·</span>
                          <span className="text-slate-400">{module.category}</span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                          {module.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* 1. What It Actually Is (Core Concept) */}
                  <div className="p-3.5 rounded-xl bg-[#060C1B] border border-sky-900/30 mb-4">
                    <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-sky-400 mb-1 font-semibold">
                      <HelpCircle className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span>What It Actually Is</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                      {module.simpleExplanation}
                    </p>
                  </div>

                  {/* 2. What You Will Learn & Build */}
                  <div className="mb-4 space-y-1">
                    <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                      <Activity className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span>What You Will Learn & Do:</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-1">
                      {module.whatYouWillDo}
                    </p>
                  </div>

                  {/* 3. AI Workflow Advantage */}
                  <div className="p-3.5 rounded-xl bg-[#060A14] border border-sky-950/80 mb-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-sky-400 font-semibold mb-1">
                      <Sparkles className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span>Modern AI Advantage & Speed Multiplier:</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {module.aiAdvantage}
                    </p>
                  </div>

                  {/* 4. Practical Real-World Output */}
                  <div className="p-3 rounded-xl bg-[#050812] border border-slate-850 flex items-start gap-2.5">
                    <FolderKanban className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[11px] font-mono text-slate-400 block uppercase tracking-wider">
                        Real-World Practical Output:
                      </span>
                      <span className="text-xs text-slate-200 font-medium leading-snug">
                        {module.practicalOutput}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Card Footer */}
                <div className="mt-5 pt-3.5 border-t border-slate-800/70 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>12-MONTH ACTIVE CURRICULUM</span>
                  <span className="text-sky-400 font-sans font-medium">Full Hands-On Guidance</span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Empty state if search has no results */}
        {filteredModules.length === 0 && (
          <div className="py-12 text-center text-slate-400">
            <p className="text-sm">No curriculum areas match "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-3 px-4 py-2 text-xs font-mono text-sky-400 border border-sky-800/60 rounded-lg hover:bg-sky-950/40"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Curriculum Callout */}
        <div className="mt-12 p-5 sm:p-6 rounded-2xl bg-[#070D1E] border border-sky-900/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 bg-sky-400 rounded-sm shrink-0 shadow-sm shadow-sky-400" />
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              <strong className="text-white">Seamless Multidisciplinary Integration:</strong> All 14 domains are integrated smoothly across the entire 12-month tenure without rigid monthly silos, giving you a complete, practical edge.
            </p>
          </div>
          <a
            href="#pricing"
            className="text-xs font-semibold font-mono text-sky-400 hover:text-sky-300 whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <span>Enrol From ₹500/Month</span>
            <span>&rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
};
