import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface BootSequenceV5Props {
  onComplete: () => void;
}

export const BootSequenceV5: React.FC<BootSequenceV5Props> = ({ onComplete }) => {
  const targetText = 'SYSTEM V5 // NEURAL ARCHITECTURE ONLINE';
  const [displayText, setDisplayText] = useState('');
  const [isDecrypted, setIsDecrypted] = useState(false);
  const [progress, setProgress] = useState(0);

  // Cryptographic text scrambling effect
  useEffect(() => {
    const chars = '0189XZAQKV#$&%λΩΨ0123456789';
    let frame = 0;
    const totalFrames = 60; // ~1.8 seconds at 30ms interval

    const interval = setInterval(() => {
      frame++;
      const currentProgress = Math.min(frame / totalFrames, 1);
      setProgress(Math.round(currentProgress * 100));

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

      if (frame >= totalFrames) {
        clearInterval(interval);
        setDisplayText(targetText);
        setIsDecrypted(true);

        // Hold the completed biometric core & decrypted state for exactly 1.0 second
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 32);

    return () => clearInterval(interval);
  }, [onComplete, targetText]);

  // Generate 16 radial neural thread paths that weave gracefully toward the center iris
  const radialThreads = Array.from({ length: 16 }, (_, i) => {
    const angle = (i * 360) / 16;
    const rad = (angle * Math.PI) / 180;
    const startX = 200 + 170 * Math.cos(rad);
    const startY = 200 + 170 * Math.sin(rad);
    // Intermediate organic control bend
    const midAngle = rad + ((i % 2 === 0 ? 0.35 : -0.35));
    const midX = 200 + 95 * Math.cos(midAngle);
    const midY = 200 + 95 * Math.sin(midAngle);
    // Target iris boundary
    const endX = 200 + 38 * Math.cos(rad);
    const endY = 200 + 38 * Math.sin(rad);

    return {
      d: `M ${startX.toFixed(1)} ${startY.toFixed(1)} Q ${midX.toFixed(1)} ${midY.toFixed(1)} ${endX.toFixed(1)} ${endY.toFixed(1)}`,
      angle
    };
  });

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#07020d] overflow-hidden select-none"
    >
      {/* Deep Aubergine Ambient Radial Bloom */}
      <div className="absolute w-[650px] h-[650px] rounded-full bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.18)_0%,rgba(88,28,135,0.12)_45%,transparent_70%)] blur-3xl pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-[#d4af37]/10 blur-[130px] pointer-events-none" />

      {/* Central Tech-Driven Luxury Biometric Eye / AI Core */}
      <div className="relative w-72 h-72 sm:w-88 sm:h-88 flex items-center justify-center">
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full filter drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]"
        >
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fcf8e8" />
              <stop offset="50%" stopColor="#eed98d" />
              <stop offset="100%" stopColor="#d4af37" />
            </linearGradient>
            <radialGradient id="irisBloom" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fcf8e8" stopOpacity="0.95" />
              <stop offset="35%" stopColor="#eed98d" stopOpacity="0.6" />
              <stop offset="70%" stopColor="#d4af37" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#3b0764" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* 1. Outer Concentric Precision Calibrator Rings */}
          <motion.circle
            cx="200"
            cy="200"
            r="185"
            fill="none"
            stroke="#d4af37"
            strokeWidth="0.8"
            strokeOpacity="0.3"
            strokeDasharray="4 8"
            animate={{ rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
            style={{ originX: '200px', originY: '200px' }}
          />

          <motion.circle
            cx="200"
            cy="200"
            r="170"
            fill="none"
            stroke="#eed98d"
            strokeWidth="1.2"
            strokeOpacity="0.45"
            strokeDasharray="18 12 4 12"
            animate={{ rotate: -360 }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            style={{ originX: '200px', originY: '200px' }}
          />

          {/* Calibrator Outer Ticks */}
          {Array.from({ length: 24 }).map((_, i) => {
            const rot = (i * 360) / 24;
            return (
              <line
                key={`tick-${i}`}
                x1="200"
                y1="22"
                x2="200"
                y2={i % 6 === 0 ? '30' : '26'}
                stroke="#d4af37"
                strokeWidth={i % 6 === 0 ? '1.5' : '0.8'}
                strokeOpacity={i % 6 === 0 ? '0.75' : '0.35'}
                transform={`rotate(${rot} 200 200)`}
              />
            );
          })}

          {/* 2. Weaving Antique Gold Neural Threads */}
          {radialThreads.map((thread, index) => (
            <motion.path
              key={`thread-${index}`}
              d={thread.d}
              fill="none"
              stroke="url(#goldGradient)"
              strokeWidth={index % 2 === 0 ? '1.4' : '0.9'}
              strokeOpacity="0.75"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 0.8, 0.75] }}
              transition={{
                duration: 1.4,
                delay: 0.1 + (index * 0.05),
                ease: 'easeInOut'
              }}
            />
          ))}

          {/* 3. Mid Biometric Aperture Rings */}
          <motion.circle
            cx="200"
            cy="200"
            r="82"
            fill="none"
            stroke="#e5c158"
            strokeWidth="1.2"
            strokeOpacity="0.6"
            strokeDasharray="8 6"
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            style={{ originX: '200px', originY: '200px' }}
          />

          <motion.circle
            cx="200"
            cy="200"
            r="60"
            fill="none"
            stroke="#fcf8e8"
            strokeWidth="1.4"
            strokeOpacity="0.7"
            strokeDasharray="14 10 3 10"
            animate={{ rotate: -360 }}
            transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
            style={{ originX: '200px', originY: '200px' }}
          />

          {/* 4. Central Biometric Iris & AI Core */}
          <motion.circle
            cx="200"
            cy="200"
            r="38"
            fill="url(#irisBloom)"
            initial={{ scale: 0.2, opacity: 0 }}
            animate={{ scale: [0.2, 1.1, 1], opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
            style={{ originX: '200px', originY: '200px' }}
          />

          {/* Inner Iris Slit / Pupil Reticle */}
          <motion.ellipse
            cx="200"
            cy="200"
            rx="12"
            ry="24"
            fill="#07020d"
            stroke="#fcf8e8"
            strokeWidth="1.2"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: 'backOut' }}
            style={{ originX: '200px', originY: '200px' }}
          />

          {/* Center Singularity Light Core */}
          <motion.circle
            cx="200"
            cy="200"
            r="4.5"
            fill="#ffffff"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.4, 1] }}
            transition={{ duration: 0.6, delay: 1.1, ease: 'easeOut' }}
            style={{ originX: '200px', originY: '200px' }}
          />
        </svg>

        {/* Ambient Pulsing Core Halo */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.35, 0.65, 0.35]
          }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-36 h-36 rounded-full bg-[#eed98d]/20 blur-xl pointer-events-none"
        />
      </div>

      {/* Cryptographic Scramble Text and High-Tech Telemetry */}
      <div className="mt-8 text-center max-w-md px-4 space-y-3 z-10">
        <div className="flex items-center justify-center space-x-2 text-[10px] font-mono tracking-[0.28em] text-[#d4af37]/80 uppercase">
          <span>INITIALIZATION PHASE</span>
          <span>//</span>
          <span>{progress}%</span>
        </div>

        {/* Target Decrypted String */}
        <div className="text-sm sm:text-base font-mono font-bold tracking-[0.22em] text-[#eed98d] h-7 flex items-center justify-center">
          <span className="drop-shadow-[0_0_12px_rgba(238,217,141,0.5)]">
            {displayText}
          </span>
        </div>

        {/* Progress Gauge Hairline */}
        <div className="w-56 sm:w-72 h-[1px] bg-[#d4af37]/20 mx-auto overflow-hidden relative rounded-full">
          <motion.div
            className="h-full bg-gradient-to-r from-[#d4af37] via-[#eed98d] to-[#fcf8e8] shadow-[0_0_10px_#eed98d]"
            style={{ width: `${progress}%` }}
            transition={{ ease: 'linear' }}
          />
        </div>

        {/* Telemetry Footer */}
        <div className="text-[10px] font-mono tracking-widest text-slate-400">
          {isDecrypted ? (
            <span className="text-[#e5c158] drop-shadow-[0_0_8px_rgba(229,193,88,0.4)]">
              BIOMETRIC SYNAPSE LOCKED // AUBERGINE & GOLD KERNEL
            </span>
          ) : (
            <span>WEAVING HIGH-DIMENSIONAL TENSOR LATTICE...</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default BootSequenceV5;
