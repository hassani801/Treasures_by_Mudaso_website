import { MessageCircle, Star, CheckCheck, Heart } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#FDF8F4] overflow-hidden border-b border-[#F4D9CF]/60">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-12 text-center space-y-3">
        <span className="font-serif uppercase tracking-[0.25em] text-xs text-[#C98270] font-semibold flex items-center justify-center gap-2">
          <Heart className="w-3.5 h-3.5 fill-[#C98270] text-[#C98270]" />
          <span>Real Client Stories</span>
          <Heart className="w-3.5 h-3.5 fill-[#C98270] text-[#C98270]" />
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#3E2C27]">
          Loved across <span className="font-serif italic font-normal text-[#C98270]">Abuja & Kano</span>
        </h2>

        <p className="font-sans text-sm sm:text-base text-[#6B4F45]/80 max-w-lg mx-auto">
          Over 2,000 discerning Nigerian households trust Mudaso for authentic UK personal shopping.
          Here is what they say on WhatsApp.
        </p>
      </div>

      {/* Row 1: Leftward Auto-Scroll Marquee (Pauses on Hover) */}
      <div className="w-full overflow-hidden select-none pb-4">
        <div className="flex w-max gap-6 animate-[scrollRow1_45s_linear_infinite] hover:[animation-play-state:paused] px-4">
          {[...TESTIMONIALS, ...TESTIMONIALS].map((rev, idx) => (
            <div
              key={`${rev.id}-row1-${idx}`}
              className="w-[320px] sm:w-[380px] p-6 rounded-3xl bg-white border border-[#F4D9CF] shadow-[0_8px_24px_rgba(107,79,69,0.05)] hover:shadow-[0_12px_32px_rgba(107,79,69,0.12)] transition-all flex flex-col justify-between"
            >
              {/* WhatsApp Bubble Style Header */}
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-[#F4D9CF]/60">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#E3A58F]/30 flex items-center justify-center text-xs font-serif font-bold text-[#6B4F45]">
                      {rev.customerName[0]}
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-semibold text-[#3E2C27] leading-tight">
                        {rev.customerName}
                      </h4>
                      <p className="text-[10px] text-[#C98270] font-medium">{rev.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-0.5 text-[#E3A58F]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                </div>

                {/* WhatsApp Chat Speech Bubble */}
                <div className="p-4 rounded-2xl bg-[#FDF8F4] border border-[#F4D9CF]/70 relative text-xs text-[#3E2C27] leading-relaxed">
                  <p>"{rev.whatsappMessage}"</p>
                  <div className="flex items-center justify-end gap-1.5 mt-2 text-[10px] text-[#6B4F45]/60">
                    <span>{rev.date}</span>
                    <CheckCheck className="w-3.5 h-3.5 text-[#C98270]" />
                  </div>
                </div>
              </div>

              {/* Purchase Tag */}
              <div className="pt-3 mt-3 border-t border-[#F4D9CF]/40 flex items-center justify-between text-[11px] text-[#6B4F45]">
                <span className="font-serif italic">Verified UK Order:</span>
                <span className="font-medium text-[#C98270] truncate max-w-[200px]">{rev.purchase}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Rightward Auto-Scroll Marquee */}
      <div className="w-full overflow-hidden select-none pt-2">
        <div className="flex w-max gap-6 animate-[scrollRow2_48s_linear_infinite] hover:[animation-play-state:paused] px-4">
          {[...TESTIMONIALS.slice().reverse(), ...TESTIMONIALS.slice().reverse()].map((rev, idx) => (
            <div
              key={`${rev.id}-row2-${idx}`}
              className="w-[320px] sm:w-[380px] p-6 rounded-3xl bg-white border border-[#F4D9CF] shadow-[0_8px_24px_rgba(107,79,69,0.05)] hover:shadow-[0_12px_32px_rgba(107,79,69,0.12)] transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-[#F4D9CF]/60">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#F4D9CF] flex items-center justify-center text-xs font-serif font-bold text-[#6B4F45]">
                      {rev.customerName[0]}
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-semibold text-[#3E2C27] leading-tight">
                        {rev.customerName}
                      </h4>
                      <p className="text-[10px] text-[#C98270] font-medium">{rev.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-0.5 text-[#E3A58F]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#FDF8F4] border border-[#F4D9CF]/70 text-xs text-[#3E2C27] leading-relaxed">
                  <p>"{rev.whatsappMessage}"</p>
                  <div className="flex items-center justify-end gap-1.5 mt-2 text-[10px] text-[#6B4F45]/60">
                    <span>{rev.date}</span>
                    <CheckCheck className="w-3.5 h-3.5 text-[#C98270]" />
                  </div>
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-[#F4D9CF]/40 flex items-center justify-between text-[11px] text-[#6B4F45]">
                <span className="font-serif italic">Verified UK Order:</span>
                <span className="font-medium text-[#C98270] truncate max-w-[200px]">{rev.purchase}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scrollRow1 {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scrollRow2 {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>
    </section>
  );
}
