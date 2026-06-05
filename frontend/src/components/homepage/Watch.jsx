import React, { useState, useContext, useEffect, useRef } from 'react'
// import { DataContext } from 'src/context/DataContext';
import RatingIcon from 'src/assets/ratingIcon.svg?react';
import WatchedIcon from 'src/assets/watchedIcon.svg?react';
import { simplifiedApiResponse } from 'src/utils/utilsData';
import Slider from '../Slider';
import { useHomePageSections } from 'src/hooks/useHomePageSections';

const Watch = () => {

  const [weekTopTen, setWeekTopTen] = useState([]);
  const [fanFav, setFanFav] = useState([]);
  const [isRendered, setIsRendered] = useState(false);

  const ref = useRef();

  // const { sections, loading } = useContext(DataContext);

  const {
    data: sections,
    isLoading: loading,
    error
  } = useHomePageSections();

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

    console.log(sections, "data in watch")
    console.log(loading, "loading in watch")


    if (!loading && sections && !isRendered) {


      console.log("RENDERED");


      sections?.watch?.forEach((e) => {

        const name = toCamelCase(e.name);

        switch (name) {
          case "weekTop10":

            setWeekTopTen(simplifiedApiResponse(e.data.data));
            break;
          case "fanFavourites":

            setFanFav(simplifiedApiResponse(e.data.data.list));
            break;

          default:
            break;
        }

      })

      requestAnimationFrame(() => {
        setIsRendered(true);
      });
      // console.log(loading, "QUERY loading");
      // console.log(sections, "QUERY SEC");

    }

  }, [sections, loading, isRendered])


  const topCards = weekTopTen?.slice(0, 3);
  const primaryCards = weekTopTen?.slice(3, 6);
  const secondaryCards = weekTopTen?.slice(3);

  console.log(primaryCards, "CARDS");

  // console.log(weekTopTen, "10");
  // console.log(fanFav, "fan");

  return (
    <div ref={ref} className='relative w-full overflow-hidden  py-12 '>


      <div className='absolute  flex  top-16  w-full h-[50%] justify-center items-start md:flex '>

        <span className='text-[clamp(2rem,14vw,12rem)]  text-gray-400 font-extrabold opacity-5 -z-20 '>  What to Watch
        </span>
      </div>


      {/* ************** Fan Fav ****************/}

      <Slider items={fanFav} loading={loading} />



      <div className='w-full h-full flex '>


        <div className=' flex flex-col px-4 py-2 gap-4 justify-center items-center'>

          <div className='flex gap-4 items-center justify-center'>
            <span className='px-1 py-2 bg-n-1 rounded-full' />
            <h1 className='h3 text-dark-1'>TOP on IMDB this week</h1>

          </div>

          <p></p>
        </div>

      </div>

      {/* ************ Week Top Ten Section ************* */}

      <div className={`w-full   my-4 flex min-[850px]:flex-row xl:flex-col gap-1 `}>


        {/* ************************ Top 3 cards  ************************ */}
        <div className={`w-full h-full grid p-2 grid-flow-row xl:grid-flow-col xl:grid-cols-7 gap-4 ${loading ? "h-40 animate-pulse" : "h-full animate-none"}`}>

          {/* Dynamic */}

          {topCards.map((item, index) => {

            {/* Index-1 */ }
            return (
              <div key={item.id} className={`w-full h-max  xl:h-full col-span-3
              ${index === 0 ? "xl:col-span-3" : "xl:col-span-2"}
               bg-dark-4 bg-opacity-40  rounded-3xl grid grid-cols-3  xl:grid-cols-2 gap-2 p-6 md:p-4 `} >


                {/* IMAGE */}
                < div className={`w-full row-span-2 ${index === 0 ? "xl:row-span-2" : "xl:row-span-1"} col-span-1 rounded-2xl rounded-tl-none overflow-hidden`} >
                  <img className='aspect-[2/3] w-full h-full  object-cover'
                    src={item.image} loading='lazy' ></img>
                </div>

                {/* DETAILS */}
                <div className='row-span-2 col-span-2 xl:col-span-1 xl:row-span-1 w-full h-full  flex flex-col gap-2 p-2 pl-0 line-clamp-1 leading-tight break-words'>

                  <div className=' flex flex-col gap-2 px-2 '>
                    {/* #1 tag */}
                    <div className='relative bg-blue-600 text-white w-max py-1 px-3 rounded-lg rounded-tr-none  font-semibold '> #{item.rank}

                      <span className='absolute top-0 left-3/4 w-1/3 h-full bg-blue-600 -skew-x-[200deg]'></span>
                    </div>

                    {/* Title */}
                    <div>
                      <p className='text-white  font-extrabold'>{item.title}</p>
                    </div>


                  </div>

                  <div className='w-full h-full  flex flex-col gap-2 text-dark-1 py-4 px-2'>

                    <div className='flex gap-3 font-medium place-items-center'>

                      <p>{item.releaseYear}</p>
                      <p>{item.runtime}</p>
                      <p>{item.titleRating}</p>

                    </div>

                    <div className='flex gap-1  font-medium place-items-center'>
                      <RatingIcon className="w-[1.125rem] h-auto " />
                      <p>{item.rating}</p>
                    </div>
                    <div className='flex gap-1  font-medium place-items-center'>
                      <WatchedIcon className="w-[1.125rem] h-auto " />
                      <p className='text-blue-500 '>Mark as Watched</p>
                    </div>

                  </div>

                </div>

                {/* PLOT */}
                <div className={`hidden  xl:block ${index === 0 ? "col-span-1" : "col-span-2"} row-span-1  w-full h-full `} >

                  <p className='line-clamp-5 p2'>{item.plot}</p>
                </div>

              </div>
            )

          })}



        </div>

        {/* ********************* Medium Device Only *********************** */}
        <div className='hidden min-[850px]:grid xl:hidden w-full h-max  p-2 grid-flow-row  gap-4'>

          {primaryCards.map((item, index) => {

            { console.log("HITTING") }

            return (


              <div key={item.id} className={`w-full h-max  xl:h-full col-span-3
              xl:${index === 0 ? "col-span-3" : "col-span-2"}
               bg-dark-4 bg-opacity-40  rounded-3xl grid grid-cols-3  xl:grid-cols-2 gap-2 p-6 md:p-4 xl:text-[20px]`} >


                {/* IMAGE */}
                < div className={`w-full h-full row-span-2 xl:${index === 0 ? "row-span-2" : "row-span-1"} col-span-1 rounded-2xl rounded-tl-none overflow-hidden`} >
                  <img className='aspect-[2/3] w-full h-full object-cover'
                    src={item.image} loading='lazy' ></img>
                </div>

                {/* DETAILS */}
                <div className='row-span-2 col-span-2 xl:col-span-1 xl:row-span-1 w-full h-full  flex flex-col gap-2 p-2 pl-0 
                line-clamp-1 leading-tight break-words'>

                  <div className=' flex flex-col gap-2 px-2 '>
                    {/* #1 tag */}
                    <div className='relative bg-blue-600 text-white w-max py-1 px-3 rounded-lg rounded-tr-none p2 font-semibold '> #{item.rank}

                      <span className='absolute top-0 left-3/4 w-1/3 h-full bg-blue-600 -skew-x-[200deg]'></span>
                    </div>

                    {/* Title */}
                    <div>
                      <h1 className='text-white  font-extrabold line-clamp-1'>{item.title}</h1>
                    </div>


                  </div>

                  <div className='w-full h-full  flex flex-col gap-2 text-dark-1 py-4 px-2'>

                    <div className='flex gap-3 font-medium place-items-center'>

                      <p>{item.releaseYear}</p>
                      <p>{item.runtime}</p>
                      <p>{item.titleRating}</p>

                    </div>

                    <div className='flex gap-1  font-medium place-items-center'>
                      <RatingIcon className="w-[1.125rem] h-auto " />
                      <p>{item.rating}</p>
                    </div>
                    <div className='flex gap-1  font-medium place-items-center'>
                      <WatchedIcon className="w-[1.125rem] h-auto " />
                      <p className='text-blue-500'>Mark as Watched</p>
                    </div>

                  </div>

                </div>

                {/* PLOT */}
                <div className={`hidden  xl:block ${index === 0 ? "col-span-1" : "col-span-2"} row-span-1  w-full h-full line-clamp-1`} >

                  <p className='line-clamp-3'>{item.plot}</p>
                </div>

              </div>

            )



          })}

          {/* Dynamic */}


        </div>


        {/* ********************* Large Device Only *********************** */}
        <div className='hidden xl:grid grid-cols-7 w-full h-full  p-4 gap-2'>


          {secondaryCards.map((item, index) => {

            return (

              <div
                key={item.id}
                className='relative overflow-hidden rounded-xl bg-dark-4 bg-opacity-40 flex flex-col'
              >

                {/* IMG */}
                <div className='aspect-[2/3] w-full shrink-0 grow-0 overflow-hidden'>
                  <img
                    className='w-full h-full object-cover'
                    src={item.image}
                    loading='lazy'
                  />
                </div>

                {/* Rank */}
                <div className='absolute top-10 left-0'>
                  <div className='relative bg-blue-600 text-white w-max px-4 rounded-md rounded-tr-none p1 font-semibold'>
                    {item.rank}

                    <span className='absolute top-0 left-3/4 w-1/3 h-full bg-blue-600 -skew-x-[200deg]'></span>
                  </div>
                </div>

                {/* Details */}
                <div className='p-4 pb-6 font-medium text-dark-2 hover:text-dark-1 flex-1'>
                  <p className='line-clamp-2 leading-tight break-words'>
                    {item.title}
                  </p>
                </div>
              </div>
            )


          })}


        </div>

      </div >

    </div >

  )
}


export default Watch
