import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowUpRight, MessageCircle } from 'lucide-react';
import { DISPLAY_PHONE, getWhatsAppUrl, GENERAL_WHATSAPP_MESSAGE } from '../data/pricing';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Curriculum', href: '#curriculum' },
    { label: 'Deliverables', href: '#deliverables' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Admissions', href: '#admissions' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#030611]/90 backdrop-blur-md border-b border-sky-900/30 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Brand Wordmark (Zone 1) - Clean pure typography without any icon/logo */}
          <a
            href="#"
            className="group whitespace-nowrap shrink-0 text-decoration-none"
            aria-label="Adflect NextGen Program Home"
          >
            <span className="text-lg sm:text-xl font-extrabold tracking-wider text-white group-hover:text-sky-300 transition-colors uppercase font-mono">
              ADFLECT <span className="text-sky-400 font-semibold tracking-normal">NEXTGEN</span>
            </span>
          </a>

          {/* Navigation Links (Zone 2) - Desktop */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-sky-400 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200 whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Quick Admission Contact */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <a
              href={`tel:${DISPLAY_PHONE.replace(/\s+/g, '')}`}
              className="text-xs text-slate-400 hover:text-sky-300 transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0"
              title="Call Admissions Desk"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span className="font-mono">{DISPLAY_PHONE}</span>
            </a>

            <a
              href={getWhatsAppUrl(GENERAL_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 rounded-lg transition-all duration-200 shadow-md shadow-sky-500/25 flex items-center gap-1.5 whitespace-nowrap shrink-0 border border-sky-400/30"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Admissions Desk</span>
              <ArrowUpRight className="w-3 h-3 text-sky-200" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={getWhatsAppUrl(GENERAL_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-sky-400 hover:text-white bg-sky-950/40 border border-sky-800/40 rounded-lg sm:hidden"
              aria-label="WhatsApp Admission"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-sky-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 px-4 bg-[#090E1D]/95 backdrop-blur-xl border border-sky-900/40 rounded-xl shadow-2xl">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-sky-950/40 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-slate-800/80 flex flex-col gap-3">
                <a
                  href={`tel:${DISPLAY_PHONE.replace(/\s+/g, '')}`}
                  className="px-3 py-2 text-xs font-mono text-slate-300 hover:text-sky-300 flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-sky-400" />
                  <span>Call: {DISPLAY_PHONE}</span>
                </a>
                <a
                  href={getWhatsAppUrl(GENERAL_WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-center text-white bg-gradient-to-r from-sky-600 to-blue-600 rounded-lg shadow-md flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp Admissions</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
