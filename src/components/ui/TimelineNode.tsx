import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { TimelineItem } from '../../types';

interface TimelineNodeProps {
  item: TimelineItem;
  index: number;
}

export const TimelineNode: React.FC<TimelineNodeProps> = ({ item, index }) => {
  const isEducation = item.type === 'education';

  return (
    <div className="relative pl-8 sm:pl-12 py-6 group">
      {/* Dynamic glowing node connection */}
      <motion.div
        initial={{ scale: 0.6, opacity: 0.3 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.1 }}
        className="absolute left-0 top-8 -translate-x-1/2 flex items-center justify-center z-20"
      >
        <div className="relative flex items-center justify-center">
          {/* Animated glow halo */}
          <div className="absolute w-8 h-8 rounded-full bg-cyan-500/20 blur-md group-hover:bg-cyan-400/40 transition-all duration-300" />
          
          {/* Outer ring */}
          <div className="w-6 h-6 rounded-full border-2 border-cyan-400 bg-slate-950 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-white shadow-[0_0_15px_rgba(0,242,254,0.6)]">
            {/* Core dot */}
            <div className="w-2 h-2 rounded-full bg-cyan-300 group-hover:bg-white" />
          </div>
        </div>
      </motion.div>

      {/* Timeline item card */}
      <motion.div
        initial={{ opacity: 0, x: 25 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ type: 'spring', stiffness: 120, damping: 18, delay: index * 0.1 }}
        className="rounded-2xl bg-slate-950/70 backdrop-blur-xl border border-white/10 p-6 md:p-8 hover:border-cyan-500/40 transition-all duration-300 shadow-xl group-hover:shadow-[0_10px_30px_rgba(0,242,254,0.08)]"
      >
        {/* Top meta tags */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
              <Calendar className="w-3.5 h-3.5" />
              {item.period}
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono uppercase bg-white/5 text-slate-400 border border-white/10">
              {isEducation ? (
                <>
                  <GraduationCap className="w-3 h-3 text-purple-400" />
                  ACADEMIA
                </>
              ) : (
                <>
                  <Briefcase className="w-3 h-3 text-cyan-400" />
                  INDUSTRY
                </>
              )}
            </span>
          </div>

          <div className="flex items-center text-xs font-mono text-slate-400 gap-1">
            <MapPin className="w-3.5 h-3.5 text-slate-500" />
            {item.location}
          </div>
        </div>

        {/* Role & Organization */}
        <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors duration-200">
          {item.role}
        </h3>
        <div className="text-sm font-semibold font-mono text-purple-400 tracking-wide mt-1">
          {item.organization}
        </div>

        {/* Description */}
        <p className="mt-3 text-slate-300 text-sm leading-relaxed font-normal">
          {item.description}
        </p>

        {/* Highlights */}
        {item.highlights && item.highlights.length > 0 && (
          <div className="mt-4 pt-4 border-t border-white/5 space-y-2">
            {item.highlights.map((highlight, hIndex) => (
              <div key={hIndex} className="flex items-start text-xs text-slate-400 space-x-2.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                <span className="leading-normal">{highlight}</span>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};
