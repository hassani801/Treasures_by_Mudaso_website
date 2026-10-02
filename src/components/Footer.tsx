import { ArrowUp, Instagram, MessageCircle, MapPin, Calendar, Clock, Heart } from 'lucide-react';
import { BRAND_DATA, getWhatsAppUrl } from '../data/content';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#3E2C27] text-[#FDF8F4] pt-16 pb-12 border-t border-[#6B4F45]/50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#6B4F45]/40">
          {/* Brand Info (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="inline-block group">
              <span className="font-script text-4xl text-white group-hover:text-[#E3A58F] transition-colors">
                Treasures
              </span>
              <span className="block font-serif uppercase tracking-[0.24em] text-[11px] text-[#E3A58F] font-semibold -mt-1">
                by Mudaso · UK Personal Shopper
              </span>
            </a>

            <p className="font-sans text-xs text-[#FDF8F4]/75 max-w-sm leading-relaxed">
              Curating and hand-shopping genuine UK fragrances, luxury grocery hampers, pharmacy wellness
              supplements, and lifestyle treasures for homes across Nigeria.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={BRAND_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#4E3731] hover:bg-[#E3A58F] hover:text-[#3E2C27] text-white flex items-center justify-center transition-all"
                aria-label="Instagram profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#4E3731] hover:bg-[#E3A58F] hover:text-[#3E2C27] text-white flex items-center justify-center transition-all"
                aria-label="WhatsApp order chat"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Department Links (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm uppercase tracking-widest text-[#E3A58F] font-semibold">
              Departments
            </h4>
            <ul className="space-y-2 text-xs text-[#FDF8F4]/75">
              <li>
                <a href="#categories" className="hover:text-white transition-colors">
                  Luxury Fragrance
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-white transition-colors">
                  British Groceries
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-white transition-colors">
                  Pharmacy Wellness
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-white transition-colors">
                  Boutique Home & Candles
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-white transition-colors">
                  Baby & Body Care
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Navigation (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm uppercase tracking-widest text-[#E3A58F] font-semibold">
              Client Concierge
            </h4>
            <ul className="space-y-2 text-xs text-[#FDF8F4]/75">
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#pay-gradually" className="hover:text-white transition-colors">
                  Pay Gradually (Instalments)
                </a>
              </li>
              <li>
                <a href="#delivery" className="hover:text-white transition-colors">
                  Delivery & Genuine Guarantee
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  Customer Testimonials
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ & Ordering Help
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Schedule (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif text-sm uppercase tracking-widest text-[#E3A58F] font-semibold">
              Direct Contact & Schedule
            </h4>

            <div className="space-y-2 text-xs text-[#FDF8F4]/80">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#E3A58F] shrink-0" />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white underline decoration-[#E3A58F]"
                >
                  WhatsApp: {BRAND_DATA.phoneFormatted}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#E3A58F] shrink-0" />
                <span>Delivery Days: {BRAND_DATA.deliveryDays}</span>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E3A58F] shrink-0 mt-0.5" />
                <span>Express Doorstep Delivery: Abuja & Kano (Nationwide Courier to all 36 States)</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl("Hello Mudaso, I'd like to place an order.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E3A58F] hover:bg-white text-[#3E2C27] text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <span>Order via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FDF8F4]/60">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} {BRAND_DATA.name}. All rights reserved.</span>
            <span className="hidden sm:inline">· Crafted for luxury UK personal shopping in Nigeria.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#4E3731] hover:bg-[#6B4F45] text-white transition-colors"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#E3A58F]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
