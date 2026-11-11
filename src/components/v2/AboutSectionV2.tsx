import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Crown, Feather, Landmark } from 'lucide-react';
import { ABOUT_DATA } from '../../data/portfolioData';

export const AboutSectionV2: React.FC = () => {
  const statIcons = [Crown, Landmark, Feather, Sparkles];

  return (
    <section id="about-v2" className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#38165e]/20 rounded-full blur-[150px] pointer-events-none" />

      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#150826] border border-[#d4af37]/30 text-xs font-serif text-[#eed98d] tracking-widest uppercase mb-4">
          <span>CHAPTER I</span>
          <span>//</span>
          <span>PROLOGUE</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-white">
          <span className="bg-gradient-to-r from-[#fcf8e8] via-[#e5c158] to-[#d4af37] bg-clip-text text-transparent">
            Artistry & Architecture
          </span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-300 font-light font-sans max-w-xl mx-auto leading-relaxed">
          Bridging classical discipline with futuristic computational systems.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        
        {/* Left Column: Editorial 2-Paragraph Bio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ type: 'spring', stiffness: 90, damping: 20 }}
          className="lg:col-span-7 flex flex-col justify-between"
        >
          <div className="relative rounded-3xl bg-[#0e051a]/75 backdrop-blur-3xl border border-[#d4af37]/25 p-8 sm:p-12 shadow-[0_15px_50px_rgba(7,2,13,0.8)] h-full flex flex-col justify-between">
            {/* Top gold line accent */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#eed98d] to-transparent pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#d4af37]/15">
                <span className="font-serif text-xs uppercase tracking-[0.2em] text-[#d4af37]">
                  PERSONAL TESTAMENT
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  SAN FRANCISCO, CA
                </span>
              </div>

              {/* Bio Paragraph 1 with drop cap */}
              <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-light mb-6 font-sans">
                <span className="float-left text-5xl font-serif text-[#e5c158] leading-none pr-3 pt-1 font-bold">
                  L
                </span>
                orem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed felis ut arcu bibendum elementum. Ut fermentum sapien nec mauris dapibus, non sodales urna sagittis. Vivamus ac dolor ut justo cursus varius vitae non sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
              </p>

              {/* Bio Paragraph 2 */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light font-sans">
                {ABOUT_DATA.bioParagraph2}
              </p>
            </div>

            {/* Core pillars */}
            <div className="mt-10 pt-6 border-t border-[#d4af37]/15 flex flex-wrap gap-2.5">
              {ABOUT_DATA.focusAreas.map((area, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#150826]/80 border border-[#d4af37]/20 text-xs font-serif text-[#eed98d]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                  <span>{area}</span>
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Royal Quick Stats & Philosophical Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ type: 'spring', stiffness: 90, damping: 20, delay: 0.15 }}
          className="lg:col-span-5 flex flex-col justify-between gap-6"
        >
          {/* 4 Stat Cards in 2x2 grid */}
          <div className="grid grid-cols-2 gap-4">
            {ABOUT_DATA.quickFacts.map((fact, index) => {
              const IconComp = statIcons[index % statIcons.length];
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-[#0e051a]/75 backdrop-blur-2xl border border-[#d4af37]/25 p-5 flex flex-col justify-between hover:border-[#eed98d]/50 transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-full border border-[#d4af37]/40 flex items-center justify-center text-[#e5c158] mb-3">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-serif text-2xl sm:text-3xl font-normal text-[#fcf8e8] tracking-tight">
                      {fact.value}
                    </div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#d4af37]/80 mt-1">
                      {fact.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Luxury Quote Card */}
          <div className="rounded-3xl bg-[#150826]/70 backdrop-blur-2xl border border-[#d4af37]/30 p-7 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/10 rounded-full blur-2xl pointer-events-none" />
            <span className="font-serif text-xs uppercase tracking-widest text-[#d4af37] block mb-3">
              CREATIVE MANIFESTO
            </span>
            <p className="font-serif text-sm sm:text-base text-slate-200 italic leading-relaxed">
              &quot;Excellence in computing is an act of proportion, discipline, and quiet mastery. We build systems that endure.&quot;
            </p>
            <div className="mt-5 pt-3 border-t border-[#d4af37]/15 flex items-center justify-between text-xs font-serif text-[#eed98d]">
              <span>Alexander Vance</span>
              <span className="text-[10px] font-mono text-[#d4af37]/70">MMXXVI</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
