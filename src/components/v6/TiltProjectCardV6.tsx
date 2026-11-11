import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, GitBranch, ArrowUpRight, Lock } from 'lucide-react';
import { ProjectItem } from '../../types';

interface TiltProjectCardV6Props {
  project: ProjectItem;
  index: number;
}

export const TiltProjectCardV6: React.FC<TiltProjectCardV6Props> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 220, damping: 22 });
  const mouseYSpring = useSpring(y, { stiffness: 220, damping: 22 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['6deg', '-6deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-6deg', '6deg']);

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
        return 'synapse.bio/workspace/neural-canvas';
      case 'spatial-analytics-dashboard':
        return 'horizon.eco/cluster/spore-telemetry';
      case 'fintech-payments-app':
        return 'aura.vascular/exchange/liquidity';
      default:
        return 'prism.bio/glsl/organic-viewport';
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
        className="group relative rounded-3xl bg-black/40 backdrop-blur-lg border border-emerald-500/20 p-1 hover:border-emerald-400/50 transition-colors duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden"
      >
        {/* Soft ivy green aura on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className="relative rounded-[22px] overflow-hidden bg-black/40 backdrop-blur-lg p-6 sm:p-8 flex flex-col justify-between h-full">
          
          {/* Top header: Archival index and links */}
          <div className="flex items-center justify-between mb-5 z-10">
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-xs font-serif tracking-[0.2em] text-emerald-300 uppercase">
                {project.title}
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-black/40 hover:bg-black/70 text-slate-300 hover:text-emerald-300 border border-emerald-500/20 transition-all duration-200"
                aria-label="Repository"
              >
                <GitBranch className="w-4 h-4" />
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-black/40 hover:bg-black/70 text-slate-300 hover:text-emerald-300 border border-emerald-500/20 transition-all duration-200"
                aria-label="Exhibition"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Browser Mockup Frame with Ivy Accents */}
          <div className="relative w-full rounded-2xl overflow-hidden mb-6 border border-emerald-500/20 shadow-2xl bg-black/40">
            {/* Browser top chrome */}
            <div className="h-9 bg-black/50 border-b border-emerald-500/20 px-3.5 flex items-center justify-between">
              {/* Green status dots */}
              <div className="flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400/80" />
                <span className="w-2 h-2 rounded-full bg-emerald-600/60" />
                <span className="w-2 h-2 rounded-full bg-teal-800/60" />
              </div>

              {/* URL address pill */}
              <div className="flex items-center space-x-1.5 px-3 py-0.5 rounded-full bg-black/40 border border-emerald-500/20 text-[10px] font-mono text-emerald-400/80 max-w-[200px] sm:max-w-xs truncate">
                <Lock className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                <span className="truncate">{getBrowserUrl()}</span>
              </div>

              <div className="w-8" />
            </div>

            {/* Application Mockup Image */}
            <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
              <img
                src={project.image}
                alt={project.subtitle}
                className="w-full h-full object-cover object-top filter contrast-[105%] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Title & Description */}
          <div className="mb-4">
            <h3 className="font-serif text-xl sm:text-2xl font-normal text-white group-hover:text-emerald-300 transition-colors duration-300 flex items-center justify-between">
              <span>{project.subtitle}</span>
              <ArrowUpRight className="w-5 h-5 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
            </h3>
            <p className="mt-2.5 text-sm text-slate-300 font-light leading-relaxed font-sans">
              {project.description}
            </p>
          </div>

          {/* Key Metrics in Ivy Frame */}
          <div className="grid grid-cols-3 gap-2 py-3 mb-5 border-y border-emerald-500/20 bg-black/30 rounded-xl px-2">
            {project.metrics.map((metric, i) => (
              <div key={i} className="text-center">
                <div className="text-[9px] font-mono uppercase tracking-widest text-emerald-400/80">
                  {metric.label}
                </div>
                <div className="text-sm font-serif text-emerald-200 mt-0.5">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>

          {/* Luxury Tags */}
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-3 py-1 text-xs font-serif tracking-wider rounded-lg bg-black/40 border border-emerald-500/20 text-emerald-300 group-hover:border-emerald-400/40 transition-colors"
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

export default TiltProjectCardV6;
