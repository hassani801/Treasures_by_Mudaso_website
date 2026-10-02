import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppUrl } from '../data/content';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Friendly Tooltip Bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-full border border-[#E3A58F] shadow-lg text-xs text-[#3E2C27] font-medium animate-float">
          <span>Order on WhatsApp directly</span>
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Close tooltip"
            className="text-[#6B4F45]/60 hover:text-[#3E2C27] p-0.5 rounded-full"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={getWhatsAppUrl("Hi Treasures by Mudaso, I'd like to place an order.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Treasures by Mudaso on WhatsApp"
        className="relative group w-14 h-14 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white flex items-center justify-center shadow-[0_8px_24px_rgba(18,140,126,0.35)] hover:shadow-[0_12px_32px_rgba(18,140,126,0.5)] hover:scale-110 active:scale-95 transition-all duration-300"
      >
        {/* Subtle Pulse Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />

        <MessageCircle className="w-7 h-7 relative z-10" />
      </a>
    </div>
  );
}
