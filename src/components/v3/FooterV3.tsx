import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export const FooterV3: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-purple-500/20 bg-black/40 backdrop-blur-lg py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-xl bg-purple-950/60 border border-purple-500/40 flex items-center justify-center text-purple-300 font-mono text-xs font-black shadow-[0_0_15px_rgba(168,85,247,0.3)]">
            KG
          </div>
          <div>
            <div className="font-mono text-sm font-bold text-white tracking-widest">
              KHAGESH
            </div>
            <div className="text-[10px] font-mono text-purple-400">
              AI & AUTONOMOUS SYSTEMS ARCHITECT
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-black/40 hover:bg-black/60 border border-purple-500/25 backdrop-blur-md text-gray-300 hover:text-white hover:border-purple-400/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-black/40 hover:bg-black/60 border border-purple-500/25 backdrop-blur-md text-gray-300 hover:text-purple-300 hover:border-purple-400/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:contact@khagesh.dev"
            className="p-3 rounded-full bg-black/40 hover:bg-black/60 border border-purple-500/25 backdrop-blur-md text-gray-300 hover:text-purple-300 hover:border-purple-400/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all"
            aria-label="Email Khagesh"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-black/40 border border-purple-500/30 backdrop-blur-md hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] text-xs font-mono text-purple-300 hover:text-white transition-all uppercase"
          aria-label="Back to top"
        >
          <span>BACK TO APEX</span>
          <ArrowUp className="w-3.5 h-3.5 text-purple-400" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-purple-500/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-gray-400 gap-2">
        <div>
          DESIGNED FOR ULTRA-HIGH CONCURRENCY ARCHITECTURE.
        </div>
        <div>
          SAN FRANCISCO, CALIFORNIA // COPYRIGHT 2026 KHAGESH
        </div>
      </div>
    </footer>
  );
};
