import { Sparkles } from 'lucide-react';

const MARQUEE_ITEMS = [
  'Luxury Fragrance',
  'British Groceries',
  'Everyday Essentials',
  'Pharmacy Wellness',
  'Boutique Home',
  'Genuine UK Sourced',
  'Direct Air Cargo',
  'Doorstep Abuja & Kano',
  'Pay Gradually In Instalments',
  'Selfridges & Harrods Sourced',
];

export default function Marquee() {
  return (
    <div
      aria-hidden="true"
      className="w-full bg-gradient-to-r from-[#F4D9CF]/70 via-[#FDF8F4] to-[#F4D9CF]/70 border-y border-[#E3A58F]/40 py-3.5 overflow-hidden select-none"
    >
      <div className="flex w-max items-center animate-[marquee_28s_linear_infinite] hover:[animation-play-state:paused]">
        {/* Double sequence for seamless loop */}
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
          <div key={idx} className="flex items-center gap-6 px-4">
            <span className="font-serif italic text-base md:text-lg tracking-wide text-[#6B4F45] whitespace-nowrap">
              {item}
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#C98270] shrink-0" />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
