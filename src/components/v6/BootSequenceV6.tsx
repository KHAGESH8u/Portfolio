import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface BootSequenceV6Props {
  onComplete: () => void;
}

const BIO_TERMINAL_LOGS = [
  'SPLICING BIO-NEURAL WEIGHTS (CHLOROPHYLL SYNAPSE V6)...',
  'GERMINATING VOLCANIC DIGITAL SEED (SEED #0x7F2B)...',
  'BRANCHING BIO-DIGITAL ROOT SYSTEM (64 PATHWAYS)...',
  'SYNTHESIZING ORGANIC VEIN NETWORK & TENSOR LATEX...',
  'BIO-LUMINESCENCE CALIBRATED // EMERALD MATRIX STABILIZED...',
  'CELLULAR DATA CONVERGENCE ACHIEVED (100% VIABILITY)...',
  'VASCULAR DATA TRANSMISSION ESTABLISHED // LATENCY: 0.05ms...',
  'SYSTEM V6 // BIO-DIGITAL CORE ONLINE.'
];

export const BootSequenceV6: React.FC<BootSequenceV6Props> = ({ onComplete }) => {
  const targetText = 'SYSTEM V6 // BIO-DIGITAL CORE ONLINE';
  const [displayText, setDisplayText] = useState('');
  const [isDecrypted, setIsDecrypted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [seedLanded, setSeedLanded] = useState(false);
  const [activeLogs, setActiveLogs] = useState<string[]>([]);
  const logsContainerRef = useRef<HTMLDivElement>(null);

  // Digital seed drops in first, then triggers root branching and terminal logs
  useEffect(() => {
    const seedTimer = setTimeout(() => {
      setSeedLanded(true);
    }, 400);

    return () => clearTimeout(seedTimer);
  }, []);

  useEffect(() => {
    if (!seedLanded) return;

    const chars = '0189XZAQKV#$&%0123456789';
    let frame = 0;
    const totalFrames = 50; // ~1.6 seconds

    const interval = setInterval(() => {
      frame++;
      const currentProgress = Math.min(frame / totalFrames, 1);
      const pct = Math.round(currentProgress * 100);
      setProgress(pct);

      // Stream terminal logs based on progress percentage
      const logIndex = Math.min(
        Math.floor(currentProgress * BIO_TERMINAL_LOGS.length),
        BIO_TERMINAL_LOGS.length - 1
      );
      setActiveLogs(BIO_TERMINAL_LOGS.slice(0, logIndex + 1));

      // Decrypt text letter-by-letter
      const revealedChars = Math.floor(currentProgress * targetText.length);
      let scrambled = '';
      for (let i = 0; i < targetText.length; i++) {
        if (targetText[i] === ' ' || targetText[i] === '/') {
          scrambled += targetText[i];
        } else if (i < revealedChars) {
          scrambled += targetText[i];
        } else {
          scrambled += chars[Math.floor(Math.random() * chars.length)];
        }
      }
      setDisplayText(scrambled);

      // Auto-scroll terminal logs to bottom
      if (logsContainerRef.current) {
        logsContainerRef.current.scrollTop = logsContainerRef.current.scrollHeight;
      }

      if (frame >= totalFrames) {
        clearInterval(interval);
        setDisplayText(targetText);
        setIsDecrypted(true);
        setActiveLogs(BIO_TERMINAL_LOGS);

        // Hold completed core shape for exactly 1.5 seconds as requested
        setTimeout(() => {
          onComplete();
        }, 1500);
      }
    }, 32);

    return () => clearInterval(interval);
  }, [seedLanded, onComplete, targetText]);

  // Sharp, organic geometric root pathways branching outward from center
  const rootPaths = [
    // North branches
    'M 200 200 L 200 130 L 160 90 L 160 40',
    'M 200 200 L 200 130 L 240 90 L 240 40',
    'M 200 200 L 180 140 L 140 120 L 100 80',
    'M 200 200 L 220 140 L 260 120 L 300 80',
    // East branches
    'M 200 200 L 270 200 L 310 160 L 360 160',
    'M 200 200 L 270 200 L 310 240 L 360 240',
    'M 200 200 L 260 180 L 280 140 L 320 100',
    'M 200 200 L 260 220 L 280 260 L 320 300',
    // South branches
    'M 200 200 L 200 270 L 160 310 L 160 360',
    'M 200 200 L 200 270 L 240 310 L 240 360',
    'M 200 200 L 180 260 L 140 280 L 100 320',
    'M 200 200 L 220 260 L 260 280 L 300 320',
    // West branches
    'M 200 200 L 130 200 L 90 160 L 40 160',
    'M 200 200 L 130 200 L 90 240 L 40 240',
    'M 200 200 L 140 180 L 120 140 L 80 100',
    'M 200 200 L 140 220 L 120 260 L 80 300'
  ];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050707] overflow-hidden select-none"
    >
      {/* Volcanic Void Ambient Radial Bloom */}
      <div className="absolute w-[650px] h-[650px] rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.22)_0%,rgba(5,150,105,0.12)_45%,transparent_70%)] blur-3xl pointer-events-none" />
      <div className="absolute w-[420px] h-[420px] rounded-full bg-emerald-500/10 blur-[130px] pointer-events-none" />

      {/* Bio-Digital Seed Dropping and Geometric Root Branching */}
      <div className="relative w-72 h-72 sm:w-84 sm:h-84 flex items-center justify-center">
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full filter drop-shadow-[0_0_24px_rgba(16,185,129,0.5)]"
        >
          <defs>
            <linearGradient id="ivyRootGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a7f3d0" />
              <stop offset="45%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
            <radialGradient id="seedCoreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ecfdf5" stopOpacity="0.95" />
              <stop offset="40%" stopColor="#34d399" stopOpacity="0.65" />
              <stop offset="75%" stopColor="#059669" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#050707" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* 1. Dropping Digital Seed Animation */}
          <motion.g
            initial={{ y: -160, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.45, ease: 'easeIn' }}
          >
            {/* Seed Rhombus / Core */}
            <polygon
              points="200,186 214,200 200,214 186,200"
              fill="url(#seedCoreGlow)"
              stroke="#a7f3d0"
              strokeWidth="1.5"
            />
          </motion.g>

          {/* Touchdown Shockwave Ripple Ring */}
          {seedLanded && (
            <motion.circle
              cx="200"
              cy="200"
              r="40"
              fill="none"
              stroke="#34d399"
              strokeWidth="1.2"
              initial={{ r: 8, opacity: 1 }}
              animate={{ r: 180, opacity: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            />
          )}

          {/* 2. Sharp Organic Geometric Roots / Circuits Branching Outward */}
          {seedLanded &&
            rootPaths.map((d, index) => (
              <motion.path
                key={`root-${index}`}
                d={d}
                fill="none"
                stroke="url(#ivyRootGrad)"
                strokeWidth={index % 2 === 0 ? '1.8' : '1.2'}
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: [0, 0.9, 0.8] }}
                transition={{
                  duration: 1.2,
                  delay: (index % 4) * 0.1,
                  ease: 'easeInOut'
                }}
              />
            ))}

          {/* Endpoint Bio-Nodes (Terminal Leaves/Nodes) */}
          {seedLanded && (
            <g>
              {[
                [160, 40], [240, 40], [100, 80], [300, 80],
                [360, 160], [360, 240], [320, 100], [320, 300],
                [160, 360], [240, 360], [100, 320], [300, 320],
                [40, 160], [40, 240], [80, 100], [80, 300]
              ].map(([bx, by], i) => (
                <motion.circle
                  key={`node-${i}`}
                  cx={bx}
                  cy={by}
                  r="3.5"
                  fill="#050707"
                  stroke="#34d399"
                  strokeWidth="1.5"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8 + (i % 4) * 0.1, duration: 0.4 }}
                />
              ))}
            </g>
          )}

          {/* 3. Concentric Bio-Digital Ring Guides */}
          {seedLanded && (
            <>
              <motion.circle
                cx="200"
                cy="200"
                r="130"
                fill="none"
                stroke="#059669"
                strokeWidth="0.8"
                strokeOpacity="0.4"
                strokeDasharray="6 8"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                style={{ originX: '200px', originY: '200px' }}
              />

              <motion.circle
                cx="200"
                cy="200"
                r="70"
                fill="none"
                stroke="#34d399"
                strokeWidth="1.2"
                strokeOpacity="0.6"
                strokeDasharray="14 10"
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                style={{ originX: '200px', originY: '200px' }}
              />
            </>
          )}

          {/* 4. Central Converged Bio-Digital Core */}
          {seedLanded && (
            <motion.circle
              cx="200"
              cy="200"
              r="24"
              fill="url(#seedCoreGlow)"
              initial={{ scale: 0 }}
              animate={{ scale: isDecrypted ? [1, 1.25, 1] : 1 }}
              transition={{ duration: 0.8 }}
              style={{ originX: '200px', originY: '200px' }}
            />
          )}
        </svg>

        {/* Ambient Pulsing Glow */}
        {seedLanded && (
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 2.0, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute w-44 h-44 rounded-full bg-emerald-500/20 blur-xl pointer-events-none"
          />
        )}
      </div>

      {/* Decrypted Header */}
      <div className="mt-5 text-center max-w-lg px-4 space-y-2 z-10">
        <div className="flex items-center justify-center space-x-2 text-[10px] font-mono tracking-[0.25em] text-emerald-400 uppercase">
          <span>BIO-DIGITAL SPLICING</span>
          <span>//</span>
          <span>{progress}%</span>
        </div>

        {/* Target Decrypted String */}
        <div className="text-sm sm:text-base font-mono font-bold tracking-[0.2em] text-emerald-300 h-7 flex items-center justify-center">
          <span className="drop-shadow-[0_0_12px_rgba(52,211,153,0.6)]">
            {displayText}
          </span>
        </div>

        {/* Precision Progress Hairline */}
        <div className="w-64 sm:w-80 h-[1.5px] bg-emerald-950 mx-auto overflow-hidden relative rounded-full">
          <div
            className="h-full bg-gradient-to-r from-emerald-600 via-emerald-400 to-teal-200 shadow-[0_0_10px_#34d399]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Rapid Stream of Technical Terminal Logs Scrolling Underneath Core */}
      <div className="mt-4 w-full max-w-md sm:max-w-lg px-4 z-10">
        <div
          ref={logsContainerRef}
          className="h-24 sm:h-28 overflow-y-auto rounded-xl bg-black/60 border border-emerald-500/30 backdrop-blur-md p-3 font-mono text-[10px] sm:text-[11px] space-y-1 shadow-[0_10px_30px_rgba(0,0,0,0.8)] scrollbar-none"
        >
          {activeLogs.map((log, index) => (
            <div
              key={index}
              className={`flex items-start space-x-2 leading-tight ${
                index === activeLogs.length - 1 ? 'text-emerald-200 font-bold' : 'text-emerald-500/75'
              }`}
            >
              <span className="text-emerald-400 select-none">&gt;</span>
              <span>{log}</span>
            </div>
          ))}
          {activeLogs.length < BIO_TERMINAL_LOGS.length && (
            <div className="inline-block w-2 h-3.5 bg-emerald-400 animate-pulse ml-4" />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default BootSequenceV6;
