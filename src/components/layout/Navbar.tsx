'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ExternalLink, History } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { ThemeToggle } from './ThemeToggle';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#about' },
    { label: 'IdeaStorm 2026', href: '#ideastorm' },
    { label: 'Winners', href: '#winners' },
    { label: '45 Challenges', href: '#problems' },
    { label: 'Leadership', href: '#team' },
    { label: 'Gallery', href: '#gallery' },
  ];

  return (
    <nav
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? 'bg-white/90 dark:bg-[#090A0E]/90 backdrop-blur-md border-b border-slate-200/80 dark:border-white/10 shadow-sm dark:shadow-md dark:shadow-black/40 py-2.5'
          : 'bg-transparent py-3.5'
      }`}
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link href="#about" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5722] rounded-xl p-1">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-slate-100 dark:bg-[#16181F] border border-slate-200 dark:border-white/10 flex items-center justify-center overflow-hidden flex-shrink-0 group-hover:border-[#FF5722]/60 transition-colors shadow-xs">
              <Image
                src={siteConfig.club.logoImage}
                alt="Idea Hackathons Club Logo"
                width={40}
                height={40}
                className="object-contain p-0.5"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white group-hover:text-[#FF5722] transition-colors">
                {siteConfig.club.name}
              </span>
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 font-mono-tag">
                {siteConfig.institution.shortName} · {siteConfig.club.branchTag}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links & Controls */}
          <div className="hidden lg:flex items-center gap-5">
            <ul className="flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-slate-300">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="px-3 py-1.5 rounded-lg hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5722]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Previous Year (2024-2025) Batch Redirect */}
            <a
              href={siteConfig.archive.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-orange-500/10 text-orange-600 dark:text-[#FF6B35] border border-orange-500/25 hover:bg-[#FF5722] hover:text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5722]"
              title="View the 2024–2025 previous batch chapter"
            >
              <History className="w-3.5 h-3.5" />
              <span>Previous Batch (2024–25) ↗</span>
            </a>

            {/* Dark / Light Mode Switcher */}
            <ThemeToggle />
          </div>

          {/* Mobile Actions */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />

            <a
              href={siteConfig.archive.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-orange-500/10 text-orange-600 dark:text-[#FF6B35] border border-orange-500/25"
              title="2024-25 Batch"
            >
              <span>2024–25</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5722]"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6 text-[#FF5722]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden border-b border-slate-200 dark:border-white/10 bg-white/98 dark:bg-[#090A0E]/98 px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200 shadow-lg">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-orange-500/10 hover:text-orange-600 dark:hover:text-[#FF6B35] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2 border-t border-slate-200 dark:border-white/10 mt-2">
              <a
                href={siteConfig.archive.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-semibold bg-orange-500/10 text-orange-600 dark:text-[#FF6B35]"
              >
                <span>Previous Batch (2024–2025) Archive</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
