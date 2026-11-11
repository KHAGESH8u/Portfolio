import React from 'react';
import { ExternalLink, GitBranch, ArrowUpRight, Lock, Layers } from 'lucide-react';
import { PROJECTS_DATA } from '../../data/portfolioData';

export const BentoProjectsTile: React.FC = () => {
  return (
    <div
      id="projects"
      className="relative rounded-3xl bg-[#09090b]/85 backdrop-blur-2xl border border-purple-500/30 p-6 sm:p-8 shadow-[0_0_35px_rgba(168,85,247,0.12)] flex flex-col justify-between"
    >
      <div>
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-purple-500/15">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-purple-950/60 border border-purple-500/40 flex items-center justify-center text-purple-400">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-mono text-lg font-bold text-white tracking-wider">
                DEPLOYED CORES
              </h3>
              <span className="text-[10px] font-mono text-purple-400">
                PRODUCTION PLATFORMS & FRAMEWORKS
              </span>
            </div>
          </div>
          <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/30 text-purple-300">
            4 BUILDS
          </span>
        </div>

        {/* 2x2 Grid of Projects inside the tile */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-black/70 border border-purple-500/25 p-5 hover:border-purple-400/60 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Card Header */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-bold text-purple-400 uppercase tracking-widest">
                    {project.title}
                  </span>
                  <div className="flex items-center space-x-1.5">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-md bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                      aria-label="Repository"
                    >
                      <GitBranch className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-md bg-white/5 hover:bg-purple-950/40 text-slate-400 hover:text-purple-300 transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Browser Mockup Frame */}
                <div className="relative rounded-xl overflow-hidden mb-4 border border-purple-500/20 bg-black">
                  <div className="h-7 bg-[#0c0a13] border-b border-purple-500/20 px-2.5 flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <span className="w-2 h-2 rounded-full bg-rose-500/80" />
                      <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                      <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="flex items-center space-x-1 px-2 py-0.5 rounded bg-black/60 text-[9px] font-mono text-purple-300 truncate max-w-[140px]">
                      <Lock className="w-2.5 h-2.5 text-purple-400 shrink-0" />
                      <span className="truncate">khagesh.ai/{project.id}</span>
                    </div>
                    <div className="w-4" />
                  </div>

                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.subtitle}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Subtitle & Description */}
                <h4 className="font-mono text-base font-bold text-white group-hover:text-purple-300 transition-colors flex items-center justify-between">
                  <span>{project.subtitle}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </h4>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed font-sans line-clamp-2">
                  {project.description}
                </p>
              </div>

              {/* Metrics & Tags */}
              <div className="mt-4 pt-3 border-t border-purple-500/15">
                <div className="grid grid-cols-3 gap-2 py-1.5 mb-3 bg-purple-950/20 rounded-lg text-center font-mono">
                  {project.metrics.map((m, mIdx) => (
                    <div key={mIdx}>
                      <div className="text-[8px] text-slate-500 uppercase">{m.label}</div>
                      <div className="text-xs font-bold text-purple-300">{m.value}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/5 border border-purple-500/20 text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
