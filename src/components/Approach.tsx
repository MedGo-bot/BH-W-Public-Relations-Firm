import React, { useState } from 'react';
import { METHOD_PHASES } from '../data/firmData';
import { Compass, Shield, Target, Lock, HeartHandshake, Eye, Scale, ArrowRight, ShieldCheck } from 'lucide-react';

interface ApproachProps {
  onOpenInquiry: (pillar?: 'dual' | 'crisis') => void;
}

export const Approach: React.FC<ApproachProps> = ({ onOpenInquiry }) => {
  const [activeStep, setActiveStep] = useState(0);

  const phaseIcons = [Compass, Target, Shield, Lock];

  return (
    <section id="approach" className="py-24 bg-[#0b1d3a]/30 border-y border-[#2a2f3a]/60 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#c5a880] font-medium">
            <span>The Approach</span>
            <span aria-hidden="true" className="text-[#9a7b54]">·</span>
            <span>Protecting Persona &amp; Preparing for the Spotlight</span>
          </div>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl font-normal text-[#e2cfb3] tracking-tight leading-tight text-balance">
            Quiet Power. Decisive Influence. <br />
            <span className="italic text-[#c5a880]">Uncompromising</span> Integrity.
          </h2>
          <p className="text-sm sm:text-base text-[#e2cfb3]/75 leading-relaxed font-sans-clean">
            In order to empower our clients' position in the world, we must first understand the underlying workings of how to protect their persona and to prepare them for the spotlight.
          </p>
        </div>

        {/* Founding Philosophy & The Shadow in the Dark Principle */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          {/* Main Manifesto */}
          <div className="lg:col-span-7 bg-[#0b1d3a] border border-[#2a2f3a] p-8 sm:p-10 rounded-sm space-y-6 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="border-l-2 border-[#c5a880] pl-4 py-1">
                <span className="text-xs uppercase tracking-widest text-[#c5a880] font-semibold block mb-1">
                  Our Founding Principle
                </span>
                <p className="font-serif-editorial text-xl sm:text-2xl text-[#e2cfb3] italic leading-snug">
                  "Truth, honesty, and a firm belief that our clients' wellbeing is our wellbeing."
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#e2cfb3]/85 font-sans-clean leading-relaxed">
                BH&amp;W Public Relations Firm was established on the conviction that high-profile leadership cannot afford reactive panic. Traditional PR rushes out boilerplate press releases when a crisis hits; traditional lobbying stalls inside legislative committees. 
              </p>

              <p className="text-xs sm:text-sm text-[#e2cfb3]/85 font-sans-clean leading-relaxed">
                We operate as decisive advocates and trusted counselors. By conducting strategic intelligence and proactive message architecture, we defuse community, regulatory, or media backlash before it damages your permit, funding, or executive stature.
              </p>
            </div>

            <div className="pt-6 border-t border-[#2a2f3a]/80 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans-clean">
              <div className="flex items-start gap-2.5">
                <Eye className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-[#e2cfb3] block">Quiet Influence</span>
                  <span className="text-[#e2cfb3]/65">Operating quietly in the background without exposing client vulnerabilities.</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-[#e2cfb3] block">Privileged Counsel</span>
                  <span className="text-[#e2cfb3]/65">Aligned under strict attorney-client privilege coordination.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Three Cornerstones */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            <div className="p-6 bg-[#11100f] border border-[#2a2f3a] rounded-sm space-y-2">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#c5a880] font-semibold">
                <HeartHandshake className="w-4 h-4 text-[#c5a880]" />
                <span>Your Wellbeing Is Our Wellbeing</span>
              </div>
              <p className="text-xs text-[#e2cfb3]/80 font-sans-clean leading-relaxed">
                We measure our success entirely by the enduring protection and elevation of your enterprise—never vanity metrics or billable noise.
              </p>
            </div>

            <div className="p-6 bg-[#11100f] border border-[#2a2f3a] rounded-sm space-y-2">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#c5a880] font-semibold">
                <Shield className="w-4 h-4 text-[#c5a880]" />
                <span>Protect the Persona</span>
              </div>
              <p className="text-xs text-[#e2cfb3]/80 font-sans-clean leading-relaxed">
                Shielding executive reputation against bad-faith attacks, regulatory crossfire, and disinformation before scrutiny spreads.
              </p>
            </div>

            <div className="p-6 bg-[#11100f] border border-[#2a2f3a] rounded-sm space-y-2">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#c5a880] font-semibold">
                <Scale className="w-4 h-4 text-[#c5a880]" />
                <span>Prepare for the Spotlight</span>
              </div>
              <p className="text-xs text-[#e2cfb3]/80 font-sans-clean leading-relaxed">
                Precision media training, narrative blueprints, and hearing preparation so you command the room and define your own story.
              </p>
            </div>
          </div>
        </div>

        {/* 4-Phase Execution Framework */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#c5a880] font-semibold block">
                Execution Framework
              </span>
              <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#e2cfb3]">
                The Four Pillars of Sovereign Defense
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#e2cfb3]/70 font-sans-clean max-w-md">
              A systematic methodology that takes leaders from threat identification to permanent reputational equity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-2">
            {/* Step Selector Column */}
            <div className="lg:col-span-5 space-y-3">
              {METHOD_PHASES.map((phase, idx) => {
                const Icon = phaseIcons[idx];
                const isSelected = activeStep === idx;
                return (
                  <button
                    key={phase.step}
                    onClick={() => setActiveStep(idx)}
                    className={`w-full text-left p-5 rounded-sm border transition-all flex items-start gap-4 ${
                      isSelected
                        ? 'bg-[#0b1d3a] border-[#c5a880] shadow-lg'
                        : 'bg-[#060f1e]/60 border-[#2a2f3a] hover:border-[#9a7b54]/50'
                    }`}
                  >
                    <span
                      className={`font-serif-editorial text-2xl font-bold transition-colors ${
                        isSelected ? 'text-[#c5a880]' : 'text-[#9a7b54]'
                      }`}
                    >
                      {phase.step}
                    </span>
                    <div className="space-y-1">
                      <h4
                        className={`text-base font-serif-editorial font-medium ${
                          isSelected ? 'text-[#e2cfb3]' : 'text-[#e2cfb3]/75'
                        }`}
                      >
                        {phase.name}
                      </h4>
                      <p className="text-xs text-[#e2cfb3]/60 font-sans-clean line-clamp-1">
                        {phase.tagline}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Step Deep Dive Panel */}
            <div className="lg:col-span-7 bg-[#0b1d3a] border border-[#2a2f3a] p-8 sm:p-10 rounded-sm flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-6 border-b border-[#2a2f3a]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-sm bg-[#11100f] border border-[#c5a880] flex items-center justify-center text-[#c5a880]">
                      {React.createElement(phaseIcons[activeStep], { className: 'w-5 h-5' })}
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-[#9a7b54] font-semibold block">
                        Phase {METHOD_PHASES[activeStep].step}
                      </span>
                      <h4 className="font-serif-editorial text-xl sm:text-2xl text-[#e2cfb3]">
                        {METHOD_PHASES[activeStep].name}
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#c5a880]">
                    {METHOD_PHASES[activeStep].tagline}
                  </p>
                  <p className="text-sm text-[#e2cfb3]/85 leading-relaxed font-sans-clean">
                    {METHOD_PHASES[activeStep].description}
                  </p>
                </div>

                <div className="p-4 bg-[#11100f] border border-[#2a2f3a] rounded-sm space-y-1">
                  <span className="text-[11px] uppercase tracking-wider text-[#9a7b54] font-semibold block">
                    Strategic Mandate
                  </span>
                  <p className="text-xs text-[#e2cfb3] font-medium font-sans-clean">
                    {METHOD_PHASES[activeStep].tagline}
                  </p>
                </div>
              </div>

              <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#2a2f3a] mt-8">
                <span className="text-xs text-[#e2cfb3]/60 font-sans-clean">
                  Confidential advisory protocols active.
                </span>
                <a
                  href="#contact"
                  className="px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#060f1e] bg-[#c5a880] hover:bg-[#e2cfb3] transition-colors rounded-sm inline-flex items-center gap-2"
                >
                  <span>Request Strategic Counsel</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
