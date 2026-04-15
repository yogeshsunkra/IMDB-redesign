import React, { useState, useContext, useEffect } from 'react'
import { DataContext } from 'src/context/DataContext';

const Watch = () => {


  const [weekTopTen, setWeekTopTen] = useState([]);
  const [fanFav, setFanFav] = useState([]);

  const { sections, loading } = useContext(DataContext);

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

    if (sections) {

      // const value = sections.watch;

      sections?.value?.watch?.forEach((e) => {

        const name = toCamelCase(e.name);
        // if(name === weekTop10){

        // }

        switch (name) {
          case "weekTop10":
            setWeekTopTen(e.data);
            break;
          case "fanFavourites":
            setFanFav(e.data);
            break;

          default:
            break;
        }

      })


      console.log(loading, "QUERY loading");
      console.log(sections.value, "QUERY SEC");
      console.log(weekTopTen, "10");
      console.log(fanFav, "fan");
    }


  }, [sections, loading])



  return (
    <div className='w-full overflow-hidden'>

      {/* Week Top 10 */}
      <div className='w-full  min-h-screen border-red-700 border-2'>

        <div className='w-full min-h-screen p-4 border-2 border-white flex xl:flex-col'>

          {/* {weekTopTen.map((e,index) => {

            if(index < 3){
              <div>
                <div key={e.id}>

                </div>
              </div>
            }
            else if(index >= 3 && index < 6){

            }
            else(index >= 3)
            {
              
            }

          })} */}
          {/* div-1 */}
          <div className='w-full p-2 overflow-hidden grid grid-flow-row gap-4  xl:grid-cols-4 '>
            <div className=' w-full h-max xl:col-span-2  bg-dark-4 bg-opacity-55 rounded-2xl'>

              {/* img */}
              <div className='overflow-hidden rounded-xl w-full  p-4'>
                <div className='relative max-w-max  grid  grid-cols-3 gap-4'>

                  <div className='max-w-32 max-h-48 rounded-2xl rounded-l-none overflow-hidden border-2 border-purple-600 col-span-1'>
                    <img className='w-full h-full ' src='https://m.media-amazon.com/images/M/MV5BZTA0MzU0YzItZWRjZC00YzllLWFmYjMtZWYzZDgyYzRjYTg5XkEyXkFqcGc@._V1_.jpg' loading='lazy' ></img>
                  </div>
                  {/* <div></div> */}

                  {/* basic info */}
                  <div className='col-span-2 w-full h-full flex flex-col gap-4 p-1 border-2 border-pink-700'>

                    <div className='flex flex-col gap-2 mb-4'>
                      {/* #1 tag */}
                      <span className='bg-blue-600 text-white w-max p-1 px-2 rounded-lg rounded-tr-none'> #1</span>

                      {/* Title */}
                      <div>
                        <h1 className='text-white h4-bold'>BILLA</h1>
                      </div>
                    </div>

                    <div className='flex flex-col gap-1 text-dark-2'>
                      {/* 2026 1h38m PG */}
                      <div className='flex gap-1'>
                        <span>2026</span>
                        <span>1h 38m</span>
                        <span>PG</span>
                      </div>
                      {/* *6.5 (22k) *rate */}
                      <div className='flex gap-1'>
                        <span>* 6.5</span>
                        <span>* Rate</span>
                      </div>

                      {/* @ Mark as watched */}
                      <div>
                        <span className='text-blue-700'>Mark as watched</span>
                      </div>

                    </div>

                  </div>

                  {/* synopsis */}
                  <div className='hidden'></div>


                </div>


              </div>





            </div>
            {/* <div className='min-h-[12rem] w-full  border-yellow-500  border-2'></div>
            <div className='min-h-[12rem] w-full  border-yellow-500  border-2'></div> */}
          </div>
          {/* div-2 */}
          <div className='hidden w-full h-full border-2 border-red-700 p-2 overflow-hidden md:grid md:grid-flow-row gap-4 xl:hidden '>

            <div className='min-h-[12rem] w-full  border-yellow-500 border-2'></div>
            <div className='min-h-[12rem] w-full  border-yellow-500  border-2'></div>
            <div className='min-h-[12rem] w-full  border-yellow-500  border-2'></div>

          </div>

          {/* div-3 */}
          <div className='hidden xl:grid grid-flow-col gap-4'>
            <div className='min-h-[12rem] w-full m-4 border-yellow-500 border-2'></div>
            <div className='min-h-[12rem] w-full m-4 border-yellow-500  border-2'></div>
            <div className='min-h-[12rem] w-full m-4 border-yellow-500  border-2'></div>
            <div className='min-h-[12rem] w-full m-4 border-yellow-500  border-2'></div>
            <div className='min-h-[12rem] w-full m-4 border-yellow-500  border-2'></div>
            <div className='min-h-[12rem] w-full m-4 border-yellow-500  border-2'></div>
            <div className='min-h-[12rem] w-full m-4 border-yellow-500  border-2'></div>

          </div>





        </div>

      </div>

      {/* Fan Fav */}
      <div></div>



    </div>
  )
}

export default Watch
