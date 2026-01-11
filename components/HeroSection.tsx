"use client";
import React from 'react'
import Link from 'next/link'

import { Button } from "./ui/moving-border";
import { BackgroundGradient } from './ui/background-gradient';

const heroSection = () => {
  return (


    <div 
    className='h-auto md:h[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
       




       <div className='p-4 relative z-10 w-full text-center bg-black rounded-md flex flex-col items-center justify-center mx-auto text-white'>
            <h1 className='text-4xl md:text-6xl font-bold'>Opening Doors to Digital Success</h1>
            <p className='mt-4 text-lg md:text-xl'>Access Premium.Pay Peanuts.Exclusive deals on Apps,Games & tools you actually need</p>
            <div className='mt-6 flex justify-center gap-4 bg-black text-white'>
                <Link href={"/apppage"}>
                <Button
                  className="bg-black text-white border-neutral-200 dark:border-slate-800"
                >
                  Explore Apps
                </Button>
                </Link>
            </div>
        


        </div>



    </div>
  )
}

export default heroSection