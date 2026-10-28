import React from 'react';
import { Terminal, Trophy, ArrowRight, BookOpen, Layers } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export const Hero: React.FC = () => {
  const { club, institution } = siteConfig;

  return (
    <section id="about" className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 overflow-hidden builder-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Eyebrow Terminal Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-mono-tag bg-[#181B22] text-slate-200 border border-white/10 mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#FF5722]" />
            <Terminal className="w-3.5 h-3.5 text-[#FF5722]" />
            <span>{institution.shortName} · {club.branchTag}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] mb-6 text-white">
            Where Bold Ideas Turn Into{' '}
            <span className="text-[#FF5722] underline decoration-white/20 underline-offset-8">
              Working Code.
            </span>
          </h1>

          {/* Club Description */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mb-10 font-normal">
            {club.description}
          </p>

          {/* Action Button Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
            <a
              href="#winners"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold bg-[#FF5722] hover:bg-[#F4511E] text-white shadow-md transition-all transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5722]"
            >
              <Trophy className="w-4 h-4 text-white" />
              <span>Explore Winners</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#problems"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 transition-all transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5722]"
            >
              <BookOpen className="w-4 h-4 text-[#FF6B35]" />
              <span>Browse 45 Challenges</span>
            </a>

            <a
              href="#ideastorm"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              <Layers className="w-4 h-4 text-slate-400" />
              <span>IdeaStorm 2026 Format</span>
            </a>
          </div>

          {/* Metrics Strip */}
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 p-4 sm:p-6 rounded-2xl builder-panel border border-white/10">
            {club.heroMetrics.map((metric, idx) => (
              <div key={idx} className="flex flex-col items-center p-3 text-center">
                <span className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-mono-tag tracking-tight">
                  {metric.value}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#FF6B35] mt-1">
                  {metric.label}
                </span>
                <span className="text-[11px] text-slate-400 mt-0.5 hidden sm:block">
                  {metric.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
