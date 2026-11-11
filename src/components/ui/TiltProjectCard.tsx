import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, GitBranch, ArrowUpRight, Lock } from 'lucide-react';
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

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7deg', '-7deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7deg', '7deg']);

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

  // Simulated browser URL based on project
  const getBrowserUrl = () => {
    switch (project.id) {
      case 'ai-workspace-platform':
        return 'synapse.ai/workspace/canvas';
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
        className="group relative rounded-2xl bg-gradient-to-b from-slate-900/95 via-slate-950/90 to-[#030712] border border-white/10 p-1 hover:border-cyan-500/50 transition-colors duration-500 shadow-2xl overflow-hidden"
      >
        {/* Glowing gradient ambient border overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className="relative rounded-xl overflow-hidden bg-slate-950/90 backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between h-full">
          
          {/* Card Top Header: Category Tag & External Links */}
          <div className="flex items-center justify-between mb-5 z-10">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase">
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

          {/* Browser / Laptop Mockup Viewport */}
          <div className="relative w-full rounded-xl overflow-hidden mb-6 border border-white/10 shadow-2xl bg-slate-900/90">
            {/* Browser Window Header Chrome */}
            <div className="h-9 bg-slate-950/95 border-b border-white/10 px-3.5 flex items-center justify-between">
              {/* Traffic light window controls */}
              <div className="flex items-center space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>

              {/* URL Address Bar Pill */}
              <div className="flex items-center space-x-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/5 text-[11px] font-mono text-slate-400 max-w-[200px] sm:max-w-xs truncate">
                <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                <span className="truncate">{getBrowserUrl()}</span>
              </div>

              {/* Spacer right */}
              <div className="w-8" />
            </div>

            {/* Application Mockup Screenshot Image */}
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
              <img
                src={project.image}
                alt={project.subtitle}
                className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                loading="lazy"
              />
              {/* Subtle glass reflection highlight */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Project Title and Description */}
          <div className="mb-4">
            <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors duration-300 flex items-center justify-between">
              <span>{project.subtitle}</span>
              <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
            </h3>
            <p className="mt-2.5 text-sm text-slate-400 line-clamp-3 leading-relaxed font-normal">
              {project.description}
            </p>
          </div>

          {/* Key Product Metrics */}
          <div className="grid grid-cols-3 gap-2 py-3 mb-5 border-y border-white/5 bg-white/[0.02] rounded-lg px-2">
            {project.metrics.map((metric, i) => (
              <div key={i} className="text-center">
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  {metric.label}
                </div>
                <div className="text-sm font-semibold font-mono text-cyan-400 mt-0.5">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>

          {/* Glassmorphic Pill Tags */}
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-2.5 py-1 text-xs font-mono font-medium rounded-lg bg-white/5 border border-white/10 text-slate-300 group-hover:border-cyan-500/30 transition-colors duration-200"
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
