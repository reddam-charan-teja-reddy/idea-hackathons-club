import React from 'react';
import Image from 'next/image';
import { GraduationCap, Users, Mail, ExternalLink, ShieldCheck, Sparkles, Award } from 'lucide-react';
import { teamData } from '@/data/team';

export const LeadershipSection: React.FC = () => {
  const { departmentLeadership, facultyCoordinators, currentBatch, previousBatch } = teamData;

  return (
    <section id="team" className="py-20 sm:py-28 relative z-10 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#090A0E]" aria-labelledby="team-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono-tag uppercase tracking-wider bg-orange-500/10 text-orange-600 dark:text-[#FF6B35] border border-orange-500/30 mb-3">
            <Users className="w-3.5 h-3.5 text-[#FF5722]" />
            <span>Club Leadership & Mentorship</span>
          </div>
          <h2 id="team-heading" className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
            Faculty Mentors & Student Core
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Governed by departmental leadership and faculty mentors, driven by an active 8-member student executive committee across CSM and CSD.
          </p>
        </div>

        {/* 1. Department Leadership & Central Coordination */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-orange-600 dark:text-[#FF6B35]" />
              <span>Department Leadership & Central Mentorship</span>
            </h3>
            <span className="text-xs font-mono-tag text-slate-500 dark:text-slate-400">
              CSM & CSD Patronage
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {departmentLeadership.map((leader) => (
              <div
                key={leader.id}
                className="builder-panel builder-panel-hover p-6 sm:p-7 rounded-2xl flex flex-col sm:flex-row items-center gap-6 shadow-xs relative overflow-hidden group"
              >
                {/* Tech card corner decoration */}
                <span className="absolute top-2 right-2 text-slate-400/30 dark:text-white/10 font-mono-tag text-xs select-none">+</span>
                
                {/* Photo */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#161820] flex-shrink-0 shadow-sm">
                  <Image
                    src={leader.photo}
                    alt={leader.name}
                    fill
                    sizes="(max-width: 640px) 112px, 128px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 text-center sm:text-left">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold font-mono-tag bg-orange-500/10 text-orange-600 dark:text-[#FF6B35] border border-orange-500/25 mb-2">
                    {leader.role}
                  </span>
                  <h4 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-1 tracking-tight">
                    {leader.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-semibold mb-1">
                    {leader.title}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-normal">
                    {leader.department}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Faculty Coordinators */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-orange-600 dark:text-[#FF6B35]" />
              <span>Faculty Coordinators</span>
            </h3>
            <span className="text-xs font-mono-tag text-slate-500 dark:text-slate-400">
              Department Coordinators
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {facultyCoordinators.map((mentor) => (
              <div
                key={mentor.id}
                className="builder-panel builder-panel-hover p-6 sm:p-7 rounded-2xl flex flex-col sm:flex-row items-center gap-6 shadow-xs relative overflow-hidden group"
              >
                <span className="absolute top-2 right-2 text-slate-400/30 dark:text-white/10 font-mono-tag text-xs select-none">+</span>
                
                {/* Photo Frame */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#161820] flex-shrink-0 shadow-sm">
                  <Image
                    src={mentor.photo}
                    alt={mentor.name}
                    fill
                    sizes="(max-width: 640px) 112px, 128px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 text-center sm:text-left">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold font-mono-tag bg-blue-500/10 text-blue-600 dark:text-sky-400 border border-blue-500/25 mb-2">
                    {mentor.role}
                  </span>
                  <h4 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-1 tracking-tight">
                    {mentor.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-semibold mb-1">
                    {mentor.title}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-normal">
                    {mentor.department}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Student Coordinators (Current 2023–2027 Cohort) */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-orange-600 dark:text-[#FF6B35]" />
              <span>Student Coordinators ({currentBatch.academicYear})</span>
            </h3>
            <span className="text-xs font-mono-tag text-slate-500 dark:text-slate-400">
              Balanced 4 CSM + 4 CSD Coordinators
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {currentBatch.members.map((coord) => (
              <div
                key={coord.id}
                className="builder-panel builder-panel-hover p-5 rounded-2xl flex flex-col items-center text-center justify-between shadow-xs relative overflow-hidden group"
              >
                <span className="absolute top-2 right-2 text-slate-400/20 dark:text-white/10 font-mono-tag text-[10px] select-none">+</span>

                <div className="flex flex-col items-center w-full">
                  {/* Portrait or High-Quality Monogram Avatar */}
                  <div className="relative w-24 h-24 rounded-2xl overflow-hidden mb-4 border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#161820] flex items-center justify-center shadow-xs">
                    {coord.photo ? (
                      <Image
                        src={coord.photo}
                        alt={coord.name}
                        fill
                        sizes="96px"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-slate-100 dark:bg-[#181B22] text-orange-600 dark:text-[#FF6B35]">
                        <span className="text-2xl font-black font-mono-tag">
                          {coord.initials}
                        </span>
                        <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-widest mt-0.5 font-bold">
                          {coord.departmentCode}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Name */}
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-1 line-clamp-1" title={coord.name}>
                    {coord.name}
                  </h4>

                  {/* Roll Number Badge */}
                  <span className="text-xs font-mono-tag text-orange-600 dark:text-[#FF6B35] font-semibold mb-2">
                    {coord.rollNumber}
                  </span>

                  {/* Department Badge */}
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10 mb-3">
                    {coord.department}
                  </span>
                </div>

                {/* Email (Derived strictly from roll number) */}
                <div className="w-full pt-3 border-t border-slate-200/80 dark:border-white/5 flex items-center justify-center gap-1.5 text-xs text-slate-600 dark:text-slate-300">
                  <Mail className="w-3.5 h-3.5 text-orange-600 dark:text-[#FF6B35] flex-shrink-0" />
                  <a
                    href={`mailto:${coord.email}`}
                    className="hover:text-orange-600 dark:hover:text-white font-mono-tag truncate max-w-[180px] transition-colors"
                    title={`Email ${coord.name}: ${coord.email}`}
                  >
                    {coord.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Previous Batch (2024–2025) Archive Card */}
        <div className="p-6 sm:p-8 rounded-2xl builder-panel border border-slate-200 dark:border-white/10 bg-white dark:bg-[#111319] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-xs">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono-tag text-orange-600 dark:text-[#FF6B35] bg-orange-500/10 border border-orange-500/25 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{previousBatch.title}</span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-1">
              Previous Leadership ({previousBatch.batchYear})
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl">
              {previousBatch.note}
            </p>
          </div>

          <a
            href={previousBatch.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold bg-[#FF5722] hover:bg-[#F4511E] text-white shadow-sm transition-all flex-shrink-0"
          >
            <span>Visit 2024–25 Batch Site</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
