import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Mail, Github, Linkedin, FileText, MapPin } from 'lucide-react';

export const HeroV3: React.FC = () => {
  return (
    <section
      id="hero-v3"
      className="relative w-full min-h-screen snap-start flex items-center justify-center overflow-hidden py-16 pointer-events-none"
    >
      {/* Piercing Neon Violet Glow Centerpiece */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-purple-600/15 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-fuchsia-600/12 rounded-full blur-[140px] pointer-events-none" />

      {/* Foreground Hero Content: Centered, Massive, Tracking-Tight Typography */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center flex flex-col items-center pointer-events-none">
        
        {/* Status Pill with Frosted Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 180, damping: 20 }}
          className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-black/40 border border-purple-500/30 backdrop-blur-lg mb-8 shadow-[0_0_25px_rgba(168,85,247,0.2)] pointer-events-auto"
        >
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
          <span className="font-mono text-xs text-purple-300 font-semibold tracking-wider">
            AUTONOMOUS ARCHITECTURE // AI FRONTIER
          </span>
        </motion.div>

        {/* Centered Massive Name: KHAGESH */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.1 }}
          className="text-6xl sm:text-8xl md:text-9xl font-black font-sans tracking-tighter text-white select-none leading-none drop-shadow-[0_15px_40px_rgba(0,0,0,0.9)] pointer-events-none"
        >
          <span className="bg-gradient-to-b from-white via-gray-100 to-purple-300 bg-clip-text text-transparent">
            Khagesh
          </span>
        </motion.h1>

        {/* Title with Piercing Neon Violet Gradient */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
          className="mt-6 sm:mt-8 max-w-3xl pointer-events-none"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-sans tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-purple-200 bg-clip-text text-transparent">
              AI & Autonomous Systems Architect
            </span>
          </h2>
          
          <p className="mt-6 text-base sm:text-xl text-gray-200 font-light leading-relaxed max-w-2xl mx-auto font-sans">
            Designing and deploying high-throughput machine learning infrastructure, model acceleration pipelines, and intelligent spatial software.
          </p>

          <div className="mt-4 flex items-center justify-center space-x-2 text-xs font-mono text-purple-300/80">
            <MapPin className="w-3.5 h-3.5 text-purple-400" />
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
            href="#projects-v3"
            className="group inline-flex items-center space-x-2.5 px-8 py-4 rounded-full font-mono text-xs font-bold tracking-wider text-black bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-500 hover:brightness-110 transition-all duration-300 shadow-[0_0_30px_rgba(168,85,247,0.45)] hover:shadow-[0_0_45px_rgba(168,85,247,0.7)] hover:scale-[1.03] pointer-events-auto"
          >
            <Sparkles className="w-4 h-4 text-black group-hover:rotate-12 transition-transform duration-300" />
            <span>EXPLORE WORK</span>
          </a>

          <a
            href="#contact-v3"
            className="inline-flex items-center space-x-2.5 px-8 py-4 rounded-full font-mono text-xs font-semibold tracking-wider text-purple-200 bg-black/40 hover:bg-black/60 border border-purple-500/30 backdrop-blur-lg transition-all duration-300 hover:border-purple-400/60 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] hover:scale-[1.03] pointer-events-auto"
          >
            <Mail className="w-4 h-4 text-purple-400" />
            <span>INITIATE CONTACT</span>
          </a>

          <div className="flex items-center space-x-2 ml-2 pointer-events-none">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-3.5 rounded-full bg-black/40 hover:bg-black/60 border border-purple-500/25 backdrop-blur-lg text-gray-200 hover:text-white hover:border-purple-400/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300 pointer-events-auto"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-3.5 rounded-full bg-black/40 hover:bg-black/60 border border-purple-500/25 backdrop-blur-lg text-gray-200 hover:text-purple-300 hover:border-purple-400/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300 pointer-events-auto"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#about-v3"
              className="p-3.5 rounded-full bg-black/40 hover:bg-black/60 border border-purple-500/25 backdrop-blur-lg text-gray-200 hover:text-purple-300 hover:border-purple-400/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300 pointer-events-auto"
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
            href="#about-v3"
            className="flex flex-col items-center text-gray-400 hover:text-purple-300 transition-colors"
            aria-label="Scroll down"
          >
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase mb-1">
              SCROLL DOWN
            </span>
            <ArrowDown className="w-4 h-4 text-purple-400" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};
