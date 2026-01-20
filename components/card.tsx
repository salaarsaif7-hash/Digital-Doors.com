"use client";
import React, { useId, useMemo } from "react";
import { motion } from "framer-motion";

// ---------- Types ----------
interface Feature {
  title: string;
  description: string;
  price?: string;
}

type Square = [number, number];

// ---------- Data ----------
const featuresGrid: Feature[] = [
  {
    title: "550+ PREMIUM COURSES",
    description:
      "Digital Marketing, Facebook Ads, Trading, YouTube Growth, Freelancing, Real Money Making & high income skills.",
    price: "199",
  },
  {
    title: "SOFTWARE PACK",
    description:
      "Adobe Suite, 150+ PC tools, Android premium apps, TikTok growth methods & CPM systems.",
    price: "250",
  },
  {
    title: "16000+ PDF BOOKS",
    description:
      "2026 Mega Collection: Rich Dad Poor Dad, Zero to One, Mindset, Time Management & 1000+ best sellers.",
    price: "99",
  },
  {
    title: "170000+ REELS",
    description:
      "Islamic, motivational, quiz, movie clips, magic reels & 99+ viral categories.",
    price: "149",
  },
  {
    title: "PREMIUM DATA",
    description:
      "Graphic bundles, YouTube assets, Lightroom presets, video packs, Shopify & WordPress resources.",
    price: "399",
  },
];

// ---------- Features Section ----------
export const FeaturesSectionDemo: React.FC = () => {
  // Stable pattern for grid overlay
  const squaresPattern: Square[] = useMemo(
    () =>
      Array.from({ length: 5 }).map(() => [
        Math.floor(Math.random() * 4) + 7,
        Math.floor(Math.random() * 6) + 1,
      ]),
    []
  );

  return (
    <section className="py-12 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Premium Digital Collection
          </h2>
          <p className="text-neutral-400 mt-3 max-w-2xl mx-auto">
            Everything you need to grow online — courses, software, reels, books & premium assets
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuresGrid.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative border border-white/10 p-6 rounded-3xl overflow-hidden from-neutral-900 to-black shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <Grid size={22} pattern={squaresPattern} />

              <h3 className="text-lg font-bold text-white relative z-20">
                {feature.title}
              </h3>

              <p className="text-neutral-400 mt-3 text-sm leading-relaxed relative z-20">
                {feature.description}
              </p>

              {feature.price && (
                <div className="mt-4 relative z-20">
                  <span className="inline-flex items-center gap-1 bg-red-600/10 group-hover:bg-red-600 text-red-400 group-hover:text-white font-semibold px-4 py-2 rounded-full text-sm transition-all">
                    Rs. {feature.price}
                  </span>
                </div>
              )}

              {/* Glow effect */}
              {/* <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-red-500/10 blur-3xl group-hover:bg-red-500/20 transition-all duration-500" /> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ---------- Grid Overlay ----------
export const Grid: React.FC<{ pattern?: Square[]; size?: number }> = ({
  pattern,
  size,
}) => {
  const p = pattern ?? [];

  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full opacity-60">
      <div className="absolute inset-0 from-zinc-900/30 to-zinc-900/10">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full mix-blend-overlay stroke-white/10"
        />
      </div>
    </div>
  );
};

// ---------- Grid Pattern ----------
export function GridPattern({
  width,
  height,
  x,
  y,
  squares,
  className,
}: {
  width: number;
  height: number;
  x?: string;
  y?: string;
  squares?: Square[];
  className?: string;
}) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" className={className}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>

      <rect width="100%" height="100%" fill={`url(#${patternId})`} />

      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([px, py], idx) => (
            <rect
              key={idx}
              width={width + 1}
              height={height + 1}
              x={px * width}
              y={py * height}
              className="fill-white/5"
            />
          ))}
        </svg>
      )}
    </svg>
  );
}

export default FeaturesSectionDemo;
