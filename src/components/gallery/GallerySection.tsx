import React from 'react';
import Image from 'next/image';
import { Camera, ExternalLink, FolderGit2, Image as ImageIcon } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export const GallerySection: React.FC = () => {
  const { gallery } = siteConfig;

  return (
    <section id="gallery" className="py-20 sm:py-28 relative z-10 border-t border-white/10 bg-[#08090C]" aria-labelledby="gallery-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono-tag uppercase tracking-wider bg-[#FF5722]/10 text-[#FF6B35] border border-[#FF5722]/30 mb-3">
            <Camera className="w-3.5 h-3.5 text-[#FF5722]" />
            <span>Event Photography & Archives</span>
          </div>
          <h2 id="gallery-heading" className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            IdeaStorm 2026 Moments
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            High-resolution captures of the 12-hour build sprint, team collaborations, and jury evaluations hosted on our official cloud repository.
          </p>
        </div>

        {/* Featured Album Hero Card */}
        <div className="max-w-4xl mx-auto builder-panel rounded-2xl overflow-hidden border border-white/10 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image Preview */}
            <div className="relative h-64 sm:h-80 md:h-auto min-h-[260px] bg-[#111318]">
              <Image
                src="/images/events/ideastorm-capture.jpeg"
                alt="IdeaStorm 2026 Hackathon Moments"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121418] via-transparent to-transparent md:hidden" />
            </div>

            {/* Album Info & Action */}
            <div className="p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono-tag bg-white/5 text-slate-300 border border-white/10 mb-4">
                  <FolderGit2 className="w-3.5 h-3.5 text-[#FF6B35]" />
                  <span>Google Drive Cloud Repo</span>
                </div>

                <h3 className="text-2xl font-black text-white mb-3">
                  {gallery.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  Access the complete high-resolution photo repository including team presentations, evaluation checkpoints, prize distributions, and candid coding moments.
                </p>
              </div>

              <div>
                <a
                  href={gallery.driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-[#FF5722] hover:bg-[#F4511E] text-white transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5722]"
                >
                  <ImageIcon className="w-4 h-4 text-white" />
                  <span>Open Album in Google Drive</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <span className="text-[11px] text-slate-400 text-center block mt-2">
                  Official PVPSIT student cloud repository
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
