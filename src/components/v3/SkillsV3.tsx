import React from 'react';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';
import { SKILL_CATEGORIES } from '../../data/portfolioData';

export const SkillsV3: React.FC = () => {
  return (
    <section id="skills-v3" className="relative py-44 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-purple-600/12 rounded-full blur-[180px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-black/40 border border-purple-500/30 backdrop-blur-md text-xs font-mono text-purple-300 tracking-widest uppercase mb-4"
        >
          <Cpu className="w-3.5 h-3.5 text-purple-400" />
          <span>TECHNICAL CAPABILITIES</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-6xl font-black font-sans text-white tracking-tight"
        >
          Languages, Engines & AI Stacks
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed"
        >
          An organic, battle-tested matrix of tools utilized to deploy resilient intelligent systems.
        </motion.p>
      </div>

      {/* Frosted Glassmorphic Skill Category Panels */}
      <div className="space-y-8">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{
              type: 'spring',
              stiffness: 80,
              damping: 18,
              delay: idx * 0.1
            }}
            className="relative rounded-3xl bg-black/30 backdrop-blur-lg border border-purple-500/20 p-8 sm:p-10 hover:border-purple-400/50 hover:shadow-[0_0_35px_rgba(168,85,247,0.22)] transition-all duration-500 flex flex-col md:flex-row md:items-center gap-8"
          >
            {/* Subtle top neon border accent */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-purple-400/40 to-transparent pointer-events-none" />

            {/* Category Title Column */}
            <div className="w-full md:w-1/3 shrink-0">
              <span className="font-mono text-xs text-purple-400 uppercase tracking-widest block mb-1">
                0{idx + 1} // STACK
              </span>
              <h3 className="text-2xl font-bold font-sans text-white">
                {cat.title}
              </h3>
              <p className="mt-2 text-sm text-gray-300 font-light max-w-xs leading-relaxed">
                {cat.description}
              </p>
            </div>

            {/* Floating Tag Cloud */}
            <div className="w-full md:w-2/3 flex flex-wrap gap-3">
              {cat.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-black/40 backdrop-blur-md border border-purple-500/30 hover:border-purple-400/80 text-sm font-mono text-gray-200 hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.1)] hover:shadow-[0_0_25px_rgba(168,85,247,0.35)] hover:scale-105"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <span>{skill.name}</span>
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
