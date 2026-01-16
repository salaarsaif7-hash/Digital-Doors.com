"use client";

import { useState } from "react";
import appsData from "@/data/app-data.json";

interface App {
  id: number;
  name: string;
  category: string;
  description: string;
  price: string;
  version?: string; // ✅ FIX: optional
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
    <div className="min-h-screen bg-linear-to-br from-gray-950 via-gray-900 to-black p-4 sm:p-6 md:p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-black bg-linear-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
          BEST PREMIUM APPS ZONE
        </h1>
        <p className="text-gray-300 text-sm">
          Premium version Ads Free Applications
        </p>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search apps..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full mb-6 px-4 py-3 rounded-lg bg-gray-800 text-white"
      />

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredApps.map((app) => (
          <div
            key={app.id}
            className="bg-gray-900 rounded-xl p-3 shadow-lg"
          >
            {!imageErrors[app.id] ? (
              <img
                src={app.icon}
                alt={app.name}
                onError={() => handleImageError(app.id)}
                className="h-32 w-full object-contain"
              />
            ) : (
              <div className="h-32 flex items-center justify-center">📱</div>
            )}

            <h2 className="text-white font-bold mt-2">{app.name}</h2>
            <p className="text-gray-400 text-xs">{app.category}</p>
            <p className="text-red-400 font-bold">{app.price}</p>

            <button
              onClick={() => handleBuyNow(app)}
              className="mt-2 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg"
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppStorePage;
