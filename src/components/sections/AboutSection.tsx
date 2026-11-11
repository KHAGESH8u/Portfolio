import React from 'react';
import { motion } from 'framer-motion';
import { User, Sparkles, Terminal, Code2, Award, Zap } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard } from '../ui/GlassCard';
import { ABOUT_DATA } from '../../data/portfolioData';

export const AboutSection: React.FC = () => {
  const statIcons = [Zap, Award, Code2, Terminal];

  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background ambient subtle glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <SectionHeader
        badge="BACKGROUND & PHILOSOPHY"
        title="About Me"
        subtitle="A closer look into my journey, core technical philosophy, and passion for building resilient digital products."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: 2-Paragraph Personal Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="lg:col-span-7 flex flex-col justify-between"
        >
          <GlassCard glowColor="cyan" className="p-8 sm:p-10 h-full flex flex-col justify-between">
            <div>
              {/* Header inside card */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {ABOUT_DATA.subtitle}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400">PERSONAL NARRATIVE</p>
                </div>
              </div>

              {/* Bio Paragraph 1 */}
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal mb-6">
                {ABOUT_DATA.bioParagraph1}
              </p>

              {/* Bio Paragraph 2 */}
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
                {ABOUT_DATA.bioParagraph2}
              </p>
            </div>

            {/* Bottom highlights ribbon */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-2">
              {ABOUT_DATA.focusAreas.map((area, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-300"
                >
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                  <span>{area}</span>
                </span>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Right Column: Key Metrics & Technical Focus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.15 }}
          className="lg:col-span-5 flex flex-col justify-between gap-6"
        >
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {ABOUT_DATA.quickFacts.map((fact, index) => {
              const IconComp = statIcons[index % statIcons.length];
              return (
                <GlassCard
                  key={index}
                  glowColor="purple"
                  interactive
                  className="p-5 flex flex-col justify-between"
                >
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white tracking-tight">
                      {fact.value}
                    </div>
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">
                      {fact.label}
                    </div>
                  </div>
                </GlassCard>
              );
            })}
          </div>

          {/* Philosophy Statement Card */}
          <GlassCard glowColor="none" className="p-6">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
              ENGINEERING PHILOSOPHY
            </div>
            <p className="text-sm text-slate-300 italic leading-relaxed">
              &quot;I believe exceptional digital products reside at the intersection of rigorous systems engineering, cinematic visual interaction, and deep empathy for the end user.&quot;
            </p>
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Alexander Vance</span>
              <span className="text-cyan-400">San Francisco, CA</span>
            </div>
          </GlassCard>
        </motion.div>

      </div>
    </section>
  );
};
