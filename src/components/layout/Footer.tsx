import React from 'react';
import Image from 'next/image';
import { Mail, MapPin, ExternalLink, History } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export const Footer: React.FC = () => {
  const { institution, club, contact, copyright } = siteConfig;

  return (
    <footer className="w-full bg-slate-900 dark:bg-[#050608] border-t border-slate-800 dark:border-white/10 text-slate-400 py-16 relative z-10" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-14 border-b border-slate-800 dark:border-white/5">
          {/* Column 1: Club Brand & Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-slate-800 dark:bg-[#16181F] border border-slate-700 dark:border-white/10 flex items-center justify-center p-1">
                <Image
                  src={club.logoImage}
                  alt={club.name}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">
                {club.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {club.tagline}. Driven by students of {club.branchTag} at {institution.shortName}.
            </p>
            <p className="text-[11px] text-slate-400">
              {institution.accreditation}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4 font-mono-tag">
              Site Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href="#about" className="hover:text-[#FF5722] transition-colors">
                  Overview & Mission
                </a>
              </li>
              <li>
                <a href="#ideastorm" className="hover:text-[#FF5722] transition-colors">
                  IdeaStorm 2026 Format
                </a>
              </li>
              <li>
                <a href="#winners" className="hover:text-[#FF5722] transition-colors">
                  Winning Teams Ledger
                </a>
              </li>
              <li>
                <a href="#problems" className="hover:text-[#FF5722] transition-colors">
                  45 Problem Statements
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-[#FF5722] transition-colors">
                  Faculty & Student Team
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#FF5722] transition-colors">
                  Event Photo Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Institutional Portals */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4 font-mono-tag">
              Institutional Links
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a
                  href={institution.portals.main}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#FF5722] transition-colors"
                >
                  <span>PVPSIT Official Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={institution.portals.csm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#FF5722] transition-colors"
                >
                  <span>CSE (AI & ML) Department</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={institution.portals.csd}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#FF5722] transition-colors"
                >
                  <span>CSE (Data Science) Department</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.archive.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-orange-400 hover:text-white font-semibold transition-colors"
                >
                  <History className="w-3.5 h-3.5" />
                  <span>Previous Batch (2024–2025) Archive</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Venue */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4 font-mono-tag">
              Campus Hub & Inquiries
            </h4>
            <div className="flex items-start gap-2.5 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-[#FF5722] flex-shrink-0 mt-0.5" />
              <span>
                {contact.venue}, {contact.location}, {institution.campusAddress} - {institution.postalCode}
              </span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-300 pt-1">
              <Mail className="w-4 h-4 text-[#FF5722] flex-shrink-0" />
              <a href={`mailto:${contact.officialEmail}`} className="hover:text-[#FF5722] transition-colors font-mono-tag">
                {contact.officialEmail}
              </a>
            </div>
            <div className="pt-2">
              <span className="text-[11px] text-slate-400 block mb-1.5">Community Channels:</span>
              <div className="flex flex-wrap gap-1.5">
                {contact.socials.map((social) => (
                  <span
                    key={social.platform}
                    className="text-[10px] font-mono-tag px-2 py-0.5 rounded bg-slate-800 dark:bg-white/5 text-slate-400 border border-slate-700 dark:border-white/5"
                    title="Community channel launching soon"
                  >
                    {social.label} (Soon)
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left font-mono-tag">
          <p>{copyright}</p>
          <p className="text-[11px]">
            Engineered for Idea Hackathons Club · Autonomous Institution
          </p>
        </div>
      </div>
    </footer>
  );
};
