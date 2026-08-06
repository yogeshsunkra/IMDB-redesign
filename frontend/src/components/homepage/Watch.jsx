import React, { useState, useContext, useEffect, useRef } from 'react'
// import { DataContext } from 'src/context/DataContext';
import RatingIcon from 'src/assets/ratingIcon.svg?react';
import WatchedIcon from 'src/assets/watchedIcon.svg?react';
import { simplifiedApiResponse } from 'src/utils/utilsData';
import { useHomePageSections } from 'src/hooks/useHomePageSections';
import { NavLink } from 'react-router-dom'
import Skeleton from '../Skeleton';
import Button from '../Button';
import Error from '../Error';

const Watch = () => {



  const [weekTopTen, setWeekTopTen] = useState([]);
  const [isRendered, setIsRendered] = useState(false);

  const ref = useRef();

  const key = ""

  // const { sections, loading } = useContext(DataContext);
  const {
    data: sections,
    isLoading: loading,
    error,
    refetch
  } = useHomePageSections("week-top-ten");

  const toCamelCase = (str) => {
    return str
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9 ]/g, "") // remove special chars
      .split(/\s+/) // handle multiple spaces
      .map((word, index) =>
        index === 0
          ? word
          : word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join("");
  };

  useEffect(() => {

    //  console.log("ERROR Watch",error);

    // console.log(sections, "data in watch")
    // console.log(loading, "loading in watch")

    if (!loading && sections && !isRendered && !error) {

      console.log("RENDERED");

      setWeekTopTen(simplifiedApiResponse(sections?.data?.data));


      requestAnimationFrame(() => {
        setIsRendered(true);
      });

    }

  }, [sections, loading, isRendered])


  if (error) {
    return (
      <Error onRetry={refetch} className="!min-h-[50vh]" />
    )
  }


  const loaderArray = Array.from({ length: 10 });

  const topCards = (loading ? loaderArray : weekTopTen).slice(0, 3);
  const primaryCards = (loading ? loaderArray : weekTopTen).slice(3, 6);
  const secondaryCards = (loading ? loaderArray : weekTopTen).slice(3);


  return (
    <div ref={ref} className='relative w-full overflow-hidden  py-12 '>


      <div className='absolute  flex  top-16  w-full h-[50%] justify-center items-start md:flex '>

        <span className='text-[clamp(2rem,14vw,10rem)]  text-gray-400 font-extrabold opacity-5 -z-20 '>  What to Watch
        </span>
      </div>



      <div className='w-full h-full flex '>


        <div className=' flex flex-col px-4 py-2 gap-4 justify-center items-center '>

          <div className='w-max h-full flex gap-4 items-center justify-center underline-offset-2 '>
            <span className='px-1 py-2 bg-n-1 rounded-full' >
              {/* <img src='/menu/watch-menu.svg'/> */}
            </span>

            <NavLink to={`/search/explore/week-top-ten`} className="w-full h-max">

              <span className='h3 text-dark-1 p-4'>TOP on IMDB this week</span>

            </NavLink>

          </div>

          <p></p>
        </div>

      </div>

      {/* ************ Week Top Ten Section ************* */}

      <div className={`w-full   my-4 flex min-[850px]:flex-row xl:flex-col gap-1 `}>


        {/* ************************ Top 3 cards  ************************ */}
        <div className={`w-full h-full grid p-2 grid-flow-row xl:grid-flow-col xl:grid-cols-7 gap-4`}>

          {/* Dynamic */}

          {topCards.map((item, index) => {

            {/* Index-1 */ }
            return (
              <div key={item?.id || index} className={`w-full h-max  xl:h-full col-span-3
              ${index === 0 ? "xl:col-span-3" : "xl:col-span-2"}
               bg-dark-4 bg-opacity-40  rounded-3xl grid grid-cols-3  xl:grid-cols-2 gap-2 p-6 md:p-4 `} >


                {/* IMAGE */}
                < Skeleton loading={loading} className={`w-full row-span-2 ${index === 0 ? "xl:row-span-2" : "xl:row-span-1"} col-span-1 rounded-2xl rounded-tl-none overflow-hidden aspect-[2/3]`} >
                  <img className=' w-full h-full  object-cover'
                    src={item?.image} loading='lazy' ></img>
                </Skeleton>

                {/* DETAILS */}
                <div className='row-span-2 col-span-2 xl:col-span-1 xl:row-span-1 w-full h-full  flex flex-col gap-2 p-2 pl-0 line-clamp-1 leading-tight break-words'>

                  <Skeleton loading={loading} className='flex flex-col gap-2 px-2 w-full ' >
                    {/* #1 tag */}
                    <div className='relative bg-blue-600 text-white w-max py-1 px-3 rounded-lg rounded-tr-none  font-semibold '> #{item?.rank}

                      <span className='absolute top-0 left-3/4 w-1/3 h-full bg-blue-600 -skew-x-[200deg]'></span>
                    </div>

                    {/* Title */}
                    <div>
                      <p className='text-white  font-extrabold'>{item?.title}</p>
                    </div>


                  </Skeleton>

                  <div className='w-full h-full  flex flex-col gap-2 text-dark-1 py-4 px-2'>

                    <Skeleton loading={loading} className='flex gap-3 font-medium place-items-center' skeletonClass='h-8'>

                      <p>{item?.releaseYear}</p>
                      <p>{item?.runtime}</p>
                      <p>{item?.titleRating}</p>

                    </Skeleton>

                    <Skeleton loading={loading} className='flex gap-1  font-medium place-items-center' skeletonClass='h-8'>
                      <RatingIcon className="w-[1.125rem] h-auto " />
                      <p>{item?.rating}</p>
                    </Skeleton>
                    <Skeleton loading={loading} className='flex gap-1  font-medium place-items-center' skeletonClass='h-8'>
                      <WatchedIcon className="w-[1.125rem] h-auto " />
                      <p className='text-blue-500 '>Mark as Watched</p>
                    </Skeleton>

                  </div>

                </div>

                {/* PLOT */}
                <Skeleton loading={loading} className={`hidden  xl:block ${index === 0 ? "col-span-1" : "col-span-2"} row-span-1  w-full h-full `} >

                  <p className='line-clamp-5 p2'>{item?.plot}</p>
                </Skeleton>

              </div>
            )

          })}



        </div>

        {/* ********************* Medium Device Only *********************** */}
        <div className={`hidden min-[850px]:grid xl:hidden w-full h-max  p-2 grid-flow-row  gap-4 `}>


          {primaryCards.map((item, index) => {

            { console.log("HITTING") }

            return (


              <div key={item?.id || index} className={`w-full h-max  xl:h-full col-span-3
              xl:${index === 0 ? "col-span-3" : "col-span-2"}
               bg-dark-4 bg-opacity-40  rounded-3xl grid grid-cols-3  xl:grid-cols-2 gap-2 p-6 md:p-4 xl:text-[20px]`} >


                {/* IMAGE */}
                < Skeleton loading={loading} className={`w-full h-full row-span-2 xl:${index === 0 ? "row-span-2" : "row-span-1"} col-span-1 rounded-2xl rounded-tl-none overflow-hidden`} >
                  <img className='aspect-[2/3] w-full h-full object-cover'
                    src={item?.image} loading='lazy' ></img>
                </Skeleton>

                {/* DETAILS */}
                <div className='row-span-2 col-span-2 xl:col-span-1 xl:row-span-1 w-full h-full  flex flex-col gap-2 p-2 pl-0 
                line-clamp-1 leading-tight break-words'>

                  <Skeleton loading={loading} className=' flex flex-col gap-2 px-2 '>
                    {/* #1 tag */}
                    <div className='relative bg-blue-600 text-white w-max py-1 px-3 rounded-lg rounded-tr-none p2 font-semibold '> #{item?.rank}

                      <span className='absolute top-0 left-3/4 w-1/3 h-full bg-blue-600 -skew-x-[200deg]'></span>
                    </div>

                    {/* Title */}
                    <div>
                      <h1 className='text-white  font-extrabold line-clamp-1'>{item?.title}</h1>
                    </div>


                  </Skeleton>

                  <div className='w-full h-full  flex flex-col gap-2 text-dark-1 py-4 px-2'>

                    <Skeleton loading={loading} className='flex gap-3 font-medium place-items-center'>

                      <p>{item?.releaseYear}</p>
                      <p>{item?.runtime}</p>
                      <p>{item?.titleRating}</p>

                    </Skeleton>

                    <Skeleton loading={loading} className='flex gap-1  font-medium place-items-center'>
                      <RatingIcon className="w-[1.125rem] h-auto " />
                      <p>{item?.rating}</p>
                    </Skeleton>
                    <Skeleton loading={loading} className='flex gap-1  font-medium place-items-center'>
                      <WatchedIcon className="w-[1.125rem] h-auto " />
                      <p className='text-blue-500'>Mark as Watched</p>
                    </Skeleton>

                  </div>

                </div>

                {/* PLOT */}
                <Skeleton loading={loading} className={`hidden  xl:block ${index === 0 ? "col-span-1" : "col-span-2"} row-span-1  w-full h-full line-clamp-1`} >

                  <p className='line-clamp-3'>{item?.plot}</p>
                </Skeleton>

              </div>

            )



          })}

          {/* Dynamic */}


        </div>


        {/* ********************* Large Device Only *********************** */}
        <div className={`hidden xl:grid grid-cols-7 w-full h-full  p-4 gap-2 `}>


          {secondaryCards.map((item, index) => {

            return (

              <div
                key={item?.id}
                className='relative overflow-hidden rounded-xl bg-dark-4 bg-opacity-40 flex flex-col'
              >

                {/* IMG */}
                <Skeleton loading={loading} className='aspect-[2/3] w-full shrink-0 grow-0 overflow-hidden'>
                  <img
                    className='w-full h-full object-cover'
                    src={item?.image}
                    loading='lazy'
                  />
                </Skeleton>

                {/* Rank */}
                <div className='absolute top-10 left-0'>
                  <div className='relative bg-blue-600 text-white w-max px-4 rounded-md rounded-tr-none p1 font-semibold'>
                    {item?.rank}

                    <span className='absolute top-0 left-3/4 w-1/3 h-full bg-blue-600 -skew-x-[200deg]'></span>
                  </div>
                </div>

                {/* Details */}
                <Skeleton loading={loading} className='p-4 pb-6 font-medium text-dark-2 hover:text-dark-1 flex-1' skeletonClass='my-2'>
                  <p className='line-clamp-2 leading-tight break-words'>
                    {item?.title}
                  </p>
                </Skeleton>
              </div>
            )


          })}


        </div>




      </div >

      <div className="w-full h-full xl:hidden flex justify-center items-center ">
        <Button className="w-max rounded-3xl py-2 bg-dark-4/30 backdrop-blur-sm " >
          <NavLink to={`/search/explore/week-top-ten`} className="">See More</NavLink>
        </Button>
      </div>





    </div >

  )
}


export default Watch
