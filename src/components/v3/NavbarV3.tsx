import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const NavbarV3: React.FC = () => {
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
    { name: 'About', href: '#about-v3' },
    { name: 'Projects', href: '#projects-v3' },
    { name: 'Capabilities', href: '#skills-v3' },
    { name: 'Trajectory', href: '#timeline-v3' },
    { name: 'Contact', href: '#contact-v3' },
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
              ? 'bg-black/40 backdrop-blur-xl border border-purple-500/30 shadow-[0_10px_35px_rgba(0,0,0,0.8)]'
              : 'bg-black/25 backdrop-blur-md border border-purple-500/20 shadow-[0_4px_20px_rgba(0,0,0,0.5)]'
          }`}
        >
          {/* Brand Identity */}
          <a href="#hero-v3" className="flex items-center space-x-3 group">
            <div className="w-8 h-8 rounded-xl bg-purple-950/60 border border-purple-500/40 flex items-center justify-center text-purple-300 font-mono text-xs font-black shadow-[0_0_15px_rgba(168,85,247,0.3)] group-hover:scale-105 transition-transform">
              KG
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-sm font-extrabold tracking-widest text-white group-hover:text-purple-300 transition-colors">
                KHAGESH
              </span>
              <span className="text-[9px] font-mono tracking-widest text-purple-400">
                AI SYSTEMS
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 text-xs font-mono font-medium tracking-wider text-gray-200 hover:text-white hover:bg-purple-950/30 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#contact-v3"
              className="inline-flex items-center space-x-1.5 px-5 py-1.5 rounded-full text-xs font-mono font-bold text-black bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-500 hover:brightness-110 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all duration-300"
            >
              <span>INQUIRE</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-black/40 border border-purple-500/30 text-gray-200 hover:text-purple-300 transition-colors"
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
            <div className="rounded-3xl bg-black/50 backdrop-blur-2xl border border-purple-500/30 p-6 space-y-4 shadow-2xl">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2 text-sm font-mono text-gray-200 hover:text-purple-300 hover:bg-purple-950/30 rounded-xl transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <div className="pt-2 border-t border-purple-500/20">
                <a
                  href="#contact-v3"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center space-x-2 py-3 rounded-full text-xs font-mono font-bold text-black bg-gradient-to-r from-purple-400 to-fuchsia-400"
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
