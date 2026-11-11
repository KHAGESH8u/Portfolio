import React from 'react';
import { Cpu, Terminal, Layers } from 'lucide-react';
import { SKILL_CATEGORIES } from '../../data/portfolioData';

export const BentoSkillsTile: React.FC = () => {
  return (
    <div
      id="skills"
      className="relative rounded-3xl bg-[#09090b]/85 backdrop-blur-2xl border border-purple-500/30 p-6 sm:p-8 shadow-[0_0_35px_rgba(168,85,247,0.12)] flex flex-col justify-between"
    >
      <div>
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-purple-500/15">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-purple-950/60 border border-purple-500/40 flex items-center justify-center text-purple-400">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-mono text-lg font-bold text-white tracking-wider">
                NEURAL MATRIX
              </h3>
              <span className="text-[10px] font-mono text-purple-400">
                CORE TECHNICAL COMPETENCIES
              </span>
            </div>
          </div>
          <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/30 text-purple-300">
            24 SKILLS
          </span>
        </div>

        {/* Skill Category Blocks */}
        <div className="space-y-5">
          {SKILL_CATEGORIES.map((category) => (
            <div key={category.id} className="space-y-2">
              <div className="text-xs font-mono font-semibold text-slate-300 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-purple-300">
                  <Terminal className="w-3 h-3 text-purple-400" />
                  {category.title}
                </span>
                <span className="text-[10px] font-mono text-slate-500">OPTIMIZED</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-black/60 border border-purple-500/25 hover:border-purple-400 hover:bg-purple-950/30 text-xs font-mono text-slate-200 transition-all duration-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-purple-500/15 flex items-center justify-between text-[10px] font-mono text-slate-500">
        <span className="flex items-center gap-1 text-purple-400">
          <Layers className="w-3 h-3" />
          FULL COMPILATION VERIFIED
        </span>
        <span>ZERO RUNTIME FAULTS</span>
      </div>
    </div>
  );
};
