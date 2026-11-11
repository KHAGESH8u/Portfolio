import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Github, Linkedin, FileText, Compass } from 'lucide-react';
import { HERO_DATA } from '../../data/portfolioData';

export const HeroSectionV4: React.FC = () => {
  return (
    <section
      id="hero-v4"
      className="relative w-full min-h-screen snap-start flex items-center justify-center overflow-hidden py-20 pointer-events-none"
    >
      {/* Radiant Deep Teal & Porcelain Ambient Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.25)_0%,rgba(13,78,77,0.18)_40%,transparent_70%)] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-white/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-teal-500/15 rounded-full blur-[160px] pointer-events-none" />

      {/* Foreground Container: Cloned V2 Editorial Layout (Headshot on LEFT, Typography on RIGHT) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pointer-events-none">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center pointer-events-none">
          
          {/* Left Column (lg:col-span-5): High-Fashion Luxury Headshot Container */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 90, damping: 20, delay: 0.15 }}
              className="relative w-72 sm:w-84 md:w-96 pointer-events-auto"
            >
              {/* Outer Porcelain & Teal Ambient Halo */}
              <div className="absolute -inset-3 rounded-[32px] bg-gradient-to-tr from-white/30 via-teal-500/30 to-teal-200/30 blur-2xl opacity-70 pointer-events-none" />

              {/* Frame Container */}
              <div className="relative rounded-[28px] bg-[#021b1b]/85 backdrop-blur-3xl border border-white/30 p-4 shadow-[0_20px_60px_rgba(0,10,10,0.9)]">
                {/* Porcelain specular highlight edge */}
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none" />

                {/* Portrait container */}
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-teal-500/30">
                  <img
                    src={HERO_DATA.avatarUrl}
                    alt="Khagesh"
                    className="w-full h-full object-cover object-center filter contrast-[105%] hover:contrast-[115%] transition-all duration-700"
                    loading="eager"
                  />
                  {/* Subtle deep teal vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#021b1b] via-transparent to-transparent pointer-events-none" />

                  {/* Museum Placard Style Caption */}
                  <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-[#011414]/90 backdrop-blur-md border border-white/20 pointer-events-none">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-serif font-bold text-white tracking-wider">
                          KHAGESH
                        </div>
                        <div className="text-[10px] font-mono text-teal-300 tracking-widest mt-0.5">
                          PRINCIPAL ARCHITECT
                        </div>
                      </div>
                      <div className="text-[10px] font-serif px-2 py-0.5 rounded border border-white/40 text-white">
                        NO. 01
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom luxury insignia */}
                <div className="mt-3 flex items-center justify-between text-[10px] font-serif text-teal-200/80 px-2">
                  <span>METICULOUS PARADIGMS</span>
                  <span>NEURAL SYSTEMS</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column (lg:col-span-7): Haute-Couture Personal Typography */}
          <div className="lg:col-span-7 flex flex-col items-start text-left pointer-events-none pl-0 lg:pl-4">
            
            {/* Archival Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 140, damping: 20 }}
              className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-[#042626]/80 border border-white/30 backdrop-blur-xl mb-6 shadow-[0_0_20px_rgba(45,212,191,0.2)] pointer-events-auto"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
              <span className="font-serif text-xs tracking-widest text-white uppercase">
                FOLIO MMXXVI // NEURAL SYSTEMS
              </span>
            </motion.div>

            {/* Oversized Editorial Name */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.1 }}
              className="pointer-events-none select-none"
            >
              <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-normal tracking-tight text-white leading-[1.04]">
                <span className="bg-gradient-to-r from-white via-slate-100 to-teal-200 bg-clip-text text-transparent drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]">
                  Khagesh
                </span>
              </h1>
            </motion.div>

            {/* Haute-Couture Subtitle & Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
              className="mt-6 max-w-2xl pointer-events-none"
            >
              <h2 className="font-serif text-xl sm:text-2xl text-white font-light tracking-wide leading-snug">
                AI & Autonomous Systems Architect // Creative Technologist
              </h2>
              <p className="mt-4 text-base sm:text-lg text-teal-50/90 font-light font-sans leading-relaxed">
                Engineering at the intersection of deep neural networks, accelerated spatial graphics, and high-concurrency runtime environments with porcelain clarity.
              </p>
            </motion.div>

            {/* Actions & Credentials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6 pointer-events-none"
            >
              {/* Primary Luxury CTA */}
              <a
                href="#contact-v4"
                className="group relative inline-flex items-center space-x-3 px-8 py-4 rounded-full font-serif text-xs tracking-widest text-[#011414] bg-gradient-to-r from-teal-200 via-white to-teal-300 font-bold uppercase transition-all duration-300 shadow-[0_0_30px_rgba(45,212,191,0.45)] hover:shadow-[0_0_45px_rgba(45,212,191,0.7)] hover:scale-[1.03] pointer-events-auto"
              >
                <Sparkles className="w-4 h-4 text-[#011414] group-hover:rotate-45 transition-transform duration-300" />
                <span>INITIATE CONSULTATION</span>
              </a>

              {/* Secondary Archival CTA */}
              <a
                href="#projects-v4"
                className="inline-flex items-center space-x-2 px-8 py-4 rounded-full font-serif text-xs tracking-widest text-white bg-[#021b1b]/70 hover:bg-[#021b1b]/95 border border-white/30 backdrop-blur-xl transition-all duration-300 hover:border-white/60 hover:shadow-[0_0_20px_rgba(45,212,191,0.2)] hover:scale-[1.03] pointer-events-auto"
              >
                <span>CURATED ARCHIVE</span>
                <Compass className="w-3.5 h-3.5 text-teal-300" />
              </a>

              {/* Social Pillars */}
              <div className="flex items-center space-x-2.5 pt-2 sm:pt-0 pointer-events-none">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-full bg-[#021b1b]/70 hover:bg-[#021b1b]/95 border border-white/25 text-teal-100 hover:text-white hover:border-white/60 transition-all duration-200 pointer-events-auto shadow-[0_0_15px_rgba(45,212,191,0.15)]"
                  aria-label="GitHub Archive"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-full bg-[#021b1b]/70 hover:bg-[#021b1b]/95 border border-white/25 text-teal-100 hover:text-white hover:border-white/60 transition-all duration-200 pointer-events-auto shadow-[0_0_15px_rgba(45,212,191,0.15)]"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#about-v4"
                  className="p-3.5 rounded-full bg-[#021b1b]/70 hover:bg-[#021b1b]/95 border border-white/25 text-teal-100 hover:text-white hover:border-white/60 transition-all duration-200 pointer-events-auto shadow-[0_0_15px_rgba(45,212,191,0.15)]"
                  aria-label="Curator Bio"
                >
                  <FileText className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Scroll Prompt */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
          className="mt-16 flex justify-center pointer-events-auto"
        >
          <a
            href="#about-v4"
            className="flex flex-col items-center text-teal-300/80 hover:text-white transition-colors"
            aria-label="Scroll down"
          >
            <span className="text-[9px] font-serif tracking-[0.3em] uppercase mb-1">
              EXPLORE PROLOGUE
            </span>
            <ArrowDown className="w-4 h-4 text-teal-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
