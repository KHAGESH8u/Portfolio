import React, { useState } from 'react';
import {
  LayoutDashboard,
  User,
  Cpu,
  Layers,
  GitBranch,
  Send,
  Terminal,
  Shield,
  Menu,
  X,
  ExternalLink
} from 'lucide-react';

interface CyberSidebarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const CyberSidebar: React.FC<CyberSidebarProps> = ({
  activeSection,
  onNavigate
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { id: 'overview', label: 'SYSTEM OVERVIEW', icon: LayoutDashboard },
    { id: 'biometrics', label: 'BIOMETRICS & BIO', icon: User },
    { id: 'skills', label: 'NEURAL MATRIX', icon: Cpu },
    { id: 'projects', label: 'DEPLOYED CORES', icon: Layers },
    { id: 'timeline', label: 'TRAJECTORY', icon: GitBranch },
    { id: 'contact', label: 'TRANSMISSION', icon: Send }
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 h-16 bg-[#050505]/90 backdrop-blur-xl border-b border-purple-500/20 px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2.5">
          <div className="w-7 h-7 rounded-lg bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300 font-mono text-xs font-bold shadow-[0_0_10px_rgba(168,85,247,0.4)]">
            K
          </div>
          <div>
            <div className="font-mono text-xs font-bold text-white tracking-widest">
              KHAGESH
            </div>
            <div className="text-[9px] font-mono text-purple-400">
              AI ARCHITECT
            </div>
          </div>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 rounded-lg bg-white/5 border border-purple-500/30 text-purple-300"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-30 pt-16 bg-black/95 backdrop-blur-2xl p-6 flex flex-col justify-between">
          <div className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-mono text-xs tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'bg-purple-500/20 border border-purple-400/50 text-white shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-purple-400' : 'text-slate-500'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/20 text-[10px] font-mono text-slate-400 space-y-1">
            <div className="text-purple-400 font-semibold">KHAGESH // CORE ACTIVE</div>
            <div>STATUS: FP16 TENSOR OPTIMIZED</div>
          </div>
        </div>
      )}

      {/* Desktop Permanent Left-Hand Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-64 z-40 bg-[#050505]/95 backdrop-blur-3xl border-r border-purple-500/20 flex-col justify-between p-6 select-none shadow-[10px_0_40px_rgba(0,0,0,0.8)]">
        <div>
          {/* Brand & Name Identifier */}
          <div className="flex items-center space-x-3 pb-6 border-b border-purple-500/15">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-fuchsia-600/20 border border-purple-400/40 flex items-center justify-center text-purple-300 font-mono text-sm font-bold shadow-[0_0_15px_rgba(168,85,247,0.35)]">
              KG
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-sm font-extrabold tracking-widest text-white">
                KHAGESH
              </span>
              <span className="text-[10px] font-mono tracking-wider text-purple-400">
                AI SYSTEMS ARCHITECT
              </span>
            </div>
          </div>

          {/* System Mode Pill */}
          <div className="mt-5 px-3 py-1.5 rounded-lg bg-purple-950/40 border border-purple-500/30 flex items-center justify-between text-[10px] font-mono text-purple-300">
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping" />
              <span>KERNEL // ACTIVE</span>
            </div>
            <span className="text-slate-500">V3.0</span>
          </div>

          {/* Navigation Items */}
          <nav className="mt-8 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl font-mono text-xs tracking-wider transition-all duration-200 text-left ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-500/20 to-fuchsia-500/10 border border-purple-400/50 text-white shadow-[0_0_15px_rgba(168,85,247,0.25)]'
                      : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-purple-400' : 'text-slate-500'}`} />
                  <span className="truncate">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Hardware Telemetry */}
        <div className="space-y-4 pt-6 border-t border-purple-500/15">
          <div className="p-3.5 rounded-xl bg-black/80 border border-purple-500/20 font-mono text-[10px] text-slate-400 space-y-1.5">
            <div className="flex items-center justify-between text-purple-300 pb-1 border-b border-white/5">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3 h-3" />
                TELEMETRY
              </span>
              <span className="text-emerald-400">NORMAL</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>LATENCY:</span>
              <span className="text-purple-400 font-semibold">&lt; 0.12ms</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>SECURITY:</span>
              <span className="text-white">QUANTUM-ZERO</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
            <span className="flex items-center gap-1">
              <Shield className="w-3 h-3 text-purple-400" />
              SAN FRANCISCO
            </span>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-purple-400 hover:text-purple-300 flex items-center gap-1"
            >
              <span>GITHUB</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};
