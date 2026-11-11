import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Medal, Star, Sparkles } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { ACHIEVEMENTS_DATA } from '../../data/portfolioData';

export const AchievementsSection: React.FC = () => {
  const iconList = [Trophy, Award, Medal, Star];

  return (
    <section id="achievements" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />

      <SectionHeader
        badge="HONORS & RECOGNITION"
        title="HOLOGRAPHIC VAULT // ACCOLADES"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Recognized milestones in autonomous systems, distributed scalability, and algorithmic breakthrough."
      />

      {/* Holographic style cards grid */}
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
                stiffness: 120,
                damping: 18,
                delay: index * 0.1
              }}
              className="group relative"
            >
              {/* Holographic iridescent perimeter glow */}
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-20 group-hover:opacity-60 blur-sm group-hover:blur-md transition-all duration-500" />

              <div className="relative rounded-2xl bg-slate-950/85 backdrop-blur-2xl border border-white/10 p-6 flex flex-col justify-between h-full group-hover:border-white/30 transition-all duration-300">
                {/* Holographic light streak simulation */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />

                <div>
                  {/* Top Bar with Icon and Year */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300 group-hover:scale-110 group-hover:border-cyan-300 transition-all duration-300 shadow-[0_0_15px_rgba(0,242,254,0.2)]">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300">
                      {item.year}
                    </span>
                  </div>

                  {/* Badge */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-[10px] font-mono text-cyan-300 tracking-wider uppercase mb-3">
                    <Sparkles className="w-3 h-3 text-cyan-400" />
                    <span>{item.badge}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors duration-200 tracking-tight">
                    {item.title}
                  </h3>

                  {/* Organization */}
                  <p className="text-xs font-mono text-purple-400 mt-1">
                    {item.organization}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-slate-400 mt-3 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Bottom holographic indicator */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>SIG_HASH: VALID</span>
                  <span className="text-cyan-400">ENCRYPTED</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
