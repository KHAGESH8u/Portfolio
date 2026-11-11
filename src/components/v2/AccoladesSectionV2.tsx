import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Medal, Crown, Sparkles } from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../../data/portfolioData';

export const AccoladesSectionV2: React.FC = () => {
  const iconList = [Crown, Trophy, Award, Medal];

  return (
    <section id="accolades-v2" className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-[#38165e]/20 rounded-full blur-[160px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#150826] border border-[#d4af37]/30 text-xs font-serif text-[#eed98d] tracking-widest uppercase mb-4">
          <span>CHAPTER V</span>
          <span>//</span>
          <span>DISTINCTIONS</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-white">
          <span className="bg-gradient-to-r from-[#fcf8e8] via-[#e5c158] to-[#d4af37] bg-clip-text text-transparent">
            Honors & Accolades
          </span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-300 font-light font-sans max-w-xl mx-auto leading-relaxed">
          Formally recognized milestones in autonomous systems, distributed scalability, and open-source contributions.
        </p>
      </div>

      {/* Grid of 4 Accolade Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              className="group relative"
            >
              {/* Gold foil perimeter glow */}
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-[#d4af37] via-[#eed98d] to-[#b89028] opacity-20 group-hover:opacity-60 blur-sm group-hover:blur-md transition-all duration-500" />

              <div className="relative rounded-3xl bg-[#0e051a]/85 backdrop-blur-3xl border border-[#d4af37]/25 p-7 flex flex-col justify-between h-full group-hover:border-[#eed98d]/60 transition-all duration-300">
                <div>
                  {/* Top Bar with Medallion and Year */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#150826] border border-[#d4af37]/40 flex items-center justify-center text-[#e5c158] group-hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-serif text-xs font-bold px-3 py-1 rounded-full bg-[#150826] border border-[#d4af37]/20 text-[#eed98d]">
                      {item.year}
                    </span>
                  </div>

                  {/* Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#150826] border border-[#d4af37]/30 text-[10px] font-serif text-[#eed98d] tracking-wider uppercase mb-3">
                    <Sparkles className="w-3 h-3 text-[#e5c158]" />
                    <span>{item.badge}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg font-normal text-white group-hover:text-[#eed98d] transition-colors duration-200">
                    {item.title}
                  </h3>

                  {/* Organization */}
                  <p className="font-serif text-xs text-[#d4af37] mt-1">
                    {item.organization}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-slate-300 font-light mt-3 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                {/* Bottom luxury seal */}
                <div className="mt-6 pt-4 border-t border-[#d4af37]/15 flex items-center justify-between text-[10px] font-serif text-[#d4af37]/75">
                  <span>RECORDED CONFERMENT</span>
                  <span className="text-[#e5c158]">VERIFIED</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
