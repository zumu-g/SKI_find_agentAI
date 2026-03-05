'use client';

import { motion } from 'framer-motion';
import { PostcodeSearch } from '@/components/search/PostcodeSearch';

const trustStats = [
  { label: 'Homeowners Matched', value: '45,000+' },
  { label: 'Verified Agents', value: '2,500+' },
  { label: 'Avg. Price Achieved', value: '98.2%' },
];

function HeroIllustration() {
  return (
    <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Sky background */}
      <circle cx="380" cy="80" r="40" fill="#E8956F" opacity="0.15" />
      <circle cx="380" cy="80" r="28" fill="#E8956F" opacity="0.25" />

      {/* Clouds */}
      <g opacity="0.3">
        <ellipse cx="120" cy="90" rx="40" ry="14" fill="#E8DFD3" />
        <ellipse cx="140" cy="82" rx="30" ry="12" fill="#E8DFD3" />
        <ellipse cx="320" cy="60" rx="35" ry="12" fill="#E8DFD3" />
        <ellipse cx="340" cy="53" rx="25" ry="10" fill="#E8DFD3" />
      </g>

      {/* Birds */}
      <g stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.4">
        <path d="M160 120 Q165 115 170 120 Q175 115 180 120" />
        <path d="M280 90 Q284 86 288 90 Q292 86 296 90" />
        <path d="M200 70 Q203 67 206 70 Q209 67 212 70" />
      </g>

      {/* Left tree */}
      <g>
        <rect x="95" y="300" width="12" height="80" rx="4" fill="#A74A2F" opacity="0.6" />
        <ellipse cx="100" cy="260" rx="50" ry="55" fill="#2D6A4F" />
        <ellipse cx="85" cy="275" rx="35" ry="40" fill="#52B788" opacity="0.7" />
        <ellipse cx="115" cy="250" rx="30" ry="35" fill="#2D6A4F" opacity="0.8" />
      </g>

      {/* Right tree */}
      <g>
        <rect x="395" y="310" width="10" height="70" rx="4" fill="#A74A2F" opacity="0.6" />
        <ellipse cx="400" cy="275" rx="42" ry="48" fill="#2D6A4F" />
        <ellipse cx="415" cy="288" rx="30" ry="35" fill="#52B788" opacity="0.7" />
        <ellipse cx="388" cy="265" rx="28" ry="32" fill="#2D6A4F" opacity="0.8" />
      </g>

      {/* Small bush left */}
      <ellipse cx="55" cy="390" rx="30" ry="22" fill="#52B788" opacity="0.5" />
      <ellipse cx="45" cy="395" rx="20" ry="16" fill="#2D6A4F" opacity="0.6" />

      {/* Small bush right */}
      <ellipse cx="450" cy="395" rx="28" ry="20" fill="#52B788" opacity="0.5" />
      <ellipse cx="460" cy="398" rx="18" ry="14" fill="#2D6A4F" opacity="0.6" />

      {/* Ground / path area */}
      <ellipse cx="250" cy="430" rx="220" ry="50" fill="#D8F3DC" opacity="0.4" />

      {/* Winding path */}
      <path
        d="M250 470 Q240 440 255 410 Q270 380 250 360"
        stroke="#E8DFD3"
        strokeWidth="24"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M250 470 Q240 440 255 410 Q270 380 250 360"
        stroke="#FDF8F3"
        strokeWidth="16"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />

      {/* House - main body */}
      <rect x="175" y="240" width="150" height="120" rx="4" fill="#FDF8F3" stroke="#E8DFD3" strokeWidth="2" />

      {/* House - roof */}
      <path
        d="M160 245 L250 170 L340 245"
        fill="#C65D3E"
        stroke="#A74A2F"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Chimney */}
      <rect x="290" y="185" width="22" height="45" rx="2" fill="#A74A2F" />
      <rect x="286" y="180" width="30" height="8" rx="2" fill="#C65D3E" />
      {/* Smoke */}
      <g opacity="0.3">
        <circle cx="301" cy="168" r="5" fill="#A89F93" />
        <circle cx="308" cy="155" r="6" fill="#A89F93" />
        <circle cx="303" cy="140" r="4" fill="#A89F93" />
      </g>

      {/* Windows - top row */}
      <rect x="200" y="258" width="30" height="30" rx="4" fill="#D8F3DC" stroke="#2D6A4F" strokeWidth="1.5" />
      <line x1="215" y1="258" x2="215" y2="288" stroke="#2D6A4F" strokeWidth="1" opacity="0.5" />
      <line x1="200" y1="273" x2="230" y2="273" stroke="#2D6A4F" strokeWidth="1" opacity="0.5" />

      <rect x="270" y="258" width="30" height="30" rx="4" fill="#D8F3DC" stroke="#2D6A4F" strokeWidth="1.5" />
      <line x1="285" y1="258" x2="285" y2="288" stroke="#2D6A4F" strokeWidth="1" opacity="0.5" />
      <line x1="270" y1="273" x2="300" y2="273" stroke="#2D6A4F" strokeWidth="1" opacity="0.5" />

      {/* Door */}
      <rect x="232" y="310" width="36" height="50" rx="18" fill="#C65D3E" stroke="#A74A2F" strokeWidth="1.5" />
      <circle cx="258" cy="338" r="3" fill="#E8956F" />

      {/* Door step */}
      <rect x="225" y="355" width="50" height="8" rx="2" fill="#E8DFD3" />

      {/* Flowers / plants near house */}
      <g opacity="0.8">
        <circle cx="170" cy="348" r="4" fill="#C65D3E" />
        <circle cx="162" cy="340" r="3" fill="#E8956F" />
        <circle cx="178" cy="342" r="3.5" fill="#C65D3E" />
        <line x1="170" y1="352" x2="170" y2="365" stroke="#52B788" strokeWidth="1.5" />
        <line x1="162" y1="343" x2="162" y2="365" stroke="#52B788" strokeWidth="1.5" />
        <line x1="178" y1="345" x2="178" y2="365" stroke="#52B788" strokeWidth="1.5" />
      </g>
      <g opacity="0.8">
        <circle cx="340" cy="345" r="4" fill="#E8956F" />
        <circle cx="332" cy="338" r="3" fill="#C65D3E" />
        <circle cx="348" cy="340" r="3.5" fill="#E8956F" />
        <line x1="340" y1="349" x2="340" y2="365" stroke="#52B788" strokeWidth="1.5" />
        <line x1="332" y1="341" x2="332" y2="365" stroke="#52B788" strokeWidth="1.5" />
        <line x1="348" y1="343" x2="348" y2="365" stroke="#52B788" strokeWidth="1.5" />
      </g>

      {/* Fence segments */}
      <g stroke="#E8DFD3" strokeWidth="2" opacity="0.6">
        <line x1="135" y1="370" x2="175" y2="370" />
        <line x1="140" y1="358" x2="140" y2="380" />
        <line x1="155" y1="358" x2="155" y2="380" />
        <line x1="170" y1="358" x2="170" y2="380" />
        <line x1="325" y1="370" x2="365" y2="370" />
        <line x1="330" y1="358" x2="330" y2="380" />
        <line x1="345" y1="358" x2="345" y2="380" />
        <line x1="360" y1="358" x2="360" y2="380" />
      </g>

      {/* Small hearts / sparkle accents */}
      <g fill="#C65D3E" opacity="0.3">
        <path d="M430 150 Q432 146 434 150 Q436 146 438 150 Q434 155 430 150Z" />
        <path d="M80 170 Q82 166 84 170 Q86 166 88 170 Q84 175 80 170Z" />
      </g>

      {/* Sparkle stars */}
      <g fill="#E8956F" opacity="0.5">
        <path d="M420 120 L422 126 L428 128 L422 130 L420 136 L418 130 L412 128 L418 126Z" />
        <path d="M70 130 L71.5 134 L75.5 135.5 L71.5 137 L70 141 L68.5 137 L64.5 135.5 L68.5 134Z" />
      </g>
    </svg>
  );
}

