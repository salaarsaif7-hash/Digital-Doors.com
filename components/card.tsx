import React from "react";
import { useId } from "react";

export function FeaturesSectionDemo() {
  return (
    <div className="py-6 lg:py-10 -mt-28 relative overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-2 max-w-7xl mx-auto">
        {grid.map((feature) => (
          <div
            key={feature.title}
            className="relative bg-linear-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden"
          >
            <Grid size={20} />
            <p className="text-base font-bold text-neutral-800 dark:text-white relative z-20">
              {feature.title}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 mt-4 text-base font-normal relative z-20">
              {feature.description}
            </p>
            {feature.price && (
              <div className="mt-4 relative z-20">
                <span className="inline-block bg-red-500 hover:bg-red-600 text-white font-bold px-4 py-2 rounded-full text-sm">
                  Rs. {feature.price}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const grid = [
  {
    title: "550+ PREMIUM COURSES",
    description:
      "Digital Marketing All Courses, Facebook Ads Paid Courses,Treading Premium Courses,Youtube Paid Courses,Freelancing All Courses,Real Money Making Courses.",
    price: "199"
  },
  { 
    price: "250",
    title: "SOFTWARE",
    description:
      " Tiktok Followers/Likes Method,Adobe All Softwares, 150+Pc Premium Softwares, Andriod Premium Apps,CPM Software and MEthods,.",
  },
  {
    title: "16000+ PDF BOOKS",
    description:
      " UPDATES2026 MEGA DATA ENGLISH,URDU,BOOKS BUNDLES, Rich Dad Poor Dad,Zero to One,Mindset, Time Managment,Think Straight,+1000..,.",
    price: "99"
  },
  {
    title: "170000+REELS",
    description:
      "Perfect for your social media content,Islamic Reels Bundle,Motivational Reels,Quiz Videos,Movie Clips,Magic Reels Bundle,99+More Categories Of Reels Bundles.",
    price: "149"
  },
  {
    title: "PREMIUM DATA",
    description:
      "Biggest Graphic Bundles of all time, Youtube kit(Assets),lightroom Presets Collection,Video Editing Complete Bundles,1000+ Shopoify Themes All india/pakistan Database,WordPress Themes and Plugins.",
    price: "399"
  },
];

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-linear(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
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
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([px, py]: any, idx: number) => (
            <rect
              strokeWidth="0"
              key={`square-${idx}`}
              width={width + 1}
              height={height + 1}
              x={px * width}
              y={py * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
export default FeaturesSectionDemo;