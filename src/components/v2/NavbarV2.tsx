import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const NavbarV2: React.FC = () => {
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
    { name: 'Prologue', href: '#about-v2' },
    { name: 'Discipline', href: '#skills-v2' },
    { name: 'Archive', href: '#projects-v2' },
    { name: 'Trajectory', href: '#timeline-v2' },
    { name: 'Honors', href: '#accolades-v2' },
    { name: 'Inquire', href: '#contact-v2' },
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
              ? 'bg-[#0e051a]/85 backdrop-blur-2xl border border-[#d4af37]/25 shadow-[0_15px_40px_rgba(7,2,13,0.7)]'
              : 'bg-[#150826]/40 backdrop-blur-md border border-[#d4af37]/15'
          }`}
        >
          {/* Brand Insignia */}
          <a href="#hero-v2" className="flex items-center space-x-3 group">
            <div className="w-8 h-8 rounded-full border border-[#d4af37]/60 flex items-center justify-center text-[#e5c158] font-serif text-xs tracking-widest group-hover:scale-105 group-hover:border-[#eed98d] transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
              AV
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-sm font-semibold tracking-wider text-slate-100 group-hover:text-[#e5c158] transition-colors">
                ALEXANDER VANCE
              </span>
              <span className="text-[9px] font-mono tracking-widest text-[#d4af37]/70 uppercase">
                STUDIO & ARCHITECTURE
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-serif font-medium tracking-widest text-slate-300 hover:text-[#e5c158] transition-all duration-200 uppercase"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Consultation CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#contact-v2"
              className="inline-flex items-center space-x-1.5 px-5 py-1.5 rounded-full text-xs font-serif tracking-wider font-semibold text-[#07020d] bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#eed98d] hover:brightness-110 shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300"
            >
              <span>INQUIRE</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-white/5 border border-[#d4af37]/30 text-slate-300 hover:text-[#e5c158]"
              aria-label="Toggle navigation menu"
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
            <div className="rounded-3xl bg-[#0e051a]/95 backdrop-blur-2xl border border-[#d4af37]/30 p-6 space-y-4 shadow-2xl">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block font-serif text-sm tracking-wider text-slate-300 hover:text-[#e5c158] uppercase py-1"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-white/10 flex justify-between items-center">
                <span className="text-[10px] font-mono text-[#d4af37]/70">SAN FRANCISCO // GLOBAL</span>
                <a
                  href="#contact-v2"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-1.5 rounded-full text-xs font-serif font-bold text-black bg-[#e5c158]"
                >
                  INQUIRE
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
