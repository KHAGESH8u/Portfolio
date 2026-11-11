import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-slate-950/80 backdrop-blur-2xl py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand identity */}
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-slate-950 font-black font-mono text-sm">
            AV
          </div>
          <div>
            <div className="font-sans text-sm font-bold text-white">
              Alexander Vance
            </div>
            <div className="text-xs text-slate-400">
              AI & Full-Stack Systems Engineer
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-cyan-300 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:alexander.vance@example.com"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-purple-300 transition-colors"
            aria-label="Email Me"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="group flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/40 text-xs font-mono text-slate-300 hover:text-white transition-all duration-300"
          aria-label="Back to top"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-400 gap-2">
        <div className="flex items-center space-x-1.5">
          <span>Engineered with React, Three.js & Tailwind CSS.</span>
        </div>
        <div>
          San Francisco, California // Copyright 2026 Alexander Vance
        </div>
      </div>
    </footer>
  );
};
