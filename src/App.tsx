import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhatWeDo } from './components/WhatWeDo';
import { Sectors } from './components/Sectors';
import { Approach } from './components/Approach';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';
import { PracticeDossierModal } from './components/PracticeDossierModal';
import { PracticeItem } from './types';

export default function App() {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [inquiryInitialPillar, setInquiryInitialPillar] = useState<'pr' | 'pa' | 'dual' | 'crisis'>('dual');
  const [selectedPractice, setSelectedPractice] = useState<PracticeItem | null>(null);
  const [selectedSector, setSelectedSector] = useState<string>('Green Construction');
  const [activeSection, setActiveSection] = useState('what-we-do');

  // Track active section for top bar highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['what-we-do', 'sectors', 'approach', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenInquiry = (pillar: 'pr' | 'pa' | 'dual' | 'crisis' = 'dual') => {
    setInquiryInitialPillar(pillar);
    setInquiryOpen(true);
  };

  const handleSelectPractice = (practice: PracticeItem) => {
    setSelectedPractice(practice);
  };

  const handleSelectSector = (sectorName: string) => {
    setSelectedSector(sectorName);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#060f1e] text-[#e2cfb3] selection:bg-[#c5a880]/30 selection:text-white font-sans-clean antialiased">
      {/* Sleek Minimalist Navigation Bar */}
      <Navbar
        onOpenInquiry={handleOpenInquiry}
        activeSection={activeSection}
      />

      {/* Main Content Sections: Exact Persuasive Conversion Flow */}
      <main>
        {/* 1. Hero: The Hook (Authority & Protection) */}
        <Hero onOpenInquiry={handleOpenInquiry} />

        {/* 2. What We Actually Do & What We Solve (The Pain Point & Solution, Differentiators & Dual Architecture) */}
        <WhatWeDo
          onSelectPractice={handleSelectPractice}
          onOpenInquiry={(pillar) => handleOpenInquiry(pillar)}
        />

        {/* 3. Who We Protect (Green Construction, Healthcare, Energy, Education, Entertainment) */}
        <Sectors onSelectSector={handleSelectSector} />

        {/* 4. The Approach (How We Protect Your Persona & Prepare You for the Spotlight) */}
        <Approach onOpenInquiry={handleOpenInquiry} />

        {/* 5. The Invitation to Connect (Streamlined, Confident Consultation Form at the End of the Page) */}
        <Contact selectedSector={selectedSector} />
      </main>

      {/* Institutional Footer */}
      <Footer onOpenInquiry={handleOpenInquiry} />

      {/* Interactive Dossier Modal for Individual Practices */}
      <PracticeDossierModal
        practice={selectedPractice}
        onClose={() => setSelectedPractice(null)}
        onConsult={(pillar) => handleOpenInquiry(pillar)}
      />

      {/* Encrypted Confidential Counsel Inquiry Modal */}
      <InquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        initialPillar={inquiryInitialPillar}
      />
    </div>
  );
}
