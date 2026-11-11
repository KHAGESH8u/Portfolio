import React from 'react';
import { TiltProjectCardV6 } from './TiltProjectCardV6';
import { PROJECTS_DATA } from '../../data/portfolioData';

export const ProjectsSectionV6: React.FC = () => {
  return (
    <section id="projects-v6" className="relative w-full min-h-screen snap-start flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pointer-events-none">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-emerald-950/20 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-950/20 rounded-full blur-[170px] pointer-events-none" />

      <div className="w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 pointer-events-none">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-black/40 border border-emerald-500/20 backdrop-blur-lg text-xs font-serif text-emerald-300 tracking-widest uppercase mb-4 pointer-events-auto">
            <span>CHAPTER III</span>
            <span>//</span>
            <span>BIO-ARCHIVE EXHIBITION</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-white">
            <span className="bg-gradient-to-r from-emerald-200 via-emerald-400 to-teal-300 bg-clip-text text-transparent">
              Selected Works
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light font-sans max-w-xl mx-auto leading-relaxed">
            A curated exhibition of four flagship systems spanning collaborative AI workspaces, financial telemetry, and creative real-time computing.
          </p>
        </div>

        {/* 2x2 Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pointer-events-none">
          {PROJECTS_DATA.map((project, index) => (
            <TiltProjectCardV6 key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSectionV6;
