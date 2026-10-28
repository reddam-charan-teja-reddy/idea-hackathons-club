import React from 'react';
import { Trophy, Medal, Award, Users } from 'lucide-react';
import { podiumWinners, consolationWinners } from '@/data/winners';

export const WinnersPodium: React.FC = () => {
  return (
    <section id="winners" className="py-20 sm:py-28 relative z-10 border-t border-white/10 bg-[#0A0B0E]" aria-labelledby="winners-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono-tag uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30 mb-3">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>Official IdeaStorm 2026 Ledger</span>
          </div>
          <h2 id="winners-heading" className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Hall of Fame: Winning Teams
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            A total of <span className="text-[#FF6B35] font-semibold">₹17,500</span> in cash prizes was awarded across 10 outstanding teams for building real-world AI and software prototypes.
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
                className={`relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 ${
                  isFirst
                    ? 'builder-panel border-amber-500/50 bg-[#16181F] shadow-lg shadow-black/40 lg:-translate-y-3'
                    : isSecond
                    ? 'builder-panel border-slate-400/40 bg-[#13151B]'
                    : 'builder-panel border-[#FF5722]/40 bg-[#13151B]'
                }`}
              >
                {/* Top Badge & Prize Amount */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-mono-tag uppercase tracking-wider ${
                        isFirst
                          ? 'bg-amber-500/15 text-amber-400 border border-amber-500/40'
                          : isSecond
                          ? 'bg-slate-400/15 text-slate-200 border border-slate-400/40'
                          : 'bg-[#FF5722]/15 text-[#FF6B35] border border-[#FF5722]/40'
                      }`}
                    >
                      {isFirst ? (
                        <Trophy className="w-3.5 h-3.5 text-amber-400" />
                      ) : isSecond ? (
                        <Medal className="w-3.5 h-3.5 text-slate-300" />
                      ) : (
                        <Award className="w-3.5 h-3.5 text-[#FF6B35]" />
                      )}
                      <span>{winner.rankLabel}</span>
                    </span>

                    <span className="text-xl sm:text-2xl font-black font-mono-tag text-white">
                      {winner.prizeAmount}
                    </span>
                  </div>

                  {/* Team Name & Domain */}
                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-1">
                    {winner.teamName}
                  </h3>
                  <span className="inline-block text-xs font-medium text-slate-400 mb-4 font-mono-tag">
                    {winner.domain}
                  </span>

                  {/* Project Name & Summary */}
                  <div className="p-4 rounded-xl bg-black/40 border border-white/5 mb-5">
                    <span className="text-[11px] uppercase font-bold text-slate-400 block mb-1">
                      Project Built
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-white mb-2">
                      {winner.projectName}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {winner.description}
                    </p>
                  </div>
                </div>

                {/* Team Members List */}
                <div className="pt-4 border-t border-white/10">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2.5 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-slate-400" />
                    <span>Team Roster (4 Members)</span>
                  </span>
                  <ul className="space-y-1.5">
                    {winner.members.map((member, i) => (
                      <li key={i} className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-200">
                          {member.name} {member.isLead && <span className="text-[10px] text-amber-400 font-normal">(Lead)</span>}
                        </span>
                        <span className="font-mono-tag text-slate-400 bg-white/5 px-2 py-0.5 rounded">
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
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-slate-300" />
              <span>Consolation Prize Winners (7 Teams · ₹1,000 Each)</span>
            </h3>
            <span className="text-xs font-mono-tag text-slate-400">
              ₹7,000 Total Consolation Pool
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {consolationWinners.map((team) => (
              <div
                key={team.id}
                className="builder-panel builder-panel-hover p-5 rounded-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-base font-bold text-white">
                      {team.teamName}
                    </h4>
                    <span className="text-xs font-bold font-mono-tag text-white bg-white/5 px-2 py-0.5 rounded border border-white/10">
                      {team.prizeAmount}
                    </span>
                  </div>

                  <span className="text-[11px] text-[#FF6B35] block mb-2 font-mono-tag">
                    {team.domain}
                  </span>

                  <h5 className="text-xs sm:text-sm font-semibold text-white mb-2">
                    {team.projectName}
                  </h5>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {team.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5">
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1.5">
                    Team Members
                  </span>
                  <div className="grid grid-cols-2 gap-1 text-[11px] text-slate-300">
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
      </div>
    </section>
  );
};
