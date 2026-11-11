import React, { useState } from 'react';
import { CyberSidebar } from './v3/CyberSidebar';
import { BentoHeroTile } from './v3/BentoHeroTile';
import { Bento3DTile } from './v3/Bento3DTile';
import { BentoSkillsTile } from './v3/BentoSkillsTile';
import { BentoProjectsTile } from './v3/BentoProjectsTile';
import { BentoTimelineTile } from './v3/BentoTimelineTile';
import { BentoContactTile } from './v3/BentoContactTile';
import { BentoAccoladesTile } from './v3/BentoAccoladesTile';
import { Shield, Terminal } from 'lucide-react';

export const PortfolioV3: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-slate-100 selection:bg-purple-500 selection:text-black font-sans overflow-x-hidden">
      {/* Jet Black Subtle Cyber Grid Texture */}
      <div className="fixed inset-0 bg-grid-pattern opacity-25 pointer-events-none z-0" />

      {/* Radiant Neon Violet Ambient Backdrops */}
      <div className="fixed top-1/4 right-1/4 w-[650px] h-[650px] bg-purple-600/10 rounded-full blur-[180px] pointer-events-none z-0" />
      <div className="fixed bottom-1/4 left-1/3 w-[600px] h-[600px] bg-fuchsia-600/8 rounded-full blur-[180px] pointer-events-none z-0" />

      {/* Permanent Left-Hand Sidebar Navigation */}
      <CyberSidebar
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Content Area: Tight Interlocking Bento Box Masonry Grid */}
      <div className="relative z-10 lg:pl-64 pt-20 lg:pt-8 p-4 sm:p-6 lg:p-8 min-h-screen flex flex-col justify-between">
        <main className="max-w-[1600px] mx-auto w-full space-y-6">
          
          {/* Row 1: Hero & Biometrics (8 cols) + Interactive 3D Mesh (4 cols) */}
          <div className="grid grid-cols-12 gap-6 items-stretch">
            <div className="col-span-12 xl:col-span-8 flex flex-col">
              <BentoHeroTile />
            </div>
            <div className="col-span-12 xl:col-span-4 flex flex-col">
              <Bento3DTile />
            </div>
          </div>

          {/* Row 2: Neural Matrix Skills (5 cols) + Flagship Deployed Projects (7 cols) */}
          <div className="grid grid-cols-12 gap-6 items-stretch">
            <div className="col-span-12 lg:col-span-5 flex flex-col">
              <BentoSkillsTile />
            </div>
            <div className="col-span-12 lg:col-span-7 flex flex-col">
              <BentoProjectsTile />
            </div>
          </div>

          {/* Row 3: Trajectory Timeline (7 cols) + Direct Transmission Port (5 cols) */}
          <div className="grid grid-cols-12 gap-6 items-stretch">
            <div className="col-span-12 xl:col-span-7 flex flex-col">
              <BentoTimelineTile />
            </div>
            <div className="col-span-12 xl:col-span-5 flex flex-col">
              <BentoContactTile />
            </div>
          </div>

          {/* Row 4: Honors & Accolades (Full width 12 cols) */}
          <div className="w-full">
            <BentoAccoladesTile />
          </div>

        </main>

        {/* Cyber Dashboard Footer */}
        <footer className="max-w-[1600px] mx-auto w-full mt-10 pt-6 border-t border-purple-500/15 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500 gap-3">
          <div className="flex items-center space-x-2 text-purple-400">
            <Terminal className="w-3.5 h-3.5" />
            <span>KHAGESH // AI & AUTONOMOUS SYSTEMS ARCHITECTURE // V3.0 NEON</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1">
              <Shield className="w-3 h-3 text-purple-400" />
              PURE JET BLACK / NEON VIOLET CORE
            </span>
            <span>SAN FRANCISCO, CA</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PortfolioV3;
