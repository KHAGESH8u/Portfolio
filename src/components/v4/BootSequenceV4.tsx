import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface BootSequenceV4Props {
  onComplete: () => void;
}

export const BootSequenceV4: React.FC<BootSequenceV4Props> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'dot' | 'branching' | 'flash' | 'dissolving'>('dot');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 2500; // 2.5 seconds total loading sequence

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (pct < 28) {
        setPhase('dot');
      } else if (pct < 80) {
        setPhase('branching');
      } else if (pct < 94) {
        setPhase('flash');
      } else {
        setPhase('dissolving');
      }

      if (pct >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 180);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.08,
        filter: 'blur(12px)',
        transition: { duration: 0.8, ease: 'easeOut' }
      }}
      className="fixed inset-0 z-50 bg-[#011414] flex flex-col items-center justify-center p-6 select-none overflow-hidden"
    >
      {/* Deep Teal Volumetric Atmosphere */}
      <div className="absolute w-[750px] h-[750px] rounded-full bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.22)_0%,rgba(13,78,77,0.15)_45%,transparent_75%)] blur-3xl pointer-events-none" />

      {/* Main Neural Genesis Stage */}
      <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center pointer-events-none">
        
        {/* Flash Burst Stage */}
        {phase === 'flash' && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [1, 2.5], opacity: [0.8, 0] }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="absolute inset-0 rounded-full bg-gradient-to-r from-white via-teal-200 to-transparent blur-2xl"
          />
        )}

        {/* Synaptic Dendritic Web Lines (Visible during branching & flash) */}
        {(phase === 'branching' || phase === 'flash' || phase === 'dissolving') && (
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 200">
            {/* Primary Neural Axons branching outward */}
            {[
              "M 100 100 Q 120 70 145 50 T 170 30",
              "M 100 100 Q 80 65 55 45 T 30 35",
              "M 100 100 Q 135 110 165 130 T 185 160",
              "M 100 100 Q 65 125 45 155 T 25 175",
              "M 100 100 Q 105 50 110 25 T 115 10",
              "M 100 100 Q 95 150 90 175 T 85 195",
              "M 100 100 Q 140 85 175 80 T 195 75",
              "M 100 100 Q 60 90 25 95 T 10 100"
            ].map((d, idx) => (
              <motion.path
                key={idx}
                d={d}
                fill="none"
                stroke="#14b8a6"
                strokeWidth="1.2"
                strokeOpacity="0.75"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.1, delay: idx * 0.04, ease: 'easeOut' }}
              />
            ))}

            {/* Interconnecting secondary synapses */}
            {[
              "M 145 50 Q 155 90 175 80",
              "M 55 45 Q 40 70 25 95",
              "M 165 130 Q 130 150 90 175",
              "M 45 155 Q 70 165 90 175",
              "M 110 25 Q 75 35 55 45",
              "M 110 25 Q 130 35 145 50"
            ].map((d, idx) => (
              <motion.path
                key={`sec-${idx}`}
                d={d}
                fill="none"
                stroke="#5eead4"
                strokeWidth="0.8"
                strokeOpacity="0.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.9, delay: 0.3 + idx * 0.05, ease: 'easeOut' }}
              />
            ))}

            {/* Porcelain Synaptic Nodes lighting up at intersections */}
            {[
              [145, 50], [55, 45], [165, 130], [45, 155],
              [110, 25], [90, 175], [175, 80], [25, 95],
              [170, 30], [30, 35], [185, 160], [25, 175]
            ].map(([cx, cy], idx) => (
              <motion.circle
                key={`node-${idx}`}
                cx={cx}
                cy={cy}
                r="3"
                fill="#ffffff"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.4, 1], opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + idx * 0.04 }}
              />
            ))}
          </svg>
        )}

        {/* Central Porcelain White Dot & Expanding Core Pulse */}
        <div className="relative flex items-center justify-center">
          {/* Outer porcelain shockwave ring */}
          <motion.div
            animate={{ scale: [1, 2.2, 1], opacity: [0.6, 0.1, 0.6] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="absolute w-12 h-12 rounded-full border border-teal-300/40 pointer-events-none"
          />

          {/* Central Glowing Porcelain White Dot */}
          <motion.div
            animate={{
              scale: phase === 'flash' ? [1, 3, 1] : [1, 1.25, 1],
              boxShadow: phase === 'flash'
                ? '0 0 60px 20px rgba(255, 255, 255, 0.9)'
                : '0 0 30px 8px rgba(255, 255, 255, 0.7)'
            }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-4 h-4 rounded-full bg-white z-10"
          />
        </div>
      </div>

      {/* Haute-Couture Porcelain Typography */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mt-8 text-center pointer-events-none"
      >
        <div className="font-serif text-sm tracking-[0.3em] text-white uppercase font-medium mb-1.5 drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]">
          KHAGESH // SYNAPTIC GENESIS
        </div>
        <div className="text-[10px] font-mono tracking-[0.25em] text-teal-300 uppercase">
          INITIALIZING NEURAL TOPOLOGY // {progress}%
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BootSequenceV4;
