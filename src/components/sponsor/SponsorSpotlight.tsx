import React from 'react';
import Image from 'next/image';
import { ExternalLink, Award } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export const SponsorSpotlight: React.FC = () => {
  const { sponsor } = siteConfig;

  return (
    <section className="py-10 border-y border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0B0C0E] relative z-10" aria-label="Sponsors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-3xl builder-panel border border-slate-200 dark:border-white/10 shadow-xs relative overflow-hidden">
          <span className="absolute top-2 right-2 text-slate-400/20 dark:text-white/10 font-mono-tag text-xs select-none">+</span>
          
          {/* Left: Sponsor Identity & Logo */}
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="w-48 h-16 relative bg-white dark:bg-white rounded-2xl p-2.5 flex items-center justify-center shadow-xs border border-slate-200 dark:border-transparent flex-shrink-0">
              <Image
                src={sponsor.logoImage}
                alt={`${sponsor.name} Official Logo`}
                fill
                sizes="(max-width: 768px) 192px, 200px"
                className="object-contain p-2"
              />
            </div>
            <div>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold font-mono-tag bg-orange-500/10 text-orange-600 dark:text-[#FF6B35] border border-orange-500/25">
                  <Award className="w-3.5 h-3.5 text-[#FF5722]" />
                  <span>{sponsor.badge}</span>
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono-tag hidden sm:inline">
                  • {sponsor.subBadge}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Supported by {sponsor.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl mt-1 leading-relaxed">
                {sponsor.description}
              </p>
            </div>
          </div>

          {/* Right: Visit Partner CTA */}
          <a
            href={sponsor.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-800 dark:text-white border border-slate-200 dark:border-white/10 transition-all flex-shrink-0 shadow-xs"
          >
            <span>Visit {sponsor.name}</span>
            <ExternalLink className="w-3.5 h-3.5 text-orange-600 dark:text-[#FF6B35]" />
          </a>
        </div>
      </div>
    </section>
  );
};
