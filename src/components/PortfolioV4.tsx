import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BootSequenceV4 } from './v4/BootSequenceV4';
import { GlobalNeuralTealCanvas } from './v4/GlobalNeuralTealCanvas';
import { NavbarV4 } from './v4/NavbarV4';
import { HeroSectionV4 } from './v4/HeroSectionV4';
import { AboutSectionV4 } from './v4/AboutSectionV4';
import { SkillsSectionV4 } from './v4/SkillsSectionV4';
import { ProjectsSectionV4 } from './v4/ProjectsSectionV4';
import { TimelineSectionV4 } from './v4/TimelineSectionV4';
import { AccoladesSectionV4 } from './v4/AccoladesSectionV4';
import { ContactSectionV4 } from './v4/ContactSectionV4';
import { FooterV4 } from './v4/FooterV4';

export const PortfolioV4: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth isolate bg-[#011414] text-teal-50 selection:bg-teal-300 selection:text-black font-sans overflow-x-hidden">
      {/* Version 4 Custom Neural Synaptic Boot Sequence Loader */}
      <AnimatePresence mode="wait">
        {isLoading && <BootSequenceV4 onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* 1. Global Viewport-Fixed Glowing Neural Network & Synaptic Canvas */}
      <GlobalNeuralTealCanvas />

      {/* Subtle royal background grid texture overlay */}
      <div className="fixed inset-0 bg-grid-pattern opacity-15 pointer-events-none z-0" />

      {/* Floating Haute-Couture Navigation */}
      <NavbarV4 />

      {/* Main Editorial Flow with Scroll Snapping & Strict Pointer Events Pass-Through */}
      <main className="relative z-10 flex flex-col pointer-events-none">
        {/* 1. Hero with Headshot on LEFT & Personal Typography on RIGHT */}
        <HeroSectionV4 />

        {/* 2. Chapter I: Prologue & Artistry */}
        <AboutSectionV4 />

        {/* 3. Chapter II: Technical Discipline & Capabilities */}
        <SkillsSectionV4 />

        {/* 4. Chapter III: Archive Exhibition (Projects) */}
        <ProjectsSectionV4 />

        {/* 5. Chapter IV: Trajectory & Pedigree (Timeline) */}
        <TimelineSectionV4 />

        {/* 6. Chapter V: Distinctions & Accolades */}
        <AccoladesSectionV4 />

        {/* 7. Chapter VI: Initiate Consultation (Contact) */}
        <ContactSectionV4 />

        {/* Footer */}
        <FooterV4 />
      </main>
    </div>
  );
};

export default PortfolioV4;
