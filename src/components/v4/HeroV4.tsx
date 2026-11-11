import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Mail, Github, Linkedin, FileText, MapPin } from 'lucide-react';

export const HeroV4: React.FC = () => {
  return (
    <section
      id="hero-v4"
      className="relative w-full min-h-screen snap-start flex items-center justify-center overflow-hidden py-16 pointer-events-none"
    >
      {/* Radiant Deep Teal Atmospheric Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-teal-500/15 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-cyan-400/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Foreground Hero Content: Centered, Porcelain White Typography */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center flex flex-col items-center pointer-events-none">
        
        {/* Status Pill with Porcelain Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 180, damping: 20 }}
          className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-[#021b1b]/60 border border-teal-400/30 backdrop-blur-lg mb-8 shadow-[0_0_25px_rgba(45,212,191,0.2)] pointer-events-auto"
        >
          <span className="w-2 h-2 rounded-full bg-teal-300 animate-ping" />
          <span className="font-mono text-xs text-teal-200 font-semibold tracking-wider">
            DEEP TEAL & PORCELAIN // HIGH-PRECISION ARCHITECTURE
          </span>
        </motion.div>

        {/* Centered Massive Name: KHAGESH */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.1 }}
          className="text-6xl sm:text-8xl md:text-9xl font-black font-sans tracking-tighter text-white select-none leading-none drop-shadow-[0_15px_40px_rgba(0,15,15,0.9)] pointer-events-none"
        >
          <span className="bg-gradient-to-b from-white via-slate-100 to-teal-200 bg-clip-text text-transparent">
            Khagesh
          </span>
        </motion.h1>

        {/* Title with Radiant Porcelain & Teal Gradient */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
          className="mt-6 sm:mt-8 max-w-3xl pointer-events-none"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-sans tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-white via-teal-100 to-teal-300 bg-clip-text text-transparent">
              AI & Autonomous Systems Architect
            </span>
          </h2>
          
          <p className="mt-6 text-base sm:text-xl text-teal-50/90 font-light leading-relaxed max-w-2xl mx-auto font-sans">
            Designing resilient distributed intelligence, accelerated tensor runtimes, and liquid spatial interfaces with porcelain clarity.
          </p>

          <div className="mt-4 flex items-center justify-center space-x-2 text-xs font-mono text-teal-300/80">
            <MapPin className="w-3.5 h-3.5 text-teal-400" />
            <span>SAN FRANCISCO, CALIFORNIA // WORLDWIDE</span>
          </div>
        </motion.div>

        {/* Action Buttons & Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.35 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-5 pointer-events-none"
        >
          <a
            href="#projects-v4"
            className="group inline-flex items-center space-x-2.5 px-8 py-4 rounded-full font-mono text-xs font-bold tracking-wider text-[#011414] bg-gradient-to-r from-teal-200 via-white to-teal-300 hover:brightness-110 transition-all duration-300 shadow-[0_0_30px_rgba(45,212,191,0.45)] hover:shadow-[0_0_45px_rgba(45,212,191,0.7)] hover:scale-[1.03] pointer-events-auto"
          >
            <Sparkles className="w-4 h-4 text-[#011414] group-hover:rotate-12 transition-transform duration-300" />
            <span>EXPLORE WORK</span>
          </a>

          <a
            href="#contact-v4"
            className="inline-flex items-center space-x-2.5 px-8 py-4 rounded-full font-mono text-xs font-semibold tracking-wider text-teal-100 bg-[#021b1b]/50 hover:bg-[#021b1b]/80 border border-teal-400/40 backdrop-blur-lg transition-all duration-300 hover:border-white/60 hover:shadow-[0_0_30px_rgba(45,212,191,0.25)] hover:scale-[1.03] pointer-events-auto"
          >
            <Mail className="w-4 h-4 text-teal-300" />
            <span>INITIATE CONTACT</span>
          </a>

          <div className="flex items-center space-x-2 ml-2 pointer-events-none">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-3.5 rounded-full bg-[#021b1b]/50 hover:bg-[#021b1b]/80 border border-teal-500/30 backdrop-blur-lg text-teal-100 hover:text-white hover:border-teal-300/60 hover:shadow-[0_0_20px_rgba(45,212,191,0.3)] transition-all duration-300 pointer-events-auto"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-3.5 rounded-full bg-[#021b1b]/50 hover:bg-[#021b1b]/80 border border-teal-500/30 backdrop-blur-lg text-teal-100 hover:text-white hover:border-teal-300/60 hover:shadow-[0_0_20px_rgba(45,212,191,0.3)] transition-all duration-300 pointer-events-auto"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#about-v4"
              className="p-3.5 rounded-full bg-[#021b1b]/50 hover:bg-[#021b1b]/80 border border-teal-500/30 backdrop-blur-lg text-teal-100 hover:text-white hover:border-teal-300/60 hover:shadow-[0_0_20px_rgba(45,212,191,0.3)] transition-all duration-300 pointer-events-auto"
              aria-label="About"
            >
              <FileText className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Scroll Prompt */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
          className="mt-16 pointer-events-auto"
        >
          <a
            href="#about-v4"
            className="flex flex-col items-center text-teal-300/70 hover:text-white transition-colors"
            aria-label="Scroll down"
          >
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase mb-1">
              SCROLL DOWN
            </span>
            <ArrowDown className="w-4 h-4 text-teal-300" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};
