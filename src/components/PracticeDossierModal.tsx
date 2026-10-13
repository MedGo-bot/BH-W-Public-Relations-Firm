import React from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, FileText } from 'lucide-react';
import { PracticeItem } from '../types';

interface PracticeDossierModalProps {
  practice: PracticeItem | null;
  onClose: () => void;
  onConsult: (pillar: 'pr' | 'pa') => void;
}

export const PracticeDossierModal: React.FC<PracticeDossierModalProps> = ({
  practice,
  onClose,
  onConsult
}) => {
  if (!practice) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-[#0b1d3a] border border-[#2a2f3a] text-[#e2cfb3] max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-sm shadow-2xl p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[#2a2f3a] pb-4">
          <div className="space-y-1">
            <div className="text-xs uppercase tracking-widest text-[#c5a880] font-medium flex items-center gap-2">
              <span>{practice.pillarLabel}</span>
              <span aria-hidden="true">·</span>
              <span>Dossier #{practice.number}</span>
            </div>
            <h3 className="font-serif-editorial text-2xl sm:text-3xl font-medium text-[#e2cfb3]">
              {practice.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-[#e2cfb3]/60 hover:text-[#e2cfb3] p-1.5 transition-colors"
            aria-label="Close dossier"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Strategic Objective */}
        <div className="space-y-2">
          <h4 className="text-xs uppercase tracking-wider text-[#9a7b54] font-semibold flex items-center gap-2">
            <FileText className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>Strategic Objective</span>
          </h4>
          <p className="text-sm sm:text-base text-[#e2cfb3]/90 leading-relaxed font-sans-clean bg-[#16181d]/60 p-4 border border-[#2a2f3a]/60 rounded-sm">
            {practice.strategicObjective}
          </p>
        </div>

        {/* Operational Capabilities */}
        <div className="space-y-3">
          <h4 className="text-xs uppercase tracking-wider text-[#9a7b54] font-semibold">
            Operational Capabilities
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {practice.operationalCapabilities.map((cap, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 text-xs text-[#e2cfb3]/80 p-2.5 bg-[#060f1e]/40 border border-[#2a2f3a]/40 rounded-sm"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a880] shrink-0 mt-0.5" />
                <span>{cap}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Case Scenario & Measurable Outcome */}
        <div className="space-y-4 pt-2 border-t border-[#2a2f3a]">
          <div className="space-y-1.5">
            <h4 className="text-xs uppercase tracking-wider text-[#9a7b54] font-semibold">
              Deployment Scenario
            </h4>
            <p className="text-xs sm:text-sm text-[#e2cfb3]/75 italic">
              "{practice.caseScenario}"
            </p>
          </div>

          <div className="space-y-1.5 bg-[#11100f]/80 p-4 border border-[#c5a880]/30 rounded-sm">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#c5a880] font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#c5a880]" />
              <span>Measurable Strategic Outcome</span>
            </div>
            <p className="text-xs sm:text-sm text-[#e2cfb3] font-medium leading-relaxed">
              {practice.measurableOutcome}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[11px] text-[#e2cfb3]/50">
            Governed by strict non-disclosure &amp; privilege doctrine.
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2 text-xs text-[#e2cfb3]/70 hover:text-[#e2cfb3] transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onConsult(practice.pillar);
              }}
              className="w-1/2 sm:w-auto px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#c5a880] text-[#060f1e] hover:bg-[#e2cfb3] transition-colors rounded-sm flex items-center justify-center gap-1.5"
            >
              <span>Consult on This Practice</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
