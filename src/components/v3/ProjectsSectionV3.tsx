import React from 'react';
import { TiltProjectCardV3 } from './TiltProjectCardV3';
import { PROJECTS_DATA } from '../../data/portfolioData';

export const ProjectsSectionV3: React.FC = () => {
  return (
    <section
      id="projects-v3"
      className="relative w-full min-h-screen snap-start flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pointer-events-none"
    >
      {/* Radiant ambient purple light */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 pointer-events-none">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-serif text-purple-200 tracking-widest uppercase mb-3 pointer-events-auto">
            <span>CHAPTER III</span>
            <span>//</span>
            <span>ARCHIVE EXHIBITION</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-white">
            <span className="bg-gradient-to-r from-white via-purple-100 to-fuchsia-300 bg-clip-text text-transparent">
              Selected Works
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-200 font-light font-sans max-w-xl mx-auto leading-relaxed">
            A curated exhibition of four flagship systems spanning collaborative AI workspaces, financial telemetry, and creative real-time computing.
          </p>
        </div>

        {/* Grid of exactly 4 large project cards cloned from V2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 pointer-events-none">
          {PROJECTS_DATA.map((project, index) => (
            <TiltProjectCardV3
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSectionV3;
