import React, { useState } from 'react'
import { useEffect } from 'react';
import { homePageSections } from 'src/api/apiCalling';

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
      
    </div>
  )
}

export default HomePageSections
