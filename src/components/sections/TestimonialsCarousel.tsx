'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { StarRating } from '@/components/ui/StarRating';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import testimonials from '@/data/testimonials.json';

const testimonialPhotos = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
  'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80',
];

export function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  };

  const next = () => {
    setDirection(1);
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
  };

  const t = testimonials[current];

  return (
    <section className="py-32 lg:py-40 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-20">
          <span className="text-sm font-semibold text-sage uppercase tracking-wider">Testimonials</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-text tracking-tight">
            Trusted by homeowners like you
          </h2>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-3xl shadow-card p-10 sm:p-14 lg:p-20 min-h-[360px] flex items-center">
            <Quote size={56} className="absolute top-10 left-10 text-sage/8" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction * 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -50 }}
                transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="w-full"
              >
                <StarRating rating={t.rating} size={20} className="mb-8 justify-center" />

                <blockquote className="text-xl sm:text-2xl text-text leading-relaxed text-center mb-10 font-normal">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="text-center flex flex-col items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={testimonialPhotos[current % testimonialPhotos.length]}
                    alt={t.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-text">{t.author}</div>
                    <div className="text-sm text-text-secondary">{t.location}</div>
                  </div>
                  {t.outcome && (
                    <div className="mt-1 inline-block px-3 py-1 bg-sage-50 text-sage text-sm font-medium rounded-full">
                      {t.outcome}
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-secondary hover:bg-sage hover:text-white hover:border-sage transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-terra w-6' : 'bg-border hover:bg-text-tertiary'}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-secondary hover:bg-sage hover:text-white hover:border-sage transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
