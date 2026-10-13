import React from 'react';
import { Shield, Lock, MapPin, Mail, Phone } from 'lucide-react';

interface FooterProps {
  onOpenInquiry: (pillar?: 'dual') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInquiry }) => {
  return (
    <footer className="bg-[#11100f] border-t border-[#2a2f3a] text-[#e2cfb3] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand & Manifesto */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#"
              className="font-display-crest text-xl sm:text-2xl font-bold tracking-wider text-[#e2cfb3] hover:text-[#c5a880] transition-colors inline-block"
            >
              BH&amp;W Public Relations Firm
            </a>
            <p className="font-serif-editorial text-base text-[#c5a880] italic">
              Quiet Power. Decisive Influence. Uncompromising Integrity.
            </p>
            <p className="text-xs sm:text-sm text-[#e2cfb3]/65 font-sans-clean leading-relaxed max-w-sm">
              Sovereign narrative architectures that insulate enterprise reputation, align regulatory bodies, and shape public sentiment before challenges emerge into public view.
            </p>
          </div>

          {/* Navigation Mirror */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#9a7b54] font-semibold block">
              Architectures &amp; Counsel
            </span>
            <ul className="space-y-2 text-xs font-sans-clean">
              <li>
                <a href="#what-we-do" className="text-[#e2cfb3]/75 hover:text-[#c5a880] transition-colors">
                  What We Solve
                </a>
              </li>
              <li>
                <a href="#sectors" className="text-[#e2cfb3]/75 hover:text-[#c5a880] transition-colors">
                  Who We Protect
                </a>
              </li>
              <li>
                <a href="#approach" className="text-[#e2cfb3]/75 hover:text-[#c5a880] transition-colors">
                  The Approach &amp; Creed
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#e2cfb3]/75 hover:text-[#c5a880] transition-colors">
                  Confidential Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Official Contact & Headquarters */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#9a7b54] font-semibold block">
              Contact &amp; Headquarters
            </span>
            <div className="space-y-3 text-xs text-[#e2cfb3]/80 font-sans-clean">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#e2cfb3] font-medium block">Executive Headquarters</span>
                  <span className="text-[#e2cfb3]/70">500 Capitol Mall, Suite 2350</span>
                  <span className="text-[#e2cfb3]/70 block">Sacramento, CA 95814</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pl-6.5">
                <div>
                  <span className="text-[#9a7b54] text-[11px] uppercase tracking-wider block font-medium">Mailing Address</span>
                  <span className="text-[#e2cfb3]/70">P.O. Box 3195, Carmichael, CA 95609</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-[#c5a880] shrink-0" />
                <a
                  href="tel:9162877127"
                  className="text-[#e2cfb3] hover:text-[#c5a880] transition-colors font-medium"
                >
                  916.287.7127
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenInquiry('dual')}
                className="text-xs font-semibold uppercase tracking-wider text-[#c5a880] hover:text-[#e2cfb3] transition-colors underline underline-offset-4"
              >
                Initiate Confidential Intake Protocol &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* Legal & Security Baseline */}
        <div className="pt-8 border-t border-[#2a2f3a]/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] text-[#e2cfb3]/50 font-sans-clean">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#e2cfb3]/70">
              <Shield className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>Attorney-Client Privilege Aligned</span>
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1.5 text-[#e2cfb3]/70">
              <Lock className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>Strict Non-Disclosure Doctrine</span>
            </span>
          </div>

          <div>
            &copy; {new Date().getFullYear()} BH&amp;W Public Relations Firm. All rights reserved. Confidential.
          </div>
        </div>
      </div>
    </footer>
  );
};
