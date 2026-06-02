import React, { useState } from 'react'
import { useEffect } from 'react';
import { homePageSections } from 'src/api/apiCalling';
import Watch from './homepage/Watch';
import Celebrity from './homepage/Celebrity';
import LazyComponent from './LazyComponent';

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
    <div>

      <LazyComponent>
      <Celebrity/>
      </LazyComponent>

      <LazyComponent>
      <Watch/>
      </LazyComponent>
    </div>
  )
}

export default HomePageSections
