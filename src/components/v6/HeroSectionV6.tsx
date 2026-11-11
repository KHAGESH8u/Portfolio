import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Mail, Github, Linkedin, FileText, Compass } from 'lucide-react';
import { HERO_DATA } from '../../data/portfolioData';

export const HeroSectionV6: React.FC = () => {
  return (
    <section
      id="hero-v6"
      className="relative w-full min-h-screen snap-start flex items-center justify-center overflow-hidden py-24 pointer-events-none"
    >
      {/* Volcanic black & ivy green ambient illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.18)_0%,rgba(5,150,105,0.1)_40%,transparent_70%)] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-emerald-500/10 rounded-full blur-[170px] pointer-events-none" />

      {/* Foreground Container: Swapped Layout (Headshot on LEFT, Typography on RIGHT) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pointer-events-none">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center pointer-events-none">
          
          {/* Left Column (lg:col-span-5): Bio-Digital Headshot Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 90, damping: 20, delay: 0.15 }}
              className="relative w-72 sm:w-84 md:w-96 pointer-events-auto"
            >
              {/* Outer Ivy Green Ambient Halo */}
              <div className="absolute -inset-3 rounded-[32px] bg-gradient-to-tr from-emerald-500/25 via-teal-900/30 to-emerald-400/25 blur-2xl opacity-60 pointer-events-none" />

              {/* Frame Container with Translucent Glass */}
              <div className="relative rounded-[28px] bg-black/40 backdrop-blur-lg border border-emerald-500/20 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.85)]">
                {/* Ivy specular highlight edge */}
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent pointer-events-none" />

                {/* Portrait container */}
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-emerald-500/25">
                  <img
                    src={HERO_DATA.avatarUrl}
                    alt={HERO_DATA.name}
                    className="w-full h-full object-cover object-center filter grayscale-[30%] contrast-[115%] hover:grayscale-0 transition-all duration-700"
                    loading="eager"
                  />
                  {/* Volcanic vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                  {/* Museum Placard Style Caption */}
                  <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-black/40 backdrop-blur-lg border border-emerald-500/25 pointer-events-none">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-serif font-bold text-emerald-300 tracking-wider">
                          ALEXANDER VANCE
                        </div>
                        <div className="text-[10px] font-mono text-emerald-400/80 tracking-widest mt-0.5">
                          BIO-DIGITAL ARCHITECT
                        </div>
                      </div>
                      <div className="text-[10px] font-serif px-2 py-0.5 rounded border border-emerald-500/40 text-emerald-400">
                        VOLCANIC IVY
                      </div>
                    </div>
                  </div>
                </div>

                {/* Archival Details under Portrait */}
                <div className="mt-3.5 px-2 flex items-center justify-between text-[11px] font-serif text-emerald-300/80">
                  <span className="flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>SAN FRANCISCO, CA</span>
                  </span>
                  <span className="font-mono text-[10px] text-emerald-500/70">
                    LAT 37.77 // LON -122.41
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column (lg:col-span-7): Massive Typography & Architecture */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left pointer-events-none">
            
            {/* Archival Classification Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-black/40 border border-emerald-500/20 backdrop-blur-lg text-xs font-serif text-emerald-300 tracking-widest uppercase shadow-[0_0_20px_rgba(16,185,129,0.15)] pointer-events-auto"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>VOLCANIC IVY BIO-EDITION // 2026 ARCHIVE</span>
            </motion.div>

            {/* Oversized Editorial Name & Epithet */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.2 }}
                className="font-serif text-5xl sm:text-7xl lg:text-8xl font-normal tracking-tight text-white leading-[1.05]"
              >
                Alexander <br />
                <span className="bg-gradient-to-r from-emerald-200 via-emerald-400 to-teal-300 bg-clip-text text-transparent italic font-light drop-shadow-[0_2px_20px_rgba(16,185,129,0.35)]">
                  Vance.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg sm:text-xl font-serif text-emerald-300/90 tracking-wide font-light max-w-xl mx-auto lg:mx-0"
              >
                Cyber-Organic AI Architect & Bio-Digital Systems Engineer
              </motion.p>
            </div>

            {/* Curated Statement */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg text-slate-300 font-light font-sans max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Splicing neural computation, cyber-organic lattice networks, and high-performance spatial infrastructure into living software systems of piercing clarity.
            </motion.p>

            {/* Action Tier */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 pointer-events-auto"
            >
              <a
                href="#projects-v6"
                className="px-8 py-3.5 rounded-full font-serif text-xs font-bold tracking-[0.18em] text-black bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-300 hover:brightness-110 transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.4)] flex items-center space-x-2 uppercase"
              >
                <Compass className="w-4 h-4" />
                <span>Explore Works</span>
              </a>

              <a
                href="#contact-v6"
                className="px-8 py-3.5 rounded-full font-serif text-xs font-medium tracking-[0.18em] text-emerald-300 bg-black/40 hover:bg-black/60 border border-emerald-500/20 backdrop-blur-lg transition-all duration-300 shadow-lg flex items-center space-x-2 uppercase"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>Initiate Consultation</span>
              </a>
            </motion.div>

            {/* Social & Pedigree Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="pt-4 flex items-center justify-center lg:justify-start space-x-6 text-emerald-400/80 pointer-events-auto"
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-300 transition-colors p-2 rounded-full hover:bg-black/40 border border-transparent hover:border-emerald-500/30"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-300 transition-colors p-2 rounded-full hover:bg-black/40 border border-transparent hover:border-emerald-500/30"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#about-v6"
                className="hover:text-emerald-300 transition-colors p-2 rounded-full hover:bg-black/40 border border-transparent hover:border-emerald-500/30"
                aria-label="Pedigree Overview"
              >
                <FileText className="w-4 h-4" />
              </a>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Downward Navigation Hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none">
        <a
          href="#about-v6"
          className="flex flex-col items-center space-y-2 text-emerald-400/70 hover:text-emerald-300 transition-colors pointer-events-auto"
          aria-label="Scroll to Prologue"
        >
          <span className="text-[10px] font-serif tracking-[0.25em] uppercase">PROLOGUE</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-emerald-400" />
        </a>
      </div>
    </section>
  );
};

export default HeroSectionV6;
