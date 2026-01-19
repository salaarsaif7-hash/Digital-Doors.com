'use client';

import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '923390129969';

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <div className="fixed right-5 bottom-5 md:right-6 md:bottom-6 z-50">
      <button
        onClick={handleClick}
        aria-label="Contact us on WhatsApp"
        className="
          relative
          flex items-center gap-3
          bg-green-500 hover:bg-green-600
          text-white font-bold
          py-3 px-5 md:py-4 md:px-6
          rounded-full
          shadow-[0_0_25px_rgba(34,197,94,0.6)]
          transition-all duration-300
          hover:scale-110
          animate-pulse
        "
      >
        {/* Glow Ring */}
        <span className="absolute inset-0 rounded-full bg-green-400 opacity-30 blur-lg animate-ping"></span>

        {/* Icon */}
        <MessageCircle
          size={26}
          className="relative z-10 animate-bounce"
        />

        {/* Text (hidden on mobile) */}
        <span className="relative z-10 hidden md:inline">
          WhatsApp
        </span>
      </button>
    </div>
  );
}
