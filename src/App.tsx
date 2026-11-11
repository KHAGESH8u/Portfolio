import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BootSequence } from './components/ui/BootSequence';
import { Navbar } from './components/sections/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { BentoMatrix } from './components/sections/BentoMatrix';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ExperienceTimeline } from './components/sections/ExperienceTimeline';
import { AchievementsSection } from './components/sections/AchievementsSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/sections/Footer';

export const App: React.FC = () => {
  // Cinematic boot sequence stages: 'booting' -> 'canvas-forming' -> 'ready'
  const [phase, setPhase] = useState<'booting' | 'canvas-forming' | 'ready'>('booting');

  const handleBootComplete = () => {
    // Stage 1: Reveal 3D Canvas
    setPhase('canvas-forming');

    // Stage 2: After canvas forms, elegantly fade in UI and portfolio content
    setTimeout(() => {
      setPhase('ready');
    }, 450);
  };

  const isCanvasReady = phase === 'canvas-forming' || phase === 'ready';
  const isUiReady = phase === 'ready';

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 selection:bg-cyan-500 selection:text-black overflow-x-hidden">
      {/* Immersive High-Tech Boot Sequence Loader */}
      <AnimatePresence mode="wait">
        {phase === 'booting' && (
          <BootSequence onComplete={handleBootComplete} />
        )}
      </AnimatePresence>

      {/* Background ambient subtle grid overlay */}
      <div className="fixed inset-0 bg-grid-pattern opacity-100 pointer-events-none z-0" />

      {/* Floating Glass Navigation Header - Fades in during Stage 2 */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isUiReady ? 1 : 0, y: isUiReady ? 0 : -20 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-50 pointer-events-none"
      >
        <Navbar />
      </motion.div>

      {/* Main Single-Page Flow */}
      <main className="relative z-10 flex flex-col">
        {/* 1. Hero Section: 3D Canvas forms first, then personal UI fades in */}
        <HeroSection
          isCanvasReady={isCanvasReady}
          isUiReady={isUiReady}
        />

        {/* Remaining Portfolio Sections - Elegantly fade in during Stage 2 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isUiReady ? 1 : 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="flex flex-col"
        >
          {/* 2. About Me Section (2-Paragraph Personal Narrative & Quick Stats) */}
          <AboutSection />

          {/* 3. Skills & Technologies Bento Tag Cloud */}
          <BentoMatrix />

          {/* 4. Projects Showcase (Laptop & Browser Mockup Cards) */}
          <ProjectsSection />

          {/* 5. Career & Education Timeline */}
          <ExperienceTimeline />

          {/* 6. Honors & Accolades */}
          <AchievementsSection />

          {/* 7. Conversational Contact Module ("Get in Touch") */}
          <ContactSection />
        </motion.div>
      </main>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isUiReady ? 1 : 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export default App;
