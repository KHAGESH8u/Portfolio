import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, CheckCircle2 } from 'lucide-react';

interface BootSequenceProps {
  onComplete: () => void;
}

const BOOT_LOGS = [
  { step: 5, tag: 'CORE', text: 'Initializing tensor runtime and compute environment...' },
  { step: 18, tag: 'CUDA', text: 'Allocating high-dimensional memory buffers & execution threads...' },
  { step: 32, tag: 'NEURAL', text: 'Loading transformer topologies and synaptic weights...' },
  { step: 48, tag: 'WEBGL', text: 'Compiling high-performance GLSL vertex & fragment shaders...' },
  { step: 64, tag: 'PHYSICS', text: 'Binding spatial raycaster and reactive repulsion fields...' },
  { step: 78, tag: 'PROFILE', text: 'Mounting profile vectors: Alexander Vance // AI Systems...' },
  { step: 92, tag: 'PIPELINE', text: 'Verifying client-side asset cache & responsive viewports...' },
  { step: 100, tag: 'COMPLETE', text: 'Model synthesis finished. Initializing neural viewport...' }
];

export const BootSequence: React.FC<BootSequenceProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<{ tag: string; text: string }[]>([]);
  const logContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 2100; // ~2.1 seconds for high-tech snappy boot sequence

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentPct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(currentPct);

      // Trigger new logs according to progress
      const eligibleLogs = BOOT_LOGS.filter((l) => l.step <= currentPct);
      setLogs(eligibleLogs.map((l) => ({ tag: l.tag, text: l.text })));

      if (currentPct >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          onComplete();
        }, 350);
      }
    }, 35);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Keep logs scrolled to bottom
  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.04,
        filter: 'blur(10px)',
        transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] }
      }}
      className="fixed inset-0 z-[100] bg-[#030712] flex flex-col items-center justify-center p-4 sm:p-6 select-none overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[150px] pointer-events-none" />
      <div className="absolute w-[450px] h-[450px] rounded-full bg-purple-600/10 blur-[130px] pointer-events-none" />

      {/* Cybernetic Terminal Container */}
      <div className="relative w-full max-w-xl rounded-2xl bg-slate-950/90 backdrop-blur-2xl border border-white/10 p-6 sm:p-8 shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col">
        {/* Specular top border */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Cpu className="w-4 h-4 animate-spin" style={{ animationDuration: '6s' }} />
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-white tracking-widest flex items-center gap-2">
                <span>BOOT_SEQUENCE</span>
                <span className="text-[10px] text-cyan-400">V4.9.2</span>
              </div>
              <div className="text-[10px] font-mono text-slate-400">
                SYSTEM ARCHITECTURE SYNCHRONIZATION
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400">
            <Terminal className="w-3.5 h-3.5" />
            <span>AI_INITIALIZING</span>
          </div>
        </div>

        {/* Terminal Log Console */}
        <div
          ref={logContainerRef}
          className="h-44 sm:h-48 overflow-y-auto rounded-xl bg-black/60 border border-white/5 p-4 font-mono text-xs space-y-2 mb-6 scroll-smooth"
        >
          {logs.map((log, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.15 }}
              className="flex items-start space-x-2 leading-relaxed"
            >
              <span className="text-cyan-400 font-semibold shrink-0">
                [{log.tag}]
              </span>
              <span className="text-slate-300">{log.text}</span>
            </motion.div>
          ))}
          <div className="flex items-center space-x-2 text-slate-500">
            <span className="w-1.5 h-3 bg-cyan-400 animate-pulse inline-block" />
          </div>
        </div>

        {/* Progress Bar & Telemetry Details */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400 flex items-center gap-1.5">
              {progress === 100 ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">ALL SYSTEMS SYNCHRONIZED</span>
                </>
              ) : (
                <span>COMPILING NEURAL CORES...</span>
              )}
            </span>
            <span className="text-cyan-400 font-bold font-mono text-sm">
              {progress}%
            </span>
          </div>

          {/* Glowing Progress Track */}
          <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-white/10 p-[1px]">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full shadow-[0_0_15px_rgba(0,242,254,0.6)]"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>

          {/* Subsystem Status Indicators */}
          <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 pt-1">
            <span>MEM: 64MB BUFFER</span>
            <span>GLSL: OPTIMIZED</span>
            <span>LATENCY: 0.04MS</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
