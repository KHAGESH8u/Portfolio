import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface BootSequenceV3Props {
  onComplete: () => void;
}

const HEX_CHARS = '0123456789ABCDEF!@#$%&*<>[]{}~_+=';
const TARGET_TEXT = 'KHAGESH // AI CORE ONLINE';

const CIPHER_STREAM = [
  '0x7FFF89A4 :: ALLOCATING TENSOR PIPELINE',
  'SHA256: 9f86d081884c7d659a2feaa0c55ad015',
  'COMPUTING RESIDUAL SYNAPTIC ATTENTION WEIGHTS',
  'STREAM_BIND: GPU_DEVICE_0 [CUDA_12.4_READY]',
  'GLSL_SHADER_LINK: SUCCESSFUL [60FPS_LOCKED]',
  'SPATIAL_TOPOLOGY_OPTIMIZED: 4096 NODES',
  'DECRYPTING KERNEL SIGNATURES [VERIFIED]',
  'PARALLEL_BATCH_NORM: 512 THREADS MOUNTED',
  'BUFFER_CONCURRENCY: ZERO_LATENCY_ACTIVE',
  'CORE_SYSTEMS: 100% OPERATIONAL'
];

export const BootSequenceV3: React.FC<BootSequenceV3Props> = ({ onComplete }) => {
  const [streamIndex, setStreamIndex] = useState(0);
  const [decryptedText, setDecryptedText] = useState('');
  const [isDecrypted, setIsDecrypted] = useState(false);
  const [progress, setProgress] = useState(0);
  const streamEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 2500; // 2.5 seconds loading sequence

    // Telemetry progress and stream tick
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      // Fast streaming index
      setStreamIndex(Math.min(CIPHER_STREAM.length, Math.floor((pct / 100) * CIPHER_STREAM.length) + 1));

      // Decryption sequence begins at 45% and completes at 85%
      if (pct > 40 && pct < 85) {
        const revealedCount = Math.floor(((pct - 40) / 45) * TARGET_TEXT.length);
        let currentStr = TARGET_TEXT.slice(0, revealedCount);
        for (let i = revealedCount; i < TARGET_TEXT.length; i++) {
          currentStr += HEX_CHARS[Math.floor(Math.random() * HEX_CHARS.length)];
        }
        setDecryptedText(currentStr);
      } else if (pct >= 85) {
        setDecryptedText(TARGET_TEXT);
        setIsDecrypted(true);
      } else {
        // Initial scramble
        let randomStr = '';
        for (let i = 0; i < TARGET_TEXT.length; i++) {
          randomStr += HEX_CHARS[Math.floor(Math.random() * HEX_CHARS.length)];
        }
        setDecryptedText(randomStr);
      }

      if (pct >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 220);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    if (streamEndRef.current) {
      streamEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [streamIndex]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        y: -30,
        filter: 'brightness(1.8) blur(14px)',
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
      }}
      className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center p-4 sm:p-6 select-none overflow-hidden"
    >
      {/* Piercing Neon Violet Flare Background */}
      <div className="absolute w-[650px] h-[650px] rounded-full bg-purple-600/18 blur-[180px] pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-fuchsia-600/15 blur-[140px] pointer-events-none" />

      {/* Cyber Grid Texture Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Terminal Display Container */}
      <div className="relative w-full max-w-2xl rounded-2xl bg-black/90 border border-purple-500/40 p-6 sm:p-8 backdrop-blur-2xl shadow-[0_0_60px_rgba(168,85,247,0.25)] flex flex-col">
        {/* Glowing Top Specular Line */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-purple-400 to-transparent pointer-events-none" />

        {/* Cyber Top Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-purple-500/25 mb-4 font-mono text-xs">
          <div className="flex items-center space-x-2 text-purple-300">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
            <span className="font-bold tracking-widest">SYNAPSE_CORE // BOOT_KERNEL</span>
          </div>
          <span className="text-purple-400/80 tracking-wider">
            ADDR: 0x00FF8C :: {progress}%
          </span>
        </div>

        {/* Rapid Fast-Scrolling Encrypted Telemetry Console */}
        <div className="h-28 overflow-hidden font-mono text-[11px] text-purple-300/80 leading-relaxed space-y-1 mb-6 border-b border-purple-500/20 pb-2">
          {CIPHER_STREAM.slice(0, streamIndex).map((line, idx) => (
            <div key={idx} className="flex items-center space-x-2 truncate">
              <span className="text-purple-500 select-none">&gt;&gt;</span>
              <span className={idx === streamIndex - 1 ? 'text-purple-200 font-bold' : 'text-purple-400/70'}>
                {line}
              </span>
            </div>
          ))}
          <div ref={streamEndRef} />
        </div>

        {/* Main Decrypted Centerpiece Target */}
        <div className="py-4 text-center">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-purple-400/75 block mb-2">
            PRIMARY NEURAL SYSTEM IDENTITY
          </span>
          <div className="font-mono text-xl sm:text-3xl font-black tracking-widest text-white drop-shadow-[0_0_25px_rgba(168,85,247,0.8)]">
            <span className={isDecrypted ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-fuchsia-300' : 'text-purple-300'}>
              {decryptedText}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-5 w-full bg-purple-950/40 rounded-full h-1.5 overflow-hidden border border-purple-500/30">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 to-fuchsia-400 shadow-[0_0_15px_rgba(168,85,247,0.7)]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default BootSequenceV3;
