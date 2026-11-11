import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface BootSequenceV2Props {
  onComplete: () => void;
}

export const BootSequenceV2: React.FC<BootSequenceV2Props> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 2500; // 2.5 seconds loading sequence

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 200);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.05,
        filter: 'blur(10px)',
        transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] }
      }}
      className="fixed inset-0 z-50 bg-[#07020d] flex flex-col items-center justify-center p-6 select-none overflow-hidden"
    >
      {/* Royal Aubergine & Antique Gold Ambient Radial Glow */}
      <div className="absolute w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle_at_center,rgba(126,34,206,0.22)_0%,rgba(55,18,95,0.15)_45%,transparent_70%)] blur-3xl pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#d4af37]/10 blur-[160px] pointer-events-none" />

      {/* Centerpiece: Slow-drawing expanding thin Antique Gold circle */}
      <div className="relative flex items-center justify-center">
        {/* Outer Rotating Concentric Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 24, ease: 'linear' }}
          className="w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-[#d4af37]/20 border-dashed pointer-events-none"
        />

        {/* Middle Slow-Expanding Glow Ring */}
        <motion.div
          initial={{ scale: 0.75, opacity: 0 }}
          animate={{ scale: [0.85, 1.08, 1], opacity: [0.3, 0.8, 0.6] }}
          transition={{ duration: 2.4, ease: 'easeInOut' }}
          className="absolute w-52 h-52 sm:w-64 sm:h-64 rounded-full border border-[#eed98d]/30 shadow-[0_0_35px_rgba(212,175,55,0.2)] pointer-events-none"
        />

        {/* Animated SVG Thin Antique Gold Stroke Ring */}
        <svg
          className="absolute w-44 h-44 sm:w-56 sm:h-56 -rotate-90 pointer-events-none"
          viewBox="0 0 100 100"
        >
          {/* Faint track */}
          <circle
            cx="50"
            cy="50"
            r="44"
            fill="none"
            stroke="#d4af37"
            strokeWidth="0.8"
            strokeOpacity="0.15"
          />
          {/* Animated drawing golden path */}
          <motion.circle
            cx="50"
            cy="50"
            r="44"
            fill="none"
            stroke="url(#goldGradient)"
            strokeWidth="1.2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: progress / 100 }}
            transition={{ ease: 'easeOut', duration: 0.2 }}
          />
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fcf8e8" />
              <stop offset="50%" stopColor="#e5c158" />
              <stop offset="100%" stopColor="#d4af37" />
            </linearGradient>
          </defs>
        </svg>

        {/* Central Monogram Insignia */}
        <div className="absolute flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="w-10 h-10 rounded-xl bg-[#150826]/80 border border-[#d4af37]/40 flex items-center justify-center text-[#eed98d] font-serif text-xs font-bold shadow-[0_0_20px_rgba(212,175,55,0.25)] mb-2"
          >
            AV
          </motion.div>
          <span className="font-serif text-[11px] font-normal tracking-widest text-[#e5c158]">
            {progress}%
          </span>
        </div>
      </div>

      {/* Elegant Refined Serif Typography */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
        className="mt-12 text-center"
      >
        <div className="font-serif text-xs sm:text-sm tracking-[0.35em] text-[#eed98d] uppercase font-normal mb-2">
          INITIALIZING SYSTEM
        </div>
        <div className="text-[10px] font-mono tracking-[0.25em] text-[#d4af37]/70 uppercase">
          ALEXANDER VANCE // PRINCIPAL ARCHITECT // MMXXVI
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BootSequenceV2;
