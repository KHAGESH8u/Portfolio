import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layers, BrainCircuit, ShieldCheck, Activity, Terminal, ArrowUpRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard } from '../ui/GlassCard';
import { SKILL_CATEGORIES } from '../../data/portfolioData';

export const BentoMatrix: React.FC = () => {
  const [core, frameworks, ml, leadership] = SKILL_CATEGORIES;

  return (
    <section id="skills" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background visual accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <SectionHeader
        badge="CAPABILITY ARCHITECTURE"
        title="BENTO MATRIX // COMPETENCIES"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Asymmetrical execution grid optimized for high-dimensional technical capabilities."
      />

      {/* Asymmetrical Bento Grid */}
      <div className="grid grid-cols-12 gap-6">
        {/* Tile 1: Core Competencies (Wide prominent tile) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="col-span-12 lg:col-span-7"
        >
          <GlassCard glowColor="cyan" interactive className="p-8 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {core.title}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400">PRIMARY ENGINE SPECS</p>
                  </div>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-400">
                  SYSTEM CORE
                </span>
              </div>

              <p className="text-sm text-slate-400 mb-8 leading-relaxed font-normal">
                {core.description}
              </p>

              {/* Skill Bars with numeric telemetry */}
              <div className="space-y-4">
                {core.skills.map((skill, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="text-slate-200 font-medium">{skill.name}</span>
                      <span className="text-cyan-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: idx * 0.1, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-[0_0_10px_rgba(0,242,254,0.5)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom telemetry readout */}
            <div className="mt-8 pt-5 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span className="flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-cyan-400" />
                CONCURRENCY: OPTIMIZED
              </span>
              <span>BUFFER LATENCY: 0.12MS</span>
            </div>
          </GlassCard>
        </motion.div>

        {/* Tile 2: Technical Frameworks */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.1 }}
          className="col-span-12 lg:col-span-5"
        >
          <GlassCard glowColor="purple" interactive className="p-8 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {frameworks.title}
                    </h3>
                    <p className="text-xs font-mono text-purple-400">STACK TOPOLOGY</p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-slate-500" />
              </div>

              <p className="text-sm text-slate-400 mb-6 leading-relaxed font-normal">
                {frameworks.description}
              </p>

              {/* Tag matrix layout */}
              <div className="flex flex-wrap gap-2 mb-6">
                {frameworks.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="group/tag flex items-center space-x-2 px-3 py-2 rounded-xl bg-white/[0.03] border border-white/10 hover:border-purple-400/50 hover:bg-purple-500/10 transition-all duration-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    <span className="text-xs font-mono text-slate-300 group-hover/tag:text-white">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Simulated terminal preview box */}
            <div className="p-3 rounded-lg bg-black/60 border border-white/5 font-mono text-[11px] text-slate-400 space-y-1">
              <div className="text-purple-400 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" />
                <span>$ init --stack-verify</span>
              </div>
              <div className="text-slate-500">&gt; All dependencies satisfied (0 errors)</div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Tile 3: Machine Learning Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
          className="col-span-12 lg:col-span-6"
        >
          <GlassCard glowColor="cyan" interactive className="p-8 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <BrainCircuit className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {ml.title}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400">INFERENCE & TRAINING</p>
                  </div>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                  TENSOR PIPELINE
                </span>
              </div>

              <p className="text-sm text-slate-400 mb-6 leading-relaxed font-normal">
                {ml.description}
              </p>

              {/* Progress bars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ml.skills.map((skill, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="flex justify-between items-center text-xs font-mono mb-2">
                      <span className="text-slate-200">{skill.name}</span>
                      <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-1 bg-slate-900 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: idx * 0.1 }}
                        className="h-full bg-cyan-400 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-slate-500 flex justify-between">
              <span>WEIGHT PRECISION: FP16 / INT8</span>
              <span>CUDA CORES: SYNCHRONIZED</span>
            </div>
          </GlassCard>
        </motion.div>

        {/* Tile 4: Operational Leadership / Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.3 }}
          className="col-span-12 lg:col-span-6"
        >
          <GlassCard glowColor="emerald" interactive className="p-8 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {leadership.title}
                    </h3>
                    <p className="text-xs font-mono text-emerald-400">TACTICAL EXECUTION</p>
                  </div>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                  GOVERNANCE
                </span>
              </div>

              <p className="text-sm text-slate-400 mb-6 leading-relaxed font-normal">
                {leadership.description}
              </p>

              <div className="space-y-3">
                {leadership.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 transition-colors"
                  >
                    <span className="text-xs font-mono text-slate-200">{skill.name}</span>
                    <span className="text-xs font-mono text-emerald-400 font-semibold">
                      VERIFIED // {skill.level}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-slate-500 flex justify-between">
              <span>TEAM SYNCHRONY: 100%</span>
              <span>AGILE DISCIPLINE: STRICT</span>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};
