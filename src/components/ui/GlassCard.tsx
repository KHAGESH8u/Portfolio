import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'purple' | 'emerald' | 'none';
  interactive?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  glowColor = 'none',
  interactive = false
}) => {
  const glowStyles = {
    none: '',
    cyan: 'hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(0,242,254,0.15)]',
    purple: 'hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(157,78,221,0.15)]',
    emerald: 'hover:border-emerald-500/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]'
  };

  return (
    <div
      className={`
        relative rounded-2xl overflow-hidden
        bg-slate-950/60 backdrop-blur-xl
        border border-white/[0.08]
        transition-all duration-300 ease-out
        ${interactive ? 'hover:-translate-y-1 cursor-default' : ''}
        ${glowStyles[glowColor]}
        ${className}
      `}
    >
      {/* Subtle top edge specular highlight line */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
      {children}
    </div>
  );
};
