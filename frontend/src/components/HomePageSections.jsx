import React, { useState } from 'react'
import { useEffect } from 'react';
import { homePageSections } from 'src/api/apiCalling';
import Watch from './homepage/Watch';
import Celebrity from './homepage/Celebrity';
import LazyComponent from './LazyComponent';
import Streaming from './homepage/Streaming';
import HeroComponent from './homepage/HeroComponent';
import FanFav from './homepage/FanFav';


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
      <FanFav/>
      </LazyComponent>

      <LazyComponent>
      <Streaming/>
      </LazyComponent>

      



    </div>
  )
}

export default HomePageSections
