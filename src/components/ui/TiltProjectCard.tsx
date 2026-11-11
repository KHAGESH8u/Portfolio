import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, GitBranch, ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '../../types';

interface TiltProjectCardProps {
  project: ProjectItem;
  index: number;
}

export const TiltProjectCard: React.FC<TiltProjectCardProps> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 260, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 260, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        type: 'spring',
        stiffness: 80,
        damping: 18,
        delay: index * 0.12
      }}
      style={{ perspective: 1200 }}
      className="w-full"
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
        className="group relative rounded-2xl bg-gradient-to-b from-slate-900/90 via-slate-950/90 to-[#030712]/95 border border-white/10 p-1 hover:border-cyan-500/50 transition-colors duration-500 shadow-2xl overflow-hidden"
      >
        {/* Glowing gradient ambient border overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className="relative rounded-xl overflow-hidden bg-slate-950/80 backdrop-blur-md p-6 flex flex-col justify-between h-full">
          {/* Top header with ID and link actions */}
          <div className="flex items-center justify-between mb-4 z-10">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-mono tracking-widest text-cyan-400/90 uppercase">
                {project.title}
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white transition-colors duration-200"
                aria-label="Repository Link"
              >
                <GitBranch className="w-4 h-4" />
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-300 transition-colors duration-200"
                aria-label="Live Demo Link"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Project Image with gradient fade */}
          <div className="relative w-full h-56 rounded-lg overflow-hidden mb-5 border border-white/5">
            <img
              src={project.image}
              alt={project.subtitle}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            
            {/* Corner visual accent */}
            <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-cyan-300 tracking-wider">
              CORE BUILD
            </div>
          </div>

          {/* Title and Subtitle */}
          <div className="mb-4">
            <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors duration-300 flex items-center justify-between">
              <span>{project.subtitle}</span>
              <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
            </h3>
            <p className="mt-2 text-sm text-slate-400 line-clamp-3 leading-relaxed font-normal">
              {project.description}
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-2 py-3 mb-5 border-y border-white/5 bg-white/[0.02] rounded-lg px-2">
            {project.metrics.map((metric, i) => (
              <div key={i} className="text-center">
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                  {metric.label}
                </div>
                <div className="text-sm font-semibold font-mono text-cyan-400 mt-0.5">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>

          {/* Pill tags */}
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-white/5 border border-white/10 text-slate-300 group-hover:border-cyan-500/30 transition-colors duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
