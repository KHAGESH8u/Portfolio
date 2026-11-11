import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BootSequenceV3 } from './v3/BootSequenceV3';
import { GlobalCyberCanvas } from './v3/GlobalCyberCanvas';
import { NavbarV3 } from './v3/NavbarV3';
import { HeroSectionV3 } from './v3/HeroSectionV3';
import { AboutSectionV3 } from './v3/AboutSectionV3';
import { SkillsSectionV3 } from './v3/SkillsSectionV3';
import { ProjectsSectionV3 } from './v3/ProjectsSectionV3';
import { TimelineSectionV3 } from './v3/TimelineSectionV3';
import { AccoladesSectionV3 } from './v3/AccoladesSectionV3';
import { ContactSectionV3 } from './v3/ContactSectionV3';
import { FooterV3 } from './v3/FooterV3';

export const PortfolioV3: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth isolate bg-[#030108] text-gray-100 selection:bg-purple-500 selection:text-black font-sans overflow-x-hidden">
      {/* Version 3 Custom Hyper-Computational Boot Sequence Loader */}
      <AnimatePresence mode="wait">
        {isLoading && <BootSequenceV3 onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* 1. Viewport-Fixed Glowing Neon Violet 3D Network, Mesh & Particle Canvas (AI Computational Assets Only) */}
      <GlobalCyberCanvas />

      {/* Subtle background ambient cyber grid overlay */}
      <div className="fixed inset-0 bg-grid-pattern opacity-20 pointer-events-none z-0" />

      {/* Floating Modern Header Navigation */}
      <NavbarV3 />

      {/* Main Standardized V2 Skeleton Architecture with Neon Violet & Jet Black Styling */}
      <main className="relative z-10 flex flex-col pointer-events-none">
        {/* 1. Hero with Headshot LEFT, Name/Role RIGHT */}
        <HeroSectionV3 />

        {/* 2. Chapter I: Prologue & Artistry */}
        <AboutSectionV3 />

        {/* 3. Chapter II: Technical Discipline & Capabilities */}
        <SkillsSectionV3 />

        {/* 4. Chapter III: Archive Exhibition (Projects) */}
        <ProjectsSectionV3 />

        {/* 5. Chapter IV: Trajectory & Pedigree (Timeline) */}
        <TimelineSectionV3 />

        {/* 6. Chapter V: Distinctions & Accolades */}
        <AccoladesSectionV3 />

        {/* 7. Chapter VI: Initiate Consultation (Contact) */}
        <ContactSectionV3 />

        {/* Footer */}
        <FooterV3 />
      </main>
    </div>
  );
};

export default PortfolioV3;
