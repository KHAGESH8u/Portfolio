import React, { useState } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { TimelineNode } from '../ui/TimelineNode';
import { TIMELINE_DATA } from '../../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'experience' | 'education'>('all');

  const filteredItems = TIMELINE_DATA.filter((item) => {
    if (filter === 'all') return true;
    return item.type === filter;
  });

  return (
    <section id="timeline" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <SectionHeader
        badge="CAREER & ACADEMIA"
        title="Experience & Education"
        subtitle="A chronological journey through my professional engineering roles, leadership milestones, and computer science degrees."
      />

      {/* Filter switches */}
      <div className="flex justify-center mb-16">
        <div className="inline-flex p-1.5 rounded-2xl bg-slate-950/80 border border-white/10 backdrop-blur-xl">
          <button
            onClick={() => setFilter('all')}
            className={`px-5 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-300 ${
              filter === 'all'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(0,242,254,0.2)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            ALL MILESTONES
          </button>
          <button
            onClick={() => setFilter('experience')}
            className={`flex items-center space-x-2 px-5 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-300 ${
              filter === 'experience'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(0,242,254,0.2)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>EXPERIENCE</span>
          </button>
          <button
            onClick={() => setFilter('education')}
            className={`flex items-center space-x-2 px-5 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-300 ${
              filter === 'education'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(0,242,254,0.2)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>EDUCATION</span>
          </button>
        </div>
      </div>

      {/* Timeline container */}
      <div className="relative">
        {/* Continuous glowing vertical line */}
        <div className="absolute left-0 top-6 bottom-6 w-[2px] bg-gradient-to-b from-cyan-400 via-purple-500 to-cyan-500/20 shadow-[0_0_12px_rgba(0,242,254,0.4)]" />

        <div className="space-y-6">
          {filteredItems.map((item, index) => (
            <TimelineNode
              key={item.id}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
