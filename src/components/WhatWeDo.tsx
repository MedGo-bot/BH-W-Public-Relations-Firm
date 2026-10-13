import React, { useState } from 'react';
import { PR_PRACTICES, PA_PRACTICES } from '../data/firmData';
import { PracticeItem, PillarType } from '../types';
import prImg from '../assets/images/pr_precision_editorial_1791500000764.jpg';
import paImg from '../assets/images/pa_capitol_coalition_1791500009257.jpg';
import { ShieldAlert, Users2, Sparkles, Scale, Megaphone, ShieldCheck, ArrowRight, ArrowUpRight } from 'lucide-react';

interface WhatWeDoProps {
  onSelectPractice: (practice: PracticeItem) => void;
  onOpenInquiry: (pillar: 'pr' | 'pa' | 'dual' | 'crisis') => void;
}

export const WhatWeDo: React.FC<WhatWeDoProps> = ({ onSelectPractice, onOpenInquiry }) => {
  const [activePillar, setActivePillar] = useState<PillarType>('all');

  return (
    <section id="what-we-do" className="py-24 bg-[#060f1e] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#c5a880] font-medium">
            <span>Core Capabilities</span>
            <span aria-hidden="true" className="text-[#9a7b54]">·</span>
            <span>What We Actually Do</span>
          </div>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl font-normal text-[#e2cfb3] tracking-tight leading-tight text-balance">
            Real Solutions When the Stakes Are High.
          </h2>
          <p className="text-sm sm:text-base text-[#e2cfb3]/75 leading-relaxed font-sans-clean">
            We don't deal in generic corporate platitudes. We step into contentious environments to protect your enterprise, win over decision-makers, and command public perception.
          </p>
        </div>

        {/* The 3 Core Pain Points & Solutions (Direct & Punchy as requested) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Card 1: Facing Opposition */}
          <div className="bg-[#0b1d3a] border border-[#2a2f3a] p-8 rounded-sm space-y-4 hover:border-[#c5a880]/60 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-sm bg-[#11100f] border border-[#c5a880]/40 flex items-center justify-center text-[#c5a880]">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <span className="text-[11px] uppercase tracking-wider text-[#9a7b54] font-semibold block">
                  Scenario 01
                </span>
                <h3 className="font-serif-editorial text-2xl text-[#e2cfb3]">
                  When You're Facing Opposition
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#e2cfb3]/85 font-sans-clean leading-relaxed">
                We defuse community, regulatory, or media backlash before it kills your permit, funding, or deal. We protect your persona and insulate your reputation before challenges emerge into public view.
              </p>
            </div>
            <div className="pt-4 border-t border-[#2a2f3a]/60">
              <a
                href="#contact"
                className="text-xs font-semibold uppercase tracking-wider text-[#c5a880] hover:text-[#e2cfb3] inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Defuse Opposition</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Need Public Support */}
          <div className="bg-[#0b1d3a] border border-[#2a2f3a] p-8 rounded-sm space-y-4 hover:border-[#c5a880]/60 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-sm bg-[#11100f] border border-[#c5a880]/40 flex items-center justify-center text-[#c5a880]">
                <Users2 className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <span className="text-[11px] uppercase tracking-wider text-[#9a7b54] font-semibold block">
                  Scenario 02
                </span>
                <h3 className="font-serif-editorial text-2xl text-[#e2cfb3]">
                  When You Need Public Support
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#e2cfb3]/85 font-sans-clean leading-relaxed">
                We build authentic grassroots coalitions and digital advocacy campaigns that force decision-makers, municipal councils, and legislative committees to take notice and grant approvals.
              </p>
            </div>
            <div className="pt-4 border-t border-[#2a2f3a]/60">
              <a
                href="#contact"
                className="text-xs font-semibold uppercase tracking-wider text-[#c5a880] hover:text-[#e2cfb3] inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Build Coalitions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 3: Step Into Spotlight */}
          <div className="bg-[#0b1d3a] border border-[#2a2f3a] p-8 rounded-sm space-y-4 hover:border-[#c5a880]/60 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-sm bg-[#11100f] border border-[#c5a880]/40 flex items-center justify-center text-[#c5a880]">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <span className="text-[11px] uppercase tracking-wider text-[#9a7b54] font-semibold block">
                  Scenario 03
                </span>
                <h3 className="font-serif-editorial text-2xl text-[#e2cfb3]">
                  When You Step Into the Spotlight
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#e2cfb3]/85 font-sans-clean leading-relaxed">
                We craft your core message, rigorously train your leadership, and ensure the press and public tell your story on your terms. We prepare you to command the room with poise and sovereign authority.
              </p>
            </div>
            <div className="pt-4 border-t border-[#2a2f3a]/60">
              <a
                href="#contact"
                className="text-xs font-semibold uppercase tracking-wider text-[#c5a880] hover:text-[#e2cfb3] inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Prepare for Spotlight</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Why BH&W (The 3 Core Differentiators as requested) */}
        <div className="mb-20 p-8 sm:p-12 bg-[#11100f] border border-[#2a2f3a] rounded-sm space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#c5a880] font-semibold block">
              The Sovereign Advantage
            </span>
            <h3 className="font-serif-editorial text-2xl sm:text-4xl text-[#e2cfb3]">
              Why BH&amp;W Public Relations Firm?
            </h3>
            <p className="text-xs sm:text-sm text-[#e2cfb3]/70 font-sans-clean">
              Traditional PR agencies stop at the newsroom. Traditional lobbying shops wait until a bill is drafted. We operate across both disciplines with unmatched discretion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4 border-t border-[#2a2f3a]/60">
            {/* Diff 1 */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#c5a880] font-semibold">
                <span className="font-serif-editorial text-base text-[#9a7b54]">01.</span>
                <span>Dual-Discipline Agility</span>
              </div>
              <p className="text-xs sm:text-sm text-[#e2cfb3]/85 font-sans-clean leading-relaxed">
                Public Relations shapes the media; Public Affairs moves the community and policymakers. Doing both under one roof means zero mixed messages and decisive strategic leverage.
              </p>
            </div>

            {/* Diff 2 */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#c5a880] font-semibold">
                <span className="font-serif-editorial text-base text-[#9a7b54]">02.</span>
                <span>Discretion as Standard</span>
              </div>
              <p className="text-xs sm:text-sm text-[#e2cfb3]/85 font-sans-clean leading-relaxed">
                We solve problems quietly in the background without drawing unnecessary attention to your vulnerabilities. Operating under strict attorney-client privilege coordination and non-disclosure.
              </p>
            </div>

            {/* Diff 3 */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#c5a880] font-semibold">
                <span className="font-serif-editorial text-base text-[#9a7b54]">03.</span>
                <span>Relentless Focus on Your Wellbeing</span>
              </div>
              <p className="text-xs sm:text-sm text-[#e2cfb3]/85 font-sans-clean leading-relaxed">
                Built on truth and honesty—we don’t sell fluff, billable hours, or vanity press clippings. We protect your enterprise and ensure your wellbeing is our wellbeing.
              </p>
            </div>
          </div>
        </div>

        {/* Dual Pillar Architecture Breakdown Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-[#c5a880] font-semibold block">
              Architectural Scope
            </span>
            <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#e2cfb3]">
              Explore Our Dual Strategic Architectures
            </h3>
            <p className="text-xs sm:text-sm text-[#e2cfb3]/70 font-sans-clean">
              Click any discipline below to review operational scope, scenarios, and strategic outcomes.
            </p>
          </div>

          {/* Segmented Filter Control */}
          <div className="flex items-center gap-2 p-1 bg-[#0b1d3a] border border-[#2a2f3a] rounded-sm shrink-0">
            <button
              onClick={() => setActivePillar('all')}
              className={`px-3.5 py-1.5 text-xs font-medium tracking-wider uppercase transition-all rounded-sm whitespace-nowrap ${
                activePillar === 'all'
                  ? 'bg-[#c5a880] text-[#060f1e] font-semibold'
                  : 'text-[#e2cfb3]/70 hover:text-[#e2cfb3]'
              }`}
            >
              All Disciplines
            </button>
            <button
              onClick={() => setActivePillar('pr')}
              className={`px-3.5 py-1.5 text-xs font-medium tracking-wider uppercase transition-all rounded-sm whitespace-nowrap ${
                activePillar === 'pr'
                  ? 'bg-[#c5a880] text-[#060f1e] font-semibold'
                  : 'text-[#e2cfb3]/70 hover:text-[#e2cfb3]'
              }`}
            >
              PR Architecture
            </button>
            <button
              onClick={() => setActivePillar('pa')}
              className={`px-3.5 py-1.5 text-xs font-medium tracking-wider uppercase transition-all rounded-sm whitespace-nowrap ${
                activePillar === 'pa'
                  ? 'bg-[#c5a880] text-[#060f1e] font-semibold'
                  : 'text-[#e2cfb3]/70 hover:text-[#e2cfb3]'
              }`}
            >
              Public Affairs Architecture
            </button>
          </div>
        </div>

        {/* The Dual Pillar Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Pillar 1: Public Relations */}
          {(activePillar === 'all' || activePillar === 'pr') && (
            <div className={`space-y-6 ${activePillar === 'pr' ? 'lg:col-span-2' : ''}`}>
              <div className="p-6 bg-[#0b1d3a] border border-[#2a2f3a] rounded-sm space-y-3">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#c5a880] font-semibold">
                  <Megaphone className="w-4 h-4" />
                  <span>Pillar One · Media &amp; Market Influence</span>
                </div>
                <h4 className="font-serif-editorial text-2xl text-[#e2cfb3]">
                  Public Relations: Precision Architecture
                </h4>
                <p className="text-xs sm:text-sm text-[#e2cfb3]/75 font-sans-clean leading-relaxed">
                  Rigorous narrative insulation for leadership facing intense scrutiny, transaction milestones, or generational repositioning.
                </p>
              </div>

              <div className="space-y-3">
                {PR_PRACTICES.map((practice) => (
                  <div
                    key={practice.id}
                    onClick={() => onSelectPractice(practice)}
                    className="group p-5 bg-[#0b1d3a]/60 hover:bg-[#0b1d3a] border border-[#2a2f3a] hover:border-[#c5a880]/60 transition-all rounded-sm cursor-pointer space-y-2"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-baseline gap-2.5">
                        <span className="font-serif-editorial text-base text-[#9a7b54] font-medium">
                          {practice.number}.
                        </span>
                        <h5 className="font-serif-editorial text-lg text-[#e2cfb3] group-hover:text-[#c5a880] transition-colors">
                          {practice.title}
                        </h5>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-[#9a7b54] group-hover:text-[#c5a880] transition-transform shrink-0" />
                    </div>
                    <p className="text-xs text-[#e2cfb3]/70 font-sans-clean pl-6">
                      {practice.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Pillar 2: Public Affairs */}
          {(activePillar === 'all' || activePillar === 'pa') && (
            <div className={`space-y-6 ${activePillar === 'pa' ? 'lg:col-span-2' : ''}`}>
              <div className="p-6 bg-[#0b1d3a] border border-[#2a2f3a] rounded-sm space-y-3">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#c5a880] font-semibold">
                  <Scale className="w-4 h-4 text-[#c5a880]" />
                  <span>Pillar Two · Policy &amp; Grassroots Advocacy</span>
                </div>
                <h4 className="font-serif-editorial text-2xl text-[#e2cfb3]">
                  Public Affairs: Bespoke Strategic Architecture
                </h4>
                <p className="text-xs sm:text-sm text-[#e2cfb3]/75 font-sans-clean leading-relaxed">
                  Strategic advocacy designed to shape regulatory bodies, mobilize authentic community coalitions, and win legislative defense.
                </p>
              </div>

              <div className="space-y-3">
                {PA_PRACTICES.map((practice) => (
                  <div
                    key={practice.id}
                    onClick={() => onSelectPractice(practice)}
                    className="group p-5 bg-[#0b1d3a]/60 hover:bg-[#0b1d3a] border border-[#2a2f3a] hover:border-[#c5a880]/60 transition-all rounded-sm cursor-pointer space-y-2"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-baseline gap-2.5">
                        <span className="font-serif-editorial text-base text-[#9a7b54] font-medium">
                          {practice.number}.
                        </span>
                        <h5 className="font-serif-editorial text-lg text-[#e2cfb3] group-hover:text-[#c5a880] transition-colors">
                          {practice.title}
                        </h5>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-[#9a7b54] group-hover:text-[#c5a880] transition-transform shrink-0" />
                    </div>
                    <p className="text-xs text-[#e2cfb3]/70 font-sans-clean pl-6">
                      {practice.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
