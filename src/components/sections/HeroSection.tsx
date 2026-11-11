import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Mail, Github, Linkedin, FileText, MapPin, CheckCircle2 } from 'lucide-react';
import { HeroCanvas } from '../3d/HeroCanvas';
import { HERO_DATA } from '../../data/portfolioData';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16">
      {/* 3D WebGL Canvas Scene in Background */}
      <HeroCanvas />

      {/* Radiant ambient glow spots */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Foreground Container: Split 2-Column Personal Hero */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Personal Narrative & Call to Action */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status & Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 180, damping: 20 }}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 backdrop-blur-xl mb-6 shadow-[0_0_20px_rgba(0,242,254,0.15)]"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-xs text-cyan-300 font-medium">
                {HERO_DATA.statusBadge}
              </span>
            </motion.div>

            {/* Greeting & Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 140, damping: 20, delay: 0.1 }}
            >
              <p className="text-sm font-mono text-cyan-400 uppercase tracking-widest mb-1">
                {HERO_DATA.greeting}
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
                <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                  {HERO_DATA.name}
                </span>
              </h1>
            </motion.div>

            {/* Role & Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 140, damping: 20, delay: 0.2 }}
              className="mt-3"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                {HERO_DATA.role}
              </h2>
              <p className="mt-3 text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-xl">
                {HERO_DATA.tagline}
              </p>
            </motion.div>

            {/* Location & Intro paragraph */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 140, damping: 20, delay: 0.3 }}
              className="mt-4"
            >
              <div className="flex items-center space-x-2 text-xs font-mono text-slate-400 mb-3">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>{HERO_DATA.location}</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed max-w-xl">
                {HERO_DATA.summary}
              </p>
            </motion.div>

            {/* CTA Buttons & Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 140, damping: 20, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="group inline-flex items-center space-x-2 px-6 py-3 rounded-xl font-mono text-xs font-bold tracking-wider text-black bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 shadow-[0_0_25px_rgba(0,242,254,0.35)] hover:shadow-[0_0_35px_rgba(0,242,254,0.5)] hover:scale-[1.02]"
              >
                <Sparkles className="w-4 h-4 text-black group-hover:rotate-12 transition-transform duration-300" />
                <span>{HERO_DATA.ctaPrimary}</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl font-mono text-xs font-semibold tracking-wider text-slate-200 bg-slate-900/80 hover:bg-slate-800/80 border border-white/10 hover:border-cyan-500/50 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02]"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>{HERO_DATA.ctaSecondary}</span>
              </a>

              {/* Icon links */}
              <div className="flex items-center space-x-2 ml-1">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-all duration-200"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-cyan-300 transition-all duration-200"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#about"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-purple-300 transition-all duration-200"
                  aria-label="Curriculum Vitae"
                >
                  <FileText className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Stylized Headshot & Personal Focus Box */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.25 }}
              className="relative w-72 sm:w-80 md:w-96"
            >
              {/* Outer Radiant Glowing Ring */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-cyan-500/40 via-purple-600/30 to-blue-500/40 blur-xl opacity-75 animate-pulse" />

              {/* Card Container */}
              <div className="relative rounded-3xl bg-slate-950/80 backdrop-blur-2xl border border-white/15 p-3.5 shadow-2xl overflow-hidden">
                {/* Specular highlight */}
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

                {/* Portrait Image Frame */}
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
                  <img
                    src={HERO_DATA.avatarUrl}
                    alt={HERO_DATA.name}
                    className="w-full h-full object-cover object-center grayscale-[20%] contrast-[105%] hover:grayscale-0 transition-all duration-700"
                    loading="eager"
                  />
                  {/* Subtle gradient vignette over photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />

                  {/* Corner Accent Badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white font-mono">
                        ALEXANDER VANCE
                      </div>
                      <div className="text-[11px] text-cyan-400 font-mono">
                        ARCHITECT & CREATIVE TECH
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Floating Tech Pill Highlights */}
                <div className="mt-3 flex items-center justify-between text-[11px] font-mono px-2 py-1 text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    FULL-STACK & 3D
                  </span>
                  <span className="text-slate-500">SAN FRANCISCO</span>
                </div>
              </div>

              {/* Floating Pill Tag 1 */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute -top-4 -left-4 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-cyan-500/40 backdrop-blur-xl text-xs font-mono text-cyan-300 shadow-xl hidden sm:flex items-center space-x-2"
              >
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>AI & LLM SYSTEMS</span>
              </motion.div>

              {/* Floating Pill Tag 2 */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -right-4 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-purple-500/40 backdrop-blur-xl text-xs font-mono text-purple-300 shadow-xl hidden sm:flex items-center space-x-2"
              >
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                <span>REACT & THREE.JS</span>
              </motion.div>
            </motion.div>
          </div>

        </div>

        {/* Scroll down indicator */}
        <div className="mt-16 flex justify-center">
          <motion.a
            href="#about"
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="flex flex-col items-center text-slate-500 hover:text-cyan-400 transition-colors"
            aria-label="Scroll to About Me section"
          >
            <span className="text-[11px] font-mono tracking-widest uppercase mb-1">
              DISCOVER MORE
            </span>
            <ArrowDown className="w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};
