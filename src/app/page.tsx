import React from 'react';
import { InstitutionBanner } from '@/components/layout/InstitutionBanner';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/hero/Hero';
import { SponsorSpotlight } from '@/components/sponsor/SponsorSpotlight';
import { EventOverview } from '@/components/event/EventOverview';
import { WinnersPodium } from '@/components/winners/WinnersPodium';
import { ProblemExplorer } from '@/components/problems/ProblemExplorer';
import { LeadershipSection } from '@/components/team/LeadershipSection';
import { GallerySection } from '@/components/gallery/GallerySection';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#07090E] text-[#F8FAFC]">
      {/* 1. Official Institutional Top Banner */}
      <InstitutionBanner />

      {/* 2. Glassmorphic Navigation Bar */}
      <Navbar />

      {/* 3. Main Single Page Flow */}
      <main className="flex-1 w-full flex flex-col">
        {/* Hero Section with Live Metrics */}
        <Hero />

        {/* Official Sponsor Spotlight (CodeTantra) */}
        <SponsorSpotlight />

        {/* Flagship Event Overview: IdeaStorm 2026 */}
        <EventOverview />

        {/* Hall of Fame: 10 Winning Teams Ledger */}
        <WinnersPodium />

        {/* 45 Real-World Problem Statements Explorer */}
        <ProblemExplorer />

        {/* Leadership: Faculty Mentors & Active 2023-2027 Student Core */}
        <LeadershipSection />

        {/* Official Photography & Cloud Repository */}
        <GallerySection />
      </main>

      {/* 4. Footer */}
      <Footer />
    </div>
  );
}
