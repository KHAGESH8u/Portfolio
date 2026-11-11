import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { TIMELINE_DATA } from '../../data/portfolioData';

export const TimelineV4: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'experience' | 'education'>('all');

  const filteredItems = TIMELINE_DATA.filter((item) => {
    if (filter === 'all') return true;
    return item.type === filter;
  });

  return (
    <section
      id="timeline-v4"
      className="relative w-full min-h-screen snap-start flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pointer-events-none"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-teal-500/12 rounded-full blur-[190px] pointer-events-none" />

      <div className="w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#021b1b]/60 border border-teal-400/30 backdrop-blur-md text-xs font-mono text-teal-200 tracking-widest uppercase mb-3 pointer-events-auto"
          >
            <Calendar className="w-3.5 h-3.5 text-teal-300" />
            <span>CAREER TRAJECTORY</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black font-sans text-white tracking-tight"
          >
            Experience & Academia
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-base sm:text-lg text-teal-50 font-light max-w-2xl mx-auto leading-relaxed"
          >
            A continuous timeline of engineering leadership and high-tier academic research.
          </motion.p>
        </div>

        {/* Filter switches with Frosted Glassmorphism */}
        <div className="flex justify-center mb-10 pointer-events-none">
          <div className="inline-flex p-1 rounded-full bg-[#011414]/70 border border-teal-500/30 backdrop-blur-lg pointer-events-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-5 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-300 ${
                filter === 'all'
                  ? 'bg-teal-500/30 text-white border border-teal-300 shadow-[0_0_20px_rgba(45,212,191,0.35)]'
                  : 'text-teal-200 hover:text-white'
              }`}
            >
              ALL
            </button>
            <button
              onClick={() => setFilter('experience')}
              className={`flex items-center space-x-1.5 px-5 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-300 ${
                filter === 'experience'
                  ? 'bg-teal-500/30 text-white border border-teal-300 shadow-[0_0_20px_rgba(45,212,191,0.35)]'
                  : 'text-teal-200 hover:text-white'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>PRACTICE</span>
            </button>
            <button
              onClick={() => setFilter('education')}
              className={`flex items-center space-x-1.5 px-5 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-300 ${
                filter === 'education'
                  ? 'bg-teal-500/30 text-white border border-teal-300 shadow-[0_0_20px_rgba(45,212,191,0.35)]'
                  : 'text-teal-200 hover:text-white'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>ACADEMIA</span>
            </button>
          </div>
        </div>

        {/* Floating Vertical Stream */}
        <div className="relative pointer-events-none">
          <div className="absolute left-0 top-6 bottom-6 w-[2px] bg-gradient-to-b from-white via-teal-300 to-teal-500/10 shadow-[0_0_12px_rgba(45,212,191,0.5)]" />

          <div className="space-y-6">
            {filteredItems.slice(0, 3).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  type: 'spring',
                  stiffness: 80,
                  damping: 18,
                  delay: index * 0.08
                }}
                className="relative pl-7 sm:pl-10 group pointer-events-none"
              >
                {/* Glowing Node */}
                <div className="absolute left-0 top-6 -translate-x-1/2 flex items-center justify-center z-10">
                  <div className="w-5 h-5 rounded-full bg-[#011414] border-2 border-white flex items-center justify-center shadow-[0_0_20px_rgba(45,212,191,0.7)] group-hover:scale-110 transition-transform">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-300" />
                  </div>
                </div>

                {/* Frosted Glass Card with Hover Porcelain Glow */}
                <div className="relative p-6 sm:p-7 rounded-2xl bg-[#021b1b]/50 backdrop-blur-xl border border-teal-500/25 group-hover:border-white/50 group-hover:shadow-[0_0_35px_rgba(45,212,191,0.25)] transition-all duration-500 pointer-events-auto">
                  {/* Subtle top porcelain border accent */}
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-xs font-bold text-teal-300 uppercase tracking-widest">
                      {item.period}
                    </span>
                    <span className="flex items-center text-xs font-mono text-teal-200/80 gap-1">
                      <MapPin className="w-3 h-3 text-teal-300" />
                      {item.location}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-sans text-white group-hover:text-teal-200 transition-colors">
                    {item.role}
                  </h3>
                  <div className="text-xs font-mono text-teal-300 mt-0.5 mb-3">
                    {item.organization}
                  </div>

                  <p className="text-sm text-teal-50 font-light leading-relaxed font-sans mb-4">
                    {item.description}
                  </p>

                  {item.highlights && item.highlights.length > 0 && (
                    <div className="space-y-1.5 pt-3 border-t border-teal-500/20">
                      {item.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start space-x-2 text-xs text-teal-100">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-300 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
