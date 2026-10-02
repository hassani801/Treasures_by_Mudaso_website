import { useEffect, useState, useRef } from 'react';
import { ShoppingBag, ArrowRight, CheckCircle2, Sparkles, Clock } from 'lucide-react';
import { BRAND_DATA, getWhatsAppUrl } from '../data/content';

export default function Hero() {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax mouse move effect for desktop
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / 45;
      const y = (e.clientY - innerHeight / 2) / 45;
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] pt-24 pb-12 lg:py-0 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#FDF8F4] via-[#FDF8F4] to-[#F4D9CF]/30"
    >
      {/* Background Decorative Soft Gradients & Leaf Elements */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#F4D9CF]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[30rem] h-[30rem] bg-[#E3A58F]/20 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Container */}
      <div className="max-w-7xl w-full mx-auto px-6 md:px-10 py-6 md:py-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
        {/* Left Column: Typography & CTAs (7 cols on lg) */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 md:space-y-8">
          {/* Script Accent Tagline */}
          <div className="flex items-center gap-2">
            <span className="font-script text-2xl md:text-3xl text-[#C98270]">
              Your UK Personal Shopper
            </span>
            <div className="w-8 h-[1px] bg-[#C98270]/60 hidden sm:block" />
            <span className="text-[11px] font-serif uppercase tracking-[0.25em] text-[#6B4F45]/80 font-semibold hidden sm:inline">
              London · Abuja · Kano
            </span>
          </div>

          {/* Primary Serif Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-semibold text-[#3E2C27] leading-[1.08] tracking-tight">
            UK Treasures,{' '}
            <span className="font-serif italic font-normal text-[#C98270] underline decoration-[#F4D9CF] decoration-wavy decoration-1 underline-offset-8">
              Delivered
            </span>{' '}
            to Your Door in Nigeria.
          </h1>

          {/* Value Proposition Description */}
          <p className="font-sans text-sm sm:text-base md:text-lg text-[#6B4F45]/90 max-w-xl leading-relaxed">
            Hand-shopped by our UK concierge from Selfridges, Harrods, Marks & Spencer, and boutique flagships.
            Perfumes, British groceries, vitamins, and luxury gifts delivered safely to your doorstep with our flexible{' '}
            <strong className="font-medium text-[#3E2C27]">pay gradually (instalment)</strong> plan.
          </p>

          {/* CTA Button Group */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <a
              href={getWhatsAppUrl("Hello! I'd like to place an order for genuine UK items.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-[#C98270] via-[#E3A58F] to-[#C98270] hover:opacity-95 shadow-[0_8px_24px_rgba(201,130,112,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Order on WhatsApp</span>
            </a>

            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#6B4F45] bg-white border border-[#E3A58F]/50 hover:border-[#C98270] hover:bg-[#F4D9CF]/30 shadow-sm transition-all"
            >
              <span>See How It Works</span>
              <ArrowRight className="w-4 h-4 text-[#C98270]" />
            </a>
          </div>

          {/* Trust Highlights Row */}
          <div className="pt-4 border-t border-[#F4D9CF]/80 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="flex items-center gap-2 text-xs text-[#6B4F45]">
              <CheckCircle2 className="w-4 h-4 text-[#C98270] shrink-0" />
              <span className="font-medium">100% Genuine UK Sourced</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#6B4F45]">
              <Sparkles className="w-4 h-4 text-[#E3A58F] shrink-0" />
              <span className="font-medium">Weekly Direct Air Flights</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#6B4F45]">
              <Clock className="w-4 h-4 text-[#C98270] shrink-0" />
              <span className="font-medium">Pay Gradually & Collect</span>
            </div>
          </div>
        </div>

        {/* Right Column: Multi-Arch Image Collage with Parallax (5 cols on lg) */}
        <div className="lg:col-span-5 relative w-full flex items-center justify-center min-h-[380px] sm:min-h-[460px] lg:min-h-[560px]">
          {/* Main Central Arch Image */}
          <div
            className="relative z-10 w-48 sm:w-56 md:w-64 h-72 sm:h-84 md:h-96 rounded-t-[120px] rounded-b-2xl overflow-hidden shadow-[0_16px_40px_rgba(107,79,69,0.18)] border-4 border-white transition-transform duration-300 ease-out will-change-transform"
            style={{
              transform: `translate3d(${mouseOffset.x * -0.7}px, ${mouseOffset.y * -0.7}px, 0)`,
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80"
              alt="Luxury French & British Fragrances in boutique gift setting"
              className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3E2C27]/40 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-0 right-0 text-center">
              <span className="font-script text-white text-xl drop-shadow">Luxury Fragrances</span>
            </div>
          </div>

          {/* Secondary Arch Image (Left, lower) */}
          <div
            className="absolute -left-2 sm:left-2 bottom-4 sm:bottom-8 z-20 w-32 sm:w-40 md:w-44 h-44 sm:h-56 rounded-t-[90px] rounded-b-xl overflow-hidden shadow-[0_14px_32px_rgba(107,79,69,0.2)] border-3 border-white transition-transform duration-300 ease-out will-change-transform"
            style={{
              transform: `translate3d(${mouseOffset.x * 0.9}px, ${mouseOffset.y * 0.9}px, 0)`,
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80"
              alt="M&S British Groceries and pantry delicacies"
              className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3E2C27]/50 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-2 left-0 right-0 text-center">
              <span className="font-serif text-[11px] uppercase tracking-wider text-white font-medium drop-shadow">
                British Pantry
              </span>
            </div>
          </div>

          {/* Tertiary Arch Image (Right, upper) */}
          <div
            className="absolute -right-2 sm:right-2 top-2 sm:top-6 z-0 w-32 sm:w-40 md:w-44 h-44 sm:h-56 rounded-t-[90px] rounded-b-xl overflow-hidden shadow-[0_14px_32px_rgba(107,79,69,0.15)] border-3 border-white transition-transform duration-300 ease-out will-change-transform"
            style={{
              transform: `translate3d(${mouseOffset.x * 1.2}px, ${mouseOffset.y * 1.2}px, 0)`,
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80"
              alt="Curated London Gift Hamper with satin ribbon"
              className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3E2C27]/50 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-2 left-0 right-0 text-center">
              <span className="font-serif text-[11px] uppercase tracking-wider text-white font-medium drop-shadow">
                Boutique Gifting
              </span>
            </div>
          </div>

          {/* Floating Rotating Circular Seal Badge */}
          <div
            className="absolute -top-4 left-6 sm:left-10 z-30 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#FDF8F4]/95 border border-[#C98270]/40 shadow-lg shadow-[#C98270]/20 flex items-center justify-center pointer-events-none animate-float"
          >
            {/* Circular rotating text */}
            <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
              <path
                id="circlePath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="none"
              />
              <text className="font-serif text-[9px] uppercase tracking-[0.22em] fill-[#6B4F45] font-semibold">
                <textPath href="#circlePath" startOffset="0%">
                  GENUINE UK PRODUCTS • DELIVERED IN NIGERIA •
                </textPath>
              </text>
            </svg>
            {/* Center crown or gift icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[#C98270]" />
            </div>
          </div>

          {/* Floating Schedule Card */}
          <div
            className="absolute -bottom-4 right-4 sm:right-8 z-30 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-[#F4D9CF] shadow-xl shadow-[#6B4F45]/10 flex items-center gap-3 animate-float-delay"
          >
            <div className="w-8 h-8 rounded-full bg-[#F4D9CF] flex items-center justify-center text-[#C98270]">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] font-serif uppercase tracking-widest text-[#C98270] font-semibold">
                Dispatch Schedule
              </p>
              <p className="text-xs font-semibold text-[#3E2C27]">Mon · Tue · Fri Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
