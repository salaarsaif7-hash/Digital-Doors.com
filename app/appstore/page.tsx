"use client";

import { useState } from "react";
import appsData from "@/data/app-data.json";

interface App {
  id: number;
  name: string;
  category: string;
  description: string;
  price: string;
  version: string;
  icon: string;
}

const AppStorePage = () => {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredApps = searchTerm.trim() === "" 
    ? appsData 
    : appsData.filter((app) =>
        app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.category.toLowerCase().includes(searchTerm.toLowerCase())
      );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black p-4 sm:p-6 md:p-8">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Header */}
      <div className="text-center mb-8 sm:mb-12 relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-3 bg-gradient-to-r from-red-500 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-2xl">
          BEST PREMIUM APPS ZONE
        </h1>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg font-semibold">
          🎯 Premium version Ads Free Applications Collection
        </p>
        <div className="w-24 sm:w-32 h-1.5 bg-gradient-to-r from-red-500 to-pink-500 mx-auto mt-5 rounded-full shadow-lg shadow-red-500/50"></div>
      </div>

      {/* Search Bar */}
      <div className="max-w-7xl mx-auto mb-8 relative z-10">
        <div className="relative">
          <input
            type="text"
            placeholder="Search apps, category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl bg-gray-800 border-2 border-gray-700 text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition-colors text-sm sm:text-base"
          />
          <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-lg">🔍</span>
        </div>
        {searchTerm && (
          <p className="text-gray-400 text-xs sm:text-sm mt-2">
            Found {filteredApps.length} app{filteredApps.length !== 1 ? "s" : ""}
          </p>
        )}
      </div>

      {/* Cards Grid - 2 columns mobile */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 max-w-7xl mx-auto relative z-10">
        {filteredApps.length > 0 ? (
          filteredApps.map((app) => (
            <div key={app.id} className="group relative h-full">
              {/* Premium Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-pink-600 to-red-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-75 transition duration-300 group-hover:shadow-2xl group-hover:shadow-red-500/50"></div>

              {/* Card Container */}
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-700 group-hover:border-red-500/50 h-full flex flex-col">
                
                {/* Image Container */}
                <div className="relative w-full h-40 sm:h-48 md:h-52 lg:h-56 xl:h-64 bg-gradient-to-br from-gray-900 to-black overflow-hidden flex items-center justify-center flex-shrink-0">
                  {!imageErrors[app.id] ? (
                    <img
                      src={app.icon}
                      alt={app.name}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-120 filter group-hover:brightness-110"
                      onError={() => handleImageError(app.id)}
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-black">
                      <div className="text-5xl">📱</div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-3 sm:p-4 md:p-5 relative z-10 flex flex-col flex-grow">
                  {/* App Name */}
                  <h2 className="text-base sm:text-lg md:text-xl font-black text-white mb-2 truncate group-hover:text-red-400 transition-colors drop-shadow-sm">
                    {app.name}
                  </h2>

                  {/* Category Badge */}
                  <div className="inline-block mb-3 w-fit">
                    <span className="px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 bg-gradient-to-r from-red-600 to-pink-600 text-white text-xs font-bold rounded-full shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition-shadow">
                      {app.category}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-xs sm:text-xs md:text-sm mb-3 sm:mb-4 line-clamp-2 font-medium flex-grow">
                    {app.description}
                  </p>

                  {/* Price & Buy Button */}
                  <div className="flex justify-between items-center gap-2 pt-3 sm:pt-4 border-t border-gray-700/50 mt-auto">
                    <div>
                      <p className="text-gray-400 text-xs font-semibold">Price</p>
                      <p className="font-black text-sm sm:text-base md:text-lg bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent drop-shadow-sm">
                        {app.price}
                      </p>
                    </div>
                    <button
                      onClick={() => handleBuyNow(app)}
                      className="py-1.5 sm:py-2 md:py-2.5 px-3 sm:px-4 md:px-5 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-bold rounded-lg md:rounded-xl transition-all duration-200 transform hover:shadow-2xl hover:shadow-red-500/60 text-xs md:text-sm whitespace-nowrap flex items-center gap-1.5 border border-red-400/30 hover:border-red-400/60 active:scale-95"
                    >
                      <span className="text-xs md:text-sm">🟢</span>
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-3 xl:col-span-4 text-center py-12">
            <p className="text-gray-400 text-lg">No apps found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppStorePage;