import React from 'react';
import { Navbar } from './components/sections/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { BentoMatrix } from './components/sections/BentoMatrix';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ExperienceTimeline } from './components/sections/ExperienceTimeline';
import { AchievementsSection } from './components/sections/AchievementsSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/sections/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 selection:bg-cyan-500 selection:text-black">
      {/* Background ambient subtle grid overlay */}
      <div className="fixed inset-0 bg-grid-pattern opacity-100 pointer-events-none z-0" />

      {/* Floating Navigation Header */}
      <Navbar />

      {/* Main Single-Page Smooth Scroll Flow */}
      <main className="relative z-10 flex flex-col">
        {/* 1. Hero Section (100vh WebGL R3F interactive scene) */}
        <HeroSection />

        {/* 2. Bento Box Skills Matrix */}
        <BentoMatrix />

        {/* 3. Projects Showcase (4 Large 3D Tilt Cards) */}
        <ProjectsSection />

        {/* 4. Experience & Education Glowing Timeline */}
        <ExperienceTimeline />

        {/* 5. Holographic Achievements & Accolades */}
        <AchievementsSection />

        {/* 6. Minimalist Grid-Aligned Contact Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
