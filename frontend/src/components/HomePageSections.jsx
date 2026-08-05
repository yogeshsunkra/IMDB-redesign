import React, { Suspense, lazy, useState } from 'react'
import LazyComponent from './LazyComponent';
import HeroComponent from './homepage/HeroComponent';

const Celebrity = lazy(() => import('./homepage/Celebrity'));
const Watch = lazy(() => import('./homepage/Watch'));
const FanFav = lazy(() => import('./homepage/FanFav'));
const Streaming = lazy(() => import('./homepage/Streaming'));

const SectionFallback = () => (
  <div className='h-40 w-full rounded-2xl bg-dark-4/40 animate-pulse' />
);


const HomePageSections = () => {

    //Apply Lazy load sections !!IMPORTANT BY TODAY 


  return (
    <div className='w-full h-full flex flex-col gap-24'>


      <HeroComponent/>

      <LazyComponent>
        <Suspense fallback={<SectionFallback />}>
          <Celebrity/>
        </Suspense>
      </LazyComponent>

      <LazyComponent>
        <Suspense fallback={<SectionFallback />}>
          <Watch/>
        </Suspense>
      </LazyComponent>

      <LazyComponent>
        <Suspense fallback={<SectionFallback />}>
          <FanFav/>
        </Suspense>
      </LazyComponent>

      <LazyComponent>
        <Suspense fallback={<SectionFallback />}>
          <Streaming/>
        </Suspense>
      </LazyComponent>

      



    </div>
  )
}

export default HomePageSections
