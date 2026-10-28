'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Trophy, Medal, Award, Users, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { podiumWinners, consolationWinners, WinningTeam } from '@/data/winners';

export const WinnersPodium: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="winners" className="py-20 sm:py-28 relative z-10 border-t border-slate-200 dark:border-white/10 bg-white dark:bg-[#0A0B0E]" aria-labelledby="winners-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono-tag uppercase tracking-wider bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/30 mb-3">
            <Trophy className="w-3.5 h-3.5 text-amber-500" />
            <span>Official IdeaStorm 2026 Ledger</span>
          </div>
          <h2 id="winners-heading" className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
            Hall of Fame: Winning Teams
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A total of <span className="text-orange-600 dark:text-[#FF6B35] font-bold">₹17,500</span> in cash prizes was awarded across 10 winning student teams for building functional AI & software prototypes.
          </p>
        </div>

        {/* Podium Top 3 Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16 items-stretch">
          {podiumWinners.map((winner) => {
            const isFirst = winner.rank === 1;
            const isSecond = winner.rank === 2;
            const isThird = winner.rank === 3;

            return (
              <article
                key={winner.id}
                className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 overflow-hidden group ${
                  isFirst
                    ? 'builder-panel border-amber-500/60 bg-amber-500/[0.02] dark:bg-[#161820] shadow-md dark:shadow-xl dark:shadow-black/60 lg:-translate-y-3 ring-1 ring-amber-500/30'
                    : isSecond
                    ? 'builder-panel border-slate-300 dark:border-slate-400/40 bg-slate-50 dark:bg-[#13151B] shadow-sm'
                    : 'builder-panel border-orange-300 dark:border-[#FF5722]/40 bg-orange-500/[0.02] dark:bg-[#13151B] shadow-sm'
                }`}
              >
                {/* Tech corner tick */}
                <span className="absolute top-3 right-3 text-slate-400/30 dark:text-white/10 font-mono-tag text-xs select-none">+</span>

                <div>
                  {/* Top Badge & Prize Amount */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-mono-tag uppercase tracking-wider ${
                        isFirst
                          ? 'bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/40'
                          : isSecond
                          ? 'bg-slate-200 dark:bg-slate-400/15 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-400/40'
                          : 'bg-orange-500/15 text-orange-700 dark:text-[#FF6B35] border border-orange-500/40'
                      }`}
                    >
                      {isFirst ? (
                        <Trophy className="w-3.5 h-3.5 text-amber-500" />
                      ) : isSecond ? (
                        <Medal className="w-3.5 h-3.5 text-slate-500 dark:text-slate-300" />
                      ) : (
                        <Award className="w-3.5 h-3.5 text-orange-500" />
                      )}
                      <span>{winner.rankLabel}</span>
                    </span>

                    <span className="text-xl sm:text-2xl font-black font-mono-tag text-slate-900 dark:text-white">
                      {winner.prizeAmount}
                    </span>
                  </div>

                  {/* Team Real Photo */}
                  <div
                    onClick={() => setSelectedImage(winner.photo)}
                    className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden mb-5 border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#1A1D26] cursor-pointer group-hover:border-orange-500/50 transition-colors shadow-xs"
                    title="Click to view full photo"
                  >
                    <Image
                      src={winner.photo}
                      alt={`${winner.teamName} Team Photo`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3">
                      <span className="text-[11px] text-white/90 font-mono-tag font-medium flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-amber-400" /> Click to enlarge
                      </span>
                    </div>
                  </div>

                  {/* Team Name & Domain */}
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-1 tracking-tight">
                    {winner.teamName}
                  </h3>
                  <span className="inline-block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-4 font-mono-tag">
                    {winner.domain}
                  </span>

                  {/* Project Name & Summary */}
                  <div className="p-4 rounded-2xl bg-slate-100/80 dark:bg-black/40 border border-slate-200/80 dark:border-white/5 mb-5">
                    <span className="text-[11px] uppercase font-bold text-slate-500 dark:text-slate-400 block mb-1">
                      Project Built
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                      {winner.projectName}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {winner.description}
                    </p>
                  </div>
                </div>

                {/* Team Members List & Drive Link */}
                <div className="pt-4 border-t border-slate-200 dark:border-white/10">
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2.5 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-slate-400" />
                      <span>Team Roster (4 Members)</span>
                    </span>
                    <a
                      href={winner.driveFolderUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-mono-tag text-orange-600 dark:text-[#FF6B35] hover:underline flex items-center gap-1 normal-case"
                      title="View drive folder"
                    >
                      <span>Drive Folder</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </span>

                  <ul className="space-y-1.5">
                    {winner.members.map((member, i) => (
                      <li key={i} className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-700 dark:text-slate-200">
                          {member.name} {member.isLead && <span className="text-[10px] text-amber-600 dark:text-amber-400 font-semibold">(Lead)</span>}
                        </span>
                        <span className="font-mono-tag text-slate-500 dark:text-slate-400 bg-slate-200/60 dark:bg-white/5 px-2 py-0.5 rounded text-[11px]">
                          {member.rollNo}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        {/* Consolation Winners Showcase */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-orange-600 dark:text-[#FF6B35]" />
              <span>Consolation Prize Winners (7 Teams · ₹1,000 Each)</span>
            </h3>
            <span className="text-xs font-mono-tag text-slate-500 dark:text-slate-400">
              ₹7,000 Total Consolation Pool
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {consolationWinners.map((team) => (
              <div
                key={team.id}
                className="builder-panel builder-panel-hover p-5 rounded-2xl flex flex-col justify-between shadow-xs relative overflow-hidden group"
              >
                <span className="absolute top-2 right-2 text-slate-400/20 dark:text-white/10 font-mono-tag text-[10px] select-none">+</span>

                <div>
                  {/* Photo Thumbnail */}
                  <div
                    onClick={() => setSelectedImage(team.photo)}
                    className="relative w-full h-32 rounded-xl overflow-hidden mb-3 border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#161820] cursor-pointer group-hover:border-orange-500/40 transition-colors"
                  >
                    <Image
                      src={team.photo}
                      alt={team.teamName}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      {team.teamName}
                    </h4>
                    <span className="text-xs font-bold font-mono-tag text-slate-900 dark:text-white bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded border border-slate-200 dark:border-white/10">
                      {team.prizeAmount}
                    </span>
                  </div>

                  <span className="text-[11px] text-orange-600 dark:text-[#FF6B35] block mb-2 font-mono-tag font-semibold">
                    {team.domain}
                  </span>

                  <h5 className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white mb-2 line-clamp-1" title={team.projectName}>
                    {team.projectName}
                  </h5>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4 line-clamp-2">
                    {team.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-white/5">
                  <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1.5">
                    Team Members
                  </span>
                  <div className="grid grid-cols-2 gap-1 text-[11px] text-slate-700 dark:text-slate-300">
                    {team.members.map((m, idx) => (
                      <span key={idx} className="truncate" title={`${m.name} (${m.rollNo})`}>
                        • {m.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for Zooming Winner Photos */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh] w-full rounded-2xl overflow-hidden border border-white/20 bg-black">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-lg bg-black/70 text-white hover:bg-black font-mono-tag text-xs border border-white/20"
              >
                Close ✕
              </button>
              <div className="relative w-full h-[60vh] sm:h-[75vh]">
                <Image
                  src={selectedImage}
                  alt="Expanded Team Photo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
