import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { TIMELINE_DATA } from '../../data/portfolioData';

export const TimelineV3: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'experience' | 'education'>('all');

  const filteredItems = TIMELINE_DATA.filter((item) => {
    if (filter === 'all') return true;
    return item.type === filter;
  });

  return (
    <section id="timeline-v3" className="relative py-44 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/12 rounded-full blur-[190px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-black/40 border border-purple-500/30 backdrop-blur-md text-xs font-mono text-purple-300 tracking-widest uppercase mb-4"
        >
          <Calendar className="w-3.5 h-3.5 text-purple-400" />
          <span>CAREER TRAJECTORY</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-6xl font-black font-sans text-white tracking-tight"
        >
          Experience & Academia
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed"
        >
          A continuous timeline of engineering leadership and high-tier academic research.
        </motion.p>
      </div>

      {/* Filter switches with Frosted Glassmorphism */}
      <div className="flex justify-center mb-20">
        <div className="inline-flex p-1.5 rounded-full bg-black/40 border border-purple-500/30 backdrop-blur-lg">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full text-xs font-mono font-medium transition-all duration-300 ${
              filter === 'all'
                ? 'bg-purple-500/30 text-white border border-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.35)]'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            ALL
          </button>
          <button
            onClick={() => setFilter('experience')}
            className={`flex items-center space-x-2 px-6 py-2 rounded-full text-xs font-mono font-medium transition-all duration-300 ${
              filter === 'experience'
                ? 'bg-purple-500/30 text-white border border-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.35)]'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>PRACTICE</span>
          </button>
          <button
            onClick={() => setFilter('education')}
            className={`flex items-center space-x-2 px-6 py-2 rounded-full text-xs font-mono font-medium transition-all duration-300 ${
              filter === 'education'
                ? 'bg-purple-500/30 text-white border border-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.35)]'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIA</span>
          </button>
        </div>
      </div>

      {/* Floating Vertical Stream */}
      <div className="relative">
        <div className="absolute left-0 top-6 bottom-6 w-[2px] bg-gradient-to-b from-purple-400 via-fuchsia-500 to-purple-500/10 shadow-[0_0_12px_rgba(168,85,247,0.5)]" />

        <div className="space-y-12">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                type: 'spring',
                stiffness: 80,
                damping: 18,
                delay: index * 0.1
              }}
              className="relative pl-8 sm:pl-12 group"
            >
              {/* Glowing Node */}
              <div className="absolute left-0 top-6 -translate-x-1/2 flex items-center justify-center z-10">
                <div className="w-6 h-6 rounded-full bg-black/80 border-2 border-purple-400 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.7)] group-hover:scale-110 transition-transform">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
              </div>

              {/* Frosted Glass Card with Hover Neon Glow */}
              <div className="relative p-8 sm:p-10 rounded-3xl bg-black/30 backdrop-blur-lg border border-purple-500/20 group-hover:border-purple-400/50 group-hover:shadow-[0_0_35px_rgba(168,85,247,0.22)] transition-all duration-500">
                {/* Subtle top neon border accent */}
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-purple-400/40 to-transparent pointer-events-none" />

                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-xs font-bold text-purple-400 uppercase tracking-widest">
                    {item.period}
                  </span>
                  <span className="flex items-center text-xs font-mono text-gray-400 gap-1">
                    <MapPin className="w-3 h-3 text-purple-400" />
                    {item.location}
                  </span>
                </div>

                <h3 className="text-2xl font-bold font-sans text-white group-hover:text-purple-300 transition-colors">
                  {item.role}
                </h3>
                <div className="text-sm font-mono text-purple-300 mt-1 mb-4">
                  {item.organization}
                </div>

                <p className="text-base text-gray-200 font-light leading-relaxed font-sans mb-6">
                  {item.description}
                </p>

                {item.highlights && item.highlights.length > 0 && (
                  <div className="space-y-2.5 pt-5 border-t border-purple-500/20">
                    {item.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start space-x-2.5 text-xs text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
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
    </section>
  );
};
