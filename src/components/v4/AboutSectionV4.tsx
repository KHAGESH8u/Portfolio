import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Crown, Feather, Landmark } from 'lucide-react';
import { ABOUT_DATA } from '../../data/portfolioData';

export const AboutSectionV4: React.FC = () => {
  const statIcons = [Crown, Landmark, Feather, Sparkles];

  return (
    <section
      id="about-v4"
      className="relative w-full min-h-screen snap-start flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pointer-events-none"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-teal-500/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="w-full">
        {/* Editorial Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 pointer-events-none">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#042626] border border-white/30 text-xs font-serif text-white tracking-widest uppercase mb-4 pointer-events-auto">
            <span>CHAPTER I</span>
            <span>//</span>
            <span>PROLOGUE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-white">
            <span className="bg-gradient-to-r from-white via-slate-100 to-teal-200 bg-clip-text text-transparent">
              Artistry & Architecture
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-teal-50 font-light font-sans max-w-xl mx-auto leading-relaxed">
            Bridging classical discipline with futuristic computational systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pointer-events-none">
          
          {/* Left Column: Editorial 2-Paragraph Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ type: 'spring', stiffness: 90, damping: 20 }}
            className="lg:col-span-7 flex flex-col justify-between pointer-events-none"
          >
            <div className="relative rounded-3xl bg-[#021b1b]/85 backdrop-blur-3xl border border-white/25 p-7 sm:p-10 shadow-[0_15px_50px_rgba(0,10,10,0.8)] h-full flex flex-col justify-between pointer-events-auto">
              {/* Top porcelain line accent */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/15">
                  <span className="font-serif text-xs uppercase tracking-[0.2em] text-white">
                    PERSONAL TESTAMENT
                  </span>
                  <span className="text-[11px] font-mono text-teal-300">
                    SAN FRANCISCO, CA
                  </span>
                </div>

                {/* Bio Paragraph 1 with drop cap */}
                <p className="text-teal-50 text-base sm:text-lg leading-relaxed font-light mb-6 font-sans">
                  <span className="float-left text-5xl font-serif text-white leading-none pr-3 pt-1 font-bold">
                    L
                  </span>
                  orem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed felis ut arcu bibendum elementum. Ut fermentum sapien nec mauris dapibus, non sodales urna sagittis. Vivamus ac dolor ut justo cursus varius vitae non sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                </p>

                {/* Bio Paragraph 2 */}
                <p className="text-teal-100/90 text-sm sm:text-base leading-relaxed font-light font-sans">
                  {ABOUT_DATA.bioParagraph2}
                </p>
              </div>

              {/* Core pillars */}
              <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap gap-2.5">
                {ABOUT_DATA.focusAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#042626]/90 border border-white/20 text-xs font-serif text-white shadow-[0_0_12px_rgba(45,212,191,0.15)]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-300" />
                    <span>{area}</span>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: 4 Stat Cards & Creative Manifesto Card cloned from V2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ type: 'spring', stiffness: 90, damping: 20, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-between gap-6 pointer-events-none"
          >
            {/* 4 Stat Cards in 2x2 grid */}
            <div className="grid grid-cols-2 gap-4 pointer-events-none">
              {ABOUT_DATA.quickFacts.map((fact, index) => {
                const IconComp = statIcons[index % statIcons.length];
                return (
                  <div
                    key={index}
                    className="rounded-2xl bg-[#021b1b]/85 backdrop-blur-2xl border border-white/20 p-5 flex flex-col justify-between hover:border-white/50 hover:shadow-[0_0_25px_rgba(45,212,191,0.2)] transition-all duration-300 pointer-events-auto"
                  >
                    <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white mb-3">
                      <IconComp className="w-4 h-4 text-teal-300" />
                    </div>
                    <div>
                      <div className="font-serif text-2xl sm:text-3xl font-normal text-white tracking-tight">
                        {fact.value}
                      </div>
                      <div className="text-[10px] font-mono uppercase tracking-widest text-teal-300 mt-1">
                        {fact.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Luxury Creative Manifesto Card */}
            <div className="rounded-3xl bg-[#042626]/80 backdrop-blur-2xl border border-white/25 p-7 relative overflow-hidden pointer-events-auto shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />
              <span className="font-serif text-xs uppercase tracking-widest text-white block mb-3">
                CREATIVE MANIFESTO
              </span>
              <p className="font-serif text-sm sm:text-base text-teal-50 italic leading-relaxed">
                &quot;Excellence in computing is an act of proportion, discipline, and quiet mastery. We construct neural architectures that endure.&quot;
              </p>
              <div className="mt-5 pt-3 border-t border-white/15 flex items-center justify-between text-xs font-serif text-teal-200">
                <span>Khagesh</span>
                <span className="text-[10px] font-mono text-teal-300">MMXXVI</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
