"use client"
import React from 'react'
import {cn} from "../utils/cn"
import { Spotlight } from './ui/Spotlight-new';



export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      
    </div>
  );
}

const FeaturedCouses = () => {
  
  return (
      <div className='py-12 bg-black-900'>
        <div>
          <Spotlight />
            <div className='text-center'>
                <h2 className='text-base text-teal-600 font-semibold tracking-wide'>FEATURED SELL</h2>
                <p className='mt2 text-red-400xl leading-8 font-extrabold tracking-tight text-white sm:text-2xl'>PREMIUM PAID COURSES BUNDLE,EBOOKS FOR BOOKS LOVER,
                  <b>All IN ONE DIGITAL PRODUCTS MEGA BUNDLE PACKS</b>
                   </p>
                   
            </div>
        
            
        </div>
         <div className="h[40rem] flex items-center justify-center w-full mt-10">
     
    </div>
      
        <div className='mt-20 text-center'>
        </div>
        </div>
  )
}

export default FeaturedCouses
