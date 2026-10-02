import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import ScrollProgressBar from './components/ScrollProgressBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import HowItWorks from './components/HowItWorks';
import Categories from './components/Categories';
import GroceryPackages from './components/GroceryPackages';
import PayGradually from './components/PayGradually';
import Delivery from './components/Delivery';
import Reviews from './components/Reviews';
import InstagramStrip from './components/InstagramStrip';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    // Synchronize Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    // Refresh ScrollTrigger once DOM layout stabilizes
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      clearTimeout(refreshTimer);
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#FDF8F4] text-[#6B4F45] selection:bg-[#F4D9CF] selection:text-[#3E2C27]">
      {/* Tactile Grain Noise Overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Boutique Preloader */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {/* Desktop Luxury Cursor Follower */}
      <CustomCursor />

      {/* Global Scroll Progress Indicator */}
      <ScrollProgressBar />

      {/* Floating Translucent Header */}
      <Navbar />

      {/* Main Single-Page Sections */}
      <main>
        {/* 1. Hero: 100svh Asymmetric Layout with Arch Visuals */}
        <Hero />

        {/* 2. Continuous Velocity Marquee */}
        <Marquee />

        {/* 3. Sticky How It Works 4-Step Protocol */}
        <HowItWorks />

        {/* 4. Horizontal Categories Track */}
        <Categories />

        {/* 5. Dark Cocoa Grocery Hampers Section */}
        <GroceryPackages />

        {/* 6. Pay Gradually (Instalments) Simulator */}
        <PayGradually />

        {/* 7. Nigeria Logistics Hubs & Authenticity Guarantee */}
        <Delivery />

        {/* 8. Verified WhatsApp Chat Testimonials */}
        <Reviews />

        {/* 9. Tilted Editorial Instagram Gallery */}
        <InstagramStrip />

        {/* 10. Interactive FAQ Accordion */}
        <FAQ />

        {/* 11. Grand Bespoke Shopping Call to Action */}
        <FinalCTA />
      </main>

      {/* 12. Deep Cocoa Footer with Schedule & Back-to-Top */}
      <Footer />

      {/* 13. Persistent WhatsApp Concierge Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
