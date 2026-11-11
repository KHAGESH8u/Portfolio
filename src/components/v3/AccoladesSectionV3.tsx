import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Medal, Crown } from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../../data/portfolioData';

export const AccoladesSectionV3: React.FC = () => {
  const iconList = [Crown, Trophy, Award, Medal];

  return (
    <section
      id="accolades-v3"
      className="relative w-full min-h-screen snap-start flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pointer-events-none"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 pointer-events-none">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-serif text-purple-200 tracking-widest uppercase mb-3 pointer-events-auto">
            <span>CHAPTER V</span>
            <span>//</span>
            <span>DISTINCTIONS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-white">
            <span className="bg-gradient-to-r from-white via-purple-100 to-fuchsia-300 bg-clip-text text-transparent">
              Honors & Accolades
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-200 font-light font-sans max-w-xl mx-auto leading-relaxed">
            Formally recognized milestones in autonomous systems, distributed scalability, and open-source contributions.
          </p>
        </div>

        {/* Grid of 4 Accolade Cards cloned from V2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pointer-events-none">
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
                {/* Purple perimeter glow */}
                <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-purple-500 via-fuchsia-400 to-purple-600 opacity-20 group-hover:opacity-60 blur-sm group-hover:blur-md transition-all duration-500 pointer-events-none" />

                <div className="relative rounded-3xl bg-black/85 backdrop-blur-3xl border border-purple-500/25 p-6 flex flex-col justify-between h-full group-hover:border-purple-400/60 transition-all duration-300">
                  <div>
                    {/* Top Bar with Medallion and Year */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-2xl bg-purple-950/60 border border-purple-500/40 flex items-center justify-center text-purple-300 group-hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="font-serif text-xs font-bold px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/25 text-purple-200">
                        {item.year}
                      </span>
                    </div>

                    {/* Accolade Title */}
                    <h3 className="font-serif text-xl font-normal text-white group-hover:text-purple-200 transition-colors mb-1">
                      {item.title}
                    </h3>

                    {/* Issuer & Badge */}
                    <div className="text-[11px] font-mono text-purple-300 uppercase tracking-widest mb-3">
                      {item.organization} // {item.badge}
                    </div>

                    {/* Description */}
                    <p className="text-xs text-gray-300 font-light font-sans leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom luxury insignia */}
                  <div className="mt-5 pt-3 border-t border-purple-500/15 flex items-center justify-between text-[10px] font-serif text-purple-300">
                    <span>RECORD VERIFIED</span>
                    <span>DISTINCTION</span>
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

export default AccoladesSectionV3;
