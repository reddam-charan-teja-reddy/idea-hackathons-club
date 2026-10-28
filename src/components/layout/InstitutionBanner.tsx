import React from 'react';
import Image from 'next/image';
import { siteConfig } from '@/data/siteConfig';

export const InstitutionBanner: React.FC = () => {
  const { institution } = siteConfig;

  return (
    <header className="w-full bg-[#05070B] border-b border-white/10 relative z-30" role="banner">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="relative w-full h-[65px] sm:h-[80px] md:h-[95px] lg:h-[105px] overflow-hidden">
          <Image
            src={institution.bannerImage}
            alt={`${institution.fullName} Banner`}
            fill
            priority
            sizes="100vw"
            className="object-contain sm:object-fill"
          />
        </div>
      </div>
    </header>
  );
};
