import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BootSequenceV6 } from './v6/BootSequenceV6';
import { GlobalBioDigitalCanvas } from './v6/GlobalBioDigitalCanvas';
import { NavbarV6 } from './v6/NavbarV6';
import { HeroSectionV6 } from './v6/HeroSectionV6';
import { AboutSectionV6 } from './v6/AboutSectionV6';
import { SkillsSectionV6 } from './v6/SkillsSectionV6';
import { ProjectsSectionV6 } from './v6/ProjectsSectionV6';
import { TimelineSectionV6 } from './v6/TimelineSectionV6';
import { AccoladesSectionV6 } from './v6/AccoladesSectionV6';
import { ContactSectionV6 } from './v6/ContactSectionV6';
import { FooterV6 } from './v6/FooterV6';

export const PortfolioV6: React.FC = () => {
  // Staggered cinematic transition: 'booting' -> 'canvas-revealed' (reveals 3D background first) -> 'ui-ready' (fades in UI after 0.5s delay)
  const [phase, setPhase] = useState<'booting' | 'canvas-revealed' | 'ui-ready'>('booting');

  const handleBootComplete = () => {
    // 1. Dissolve loader overlay and reveal 3D bio-digital canvas FIRST
    setPhase('canvas-revealed');
    // 2. Allow exactly 0.5-second delay, then elegantly fade/float HTML/UI into place
    setTimeout(() => {
      setPhase('ui-ready');
    }, 500);
  };

  const isUiReady = phase === 'ui-ready';

  return (
    <div className="relative h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth isolate text-slate-100 selection:bg-emerald-400 selection:text-black overflow-x-hidden font-sans">
      {/* Version 6 Custom Bio-Digital Engine Boot Loader */}
      <AnimatePresence mode="wait">
        {phase === 'booting' && (
          <BootSequenceV6 onComplete={handleBootComplete} />
        )}
      </AnimatePresence>

      {/* 1. Global Viewport-Fixed Glowing Ivy Green Cyber-Vines & Bio-Spore Canvas (Revealed FIRST, fixed inset-0 z-[-1]) */}
      <GlobalBioDigitalCanvas />

      {/* Subtle organic volcanic background grid texture overlay */}
      <div className="fixed inset-0 bg-grid-pattern opacity-10 pointer-events-none z-0" />

      {/* Staggered Fade & Float of UI Navigation & Main Architecture (0.5s delay after 3D canvas reveal) */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: isUiReady ? 1 : 0, y: isUiReady ? 0 : 16 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="w-full flex flex-col pointer-events-none"
      >
        {/* Floating Bio-Digital Navigation */}
        <NavbarV6 />

        {/* Main Editorial Flow with Scroll Snapping & Strict Pointer Events Pass-Through */}
        <main className="relative z-10 flex flex-col pointer-events-none">
          {/* 1. Hero with Headshot on LEFT & Name/Role on RIGHT */}
          <HeroSectionV6 />

          {/* 2. Chapter I: Prologue & Artistry */}
          <AboutSectionV6 />

          {/* 3. Chapter II: Bio-Technical Discipline & Capabilities */}
          <SkillsSectionV6 />

          {/* 4. Chapter III: Bio-Archive Exhibition (Projects) */}
          <ProjectsSectionV6 />

          {/* 5. Chapter IV: Trajectory & Pedigree (Timeline) */}
          <TimelineSectionV6 />

          {/* 6. Chapter V: Distinctions & Accolades */}
          <AccoladesSectionV6 />

          {/* 7. Chapter VI: Vascular Dialogue (Contact) */}
          <ContactSectionV6 />

          {/* Footer */}
          <FooterV6 />
        </main>
      </motion.div>
    </div>
  );
};

export default PortfolioV6;
