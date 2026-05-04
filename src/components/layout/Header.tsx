'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Find Agents', href: '/find-agents' },
  { label: 'For Agents', href: '/for-agents' },
  { label: 'About', href: '/about' },
];

function KovaLogo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <svg
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7 shrink-0"
      >
        <path
          d="M14 2L2 12H5.5V26H22.5V12H26L14 2Z"
          fill="#C65D3E"
        />
        <rect x="11" y="17" width="6" height="9" rx="1" fill="#ffffff" />
      </svg>
      <span className="text-xl font-bold text-ink tracking-tight">Kova</span>
    </Link>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
          <KovaLogo />

          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'text-sm font-medium transition-colors duration-200',
                    isActive
                      ? 'text-ink font-semibold'
                      : 'text-ink-secondary hover:text-ink'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <button
              aria-label="Search"
              className="text-ink-secondary hover:text-ink transition-colors duration-200"
            >
              <Search size={18} />
            </button>
            <Link
              href="/find-agents"
              className="inline-flex items-center justify-center rounded-full bg-terra text-white text-sm font-semibold px-5 py-2 hover:bg-terra-dark transition-colors duration-200 active:scale-[0.97]"
            >
              Find Your Agent
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden p-2 text-ink hover:bg-surface rounded-md transition-colors duration-200"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-ink/30 z-50 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="fixed top-0 right-0 bottom-0 w-[300px] bg-white z-50 lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-border">
                <KovaLogo />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-ink-secondary hover:text-ink rounded-md hover:bg-surface transition-colors duration-200"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex-1 px-3 py-5 flex flex-col gap-0.5">
                {NAV_LINKS.map((item, i) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.045, duration: 0.22 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          'flex items-center py-3 px-4 text-base rounded-md transition-colors duration-150',
                          isActive
                            ? 'font-semibold text-ink bg-surface'
                            : 'font-medium text-ink-secondary hover:text-ink hover:bg-surface'
                        )}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, duration: 0.22 }}
                className="px-6 pb-8"
              >
                <Link
                  href="/find-agents"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center rounded-full bg-terra text-white text-base font-semibold py-3 w-full transition-all duration-200 hover:bg-terra-dark active:scale-[0.97]"
                >
                  Find Your Agent
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
