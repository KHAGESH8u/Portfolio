import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Terminal } from 'lucide-react';
import { HeroCanvas } from '../3d/HeroCanvas';
import { HERO_DATA } from '../../data/portfolioData';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* 3D WebGL Scene Background */}
      <HeroCanvas />

      {/* Radiant ambient glow spots */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Foreground Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center text-center">
        {/* System Status Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.1 }}
          className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 backdrop-blur-xl mb-8 shadow-[0_0_25px_rgba(0,242,254,0.15)]"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="font-mono text-xs tracking-wider text-cyan-300">
            {HERO_DATA.systemTag}
          </span>
          <span className="text-slate-600 font-mono">|</span>
          <span className="font-mono text-xs tracking-wider text-slate-400">
            SECURE PROTOCOL
          </span>
        </motion.div>

        {/* Oversized typography: Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 120, damping: 18, delay: 0.2 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase select-none leading-none"
        >
          <span className="bg-gradient-to-b from-white via-slate-100 to-slate-400/80 bg-clip-text text-transparent drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
            {HERO_DATA.name}
          </span>
        </motion.h1>

        {/* Gradient Text-Clip Role */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 120, damping: 18, delay: 0.35 }}
          className="mt-4 sm:mt-6"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              {HERO_DATA.role}
            </span>
          </h2>
          <p className="font-mono text-xs sm:text-sm tracking-widest text-slate-400 mt-2 uppercase">
            {HERO_DATA.subRole}
          </p>
        </motion.div>

        {/* Summary Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 120, damping: 18, delay: 0.5 }}
          className="mt-6 max-w-2xl text-sm sm:text-base text-slate-400 leading-relaxed font-normal"
        >
          {HERO_DATA.summary}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 120, damping: 18, delay: 0.65 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center space-x-2.5 px-7 py-3.5 rounded-xl font-mono text-xs font-bold tracking-wider text-black bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 shadow-[0_0_30px_rgba(0,242,254,0.35)] hover:shadow-[0_0_40px_rgba(0,242,254,0.6)] hover:scale-[1.02]"
          >
            <Sparkles className="w-4 h-4 text-black group-hover:rotate-12 transition-transform duration-300" />
            <span>{HERO_DATA.ctaPrimary}</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center space-x-2.5 px-7 py-3.5 rounded-xl font-mono text-xs font-semibold tracking-wider text-slate-200 bg-slate-900/80 hover:bg-slate-800/80 border border-white/10 hover:border-cyan-500/50 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02]"
          >
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span>{HERO_DATA.ctaSecondary}</span>
          </a>
        </motion.div>

        {/* Technical Specs Metric Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-4xl w-full pt-8 border-t border-white/5"
        >
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-extrabold font-mono text-white">
              99.99%
            </span>
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mt-1">
              SYSTEM AVAILABILITY
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-extrabold font-mono text-cyan-400">
              10M+
            </span>
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mt-1">
              TENSOR VERTICES
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-extrabold font-mono text-purple-400">
              &lt; 5MS
            </span>
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mt-1">
              INFERENCE LATENCY
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-400">
              4.9/5.0
            </span>
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mt-1">
              ARCHITECTURE RATING
            </span>
          </div>
        </motion.div>

        {/* Scroll down indicator */}
        <motion.a
          href="#skills"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="mt-12 flex flex-col items-center text-slate-500 hover:text-cyan-400 transition-colors"
          aria-label="Scroll down to Skills Matrix"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase mb-1">SCROLL MATRIX</span>
          <ArrowDown className="w-4 h-4" />
        </motion.a>
      </div>
    </section>
  );
};
