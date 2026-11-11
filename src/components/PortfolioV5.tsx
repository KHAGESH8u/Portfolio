import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BootSequenceV5 } from './v5/BootSequenceV5';
import { GlobalNeuralGoldCanvas } from './v5/GlobalNeuralGoldCanvas';
import { NavbarV5 } from './v5/NavbarV5';
import { HeroSectionV5 } from './v5/HeroSectionV5';
import { AboutSectionV5 } from './v5/AboutSectionV5';
import { SkillsSectionV5 } from './v5/SkillsSectionV5';
import { ProjectsSectionV5 } from './v5/ProjectsSectionV5';
import { TimelineSectionV5 } from './v5/TimelineSectionV5';
import { AccoladesSectionV5 } from './v5/AccoladesSectionV5';
import { ContactSectionV5 } from './v5/ContactSectionV5';
import { FooterV5 } from './v5/FooterV5';

export const PortfolioV5: React.FC = () => {
  // Staggered cinematic transition: 'booting' -> 'canvas-revealed' (reveals 3D background first) -> 'ui-ready' (fades in UI after 0.5s delay)
  const [phase, setPhase] = useState<'booting' | 'canvas-revealed' | 'ui-ready'>('booting');

  const handleBootComplete = () => {
    // 1. Dissolve loader overlay and reveal 3D golden neural canvas FIRST
    setPhase('canvas-revealed');
    // 2. Allow exactly 0.5-second delay, then elegantly fade/float HTML/UI into place
    setTimeout(() => {
      setPhase('ui-ready');
    }, 500);
  };

  const isUiReady = phase === 'ui-ready';

  return (
    <div className="relative min-h-screen text-slate-100 selection:bg-[#d4af37] selection:text-black overflow-x-hidden font-sans isolate">
      {/* Version 5 Custom Tech-Driven Biometric AI Core Boot Loader */}
      <AnimatePresence mode="wait">
        {phase === 'booting' && (
          <BootSequenceV5 onComplete={handleBootComplete} />
        )}
      </AnimatePresence>

      {/* 1. Global Viewport-Fixed Glowing Antique Gold Neural Mesh & Cosmic Starfield (Revealed FIRST, fixed inset-0 z-[-1]) */}
      <GlobalNeuralGoldCanvas />

      {/* Subtle royal background grid texture overlay */}
      <div className="fixed inset-0 bg-grid-pattern opacity-15 pointer-events-none z-0" />

      {/* Staggered Fade & Float of UI Navigation & Main Architecture (0.5s delay after 3D canvas reveal) */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: isUiReady ? 1 : 0, y: isUiReady ? 0 : 16 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="w-full flex flex-col pointer-events-none"
      >
        {/* Floating Haute-Couture Navigation */}
        <NavbarV5 />

        {/* Main Editorial Flow with Strict Pointer Events Pass-Through */}
        <main className="relative z-10 flex flex-col pointer-events-none">
          {/* 1. Hero with Headshot on LEFT & Name/Role on RIGHT */}
          <HeroSectionV5 />

          {/* 2. Chapter I: Prologue & Artistry */}
          <AboutSectionV5 />

          {/* 3. Chapter II: Technical Discipline & Capabilities */}
          <SkillsSectionV5 />

          {/* 4. Chapter III: Archive Exhibition (Projects) */}
          <ProjectsSectionV5 />

          {/* 5. Chapter IV: Trajectory & Pedigree (Timeline) */}
          <TimelineSectionV5 />

          {/* 6. Chapter V: Distinctions & Accolades */}
          <AccoladesSectionV5 />

          {/* 7. Chapter VI: Initiate Consultation (Contact) */}
          <ContactSectionV5 />

          {/* Footer */}
          <FooterV5 />
        </main>
      </motion.div>
    </div>
  );
};

export default PortfolioV5;
