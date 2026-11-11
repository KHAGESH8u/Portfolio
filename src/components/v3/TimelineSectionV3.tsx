import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { TIMELINE_DATA } from '../../data/portfolioData';

export const TimelineSectionV3: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'experience' | 'education'>('all');

  const filteredItems = TIMELINE_DATA.filter((item) => {
    if (filter === 'all') return true;
    return item.type === filter;
  });

  return (
    <section
      id="timeline-v3"
      className="relative w-full min-h-screen snap-start flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pointer-events-none"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 pointer-events-none">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-serif text-purple-200 tracking-widest uppercase mb-3 pointer-events-auto">
            <span>CHAPTER IV</span>
            <span>//</span>
            <span>CHRONOLOGY</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-white">
            <span className="bg-gradient-to-r from-white via-purple-100 to-fuchsia-300 bg-clip-text text-transparent">
              Trajectory & Pedigree
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-200 font-light font-sans max-w-xl mx-auto leading-relaxed">
            The continuous evolution of engineering leadership and rigorous academic scholarship.
          </p>
        </div>

        {/* Filter switches */}
        <div className="flex justify-center mb-10 pointer-events-none">
          <div className="inline-flex p-1.5 rounded-full bg-black/90 border border-purple-500/30 backdrop-blur-xl pointer-events-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-5 py-2 rounded-full text-xs font-serif tracking-widest uppercase transition-all duration-300 ${
                filter === 'all'
                  ? 'bg-gradient-to-r from-purple-400 to-fuchsia-400 text-black font-bold shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              ALL CHRONICLES
            </button>
            <button
              onClick={() => setFilter('experience')}
              className={`flex items-center space-x-2 px-5 py-2 rounded-full text-xs font-serif tracking-widest uppercase transition-all duration-300 ${
                filter === 'experience'
                  ? 'bg-gradient-to-r from-purple-400 to-fuchsia-400 text-black font-bold shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>PRACTICE</span>
            </button>
            <button
              onClick={() => setFilter('education')}
              className={`flex items-center space-x-2 px-5 py-2 rounded-full text-xs font-serif tracking-widest uppercase transition-all duration-300 ${
                filter === 'education'
                  ? 'bg-gradient-to-r from-purple-400 to-fuchsia-400 text-black font-bold shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>ACADEMIA</span>
            </button>
          </div>
        </div>

        {/* Vertical stream */}
        <div className="relative pl-6 sm:pl-10 pointer-events-none">
          {/* Vertical trajectory line */}
          <div className="absolute left-2 sm:left-4 top-4 bottom-4 w-[1px] bg-gradient-to-b from-purple-400 via-fuchsia-400 to-purple-600/20" />

          <div className="space-y-6">
            {filteredItems.slice(0, 3).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  type: 'spring',
                  stiffness: 90,
                  damping: 20,
                  delay: index * 0.08
                }}
                className="relative group pointer-events-none"
              >
                {/* Glowing Node on line */}
                <div className="absolute -left-[27px] sm:-left-[35px] top-6 w-5 h-5 rounded-full bg-black border border-purple-400 flex items-center justify-center shadow-[0_0_12px_rgba(168,85,247,0.5)] group-hover:scale-125 transition-transform duration-300 z-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-300" />
                </div>

                {/* Frosted Glass Timeline Card */}
                <div className="rounded-3xl bg-black/85 backdrop-blur-3xl border border-purple-500/25 p-6 sm:p-7 shadow-[0_15px_40px_rgba(0,0,0,0.8)] group-hover:border-purple-400/50 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.22)] transition-all duration-300 pointer-events-auto">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2 pb-3 border-b border-purple-500/15">
                    <div className="flex items-center space-x-2 text-xs font-serif text-purple-200">
                      <Calendar className="w-3.5 h-3.5 text-purple-400" />
                      <span className="tracking-widest uppercase">{item.period}</span>
                    </div>
                    <div className="flex items-center space-x-1.5 text-[11px] font-mono text-purple-300">
                      <MapPin className="w-3 h-3" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl font-normal text-white group-hover:text-purple-200 transition-colors">
                    {item.role}
                  </h3>
                  <div className="text-xs font-mono text-purple-300 uppercase tracking-widest mt-0.5 mb-3">
                    {item.organization}
                  </div>

                  <p className="text-xs sm:text-sm text-gray-200 font-light font-sans leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {item.highlights && item.highlights.length > 0 && (
                    <div className="space-y-1.5 pt-3 border-t border-purple-500/15">
                      {item.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start space-x-2 text-xs text-gray-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
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

export default TimelineSectionV3;
