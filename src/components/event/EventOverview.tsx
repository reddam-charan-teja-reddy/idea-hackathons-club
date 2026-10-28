import React from 'react';
import { Calendar, Clock, MapPin, Users, Award, ShieldCheck, Zap, Sparkles, Bot, UserCheck, ExternalLink } from 'lucide-react';
import { eventData } from '@/data/events';

export const EventOverview: React.FC = () => {
  return (
    <section id="ideastorm" className="py-20 sm:py-28 relative z-10 border-t border-white/10 bg-[#0E1015]" aria-labelledby="ideastorm-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono-tag uppercase tracking-wider bg-[#FF5722]/10 text-[#FF6B35] border border-[#FF5722]/30 mb-3">
            <Zap className="w-3.5 h-3.5 text-[#FF5722]" />
            <span>Flagship Departmental Hackathon</span>
          </div>
          <h2 id="ideastorm-title" className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            {eventData.name}
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            {eventData.tagline}. An intense 12-hour offline software build sprint featuring automated platform evaluations, mid-sprint breakouts, and expert jury defense.
          </p>
        </div>

        {/* Top Info Banner & Key Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          <div className="builder-panel p-5 rounded-2xl flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-[#FF5722]/10 text-[#FF6B35] border border-[#FF5722]/25 flex-shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-slate-400 block font-medium">Date & Day</span>
              <span className="text-sm sm:text-base font-bold text-white">{eventData.date}</span>
              <span className="text-xs text-[#FF6B35] block">{eventData.day}</span>
            </div>
          </div>

          <div className="builder-panel p-5 rounded-2xl flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-white/5 text-slate-300 border border-white/10 flex-shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-slate-400 block font-medium">Sprint Time</span>
              <span className="text-sm sm:text-base font-bold text-white">07:00 AM – 07:00 PM</span>
              <span className="text-xs text-slate-400 block">12 Hours Non-Stop</span>
            </div>
          </div>

          <div className="builder-panel p-5 rounded-2xl flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-white/5 text-slate-300 border border-white/10 flex-shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-slate-400 block font-medium">Campus Venue</span>
              <span className="text-sm sm:text-base font-bold text-white">{eventData.venue}</span>
              <span className="text-xs text-slate-400 block">Mode: {eventData.mode}</span>
            </div>
          </div>

          <div className="builder-panel p-5 rounded-2xl flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-white/5 text-slate-300 border border-white/10 flex-shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-slate-400 block font-medium">Team Format</span>
              <span className="text-sm sm:text-base font-bold text-white">{eventData.teamSize}</span>
              <span className="text-xs text-slate-400 block">45 Pre-Curated Topics</span>
            </div>
          </div>
        </div>

        {/* 4 Execution Milestones & Format */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-[#FF6B35]" />
              <span>Sprint Architecture & Evaluation Flow</span>
            </h3>
            <span className="text-xs font-mono-tag text-slate-400 hidden sm:inline-block">
              12 Hours Non-Stop
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {eventData.stages.map((stage) => {
              const isFun = stage.type === 'fun';
              const isAuto = stage.step === '03';

              return (
                <div
                  key={stage.step}
                  className={`builder-panel builder-panel-hover p-6 rounded-2xl flex flex-col justify-between ${
                    isFun ? 'border-amber-500/30 bg-[#16181E]' : ''
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-black font-mono-tag text-[#FF6B35]">
                        #{stage.step}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono-tag bg-white/5 text-slate-300 border border-white/10">
                        {stage.duration}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 mb-2">
                      {stage.type === 'technical' && !isAuto && <Zap className="w-4 h-4 text-[#FF6B35]" />}
                      {isFun && <Sparkles className="w-4 h-4 text-amber-400" />}
                      {isAuto && <Bot className="w-4 h-4 text-cyan-400" />}
                      {stage.type === 'jury' && <UserCheck className="w-4 h-4 text-emerald-400" />}
                      <h4 className="text-base font-bold text-white leading-snug">
                        {stage.title}
                      </h4>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-4">
                      {stage.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/5 text-[11px] text-slate-400 font-mono-tag">
                    Evaluation: <span className="text-white">{stage.evaluators}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Eligibility & Guidelines Box */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          <div className="lg:col-span-2 builder-panel p-6 sm:p-8 rounded-2xl">
            <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#FF6B35]" />
              <span>Competition Guidelines & Code Standards</span>
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              {eventData.rules.map((rule, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722] mt-2 flex-shrink-0" />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="builder-panel p-6 sm:p-8 rounded-2xl flex flex-col justify-between bg-[#15171D]">
            <div>
              <span className="text-xs font-mono-tag text-[#FF6B35] uppercase tracking-widest block mb-1">
                Participant Scope
              </span>
              <h4 className="text-lg font-bold text-white mb-3">Eligible Cohorts</h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {eventData.eligibility.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#FF5722]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <a
                href={eventData.galleryDriveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors"
              >
                <span>View Event Captures (Drive)</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#FF6B35]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
