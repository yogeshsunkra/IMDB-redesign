import React, { useEffect, useState } from 'react'
import { useRef, useMemo } from 'react'
import { useParams } from 'react-router-dom';
import LazyComponent from 'src/components/LazyComponent';
import Slider from 'src/components/Slider';
import { useTitleData } from 'src/hooks/useTitleData';
import { simplifiedTitleResponse } from 'src/utils/utilsData';
import Error from 'src/components/Error';
import Skeleton from 'src/components/Skeleton';


const Title = () => {


  const [activeIndex, setActiveIndex] = useState();
  const [titleData, setTitleData] = useState();
  const [credits, setCredits] = useState();

  const box = useRef(null);

  const params = useParams();
  const id = params.id
  console.log(id);


  const {
    data: movieData,
    isLoading: loading,
    error: error,
    refetch

  } = useTitleData(id);




  useEffect(() => {

    if (movieData && !loading) {
      setTitleData(movieData)

      console.log(titleData, "Title PAGE")
      // console.log(titleData?.images?.items, "Person Data")

    }

  }, [loading, movieData])



  const handleToggle = (index) => {

    if (activeIndex !== index) {
      setActiveIndex(index);
    }
    else {
      setActiveIndex(null)
    }

  }

  if (error) {
    return (
      <Error onRetry={refetch} className='!min-h-screen' />
    )
  }

  const loaderArray = Array.from({ length: 10 });
  const query = loading ? loaderArray : titleData;


  return (
    <div className='w-full '>

      {query &&

        <>

          < div className='w-full min-h-screen justify-center  bg-no-repeat bg-clip-border bg-center  '
            style={{ backgroundImage: `url(${titleData?.overview?.primaryImage})` }}>

            <div className='w-full min-h-screen  backdrop-blur-2xl bg-gradient-to-t from-dark-4 to-dark-4/70 drop-shadow-2xl '>

              <div className='w-full h-full flex  p-8 xl:w-[80%] mx-auto flex-col gap-4'>


                {/* Name */}

                <Skeleton loading={loading} className={`w-max flex flex-col gap-1 `} skeletonClass="w-[15rem] h-8 bg-dark-4/40  animate-pulse">
                  <span className="flex gap-2 items-end leading-none ">
                    <h1 className='text-3xl'>{titleData?.overview?.primaryTitle}</h1>
                    <p className="text-dark-2 p1 ">{"( I )"}</p>
                  </span>

                  <span className="flex gap-2 items-end leading-none ">
                    <h3 className='text-2xl text-dark-2'>{titleData?.overview?.originalTitle}</h3>

                  </span>

                  <span className='flex gap-2 leading-none items-center'>
                    <p className='p1 text-dark-2 '>{titleData?.overview?.startYear}</p>
                    <p className='p1 text-dark-2 '>{titleData?.overview?.contentRating}</p>
                    <p className='p1 text-dark-2 '>
                      {`${Math.floor((titleData?.overview?.runtimeMinutes || 0) / 60)}h ${((titleData?.overview?.runtimeMinutes || 0) % 60)}m`}
                    </p>
                  </span>

                </Skeleton>



                <div className='w-full h-full grid grid-cols-5 gap-4 '>

                  {/* black screen or video player */}
                  <Skeleton loading={loading} className='w-full h-full min-h-52 rounded-lg bg-black col-span-5 order-1
              md:order-2 md:col-span-4 lg:col-span-3'  ></Skeleton>

                  {/* Videos and images btns */}
                  <div className='w-full flex gap-4  col-span-5 order-2 md:order-3 lg:col-span-1 lg:flex-col min-h-8'>

                    <Skeleton loading={loading} className='flex w-1/2 text-center items-center justify-center bg-dark-2/30  py-2 rounded-2xl lg:h-1/2 lg:w-full '> <p>
                      videos</p></Skeleton>

                    <Skeleton loading={loading} className=' flex w-1/2 text-center items-center justify-center bg-dark-2/30 py-2 rounded-2xl  lg:h-1/2 lg:w-full '> <p> photos</p></Skeleton>
                  </div>

                  {/* profile photo */}
                  <Skeleton loading={loading} className={`w-full h-full rounded-r-2xl rounded-bl-2xl overflow-hidden col-span-2 order-3 aspect-[2/3]  
              md:order-1 md:col-span-1 bg-dark-2/20 `} >
                    <img className='text-center object-cover object-center aspect-[2/3]' src={titleData?.overview?.primaryImage}
                      alt="No Image"
                      loading="lazy" />
                  </Skeleton>

                  {/* synopsis */}
                  <Skeleton loading={loading} className='w-full h-full flex flex-col gap-2   col-span-3 order-4 md:col-span-5 lg:col-span-3  overflow-hidden ' >

                    <div className="w-full h-max flex gap-4 overflow-x-scroll " style={{
                      scrollbarWidth: "none"
                    }}>
                      {titleData?.overview?.interests.map((text, index) => {
                        return (

                          <div key={index} className="w-max h-max rounded-2xl py-2 px-4 text-nowrap bg-dark-1/10 cursor-pointer backdrop-blur-3xl">{text}</div>

                        )
                      })}
                    </div>

                    <p className='line-clamp-5 text-clip'>
                      {titleData?.overview?.description}
                    </p>

                  </Skeleton>

                  {/*  */}
                  <Skeleton loading={loading} className='flex flex-col  gap-4 justify-center items-center w-full col-span-5 order-5 lg:col-span-2 min-h-8  rounded-3xl'>

                    <div className='w-full flex gap-4 p-2 border-b-2 border-dark-2'>
                      <span className='h-full'>Director</span>

                      {titleData?.overview?.directors.map((item, index) => {
                        return (

                          <a key={index} href={`/search/celeb/${item?.id}`} className=" text-blue-700">{item?.fullName}</a>

                        )
                      })}


                    </div>

                    <div className='w-full flex gap-4 p-2 border-b-2 border-dark-2 flex-wrap'>
                      <span className=''>Writers</span>

                      {titleData?.overview?.writers.map((item, index) => {
                        return (

                          <a key={index} href={`/search/celeb/${item?.id}`} className=" text-blue-700 text-nowrap">{item?.fullName}</a>

                        )
                      })}


                    </div>

                    <div className='w-full flex gap-4 p-2 border-b-2 border-dark-2 items-center'>
                      <span>Cast</span>

                      {titleData?.overview?.cast.slice(0, 3).map((item, index) => {
                        return (

                          <a key={index} href={`/search/celeb/${item?.id}`} className=" text-blue-700">{item?.fullName}</a>

                        )
                      })}


                    </div>




                    <div className='flex w-full rounded-2xl  bg-n-1 py-3 px-4 text-dark-3'>
                      + Add to List
                    </div>
                  </Skeleton>

                </div>
              </div>

            </div>
          </div>

          {/*Details  */}

          <div>

            {/* sub nav */}
            <div className='w-full flex justify-center bg-dark-3 py-8'>
              <div className='w-full flex flex-col gap-16  xl:w-[80%] p-8'>

                {/* <div className='border-[1px] border-n-1 rounded-md overflow-hidden mb-12'>
                  <div className='w-full bg-n-1 h-8'></div>
                  <Skeleton loading={loading} className='flex my-4 relative h-8'>
                    <h1 className='h4-bold text-n-1 mx-2 inline-block'>Awards</h1>
                    <p className='p text-lt-2 '>{`${titleData?.awards?.wins} wins & ${titleData?.awards?.nominations} Nominations`}</p>
                    <div className='absolute right-10'> X </div>
                  </Skeleton>
                </div> */}


                {/* Images  */}
                {/* <div className='my-32 flex flex-col gap-4'>
                  <div>
                    <span className='relative inline-block px-4  text-2xl text-n-1'>
                      <span className=' absolute left-0 w-1 h-full bg-n-1 rounded-xl '></span>
                      Photos</span>
                  </div>

                  <Skeleton loading={loading} className='flex  flex-wrap  w-full h-full gap-2 lg:gap-4 overflow-hidden p-8 clamp ' skeletonClass='h-[500px]' >


                    {titleData?.overview?.thumbnails?.map((item, index) => {

                      if (index <= 6) {

                        return (
                          <div key={index} className='w-max h-max rounded-xl overflow-hidden bg-dark-4/30'>
                            <img className='  object-contain min-w-max aspect-[2/3]  min-h-[calc(82.6px)]  xl:min-h-[calc(82.6px)] '
                              src={`${item?.url} `} loading='lazy'
                            />
                          </div>

                        )
                      }
                    })}

                  </Skeleton>



                </div> */}

                { }

                {/* Cast */}
                <div className='mb-32'>
                  <div>
                    <span className='relative inline-block px-4  text-2xl text-n-1'>
                      <span className=' absolute left-0 w-1 h-full bg-n-1 rounded-xl '></span>
                      Cast / Crew</span>
                  </div>

                  {/* <Slider /> */}
                  <LazyComponent>

                    <Slider items={titleData?.overview?.cast} loading={loading} query={(item) => item} error={error} />
                  </LazyComponent>

                </div>



                {/* Videos */}


                {/* Personal details */}

                <div className='flex flex-col gap-8 '>

                  <div >
                    <span className='relative inline-block px-4  text-2xl text-n-1'>
                      <span className=' absolute left-0 w-1 h-full bg-n-1 rounded-xl '></span>
                      Details</span>
                  </div>

                  <div className='relative'>

                    {/* List */}



                    {/* Director */}
                    <div className='flex justify-between py-4 border-b-2
                    border-lt-2/60'>
                      <div className='flex gap-2'>

                        <div className="flex gap-8 items-center">
                          <h1 className='h4'>Director</h1>
                          <span className='p1 text-dark-2 font-bold'> {titleData?.overview?.directors.map((item, index) => {
                            return (

                              <a key={index} href={`/search/celeb/${item?.id}`} className=" text-blue-700">{item?.fullName}</a>

                            )
                          })}</span>
                        </div>
                      </div>


                    </div>

                    {/* Budget */}
                    <div className='flex justify-between py-4 border-b-2
                    border-lt-2/60'>
                      <div className='flex gap-2'>


                        <div className="flex gap-8 items-center">
                          <h1 className='h4'>Budget</h1>

                          <span className='p1 text-dark-2 font-bold mx-2'>{titleData?.overview?.budget.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>

                        </div>
                      </div>


                    </div>


                    {/* Gross Collection */}
                    <div className='flex justify-between py-4 border-b-2
                    border-lt-2/60'>
                      <div className='flex gap-2'>


                        <div className="flex gap-8 items-center">
                          <h1 className='h4'>Worldwide Gross</h1>


                          <span className='p1 text-dark-2 font-bold mx-2'>{titleData?.overview?.grossWorldwide?.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>


                        </div>
                      </div>


                    </div>

                    {/* Release Date */}
                    <div className='flex justify-between py-4 border-b-2
                    border-lt-2/60'>
                      <div className='flex gap-2'>


                        <div className="flex gap-8 items-center">
                          <h1 className='h4'>Release Date</h1>


                          <span className='p1 text-dark-2 font-bold mx-2'>{titleData?.overview?.releaseDate}</span>


                        </div>
                      </div>


                    </div>

                    {/* Production*/}
                    <div className='flex justify-between py-4 border-b-2
                    border-lt-2/60'>
                      <div className='flex gap-2'>


                        <div className="flex gap-8 items-center">
                          <h1 className='h4'>Production</h1>


                          <span className='p1 text-dark-2 font-bold mx-2'> {titleData?.overview?.productionCompanies.map((item, index) => {
                            return (

                              <p key={index} className=" text-dark-2">{item?.name}</p>

                            )
                          })}</span>


                        </div>
                      </div>


                    </div>






                  </div>


                  <div className='mb-32 flex flex-col gap-8'>
                    <div>
                      <span className='relative inline-block px-4  text-2xl text-n-1'>
                        <span className=' absolute left-0 w-1 h-full bg-n-1 rounded-xl '></span>
                        More Like This 
                        </span>
                    </div>

                    {/* <Slider /> */}
                    <LazyComponent>

                      <Slider items={titleData?.similarTitle} loading={loading} query={(item) => item} error={error} />
                    </LazyComponent>

                  </div>


                </div>








              </div>
            </div>
          </div>

        </>


      }





    </div >
  )
}

export default Title
