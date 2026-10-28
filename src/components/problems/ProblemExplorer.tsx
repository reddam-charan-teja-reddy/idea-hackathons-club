'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { Search, Tag, X, Code, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { problemStatements, problemTracks, ProblemStatement } from '@/data/problems';

const ITEMS_PER_PAGE = 6;

export const ProblemExplorer: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Filter problems based on track and search query
  const filteredProblems = useMemo(() => {
    return problemStatements.filter((problem) => {
      const matchesTrack = selectedTrack === 'all' || problem.category === selectedTrack;
      const query = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !query ||
        problem.title.toLowerCase().includes(query) ||
        problem.description.toLowerCase().includes(query) ||
        problem.tags.some((t) => t.toLowerCase().includes(query));
      return matchesTrack && matchesQuery;
    });
  }, [selectedTrack, searchQuery]);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedTrack, searchQuery]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredProblems.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProblems = useMemo(() => {
    return filteredProblems.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredProblems, startIndex]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      const section = document.getElementById('problems');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <section id="problems" className="py-20 sm:py-28 relative z-10 builder-grid-bg border-t border-slate-200 dark:border-white/10" aria-labelledby="problems-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono-tag uppercase tracking-wider bg-orange-500/10 text-orange-600 dark:text-[#FF6B35] border border-orange-500/30 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#FF5722]" />
            <span>Curated Challenge Curriculum</span>
          </div>
          <h2 id="problems-heading" className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
            45 Real-World Problem Statements
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A comprehensive catalog of AI, Full-Stack, and systems engineering challenges curated for IdeaStorm hackathons and semester prototype sprints.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="mb-10 flex flex-col gap-5">
          {/* Search Input */}
          <div className="relative w-full max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search challenges by keyword (e.g., ATS, Legal, Audio, Triage)..."
              className="w-full pl-11 pr-10 py-3.5 rounded-2xl bg-white dark:bg-[#121418] text-sm text-slate-900 dark:text-white placeholder-slate-400 border border-slate-200 dark:border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5722] transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-white"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Track Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {problemTracks.map((track) => {
              const isActive = selectedTrack === track.id;
              return (
                <button
                  key={track.id}
                  onClick={() => setSelectedTrack(track.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-[#FF5722] text-white shadow-xs'
                      : 'bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/5 shadow-2xs'
                  }`}
                >
                  {track.label}
                </button>
              );
            })}
          </div>

          {/* Active Result Count & Reset */}
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-2 max-w-xl mx-auto w-full font-mono-tag">
            <span>
              Showing {filteredProblems.length > 0 ? startIndex + 1 : 0}–
              {Math.min(startIndex + ITEMS_PER_PAGE, filteredProblems.length)} of {filteredProblems.length} challenges
            </span>
            {(selectedTrack !== 'all' || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedTrack('all');
                  setSearchQuery('');
                }}
                className="text-orange-600 dark:text-[#FF6B35] hover:underline font-semibold"
              >
                Reset filters
              </button>
            )}
          </div>
        </div>

        {/* Paginated Problems Grid */}
        {filteredProblems.length > 0 ? (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {currentProblems.map((prob) => (
                <article
                  key={prob.id}
                  className="builder-panel builder-panel-hover p-6 rounded-3xl flex flex-col justify-between shadow-xs relative overflow-hidden group"
                >
                  <span className="absolute top-2 right-2 text-slate-400/20 dark:text-white/10 font-mono-tag text-[10px] select-none">+</span>

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono-tag text-orange-600 dark:text-[#FF6B35] font-black">
                        #{prob.number.toString().padStart(2, '0')}
                      </span>
                      <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/5 font-semibold">
                        {prob.categoryLabel}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                      {prob.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-4 line-clamp-4">
                      {prob.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200 dark:border-white/5 flex flex-wrap gap-1.5 items-center">
                    {prob.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 text-[10px] font-mono-tag text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded"
                      >
                        <Tag className="w-2.5 h-2.5 text-orange-600 dark:text-[#FF6B35]" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl builder-panel max-w-2xl mx-auto shadow-xs">
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono-tag">
                  Page {currentPage} of {totalPages}
                </span>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white dark:bg-white/5 text-slate-800 dark:text-white border border-slate-200 dark:border-transparent hover:bg-slate-100 dark:hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-2xs"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </button>

                  <div className="hidden sm:flex items-center gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`w-8 h-8 rounded-xl text-xs font-mono-tag font-bold transition-all ${
                          currentPage === page
                            ? 'bg-[#FF5722] text-white shadow-xs'
                            : 'bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-transparent hover:bg-slate-100 dark:hover:bg-white/10'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white dark:bg-white/5 text-slate-800 dark:text-white border border-slate-200 dark:border-transparent hover:bg-slate-100 dark:hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-2xs"
                  >
                    <span>Next</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-16 p-8 rounded-3xl builder-panel max-w-md mx-auto shadow-xs">
            <Code className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">No matching challenges</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
              Try searching with a different term or clear the current filter.
            </p>
            <button
              onClick={() => {
                setSelectedTrack('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-[#FF5722] text-white hover:bg-[#F4511E] transition-colors"
            >
              Reset Search & Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
