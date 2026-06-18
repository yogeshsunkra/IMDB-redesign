import React, { useState } from 'react'
import { useEffect } from 'react';
import { homePageSections } from 'src/api/apiCalling';
import Watch from './homepage/Watch';
import Celebrity from './homepage/Celebrity';
import LazyComponent from './LazyComponent';
import Explore from './homepage/Explore';
import HeroComponent from './homepage/HeroComponent';
import Footer from './Footer';

const HomePageSections = () => {

    //Apply Lazy load sections !!IMPORTANT BY TODAY 

    const [watchSection,setWatchSection] = useState();
    const [exploreSection,setExploreSection] = useState();
    const [spotlight,setSpotlight] = useState();
    const [misc,setMisc] = useState();
    const [news,setNews] = useState();


    useEffect(()=>{

    },[])



  return (
    <div className='w-full h-full flex flex-col gap-24'>


      <HeroComponent/>

      <LazyComponent>
      <Celebrity/>
      </LazyComponent>

      <LazyComponent>
      <Watch/>
      </LazyComponent>

      <LazyComponent>
      <Explore/>
      </LazyComponent>

      <LazyComponent>
      <Footer/>
      </LazyComponent>


    </div>
  )
}

export default HomePageSections
