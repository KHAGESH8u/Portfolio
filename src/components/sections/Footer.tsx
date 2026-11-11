import React from 'react';
import { ArrowUp, Shield, Cpu, GitBranch } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-slate-950/80 backdrop-blur-2xl py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand identity */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Cpu className="w-4 h-4" />
          </div>
          <div>
            <div className="font-mono text-sm font-bold text-white tracking-widest">
              AV.NEXUS // V4.9.2
            </div>
            <div className="text-[10px] font-mono text-slate-500">
              AUTONOMOUS ARCHITECTURE & DISTRIBUTED SYSTEMS
            </div>
          </div>
        </div>

        {/* Telemetry info */}
        <div className="flex items-center space-x-6 text-xs font-mono text-slate-400">
          <span className="flex items-center gap-1.5">
            <GitBranch className="w-3.5 h-3.5 text-cyan-400" />
            BRANCH: MAIN // STABLE
          </span>
          <span className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-purple-400" />
            SECURITY: ZERO-TRUST
          </span>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="group flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/40 text-xs font-mono text-slate-300 hover:text-white transition-all duration-300"
          aria-label="Back to top"
        >
          <span>RETURN TO APEX</span>
          <ArrowUp className="w-3.5 h-3.5 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500 gap-2">
        <div>
          DESIGNED FOR HIGH-CONCURRENCY PORTFOLIO TELEMETRY. ALL SYSTEMS MONITORED.
        </div>
        <div>
          LOREM IPSUM DOLOR SIT AMET // REVISED 2026
        </div>
      </div>
    </footer>
  );
};
