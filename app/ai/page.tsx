"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import streamingData from "@/data/aiapps.json";

interface StreamingApp {
  id: number;
  name: string;
  category: string;
  description: string;
  price: string;
  icon: string;
  isFeatured?: boolean;
}

const AiAppPage = () => {
  const [apps, setApps] = useState<StreamingApp[]>([]);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const [selectedApp, setSelectedApp] = useState<StreamingApp | null>(null);

  // Disable scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedApp ? "hidden" : "auto";
  }, [selectedApp]);

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
    <div className="min-h-screen  from-gray-900 via-gray-800 to-black p-4 sm:p-6 md:p-8">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl text-white sm:text-4xl md:text-5xl font-bold mb-2  from-blue-500 via-purple-500 to-pink-500 bg-clip-text">
          BEST AI TOOLS
        </h1>
        <p className="text-gray-400 text-sm sm:text-base">
          AI Premium version Collection
        </p>
        <div className="w-20 sm:w-24 h-1  from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {apps.length > 0 ? (
          apps.map((app) => (
            <div
              key={app.id}
              className="bg-gray-900 rounded-xl overflow-hidden group flex flex-col cursor-pointer"
              onClick={() => setSelectedApp(app)}
            >
              {/* Image */}
              <div className="h-64 sm:h-72 w-full bg-gray-800 relative flex items-center justify-center">
                {!imageErrors[app.id] ? (
                  <Image
                    src={app.icon}
                    alt={app.name}
                    fill
                    className="object-cover rounded-md"
                    onError={() => handleImageError(app.id)}
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center text-4xl">
                    🎬
                  </div>
                )}

                {/* Price */}
                <div className="absolute top-2 left-2 bg-green-600 text-white text-xs sm:text-sm font-bold px-3 py-1 rounded-full shadow-lg">
                  {app.price}
                </div>
              </div>

              {/* App Info */}
              <div className="p-3 flex flex-col flex-1">
                <h2 className="text-white font-bold mt-2">{app.name}</h2>
                <p className="text-gray-400 text-xs">{app.category}</p>

                {/* Buttons */}
                <div className="mt-3 flex flex-col gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleWatchNow(app);
                    }}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition-all"
                  >
                    Buy Now
                  </button>
                  <button
                    onClick={() => setSelectedApp(app)}
                    className="w-full border border-gray-600 hover:border-green-500 text-white py-2 rounded-lg transition-all"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-400 py-12">
            No AI apps found
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedApp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-2 sm:p-4">
          <div className="bg-gray-900 rounded-xl w-md sm:max-w-md md:max-w-md lg:max-w-md p-4 sm:p-6 relative shadow-2xl">

            {/* App Image */}
            {!imageErrors[selectedApp.id] ? (
              <div className="relative w-full h-48 sm:h-64">
                <Image
                  src={selectedApp.icon}
                  alt={selectedApp.name}
                  fill
                  className="object-cover rounded-md"
                  onError={() => handleImageError(selectedApp.id)}
                />
              </div>
            ) : (
              <div className="h-40 w-full flex items-center justify-center text-4xl">
                🎬
              </div>
            )}

            {/* App Info */}
            <div className="mt-4 text-center px-2 sm:px-4">
              <h2 className="text-white font-bold text-xl sm:text-2xl">
                {selectedApp.name}
              </h2>
              <p className="text-gray-400 text-sm">{selectedApp.category}</p>
              <p className="text-green-400 font-bold mt-1">{selectedApp.price}</p>
              <p className="mt-4 text-gray-200 text-sm sm:text-base">
                {selectedApp.description}
              </p>

              {/* Buttons */}
              <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
                <button
                  onClick={() => handleWatchNow(selectedApp)}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-all"
                >
                  Buy Now
                </button>
                <button
                  onClick={() => setSelectedApp(null)}
                  className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-all"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AiAppPage;
