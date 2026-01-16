"use client";

import { useState, useEffect } from "react";
import streamingData from "@/data/Streming.json";

interface StreamingApp {
  id: number;
  name: string;
  category: string;
  description: string;
  price: string;
  icon: string;
  isFeatured?: boolean;
}

const StreamingPage = () => {
  const [apps, setApps] = useState<StreamingApp[]>([]);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  useEffect(() => {
    try {
      setApps(streamingData || []);
    } catch (error) {
      console.error("Error loading data:", error);
      setApps([]);
    }
  }, []);

  const handleImageError = (id: number) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  const handleWatchNow = (app: StreamingApp) => {
    const message = `Hi! I want to buy "${app.name}" (Price: ${app.price})`;
    const whatsappNumber = "923390129969";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black p-4 sm:p-6 md:p-8">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Streaming Apps
        </h1>
        <p className="text-gray-400 text-sm sm:text-base">
          Premium Entertainment Collection
        </p>
        <div className="w-20 sm:w-24 h-1 bg-linear-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Apps Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 max-w-7xl mx-auto">
        {apps.length > 0 ? (
          apps.map((app) => (
            <div key={app.id} className="group relative">
              <div className="absolute -inset-0.5 bg-linear-to-r from-green-500 to-emerald-500 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Card */}
              <div className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:scale-105 h-full flex flex-col">
                
                {/* IMAGE SECTION (BARA + CLEAR) */}
                <div className="relative w-full h-64 sm:h-72 bg-black overflow-hidden">
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
                      <span className="text-4xl">🎬</span>
                    </div>
                  )}

                  {/* PRICE TAG */}
                  <div className="absolute top-2 left-2 bg-green-600 text-white text-xs sm:text-sm font-bold px-3 py-1 rounded-full shadow-lg">
                    {app.price}
                  </div>

                  {/* Featured */}
                  {app.isFeatured && (
                    <div className="absolute top-2 right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                      ⭐ Featured
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold text-white mb-1 truncate">
                      {app.name}
                    </h2>

                    <span className="inline-block mb-3 px-3 py-1 bg-linear-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold rounded-full">
                      {app.category}
                    </span>

                    <p className="text-gray-400 text-xs sm:text-sm line-clamp-2">
                      {app.description}
                    </p>
                  </div>

                  {/* BUY NOW */}
                  <button
                    onClick={() => handleWatchNow(app)}
                    type="button"
                    className="mt-4 w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-xs sm:text-sm"
                  >
                    <span>🟢</span>
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-400 py-12">
            No streaming apps found
          </div>
        )}
      </div>
    </div>
  );
};

export default StreamingPage;
