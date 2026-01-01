import React, { useEffect, useState } from 'react'
import { homePageSections } from 'src/api/apiCalling'

const HomePage = () => {

  const [homePageData,setHomePageData] = useState();


  useEffect( ()=>{

    homePageSections().then(data => {

      console.log("INITIAL",data);
     if (data){

    const result = data.map(d=>({

         name : d.value.name,
         data : d.value.data,
         category:d.value.category,
     }));

     setHomePageData(result);

     }


    }).catch(err => console.log(err,"ERROR"));

    

  },[])

console.log("HOMEPAGE DATA",homePageData);
  return (
    <div className='w-full border-2 border-yellow-500 h-[200rem]'>
      
    <div className='w-full  md:w-[85%] xl:w-[70%] mx-auto my-4 '>

      {/* hero section */}

      <div className='w-full  min-h-screen'>

        {/*for bg image of hero section  */}
        <div className='relative w-full h-full border-2 border-red-600 py-2  px-2 pb-[5.5rem]'>

          {/* responsive div */}
          <div className='relative w-full flex'>
            <div className=' relative w-full flex-initial min-h-[40vh] xl:min-h-[50vh] border-2 border-white rounded-2xl bg-cover shadow-black shadow-2xl' style={{ backgroundImage: `url(${'https://m.media-amazon.com/images/M/MV5BZTA0MzU0YzItZWRjZC00YzllLWFmYjMtZWYzZDgyYzRjYTg5XkEyXkFqcGc@._V1_.jpg'})` }}>
            

           {/* absolute div */}
          <div className='absolute z-10 flex  w-full min-h-[10rem] -bottom-[5.5rem] md:-bottom-[3rem] xl:bottom-2'>
            <div className=' min-h-full min-w-[25%] bg-cover shadow-black shadow-2xl' style={{ backgroundImage: `url(${'https://m.media-amazon.com/images/M/MV5BZTA0MzU0YzItZWRjZC00YzllLWFmYjMtZWYzZDgyYzRjYTg5XkEyXkFqcGc@._V1_.jpg'})` }}>img</div>
            <div className='flex flex-col self-end border-2 border-pink-700 min-h-[12vh] w-full '>
              <div>Title</div>
              <div>Category</div>
              <div>blah blah</div>
            </div>
          </div>
            
            </div>


            <div className='hidden md:flex min-w-[20vw] h-[20rem] border-2 border-green-500'> featured videos
            </div>




          </div>


        </div>

      </div>


    </div>



    </div>
  )
}

export default HomePage
