'use client';

import { LanguageProvider } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Overview from '@/components/Overview';
import Rooms from '@/components/Rooms';
import Amenities from '@/components/Amenities';
import Location from '@/components/Location';
import Reviews from '@/components/Reviews';
import Gallery from '@/components/Gallery';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <Overview />
        <Rooms />
        <Amenities />
        <Location />
        <Reviews />
        <Gallery />
        <CTA />
        <Footer />
        <WhatsAppButton />
      </main>
    </LanguageProvider>
  );
}
