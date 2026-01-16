"use client";

import HeroSection from '@/components/HeroSection'
import { Spotlight } from '@/components/ui/Spotlight-new';
import FeaturedCouses from '@/components/FeaturedCouses';
import FeaturesSectionDemo from '@/components/card';

const page = () => {
  return (
    <main className='min-h-screen bg-black[0.96] anitialised bg-grid-white[0.02]'>
       <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
      />
        
      <HeroSection />
      <FeaturedCouses />
      <FeaturesSectionDemo />

    </main>
  )
}

export default page
