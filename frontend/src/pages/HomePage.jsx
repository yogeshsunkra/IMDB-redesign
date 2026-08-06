import React, { Suspense, lazy, useState } from 'react'
import LazyComponent from '../components/LazyComponent';
import HeroComponent from '../components/homepage/HeroComponent';

const Celebrity = lazy(() => import('../components/homepage/Celebrity'));
const Watch = lazy(() => import('../components/homepage/Watch'));
const FanFav = lazy(() => import('../components/homepage/FanFav'));
const Streaming = lazy(() => import('../components/homepage/Streaming'));

const SectionFallback = () => (
  <div className='h-40 w-full rounded-2xl bg-dark-4/40 animate-pulse' />
);

const HomePage = () => {

  return (
    <div className='w-full h-max'>

      <div className='w-full  xl:w-[95%] 2xl:w-[85%] mx-auto my-4 '>

        {/* hero section */}

        <div className='w-full h-full flex flex-col gap-24'>


          <HeroComponent />

          <LazyComponent>
            <Suspense fallback={<SectionFallback />}>
              <Celebrity />
            </Suspense>
          </LazyComponent>

          <LazyComponent>
            <Suspense fallback={<SectionFallback />}>
              <Watch />
            </Suspense>
          </LazyComponent>

          <LazyComponent>
            <Suspense fallback={<SectionFallback />}>
              <FanFav />
            </Suspense>
          </LazyComponent>

          <LazyComponent>
            <Suspense fallback={<SectionFallback />}>
              <Streaming />
            </Suspense>
          </LazyComponent>





        </div>


      </div>



    </div>
  )
}

export default HomePage
