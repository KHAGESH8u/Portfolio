import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { TiltProjectCard } from '../ui/TiltProjectCard';
import { PROJECTS_DATA } from '../../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Radiant ambient glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <SectionHeader
        badge="PRODUCTION ARTIFACTS"
        title="FEATURED PROJECTS // 4 CORES"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. High-throughput distributed nodes, neural accelerators, and real-time visualization frameworks."
      />

      {/* Grid of exactly 4 large project cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {PROJECTS_DATA.map((project, index) => (
          <TiltProjectCard
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};
