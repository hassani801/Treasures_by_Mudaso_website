import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { FAQ_LIST, getWhatsAppUrl } from '../data/content';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#FDF8F4] border-b border-[#F4D9CF]/60">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <div className="text-center space-y-3 mb-12 sm:mb-16">
          <span className="font-serif uppercase tracking-[0.25em] text-xs text-[#C98270] font-semibold flex items-center justify-center gap-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#3E2C27]">
            Frequently Asked <span className="font-serif italic font-normal text-[#C98270]">Questions</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#6B4F45]/80 max-w-lg mx-auto">
            Everything you need to know about placing UK orders, our instalment plans, and delivery across Nigeria.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_LIST.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#E3A58F] shadow-[0_8px_24px_rgba(107,79,69,0.06)]'
                    : 'bg-white/80 border-[#F4D9CF] hover:border-[#E3A58F]/60'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C98270]"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl font-semibold text-[#3E2C27] leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-[#3E2C27] text-white' : 'bg-[#F4D9CF]/60 text-[#C98270]'
                    }`}
                  >
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 sm:px-7 pb-6 text-sm text-[#6B4F45]/85 leading-relaxed border-t border-[#F4D9CF]/40 pt-4">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#F4D9CF]/30 border border-[#E3A58F]/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-serif text-base font-semibold text-[#3E2C27]">
              Have a specific question not answered here?
            </h4>
            <p className="text-xs text-[#6B4F45]/80 mt-0.5">
              Our UK concierge team is available to guide you on WhatsApp.
            </p>
          </div>
          <a
            href={getWhatsAppUrl("Hi Mudaso! I have a question about placing a UK order.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-[#3E2C27] hover:bg-[#6B4F45] text-white text-xs font-semibold uppercase tracking-wider transition-colors shrink-0"
          >
            Chat with Concierge
          </a>
        </div>
      </div>
    </section>
  );
}
