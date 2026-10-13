import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { DISPLAY_PHONE, getWhatsAppUrl, GENERAL_WHATSAPP_MESSAGE } from '../data/pricing';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end flex-col gap-2 pointer-events-auto">
      {/* Small informative bubble */}
      {showTooltip && (
        <div className="relative bg-[#091124] border border-sky-400/40 text-white text-xs py-2 px-3.5 rounded-xl shadow-2xl backdrop-blur-md max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-300 flex items-center gap-2.5">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-1.5 -left-1.5 w-4 h-4 rounded-full bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center text-[10px]"
            aria-label="Dismiss message tooltip"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400 shrink-0" />
          <div>
            <div className="font-semibold text-slate-100">Admissions Active</div>
            <div className="text-[11px] text-slate-400">Chat with Adflect</div>
          </div>
        </div>
      )}

      {/* Primary Floating WhatsApp Button */}
      <a
        href={getWhatsAppUrl(GENERAL_WHATSAPP_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white flex items-center justify-center shadow-xl shadow-emerald-950/60 transition-transform duration-200 hover:scale-105 active:scale-95 border-2 border-white/20 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400 group"
        aria-label={`Chat on WhatsApp with Adflect Admissions (${DISPLAY_PHONE})`}
        title={`WhatsApp Admissions: ${DISPLAY_PHONE}`}
      >
        <MessageCircle className="w-7 h-7 text-white fill-white/10 group-hover:scale-110 transition-transform" />
        
        {/* Subtle ping pulse */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-[#05070D]" />
        </span>
      </a>
    </div>
  );
};
