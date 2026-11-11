import React from 'react';
import { CyberGridCanvas } from './CyberGridCanvas';
import { Activity, Cpu, Sparkles } from 'lucide-react';

export const Bento3DTile: React.FC = () => {
  return (
    <div
      id="overview"
      className="relative rounded-3xl bg-[#09090b]/85 backdrop-blur-2xl border border-purple-500/30 overflow-hidden flex flex-col justify-between min-h-[360px] sm:min-h-[420px] shadow-[0_0_35px_rgba(168,85,247,0.12)]"
    >
      {/* 3D Wireframe Terrain & Interconnected Nodes */}
      <CyberGridCanvas />

      {/* Top telemetry bar */}
      <div className="relative z-10 p-5 flex items-center justify-between pointer-events-none">
        <div className="flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-black/80 border border-purple-500/40 backdrop-blur-md">
          <Activity className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
          <span className="font-mono text-[10px] font-bold text-white tracking-widest uppercase">
            3D DATA MESH // REACTIVE
          </span>
        </div>

        <div className="px-2.5 py-1 rounded-lg bg-black/80 border border-purple-500/30 font-mono text-[10px] text-purple-300">
          60 FPS
        </div>
      </div>

      {/* Bottom control readout */}
      <div className="relative z-10 p-5 flex items-center justify-between pointer-events-none">
        <div className="flex items-center space-x-1.5 text-[10px] font-mono text-slate-400 bg-black/75 px-3 py-1.5 rounded-xl border border-white/10 backdrop-blur-md">
          <Sparkles className="w-3 h-3 text-purple-400" />
          <span>CURSOR PERTURBS TOPOLOGY</span>
        </div>

        <div className="flex items-center space-x-2 text-[10px] font-mono text-purple-400 bg-black/75 px-3 py-1.5 rounded-xl border border-purple-500/30 backdrop-blur-md">
          <Cpu className="w-3 h-3" />
          <span>FP16 REAL-TIME</span>
        </div>
      </div>
    </div>
  );
};
