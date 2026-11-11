import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface BootSequenceV4Props {
  onComplete: () => void;
}

export const BootSequenceV4: React.FC<BootSequenceV4Props> = ({ onComplete }) => {
  // Stages: 'expanding' (0-1.0s) -> 'holding' (1.0-2.4s, 1.4s frozen hold) -> 'dissolving' (2.4-2.8s)
  const [stage, setStage] = useState<'expanding' | 'holding' | 'dissolving'>('expanding');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    // Timing breakdown:
    // 0 to 1000ms: Sharp angular branches trace and converge into the geometric 'K' tensor graph
    // 1000 to 2400ms: Exactly 1.4 seconds of still, frozen hold for viewing
    // 2400 to 2750ms: Complete and trigger onComplete callback
    const totalDuration = 2700;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / totalDuration) * 100));
      setProgress(pct);

      if (elapsed < 1000) {
        setStage('expanding');
      } else if (elapsed < 2400) {
        setStage('holding');
      } else {
        setStage('dissolving');
      }

      if (elapsed >= totalDuration) {
        clearInterval(interval);
        onComplete();
      }
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.05,
        filter: 'blur(12px)',
        transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] }
      }}
      className="fixed inset-0 z-50 bg-[#011414] flex flex-col items-center justify-center p-6 select-none overflow-hidden"
    >
      {/* Deep Teal Atmospheric Core Glow */}
      <div className="absolute w-[650px] h-[650px] rounded-full bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.22)_0%,rgba(13,78,77,0.15)_45%,transparent_75%)] blur-3xl pointer-events-none" />

      {/* Centerpiece: Sharp 45°/90° Circuit PCB Tensor Graph converging to geometric 'K' */}
      <div className="relative w-72 h-72 sm:w-84 sm:h-84 flex items-center justify-center pointer-events-none">
        
        {/* Subtle Outer Octagonal PCB Boundary (Strict 45° Chamfered Corners) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 240 240">
          {/* Outer Octagon Frame */}
          <motion.polygon
            points="60,20 180,20 220,60 220,180 180,220 60,220 20,180 20,60"
            fill="none"
            stroke="#14b8a6"
            strokeWidth="1.2"
            strokeOpacity={stage === 'holding' ? 0.7 : 0.35}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />

          {/* Precision 45° and 90° Circuit Feed Traces converging inward */}
          {[
            // Top feeds (90° then 45°)
            "M 120 20 L 120 45 L 95 70",
            "M 60 20 L 60 40 L 80 60",
            "M 180 20 L 180 40 L 160 60",
            // Bottom feeds
            "M 120 220 L 120 195 L 95 170",
            "M 60 220 L 60 200 L 80 180",
            "M 180 220 L 180 200 L 160 180",
            // Lateral 90° and 45° bus lines
            "M 20 120 L 45 120 L 70 95",
            "M 220 120 L 195 120 L 170 145",
            "M 20 60 L 50 60 L 70 80",
            "M 220 180 L 190 180 L 170 160"
          ].map((d, idx) => (
            <motion.path
              key={idx}
              d={d}
              fill="none"
              stroke="#2dd4bf"
              strokeWidth="1.2"
              strokeOpacity={0.6}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.7, delay: idx * 0.02, ease: 'easeOut' }}
            />
          ))}

          {/* Central Converged Stylized Geometric 'K' (Sharp 90° and 45° Tensor Graph) */}
          {/* Vertical Stem of 'K' */}
          <motion.line
            x1="88"
            y1="64"
            x2="88"
            y2="176"
            stroke="#ffffff"
            strokeWidth="3.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
          />

          {/* Upper Diagonal Arm (45° Angle): starts from stem, branches up-right at 45° */}
          <motion.path
            d="M 88 120 L 115 120 L 152 74"
            fill="none"
            stroke="#ffffff"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
          />

          {/* Lower Diagonal Arm (45° Angle): branches down-right at 45° */}
          <motion.path
            d="M 110 126 L 152 168"
            fill="none"
            stroke="#ffffff"
            strokeWidth="3.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, delay: 0.45, ease: 'easeOut' }}
          />

          {/* Upper Terminal Accent */}
          <motion.line
            x1="152"
            y1="74"
            x2="164"
            y2="74"
            stroke="#ffffff"
            strokeWidth="3.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.4, delay: 0.55 }}
          />

          {/* Lower Terminal Accent */}
          <motion.line
            x1="152"
            y1="168"
            x2="164"
            y2="168"
            stroke="#ffffff"
            strokeWidth="3.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.4, delay: 0.65 }}
          />

          {/* Precision Porcelain White Solder Nodes at Geometric Vertices */}
          {[
            // K vertex terminals
            [88, 64], [88, 120], [88, 176],
            [164, 74], [164, 168], [115, 120],
            // Outer Octagon boundary nodes
            [60, 20], [180, 20], [220, 60], [220, 180],
            [180, 220], [60, 220], [20, 180], [20, 60],
            // Inward bus nodes
            [95, 70], [95, 170], [160, 60], [160, 180]
          ].map(([cx, cy], idx) => (
            <motion.circle
              key={idx}
              cx={cx}
              cy={cy}
              r={idx < 6 ? "3.5" : "2.5"}
              fill="#ffffff"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: stage === 'holding' ? (idx < 6 ? 1.3 : 1) : 1,
                opacity: 1
              }}
              transition={{ duration: 0.4, delay: 0.3 + idx * 0.02 }}
            />
          ))}
        </svg>

        {/* Ambient Pulsing Glow around converged 'K' */}
        <motion.div
          animate={{
            scale: stage === 'holding' ? [1, 1.05, 1] : 1,
            opacity: stage === 'holding' ? [0.7, 0.95, 0.7] : 0.4
          }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-28 h-28 rounded-2xl bg-teal-300/10 blur-xl pointer-events-none"
        />
      </div>

      {/* Haute-Couture Porcelain Status Typography */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-8 text-center pointer-events-none"
      >
        <div className="font-serif text-sm tracking-[0.35em] text-white uppercase font-medium mb-1.5 drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]">
          KHAGESH // NEURAL TENSOR GRAPH
        </div>
        <div className="text-[10px] font-mono tracking-[0.25em] text-teal-300 uppercase">
          {stage === 'holding' ? 'TOPOLOGY LOCKED // SYNAPSE ACTIVE' : `SYNTHESIZING ARCHITECTURE // ${progress}%`}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BootSequenceV4;
