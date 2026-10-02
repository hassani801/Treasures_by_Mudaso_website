import { useRef, useEffect } from 'react';
import { ArrowUpRight, ShoppingBag } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CATEGORIES, getWhatsAppUrl } from '../data/content';

gsap.registerPlugin(ScrollTrigger);

export default function Categories() {
  const containerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only apply pinned horizontal scroll on large desktop viewports
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (window.innerWidth < 1024 || prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;

      const totalScroll = track.scrollWidth - window.innerWidth + 120;

      gsap.to(track, {
        x: () => -totalScroll,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: () => `+=${totalScroll}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="categories"
      ref={containerRef}
      className="py-20 lg:py-24 bg-[#FDF8F4] overflow-hidden border-b border-[#F4D9CF]/60"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="font-serif uppercase tracking-[0.25em] text-xs text-[#C98270] font-semibold flex items-center gap-2">
            <span className="w-5 h-[1px] bg-[#C98270]" />
            Curated UK Departments
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#3E2C27] mt-2">
            Shop by <span className="font-serif italic font-normal text-[#C98270]">Category</span>
          </h2>
        </div>
        <p className="font-sans text-sm text-[#6B4F45]/80 max-w-md">
          Explore our premier sourcing departments. Tell us what you need or tap any category to begin your personal shopping order on WhatsApp.
        </p>
      </div>

      {/* Horizontal Track for Desktop / Horizontal Swipe for Mobile */}
      <div className="px-6 md:px-10 overflow-x-auto lg:overflow-visible no-scrollbar">
        <div
          ref={trackRef}
          className="flex gap-6 sm:gap-8 w-max pb-4 will-change-transform"
        >
          {CATEGORIES.map((cat, idx) => (
            <div
              key={cat.id}
              className="group relative w-[280px] sm:w-[340px] md:w-[380px] h-[480px] sm:h-[520px] rounded-t-[140px] rounded-b-3xl overflow-hidden bg-white border border-[#F4D9CF] shadow-[0_12px_36px_rgba(107,79,69,0.08)] flex flex-col justify-end p-6 sm:p-8 shrink-0 transition-all duration-500 hover:shadow-[0_20px_48px_rgba(107,79,69,0.16)]"
            >
              {/* Background Image with Zoom on Hover */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                {/* Refined gradient scrim for readable typography */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3E2C27]/95 via-[#3E2C27]/40 to-black/10 group-hover:from-[#3E2C27] transition-colors duration-500" />
              </div>

              {/* Category Number Badge */}
              <div className="absolute top-8 left-8 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-xs font-serif font-bold text-[#3E2C27] shadow-sm">
                0{idx + 1}
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 space-y-3 transform transition-transform duration-500 group-hover:-translate-y-2">
                <span className="text-[11px] font-serif uppercase tracking-widest text-[#E3A58F] font-semibold drop-shadow">
                  {cat.subtitle}
                </span>

                <h3 className="font-serif text-2xl sm:text-3xl text-white font-semibold leading-tight">
                  {cat.name}
                </h3>

                <p className="text-xs text-white/80 line-clamp-2 leading-relaxed">
                  {cat.description}
                </p>

                {/* Popular Brands Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cat.popularBrands.slice(0, 3).map((brand) => (
                    <span
                      key={brand}
                      className="text-[10px] text-white/90 bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full"
                    >
                      {brand}
                    </span>
                  ))}
                </div>

                {/* WhatsApp Action Button */}
                <a
                  href={getWhatsAppUrl(`Hi Mudaso! I want to order items from the ${cat.name} department.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full inline-flex items-center justify-between px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-[#3E2C27] bg-[#FDF8F4] group-hover:bg-[#E3A58F] group-hover:text-white transition-all shadow-md"
                >
                  <span className="flex items-center gap-2">
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Order via WhatsApp</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
