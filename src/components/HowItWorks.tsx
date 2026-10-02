import { useEffect, useRef } from 'react';
import { ShoppingBag, CreditCard, PlaneTakeoff, PackageCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getWhatsAppUrl } from '../data/content';

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    stepNum: '01',
    title: 'Choose Your UK Treasures',
    subtitle: 'Wishlist or store links',
    description:
      'Send us photos, screenshots, or website links of any UK items you want—from perfumes at Selfridges and M&S groceries to Boots skincare. Or choose from our pre-curated grocery hampers.',
    icon: ShoppingBag,
    highlight: 'Any UK store or brand welcome',
  },
  {
    stepNum: '02',
    title: 'Pay Your Way (Or Gradually)',
    subtitle: 'Flexible instalments',
    description:
      'Pay in full or spread the cost across 2, 3, or 4 comfortable instalments. We purchase your items and safely store them in our secure London hub while your payment completes.',
    icon: CreditCard,
    highlight: 'Spread across weeks with 0% hidden fees',
  },
  {
    stepNum: '03',
    title: 'We Hand-Shop & Fly from UK',
    subtitle: 'Direct air cargo',
    description:
      'Our dedicated UK team shops your order in person, inspects every bottle and packaging seal for 100% authenticity, bubble-wraps each piece, and books direct air-freight to Nigeria.',
    icon: PlaneTakeoff,
    highlight: 'Receipts provided upon request',
  },
  {
    stepNum: '04',
    title: 'Delivered Across Nigeria',
    subtitle: 'Abuja, Kano & nationwide',
    description:
      'Collect everything together! We deliver right to your doorstep in Abuja, Kano, Lagos, and all 36 states on our scheduled dispatch days (Mon, Tue, Fri) with full tracking updates.',
    icon: PackageCheck,
    highlight: 'Doorstep handover with signature safety',
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const stepsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current || !lineRef.current) return;

    const ctx = gsap.context(() => {
      // Animate progress line drawing down as user scrolls through the steps
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: stepsContainerRef.current,
            start: 'top 70%',
            end: 'bottom 80%',
            scrub: 0.6,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-[#FDF8F4] relative border-b border-[#F4D9CF]/60"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Sticky Editorial Heading (5 cols on lg) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-serif uppercase tracking-[0.25em] text-[#C98270] font-semibold">
              <span className="w-6 h-[1px] bg-[#C98270]" />
              <span>Concierge Protocol</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#3E2C27] leading-[1.15]">
              Shopping the UK from Nigeria, made{' '}
              <span className="font-serif italic font-normal text-[#C98270]">effortless</span>.
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#6B4F45]/85 leading-relaxed">
              No foreign currency cards needed. No international shipping confusion. Chat directly with
              our London team, pay conveniently in Naira, and receive genuine British goods right at your
              door.
            </p>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl("Hi Mudaso! I'd like to ask a few questions before ordering.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-[#C98270] hover:text-[#6B4F45] transition-colors group"
              >
                <span>Have a bespoke request? Chat with us</span>
                <span className="w-5 h-[1.5px] bg-[#C98270] group-hover:w-8 transition-all" />
              </a>
            </div>

            {/* Quick badge */}
            <div className="p-5 rounded-2xl bg-white/80 border border-[#F4D9CF] shadow-sm space-y-2 mt-6">
              <p className="text-xs font-serif uppercase tracking-widest text-[#3E2C27] font-semibold">
                Consolidated Shipments
              </p>
              <p className="text-xs text-[#6B4F45]">
                Order multiple items from different British stores—we consolidate everything into one
                luxuriously wrapped package to save you freight costs.
              </p>
            </div>
          </div>

          {/* Right Column: Step Cards with Vertical Connecting Line (7 cols on lg) */}
          <div ref={stepsContainerRef} className="lg:col-span-7 relative pl-6 sm:pl-10 space-y-10">
            {/* Animated Vertical Line */}
            <div className="absolute left-[13px] sm:left-[21px] top-6 bottom-6 w-[2px] bg-[#F4D9CF] origin-top">
              <div
                ref={lineRef}
                className="w-full h-full bg-[#C98270] origin-top transition-transform duration-75"
              />
            </div>

            {/* Steps Sequence */}
            {STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.stepNum}
                  className="relative group bg-white/90 hover:bg-white p-7 sm:p-8 rounded-2xl border border-[#F4D9CF] hover:border-[#E3A58F] shadow-[0_4px_20px_rgba(107,79,69,0.04)] hover:shadow-[0_12px_32px_rgba(107,79,69,0.09)] transition-all duration-300"
                >
                  {/* Step Number Dot Indicator on Line */}
                  <div className="absolute -left-[30px] sm:-left-[43px] top-8 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FDF8F4] border-2 border-[#C98270] flex items-center justify-center text-[11px] sm:text-xs font-serif font-bold text-[#3E2C27] group-hover:bg-[#C98270] group-hover:text-white transition-colors shadow-sm">
                    {step.stepNum}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-3">
                    <div className="space-y-1">
                      <span className="text-[11px] font-serif uppercase tracking-widest text-[#C98270] font-semibold">
                        {step.subtitle}
                      </span>
                      <h3 className="font-serif text-2xl text-[#3E2C27] font-semibold">
                        {step.title}
                      </h3>
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-[#F4D9CF]/40 flex items-center justify-center text-[#C98270] shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <p className="text-sm text-[#6B4F45]/85 leading-relaxed mb-4">
                    {step.description}
                  </p>

                  <div className="inline-block text-[11px] font-medium text-[#C98270] bg-[#F4D9CF]/30 px-3 py-1 rounded-md">
                    ✦ {step.highlight}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
