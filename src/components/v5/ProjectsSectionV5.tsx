import React from 'react';
import { TiltProjectCardV5 } from './TiltProjectCardV5';
import { PROJECTS_DATA } from '../../data/portfolioData';

export const ProjectsSectionV5: React.FC = () => {
  return (
    <section id="projects-v5" className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pointer-events-none">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#38165e]/20 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#d4af37]/8 rounded-full blur-[170px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-20 pointer-events-none">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#150826] border border-[#d4af37]/30 text-xs font-serif text-[#eed98d] tracking-widest uppercase mb-4 pointer-events-auto">
          <span>CHAPTER III</span>
          <span>//</span>
          <span>ARCHIVE EXHIBITION</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-white">
          <span className="bg-gradient-to-r from-[#fcf8e8] via-[#e5c158] to-[#d4af37] bg-clip-text text-transparent">
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
          <TiltProjectCardV5 key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSectionV5;
