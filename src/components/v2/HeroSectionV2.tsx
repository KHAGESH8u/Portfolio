import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Mail, Github, Linkedin, FileText, Compass } from 'lucide-react';
import { MonolithHeroCanvas } from './MonolithHeroCanvas';
import { HERO_DATA } from '../../data/portfolioData';

export const HeroSectionV2: React.FC = () => {
  return (
    <section id="hero-v2" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* 3D Gold Monolith Canvas Scene in Background */}
      <MonolithHeroCanvas />

      {/* Royal aubergine & antique gold ambient illumination */}
      <div className="absolute top-1/4 right-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#d4af37]/8 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#38165e]/20 rounded-full blur-[160px] pointer-events-none" />

      {/* Foreground Container: Editorial Layout with Headshot on LEFT, Typography on RIGHT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pointer-events-none">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center pointer-events-none">
          
          {/* Left Column (lg:col-span-5): High-Fashion Luxury Headshot Container */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 90, damping: 20, delay: 0.15 }}
              className="relative w-72 sm:w-84 md:w-96 pointer-events-auto"
            >
              {/* Outer Antique Gold Ambient Halo */}
              <div className="absolute -inset-3 rounded-[32px] bg-gradient-to-tr from-[#d4af37]/30 via-[#38165e]/40 to-[#e5c158]/30 blur-2xl opacity-70 pointer-events-none" />

              {/* Frame Container */}
              <div className="relative rounded-[28px] bg-[#0e051a]/85 backdrop-blur-3xl border border-[#d4af37]/30 p-4 shadow-[0_20px_60px_rgba(7,2,13,0.9)]">
                {/* Gold specular highlight edge */}
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#eed98d] to-transparent pointer-events-none" />

                {/* Portrait container */}
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-[#d4af37]/20">
                  <img
                    src={HERO_DATA.avatarUrl}
                    alt={HERO_DATA.name}
                    className="w-full h-full object-cover object-center filter sepia-[20%] contrast-[110%] hover:sepia-0 transition-all duration-700"
                    loading="eager"
                  />
                  {/* Subtle warm aubergine vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e051a] via-transparent to-transparent pointer-events-none" />

                  {/* Museum Placard Style Caption */}
                  <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-[#07020d]/85 backdrop-blur-md border border-[#d4af37]/25 pointer-events-none">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-serif font-bold text-[#eed98d] tracking-wider">
                          ALEXANDER VANCE
                        </div>
                        <div className="text-[10px] font-mono text-[#d4af37]/80 tracking-widest mt-0.5">
                          PRINCIPAL ARCHITECT
                        </div>
                      </div>
                      <div className="text-[10px] font-serif px-2 py-0.5 rounded border border-[#d4af37]/40 text-[#e5c158]">
                        NO. 01
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom luxury insignia */}
                <div className="mt-3 flex items-center justify-between text-[10px] font-serif text-[#d4af37]/75 px-2">
                  <span>METICULOUS PARADIGMS</span>
                  <span>AUTONOMOUS SYSTEMS</span>
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
              className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-[#150826]/80 border border-[#d4af37]/30 backdrop-blur-xl mb-6 shadow-[0_0_20px_rgba(212,175,55,0.15)] pointer-events-auto"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#e5c158] animate-ping" />
              <span className="font-serif text-xs tracking-widest text-[#eed98d] uppercase">
                FOLIO MMXXVI // LUXURY SYSTEMS
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
                <span className="bg-gradient-to-r from-[#fcf8e8] via-[#e5c158] to-[#d4af37] bg-clip-text text-transparent drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]">
                  Alexander Vance
                </span>
              </h1>
            </motion.div>

            {/* Sub-Role & Philosophical Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
              className="mt-4 pointer-events-none select-none"
            >
              <h2 className="font-serif text-lg sm:text-xl lg:text-2xl text-[#eed98d]/90 tracking-widest uppercase">
                Systems Architect & Creative Technologist
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-xl font-sans">
                Curating the boundary where advanced artificial intelligence meets haute-couture digital artistry and real-time WebGL spatial computing.
              </p>
            </motion.div>

            {/* Archival metadata line */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.3 }}
              className="mt-6 flex items-center space-x-6 text-xs font-mono text-[#d4af37]/75 pointer-events-none"
            >
              <span className="flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#e5c158]" />
                SAN FRANCISCO & WORLDWIDE
              </span>
              <span>//</span>
              <span>EST. 2018</span>
            </motion.div>

            {/* Action Buttons & Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-4 pointer-events-none"
            >
              <a
                href="#projects-v2"
                className="group inline-flex items-center space-x-2.5 px-7 py-3.5 rounded-full font-serif text-xs font-bold tracking-widest uppercase text-[#07020d] bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#eed98d] hover:brightness-110 transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.35)] hover:scale-[1.02] pointer-events-auto"
              >
                <Sparkles className="w-4 h-4 text-[#07020d]" />
                <span>EXPLORE ARCHIVE</span>
              </a>

              <a
                href="#contact-v2"
                className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full font-serif text-xs font-semibold tracking-widest uppercase text-[#eed98d] bg-[#180a2b]/80 hover:bg-[#261042] border border-[#d4af37]/40 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] pointer-events-auto"
              >
                <Mail className="w-4 h-4 text-[#e5c158]" />
                <span>INITIATE DIALOGUE</span>
              </a>

              {/* Minimal social links */}
              <div className="flex items-center space-x-2 ml-2 pointer-events-none">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full bg-[#180a2b]/60 hover:bg-[#261042] border border-[#d4af37]/30 text-slate-300 hover:text-[#e5c158] transition-all duration-200 pointer-events-auto"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full bg-[#180a2b]/60 hover:bg-[#261042] border border-[#d4af37]/30 text-slate-300 hover:text-[#e5c158] transition-all duration-200 pointer-events-auto"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#about-v2"
                  className="p-3 rounded-full bg-[#180a2b]/60 hover:bg-[#261042] border border-[#d4af37]/30 text-slate-300 hover:text-[#e5c158] transition-all duration-200 pointer-events-auto"
                  aria-label="Prologue"
                >
                  <FileText className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex justify-center pointer-events-none">
          <motion.a
            href="#about-v2"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
            className="flex flex-col items-center text-[#d4af37]/60 hover:text-[#e5c158] transition-colors pointer-events-auto"
            aria-label="Scroll to Prologue"
          >
            <span className="text-[10px] font-serif tracking-[0.25em] uppercase mb-1">
              CONTINUE DOWN
            </span>
            <ArrowDown className="w-4 h-4 text-[#e5c158]" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};
