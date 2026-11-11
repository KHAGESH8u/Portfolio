import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Sparkles, Cpu, Layers } from 'lucide-react';
import { SKILL_CATEGORIES } from '../../data/portfolioData';

export const SkillsSectionV4: React.FC = () => {
  const [languages, frontend, ai, backend] = SKILL_CATEGORIES;

  return (
    <section
      id="skills-v4"
      className="relative w-full min-h-screen snap-start flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pointer-events-none"
    >
      {/* Background ambient light */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 pointer-events-none">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#042626] border border-white/30 text-xs font-serif text-white tracking-widest uppercase mb-3 pointer-events-auto">
            <span>CHAPTER II</span>
            <span>//</span>
            <span>TECHNICAL DISCIPLINE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-white">
            <span className="bg-gradient-to-r from-white via-slate-100 to-teal-200 bg-clip-text text-transparent">
              Curated Capabilities
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-teal-50 font-light font-sans max-w-xl mx-auto leading-relaxed">
            The instruments and engineering paradigms utilized to construct enduring neural and distributed systems.
          </p>
        </div>

        {/* Asymmetric Gallery Grid cloned from V2 */}
        <div className="grid grid-cols-12 gap-5 pointer-events-none">
          
          {/* Card 1: Languages & Core (Wide Prominent) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ type: 'spring', stiffness: 90, damping: 20 }}
            className="col-span-12 lg:col-span-7 pointer-events-none"
          >
            <div className="rounded-3xl bg-[#021b1b]/85 backdrop-blur-3xl border border-white/25 p-7 sm:p-8 h-full flex flex-col justify-between hover:border-white/50 hover:shadow-[0_0_30px_rgba(45,212,191,0.25)] transition-all duration-300 pointer-events-auto">
              <div>
                <div className="flex items-center justify-between pb-3 mb-5 border-b border-white/15">
                  <div>
                    <h3 className="font-serif text-2xl text-white font-normal">
                      {languages.title}
                    </h3>
                    <span className="text-[10px] font-mono tracking-widest text-teal-300 uppercase mt-0.5 block">
                      FOUNDATIONAL VOCABULARY
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white">
                    <Compass className="w-4 h-4" />
                  </div>
                </div>

                <p className="text-teal-100/90 text-sm font-light leading-relaxed mb-6 font-sans">
                  {languages.description}
                </p>

                {/* Porcelain bordered skill chips */}
                <div className="flex flex-wrap gap-2">
                  {languages.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-xl bg-[#042626]/90 border border-white/20 hover:border-white/60 text-white text-xs font-serif tracking-wider transition-all duration-200"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-300" />
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/15 flex items-center justify-between text-xs font-serif text-teal-200">
                <span>Type safety, concurrency & memory efficiency</span>
                <span>7+ Years Polyglot</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Frontend & Spatial Creative */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ type: 'spring', stiffness: 90, damping: 20, delay: 0.1 }}
            className="col-span-12 lg:col-span-5 pointer-events-none"
          >
            <div className="rounded-3xl bg-[#021b1b]/85 backdrop-blur-3xl border border-white/25 p-7 sm:p-8 h-full flex flex-col justify-between hover:border-white/50 hover:shadow-[0_0_30px_rgba(45,212,191,0.25)] transition-all duration-300 pointer-events-auto">
              <div>
                <div className="flex items-center justify-between pb-3 mb-5 border-b border-white/15">
                  <div>
                    <h3 className="font-serif text-2xl text-white font-normal">
                      {frontend.title}
                    </h3>
                    <span className="text-[10px] font-mono tracking-widest text-teal-300 uppercase mt-0.5 block">
                      SPATIAL & INTERFACE
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>

                <p className="text-teal-100/90 text-sm font-light leading-relaxed mb-6 font-sans">
                  {frontend.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {frontend.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-xl bg-[#042626]/90 border border-white/20 hover:border-white/60 text-white text-xs font-serif tracking-wider transition-all duration-200"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-300" />
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/15 flex items-center justify-between text-xs font-serif text-teal-200">
                <span>WebGL, Shaders & 60FPS Fluidity</span>
                <span>Spatial Pioneer</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: AI / Machine Learning & Neural Systems */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ type: 'spring', stiffness: 90, damping: 20, delay: 0.15 }}
            className="col-span-12 lg:col-span-5 pointer-events-none"
          >
            <div className="rounded-3xl bg-[#021b1b]/85 backdrop-blur-3xl border border-white/25 p-7 sm:p-8 h-full flex flex-col justify-between hover:border-white/50 hover:shadow-[0_0_30px_rgba(45,212,191,0.25)] transition-all duration-300 pointer-events-auto">
              <div>
                <div className="flex items-center justify-between pb-3 mb-5 border-b border-white/15">
                  <div>
                    <h3 className="font-serif text-2xl text-white font-normal">
                      {ai.title}
                    </h3>
                    <span className="text-[10px] font-mono tracking-widest text-teal-300 uppercase mt-0.5 block">
                      NEURAL COMPUTE
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white">
                    <Cpu className="w-4 h-4" />
                  </div>
                </div>

                <p className="text-teal-100/90 text-sm font-light leading-relaxed mb-6 font-sans">
                  {ai.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {ai.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-xl bg-[#042626]/90 border border-white/20 hover:border-white/60 text-white text-xs font-serif tracking-wider transition-all duration-200"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-300" />
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/15 flex items-center justify-between text-xs font-serif text-teal-200">
                <span>Transformers, LangGraph & RAG Runtimes</span>
                <span>Production SOTA</span>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Backend, Cloud & Distributed Systems (Wide Prominent) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ type: 'spring', stiffness: 90, damping: 20, delay: 0.2 }}
            className="col-span-12 lg:col-span-7 pointer-events-none"
          >
            <div className="rounded-3xl bg-[#021b1b]/85 backdrop-blur-3xl border border-white/25 p-7 sm:p-8 h-full flex flex-col justify-between hover:border-white/50 hover:shadow-[0_0_30px_rgba(45,212,191,0.25)] transition-all duration-300 pointer-events-auto">
              <div>
                <div className="flex items-center justify-between pb-3 mb-5 border-b border-white/15">
                  <div>
                    <h3 className="font-serif text-2xl text-white font-normal">
                      {backend.title}
                    </h3>
                    <span className="text-[10px] font-mono tracking-widest text-teal-300 uppercase mt-0.5 block">
                      INFRASTRUCTURE & ORCHESTRATION
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white">
                    <Layers className="w-4 h-4" />
                  </div>
                </div>

                <p className="text-teal-100/90 text-sm font-light leading-relaxed mb-6 font-sans">
                  {backend.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {backend.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-xl bg-[#042626]/90 border border-white/20 hover:border-white/60 text-white text-xs font-serif tracking-wider transition-all duration-200"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-300" />
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/15 flex items-center justify-between text-xs font-serif text-teal-200">
                <span>Distributed consensus, Redis, Kafka & K8s</span>
                <span>99.999% Reliability</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
