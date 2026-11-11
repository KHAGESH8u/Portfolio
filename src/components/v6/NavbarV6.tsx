import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const NavbarV6: React.FC = () => {
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
    { name: 'Prologue', href: '#about-v6' },
    { name: 'Discipline', href: '#skills-v6' },
    { name: 'Archive', href: '#projects-v6' },
    { name: 'Trajectory', href: '#timeline-v6' },
    { name: 'Honors', href: '#accolades-v6' },
    { name: 'Inquire', href: '#contact-v6' },
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
              ? 'bg-black/50 backdrop-blur-lg border border-emerald-500/30 shadow-[0_15px_40px_rgba(0,0,0,0.85)]'
              : 'bg-black/40 backdrop-blur-lg border border-emerald-500/20 shadow-lg'
          }`}
        >
          {/* Brand Insignia */}
          <a href="#hero-v6" className="flex items-center space-x-3 group">
            <div className="w-8 h-8 rounded-full border border-emerald-500/60 flex items-center justify-center text-emerald-400 font-serif text-xs tracking-widest group-hover:scale-105 group-hover:border-emerald-300 transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              AV
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-sm font-semibold tracking-wider text-slate-100 group-hover:text-emerald-300 transition-colors">
                ALEXANDER VANCE
              </span>
              <span className="text-[9px] font-mono tracking-widest text-emerald-400 uppercase">
                BIO-DIGITAL AI
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 text-xs font-serif tracking-widest text-slate-300 hover:text-emerald-300 hover:bg-emerald-950/40 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Consultation CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#contact-v6"
              className="inline-flex items-center space-x-1.5 px-5 py-1.5 rounded-full text-xs font-serif font-bold tracking-wider text-black bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-300 hover:brightness-110 shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-300"
            >
              <span>CONNECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-black/60 border border-emerald-500/30 text-slate-200 hover:text-emerald-300 transition-colors"
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
            <div className="rounded-3xl bg-black/80 backdrop-blur-lg border border-emerald-500/30 p-6 space-y-4 shadow-2xl">
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2.5 text-sm font-serif tracking-widest text-slate-300 hover:text-emerald-300 hover:bg-emerald-950/50 rounded-xl transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
              <div className="pt-4 border-t border-emerald-500/20">
                <a
                  href="#contact-v6"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center space-x-2 py-3 rounded-full text-xs font-serif font-bold tracking-widest text-black bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-300"
                >
                  <span>INITIATE BIO-DIALOGUE</span>
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

export default NavbarV6;
