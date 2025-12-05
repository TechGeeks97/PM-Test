'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { AccessMarkets } from '@/components/sections/AccessMarkets';
import { JoinTraders } from '@/components/sections/JoinTraders';
import { OurMarkets } from '@/components/sections/OurMarkets';
import { EmpowerTrading } from '@/components/sections/EmpowerTrading';
import { SeamlessWithdrawals } from '@/components/sections/SeamlessWithdrawals';
import { DailyUpdates } from '@/components/sections/DailyUpdates';
import { Testimonials } from '@/components/sections/Testimonials';
import { PromotionalBanner } from '@/components/sections/PromotionalBanner';
import { useUserType } from '@/contexts/UserTypeContext';

export default function Home() {
  const { userType } = useUserType();

  return (
    <main className="min-h-screen bg-white">
      <Header />
      {userType === 'personal' ? (
        <>
          <div className="relative">
            <Hero />
          </div>
          <AccessMarkets />
          <JoinTraders />
          <OurMarkets />
          <EmpowerTrading />
          <SeamlessWithdrawals />
          <DailyUpdates />
          <Testimonials />
          <PromotionalBanner />
        </>
      ) : (
        <>
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Institutional Trading</h1>
            <p className="text-lg text-gray-600">Institutional content coming soon...</p>
          </div>
        </>
      )}
      <Footer />
    </main>
  );
}
