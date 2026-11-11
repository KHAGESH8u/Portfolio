import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Sparkles } from 'lucide-react';
import { SKILL_CATEGORIES } from '../../data/portfolioData';

export const SkillsSectionV2: React.FC = () => {
  const [languages, frontend, ai, backend] = SKILL_CATEGORIES;

  return (
    <section id="skills-v2" className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background ambient light */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#d4af37]/8 rounded-full blur-[160px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#150826] border border-[#d4af37]/30 text-xs font-serif text-[#eed98d] tracking-widest uppercase mb-4">
          <span>CHAPTER II</span>
          <span>//</span>
          <span>TECHNICAL DISCIPLINE</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-white">
          <span className="bg-gradient-to-r from-[#fcf8e8] via-[#e5c158] to-[#d4af37] bg-clip-text text-transparent">
            Curated Capabilities
          </span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-300 font-light font-sans max-w-xl mx-auto leading-relaxed">
          The instruments and engineering paradigms utilized to construct enduring digital systems.
        </p>
      </div>

      {/* Asymmetric Gallery Grid */}
      <div className="grid grid-cols-12 gap-6">
        
        {/* Card 1: Languages & Core (Wide Prominent) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ type: 'spring', stiffness: 90, damping: 20 }}
          className="col-span-12 lg:col-span-7"
        >
          <div className="rounded-3xl bg-[#0e051a]/80 backdrop-blur-3xl border border-[#d4af37]/25 p-8 sm:p-10 h-full flex flex-col justify-between hover:border-[#eed98d]/40 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#d4af37]/15">
                <div>
                  <h3 className="font-serif text-2xl text-white font-normal">
                    {languages.title}
                  </h3>
                  <span className="text-[10px] font-mono tracking-widest text-[#d4af37]/80 uppercase mt-0.5 block">
                    FOUNDATIONAL VOCABULARY
                  </span>
                </div>
                <div className="w-9 h-9 rounded-full border border-[#d4af37]/30 flex items-center justify-center text-[#e5c158]">
                  <Compass className="w-4 h-4" />
                </div>
              </div>

              <p className="text-slate-300 text-sm font-light leading-relaxed mb-8">
                {languages.description}
              </p>

              {/* Gold bordered skill chips */}
              <div className="flex flex-wrap gap-2.5">
                {languages.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-[#150826]/90 border border-[#d4af37]/25 hover:border-[#eed98d]/60 text-slate-200 text-xs font-serif tracking-wider transition-all duration-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e5c158]" />
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-[#d4af37]/15 flex items-center justify-between text-xs font-serif text-[#eed98d]/80">
              <span>Type safety, concurrency & memory efficiency</span>
              <span>7+ Years Polyglot</span>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Frontend & Creative */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ type: 'spring', stiffness: 90, damping: 20, delay: 0.1 }}
          className="col-span-12 lg:col-span-5"
        >
          <div className="rounded-3xl bg-[#0e051a]/80 backdrop-blur-3xl border border-[#d4af37]/25 p-8 h-full flex flex-col justify-between hover:border-[#eed98d]/40 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#d4af37]/15">
                <div>
                  <h3 className="font-serif text-2xl text-white font-normal">
                    {frontend.title}
                  </h3>
                  <span className="text-[10px] font-mono tracking-widest text-[#d4af37]/80 uppercase mt-0.5 block">
                    SPATIAL COMPUTING & INTERFACE
                  </span>
                </div>
                <Sparkles className="w-5 h-5 text-[#e5c158]" />
              </div>

              <p className="text-slate-300 text-sm font-light leading-relaxed mb-6">
                {frontend.description}
              </p>

              <div className="flex flex-wrap gap-2.5">
                {frontend.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-xl bg-[#150826]/90 border border-[#d4af37]/20 text-slate-200 text-xs font-serif tracking-wider"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#eed98d]" />
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#d4af37]/15 flex items-center justify-between text-xs font-serif text-[#eed98d]/80">
              <span>WebGL & React Ecosystem</span>
              <span>60 FPS Fluidity</span>
            </div>
          </div>
        </motion.div>

        {/* Card 3: AI & Machine Learning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ type: 'spring', stiffness: 90, damping: 20, delay: 0.2 }}
          className="col-span-12 lg:col-span-6"
        >
          <div className="rounded-3xl bg-[#0e051a]/80 backdrop-blur-3xl border border-[#d4af37]/25 p-8 h-full flex flex-col justify-between hover:border-[#eed98d]/40 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#d4af37]/15">
                <div>
                  <h3 className="font-serif text-2xl text-white font-normal">
                    {ai.title}
                  </h3>
                  <span className="text-[10px] font-mono tracking-widest text-[#d4af37]/80 uppercase mt-0.5 block">
                    COGNITIVE ARCHITECTURES
                  </span>
                </div>
              </div>

              <p className="text-slate-300 text-sm font-light leading-relaxed mb-6">
                {ai.description}
              </p>

              <div className="flex flex-wrap gap-2.5">
                {ai.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-xl bg-[#150826]/90 border border-[#d4af37]/20 text-slate-200 text-xs font-serif tracking-wider"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#e5c158]" />
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#d4af37]/15 flex items-center justify-between text-xs font-serif text-[#eed98d]/80">
              <span>Latent Vector Topologies</span>
              <span>Autonomous Agents</span>
            </div>
          </div>
        </motion.div>

        {/* Card 4: Backend & Cloud Infrastructure */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ type: 'spring', stiffness: 90, damping: 20, delay: 0.3 }}
          className="col-span-12 lg:col-span-6"
        >
          <div className="rounded-3xl bg-[#0e051a]/80 backdrop-blur-3xl border border-[#d4af37]/25 p-8 h-full flex flex-col justify-between hover:border-[#eed98d]/40 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#d4af37]/15">
                <div>
                  <h3 className="font-serif text-2xl text-white font-normal">
                    {backend.title}
                  </h3>
                  <span className="text-[10px] font-mono tracking-widest text-[#d4af37]/80 uppercase mt-0.5 block">
                    DISTRIBUTED RESILIENCE
                  </span>
                </div>
              </div>

              <p className="text-slate-300 text-sm font-light leading-relaxed mb-6">
                {backend.description}
              </p>

              <div className="flex flex-wrap gap-2.5">
                {backend.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-xl bg-[#150826]/90 border border-[#d4af37]/20 text-slate-200 text-xs font-serif tracking-wider"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#eed98d]" />
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#d4af37]/15 flex items-center justify-between text-xs font-serif text-[#eed98d]/80">
              <span>Cloud Microservices</span>
              <span>Zero-Downtime Resilience</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
