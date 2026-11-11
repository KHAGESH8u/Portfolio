import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface BootSequenceV5Props {
  onComplete: () => void;
}

const TERMINAL_LOGS = [
  'INITIALIZING TENSOR CORES (128/128 CLUSTERS ONLINE)...',
  'LOADING NEURAL WEIGHTS (TRANSFORMER-XL FP16 KERNEL)...',
  'ALLOCATING SPATIAL SYNAPSE MESH (150 ACTIVE NODES)...',
  'CALIBRATING RETINAL OPTIC SENSORS & PARALLAX...',
  'CONNECTING AUBERGINE & GOLD VOLUMETRIC CHANNELS...',
  'DISTRIBUTED CONSENSUS ACHIEVED // LATENCY: 0.08ms...',
  'BIOMETRIC TARGET LOCK: RETINAL MATRIX ACQUIRED...',
  'SYSTEM V5 // NEURAL ARCHITECTURE ONLINE.'
];

export const BootSequenceV5: React.FC<BootSequenceV5Props> = ({ onComplete }) => {
  const targetText = 'SYSTEM V5 // NEURAL ARCHITECTURE ONLINE';
  const [displayText, setDisplayText] = useState('');
  const [isDecrypted, setIsDecrypted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeLogs, setActiveLogs] = useState<string[]>([]);
  const logsContainerRef = useRef<HTMLDivElement>(null);

  // Cryptographic text scrambling and terminal log streaming
  useEffect(() => {
    const chars = '0189XZAQKV#$&%0123456789';
    let frame = 0;
    const totalFrames = 55; // ~1.8 seconds

    const interval = setInterval(() => {
      frame++;
      const currentProgress = Math.min(frame / totalFrames, 1);
      const pct = Math.round(currentProgress * 100);
      setProgress(pct);

      // Stream terminal logs based on progress percentage
      const logIndex = Math.min(
        Math.floor(currentProgress * TERMINAL_LOGS.length),
        TERMINAL_LOGS.length - 1
      );
      setActiveLogs(TERMINAL_LOGS.slice(0, logIndex + 1));

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
        setActiveLogs(TERMINAL_LOGS);

        // Hold completed state for exactly 1.0 second, then dissolve to reveal 3D canvas
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 32);

    return () => clearInterval(interval);
  }, [onComplete, targetText]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#07020d] overflow-hidden select-none"
    >
      {/* Deep Aubergine Ambient Radial Bloom */}
      <div className="absolute w-[650px] h-[650px] rounded-full bg-[radial-gradient(circle_at_center,rgba(126,34,206,0.22)_0%,rgba(88,28,135,0.12)_45%,transparent_70%)] blur-3xl pointer-events-none" />
      <div className="absolute w-[420px] h-[420px] rounded-full bg-[#d4af37]/10 blur-[130px] pointer-events-none" />

      {/* High-Precision Concentric Circuit Rings & Biometric Retinal Scanner */}
      <div className="relative w-72 h-72 sm:w-84 sm:h-84 flex items-center justify-center">
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full filter drop-shadow-[0_0_24px_rgba(212,175,55,0.45)]"
        >
          <defs>
            <linearGradient id="goldCircuitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fcf8e8" />
              <stop offset="45%" stopColor="#eed98d" />
              <stop offset="100%" stopColor="#d4af37" />
            </linearGradient>
            <radialGradient id="retinalGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fcf8e8" stopOpacity="0.95" />
              <stop offset="40%" stopColor="#eed98d" stopOpacity="0.55" />
              <stop offset="75%" stopColor="#d4af37" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#07020d" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* 1. Outer Calibration Caliper Track (Clockwise Continuous Spin) */}
          <motion.circle
            cx="200"
            cy="200"
            r="185"
            fill="none"
            stroke="#d4af37"
            strokeWidth="0.8"
            strokeOpacity="0.35"
            strokeDasharray="4 8"
            animate={{ rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
            style={{ originX: '200px', originY: '200px' }}
          />

          {/* Precision Degree Calibrator Ticks */}
          {Array.from({ length: 36 }).map((_, i) => {
            const rot = (i * 360) / 36;
            const isMajor = i % 9 === 0;
            const isMid = i % 3 === 0;
            return (
              <line
                key={`tick-${i}`}
                x1="200"
                y1="18"
                x2="200"
                y2={isMajor ? '30' : isMid ? '25' : '22'}
                stroke="#eed98d"
                strokeWidth={isMajor ? '1.8' : isMid ? '1.2' : '0.7'}
                strokeOpacity={isMajor ? '0.9' : isMid ? '0.6' : '0.35'}
                transform={`rotate(${rot} 200 200)`}
              />
            );
          })}

          {/* 2. Concentric Stepped Circuit Bus Rings (Counter-Rotating) */}
          <motion.circle
            cx="200"
            cy="200"
            r="164"
            fill="none"
            stroke="url(#goldCircuitGrad)"
            strokeWidth="1.4"
            strokeOpacity="0.65"
            strokeDasharray="28 14 6 14"
            animate={{ rotate: -360 }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            style={{ originX: '200px', originY: '200px' }}
          />

          {/* Circuit PCB Vias / Solder Nodes */}
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i * 360) / 8;
            const rad = (angle * Math.PI) / 180;
            const vx = 200 + 164 * Math.cos(rad);
            const vy = 200 + 164 * Math.sin(rad);
            return (
              <g key={`via-${i}`}>
                <circle cx={vx} cy={vy} r="3" fill="#07020d" stroke="#fcf8e8" strokeWidth="1" />
                <circle cx={vx} cy={vy} r="1.2" fill="#eed98d" />
              </g>
            );
          })}

          {/* 3. Mid Retinal Segmented Iris Aperture Ring */}
          <motion.circle
            cx="200"
            cy="200"
            r="120"
            fill="none"
            stroke="#d4af37"
            strokeWidth="1.8"
            strokeOpacity="0.5"
            strokeDasharray="16 8 4 8"
            animate={{ rotate: 360 }}
            transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
            style={{ originX: '200px', originY: '200px' }}
          />

          <motion.circle
            cx="200"
            cy="200"
            r="90"
            fill="none"
            stroke="#eed98d"
            strokeWidth="1.2"
            strokeOpacity="0.75"
            strokeDasharray="32 16"
            animate={{ rotate: -360 }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            style={{ originX: '200px', originY: '200px' }}
          />

          {/* 4. Retinal Targeting Crosshairs & Corner Brackets */}
          {/* Top-Left Bracket */}
          <motion.path
            d="M 140 170 L 140 140 L 170 140"
            fill="none"
            stroke="#fcf8e8"
            strokeWidth="2"
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: isDecrypted ? 0.95 : 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{ originX: '200px', originY: '200px' }}
          />
          {/* Top-Right Bracket */}
          <motion.path
            d="M 230 140 L 260 140 L 260 170"
            fill="none"
            stroke="#fcf8e8"
            strokeWidth="2"
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: isDecrypted ? 0.95 : 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{ originX: '200px', originY: '200px' }}
          />
          {/* Bottom-Left Bracket */}
          <motion.path
            d="M 140 230 L 140 260 L 170 260"
            fill="none"
            stroke="#fcf8e8"
            strokeWidth="2"
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: isDecrypted ? 0.95 : 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{ originX: '200px', originY: '200px' }}
          />
          {/* Bottom-Right Bracket */}
          <motion.path
            d="M 230 260 L 260 260 L 260 230"
            fill="none"
            stroke="#fcf8e8"
            strokeWidth="2"
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: isDecrypted ? 0.95 : 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{ originX: '200px', originY: '200px' }}
          />

          {/* Retinal Scanner Crosshair Lines */}
          <line x1="175" y1="200" x2="192" y2="200" stroke="#fcf8e8" strokeWidth="1.4" />
          <line x1="208" y1="200" x2="225" y2="200" stroke="#fcf8e8" strokeWidth="1.4" />
          <line x1="200" y1="175" x2="200" y2="192" stroke="#fcf8e8" strokeWidth="1.4" />
          <line x1="200" y1="208" x2="200" y2="225" stroke="#fcf8e8" strokeWidth="1.4" />

          {/* 5. Central AI Retinal Pupil Core */}
          <motion.circle
            cx="200"
            cy="200"
            r="44"
            fill="url(#retinalGlow)"
            initial={{ scale: 0.2, opacity: 0 }}
            animate={{ scale: isDecrypted ? [1, 1.15, 1] : 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ originX: '200px', originY: '200px' }}
          />

          {/* Central Target Singularity */}
          <circle cx="200" cy="200" r="5" fill="#fcf8e8" />
          <motion.circle
            cx="200"
            cy="200"
            r="18"
            fill="none"
            stroke="#eed98d"
            strokeWidth="1.2"
            animate={{ scale: [1, 1.3, 1], opacity: [0.8, 0.2, 0.8] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            style={{ originX: '200px', originY: '200px' }}
          />
        </svg>

        {/* Ambient Pulsing Scanner Glow */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.5, 0.25]
          }}
          transition={{ duration: 2.0, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-44 h-44 rounded-full bg-[#eed98d]/20 blur-xl pointer-events-none"
        />
      </div>

      {/* Decrypted String Header */}
      <div className="mt-5 text-center max-w-lg px-4 space-y-2 z-10">
        <div className="flex items-center justify-center space-x-2 text-[10px] font-mono tracking-[0.25em] text-[#d4af37] uppercase">
          <span>RETINAL BIOMETRIC SCAN</span>
          <span>//</span>
          <span>{progress}%</span>
        </div>

        {/* Target Decrypted String */}
        <div className="text-sm sm:text-base font-mono font-bold tracking-[0.2em] text-[#eed98d] h-7 flex items-center justify-center">
          <span className="drop-shadow-[0_0_12px_rgba(238,217,141,0.6)]">
            {displayText}
          </span>
        </div>

        {/* Precision Progress Hairline */}
        <div className="w-64 sm:w-80 h-[1.5px] bg-[#d4af37]/25 mx-auto overflow-hidden relative rounded-full">
          <div
            className="h-full bg-gradient-to-r from-[#d4af37] via-[#eed98d] to-[#fcf8e8] shadow-[0_0_10px_#eed98d]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Rapid Stream of Technical Terminal Logs Scrolling Underneath Core */}
      <div className="mt-4 w-full max-w-md sm:max-w-lg px-4 z-10">
        <div
          ref={logsContainerRef}
          className="h-24 sm:h-28 overflow-y-auto rounded-xl bg-black/60 border border-[#d4af37]/30 backdrop-blur-md p-3 font-mono text-[10px] sm:text-[11px] space-y-1 shadow-[0_10px_30px_rgba(0,0,0,0.8)] scrollbar-none"
        >
          {activeLogs.map((log, index) => (
            <div
              key={index}
              className={`flex items-start space-x-2 leading-tight ${
                index === activeLogs.length - 1 ? 'text-[#fcf8e8] font-bold' : 'text-[#d4af37]/75'
              }`}
            >
              <span className="text-[#e5c158] select-none">&gt;</span>
              <span>{log}</span>
            </div>
          ))}
          {activeLogs.length < TERMINAL_LOGS.length && (
            <div className="inline-block w-2 h-3.5 bg-[#eed98d] animate-pulse ml-4" />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default BootSequenceV5;
