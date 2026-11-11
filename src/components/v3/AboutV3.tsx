import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu } from 'lucide-react';
import { HERO_DATA, ABOUT_DATA } from '../../data/portfolioData';

export const AboutV3: React.FC = () => {
  return (
    <section
      id="about-v3"
      className="relative w-full min-h-screen snap-start flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pointer-events-none"
    >
      {/* Background ambient neon glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-purple-600/12 rounded-full blur-[180px] pointer-events-none" />

      <div className="w-full flex flex-col items-center pointer-events-none">
        {/* Floating Headshot Avatar with Radiant Violet Aura */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="flex justify-center mb-10 pointer-events-none"
        >
          <div className="relative group pointer-events-auto">
            <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-purple-500/50 via-fuchsia-500/30 to-purple-400/40 blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-purple-400/60 shadow-[0_0_35px_rgba(168,85,247,0.45)]">
              <img
                src={HERO_DATA.avatarUrl}
                alt="Khagesh"
                className="w-full h-full object-cover object-center grayscale-[10%] group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </motion.div>

        {/* Frosted Glassmorphic Narrative Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ type: 'spring', stiffness: 80, damping: 18 }}
          className="relative w-full rounded-3xl bg-black/30 backdrop-blur-lg border border-purple-500/20 p-6 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.7)] hover:border-purple-400/40 hover:shadow-[0_0_40px_rgba(168,85,247,0.2)] transition-all duration-500 space-y-6 pointer-events-auto"
        >
          {/* Subtle top neon border accent */}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-purple-400/60 to-transparent pointer-events-none" />

          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-black/40 border border-purple-500/30 backdrop-blur-md text-xs font-mono text-purple-300 tracking-widest uppercase">
              <Terminal className="w-3.5 h-3.5 text-purple-400" />
              <span>THE ARCHITECTURAL DISCIPLINE</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-sans text-white tracking-tight leading-[1.18]">
              Engineering at the convergence of <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-purple-200 bg-clip-text text-transparent">applied intelligence</span> and scalable distributed systems.
            </h2>

            {/* Bio Paragraph 1 */}
            <p className="text-base sm:text-xl text-gray-200 font-light leading-relaxed font-sans">
              {ABOUT_DATA.bioParagraph1}
            </p>

            {/* Bio Paragraph 2 */}
            <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed font-sans max-w-3xl mx-auto">
              {ABOUT_DATA.bioParagraph2}
            </p>

            {/* Focus Pillars */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
              {ABOUT_DATA.focusAreas.map((area, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-purple-500/25 hover:border-purple-400/60 hover:shadow-[0_0_20px_rgba(168,85,247,0.25)] text-xs font-mono text-purple-200 transition-all duration-300"
                >
                  <Cpu className="w-3 h-3 text-purple-400" />
                  <span>{area}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Frosted Glass Metric Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-purple-500/20">
            {ABOUT_DATA.quickFacts.map((fact, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 rounded-2xl bg-black/30 backdrop-blur-lg border border-purple-500/20 hover:border-purple-400/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.22)] transition-all duration-300"
              >
                <span className="text-2xl sm:text-4xl font-extrabold font-mono text-white tracking-tight">
                  {fact.value}
                </span>
                <span className="text-[11px] font-mono uppercase tracking-widest text-purple-300 mt-1 text-center">
                  {fact.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
