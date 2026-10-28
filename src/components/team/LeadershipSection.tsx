import React from 'react';
import Image from 'next/image';
import { GraduationCap, Users, Mail, ExternalLink, ShieldCheck, Sparkles, Building2 } from 'lucide-react';
import { teamData } from '@/data/team';

export const LeadershipSection: React.FC = () => {
  const { faculty, currentBatch, alumniBatch, centralCoordinator, headOfDepartment } = teamData;

  return (
    <section id="team" className="py-20 sm:py-28 relative z-10 border-t border-white/10 bg-[#0B0C0E]" aria-labelledby="team-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono-tag uppercase tracking-wider bg-[#FF5722]/10 text-[#FF6B35] border border-[#FF5722]/30 mb-3">
            <Users className="w-3.5 h-3.5 text-[#FF5722]" />
            <span>Club Leadership & Governance</span>
          </div>
          <h2 id="team-heading" className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Faculty Mentors & Student Core
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Guided by departmental academic mentors and driven by an active 8-member student executive body across CSM and CSD branches.
          </p>
        </div>

        {/* Central Mentorship Bar */}
        <div className="mb-14 p-5 sm:p-6 rounded-2xl builder-panel border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#FF5722]/10 border border-[#FF5722]/25 flex items-center justify-center text-[#FF6B35] flex-shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block">
                Department Leadership
              </span>
              <span className="text-sm sm:text-base font-bold text-white">
                {headOfDepartment.name} — {headOfDepartment.designation}
              </span>
            </div>
          </div>

          <div className="text-xs sm:text-sm text-slate-400">
            Central Clubs Coordination: <strong className="text-white">{centralCoordinator.name}</strong> ({centralCoordinator.experience})
          </div>
        </div>

        {/* Faculty Coordinators (Dual Feature Cards) */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-[#FF6B35]" />
            <span>Faculty Coordinators</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faculty.map((mentor) => (
              <div
                key={mentor.id}
                className="builder-panel builder-panel-hover p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row items-center gap-6"
              >
                {/* Photo Frame */}
                <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-xl overflow-hidden border border-white/10 bg-[#16181F] flex-shrink-0 shadow-md">
                  <Image
                    src={mentor.photo}
                    alt={mentor.name}
                    fill
                    sizes="(max-width: 640px) 128px, 144px"
                    className="object-cover object-top"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 text-center sm:text-left">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold font-mono-tag bg-[#FF5722]/10 text-[#FF6B35] border border-[#FF5722]/25 mb-2">
                    {mentor.role}
                  </span>
                  <h4 className="text-xl sm:text-2xl font-black text-white mb-1">
                    {mentor.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium mb-1">
                    {mentor.title}
                  </p>
                  <p className="text-xs text-slate-400 font-normal">
                    {mentor.department}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Student Coordinators (Current 2023–2027 Batch) */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-slate-300" />
              <span>Student Coordinators ({currentBatch.academicYear})</span>
            </h3>
            <span className="text-xs font-mono-tag text-slate-400">
              Balanced 4 CSM + 4 CSD Coordinators
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {currentBatch.members.map((coord) => (
              <div
                key={coord.id}
                className="builder-panel builder-panel-hover p-5 rounded-2xl flex flex-col items-center text-center justify-between"
              >
                <div className="flex flex-col items-center w-full">
                  {/* Portrait or High-Quality Monogram Avatar Fallback */}
                  <div className="relative w-24 h-24 rounded-2xl overflow-hidden mb-4 border border-white/10 bg-[#16181F] flex items-center justify-center shadow-sm">
                    {coord.photo ? (
                      <Image
                        src={coord.photo}
                        alt={coord.name}
                        fill
                        sizes="96px"
                        className="object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-[#181B22] text-[#FF6B35]">
                        <span className="text-2xl font-black font-mono-tag">
                          {coord.initials}
                        </span>
                        <span className="text-[10px] text-slate-400 uppercase tracking-widest mt-0.5 font-medium">
                          {coord.departmentCode}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Name */}
                  <h4 className="text-sm sm:text-base font-bold text-white mb-1 line-clamp-1" title={coord.name}>
                    {coord.name}
                  </h4>

                  {/* Roll Number Badge */}
                  <span className="text-xs font-mono-tag text-[#FF6B35] font-semibold mb-2">
                    {coord.rollNumber}
                  </span>

                  {/* Department Badge */}
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-white/5 text-slate-300 border border-white/10 mb-3">
                    {coord.department}
                  </span>
                </div>

                {/* Email (Derived from roll number) */}
                <div className="w-full pt-3 border-t border-white/5 flex items-center justify-center gap-1.5 text-xs text-slate-300">
                  <Mail className="w-3.5 h-3.5 text-[#FF6B35] flex-shrink-0" />
                  <a
                    href={`mailto:${coord.email}`}
                    className="hover:text-white font-mono-tag truncate max-w-[180px] transition-colors"
                    title={`Email ${coord.name}: ${coord.email}`}
                  >
                    {coord.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Graduated Alumni Archive Redirect Banner */}
        <div className="p-6 sm:p-8 rounded-2xl builder-panel border border-white/10 bg-[#121418] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono-tag text-slate-300 bg-white/5 border border-white/10 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#FF6B35]" />
              <span>{alumniBatch.title}</span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
              Founding Leadership ({alumniBatch.graduatedRange})
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              {alumniBatch.note}
            </p>
          </div>

          <a
            href={alumniBatch.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold bg-[#FF5722] hover:bg-[#F4511E] text-white shadow-sm transition-all flex-shrink-0"
          >
            <span>Visit 2024 Senior Site</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
