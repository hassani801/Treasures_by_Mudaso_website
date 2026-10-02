import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, ArrowUpRight } from 'lucide-react';
import { BRAND_DATA, getWhatsAppUrl } from '../data/content';

const NAV_LINKS = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Shop Categories', href: '#categories' },
  { label: 'Grocery Packages', href: '#packages' },
  { label: 'Pay Gradually', href: '#pay-gradually' },
  { label: 'Delivery Hubs', href: '#delivery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FDF8F4]/92 backdrop-blur-md shadow-[0_4px_24px_rgba(107,79,69,0.06)] border-b border-[#F4D9CF]/60 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Brand Wordmark Zone */}
          <a
            href="#"
            className="group flex flex-col items-start focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C98270] rounded-sm"
          >
            <span className="font-script text-3xl md:text-4xl text-[#3E2C27] leading-none group-hover:text-[#C98270] transition-colors">
              Treasures
            </span>
            <span className="font-serif uppercase tracking-[0.24em] text-[10px] md:text-[11px] text-[#C98270] font-semibold -mt-0.5">
              by Mudaso · UK
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-medium tracking-wide uppercase text-[#6B4F45]">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-1 hover:text-[#C98270] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C98270] hover:after:w-full after:transition-all after:duration-250"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Zone */}
          <div className="flex items-center gap-4">
            <a
              href={getWhatsAppUrl("Hi Treasures by Mudaso, I'm ready to place an order from the UK!")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-[#C98270] via-[#E3A58F] to-[#C98270] hover:opacity-95 shadow-[0_4px_16px_rgba(201,130,112,0.35)] transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Order on WhatsApp</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
              className="lg:hidden p-2 rounded-full text-[#6B4F45] hover:text-[#C98270] hover:bg-[#F4D9CF]/40 transition-colors focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Animated Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-[#FDF8F4] flex flex-col justify-between px-8 py-20 lg:hidden transition-all duration-500 ease-[cubic-bezier(0.85,0,0.15,1)] ${
          mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="space-y-6 mt-6">
          <p className="font-serif italic text-sm text-[#C98270]">Explore our British boutique</p>
          <nav className="flex flex-col space-y-4">
            {NAV_LINKS.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                style={{ transitionDelay: `${idx * 40}ms` }}
                className="font-serif text-2xl sm:text-3xl text-[#3E2C27] hover:text-[#C98270] flex items-center justify-between border-b border-[#F4D9CF]/50 pb-3 transition-colors"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-5 h-5 text-[#C98270]" />
              </a>
            ))}
          </nav>
        </div>

        <div className="space-y-4 pt-6 border-t border-[#F4D9CF]">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-sm font-semibold tracking-wider uppercase text-white bg-[#C98270] shadow-md shadow-[#C98270]/20"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Chat on WhatsApp (+44 7760 580132)</span>
          </a>
          <p className="text-center text-xs text-[#6B4F45]/70">
            Delivering weekly to Abuja, Kano & all 36 Nigerian States
          </p>
        </div>
      </div>
    </>
  );
}
