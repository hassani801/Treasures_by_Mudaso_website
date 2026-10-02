import { MapPin, Calendar, CheckCircle2, Shield, Plane, ArrowUpRight } from 'lucide-react';
import { BRAND_DATA, getWhatsAppUrl } from '../data/content';

export default function Delivery() {
  return (
    <section id="delivery" className="py-20 lg:py-28 bg-[#FDF8F4] border-b border-[#F4D9CF]/60">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Nigeria Delivery Card & Stats (6 cols on lg) */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="font-serif uppercase tracking-[0.25em] text-xs text-[#C98270] font-semibold flex items-center gap-2">
                <span className="w-5 h-[1px] bg-[#C98270]" />
                Logistics & Authenticity
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#3E2C27] mt-2 leading-[1.15]">
                Direct from London.{' '}
                <span className="font-serif italic font-normal text-[#C98270]">Safely delivered</span> in Nigeria.
              </h2>

              <p className="font-sans text-sm sm:text-base text-[#6B4F45]/85 mt-4 leading-relaxed">
                We operate scheduled weekly air shipments from London Heathrow directly into Abuja and Kano,
                with door-to-door courier dispatches across all 36 Nigerian states.
              </p>
            </div>

            {/* Stylized Delivery Schedule Card */}
            <div className="p-7 rounded-3xl bg-white border border-[#F4D9CF] shadow-[0_8px_30px_rgba(107,79,69,0.06)] space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#F4D9CF]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#F4D9CF]/60 flex items-center justify-center text-[#C98270]">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-semibold text-[#3E2C27]">
                      Scheduled Dispatch Days
                    </h4>
                    <p className="text-xs text-[#C98270] font-medium">Mondays · Tuesdays · Fridays</p>
                  </div>
                </div>

                <span className="text-[11px] font-mono text-[#6B4F45] bg-[#FDF8F4] px-2.5 py-1 rounded-full border border-[#F4D9CF]">
                  Air Cargo
                </span>
              </div>

              {/* Hubs Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-[#FDF8F4] border border-[#F4D9CF]/80">
                  <div className="flex items-center gap-1.5 text-xs font-serif font-bold text-[#3E2C27]">
                    <MapPin className="w-3.5 h-3.5 text-[#C98270]" />
                    <span>Abuja Hub</span>
                  </div>
                  <p className="text-[11px] text-[#6B4F45]/70 mt-1">
                    Maitama, Wuse 2, Gwarinpa, Asokoro & Central Doorstep
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FDF8F4] border border-[#F4D9CF]/80">
                  <div className="flex items-center gap-1.5 text-xs font-serif font-bold text-[#3E2C27]">
                    <MapPin className="w-3.5 h-3.5 text-[#C98270]" />
                    <span>Kano Hub</span>
                  </div>
                  <p className="text-[11px] text-[#6B4F45]/70 mt-1">
                    Nassarawa GRA, Bompai, Tarauni & City Doorstep
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#6B4F45]/80 pt-1">
                <Plane className="w-4 h-4 text-[#C98270] shrink-0" />
                <span>
                  Nationwide doorstep courier delivery available to Lagos, Port Harcourt, Kaduna & all other states.
                </span>
              </div>
            </div>

            {/* Numerical Proof Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              {BRAND_DATA.stats.map((stat) => (
                <div key={stat.label} className="p-4 rounded-2xl bg-white/70 border border-[#F4D9CF]">
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[#3E2C27] tabular-nums">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-[#6B4F45]/70 mt-0.5 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Authenticity Collage (6 cols on lg) */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Main Arch Visual */}
            <div className="relative w-full max-w-md h-[460px] sm:h-[520px] rounded-t-[160px] rounded-b-3xl overflow-hidden shadow-[0_20px_50px_rgba(107,79,69,0.16)] border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80"
                alt="Original UK boutique fragrance packaging and receipts"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3E2C27]/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="text-[10px] font-serif uppercase tracking-widest text-[#E3A58F] font-semibold">
                  Zero Counterfeits Guarantee
                </span>
                <h4 className="font-serif text-xl sm:text-2xl font-semibold leading-snug">
                  100% Genuine British Invoices & Boutique Packaging
                </h4>
                <p className="text-xs text-white/80">
                  Every order includes authentic retail proofs from Harrods, Boots, or Selfridges London upon request.
                </p>
              </div>
            </div>

            {/* Overlapping Badge: Heathrow Air Freight */}
            <div className="absolute -top-4 -right-2 sm:right-6 bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl border border-[#F4D9CF] shadow-xl flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#E3A58F]/30 flex items-center justify-center text-[#C98270]">
                <Plane className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-serif uppercase tracking-wider text-[#C98270] font-bold">
                  Express Cargo Route
                </p>
                <p className="text-xs font-semibold text-[#3E2C27]">London LHR → Abuja & Kano</p>
              </div>
            </div>

            {/* Overlapping Badge: Seal of Authenticity */}
            <div className="absolute -bottom-6 -left-2 sm:left-4 bg-[#3E2C27] text-white px-5 py-3.5 rounded-2xl border border-[#E3A58F]/60 shadow-xl flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#E3A58F] text-[#3E2C27] flex items-center justify-center shrink-0">
                <Shield className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-serif font-bold text-white">Genuine UK Certificate</p>
                <p className="text-[10px] text-[#E3A58F]">Inspected & sealed before dispatch</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
