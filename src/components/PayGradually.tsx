import { useState } from 'react';
import { ShieldCheck, CalendarCheck, Package, ShoppingBag, ArrowRight } from 'lucide-react';
import { GROCERY_PACKAGES, getWhatsAppUrl } from '../data/content';

export default function PayGradually() {
  const [selectedPkgId, setSelectedPkgId] = useState<string>('family');
  const [instalmentCount, setInstalmentCount] = useState<number>(3);
  const [customAmount, setCustomAmount] = useState<number>(150000);
  const [isCustom, setIsCustom] = useState<boolean>(false);

  const selectedPkg = GROCERY_PACKAGES.find((p) => p.id === selectedPkgId) || GROCERY_PACKAGES[1];
  const totalAmount = isCustom ? customAmount : selectedPkg.priceNaira;
  const perInstalment = Math.round(totalAmount / instalmentCount);

  // Circular SVG progress ring calculation
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const progressRatio = 1 / instalmentCount;
  const strokeDashoffset = circumference - circumference * progressRatio;

  return (
    <section id="pay-gradually" className="py-20 lg:py-28 bg-[#FDF8F4] border-b border-[#F4D9CF]/60">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Benefits & Philosophy (6 cols on lg) */}
          <div className="lg:col-span-6 space-y-6">
            <span className="font-serif uppercase tracking-[0.25em] text-xs text-[#C98270] font-semibold flex items-center gap-2">
              <span className="w-5 h-[1px] bg-[#C98270]" />
              Smart Luxury Shopping
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#3E2C27] leading-[1.15]">
              Spread the payment.{' '}
              <span className="font-serif italic font-normal text-[#C98270]">Collect everything</span> together.
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#6B4F45]/85 leading-relaxed">
              No need to pay for your luxury fragrances, baby essentials, and British groceries all in one lump
              sum. With Mudaso’s Pay Gradually service, you plan your shopping smoothly, lock in UK pricing,
              and receive everything when you finish paying.
            </p>

            {/* 3 Core Benefits */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#F4D9CF]">
                <div className="w-8 h-8 rounded-full bg-[#F4D9CF]/60 flex items-center justify-center text-[#C98270] shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-[#3E2C27]">
                    Price Lock & Zero Interest
                  </h4>
                  <p className="text-xs text-[#6B4F45]/80 mt-0.5">
                    Your Naira price is locked the day we quote. No surprise exchange rate spikes while you pay.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#F4D9CF]">
                <div className="w-8 h-8 rounded-full bg-[#F4D9CF]/60 flex items-center justify-center text-[#C98270] shrink-0 mt-0.5">
                  <Package className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-[#3E2C27]">
                    Safe UK Hub Holding
                  </h4>
                  <p className="text-xs text-[#6B4F45]/80 mt-0.5">
                    We shop your genuine items and store them safely in our temperature-controlled London facility.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#F4D9CF]">
                <div className="w-8 h-8 rounded-full bg-[#F4D9CF]/60 flex items-center justify-center text-[#C98270] shrink-0 mt-0.5">
                  <CalendarCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-[#3E2C27]">
                    Immediate Scheduled Flight Dispatch
                  </h4>
                  <p className="text-xs text-[#6B4F45]/80 mt-0.5">
                    As soon as your final instalment clears, your whole parcel is booked on the next flight to Nigeria.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Mini Payment Planner Widget (6 cols on lg) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-7 sm:p-9 border border-[#E3A58F]/70 shadow-[0_16px_48px_rgba(107,79,69,0.08)]">
            <div className="border-b border-[#F4D9CF] pb-5 mb-6">
              <span className="text-[11px] font-serif uppercase tracking-widest text-[#C98270] font-semibold">
                Interactive Simulator
              </span>
              <h3 className="font-serif text-2xl text-[#3E2C27] font-semibold mt-1">
                Instalment Payment Planner
              </h3>
              <p className="text-xs text-[#6B4F45]/70 mt-1">
                Choose a pre-curated grocery package or simulate a custom UK haul.
              </p>
            </div>

            {/* Selection: Packages or Custom */}
            <div className="space-y-4 mb-6">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#3E2C27] block">
                1. Select Package or Enter Total
              </label>

              <div className="grid grid-cols-3 gap-2">
                {GROCERY_PACKAGES.map((pkg) => (
                  <button
                    key={pkg.id}
                    onClick={() => {
                      setSelectedPkgId(pkg.id);
                      setIsCustom(false);
                    }}
                    className={`py-2 px-2.5 rounded-xl text-xs font-medium border text-center transition-all ${
                      !isCustom && selectedPkgId === pkg.id
                        ? 'border-[#C98270] bg-[#F4D9CF]/40 text-[#3E2C27] font-bold shadow-sm'
                        : 'border-[#F4D9CF] bg-white text-[#6B4F45] hover:bg-[#FDF8F4]'
                    }`}
                  >
                    <div className="truncate">{pkg.name.split(' ')[0]}</div>
                    <div className="text-[10px] text-[#C98270] font-mono mt-0.5">
                      ₦{(pkg.priceNaira / 1000).toFixed(0)}k
                    </div>
                  </button>
                ))}
              </div>

              {/* Custom Amount Toggle */}
              <div className="pt-2">
                <button
                  onClick={() => setIsCustom(!isCustom)}
                  className="text-xs text-[#C98270] underline hover:text-[#3E2C27] transition-colors"
                >
                  {isCustom ? '← Choose from standard packages' : 'Or calculate for a custom order value'}
                </button>
                {isCustom && (
                  <div className="mt-3 flex items-center gap-2">
                    <span className="text-sm font-serif font-bold text-[#3E2C27]">₦</span>
                    <input
                      type="number"
                      step={5000}
                      min={30000}
                      max={2000000}
                      value={customAmount}
                      onChange={(e) => setCustomAmount(Number(e.target.value) || 0)}
                      className="w-full px-3 py-2 border border-[#E3A58F] rounded-lg text-sm font-mono text-[#3E2C27] focus:outline-none focus:ring-2 focus:ring-[#C98270]"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Instalment Count Selection */}
            <div className="space-y-3 mb-6">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#3E2C27] block">
                2. Number of Instalments
              </label>

              <div className="grid grid-cols-3 gap-3">
                {[2, 3, 4].map((count) => (
                  <button
                    key={count}
                    onClick={() => setInstalmentCount(count)}
                    className={`py-3 px-4 rounded-xl text-center border transition-all ${
                      instalmentCount === count
                        ? 'border-[#C98270] bg-[#3E2C27] text-white shadow-sm'
                        : 'border-[#F4D9CF] bg-white text-[#6B4F45] hover:bg-[#FDF8F4]'
                    }`}
                  >
                    <div className="font-serif text-lg font-bold">{count} Parts</div>
                    <div className="text-[10px] opacity-80">
                      {count === 2 ? 'Bi-weekly' : count === 3 ? 'Every 2 wks' : 'Monthly'}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Calculation Result Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#FDF8F4] to-[#F4D9CF]/40 border border-[#E3A58F] flex items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-[11px] font-serif uppercase tracking-widest text-[#C98270] font-semibold">
                  Estimated Breakdown
                </span>
                <div className="font-serif text-3xl font-bold text-[#3E2C27] tracking-tight tabular-nums mt-1">
                  ₦{perInstalment.toLocaleString()}
                  <span className="text-xs font-normal text-[#6B4F45] ml-1">/ instalment</span>
                </div>
                <p className="text-[11px] text-[#6B4F45]/70 mt-1">
                  Total order: ₦{totalAmount.toLocaleString()} across {instalmentCount} payments
                </p>
              </div>

              {/* Circular SVG Graphic */}
              <div className="relative w-20 h-20 shrink-0">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r={radius}
                    stroke="#F4D9CF"
                    strokeWidth="8"
                    fill="transparent"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r={radius}
                    stroke="#C98270"
                    strokeWidth="8"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    fill="transparent"
                    className="transition-all duration-500 ease-out"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-xs font-serif font-bold text-[#3E2C27]">
                  {Math.round(100 / instalmentCount)}%
                </div>
              </div>
            </div>

            {/* Action button sending simulation directly to WhatsApp */}
            <a
              href={getWhatsAppUrl(
                `Hello Treasures by Mudaso! I used the instalment planner: ${
                  isCustom ? 'Custom order of' : selectedPkg.name
                } ₦${totalAmount.toLocaleString()} split into ${instalmentCount} instalments (approx ₦${perInstalment.toLocaleString()} each). Can we proceed?`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#C98270] via-[#E3A58F] to-[#C98270] hover:opacity-95 shadow-md shadow-[#C98270]/20 transition-all hover:scale-[1.01]"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Lock this Plan on WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <p className="text-center text-[10px] text-[#6B4F45]/60 mt-3">
              ✦ Exact instalments are confirmed on WhatsApp based on real-time UK store inventory.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
