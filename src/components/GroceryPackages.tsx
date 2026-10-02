import { Check, ShoppingBag, Sparkles, Star } from 'lucide-react';
import { GROCERY_PACKAGES, getWhatsAppUrl } from '../data/content';

export default function GroceryPackages() {
  return (
    <section
      id="packages"
      className="py-24 lg:py-32 bg-[#3E2C27] text-[#FDF8F4] relative overflow-hidden"
    >
      {/* Decorative Subtle Parallax Background Highlights */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#C98270]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#E3A58F]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-serif uppercase tracking-[0.25em] text-[#E3A58F] font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated British Gourmet Hampers</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight">
            Premium UK <span className="font-serif italic font-normal text-[#E3A58F]">Grocery Packages</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#FDF8F4]/80 leading-relaxed">
            Authentic pantry treats from Marks & Spencer, Waitrose, Twinings, and Cadbury UK.
            Hand-selected, sealed for flight freshness, and delivered directly to your kitchen in Nigeria.
          </p>
        </div>

        {/* 3 Package Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {GROCERY_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative flex flex-col justify-between rounded-3xl p-8 sm:p-9 transition-all duration-300 ${
                pkg.isPopular
                  ? 'bg-[#4E3731] border-2 border-[#E3A58F] shadow-[0_20px_60px_rgba(0,0,0,0.45)] scale-100 lg:-translate-y-3 z-10'
                  : 'bg-[#46322C] border border-[#6B4F45]/50 hover:border-[#E3A58F]/60 shadow-xl'
              }`}
            >
              {/* Popular Ribbon */}
              {pkg.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#E3A58F] to-[#C98270] text-white text-[11px] font-serif uppercase tracking-widest font-bold shadow-md flex items-center gap-1.5 whitespace-nowrap">
                  <Star className="w-3 h-3 fill-current" />
                  <span>Most Popular Choice</span>
                </div>
              )}

              {/* Package Header */}
              <div className="space-y-4">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-semibold">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-[#E3A58F] mt-1">{pkg.tagline}</p>
                </div>

                {/* Price Display */}
                <div className="py-4 border-y border-[#6B4F45]/60 flex items-baseline gap-2">
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight tabular-nums">
                    ₦{pkg.priceNaira.toLocaleString()}
                  </span>
                  <span className="text-xs text-[#FDF8F4]/60">/ package</span>
                </div>

                <p className="text-xs italic text-[#FDF8F4]/70">
                  Ideal for: {pkg.idealFor}
                </p>

                {/* Items Included List */}
                <div className="pt-2 space-y-2.5">
                  <p className="text-xs font-serif uppercase tracking-widest text-[#E3A58F] font-semibold">
                    Included UK Items:
                  </p>
                  <ul className="space-y-2">
                    {pkg.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[#FDF8F4]/90">
                        <Check className="w-4 h-4 text-[#E3A58F] shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-8 mt-6 border-t border-[#6B4F45]/40">
                <a
                  href={getWhatsAppUrl(
                    `Hello Mudaso! I want to order the ${pkg.name} (₦${pkg.priceNaira.toLocaleString()}).`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                    pkg.isPopular
                      ? 'bg-gradient-to-r from-[#E3A58F] to-[#C98270] hover:opacity-95 text-white shadow-lg shadow-[#C98270]/30 hover:scale-[1.02]'
                      : 'bg-[#FDF8F4] hover:bg-white text-[#3E2C27] hover:scale-[1.02]'
                  }`}
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Order this Package</span>
                </a>

                <p className="text-center text-[10px] text-[#FDF8F4]/50 mt-2">
                  Can be split across 2–4 instalments via Pay Gradually
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
