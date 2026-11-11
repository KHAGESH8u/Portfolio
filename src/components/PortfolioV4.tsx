import React from 'react';
import { GlobalTealPorcelainCanvas } from './v4/GlobalTealPorcelainCanvas';
import { NavbarV4 } from './v4/NavbarV4';
import { HeroV4 } from './v4/HeroV4';
import { AboutV4 } from './v4/AboutV4';
import { ProjectsV4 } from './v4/ProjectsV4';
import { SkillsV4 } from './v4/SkillsV4';
import { TimelineV4 } from './v4/TimelineV4';
import { ContactV4 } from './v4/ContactV4';
import { FooterV4 } from './v4/FooterV4';

export const PortfolioV4: React.FC = () => {
  return (
    <div className="relative h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth isolate bg-[#011414] text-teal-50 selection:bg-teal-300 selection:text-black font-sans overflow-x-hidden">
      {/* 1. Viewport-Fixed Liquid Topographic Waves & Porcelain Monolith 3D Canvas */}
      <GlobalTealPorcelainCanvas />

      {/* Ambient background teal grid pattern overlay */}
      <div className="fixed inset-0 bg-grid-pattern opacity-15 pointer-events-none z-0" />

      {/* Floating Modern Header Navigation */}
      <NavbarV4 />

      {/* Main Cinematic Scroll Architecture with strict pointer-events pass-through */}
      <main className="relative z-10 flex flex-col pointer-events-none">
        {/* 1. Hero Section (100vh): Centered Name "Khagesh" & Title */}
        <HeroV4 />

        {/* 2. About & Biometrics: Clean, Centered, Wide-Measure Typography Floating Over Void */}
        <AboutV4 />

        {/* 3. Projects Showcase: Massive, Cinematic, Alternating Full-Width Sections */}
        <ProjectsV4 />

        {/* 4. Skills & Capabilities: Organic Floating Tag Cloud */}
        <SkillsV4 />

        {/* 5. Career Trajectory: Minimalist Floating Stream */}
        <TimelineV4 />

        {/* 6. Cinematic Conclusion & Transmission */}
        <ContactV4 />

        {/* Footer */}
        <FooterV4 />
      </main>
    </div>
  );
};

export default PortfolioV4;
