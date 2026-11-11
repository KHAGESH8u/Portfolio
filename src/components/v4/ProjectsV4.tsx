import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, ArrowUpRight, Lock, Sparkles } from 'lucide-react';
import { PROJECTS_DATA } from '../../data/portfolioData';

export const ProjectsV4: React.FC = () => {
  const getBrowserUrl = (id: string) => {
    switch (id) {
      case 'ai-workspace-platform':
        return 'synapse.teal/workspace/canvas';
      case 'spatial-analytics-dashboard':
        return 'horizon.dev/analytics/cluster-view';
      case 'fintech-payments-app':
        return 'aura.finance/dashboard/assets';
      default:
        return 'prism.studio/glsl/live-viewport';
    }
  };

  return (
    <div id="projects-v4" className="w-full">
      {PROJECTS_DATA.map((project, index) => {
        const isEven = index % 2 === 0;

        return (
          <section
            key={project.id}
            className="relative w-full min-h-screen snap-start flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pointer-events-none"
          >
            {/* Background ambient lighting */}
            <div className="absolute top-1/4 right-1/4 w-[750px] h-[750px] bg-teal-500/12 rounded-full blur-[190px] pointer-events-none" />
            <div className="absolute bottom-1/3 left-1/4 w-[750px] h-[750px] bg-cyan-500/10 rounded-full blur-[190px] pointer-events-none" />

            <div className="w-full">
              {/* Optional Section Tag for first project */}
              {index === 0 && (
                <div className="text-center max-w-3xl mx-auto mb-10 pointer-events-none">
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#021b1b]/60 border border-teal-400/30 backdrop-blur-md text-xs font-mono text-teal-200 tracking-widest uppercase"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-teal-300" />
                    <span>PRODUCTION ARTIFACTS</span>
                  </motion.div>
                </div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  type: 'spring',
                  stiffness: 70,
                  damping: 20
                }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
              >
                {/* Mockup Column */}
                <div
                  className={`col-span-12 lg:col-span-7 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="relative group pointer-events-auto">
                    {/* Glowing teal halo behind mockup on hover */}
                    <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-teal-500/30 via-cyan-400/20 to-white/20 blur-2xl opacity-40 group-hover:opacity-90 transition-opacity duration-700 pointer-events-none" />

                    {/* Browser Window Mockup with Frosted Glassmorphism */}
                    <div className="relative rounded-2xl overflow-hidden border border-teal-500/25 bg-[#021b1b]/50 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,10,10,0.8)] group-hover:border-white/50 group-hover:shadow-[0_0_40px_rgba(45,212,191,0.3)] transition-all duration-500">
                      {/* Top Browser Chrome Bar */}
                      <div className="h-10 bg-[#011414]/70 backdrop-blur-md border-b border-teal-500/20 px-4 flex items-center justify-between">
                        {/* Window buttons */}
                        <div className="flex items-center space-x-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                        </div>

                        {/* URL Pill */}
                        <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-black/40 border border-teal-500/25 text-xs font-mono text-teal-200 max-w-xs truncate">
                          <Lock className="w-3 h-3 text-teal-300 shrink-0" />
                          <span className="truncate">{getBrowserUrl(project.id)}</span>
                        </div>

                        <div className="w-10" />
                      </div>

                      {/* Screenshot Viewport */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-black/80">
                        <img
                          src={project.image}
                          alt={project.subtitle}
                          className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#011414]/70 via-transparent to-transparent pointer-events-none" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text Narrative Column with Frosted Glass Card Container */}
                <div
                  className={`col-span-12 lg:col-span-5 flex flex-col justify-center ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="relative p-6 sm:p-8 rounded-3xl bg-[#021b1b]/50 backdrop-blur-xl border border-teal-500/25 hover:border-white/50 hover:shadow-[0_0_35px_rgba(45,212,191,0.25)] transition-all duration-500 flex flex-col pointer-events-auto">
                    {/* Subtle top porcelain border accent */}
                    <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />

                    {/* Index tag */}
                    <div className="font-mono text-xs font-bold text-teal-300 uppercase tracking-widest mb-2">
                      0{index + 1} // {project.title}
                    </div>

                    {/* Subtitle */}
                    <h3 className="text-2xl sm:text-3xl font-black font-sans text-white tracking-tight leading-tight">
                      {project.subtitle}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-sm sm:text-base text-teal-50 font-light leading-relaxed font-sans">
                      {project.description}
                    </p>

                    {/* Product Metrics Minimalist Strip */}
                    <div className="grid grid-cols-3 gap-3 my-4 p-3 rounded-2xl bg-[#011414]/60 backdrop-blur-md border border-teal-500/20 font-mono">
                      {project.metrics.map((metric, mIdx) => (
                        <div key={mIdx}>
                          <div className="text-[9px] text-teal-300/80 uppercase tracking-wider">
                            {metric.label}
                          </div>
                          <div className="text-base font-bold text-white mt-0.5">
                            {metric.value}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-teal-950/50 border border-teal-500/30 text-teal-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center space-x-3 pointer-events-auto">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full font-mono text-xs font-bold text-[#011414] bg-gradient-to-r from-teal-200 via-white to-teal-300 hover:brightness-110 shadow-[0_0_20px_rgba(45,212,191,0.35)] hover:shadow-[0_0_30px_rgba(45,212,191,0.6)] transition-all pointer-events-auto"
                      >
                        <span>LAUNCH SYSTEM</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full font-mono text-xs font-medium text-teal-100 hover:text-white bg-[#011414]/60 hover:bg-[#011414]/90 border border-teal-500/30 backdrop-blur-md transition-all hover:border-white/50 pointer-events-auto"
                      >
                        <GitBranch className="w-3.5 h-3.5" />
                        <span>SOURCE CODE</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        );
      })}
    </div>
  );
};
