import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export const FooterV5: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-[#d4af37]/25 bg-black/50 backdrop-blur-md py-14 px-4 sm:px-6 lg:px-8 pointer-events-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand identity */}
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-full border border-[#d4af37]/60 flex items-center justify-center text-[#e5c158] font-serif text-sm">
            AV
          </div>
          <div>
            <div className="font-serif text-sm font-semibold text-white tracking-wider">
              ALEXANDER VANCE
            </div>
            <div className="text-[10px] font-mono text-[#d4af37]/75">
              HAUTE-COUTURE SYSTEMS ARCHITECTURE
            </div>
          </div>
        </div>

        {/* Social links */}
        <div className="flex items-center space-x-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-full bg-[#150826]/80 hover:bg-[#261042] border border-[#d4af37]/25 text-slate-300 hover:text-[#e5c158] transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-full bg-[#150826]/80 hover:bg-[#261042] border border-[#d4af37]/25 text-slate-300 hover:text-[#e5c158] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:alexander.vance@example.com"
            className="p-2.5 rounded-full bg-[#150826]/80 hover:bg-[#261042] border border-[#d4af37]/25 text-slate-300 hover:text-[#e5c158] transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="group flex items-center space-x-2 px-5 py-2 rounded-full bg-[#150826]/80 border border-[#d4af37]/30 hover:border-[#eed98d]/60 text-xs font-serif tracking-widest text-[#eed98d] hover:text-white transition-all duration-300 uppercase"
          aria-label="Return to top"
        >
          <span>RETURN TO SUMMIT</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-[#e5c158]" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-[#d4af37]/10 flex flex-col sm:flex-row items-center justify-between text-xs font-serif text-slate-400 gap-2">
        <div>
          DESIGNED FOR ULTRA-HIGH CONCURRENCY ARCHITECTURE.
        </div>
        <div className="font-mono text-[10px] text-[#d4af37]/70">
          SAN FRANCISCO, CALIFORNIA // COPYRIGHT 2026 ALEXANDER VANCE
        </div>
      </div>
    </footer>
  );
};

export default FooterV5;
