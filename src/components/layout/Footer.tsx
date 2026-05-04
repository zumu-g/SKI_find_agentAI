import Link from 'next/link';

const forSellers = [
  { label: 'Find Agents', href: '/find-agents' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Guides', href: '#' },
  { label: 'FAQs', href: '#' },
];

const forAgents = [
  { label: 'Join Kova', href: '/for-agents' },
  { label: 'Agent Login', href: '#' },
  { label: 'Pricing', href: '/for-agents' },
];

const company = [
  { label: 'About Us', href: '/about' },
  { label: 'Blog', href: '#' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '#' },
];

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12">
        <div>
          <Link href="/" className="inline-flex items-center gap-2 select-none" aria-label="Kova — home">
            <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect width="48" height="48" rx="12" fill="#C65D3E" />
              <path d="M24 10L10 22H14V37H34V22H38L24 10Z" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeLinejoin="round" />
              <polyline points="10,27 17,20 22,24 30,16 38,14" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <polyline points="33,14 38,14 38,19" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <rect x="20" y="28" width="8" height="9" rx="1.5" fill="rgba(255,255,255,0.4)" />
            </svg>
            <span className="text-[18px] font-black text-[#0a0a0a]">Kova</span>
          </Link>
          <p className="mt-3 text-[13px] text-[#8a8a8a] leading-relaxed max-w-xs">
            Find the right agent. Sell for more.
          </p>
          <div className="mt-4 flex items-center gap-4">
            <Link href="#" aria-label="Twitter / X" className="text-[#8a8a8a] hover:text-[#0a0a0a] transition-colors duration-200">
              <TwitterIcon />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="text-[#8a8a8a] hover:text-[#0a0a0a] transition-colors duration-200">
              <LinkedInIcon />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-[11px] font-semibold text-[#0a0a0a] uppercase tracking-[0.1em] mb-4">
            For Sellers
          </h3>
          <ul>
            {forSellers.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-[14px] text-[#525252] hover:text-[#0a0a0a] py-1 block transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[11px] font-semibold text-[#0a0a0a] uppercase tracking-[0.1em] mb-4">
            For Agents
          </h3>
          <ul>
            {forAgents.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-[14px] text-[#525252] hover:text-[#0a0a0a] py-1 block transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[11px] font-semibold text-[#0a0a0a] uppercase tracking-[0.1em] mb-4">
            Company
          </h3>
          <ul>
            {company.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-[14px] text-[#525252] hover:text-[#0a0a0a] py-1 block transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap items-center justify-between gap-3">
          <p className="text-[12px] text-[#8a8a8a]">
            &copy; 2026 Kova Technology Pty Ltd. All rights reserved.
          </p>
          <p className="text-[11px] text-[#8a8a8a]">
            Verified Data · SSL Secured · Licensed Agents
          </p>
        </div>
      </div>
    </footer>
  );
}
