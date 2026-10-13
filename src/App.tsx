import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutAdflect } from './components/AboutAdflect';
import { CurriculumSection } from './components/CurriculumSection';
import { DeliverablesSection } from './components/DeliverablesSection';
import { LearningApproach } from './components/LearningApproach';
import { PathwaysSection } from './components/PathwaysSection';
import { FounderSection } from './components/FounderSection';
import { AdmissionSteps } from './components/AdmissionSteps';
import { PricingSection } from './components/PricingSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#030612] text-slate-100 flex flex-col selection:bg-sky-500 selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* About Adflect Business Solutions */}
        <AboutAdflect />

        {/* 14 Core Curriculum Areas (Self-contained in-card details) */}
        <CurriculumSection />

        {/* Learning Approach & Methodology */}
        <LearningApproach />

        {/* What You'll Get (Platform, App, Resources, Opportunities) */}
        <DeliverablesSection />

        {/* Career & Business Pathways */}
        <PathwaysSection />

        {/* Founder Mudassir Mirza Spotlight */}
        <FounderSection />

        {/* 4-Step Admission Process */}
        <AdmissionSteps />

        {/* Transparent Pricing Plans (Monthly vs Yearly) */}
        <PricingSection />

        {/* Admissions Desk & Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}

