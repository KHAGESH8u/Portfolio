import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sliders } from 'lucide-react';
import { PortfolioV1 } from './components/PortfolioV1';
import { PortfolioV2 } from './components/PortfolioV2';
import { PortfolioV3 } from './components/PortfolioV3';
import { PortfolioV4 } from './components/PortfolioV4';
import { PortfolioV5 } from './components/PortfolioV5';

type PortfolioVersion = 'v1' | 'v2' | 'v3' | 'v4' | 'v5';

export const App: React.FC = () => {
  // Store version preference with localStorage persistence
  const [activeVersion, setActiveVersion] = useState<PortfolioVersion>(() => {
    const saved = localStorage.getItem('portfolio_version_preference');
    if (saved === 'v5' || saved === 'v4' || saved === 'v3' || saved === 'v2' || saved === 'v1') {
      return saved as PortfolioVersion;
    }
    // Default to v5
    return 'v5';
  });

  const handleVersionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newVersion = e.target.value as PortfolioVersion;
    setActiveVersion(newVersion);
    localStorage.setItem('portfolio_version_preference', newVersion);
  };

  useEffect(() => {
    switch (activeVersion) {
      case 'v1':
        document.title = 'Alexander Vance // Cyber Blue Architecture (Version 1)';
        break;
      case 'v2':
        document.title = 'Alexander Vance // Aubergine & Antique Gold (Version 2)';
        break;
      case 'v3':
        document.title = 'Khagesh // Neon Violet AI Architecture (Version 3)';
        break;
      case 'v4':
        document.title = 'Khagesh // Deep Teal & Porcelain White (Version 4)';
        break;
      case 'v5':
        document.title = 'Alexander Vance // Aubergine Neural (Version 5)';
        break;
    }
  }, [activeVersion]);

  // Version theme styling for the dropdown container
  const getDropdownThemeClass = () => {
    switch (activeVersion) {
      case 'v1':
        return 'border-cyan-500/40 shadow-[0_0_20px_rgba(0,242,254,0.25)] text-cyan-300';
      case 'v2':
        return 'border-[#d4af37]/45 shadow-[0_0_20px_rgba(212,175,55,0.25)] text-[#eed98d] font-serif';
      case 'v3':
        return 'border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.3)] text-purple-300 font-mono';
      case 'v4':
        return 'border-teal-400/50 shadow-[0_0_20px_rgba(45,212,191,0.35)] text-teal-200 font-mono';
      case 'v5':
        return 'border-[#d4af37]/60 shadow-[0_0_25px_rgba(212,175,55,0.35)] text-[#eed98d] font-serif';
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Sleek Styled HTML Select Dropdown Menu in Top-Right Corner */}
      <div className="fixed top-4 right-4 sm:top-5 sm:right-6 z-[200] pointer-events-auto">
        <div
          className={`group relative flex items-center px-3 py-2 rounded-2xl bg-black/90 backdrop-blur-2xl border transition-all duration-300 ${getDropdownThemeClass()}`}
        >
          {/* Leading Icon */}
          <Sliders className="w-3.5 h-3.5 mr-2 shrink-0 opacity-80" />

          {/* Styled HTML Select Dropdown */}
          <select
            value={activeVersion}
            onChange={handleVersionChange}
            className="bg-transparent text-xs font-semibold cursor-pointer outline-none appearance-none pr-7 text-inherit"
            aria-label="Select Portfolio Version"
          >
            <option value="v1" className="bg-[#030712] text-slate-100 font-mono">
              Version 1: Cyber Blue
            </option>
            <option value="v2" className="bg-[#0e051a] text-[#eed98d] font-serif">
              Version 2: Aubergine Gold
            </option>
            <option value="v3" className="bg-black text-purple-300 font-mono">
              Version 3: Neon Violet
            </option>
            <option value="v4" className="bg-[#011414] text-teal-200 font-mono">
              Version 4: Teal & Porcelain
            </option>
            <option value="v5" className="bg-[#0e051a] text-[#eed98d] font-serif">
              Version 5: Aubergine Neural
            </option>
          </select>

          {/* Trailing Chevron Icon */}
          <ChevronDown className="w-3.5 h-3.5 absolute right-3 pointer-events-none opacity-70 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>

      {/* Render Selected Portfolio Version with Seamless Transition */}
      <AnimatePresence mode="wait">
        {activeVersion === 'v1' && (
          <motion.div
            key="version-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <PortfolioV1 />
          </motion.div>
        )}

        {activeVersion === 'v2' && (
          <motion.div
            key="version-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <PortfolioV2 />
          </motion.div>
        )}

        {activeVersion === 'v3' && (
          <motion.div
            key="version-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <PortfolioV3 />
          </motion.div>
        )}

        {activeVersion === 'v4' && (
          <motion.div
            key="version-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <PortfolioV4 />
          </motion.div>
        )}

        {activeVersion === 'v5' && (
          <motion.div
            key="version-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <PortfolioV5 />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