function WaveDivider() {
  return (
    <div className="absolute bottom-0 left-0 right-0">
      <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block" preserveAspectRatio="none">
        <path
          d="M0 60V30C120 10 240 0 360 5C480 10 600 30 720 35C840 40 960 25 1080 15C1200 5 1320 10 1380 15L1440 20V60H0Z"
          fill="#F7F0E8"
        />
      </svg>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-sage-50 text-sage text-sm font-medium mb-8">
              AI-Powered Agent Intelligence
            </span>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-text leading-[1.05] mb-8 tracking-tight">
              Find your perfect agent{' '}
              <span className="text-sage">with AI</span>
            </h1>

            <p className="text-lg sm:text-xl text-text-secondary font-normal max-w-lg mb-10 leading-relaxed">
              Compare top-performing local estate agents based on real sales data.
              Free, impartial, and takes 60 seconds.
            </p>

            <PostcodeSearch size="large" />

            <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
              {trustStats.map(({ label, value }) => (
                <div key={label}>
                  <div className="text-2xl font-bold text-text">{value}</div>
                  <div className="text-sm text-text-tertiary">{label}</div>
                </div>
              ))}
            </div>

            {/* Subtle AI visualization element */}
            <div className="mt-10 flex items-center gap-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-sage"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                  />
                ))}
              </div>
              <span className="text-xs text-text-tertiary font-medium">Powered by machine learning</span>
            </div>
          </motion.div>

          {/* Right: Hero Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square max-w-[500px] mx-auto">
              <HeroIllustration />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wavy divider */}
      <WaveDivider />
    </section>
  );
}
