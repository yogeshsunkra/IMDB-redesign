import React, { useEffect, useState } from 'react'
import HomePageSections from 'src/components/HomePageSections';

const HomePage = () => {

  const [homePageData,setHomePageData] = useState();


  useEffect( ()=>{

    // homePageSections().then(data => {

    //   console.log("INITIAL",data);
    //  if (data){

    // // const result = data.map(d=>({

    // //      name : d.value.name,
    // //      data : d.value.data,
    // //      category:d.value.category,
    // //  }));

    //  setHomePageData(data);

    //  } 


    // }).catch(err => console.log(err,"ERROR"));

    

  },[])

// console.log("HOMEPAGE DATA",homePageData);
  return (
    <div className='w-full h-[200rem]'>
      
    <div className='w-full  xl:w-[95%] 2xl:w-[85%] mx-auto my-4 '>

      {/* hero section */}

      <HomePageSections/>


    </div>



    </div>
  )
}

export default HomePage
