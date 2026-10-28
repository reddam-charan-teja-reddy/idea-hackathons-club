'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Calendar, Clock, MapPin, Users, Award, ShieldCheck, Zap, Sparkles, Bot, UserCheck, ExternalLink, Maximize2 } from 'lucide-react';
import { eventData } from '@/data/events';

export const EventOverview: React.FC = () => {
  const [showPosterModal, setShowPosterModal] = useState(false);

  return (
    <section id="ideastorm" className="py-20 sm:py-28 relative z-10 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0E1015]" aria-labelledby="ideastorm-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono-tag uppercase tracking-wider bg-orange-500/10 text-orange-600 dark:text-[#FF6B35] border border-orange-500/30 mb-3">
            <Zap className="w-3.5 h-3.5 text-[#FF5722]" />
            <span>Flagship Departmental Hackathon</span>
          </div>
          <h2 id="ideastorm-title" className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
            {eventData.name}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {eventData.tagline}. An intense 12-hour offline software build sprint featuring automated platform evaluations, mid-sprint breakouts, and expert jury defense.
          </p>
        </div>

        {/* Feature Visual Grid: Official Poster + Live Lab Action */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-14 items-stretch">
          {/* Official Hackathon Poster */}
          <div className="lg:col-span-5 builder-panel p-5 rounded-3xl flex flex-col justify-between shadow-xs relative overflow-hidden group">
            <span className="absolute top-3 right-3 text-slate-400/30 dark:text-white/10 font-mono-tag text-xs select-none">+</span>
            
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono-tag bg-orange-500/10 text-orange-600 dark:text-[#FF6B35] border border-orange-500/25">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Official Event Poster</span>
                </span>
                <span className="text-[11px] font-mono-tag text-slate-500 dark:text-slate-400">
                  {eventData.academicYear}
                </span>
              </div>

              {/* Clickable Poster Frame */}
              <div
                onClick={() => setShowPosterModal(true)}
                className="relative w-full aspect-square rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-black cursor-pointer group-hover:border-orange-500/50 transition-colors shadow-sm"
                title="Click to view full poster"
              >
                <Image
                  src={eventData.posterImage}
                  alt="Official IdeaStorm 2026 Poster"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-contain group-hover:scale-102 transition-transform duration-300"
                  priority
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="px-3 py-1.5 rounded-xl bg-black/75 text-white text-xs font-mono-tag flex items-center gap-1.5 backdrop-blur-xs">
                    <Maximize2 className="w-3.5 h-3.5" /> Enlarge Poster
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-3 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-mono-tag">
                Organized by CSM & CSD
              </span>
              <button
                onClick={() => setShowPosterModal(true)}
                className="text-xs font-bold text-orange-600 dark:text-[#FF6B35] hover:underline font-mono-tag flex items-center gap-1"
              >
                Full Resolution ↗
              </button>
            </div>
          </div>

          {/* Right Column: Live Event Capture & Key Metrics */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            {/* Live Hackathon Lab Action Capture */}
            <div className="builder-panel p-5 rounded-3xl flex-1 flex flex-col justify-between shadow-xs relative overflow-hidden group">
              <span className="absolute top-3 right-3 text-slate-400/30 dark:text-white/10 font-mono-tag text-xs select-none">+</span>
              
              <div className="flex items-center justify-between mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono-tag bg-blue-500/10 text-blue-600 dark:text-sky-400 border border-blue-500/25">
                  <Users className="w-3.5 h-3.5" />
                  <span>On-Campus Action · Lab Room 247</span>
                </span>
                <span className="text-[11px] font-mono-tag text-slate-500 dark:text-slate-400">
                  12-Hour Sprint
                </span>
              </div>

              <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#161820] shadow-sm">
                <Image
                  src={eventData.coverImage}
                  alt="IdeaStorm 2026 Live Lab Coding Sprint"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center group-hover:scale-102 transition-transform duration-300"
                />
              </div>

              <div className="pt-3 mt-3 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
                <span>Over 100+ registered engineering participants hacking side by side.</span>
                <a
                  href={eventData.galleryDriveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 dark:text-[#FF6B35] font-semibold hover:underline flex items-center gap-1"
                >
                  <span>Google Drive Archive</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Quick Specs 4-Pill Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="builder-panel p-3.5 rounded-2xl text-center">
                <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-mono-tag">Date</span>
                <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white block mt-0.5">19 Sep 2026</span>
                <span className="text-[10px] text-orange-600 dark:text-[#FF6B35] font-mono-tag">Saturday</span>
              </div>
              <div className="builder-panel p-3.5 rounded-2xl text-center">
                <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-mono-tag">Format</span>
                <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white block mt-0.5">12 Hours</span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono-tag">7AM – 7PM</span>
              </div>
              <div className="builder-panel p-3.5 rounded-2xl text-center">
                <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-mono-tag">Venue</span>
                <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white block mt-0.5">Room 247</span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono-tag">Tech Block</span>
              </div>
              <div className="builder-panel p-3.5 rounded-2xl text-center">
                <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-mono-tag">Challenges</span>
                <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white block mt-0.5">45 Statements</span>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono-tag">Random Draw</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Execution Milestones & Format */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-orange-600 dark:text-[#FF6B35]" />
              <span>Sprint Architecture & Evaluation Flow</span>
            </h3>
            <span className="text-xs font-mono-tag text-slate-500 dark:text-slate-400 hidden sm:inline-block">
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
                  className={`builder-panel builder-panel-hover p-6 rounded-2xl flex flex-col justify-between shadow-xs relative overflow-hidden ${
                    isFun ? 'border-amber-400/40 bg-amber-500/[0.03] dark:bg-[#16181E]' : ''
                  }`}
                >
                  <span className="absolute top-2 right-2 text-slate-400/20 dark:text-white/10 font-mono-tag text-[10px] select-none">+</span>

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-black font-mono-tag text-orange-600 dark:text-[#FF6B35]">
                        #{stage.step}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono-tag bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10">
                        {stage.duration}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 mb-2">
                      {stage.type === 'technical' && !isAuto && <Zap className="w-4 h-4 text-orange-600 dark:text-[#FF6B35]" />}
                      {isFun && <Sparkles className="w-4 h-4 text-amber-500" />}
                      {isAuto && <Bot className="w-4 h-4 text-sky-500" />}
                      {stage.type === 'jury' && <UserCheck className="w-4 h-4 text-emerald-500" />}
                      <h4 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                        {stage.title}
                      </h4>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-4">
                      {stage.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200 dark:border-white/5 text-[11px] text-slate-500 dark:text-slate-400 font-mono-tag">
                    Evaluation: <span className="text-slate-900 dark:text-white font-medium">{stage.evaluators}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Eligibility & Guidelines Box */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          <div className="lg:col-span-2 builder-panel p-6 sm:p-8 rounded-3xl shadow-xs">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-orange-600 dark:text-[#FF6B35]" />
              <span>Competition Guidelines & Code Standards</span>
            </h4>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
              {eventData.rules.map((rule, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722] mt-2 flex-shrink-0" />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="builder-panel p-6 sm:p-8 rounded-3xl flex flex-col justify-between shadow-xs bg-slate-100/60 dark:bg-[#15171D]">
            <div>
              <span className="text-xs font-mono-tag text-orange-600 dark:text-[#FF6B35] uppercase tracking-widest block mb-1 font-bold">
                Participant Scope
              </span>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Eligible Cohorts</h4>
              <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                {eventData.eligibility.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10">
              <a
                href={eventData.galleryDriveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 transition-colors shadow-xs"
              >
                <span>View Event Captures (Drive)</span>
                <ExternalLink className="w-3.5 h-3.5 text-orange-600 dark:text-[#FF6B35]" />
              </a>
            </div>
          </div>
        </div>

        {/* Modal for Viewing Full Resolution Poster */}
        {showPosterModal && (
          <div
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setShowPosterModal(false)}
          >
            <div className="relative max-w-3xl max-h-[92vh] w-full rounded-3xl overflow-hidden border border-white/20 bg-[#0B0C0E] p-4 flex flex-col items-center">
              <div className="w-full flex items-center justify-between pb-3 mb-2 border-b border-white/10">
                <span className="text-sm font-bold text-white font-mono-tag">IdeaStorm 2026 — Official Poster</span>
                <button
                  onClick={() => setShowPosterModal(false)}
                  className="px-3 py-1 rounded-lg bg-white/10 text-white hover:bg-white/20 font-mono-tag text-xs"
                >
                  Close ✕
                </button>
              </div>
              <div className="relative w-full h-[70vh] sm:h-[80vh]">
                <Image
                  src={eventData.posterImage}
                  alt="IdeaStorm 2026 Full Poster"
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
