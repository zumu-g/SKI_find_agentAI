'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { StarRating } from '@/components/ui/StarRating';

const testimonials = [
  {
    name: 'Emma Hartley',
    location: 'London',
    quote: 'Kova matched me with an agent who achieved 4% above asking. I had no idea how to compare agents before this.',
    rating: 5,
    property: '2-bed flat, Hackney',
  },
  {
    name: 'David Chen',
    location: 'Manchester',
    quote: 'The data was eye-opening. Our agent sold in 19 days, faster than anyone else in our area.',
    rating: 5,
    property: '4-bed detached, Didsbury',
  },
  {
    name: 'Sarah Williams',
    location: 'Bristol',
    quote: 'Completely free and genuinely unbiased. I recommended it to my parents.',
    rating: 5,
    property: '3-bed semi, Clifton',
  },
  {
    name: "James O'Brien",
    location: 'Leeds',
    quote: 'Saved me from making a costly mistake with the wrong agent.',
    rating: 4,
    property: '3-bed terrace, Headingley',
  },
  {
    name: 'Priya Patel',
    location: 'Birmingham',
    quote: 'The verified reviews gave me real confidence. Very different to Rightmove.',
    rating: 5,
    property: '4-bed semi, Solihull',
  },
  {
    name: 'Tom Fletcher',
    location: 'Edinburgh',
    quote: 'Incredibly easy. Entered postcode, got three great options, sold in 5 weeks.',
    rating: 5,
    property: '2-bed flat, New Town',
  },
];

function getInitial(name: string) {
  return name.charAt(0).toUpperCase();
}

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[0] }) {
  return (
    <div className="bg-white rounded-[16px] p-7">
      <div className="text-[48px] font-black text-terra leading-none">&ldquo;</div>
      <p className="text-[15px] text-ink leading-relaxed mt-2">{testimonial.quote}</p>
      <div className="mt-5 pt-5 border-t border-border flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-surface text-[12px] font-bold text-ink-secondary flex items-center justify-center shrink-0">
          {getInitial(testimonial.name)}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[13px] font-bold text-ink leading-tight">{testimonial.name}</div>
          <div className="text-[12px] text-ink-tertiary">{testimonial.location}</div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <StarRating rating={testimonial.rating} size={12} />
          <span className="text-[11px] bg-surface rounded-full px-2 py-0.5 text-ink-tertiary">
            {testimonial.property}
          </span>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsCarousel() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);

  const totalPages = Math.ceil(testimonials.length / 2);

  const prev = () => {
    setDirection(-1);
    setPage((p) => (p === 0 ? totalPages - 1 : p - 1));
  };

  const next = () => {
    setDirection(1);
    setPage((p) => (p === totalPages - 1 ? 0 : p + 1));
  };

  const visibleTestimonials = testimonials.slice(page * 2, page * 2 + 2);

  const slideVariants = {
    enter: (dir: number) => ({ opacity: 0, x: dir * 56 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir * -56 }),
  };

  return (
    <section className="bg-surface py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[11px] font-semibold text-terra uppercase tracking-[0.1em]">
            WHAT PEOPLE SAY
          </p>
          <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-black text-ink tracking-tight mt-3">
            Real results, real people
          </h2>
          <p className="text-[16px] text-ink-secondary mt-3">
            Every review is verified — written by homeowners after their sale completed.
          </p>
        </div>

        <div className="overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.38, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="grid md:grid-cols-2 gap-4"
            >
              {visibleTestimonials.map((t, i) => (
                <TestimonialCard key={`${page}-${i}`} testimonial={t} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-ink hover:bg-white transition-colors duration-200"
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={16} />
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > page ? 1 : -1);
                  setPage(i);
                }}
                aria-label={`Go to page ${i + 1}`}
                className={`rounded-full transition-all duration-200 ${
                  i === page
                    ? 'w-4 h-2 bg-terra'
                    : 'w-2 h-2 bg-border'
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-ink hover:bg-white transition-colors duration-200"
            aria-label="Next testimonials"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
