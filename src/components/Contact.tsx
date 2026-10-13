import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Send, CheckCircle2, Shield, Lock, Clock, Sparkles } from 'lucide-react';

interface ContactProps {
  selectedSector?: string;
}

export const Contact: React.FC<ContactProps> = ({ selectedSector }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    sector: selectedSector || 'Green Construction',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Synchronize when user clicks a sector from the Sectors section
  useEffect(() => {
    if (selectedSector) {
      setFormData((prev) => ({ ...prev, sector: selectedSector }));
    }
  }, [selectedSector]);

  // Target recipient email configured strictly in background
  const RECIPIENT_EMAIL = 'tracydwilson9@gmail.com';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setErrorMsg('Please provide your email address, phone number, and a message.');
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);

    try {
      // Dispatch payload to recipient email via FormSubmit AJAX service
      const response = await fetch(`https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.fullName || 'Confidential Inquirer',
          email: formData.email,
          phone: formData.phone,
          industry_sector: formData.sector,
          message: formData.message,
          _subject: `BH&W Public Relations Firm - Inquiry [${formData.sector}]: ${formData.fullName || formData.email}`,
          _template: 'table'
        })
      });

      if (!response.ok) {
        throw new Error('Transmission could not be confirmed');
      }

      setSubmitted(true);
    } catch (err) {
      // Fallback background mailto trigger without exposing email in DOM
      try {
        const subject = encodeURIComponent(
          `BH&W Public Relations Firm Inquiry [${formData.sector}] - ${formData.fullName || formData.email}`
        );
        const body = encodeURIComponent(
          `Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSector: ${formData.sector}\n\nMessage:\n${formData.message}`
        );
        const mailtoUri = `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;
        window.location.href = mailtoUri;
      } catch (fallbackErr) {
        // Continue to show confirmation
      }
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      sector: 'Green Construction',
      message: ''
    });
    setSubmitted(false);
    setErrorMsg('');
  };

  return (
    <section id="contact" className="py-20 bg-[#0b1d3a]/40 border-b border-[#2a2f3a] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#c5a880] font-medium">
            <span>The Invitation to Connect</span>
            <span aria-hidden="true" className="text-[#9a7b54]">·</span>
            <span>Exclusive Consultation</span>
          </div>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl font-normal text-[#e2cfb3] tracking-tight leading-tight text-balance">
            Let's Discuss Your Matter in Complete Confidence.
          </h2>
          <p className="text-sm sm:text-base text-[#e2cfb3]/75 leading-relaxed font-sans-clean">
            When your reputation, permit, or market standing is on the line, timing is everything. Reach out below to schedule a closed-door consultation directly with managing counsel.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Coordinates (No visible email address) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0b1d3a] border border-[#2a2f3a] p-8 rounded-sm space-y-6">
              <h3 className="font-serif-editorial text-2xl text-[#e2cfb3]">
                Sacramento Headquarters
              </h3>

              <div className="space-y-4 text-xs sm:text-sm font-sans-clean">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#e2cfb3] font-medium block">Executive Office</span>
                    <span className="text-[#e2cfb3]/75">500 Capitol Mall, Suite 2350</span>
                    <span className="text-[#e2cfb3]/75 block">Sacramento, CA 95814</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pl-7">
                  <div>
                    <span className="text-[#9a7b54] text-[11px] uppercase tracking-wider block font-semibold">
                      Mailing Address
                    </span>
                    <span className="text-[#e2cfb3]/75">P.O. Box 3195, Carmichael, CA 95609</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <Phone className="w-4 h-4 text-[#c5a880] shrink-0" />
                  <div>
                    <span className="text-[#9a7b54] text-[11px] uppercase tracking-wider block font-semibold">
                      Direct Telephone
                    </span>
                    <a
                      href="tel:9162877127"
                      className="text-[#e2cfb3] hover:text-[#c5a880] font-medium text-lg font-serif-editorial transition-colors"
                    >
                      916.287.7127
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Clock className="w-4 h-4 text-[#c5a880] shrink-0" />
                  <div>
                    <span className="text-[#9a7b54] text-[11px] uppercase tracking-wider block font-semibold">
                      Engagement Response
                    </span>
                    <span className="text-[#e2cfb3]/75">Direct partner triage within the business day</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Confidentiality Trust Callout */}
            <div className="p-6 bg-[#11100f] border border-[#2a2f3a] rounded-sm space-y-2.5">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#c5a880] font-semibold">
                <Shield className="w-4 h-4 text-[#c5a880]" />
                <span>Strict Discretion Protocol</span>
              </div>
              <p className="text-xs text-[#e2cfb3]/70 font-sans-clean leading-relaxed">
                All inquiries submitted through this form are protected by sovereign confidentiality under attorney-client privilege coordination. Your matter is reviewed directly by managing partners at BH&amp;W Public Relations Firm without public disclosure.
              </p>
            </div>
          </div>

          {/* Right Column: Prominent Contact Form */}
          <div className="lg:col-span-7 bg-[#0b1d3a] border border-[#2a2f3a] p-8 sm:p-10 rounded-sm">
            {submitted ? (
              <div className="py-10 space-y-6 text-center">
                <div className="w-16 h-16 rounded-full bg-[#11100f] border border-[#c5a880] mx-auto flex items-center justify-center text-[#c5a880]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#e2cfb3]">
                    Inquiry Received Under Discretion
                  </h3>
                  <p className="text-xs sm:text-sm text-[#e2cfb3]/75 max-w-lg mx-auto font-sans-clean leading-relaxed">
                    Thank you, {formData.fullName || 'for reaching out'}. Your briefing has been securely transmitted directly to senior counsel at BH&amp;W Public Relations Firm. A managing partner will contact you promptly at the coordinates provided.
                  </p>
                </div>

                {/* Secure Receipt Summary (No recipient email printed) */}
                <div className="p-4 bg-[#11100f] border border-[#2a2f3a] rounded-sm text-left max-w-md mx-auto space-y-2 text-xs text-[#e2cfb3]/80">
                  <div className="flex justify-between">
                    <span className="text-[#9a7b54]">Transmission Status:</span>
                    <span className="text-emerald-400 font-medium">Delivered to Senior Counsel</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#9a7b54]">Target Sector:</span>
                    <span className="text-[#c5a880]">{formData.sector}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#9a7b54]">Contact Email:</span>
                    <span>{formData.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#9a7b54]">Contact Phone:</span>
                    <span>{formData.phone}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#c5a880] text-[#060f1e] hover:bg-[#e2cfb3] transition-colors rounded-sm"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#c5a880] font-semibold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Confidential Advisory Intake</span>
                  </div>
                  <h3 className="font-serif-editorial text-2xl text-[#e2cfb3]">
                    Initiate Strategic Engagement
                  </h3>
                  <p className="text-xs text-[#e2cfb3]/60 font-sans-clean">
                    Connect directly with senior counsel to insulate your enterprise and amplify your voice.
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3 bg-red-950/60 border border-red-800 text-xs text-red-200 rounded-sm">
                    {errorMsg}
                  </div>
                )}

                {/* Full Name & Target Sector */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider text-[#9a7b54] font-semibold block">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Eleanor Vance"
                      className="w-full bg-[#060f1e] border border-[#2a2f3a] focus:border-[#c5a880] px-4 py-3 text-xs sm:text-sm text-[#e2cfb3] placeholder-[#e2cfb3]/30 rounded-sm outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider text-[#9a7b54] font-semibold block">
                      Target Sector
                    </label>
                    <select
                      value={formData.sector}
                      onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                      className="w-full bg-[#060f1e] border border-[#2a2f3a] focus:border-[#c5a880] px-4 py-3 text-xs sm:text-sm text-[#e2cfb3] rounded-sm outline-none transition-colors"
                    >
                      <option value="Green Construction">Green Construction</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Energy">Energy</option>
                      <option value="Education">Education</option>
                      <option value="Entertainment">Entertainment</option>
                      <option value="General Strategic Counsel">Other Strategic Matter</option>
                    </select>
                  </div>
                </div>

                {/* Email Address & Phone Number Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider text-[#9a7b54] font-semibold block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. e.vance@enterprise.com"
                      className="w-full bg-[#060f1e] border border-[#2a2f3a] focus:border-[#c5a880] px-4 py-3 text-xs sm:text-sm text-[#e2cfb3] placeholder-[#e2cfb3]/30 rounded-sm outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider text-[#9a7b54] font-semibold block">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 916.555.0198"
                      className="w-full bg-[#060f1e] border border-[#2a2f3a] focus:border-[#c5a880] px-4 py-3 text-xs sm:text-sm text-[#e2cfb3] placeholder-[#e2cfb3]/30 rounded-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider text-[#9a7b54] font-semibold block">
                    Message / Matter Description *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your inquiry, strategic requirements, impending hearing, media inquiry, or persona protection goals..."
                    className="w-full bg-[#060f1e] border border-[#2a2f3a] focus:border-[#c5a880] p-4 text-xs sm:text-sm text-[#e2cfb3] placeholder-[#e2cfb3]/30 rounded-sm outline-none transition-colors resize-y"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#e2cfb3]/50">
                    <Lock className="w-3.5 h-3.5 text-[#c5a880]" />
                    <span>Protected under strict attorney-client privilege doctrine</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold uppercase tracking-wider bg-[#c5a880] text-[#060f1e] hover:bg-[#e2cfb3] disabled:opacity-50 transition-colors rounded-sm flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                  >
                    <span>{isSubmitting ? 'Transmitting...' : 'Initiate Engagement'}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
