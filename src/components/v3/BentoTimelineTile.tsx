import React from 'react';
import { GitBranch, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { TIMELINE_DATA } from '../../data/portfolioData';

export const BentoTimelineTile: React.FC = () => {
  return (
    <div
      id="timeline"
      className="relative rounded-3xl bg-[#09090b]/85 backdrop-blur-2xl border border-purple-500/30 p-6 sm:p-8 shadow-[0_0_35px_rgba(168,85,247,0.12)] flex flex-col justify-between"
    >
      <div>
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-purple-500/15">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-purple-950/60 border border-purple-500/40 flex items-center justify-center text-purple-400">
              <GitBranch className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-mono text-lg font-bold text-white tracking-wider">
                TRAJECTORY STREAM
              </h3>
              <span className="text-[10px] font-mono text-purple-400">
                CHRONOLOGICAL MILESTONES & EDUCATION
              </span>
            </div>
          </div>
          <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/30 text-purple-300">
            5 NODES
          </span>
        </div>

        {/* Timeline Items */}
        <div className="space-y-6 relative pl-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[1.5px] before:bg-gradient-to-b before:from-purple-400 before:via-purple-600/40 before:to-transparent">
          {TIMELINE_DATA.map((item) => (
            <div key={item.id} className="relative group">
              {/* Glowing Dot */}
              <div className="absolute -left-[27px] top-1.5 w-3.5 h-3.5 rounded-full bg-black border-2 border-purple-400 flex items-center justify-center shadow-[0_0_10px_rgba(168,85,247,0.6)]">
                <div className="w-1 h-1 rounded-full bg-white" />
              </div>

              <div className="p-4 rounded-2xl bg-black/60 border border-purple-500/20 group-hover:border-purple-400/50 transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-purple-300">
                    <Calendar className="w-3 h-3 text-purple-400" />
                    {item.period}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono text-slate-500">
                    <MapPin className="w-3 h-3 text-purple-400" />
                    {item.location}
                  </span>
                </div>

                <div className="font-mono text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                  {item.role}
                </div>
                <div className="text-xs font-mono text-purple-400 mb-2">
                  {item.organization}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-sans mb-3">
                  {item.description}
                </p>

                {item.highlights && item.highlights.length > 0 && (
                  <div className="space-y-1 pt-2 border-t border-purple-500/15">
                    {item.highlights.slice(0, 2).map((h, i) => (
                      <div key={i} className="flex items-start space-x-2 text-[11px] text-slate-400">
                        <CheckCircle2 className="w-3 h-3 text-purple-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
