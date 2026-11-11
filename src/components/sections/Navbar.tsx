import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Menu, X, Cpu } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'OVERVIEW', href: '#hero' },
    { name: 'MATRIX', href: '#skills' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'TIMELINE', href: '#timeline' },
    { name: 'ACCOLADES', href: '#achievements' },
    { name: 'TRANSMIT', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`relative flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-300 ${
            scrolled
              ? 'bg-slate-950/85 backdrop-blur-2xl border border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.5)]'
              : 'bg-transparent border border-transparent'
          }`}
        >
          {/* Brand identity */}
          <a href="#hero" className="flex items-center space-x-3 group">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(0,242,254,0.4)] transition-all duration-300">
              <Cpu className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-sm font-bold tracking-widest text-white group-hover:text-cyan-300 transition-colors">
                AV.NEXUS
              </span>
              <span className="text-[9px] font-mono tracking-wider text-slate-400">
                AI & DISTRIBUTED CORE
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-mono font-medium text-slate-300 hover:text-cyan-300 rounded-lg hover:bg-white/5 transition-all duration-200 tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA & Status Indicator */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>ONLINE</span>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-xl text-xs font-mono font-semibold text-black bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 shadow-[0_0_20px_rgba(0,242,254,0.3)] hover:shadow-[0_0_25px_rgba(0,242,254,0.5)] transition-all duration-300"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>CONNECT</span>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden px-4 pt-2"
          >
            <div className="rounded-2xl bg-slate-950/95 backdrop-blur-2xl border border-white/10 p-5 space-y-3 shadow-2xl">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-sm font-mono text-slate-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-white/10 flex justify-between items-center">
                <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>ONLINE // ACTIVE</span>
                </div>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-1.5 rounded-lg text-xs font-mono font-semibold text-black bg-cyan-400 hover:bg-cyan-300"
                >
                  CONNECT
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
