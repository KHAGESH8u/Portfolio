import React from 'react';
import { GlobalStardustCanvas } from './v2/GlobalStardustCanvas';
import { NavbarV2 } from './v2/NavbarV2';
import { HeroSectionV2 } from './v2/HeroSectionV2';
import { AboutSectionV2 } from './v2/AboutSectionV2';
import { SkillsSectionV2 } from './v2/SkillsSectionV2';
import { ProjectsSectionV2 } from './v2/ProjectsSectionV2';
import { TimelineSectionV2 } from './v2/TimelineSectionV2';
import { AccoladesSectionV2 } from './v2/AccoladesSectionV2';
import { ContactSectionV2 } from './v2/ContactSectionV2';
import { FooterV2 } from './v2/FooterV2';

export const PortfolioV2: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#07020d] text-slate-100 selection:bg-[#d4af37] selection:text-black overflow-x-hidden font-sans">
      {/* Global Starfield 3D Canvas flowing behind the entire page */}
      <GlobalStardustCanvas />

      {/* Subtle royal background grid texture overlay */}
      <div className="fixed inset-0 bg-grid-pattern opacity-30 pointer-events-none z-0" />

      {/* Floating Haute-Couture Navigation */}
      <NavbarV2 />

      {/* Main Editorial Flow */}
      <main className="relative z-10 flex flex-col">
        {/* 1. Hero with Gold Monoliths & Swapped Layout (Headshot LEFT, Name/Role RIGHT) */}
        <HeroSectionV2 />

        {/* 2. Chapter I: Prologue & Artistry */}
        <AboutSectionV2 />

        {/* 3. Chapter II: Technical Discipline & Capabilities */}
        <SkillsSectionV2 />

        {/* 4. Chapter III: Archive Exhibition (Projects) */}
        <ProjectsSectionV2 />

        {/* 5. Chapter IV: Trajectory & Pedigree (Timeline) */}
        <TimelineSectionV2 />

        {/* 6. Chapter V: Distinctions & Accolades */}
        <AccoladesSectionV2 />

        {/* 7. Chapter VI: Initiate Consultation (Contact) */}
        <ContactSectionV2 />
      </main>

      {/* Footer */}
      <FooterV2 />
    </div>
  );
};

export default PortfolioV2;
