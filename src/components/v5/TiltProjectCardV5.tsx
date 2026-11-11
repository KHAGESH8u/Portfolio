import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, GitBranch, ArrowUpRight, Lock } from 'lucide-react';
import { ProjectItem } from '../../types';

interface TiltProjectCardV5Props {
  project: ProjectItem;
  index: number;
}

export const TiltProjectCardV5: React.FC<TiltProjectCardV5Props> = ({ project, index }) => {
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
        className="group relative rounded-3xl bg-gradient-to-b from-[#150826]/90 via-[#0e051a]/95 to-[#07020d] border border-[#d4af37]/25 p-1 hover:border-[#eed98d]/60 transition-colors duration-500 shadow-[0_20px_50px_rgba(7,2,13,0.9)] overflow-hidden"
      >
        {/* Soft golden aura on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 via-transparent to-[#38165e]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className="relative rounded-[22px] overflow-hidden bg-[#0e051a]/90 backdrop-blur-2xl p-6 sm:p-8 flex flex-col justify-between h-full">
          
          {/* Top header: Archival index and links */}
          <div className="flex items-center justify-between mb-5 z-10">
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e5c158]" />
              <span className="text-xs font-serif tracking-[0.2em] text-[#eed98d] uppercase">
                {project.title}
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-[#180a2b]/60 hover:bg-[#261042] text-slate-300 hover:text-[#e5c158] border border-[#d4af37]/20 transition-all duration-200"
                aria-label="Repository"
              >
                <GitBranch className="w-4 h-4" />
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-[#180a2b]/60 hover:bg-[#261042] text-slate-300 hover:text-[#e5c158] border border-[#d4af37]/20 transition-all duration-200"
                aria-label="Exhibition"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Luxury Browser Mockup Frame with Antique Gold Accents */}
          <div className="relative w-full rounded-2xl overflow-hidden mb-6 border border-[#d4af37]/25 shadow-2xl bg-[#07020d]">
            {/* Browser top chrome */}
            <div className="h-9 bg-[#07020d] border-b border-[#d4af37]/20 px-3.5 flex items-center justify-between">
              <div className="flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-[#e5c158]/80" />
                <span className="w-2 h-2 rounded-full bg-[#d4af37]/60" />
                <span className="w-2 h-2 rounded-full bg-[#8e6c1a]/60" />
              </div>

              {/* URL address pill */}
              <div className="flex items-center space-x-1.5 px-3 py-0.5 rounded-full bg-[#150826]/70 border border-[#d4af37]/15 text-[10px] font-mono text-[#d4af37]/80 max-w-[200px] sm:max-w-xs truncate">
                <Lock className="w-2.5 h-2.5 text-[#e5c158] shrink-0" />
                <span className="truncate">{getBrowserUrl()}</span>
              </div>

              <div className="w-8" />
            </div>

            {/* Application Mockup Image */}
            <div className="relative aspect-[16/10] overflow-hidden bg-[#07020d]">
              <img
                src={project.image}
                alt={project.subtitle}
                className="w-full h-full object-cover object-top filter contrast-[105%] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0e051a]/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Title & Description */}
          <div className="mb-4">
            <h3 className="font-serif text-xl sm:text-2xl font-normal text-white group-hover:text-[#eed98d] transition-colors duration-300 flex items-center justify-between">
              <span>{project.subtitle}</span>
              <ArrowUpRight className="w-5 h-5 text-[#d4af37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
            </h3>
            <p className="mt-2.5 text-sm text-slate-300 font-light leading-relaxed font-sans">
              {project.description}
            </p>
          </div>

          {/* Key Metrics in Gold Frame */}
          <div className="grid grid-cols-3 gap-2 py-3 mb-5 border-y border-[#d4af37]/15 bg-[#150826]/40 rounded-xl px-2">
            {project.metrics.map((metric, i) => (
              <div key={i} className="text-center">
                <div className="text-[9px] font-mono uppercase tracking-widest text-[#d4af37]/70">
                  {metric.label}
                </div>
                <div className="text-sm font-serif text-[#fcf8e8] mt-0.5">
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
                className="px-3 py-1 text-xs font-serif tracking-wider rounded-lg bg-[#150826]/80 border border-[#d4af37]/20 text-[#eed98d] group-hover:border-[#eed98d]/40 transition-colors"
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

export default TiltProjectCardV5;
