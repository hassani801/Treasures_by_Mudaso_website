import { ShoppingBag, Sparkles, HeartHandshake } from 'lucide-react';
import { BRAND_DATA, getWhatsAppUrl } from '../data/content';

export default function FinalCTA() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-[#FDF8F4] to-[#F4D9CF]/50 relative overflow-hidden text-center">
      {/* Background Soft Radiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] bg-[#E3A58F]/25 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Floral / Leaf SVG flourishes */}
      <div className="absolute top-12 left-10 md:left-24 text-[#C98270]/20 pointer-events-none hidden sm:block">
        <svg width="120" height="120" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 0 C60 30 90 40 100 50 C70 60 60 90 50 100 C40 70 10 60 0 50 C30 40 40 10 50 0 Z" />
        </svg>
      </div>
      <div className="absolute bottom-12 right-10 md:right-24 text-[#E3A58F]/25 pointer-events-none hidden sm:block">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 0 C60 30 90 40 100 50 C70 60 60 90 50 100 C40 70 10 60 0 50 C30 40 40 10 50 0 Z" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 text-xs font-serif uppercase tracking-[0.28em] text-[#C98270] font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Begin Your Bespoke UK Order</span>
          <Sparkles className="w-3.5 h-3.5" />
        </div>

        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-[#3E2C27] leading-[1.08] tracking-tight">
          Ready to shop the UK,{' '}
          <span className="font-serif italic font-normal text-[#C98270] block sm:inline">
            from Nigeria?
          </span>
        </h2>

        <p className="font-sans text-base sm:text-lg text-[#6B4F45]/85 max-w-xl mx-auto leading-relaxed">
          Send us your wishlist, request a custom perfume quotation, or order a pantry hamper today.
          Your personal shopping concierge in London is waiting.
        </p>

        {/* Large Prominent WhatsApp CTA Button */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getWhatsAppUrl("Hello Treasures by Mudaso! I'm ready to place an order from the UK.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3.5 px-9 py-5 rounded-full text-sm sm:text-base font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-[#C98270] via-[#E3A58F] to-[#C98270] hover:opacity-95 shadow-[0_12px_32px_rgba(201,130,112,0.4)] transition-all hover:scale-[1.03] active:scale-[0.98]"
          >
            <ShoppingBag className="w-5 h-5" />
            <span>Order on WhatsApp Now</span>
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 pt-4 text-xs text-[#6B4F45]/80">
          <div className="flex items-center gap-1.5">
            <HeartHandshake className="w-4 h-4 text-[#C98270]" />
            <span>1-on-1 Personal Attention</span>
          </div>
          <span>·</span>
          <span>Zero Currency Headaches</span>
          <span>·</span>
          <span>Delivered to Abuja, Kano & Nationwide</span>
        </div>
      </div>
    </section>
  );
}
