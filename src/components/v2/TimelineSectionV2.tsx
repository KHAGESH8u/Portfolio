import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { TIMELINE_DATA } from '../../data/portfolioData';

export const TimelineSectionV2: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'experience' | 'education'>('all');

  const filteredItems = TIMELINE_DATA.filter((item) => {
    if (filter === 'all') return true;
    return item.type === filter;
  });

  return (
    <section id="timeline-v2" className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#d4af37]/8 rounded-full blur-[160px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#150826] border border-[#d4af37]/30 text-xs font-serif text-[#eed98d] tracking-widest uppercase mb-4">
          <span>CHAPTER IV</span>
          <span>//</span>
          <span>CHRONOLOGY</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-white">
          <span className="bg-gradient-to-r from-[#fcf8e8] via-[#e5c158] to-[#d4af37] bg-clip-text text-transparent">
            Trajectory & Pedigree
          </span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-300 font-light font-sans max-w-xl mx-auto leading-relaxed">
          The continuous evolution of engineering leadership and rigorous academic scholarship.
        </p>
      </div>

      {/* Filter switches */}
      <div className="flex justify-center mb-16">
        <div className="inline-flex p-1.5 rounded-full bg-[#0e051a]/90 border border-[#d4af37]/25 backdrop-blur-xl">
          <button
            onClick={() => setFilter('all')}
            className={`px-5 py-2 rounded-full text-xs font-serif tracking-widest uppercase transition-all duration-300 ${
              filter === 'all'
                ? 'bg-gradient-to-r from-[#d4af37] to-[#e5c158] text-[#07020d] font-bold shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            ALL CHRONICLES
          </button>
          <button
            onClick={() => setFilter('experience')}
            className={`flex items-center space-x-2 px-5 py-2 rounded-full text-xs font-serif tracking-widest uppercase transition-all duration-300 ${
              filter === 'experience'
                ? 'bg-gradient-to-r from-[#d4af37] to-[#e5c158] text-[#07020d] font-bold shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>PRACTICE</span>
          </button>
          <button
            onClick={() => setFilter('education')}
            className={`flex items-center space-x-2 px-5 py-2 rounded-full text-xs font-serif tracking-widest uppercase transition-all duration-300 ${
              filter === 'education'
                ? 'bg-gradient-to-r from-[#d4af37] to-[#e5c158] text-[#07020d] font-bold shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIA</span>
          </button>
        </div>
      </div>

      {/* Vertical Timeline */}
      <div className="relative">
        {/* Continuous antique gold vertical line */}
        <div className="absolute left-0 top-6 bottom-6 w-[1.5px] bg-gradient-to-b from-[#d4af37] via-[#e5c158]/50 to-[#d4af37]/10 shadow-[0_0_10px_rgba(212,175,55,0.4)]" />

        <div className="space-y-8">
          {filteredItems.map((item, index) => {
            const isEducation = item.type === 'education';

            return (
              <div key={item.id} className="relative pl-8 sm:pl-12 py-4 group">
                {/* Glowing Node */}
                <motion.div
                  initial={{ scale: 0.7, opacity: 0.4 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  className="absolute left-0 top-8 -translate-x-1/2 flex items-center justify-center z-20"
                >
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-8 h-8 rounded-full bg-[#d4af37]/20 blur-md group-hover:bg-[#e5c158]/40 transition-all duration-300" />
                    <div className="w-6 h-6 rounded-full border-2 border-[#d4af37] bg-[#07020d] flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-[0_0_15px_rgba(212,175,55,0.5)]">
                      <div className="w-2 h-2 rounded-full bg-[#eed98d]" />
                    </div>
                  </div>
                </motion.div>

                {/* Timeline Card */}
                <motion.div
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ type: 'spring', stiffness: 100, damping: 20, delay: index * 0.1 }}
                  className="rounded-3xl bg-[#0e051a]/80 backdrop-blur-2xl border border-[#d4af37]/25 p-6 sm:p-8 hover:border-[#eed98d]/50 transition-all duration-300 shadow-[0_15px_40px_rgba(7,2,13,0.7)]"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center space-x-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-serif bg-[#150826] text-[#eed98d] border border-[#d4af37]/30">
                        <Calendar className="w-3.5 h-3.5 text-[#e5c158]" />
                        {item.period}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase bg-white/5 text-slate-400 border border-white/10">
                        {isEducation ? 'ACADEMIA' : 'LEADERSHIP'}
                      </span>
                    </div>

                    <div className="flex items-center text-xs font-mono text-[#d4af37]/75 gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#e5c158]" />
                      {item.location}
                    </div>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-white group-hover:text-[#eed98d] transition-colors">
                    {item.role}
                  </h3>
                  <div className="font-serif text-sm text-[#e5c158] tracking-wider mt-1">
                    {item.organization}
                  </div>

                  <p className="mt-3 text-slate-300 text-sm font-light leading-relaxed font-sans">
                    {item.description}
                  </p>

                  {item.highlights && item.highlights.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-[#d4af37]/15 space-y-2">
                      {item.highlights.map((highlight, hIndex) => (
                        <div key={hIndex} className="flex items-start text-xs text-slate-400 space-x-2.5 font-sans">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#e5c158] mt-0.5 shrink-0" />
                          <span className="leading-relaxed">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
