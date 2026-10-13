import React from 'react';
import { ArrowDown, Shield, ChevronRight, Lock } from 'lucide-react';
import heroImg from '../assets/images/hero_sovereign_headquarters_1791499991304.jpg';

interface HeroProps {
  onOpenInquiry: (pillar?: 'pr' | 'pa' | 'dual' | 'crisis') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#060f1e]">
      {/* Background Image with Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="BH&W sovereign private advisory headquarters overlooking capital skyline at dusk"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-30 filter brightness-90 contrast-110"
        />
        {/* Measured dark gradient overlays to meet WCAG AA contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060f1e] via-[#060f1e]/80 to-[#060f1e]/60" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#060f1e]/50 to-[#060f1e]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-4xl space-y-8">
          {/* Unboxed Metadata Header (Zero-Pill Rule) */}
          <div className="flex flex-wrap items-center gap-3 text-xs tracking-widest uppercase text-[#c5a880] font-medium">
            <span className="text-[#e2cfb3] font-semibold">BH&amp;W Public Relations Firm</span>
            <span aria-hidden="true" className="text-[#9a7b54]">·</span>
            <span>Public Relations &amp; Public Affairs</span>
            <span aria-hidden="true" className="text-[#9a7b54]">·</span>
            <span>California</span>
          </div>

          {/* Primary Statement: The Hook */}
          <div className="space-y-4">
            <h1 className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#e2cfb3] leading-[1.12] text-balance">
              When your reputation, your project, or your industry is on the line, traditional PR isn't enough—<span className="italic text-[#c5a880]">and traditional lobbying is too slow.</span>
            </h1>
            <p className="font-serif-editorial text-xl sm:text-2xl text-[#c5a880] italic leading-snug">
              BH&amp;W Public Relations Firm shapes public sentiment, builds winning coalitions, and shields leaders before challenges ever reach the public eye.
            </p>
          </div>

          {/* Authoritative Explanatory Prose: Core Creed */}
          <div className="space-y-3 border-l-2 border-[#c5a880] pl-5 py-1">
            <p className="text-xs uppercase tracking-widest text-[#c5a880] font-semibold">
              Quiet Power. Decisive Influence. Uncompromising Integrity.
            </p>
            <p className="text-sm sm:text-base text-[#e2cfb3]/85 leading-relaxed font-sans-clean">
              BH&amp;W Public Relations Firm was founded on three fundamental principles: truth, honesty, and a firm belief that our clients' wellbeing is our wellbeing. In order to empower our clients' position in the world, we must first understand the underlying workings of how to protect their persona and prepare them for the spotlight.
            </p>
          </div>

          {/* Target Sectors Line */}
          <div className="pt-1 flex flex-wrap items-center gap-2 text-xs text-[#e2cfb3]/70 font-sans-clean">
            <span className="text-[#c5a880] uppercase tracking-wider text-[11px] font-semibold">Who We Protect:</span>
            <span>Green Construction</span>
            <span aria-hidden="true" className="text-[#9a7b54]">·</span>
            <span>Healthcare</span>
            <span aria-hidden="true" className="text-[#9a7b54]">·</span>
            <span>Energy</span>
            <span aria-hidden="true" className="text-[#9a7b54]">·</span>
            <span>Education</span>
            <span aria-hidden="true" className="text-[#9a7b54]">·</span>
            <span>Entertainment</span>
          </div>

          {/* CTAs and Interaction */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#contact"
              className="px-7 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#060f1e] bg-[#c5a880] hover:bg-[#e2cfb3] transition-all duration-200 rounded-sm shadow-md text-center flex items-center justify-center gap-2"
            >
              <span>Initiate Confidential Consultation</span>
              <ChevronRight className="w-4 h-4" />
            </a>

            <a
              href="#what-we-do"
              className="px-7 py-3.5 text-xs font-medium tracking-wider uppercase text-[#e2cfb3] border border-[#2a2f3a] hover:border-[#c5a880] hover:text-[#c5a880] transition-colors rounded-sm text-center flex items-center justify-center gap-2 bg-[#0b1d3a]/40"
            >
              <span>Explore What We Solve</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#9a7b54]" />
            </a>
          </div>

          {/* Trust Guarantee hairline bar */}
          <div className="pt-8 border-t border-[#2a2f3a]/60 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-[#e2cfb3]/60">
            <div className="flex items-start gap-2.5">
              <Shield className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-[#e2cfb3] text-xs">Attorney-Client Privilege</p>
                <p className="text-[11px] text-[#e2cfb3]/50">Aligned under strict legal doctrine protocols.</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Lock className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-[#e2cfb3] text-xs">Strict Non-Disclosure</p>
                <p className="text-[11px] text-[#e2cfb3]/50">Zero leak record across institutional engagements.</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="w-4 h-4 rounded-full border border-[#c5a880] flex items-center justify-center text-[9px] text-[#c5a880] font-bold shrink-0 mt-0.5">
                ∑
              </div>
              <div>
                <p className="font-medium text-[#e2cfb3] text-xs">Data-Driven Precision</p>
                <p className="text-[11px] text-[#e2cfb3]/50">Algorithmic sentiment &amp; grassroots micro-targeting.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
