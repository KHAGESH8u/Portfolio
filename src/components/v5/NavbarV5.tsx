import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const NavbarV5: React.FC = () => {
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
    { name: 'Prologue', href: '#about-v5' },
    { name: 'Discipline', href: '#skills-v5' },
    { name: 'Archive', href: '#projects-v5' },
    { name: 'Trajectory', href: '#timeline-v5' },
    { name: 'Honors', href: '#accolades-v5' },
    { name: 'Inquire', href: '#contact-v5' },
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
              ? 'bg-black/50 backdrop-blur-md border border-[#d4af37]/35 shadow-[0_15px_40px_rgba(0,0,0,0.8)]'
              : 'bg-black/30 backdrop-blur-md border border-[#d4af37]/20 shadow-lg'
          }`}
        >
          {/* Brand Insignia */}
          <a href="#hero-v5" className="flex items-center space-x-3 group">
            <div className="w-8 h-8 rounded-full border border-[#d4af37]/60 flex items-center justify-center text-[#e5c158] font-serif text-xs tracking-widest group-hover:scale-105 group-hover:border-[#eed98d] transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
              AV
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-sm font-semibold tracking-wider text-slate-100 group-hover:text-[#e5c158] transition-colors">
                ALEXANDER VANCE
              </span>
              <span className="text-[9px] font-mono tracking-widest text-[#d4af37]/70 uppercase">
                NEURAL ARCHITECTURE
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 text-xs font-serif tracking-widest text-slate-300 hover:text-[#eed98d] hover:bg-[#25103f]/50 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Consultation CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#contact-v5"
              className="inline-flex items-center space-x-1.5 px-5 py-1.5 rounded-full text-xs font-serif font-medium tracking-wider text-[#07020d] bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#eed98d] hover:brightness-110 shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300"
            >
              <span>INITIATE</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-[#150826] border border-[#d4af37]/30 text-slate-200 hover:text-[#e5c158] transition-colors"
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
            <div className="rounded-3xl bg-black/80 backdrop-blur-md border border-[#d4af37]/35 p-6 space-y-4 shadow-2xl">
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2.5 text-sm font-serif tracking-widest text-slate-300 hover:text-[#eed98d] hover:bg-[#25103f]/60 rounded-xl transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
              <div className="pt-4 border-t border-[#d4af37]/20">
                <a
                  href="#contact-v5"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center space-x-2 py-3 rounded-full text-xs font-serif font-medium tracking-widest text-[#07020d] bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#eed98d]"
                >
                  <span>INITIATE CONSULTATION</span>
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

export default NavbarV5;
