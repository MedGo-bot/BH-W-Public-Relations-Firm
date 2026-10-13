import React, { useState } from 'react';
import { X, ShieldCheck, Lock, Send, CheckCircle2 } from 'lucide-react';
import { InquiryFormData } from '../types';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPillar?: 'pr' | 'pa' | 'dual' | 'crisis';
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  initialPillar = 'dual'
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    organization: '',
    title: '',
    workEmail: '',
    phone: '',
    pillarInterest: initialPillar,
    urgency: 'immediate',
    briefDescription: '',
    attorneyPrivilegeRequested: true,
    ndaRequired: true
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.workEmail.trim() || !formData.organization.trim()) {
      setErrorMsg('Please complete your name, organization, and corporate email.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="bg-[#0b1d3a] border border-[#2a2f3a] text-[#e2cfb3] max-w-2xl w-full max-h-[92vh] overflow-y-auto rounded-sm shadow-2xl p-6 sm:p-10 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[#2a2f3a] pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#c5a880] font-semibold">
              <Lock className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>Encrypted Strategic Intake</span>
              <span aria-hidden="true">·</span>
              <span>Strict Discretion</span>
            </div>
            <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#e2cfb3] font-normal">
              Initiate Confidential Counsel
            </h3>
            <p className="text-xs text-[#e2cfb3]/70 font-sans-clean">
              Direct Counsel: <a href="tel:9162877127" className="text-[#c5a880] hover:underline font-medium">916.287.7127</a> · Sacramento Executive Headquarters
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-[#e2cfb3]/60 hover:text-[#e2cfb3] p-1.5 transition-colors"
            aria-label="Close inquiry modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 space-y-6 text-center">
            <div className="w-16 h-16 rounded-full bg-[#11100f] border border-[#c5a880] mx-auto flex items-center justify-center text-[#c5a880]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h4 className="font-serif-editorial text-2xl text-[#e2cfb3]">
                Inquiry Received Under Confidential Protocol
              </h4>
              <p className="text-xs sm:text-sm text-[#e2cfb3]/75 max-w-md mx-auto font-sans-clean leading-relaxed">
                Thank you, {formData.fullName}. Your advisory briefing has been transmitted directly to senior partners at BH&amp;W Public Relations Firm. All submitted records are quarantined under strict non-disclosure protocol.
              </p>
            </div>

            <div className="p-4 bg-[#11100f] border border-[#2a2f3a] rounded-sm max-w-md mx-auto text-left text-xs space-y-1.5 text-[#e2cfb3]/70">
              <div className="flex justify-between">
                <span className="text-[#9a7b54]">Protocol Reference:</span>
                <span className="font-mono text-[#c5a880]">BHW-CONF-{(Date.now() % 100000).toString().padStart(6, '0')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#9a7b54]">Urgency Tier:</span>
                <span className="capitalize text-[#e2cfb3]">{formData.urgency.replace('_', ' ')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#9a7b54]">Legal Privilege Requested:</span>
                <span className="text-[#e2cfb3]">{formData.attorneyPrivilegeRequested ? 'Affirmed' : 'Standard'}</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#c5a880] text-[#060f1e] hover:bg-[#e2cfb3] transition-colors rounded-sm"
            >
              Return to Website
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {errorMsg && (
              <div className="p-3 bg-red-950/60 border border-red-800 text-xs text-red-200 rounded-sm">
                {errorMsg}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider text-[#9a7b54] font-semibold block">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Eleanor Vance"
                  className="w-full bg-[#060f1e] border border-[#2a2f3a] focus:border-[#c5a880] px-3.5 py-2.5 text-xs sm:text-sm text-[#e2cfb3] placeholder-[#e2cfb3]/30 rounded-sm outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider text-[#9a7b54] font-semibold block">
                  Organization / Entity *
                </label>
                <input
                  type="text"
                  required
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  placeholder="e.g. Apex Meridian Group"
                  className="w-full bg-[#060f1e] border border-[#2a2f3a] focus:border-[#c5a880] px-3.5 py-2.5 text-xs sm:text-sm text-[#e2cfb3] placeholder-[#e2cfb3]/30 rounded-sm outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider text-[#9a7b54] font-semibold block">
                  Corporate Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.workEmail}
                  onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                  placeholder="e.g. e.vance@apexmeridian.com"
                  className="w-full bg-[#060f1e] border border-[#2a2f3a] focus:border-[#c5a880] px-3.5 py-2.5 text-xs sm:text-sm text-[#e2cfb3] placeholder-[#e2cfb3]/30 rounded-sm outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider text-[#9a7b54] font-semibold block">
                  Telephone (Direct / Signal)
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+1 (202) 555-0182"
                  className="w-full bg-[#060f1e] border border-[#2a2f3a] focus:border-[#c5a880] px-3.5 py-2.5 text-xs sm:text-sm text-[#e2cfb3] placeholder-[#e2cfb3]/30 rounded-sm outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider text-[#9a7b54] font-semibold block">
                  Primary Strategic Domain
                </label>
                <select
                  value={formData.pillarInterest}
                  onChange={(e) => setFormData({ ...formData, pillarInterest: e.target.value as any })}
                  className="w-full bg-[#060f1e] border border-[#2a2f3a] focus:border-[#c5a880] px-3 py-2.5 text-xs sm:text-sm text-[#e2cfb3] rounded-sm outline-none transition-colors"
                >
                  <option value="pr">Public Relations (Precision Architecture)</option>
                  <option value="pa">Public Affairs (Bespoke Architecture)</option>
                  <option value="dual">Integrated Dual-Pillar Counsel</option>
                  <option value="crisis">Immediate Crisis Rapid Defense</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider text-[#9a7b54] font-semibold block">
                  Urgency Window
                </label>
                <select
                  value={formData.urgency}
                  onChange={(e) => setFormData({ ...formData, urgency: e.target.value as any })}
                  className="w-full bg-[#060f1e] border border-[#2a2f3a] focus:border-[#c5a880] px-3 py-2.5 text-xs sm:text-sm text-[#e2cfb3] rounded-sm outline-none transition-colors"
                >
                  <option value="immediate">Immediate Rapid Defense (&lt; 24h)</option>
                  <option value="regulatory_window">Regulatory / Legislative Window (1–4 Weeks)</option>
                  <option value="strategic_planning">Strategic Architecture / Long-Term</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs uppercase tracking-wider text-[#9a7b54] font-semibold block">
                Preliminary Situation Summary
              </label>
              <textarea
                rows={3}
                value={formData.briefDescription}
                onChange={(e) => setFormData({ ...formData, briefDescription: e.target.value })}
                placeholder="High-level background regarding the pending regulatory review, media inquiry, transaction, or strategic objective..."
                className="w-full bg-[#060f1e] border border-[#2a2f3a] focus:border-[#c5a880] p-3 text-xs sm:text-sm text-[#e2cfb3] placeholder-[#e2cfb3]/30 rounded-sm outline-none transition-colors"
              />
            </div>

            {/* Privilege & Discretion Checkboxes */}
            <div className="space-y-2 pt-1 border-t border-[#2a2f3a]/60">
              <label className="flex items-start gap-2.5 text-xs text-[#e2cfb3]/80 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.attorneyPrivilegeRequested}
                  onChange={(e) => setFormData({ ...formData, attorneyPrivilegeRequested: e.target.checked })}
                  className="mt-0.5 accent-[#c5a880]"
                />
                <span>Request intake coordination under attorney-client privilege alignment.</span>
              </label>

              <label className="flex items-start gap-2.5 text-xs text-[#e2cfb3]/80 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.ndaRequired}
                  onChange={(e) => setFormData({ ...formData, ndaRequired: e.target.checked })}
                  className="mt-0.5 accent-[#c5a880]"
                />
                <span>Require bilateral non-disclosure agreement prior to operational briefing.</span>
              </label>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-1.5 text-[11px] text-[#e2cfb3]/50">
                <ShieldCheck className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>Protected by 256-bit institutional encryption.</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-1/2 sm:w-auto px-4 py-2 text-xs text-[#e2cfb3]/70 hover:text-[#e2cfb3] transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 sm:w-auto px-6 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#c5a880] text-[#060f1e] hover:bg-[#e2cfb3] transition-colors rounded-sm flex items-center justify-center gap-2"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
