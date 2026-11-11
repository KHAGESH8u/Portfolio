import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Sparkles } from 'lucide-react';
import { PortfolioV1 } from './components/PortfolioV1';
import { PortfolioV2 } from './components/PortfolioV2';

export const App: React.FC = () => {
  // Store sample preference in local state with localStorage fallback
  const [activeSample, setActiveSample] = useState<'sample-1' | 'sample-2'>(() => {
    const saved = localStorage.getItem('portfolio_sample_preference');
    return saved === 'sample-2' ? 'sample-2' : 'sample-1';
  });

  const handleSelectSample = (sample: 'sample-1' | 'sample-2') => {
    setActiveSample(sample);
    localStorage.setItem('portfolio_sample_preference', sample);
  };

  useEffect(() => {
    // Update document title dynamically based on active sample
    if (activeSample === 'sample-2') {
      document.title = 'Alexander Vance // Aubergine & Gold Art Gallery (Sample 2)';
    } else {
      document.title = 'Alexander Vance // Obsidian & Cyan Systems (Sample 1)';
    }
  }, [activeSample]);

  return (
    <div className="relative min-h-screen">
      {/* Floating Sample Switcher Pill at Top of Screen */}
      <div className="fixed top-4 right-4 sm:top-5 sm:right-6 z-[200] pointer-events-auto">
        <div className="p-1 rounded-full bg-slate-950/90 border border-white/20 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex items-center space-x-1">
          {/* Sample 1 Switch */}
          <button
            onClick={() => handleSelectSample('sample-1')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-300 ${
              activeSample === 'sample-1'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-bold shadow-[0_0_15px_rgba(0,242,254,0.4)]'
                : 'text-slate-400 hover:text-white'
            }`}
            aria-label="Switch to Sample 1: Obsidian & Cyan"
          >
            <Layers className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Sample 1:</span>
            <span>Obsidian</span>
          </button>

          {/* Sample 2 Switch */}
          <button
            onClick={() => handleSelectSample('sample-2')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-serif transition-all duration-300 ${
              activeSample === 'sample-2'
                ? 'bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#eed98d] text-[#07020d] font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                : 'text-slate-400 hover:text-[#eed98d]'
            }`}
            aria-label="Switch to Sample 2: Aubergine & Gold"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Sample 2:</span>
            <span>Aubergine</span>
          </button>
        </div>
      </div>

      {/* Render Active Portfolio with Smooth Transition */}
      <AnimatePresence mode="wait">
        {activeSample === 'sample-1' ? (
          <motion.div
            key="sample-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <PortfolioV1 />
          </motion.div>
        ) : (
          <motion.div
            key="sample-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <PortfolioV2 />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
