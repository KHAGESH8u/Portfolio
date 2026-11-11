import React from 'react';
import { Award, Trophy, Medal, Crown, Sparkles } from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../../data/portfolioData';

export const BentoAccoladesTile: React.FC = () => {
  const iconList = [Crown, Trophy, Award, Medal];

  return (
    <div className="relative rounded-3xl bg-[#09090b]/85 backdrop-blur-2xl border border-purple-500/30 p-6 sm:p-8 shadow-[0_0_35px_rgba(168,85,247,0.12)] flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-purple-500/15">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-purple-950/60 border border-purple-500/40 flex items-center justify-center text-purple-400">
            <Trophy className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-mono text-lg font-bold text-white tracking-wider">
              RECOGNITIONS & FELLOWSHIPS
            </h3>
            <span className="text-[10px] font-mono text-purple-400">
              FORMAL CITATIONS & INNOVATION GRANTS
            </span>
          </div>
        </div>
        <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/30 text-purple-300">
          TIER 1
        </span>
      </div>

      {/* Grid of 4 honors */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {ACHIEVEMENTS_DATA.map((item, index) => {
          const Icon = iconList[index % iconList.length];
          return (
            <div
              key={item.id}
              className="p-4 rounded-2xl bg-black/70 border border-purple-500/20 hover:border-purple-400/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-950/60 border border-purple-500/40 flex items-center justify-center text-purple-300">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-purple-400 px-2 py-0.5 rounded bg-purple-500/10">
                    {item.year}
                  </span>
                </div>

                <div className="text-[9px] font-mono text-fuchsia-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5" />
                  {item.badge}
                </div>

                <h4 className="font-mono text-sm font-bold text-white mb-1">
                  {item.title}
                </h4>

                <p className="text-[11px] font-mono text-slate-400 mb-2">
                  {item.organization}
                </p>

                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-purple-500/15 text-[9px] font-mono text-slate-500 flex justify-between">
                <span>VERIFIED</span>
                <span className="text-purple-400">OFFICIAL</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
