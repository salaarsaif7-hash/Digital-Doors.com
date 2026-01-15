"use client";

import { useState } from "react";
import appsData from "@/data/plus.json";

interface App {
  id: number;
  name: string;
  category: string;
  description: string;
  price: string;
  version: string;
  icon: string;
}

const Page = () => {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (id: number) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  const handleBuyNow = (app: App) => {
    const message = `Hi! I want to buy "${app.name}" (Price: ${app.price})`;
    const whatsappNumber = "923390129969"; // Apna WhatsApp number
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4 sm:p-6 md:p-8">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-red-500 via-red-400 to-pink-500 bg-clip-text text-transparent">
          🔞 18+ Apps Zone
        </h1>
        <p className="text-gray-400 text-sm sm:text-base md:text-lg">
          Premium Adult Applications Collection
        </p>
        <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 max-w-7xl mx-auto">
        {appsData.map((app) => (
          <div key={app.id} className="group relative">
            {/* Card Glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

            {/* Card Container */}
            <div className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:scale-105">
              
              {/* Image Container */}
              <div className="relative w-full h-48 sm:h-56 md:h-64 bg-gray-900 overflow-hidden flex items-center justify-center">
                {!imageErrors[app.id] ? (
                  <img
                    src={app.icon}
                    alt={app.name}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    onError={() => handleImageError(app.id)}
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-6xl animate-bounce">📱</div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-3 sm:p-4 md:p-5 relative z-10">
                {/* App Name */}
                <h2 className="text-lg sm:text-xl font-bold text-white mb-1 truncate group-hover:text-red-400 transition-colors">
                  {app.name}
                </h2>

                {/* Category Badge */}
                <div className="inline-block mb-3">
                  <span className="px-2 sm:px-3 py-1 bg-gradient-to-r from-red-600 to-pink-600 text-white text-xs font-semibold rounded-full">
                    {app.category}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-xs sm:text-sm mb-3 line-clamp-2 h-8 sm:h-10">
                  {app.description}
                </p>

                {/* Price & Buy Button */}
                <div className="flex justify-between items-center gap-2 sm:gap-3 pt-3 border-t border-gray-700">
                  <div>
                    <p className="text-gray-500 text-xs">Price</p>
                    <p className="font-bold text-base sm:text-lg bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                      {app.price}
                    </p>
                  </div>
                  <button
                    onClick={() => handleBuyNow(app)}
                    className="py-1.5 sm:py-2 px-3 sm:px-6 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:shadow-lg hover:shadow-red-500/50 text-xs sm:text-sm whitespace-nowrap flex items-center gap-2"
                  >
                    <span>🟢</span>
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
