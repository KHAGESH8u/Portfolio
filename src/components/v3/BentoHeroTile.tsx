import React from 'react';
import { Sparkles, Mail, Github, Linkedin, FileText, CheckCircle2, Terminal } from 'lucide-react';
import { HERO_DATA, ABOUT_DATA } from '../../data/portfolioData';

export const BentoHeroTile: React.FC = () => {
  return (
    <div
      id="biometrics"
      className="relative rounded-3xl bg-[#09090b]/85 backdrop-blur-2xl border border-purple-500/30 p-6 sm:p-8 shadow-[0_0_35px_rgba(168,85,247,0.12)] overflow-hidden flex flex-col justify-between"
    >
      {/* Specular neon top highlight */}
      <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-purple-500 to-transparent pointer-events-none" />

      {/* Top status bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-purple-500/15">
        <div className="flex items-center space-x-2.5">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          <span className="font-mono text-xs text-purple-300 font-semibold tracking-widest uppercase">
            OPERATIONAL STATUS // DUAL-CORE INFERENCE ACTIVE
          </span>
        </div>
        <div className="flex items-center space-x-2 text-[11px] font-mono text-slate-400">
          <Terminal className="w-3.5 h-3.5 text-purple-400" />
          <span>SAN FRANCISCO // ARCHITECTURE LABS</span>
        </div>
      </div>

      {/* Split Hero Layout: Headshot on LEFT, Typography & Bio on RIGHT */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Cybernetic Headshot Container */}
        <div className="md:col-span-5 flex justify-center md:justify-start">
          <div className="relative w-56 sm:w-64 md:w-full max-w-[280px]">
            {/* Glowing neon halo */}
            <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-tr from-purple-600/50 via-fuchsia-600/30 to-purple-400/40 blur-lg opacity-70 pointer-events-none" />

            <div className="relative rounded-2xl bg-black border border-purple-500/40 p-2 shadow-2xl overflow-hidden">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-purple-500/20">
                <img
                  src={HERO_DATA.avatarUrl}
                  alt="Khagesh"
                  className="w-full h-full object-cover object-center filter contrast-[110%] grayscale-[15%] hover:grayscale-0 transition-all duration-500"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Cyber badge on photo */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2 rounded-lg bg-black/85 backdrop-blur-md border border-purple-500/30 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-mono font-bold text-white tracking-wider">
                      KHAGESH
                    </div>
                    <div className="text-[9px] font-mono text-purple-400">
                      LEAD ARCHITECT
                    </div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Prominent Name "KHAGESH", Role & 2-Paragraph Bio */}
        <div className="md:col-span-7 flex flex-col items-start text-left">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/40 text-[10px] font-mono text-purple-300 tracking-widest uppercase mb-3">
            <span>IDENTITY_VECTOR // VERIFIED</span>
          </div>

          {/* Prominent Name: KHAGESH */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-mono tracking-tight text-white leading-none">
            <span className="bg-gradient-to-r from-white via-purple-200 to-fuchsia-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]">
              KHAGESH
            </span>
          </h1>

          <h2 className="mt-2 text-lg sm:text-xl font-bold font-mono text-purple-400 tracking-wide uppercase">
            AI & Autonomous Systems Architect
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
            Specializing in high-throughput machine learning infrastructure, model compression, and real-time distributed execution engines.
          </p>

          <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
            {ABOUT_DATA.bioParagraph1}
          </p>

          {/* Action buttons */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl font-mono text-xs font-bold tracking-wider text-black bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-500 hover:brightness-110 transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.4)]"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>TRANSMIT INQUIRY</span>
            </a>

            <a
              href="#projects"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl font-mono text-xs font-semibold tracking-wider text-purple-300 bg-purple-950/40 hover:bg-purple-900/40 border border-purple-500/40 transition-all duration-200"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>DEPLOYED SYSTEMS</span>
            </a>

            <div className="flex items-center space-x-1.5 ml-1">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-black/60 hover:bg-purple-950/40 border border-purple-500/30 text-slate-300 hover:text-purple-300 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-black/60 hover:bg-purple-950/40 border border-purple-500/30 text-slate-300 hover:text-purple-300 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#biometrics"
                className="p-2.5 rounded-lg bg-black/60 hover:bg-purple-950/40 border border-purple-500/30 text-slate-300 hover:text-purple-300 transition-colors"
                aria-label="Curriculum Vitae"
              >
                <FileText className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Quick stats bottom row */}
      <div className="mt-8 pt-6 border-t border-purple-500/15 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {ABOUT_DATA.quickFacts.map((fact, index) => (
          <div key={index} className="p-3 rounded-xl bg-black/60 border border-purple-500/20">
            <div className="text-xl sm:text-2xl font-mono font-extrabold text-white">
              {fact.value}
            </div>
            <div className="text-[10px] font-mono text-purple-400 uppercase tracking-widest mt-0.5">
              {fact.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
