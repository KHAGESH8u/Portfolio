import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { GitBranch, ArrowUpRight, Lock } from 'lucide-react';
import { ProjectItem } from '../../types';

interface TiltProjectCardV3Props {
  project: ProjectItem;
  index: number;
}

export const TiltProjectCardV3: React.FC<TiltProjectCardV3Props> = ({ project, index }) => {
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
        className="group relative rounded-3xl bg-black/85 backdrop-blur-3xl border border-purple-500/25 p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.85)] hover:border-purple-400/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] transition-all duration-300 flex flex-col justify-between"
      >
        {/* Top specular accent line */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-purple-400/50 to-transparent pointer-events-none" />

        <div>
          {/* Realistic Browser Mockup Container */}
          <div className="relative rounded-2xl overflow-hidden border border-purple-500/30 bg-black shadow-[0_15px_35px_rgba(0,0,0,0.7)] mb-6">
            {/* Browser Chrome Header */}
            <div className="h-8 bg-black/90 border-b border-purple-500/20 px-3.5 flex items-center justify-between">
              <div className="flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-500/80" />
                <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
              </div>

              {/* URL Pill */}
              <div className="flex items-center space-x-1.5 px-3 py-0.5 rounded-full bg-purple-950/40 border border-purple-500/20 text-[10px] font-mono text-purple-200">
                <Lock className="w-2.5 h-2.5 text-purple-400" />
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Tag & Index Header */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono tracking-widest text-purple-400 uppercase">
              EXHIBIT NO. 0{index + 1}
            </span>
            <span className="text-[10px] font-serif tracking-widest px-2.5 py-0.5 rounded-full bg-purple-950/60 border border-purple-500/20 text-purple-200">
              {project.title}
            </span>
          </div>

          {/* Project Title */}
          <h3 className="font-serif text-2xl font-normal text-white group-hover:text-purple-200 transition-colors">
            {project.subtitle}
          </h3>

          {/* Project Narrative Description */}
          <p className="mt-2.5 text-xs sm:text-sm text-gray-300 font-light font-sans leading-relaxed">
            {project.description}
          </p>

          {/* Key Metrics Strip */}
          <div className="grid grid-cols-3 gap-2 my-4 p-2.5 rounded-xl bg-purple-950/30 border border-purple-500/15">
            {project.metrics.map((metric, mIdx) => (
              <div key={mIdx}>
                <div className="text-[9px] font-mono text-purple-400 uppercase">
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
                className="px-2.5 py-0.5 rounded-lg text-[10px] font-serif bg-purple-950/40 border border-purple-500/15 text-purple-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-3 border-t border-purple-500/15 flex items-center justify-between">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full font-serif text-xs font-bold text-black bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-500 hover:brightness-110 shadow-[0_0_20px_rgba(168,85,247,0.35)] transition-all pointer-events-auto"
          >
            <span>LAUNCH SYSTEM</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full font-serif text-xs text-purple-200 bg-purple-950/40 hover:bg-purple-900/40 border border-purple-500/20 transition-all pointer-events-auto"
          >
            <GitBranch className="w-3.5 h-3.5 text-purple-400" />
            <span>SOURCE CODE</span>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TiltProjectCardV3;
