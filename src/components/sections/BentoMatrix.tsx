import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Brain, Cloud, Sparkles, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard } from '../ui/GlassCard';
import { SKILL_CATEGORIES } from '../../data/portfolioData';

export const BentoMatrix: React.FC = () => {
  const [languages, frontend, ai, backend] = SKILL_CATEGORIES;

  return (
    <section id="skills" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <SectionHeader
        badge="TECHNICAL EXPERTISE"
        title="Skills & Technologies"
        subtitle="A comprehensive overview of the programming languages, frontend ecosystems, AI frameworks, and cloud infrastructure I specialize in."
      />

      {/* Asymmetrical Bento Tag Cloud Grid */}
      <div className="grid grid-cols-12 gap-6">
        
        {/* Tile 1: Languages & Core Runtimes (Prominent Tile) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="col-span-12 lg:col-span-7"
        >
          <GlassCard glowColor="cyan" interactive className="p-8 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {languages.title}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400">FOUNDATIONAL STACK</p>
                  </div>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                  CORE ENGINES
                </span>
              </div>

              <p className="text-sm text-slate-400 mb-6 leading-relaxed font-normal">
                {languages.description}
              </p>

              {/* Glassmorphic Tag Cloud */}
              <div className="flex flex-wrap gap-2.5">
                {languages.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-slate-900/80 hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-400/40 text-slate-200 text-sm font-medium transition-all duration-200"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                Specialized in type safety & concurrent paradigms
              </span>
              <span>7+ Years Polyglot</span>
            </div>
          </GlassCard>
        </motion.div>

        {/* Tile 2: Frontend & Creative Tech */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.1 }}
          className="col-span-12 lg:col-span-5"
        >
          <GlassCard glowColor="purple" interactive className="p-8 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <Palette className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {frontend.title}
                    </h3>
                    <p className="text-xs font-mono text-purple-400">GRAPHICS & INTERFACES</p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-400 mb-6 leading-relaxed font-normal">
                {frontend.description}
              </p>

              {/* Tag Cloud */}
              <div className="flex flex-wrap gap-2.5">
                {frontend.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-slate-900/80 hover:bg-purple-500/10 border border-white/10 hover:border-purple-400/40 text-slate-200 text-sm font-medium transition-all duration-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>WebGL & React Ecosystem</span>
              <span className="text-purple-400">Cinematic 60 FPS</span>
            </div>
          </GlassCard>
        </motion.div>

        {/* Tile 3: AI & Machine Learning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
          className="col-span-12 lg:col-span-6"
        >
          <GlassCard glowColor="cyan" interactive className="p-8 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Brain className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {ai.title}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400">INTELLIGENT AGENTS</p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-400 mb-6 leading-relaxed font-normal">
                {ai.description}
              </p>

              {/* Tag Cloud */}
              <div className="flex flex-wrap gap-2.5">
                {ai.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-slate-900/80 hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-400/40 text-slate-200 text-sm font-medium transition-all duration-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Applied LLM Pipelines</span>
              <span className="text-cyan-400">Vector Embeddings</span>
            </div>
          </GlassCard>
        </motion.div>

        {/* Tile 4: Backend & Cloud Infrastructure */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.3 }}
          className="col-span-12 lg:col-span-6"
        >
          <GlassCard glowColor="emerald" interactive className="p-8 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Cloud className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {backend.title}
                    </h3>
                    <p className="text-xs font-mono text-emerald-400">SCALABLE INFRASTRUCTURE</p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-400 mb-6 leading-relaxed font-normal">
                {backend.description}
              </p>

              {/* Tag Cloud */}
              <div className="flex flex-wrap gap-2.5">
                {backend.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-slate-900/80 hover:bg-emerald-500/10 border border-white/10 hover:border-emerald-400/40 text-slate-200 text-sm font-medium transition-all duration-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Cloud Native & Microservices</span>
              <span className="text-emerald-400">Zero-Downtime</span>
            </div>
          </GlassCard>
        </motion.div>

      </div>
    </section>
  );
};
