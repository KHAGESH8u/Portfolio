import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Crown, Feather, Landmark } from 'lucide-react';
import { ABOUT_DATA } from '../../data/portfolioData';

export const AboutSectionV5: React.FC = () => {
  const statIcons = [Crown, Landmark, Feather, Sparkles];

  return (
    <section id="about-v5" className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pointer-events-none">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#38165e]/20 rounded-full blur-[150px] pointer-events-none" />

      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto mb-20 pointer-events-none">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#150826] border border-[#d4af37]/30 text-xs font-serif text-[#eed98d] tracking-widest uppercase mb-4 pointer-events-auto">
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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch pointer-events-none">
        
        {/* Left Column: Editorial 2-Paragraph Bio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ type: 'spring', stiffness: 90, damping: 20 }}
          className="lg:col-span-7 flex flex-col justify-between pointer-events-auto"
        >
          <div className="relative rounded-3xl bg-[#0e051a]/85 backdrop-blur-3xl border border-[#d4af37]/25 p-8 sm:p-12 shadow-[0_15px_50px_rgba(7,2,13,0.8)] h-full flex flex-col justify-between">
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
              {ABOUT_DATA.focusAreas.map((area) => (
                <span
                  key={area}
                  className="px-3.5 py-1.5 rounded-full bg-[#150826] border border-[#d4af37]/20 text-xs font-serif text-[#eed98d] tracking-wide"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Royal Quick Facts & Metric Crests */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6 pointer-events-none">
          <div className="grid grid-cols-2 gap-4 pointer-events-none">
            {ABOUT_DATA.quickFacts.map((fact, index) => {
              const IconComp = statIcons[index % statIcons.length];
              return (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ type: 'spring', stiffness: 90, damping: 20, delay: index * 0.08 }}
                  className="relative rounded-2xl bg-[#0e051a]/85 backdrop-blur-3xl border border-[#d4af37]/25 p-6 shadow-xl flex flex-col justify-between group hover:border-[#eed98d]/50 transition-colors pointer-events-auto"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#150826] border border-[#d4af37]/30 flex items-center justify-center text-[#e5c158] mb-4">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-serif text-2xl sm:text-3xl font-normal text-white tracking-tight">
                      {fact.value}
                    </div>
                    <div className="text-xs font-serif tracking-widest text-[#d4af37]/80 uppercase mt-1">
                      {fact.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Artistic Creed Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ type: 'spring', stiffness: 90, damping: 20, delay: 0.35 }}
            className="rounded-3xl bg-[#0e051a]/85 backdrop-blur-3xl border border-[#d4af37]/25 p-8 shadow-2xl relative overflow-hidden pointer-events-auto"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/10 rounded-full blur-2xl pointer-events-none" />
            <div className="text-[10px] font-mono tracking-widest text-[#d4af37] uppercase mb-2">
              CREATIVE MANIFESTO
            </div>
            <div className="font-serif text-lg text-slate-100 italic leading-snug">
              &quot;True engineering mastery lies in the elimination of the superfluous, until what remains resembles digital divinity.&quot;
            </div>
            <div className="mt-4 text-xs font-serif text-[#eed98d] tracking-widest uppercase">
              // ALEXANDER VANCE, PRINCIPAL ARCHITECT
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default AboutSectionV5;
