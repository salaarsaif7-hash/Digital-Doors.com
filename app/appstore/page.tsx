"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import appsData from "@/data/app-data.json";

interface App {
  id: number;
  name: string;
  category: string;
  description: string;
  price: string;
  version?: string;
  icon: string;
}

const AppStorePage = () => {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedApp, setSelectedApp] = useState<App | null>(null);

  // Disable scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedApp ? "hidden" : "auto";
  }, [selectedApp]);

  const handleImageError = (id: number) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  const handleBuyNow = (app: App) => {
    const message = `Hi! I want to buy "${app.name}" (Price: ${app.price})`;
    const whatsappNumber = "923390129969";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const filteredApps =
    searchTerm.trim() === ""
      ? (appsData as App[])
      : (appsData as App[]).filter(
          (app) =>
            app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            app.category.toLowerCase().includes(searchTerm.toLowerCase())
        );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black p-4 sm:p-6 md:p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
          BEST PREMIUM APPS ZONE
        </h1>
        <p className="text-gray-300 text-sm sm:text-base">
          Premium version Ads Free Applications
        </p>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search apps..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full mb-6 px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
      />

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredApps.map((app) => (
          <div
            key={app.id}
            onClick={() => setSelectedApp(app)}
            className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group flex flex-col cursor-pointer"
          >
            {/* Image */}
            <div className="h-64 w-full bg-gray-800 relative flex items-center justify-center">
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
                  📱
                </div>
              )}
            </div>

            {/* App Info */}
            <div className="p-3 flex flex-col flex-1">
              <h2 className="text-white font-bold mt-2">{app.name}</h2>
              <p className="text-gray-400 text-xs">{app.category}</p>
              <p className="text-red-400 font-bold mt-1">{app.price}</p>

              {/* Buttons */}
              <div className="mt-3 flex flex-col gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBuyNow(app);
                  }}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition-all"
                >
                  Buy Now
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedApp(app);
                  }}
                  className="w-full border border-gray-600 hover:border-red-500 text-white py-2 rounded-lg transition-all"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedApp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-2 sm:p-4">
          <div className="bg-gray-900 rounded-xl w-full max-w-md p-4 sm:p-6 relative shadow-2xl">
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
                📱
              </div>
            )}

            {/* App Info */}
            <div className="mt-4 text-center px-2 sm:px-4">
              <h2 className="text-white font-bold text-xl sm:text-2xl">
                {selectedApp.name}
              </h2>
              <p className="text-gray-400 text-sm">{selectedApp.category}</p>
              <p className="text-red-400 font-bold mt-1">
                {selectedApp.price}
              </p>

              <p className="mt-4 text-gray-200 text-sm sm:text-base">
                {selectedApp.description}
              </p>

              {selectedApp.version && (
                <p className="mt-2 text-gray-400 text-sm">
                  Version: {selectedApp.version}
                </p>
              )}

              {/* Modal Buttons */}
              <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
                <button
                  onClick={() => handleBuyNow(selectedApp)}
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-all"
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

export default AppStorePage;
