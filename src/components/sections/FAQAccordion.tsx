'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: '1',
    question: 'How does Kova work?',
    answer: "Enter your postcode, tell us a bit about your property, and we'll show you a ranked shortlist of top local agents based on real performance data.",
  },
  {
    id: '2',
    question: 'Is Kova really free for sellers?',
    answer: 'Yes, completely free. We earn a small referral fee from the agent if you choose them and complete a sale.',
  },
  {
    id: '3',
    question: 'How is the agent ranking calculated?',
    answer: 'We use PEXA and state title registry data, verified reviews, average sale times, and asking price achieved — weighted by property type and local market conditions.',
  },
  {
    id: '4',
    question: 'Are the agent reviews genuine?',
    answer: 'Yes. All reviews are verified — we only publish reviews from homeowners who completed a sale through an agent listed on Kova.',
  },
  {
    id: '5',
    question: 'Can I compare agents in any Australian postcode?',
    answer: 'We cover all Australian states and territories — NSW, VIC, QLD, WA, SA, TAS, ACT, and NT.',
  },
  {
    id: '6',
    question: 'What happens after I pick an agent?',
    answer: "We connect you directly. There's no obligation — it's simply a free valuation.",
  },
  {
    id: '7',
    question: 'Does this affect my credit score?',
    answer: "No. Kova doesn't perform any credit checks.",
  },
  {
    id: '8',
    question: 'How long does the comparison take?',
    answer: 'Around 60 seconds to get your personalised shortlist.',
  },
];

interface FAQAccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  onClick: () => void;
  isFirst: boolean;
}

function FAQAccordionItem({ item, isOpen, onClick, isFirst }: FAQAccordionItemProps) {
  return (
    <div className={`border-b border-[#e5e5e5] ${isFirst ? 'border-t border-[#e5e5e5]' : ''}`}>
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-4 text-left cursor-pointer"
      >
        <span className="text-[16px] font-bold text-[#0a0a0a] pr-8">
          {item.question}
        </span>
        <ChevronDown
          size={18}
          className="shrink-0 text-[#8a8a8a] transition-transform duration-300"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="overflow-hidden"
          >
            <p className="text-[15px] text-[#525252] leading-relaxed pb-4 pr-8">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface FAQAccordionProps {
  limit?: number;
}

export function FAQAccordion({ limit }: FAQAccordionProps) {
  const items = limit ? faqData.slice(0, limit) : faqData;
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="lg:grid lg:grid-cols-[2fr_3fr] lg:gap-16 lg:items-start">
          <div className="lg:sticky lg:top-24 mb-12 lg:mb-0">
            <span className="text-[11px] font-semibold text-[#C65D3E] uppercase tracking-[0.1em]">
              FAQ
            </span>
            <h2 className="mt-3 text-[clamp(1.75rem,3vw,2.5rem)] font-black text-[#0a0a0a] tracking-tight">
              Common questions
            </h2>
            <p className="mt-3 text-[16px] text-[#525252]">
              Everything you need to know about using Kova.
            </p>
          </div>

          <div>
            {items.map((item, index) => (
              <FAQAccordionItem
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                onClick={() => handleToggle(item.id)}
                isFirst={index === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
