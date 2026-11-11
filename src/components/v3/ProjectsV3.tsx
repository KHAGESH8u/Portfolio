import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, ArrowUpRight, Lock, Sparkles } from 'lucide-react';
import { PROJECTS_DATA } from '../../data/portfolioData';

export const ProjectsV3: React.FC = () => {
  const getBrowserUrl = (id: string) => {
    switch (id) {
      case 'ai-workspace-platform':
        return 'synapse.ai/workspace/canvas';
      case 'spatial-analytics-dashboard':
        return 'horizon.dev/analytics/cluster-view';
      case 'fintech-payments-app':
        return 'aura.finance/dashboard/assets';
      default:
        return 'prism.studio/glsl/live-viewport';
    }
  };

  return (
    <section id="projects-v3" className="relative py-44 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-[750px] h-[750px] bg-purple-600/12 rounded-full blur-[190px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-[750px] h-[750px] bg-fuchsia-600/10 rounded-full blur-[190px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-black/40 border border-purple-500/30 backdrop-blur-md text-xs font-mono text-purple-300 tracking-widest uppercase mb-4"
        >
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span>PRODUCTION ARTIFACTS</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-6xl font-black font-sans text-white tracking-tight"
        >
          Selected Systems & Flagships
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed"
        >
          Massive-scale collaborative architectures, real-time spatial analytics, and creative GPU tooling.
        </motion.p>
      </div>

      {/* Massive Alternating Project Sections with Generous Spacing */}
      <div className="space-y-48">
        {PROJECTS_DATA.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                type: 'spring',
                stiffness: 70,
                damping: 20
              }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
            >
              {/* Mockup Column */}
              <div
                className={`col-span-12 lg:col-span-7 ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <div className="relative group">
                  {/* Glowing neon halo behind mockup on hover */}
                  <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-purple-600/30 via-fuchsia-600/20 to-purple-400/30 blur-2xl opacity-40 group-hover:opacity-90 transition-opacity duration-700 pointer-events-none" />

                  {/* Browser Window Mockup with Frosted Glassmorphism */}
                  <div className="relative rounded-2xl overflow-hidden border border-purple-500/20 bg-black/30 backdrop-blur-lg shadow-[0_20px_50px_rgba(0,0,0,0.7)] group-hover:border-purple-400/50 group-hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] transition-all duration-500">
                    {/* Top Browser Chrome Bar */}
                    <div className="h-10 bg-black/50 backdrop-blur-md border-b border-purple-500/20 px-4 flex items-center justify-between">
                      {/* Window buttons */}
                      <div className="flex items-center space-x-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>

                      {/* URL Pill */}
                      <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-black/40 border border-purple-500/25 text-xs font-mono text-purple-200 max-w-xs truncate">
                        <Lock className="w-3 h-3 text-purple-400 shrink-0" />
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
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
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
                <div className="relative p-8 sm:p-10 rounded-3xl bg-black/30 backdrop-blur-lg border border-purple-500/20 hover:border-purple-400/40 hover:shadow-[0_0_35px_rgba(168,85,247,0.22)] transition-all duration-500 flex flex-col">
                  {/* Subtle top neon border accent */}
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-purple-400/40 to-transparent pointer-events-none" />

                  {/* Index tag */}
                  <div className="font-mono text-xs font-bold text-purple-400 uppercase tracking-widest mb-3">
                    0{index + 1} // {project.title}
                  </div>

                  {/* Subtitle */}
                  <h3 className="text-3xl sm:text-4xl font-black font-sans text-white tracking-tight leading-tight">
                    {project.subtitle}
                  </h3>

                  {/* Description */}
                  <p className="mt-5 text-base sm:text-lg text-gray-200 font-light leading-relaxed font-sans">
                    {project.description}
                  </p>

                  {/* Product Metrics Minimalist Strip */}
                  <div className="grid grid-cols-3 gap-4 my-6 p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-purple-500/20 font-mono">
                    {project.metrics.map((metric, mIdx) => (
                      <div key={mIdx}>
                        <div className="text-[10px] text-gray-400 uppercase tracking-wider">
                          {metric.label}
                        </div>
                        <div className="text-lg font-bold text-purple-300 mt-1">
                          {metric.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-full text-xs font-mono bg-purple-950/30 border border-purple-500/25 text-purple-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center space-x-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center space-x-2 px-6 py-3 rounded-full font-mono text-xs font-bold text-black bg-gradient-to-r from-purple-400 to-fuchsia-400 hover:brightness-110 shadow-[0_0_20px_rgba(168,85,247,0.35)] hover:shadow-[0_0_30px_rgba(168,85,247,0.55)] transition-all"
                    >
                      <span>LAUNCH SYSTEM</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center space-x-2 px-6 py-3 rounded-full font-mono text-xs font-medium text-gray-200 hover:text-white bg-black/40 hover:bg-black/60 border border-purple-500/25 backdrop-blur-md transition-all hover:border-purple-400/50"
                    >
                      <GitBranch className="w-4 h-4" />
                      <span>SOURCE CODE</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
