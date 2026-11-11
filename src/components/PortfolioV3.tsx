import React from 'react';
import { GlobalCyberCanvas } from './v3/GlobalCyberCanvas';
import { NavbarV3 } from './v3/NavbarV3';
import { HeroV3 } from './v3/HeroV3';
import { AboutV3 } from './v3/AboutV3';
import { ProjectsV3 } from './v3/ProjectsV3';
import { SkillsV3 } from './v3/SkillsV3';
import { TimelineV3 } from './v3/TimelineV3';
import { ContactV3 } from './v3/ContactV3';
import { FooterV3 } from './v3/FooterV3';

export const PortfolioV3: React.FC = () => {
  return (
    <div className="relative min-h-screen isolate bg-[#030108] text-gray-100 selection:bg-purple-500 selection:text-black font-sans overflow-x-hidden">
      {/* 1. Viewport-Fixed Glowing Neon Violet 3D Network, Mesh & Particle Canvas */}
      <GlobalCyberCanvas />

      {/* Subtle background ambient cyber grid overlay */}
      <div className="fixed inset-0 bg-grid-pattern opacity-20 pointer-events-none z-0" />

      {/* Floating Modern Header Navigation */}
      <NavbarV3 />

      {/* Main Cinematic Scroll Architecture */}
      <main className="relative z-10 flex flex-col">
        {/* 1. Hero Section (100vh): Centered Name "Khagesh" & Title */}
        <HeroV3 />

        {/* 2. About & Biometrics: Clean, Centered, Wide-Measure Typography Floating Over Void */}
        <AboutV3 />

        {/* 3. Projects Showcase: Massive, Cinematic, Alternating Full-Width Sections */}
        <ProjectsV3 />

        {/* 4. Skills & Capabilities: Organic Floating Tag Cloud */}
        <SkillsV3 />

        {/* 5. Career Trajectory: Minimalist Floating Stream */}
        <TimelineV3 />

        {/* 6. Cinematic Conclusion & Transmission */}
        <ContactV3 />
      </main>

      {/* Footer */}
      <FooterV3 />
    </div>
  );
};

export default PortfolioV3;
