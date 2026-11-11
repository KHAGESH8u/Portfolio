import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { GitBranch, ArrowUpRight, Lock } from 'lucide-react';
import { ProjectItem } from '../../types';

interface TiltProjectCardV4Props {
  project: ProjectItem;
  index: number;
}

export const TiltProjectCardV4: React.FC<TiltProjectCardV4Props> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 220, damping: 22 });
  const mouseYSpring = useSpring(y, { stiffness: 220, damping: 22 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['5deg', '-5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-5deg', '5deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const getBrowserUrl = () => {
    switch (project.id) {
      case 'ai-workspace-platform':
        return 'synapse.teal/workspace/canvas';
      case 'spatial-analytics-dashboard':
        return 'horizon.dev/analytics/cluster-view';
      case 'fintech-payments-app':
        return 'aura.finance/dashboard/assets';
      default:
        return 'prism.studio/glsl/live-viewport';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        type: 'spring',
        stiffness: 80,
        damping: 18,
        delay: index * 0.1
      }}
      style={{ perspective: 1200 }}
      className="w-full pointer-events-auto"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d'
        }}
        className="group relative rounded-3xl bg-[#021b1b]/85 backdrop-blur-3xl border border-white/25 p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,10,10,0.85)] hover:border-white/50 hover:shadow-[0_0_40px_rgba(45,212,191,0.25)] transition-all duration-300 flex flex-col justify-between"
      >
        {/* Top porcelain specular accent line */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />

        <div>
          {/* Realistic Browser Mockup Container */}
          <div className="relative rounded-2xl overflow-hidden border border-teal-500/30 bg-[#011414] shadow-[0_15px_35px_rgba(0,0,0,0.7)] mb-6">
            {/* Browser Chrome Header */}
            <div className="h-8 bg-[#021b1b]/90 border-b border-teal-500/20 px-3.5 flex items-center justify-between">
              <div className="flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-500/80" />
                <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
              </div>

              {/* URL Pill */}
              <div className="flex items-center space-x-1.5 px-3 py-0.5 rounded-full bg-black/40 border border-teal-500/20 text-[10px] font-mono text-teal-200">
                <Lock className="w-2.5 h-2.5 text-teal-300" />
                <span>{getBrowserUrl()}</span>
              </div>

              <div className="w-8" />
            </div>

            {/* Mockup Viewport */}
            <div className="relative aspect-[16/10] overflow-hidden bg-black/80">
              <img
                src={project.image}
                alt={project.subtitle}
                className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#021b1b]/80 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Tag & Index Header */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono tracking-widest text-teal-300 uppercase">
              EXHIBIT NO. 0{index + 1}
            </span>
            <span className="text-[10px] font-serif tracking-widest px-2.5 py-0.5 rounded-full bg-[#042626] border border-white/20 text-white">
              {project.title}
            </span>
          </div>

          {/* Project Title */}
          <h3 className="font-serif text-2xl font-normal text-white group-hover:text-teal-100 transition-colors">
            {project.subtitle}
          </h3>

          {/* Project Narrative Description */}
          <p className="mt-2.5 text-xs sm:text-sm text-teal-100/90 font-light font-sans leading-relaxed">
            {project.description}
          </p>

          {/* Key Metrics Strip */}
          <div className="grid grid-cols-3 gap-2 my-4 p-2.5 rounded-xl bg-[#042626]/80 border border-white/15">
            {project.metrics.map((metric, mIdx) => (
              <div key={mIdx}>
                <div className="text-[9px] font-mono text-teal-300 uppercase">
                  {metric.label}
                </div>
                <div className="text-sm font-serif font-bold text-white mt-0.5">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>

          {/* Capability Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="px-2.5 py-0.5 rounded-lg text-[10px] font-serif bg-[#042626] border border-white/15 text-teal-100"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-3 border-t border-white/15 flex items-center justify-between">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full font-serif text-xs font-bold text-[#011414] bg-gradient-to-r from-teal-200 via-white to-teal-300 hover:brightness-110 shadow-[0_0_20px_rgba(45,212,191,0.35)] transition-all pointer-events-auto"
          >
            <span>LAUNCH SYSTEM</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full font-serif text-xs text-white bg-[#042626]/80 hover:bg-[#042626] border border-white/20 transition-all pointer-events-auto"
          >
            <GitBranch className="w-3.5 h-3.5 text-teal-300" />
            <span>SOURCE CODE</span>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};
