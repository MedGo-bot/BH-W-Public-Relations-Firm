import React, { useState } from 'react';
import { TARGET_SECTORS } from '../data/firmData';
import { TargetSector } from '../types';
import { Shield, Sparkles, Building2, Stethoscope, Zap, GraduationCap, Film, ArrowRight, CheckCircle2 } from 'lucide-react';

interface SectorsProps {
  onSelectSector: (sectorName: string) => void;
}

export const Sectors: React.FC<SectorsProps> = ({ onSelectSector }) => {
  const [activeSectorId, setActiveSectorId] = useState<string>(TARGET_SECTORS[0].id);

  const activeSector = TARGET_SECTORS.find((s) => s.id === activeSectorId) || TARGET_SECTORS[0];

  const sectorIcons: Record<string, React.ElementType> = {
    'green-construction': Building2,
    healthcare: Stethoscope,
    energy: Zap,
    education: GraduationCap,
    entertainment: Film
  };

  return (
    <section id="sectors" className="py-24 bg-[#060f1e] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-14">
          <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#c5a880] font-medium">
            <span>Specialized Industry Counsel</span>
            <span aria-hidden="true" className="text-[#9a7b54]">·</span>
            <span>Who We Protect</span>
          </div>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl font-normal text-[#e2cfb3] tracking-tight leading-tight text-balance">
            Who We Protect.
          </h2>
          <p className="text-sm sm:text-base text-[#e2cfb3]/75 leading-relaxed font-sans-clean">
            We focus our firepower on five high-exposure sectors: <strong className="text-[#e2cfb3] font-medium">Green Construction, Healthcare, Energy, Education, and Entertainment</strong>. For each, we understand the distinct regulatory pressures, public sensitivities, and media scrutiny required to protect your persona and prepare you for the spotlight.
          </p>
        </div>

        {/* Sector Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {TARGET_SECTORS.map((sector) => {
            const Icon = sectorIcons[sector.id] || Building2;
            const isSelected = activeSectorId === sector.id;

            return (
              <button
                key={sector.id}
                onClick={() => setActiveSectorId(sector.id)}
                className={`p-4 text-left border rounded-sm transition-all flex flex-col justify-between gap-3 ${
                  isSelected
                    ? 'bg-[#0b1d3a] border-[#c5a880] shadow-md'
                    : 'bg-[#11100f] border-[#2a2f3a] hover:border-[#9a7b54]/50'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <Icon
                    className={`w-5 h-5 transition-colors ${
                      isSelected ? 'text-[#c5a880]' : 'text-[#9a7b54]'
                    }`}
                  />
                  {isSelected && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]" />
                  )}
                </div>
                <div>
                  <h3
                    className={`font-serif-editorial text-lg transition-colors ${
                      isSelected ? 'text-[#e2cfb3] font-medium' : 'text-[#e2cfb3]/70'
                    }`}
                  >
                    {sector.name}
                  </h3>
                  <span className="text-[11px] text-[#e2cfb3]/45 block truncate font-sans-clean">
                    {sector.tagline}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Sector Strategic Overview Card */}
        <div className="bg-[#0b1d3a] border border-[#2a2f3a] p-8 sm:p-12 rounded-sm space-y-10 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-[#2a2f3a] pb-8">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#c5a880] font-semibold">
                <span>Core Industry Practice</span>
                <span aria-hidden="true">·</span>
                <span>{activeSector.name}</span>
              </div>
              <h3 className="font-serif-editorial text-2xl sm:text-4xl text-[#e2cfb3] font-normal">
                {activeSector.tagline}
              </h3>
              <p className="text-xs sm:text-sm text-[#e2cfb3]/80 font-sans-clean leading-relaxed pt-1">
                {activeSector.focus}
              </p>
            </div>

            <button
              onClick={() => onSelectSector(activeSector.name)}
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider bg-[#c5a880] text-[#060f1e] hover:bg-[#e2cfb3] transition-colors rounded-sm inline-flex items-center justify-center gap-2 shrink-0 self-start lg:self-center"
            >
              <span>Consult on {activeSector.name}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Dual Pillar Breakdown for Sector */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* PR Dimension */}
            <div className="p-6 bg-[#060f1e]/60 border border-[#2a2f3a] rounded-sm space-y-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#c5a880] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#c5a880]" />
                <span>Public Relations Architecture</span>
              </div>
              <p className="text-xs sm:text-sm text-[#e2cfb3]/85 font-sans-clean leading-relaxed">
                {activeSector.prPillar}
              </p>
            </div>

            {/* Public Affairs Dimension */}
            <div className="p-6 bg-[#060f1e]/60 border border-[#2a2f3a] rounded-sm space-y-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#c5a880] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#c5a880]" />
                <span>Public Affairs &amp; Policy Alignment</span>
              </div>
              <p className="text-xs sm:text-sm text-[#e2cfb3]/85 font-sans-clean leading-relaxed">
                {activeSector.publicAffairsPillar}
              </p>
            </div>
          </div>

          {/* Persona Protection & Spotlight Readiness (Core User Requirement) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-[#2a2f3a]/60">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-full bg-[#11100f] border border-[#c5a880]/50 flex items-center justify-center text-[#c5a880] shrink-0 mt-0.5">
                <Shield className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs uppercase tracking-wider text-[#c5a880] font-semibold">
                  How We Protect Your Persona
                </h4>
                <p className="text-xs text-[#e2cfb3]/75 font-sans-clean leading-relaxed">
                  {activeSector.personaProtection}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-full bg-[#11100f] border border-[#c5a880]/50 flex items-center justify-center text-[#c5a880] shrink-0 mt-0.5">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs uppercase tracking-wider text-[#c5a880] font-semibold">
                  How We Prepare You for the Spotlight
                </h4>
                <p className="text-xs text-[#e2cfb3]/75 font-sans-clean leading-relaxed">
                  {activeSector.spotlightReadiness}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
