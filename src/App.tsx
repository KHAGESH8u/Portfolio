import React from 'react';
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
  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 selection:bg-cyan-500 selection:text-black">
      {/* Background ambient subtle grid overlay */}
      <div className="fixed inset-0 bg-grid-pattern opacity-100 pointer-events-none z-0" />

      {/* Floating Glass Navigation Header */}
      <Navbar />

      {/* Main Single-Page Flow */}
      <main className="relative z-10 flex flex-col">
        {/* 1. Humanized Hero Section with Personal Headshot & 3D WebGL Canvas */}
        <HeroSection />

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
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
