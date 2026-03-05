'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import faqs from '@/data/faqs.json';
import { cn } from '@/lib/utils';

function FAQItem({ question, answer, isOpen, onClick }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className={cn(
          'text-lg font-medium transition-colors pr-4',
          isOpen ? 'text-text' : 'text-text group-hover:text-sage'
        )}>
          {question}
        </span>
        <ChevronDown
          size={20}
          className={cn(
            'shrink-0 text-text-tertiary transition-transform duration-300',
            isOpen && 'rotate-180 text-terra'
          )}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-text-secondary leading-relaxed pr-12">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQAccordion({ limit }: { limit?: number }) {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);
  const items = limit ? faqs.slice(0, limit) : faqs;

  return (
    <section className="py-32 lg:py-40 bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-semibold text-sage uppercase tracking-wider">FAQ</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-text tracking-tight">
            Common questions answered
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="bg-white rounded-2xl shadow-card p-6 sm:p-8">
            {items.map((faq) => (
              <FAQItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={openId === faq.id}
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
