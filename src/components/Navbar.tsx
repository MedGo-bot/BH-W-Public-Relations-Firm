import React, { useState, useEffect } from 'react';
import { Shield, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenInquiry: (pillar?: 'pr' | 'pa' | 'dual' | 'crisis') => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (docHeight > 0) {
        const progress = (scrollTop / docHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'What We Solve', href: '#what-we-do' },
    { label: 'Who We Protect', href: '#sectors' },
    { label: 'The Approach', href: '#approach' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#060f1e]/95 backdrop-blur-md border-b border-[#2a2f3a]'
          : 'bg-gradient-to-b from-[#060f1e]/90 to-transparent border-b border-transparent'
      }`}
    >
      {/* Subtle Horizontal Scroll Progress Bar at the very top of the viewport */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] bg-transparent pointer-events-none z-50"
        aria-hidden="true"
      >
        <div
          className="h-full bg-[#c5a880] transition-[width] duration-100 ease-out shadow-[0_0_10px_rgba(197,168,128,0.7)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark in display face */}
        <a
          href="#"
          className="font-display-crest flex items-center gap-2.5 sm:gap-3 group shrink-0"
        >
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#c5a880] group-hover:scale-125 transition-transform shrink-0" />
          <span className="text-base sm:text-lg md:text-xl font-bold tracking-wider text-[#e2cfb3] group-hover:text-[#c5a880] transition-colors whitespace-nowrap">
            BH&amp;W Public Relations Firm
          </span>
        </a>

        {/* Zone 2: 5 clean text navigation links (About is last as specified) */}
        <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                className={`transition-colors py-1 relative ${
                  isActive
                    ? 'text-[#c5a880] font-medium'
                    : 'text-[#e2cfb3]/75 hover:text-[#e2cfb3]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#c5a880]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => onOpenInquiry('dual')}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#060f1e] bg-[#c5a880] hover:bg-[#e2cfb3] transition-colors rounded-sm shadow-sm"
          >
            <span>Confidential Inquiry</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#e2cfb3] hover:text-[#c5a880] p-2 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#060f1e] border-b border-[#2a2f3a] px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-[#e2cfb3] hover:text-[#c5a880] py-2 border-b border-[#2a2f3a]/40 tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry('dual');
              }}
              className="w-full py-3 text-xs font-semibold tracking-wider uppercase text-[#060f1e] bg-[#c5a880] hover:bg-[#e2cfb3] transition-colors rounded-sm text-center"
            >
              Initiate Confidential Inquiry
            </button>
          </div>
          <div className="text-[11px] text-[#e2cfb3]/50 flex items-center justify-center gap-2 pt-2">
            <Shield className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>Attorney-Client Privilege Aligned · Strict Non-Disclosure</span>
          </div>
        </div>
      )}
    </header>
  );
};
