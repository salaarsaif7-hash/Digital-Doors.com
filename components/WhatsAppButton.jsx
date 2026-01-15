'use client';

import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '923390129969';

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <div className="fixed md:left-6 md:top-4/5 md:transform md:-translate-y-1/2 left-6 bottom-6 md:bottom-auto right-auto z-50">
      <button
        onClick={handleClick}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-full shadow-lg flex items-center gap-2 md:gap-3 transition-all duration-300 transform hover:scale-110"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle
          size={24}
          className="md:w-7 md:h-7 transition-all duration-300 hover:animate-bounce"
        />
        <span className="md:inline">WhatsApp</span>
      </button>
    </div>
  );
}
