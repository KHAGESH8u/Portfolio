import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Medal, Crown, Sparkles } from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../../data/portfolioData';

export const AccoladesSectionV6: React.FC = () => {
  const iconList = [Crown, Trophy, Award, Medal];

  return (
    <section id="accolades-v6" className="relative w-full min-h-screen snap-start flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pointer-events-none">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-emerald-950/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 pointer-events-none">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-black/40 border border-emerald-500/20 backdrop-blur-lg text-xs font-serif text-emerald-300 tracking-widest uppercase mb-4 pointer-events-auto">
            <span>CHAPTER V</span>
            <span>//</span>
            <span>DISTINCTIONS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-white">
            <span className="bg-gradient-to-r from-emerald-200 via-emerald-400 to-teal-300 bg-clip-text text-transparent">
              Honors & Accolades
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light font-sans max-w-xl mx-auto leading-relaxed">
            Formally recognized milestones in autonomous systems, distributed scalability, and open-source contributions.
          </p>
        </div>

        {/* Grid of 4 Accolade Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pointer-events-none">
          {ACHIEVEMENTS_DATA.map((item, index) => {
            const IconComponent = iconList[index % iconList.length];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 20,
                  delay: index * 0.1
                }}
                className="group relative pointer-events-auto"
              >
                {/* Emerald perimeter glow */}
                <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600 opacity-20 group-hover:opacity-50 blur-sm group-hover:blur-md transition-all duration-500 pointer-events-none" />

                <div className="relative rounded-3xl bg-black/40 backdrop-blur-lg border border-emerald-500/20 p-7 flex flex-col justify-between h-full group-hover:border-emerald-400/60 transition-all duration-300 shadow-xl">
                  <div>
                    {/* Top Bar with Medallion and Year */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-black/50 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(16,185,129,0.25)]">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="font-serif text-xs font-bold px-3 py-1 rounded-full bg-black/40 border border-emerald-500/20 text-emerald-300">
                        {item.year}
                      </span>
                    </div>

                    {/* Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 border border-emerald-500/30 text-[10px] font-serif text-emerald-300 tracking-wider uppercase mb-3">
                      <Sparkles className="w-3 h-3 text-emerald-400" />
                      <span>{item.badge}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-lg font-normal text-white group-hover:text-emerald-300 transition-colors duration-200">
                      {item.title}
                    </h3>

                    {/* Organization */}
                    <p className="font-serif text-xs text-emerald-400 mt-1">
                      {item.organization}
                    </p>

                    {/* Description */}
                    <p className="text-xs text-slate-300 font-light mt-3 leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom luxury seal */}
                  <div className="mt-6 pt-4 border-t border-emerald-500/15 flex items-center justify-between text-[10px] font-serif text-emerald-400/80">
                    <span>RECORDED CONFERMENT</span>
                    <span className="text-emerald-300">VERIFIED</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AccoladesSectionV6;
