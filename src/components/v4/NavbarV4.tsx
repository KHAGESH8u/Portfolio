import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const NavbarV4: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about-v4' },
    { name: 'Projects', href: '#projects-v4' },
    { name: 'Capabilities', href: '#skills-v4' },
    { name: 'Trajectory', href: '#timeline-v4' },
    { name: 'Contact', href: '#contact-v4' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 pointer-events-none ${
        scrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-none">
        <div
          className={`relative flex items-center justify-between px-6 py-3.5 rounded-full transition-all duration-500 pointer-events-auto ${
            scrolled
              ? 'bg-[#021b1b]/70 backdrop-blur-xl border border-teal-500/30 shadow-[0_10px_35px_rgba(0,15,15,0.8)]'
              : 'bg-[#021b1b]/40 backdrop-blur-md border border-white/15 shadow-[0_4px_20px_rgba(0,10,10,0.5)]'
          }`}
        >
          {/* Brand Identity */}
          <a href="#hero-v4" className="flex items-center space-x-3 group">
            <div className="w-8 h-8 rounded-xl bg-teal-950/80 border border-teal-400/50 flex items-center justify-center text-teal-200 font-mono text-xs font-black shadow-[0_0_15px_rgba(45,212,191,0.3)] group-hover:scale-105 transition-transform">
              KG
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-sm font-extrabold tracking-widest text-white group-hover:text-teal-200 transition-colors">
                KHAGESH
              </span>
              <span className="text-[9px] font-mono tracking-widest text-teal-300">
                TEAL & PORCELAIN
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 text-xs font-mono font-medium tracking-wider text-teal-50 hover:text-white hover:bg-teal-950/40 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#contact-v4"
              className="inline-flex items-center space-x-1.5 px-5 py-1.5 rounded-full text-xs font-mono font-bold text-[#011414] bg-gradient-to-r from-teal-200 via-white to-teal-300 hover:brightness-110 shadow-[0_0_20px_rgba(45,212,191,0.4)] hover:shadow-[0_0_30px_rgba(45,212,191,0.6)] transition-all duration-300"
            >
              <span>INQUIRE</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-teal-950/50 border border-teal-500/30 text-teal-100 hover:text-white transition-colors"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden px-4 pt-3 pointer-events-auto"
          >
            <div className="rounded-3xl bg-[#021b1b]/90 backdrop-blur-2xl border border-teal-500/30 p-6 space-y-4 shadow-2xl">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2 text-sm font-mono text-teal-50 hover:text-teal-200 hover:bg-teal-950/40 rounded-xl transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <div className="pt-2 border-t border-teal-500/20">
                <a
                  href="#contact-v4"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center space-x-2 py-3 rounded-full text-xs font-mono font-bold text-[#011414] bg-gradient-to-r from-teal-200 to-white"
                >
                  <span>INQUIRE NOW</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
