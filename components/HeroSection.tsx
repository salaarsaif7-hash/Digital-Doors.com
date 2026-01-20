"use client";
import React from "react";
import { useRouter } from "next/navigation"; 
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  const router = useRouter();

  const handleExploreClick = () => {
    router.push("/appstore");
  };

  return (
    <div className="h-auto w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 bg-black">
      
      <div className="relative z-10 w-full max-w-4xl text-center bg-black/80 backdrop-blur rounded-2xl flex flex-col items-center justify-center mx-auto text-white">
        
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Opening Doors to Digital Success
        </h1>

        <p className="mt-4 text-lg md:text-xl text-neutral-300">
          Access Premium. Pay Peanuts. Exclusive deals on Apps, Games & tools you actually need
        </p>

        <div className="mt-6 flex justify-center">
          <Button
            onClick={handleExploreClick}
            className="bg-white text-lg font-semibold text-black border-neutral-200 hover:bg-gray-100 transition"
          >
            Explore Apps
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
