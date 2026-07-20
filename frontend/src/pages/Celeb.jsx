import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { useParams } from 'react-router-dom';
import Slider from 'src/components/Slider';
import { useCelebData } from 'src/hooks/useCelebData';
import { simplifiedPersonResponse } from 'src/utils/utilsData';


const Celeb = () => {


  const [active, setActive] = useState(false);
  const [personData, setPersonData] = useState();

  const box = useRef(null);

  const params = useParams();
  const id = params.id
  console.log(id);


  const {
    data: celebData,
    isLoading: loading,
    error: error

  } = useCelebData(id);




  useEffect(() => {

    if (celebData && !loading) {

      console.log(setPersonData(simplifiedPersonResponse(celebData)), "CELEB PAGE")
      console.log(personData?.images?.items, "Person Data")

    }

  }, [loading, celebData])



  // const width = box.current.clientWidth;

  // console.log(width,'width')s

  const handleToggle = () => {

    if (active) {
      setActive(false);
    }
    else {
      setActive(true);
    }


  }


  return (
    <div className='w-full '>
      <div>

      </div>


      {/* <iframe width="560"
                        height="315"
                        src=
"https://imdb-video.media-imdb.com/vi3834163993/1434659607842-pgv4ql-1438191196090.mp4?Expires=1733769477&Signature=HBOFWIhcdXH0WT763Peer4b5W7B1cfR5OyARi2laboAZfyRXfxCjOPHX-nUJ6Vn-AwK3HpBLOzKaE3hYfjMCCSS3Qgmmrbca4gCFurgCrl159NUBpFqfZUxY5JdSSM4Dvxl0gMiBRnP2BzsrqP5twvBnEljXCzK69~fcHknuFtXpaLcCuG3wtCIh89S24N9lvHVrLPJprXQpihs3NwJbRf3wzw3ypDKs-AvIk~8V2oHNw2eUr4chcppqEANw3EF9pG0d-cFbOwOZcES03Kbn9VfXcCw-zpUmtZTu6hu3FOBZV9-YvlLJZyyYb4t9eOIeA8UYrGRIQZBN~2kH5n4qvQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
                        title="GeeksforGeeks" >
                </iframe> */}

      {personData &&

        <>

          < div className='w-full min-h-screen justify-center  bg-no-repeat bg-clip-border bg-center  '
            style={{ backgroundImage: `url(${'https://m.media-amazon.com/images/M/MV5BZTA0MzU0YzItZWRjZC00YzllLWFmYjMtZWYzZDgyYzRjYTg5XkEyXkFqcGc@._V1_.jpg'})` }}>

            <div className='w-full min-h-screen  backdrop-blur-2xl bg-gradient-to-t from-dark-4 to-dark-4/70 drop-shadow-2xl '>

              <div className='flex  p-8 xl:w-[80%] mx-auto flex-col gap-4'>


                {/* Name */}
                <div className={`w-max flex flex-col gap-1 ${loading ? "w-20 h-8 bg-dark-4 animate-pulse" : "w-max h-max bg-none animate-none"}`}>
                  <span className="flex gap-2 items-end leading-none ">
                    <h1 className='text-3xl'>{personData.overview.name}</h1>
                    <p className="text-dark-2 p1 ">{"( I )"}</p>
                  </span>
                  <p className='p1 text-dark-2 font-semibold'>Actor</p>
                </div>


                <div className='grid grid-cols-5 gap-4 '>

                  {/* black screen or video player */}
                  <div className='w-full h-full min-h-52 rounded-lg bg-black col-span-5 order-1
              md:order-2 md:col-span-4 lg:col-span-3' ></div>

                  {/* Videos and images btns */}
                  <div className='w-full flex gap-4  col-span-5 order-2 md:order-3 lg:col-span-1 lg:flex-col '>

                    <div className='flex w-1/2 text-center items-center justify-center bg-dark-2/30  py-2 rounded-2xl lg:h-1/2 lg:w-full '> 16 videos</div>

                    <div className=' flex w-1/2 text-center items-center justify-center bg-dark-2/30 py-2 rounded-2xl lg:h-1/2 lg:w-full '> {`${personData.images.total > 100 ? "99+" : personData?.images?.total} photos`}</div>
                  </div>

                  {/* profile photo */}
                  <div className={`w-full h-full rounded-r-2xl rounded-bl-2xl overflow-hidden col-span-2 order-3 aspect-[2/3]  
              md:order-1 md:col-span-1 bg-dark-2/20 ${loading ? "animate-pulse" : "animate-none"}`} >
                    <img className='text-center' src={personData?.overview?.image}
                      alt="No Image"
                      loading="lazy" />
                  </div>

                  {/* synopsis */}
                  <div className='flex flex-col gap-2 max-h-60 h-max col-span-3 order-4 md:col-span-5 lg:col-span-3  overflow-hidden '>
                    <p className='line-clamp-5 text-clip'>
                      {personData?.overview?.bio}
                    </p>
                    <span className='flex gap-2'>
                      <p className="font-semibold">Born</p>
                      <p>{personData?.overview?.birthDate}</p>
                    </span>
                  </div>

                  {/*  */}
                  <div className='flex justify-center items-center w-full col-span-5 order-5 lg:col-span-2'>
                    <div className='flex  w-full  rounded-3xl bg-n-1 py-3 px-4 text-dark-3'>
                      + Add to List
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/*Details  */}

          <div>

            {/* sub nav */}
            <div className='w-full flex justify-center bg-dark-3 py-8'>
              <div className='w-full flex flex-col gap-16  xl:w-[80%] p-8'>

                <div className='border-[1px] border-n-1 rounded-md overflow-hidden mb-12'>
                  <div className='w-full bg-n-1 h-8'></div>
                  <div className='flex my-4 relative'>
                    <h1 className='h4-bold text-n-1 mx-2 inline-block'>Awards</h1>
                    <p className='p text-lt-2 '>{`${personData?.awards?.wins} wins & ${personData?.awards?.nominations} Nominations`}</p>
                    <div className='absolute right-10'> X </div>
                  </div>
                </div>


                {/* Images  */}
                <div className='my-32'>
                  <div>
                    <span className='relative inline-block px-4  text-2xl text-n-1'>
                      <span className=' absolute left-0 w-1 h-full bg-n-1 rounded-xl '></span>
                      Photos</span>
                  </div>

                  <div className='flex  flex-wrap  w-full h-[400px] gap-4 overflow-hidden p-8 clamp' >


                    {personData?.images?.items?.map((item) => {

                      console.log(item.image, "Maping");

                      return (

                        <div key={item.id} className='w-max h-max rounded-xl overflow-hidden '>
                          <img className='  object-cover min-w-max max-h-[calc(120.8px)] min-h-[calc(82.6px)]  xl:max-h-[calc(172.8px)] xl:min-h-[calc(82.6px)] '
                            src={`${item?.image}`}
                          />
                        </div>

                      )
                    })}

                  </div>
                  {/* <div className='flex flex-auto py-2 gap-x-4'>

                <div className=' rounded-xl overflow-hidden'>
                  <img className=' object-cover w-full  max-h-[calc(162.8px)] min-h-[calc(82.6px)]' src='https://m.media-amazon.com/images/M/MV5BZWI4OWJiY2ItOTA1Mi00YmYxLWFhZWItZDcwOGY2M2RhN2EwXkEyXkFqcGc@._V1_.jpg'
                  />
                </div>

                <div className=' rounded-xl overflow-hidden'>
                  <img className=' object-cover w-full  max-h-[calc(162.8px)] min-h-[calc(82.6px)]' src='https://m.media-amazon.com/images/M/MV5BMzA0MWQyODUtOWQyMi00OGE3LTliYzktYTU0NWUxOTAwM2U0XkEyXkFqcGc@._V1_.jpg'
                  />
                </div>

                <div className=' rounded-lg overflow-hidden'>
                  <img className=' object-cover w-full  max-h-[calc(162.8px)] min-h-[calc(82.6px)] ' src='https://m.media-amazon.com/images/M/MV5BM2NmYzRjYTItNWUwMC00MjMyLThhYzgtMWE4ODBmOGUzOGZjXkEyXkFqcGc@._V1_.jpg'
                  />
                </div>

                <div className=' rounded-lg overflow-hidden'>
                  <img className=' object-cover w-full  max-h-[calc(162.8px)] min-h-[calc(82.6px)] ' src='https://m.media-amazon.com/images/M/MV5BOGJmNTY0MzctMDc3Yi00MjFiLTg1ZjItNzc4MzQ5MDA0NjA4XkEyXkFqcGc@._V1_.jpg'
                  />
                </div>


              </div> */}
                </div>

                { }

                {/* Known for */}
                <div className='mb-32'>
                  <div>
                    <span className='relative inline-block px-4  text-2xl text-n-1'>
                      <span className=' absolute left-0 w-1 h-full bg-n-1 rounded-xl '></span>
                      Known for</span>
                  </div>

                  {/* <Slider /> */}


                </div>

                {/* Credits */}
                <div className='flex flex-col gap-8'>
                  <div>
                    <span className='relative inline-block px-4  text-2xl text-n-1'>
                      <span className=' absolute left-0 w-1 h-full bg-n-1 rounded-xl '></span>
                      Credits</span>
                  </div>

                  {/* filters div  */}
                  <div></div>

                  <div className='flex flex-col gap-4'>


                    {/* Actor / Writer / Producer */}

                    <div className=''>
                      <h1 className='h4-bold text-n-1'>Actor</h1>
                    </div>

                    {/* Accordion */}
                    <div className='p-4 border-2 border-lt-2/60' onClick={() => handleToggle()}>

                      {/* UPcoming/released /etc */}

                      <div className='relative flex flex-col gap-6'>

                        <div className='flex gap-2 items-center'>
                          <h1 className="h4 font-bold">Upcoming </h1>

                          {/* dynamic no of upcoming movies */}
                          <span className='text-lt-2 font-normal p1'>6</span>
                        </div>

                        {/* List */}
                        <div className={`${active ? 'block' : 'hidden'}  `}>

                          <div className='flex py-2 justify-between  border-b-2
                    border-lt-2/60'>
                            <div className='flex gap-2'>

                              <div className='w-8 h-12 bg-lt-2 h4-bold text-dark-5 '>
                                +
                              </div>
                              <div>
                                <h1 className='h4'>The Raja Saab</h1>
                                <span className='p1 text-blue-700'>In production</span>
                              </div>
                            </div>

                            <div>
                              <h1>2025</h1>
                            </div>

                          </div>


                        </div>



                        <div className='absolute right-0 top-0' >V</div>
                      </div>



                    </div>
                  </div>

                </div>

                {/* Videos */}


                {/* Personal details */}

                <div className='flex flex-col gap-8 '>

                  <div >
                    <span className='relative inline-block px-4  text-2xl text-n-1'>
                      <span className=' absolute left-0 w-1 h-full bg-n-1 rounded-xl '></span>
                      Personal details</span>
                  </div>

                  <div className='relative'>

                    {/* List */}



                    {/* Height */}
                    <div className='flex justify-between py-4 border-b-2
                    border-lt-2/60'>
                      <div className='flex gap-2'>

                        <div className="flex gap-8 items-center">
                          <h1 className='h4'>Height</h1>
                          <span className='p1 text-dark-2 font-bold'>{personData?.overview?.height}</span>
                        </div>
                      </div>


                    </div>

                    {/* External Links */}
                    <div className='flex justify-between py-4 border-b-2
                    border-lt-2/60'>
                      <div className='flex gap-2'>


                        <div className="flex gap-8 items-center">
                          <h1 className='h4'>External Links</h1>
                          {personData?.overview?.officialLinks?.map((link, index) => {
                            return (

                              <a key={index} href={link.url} className='p1 text-blue-800 font-bold mx-2'>{link.platform}</a>

                            )
                          })}

                        </div>
                      </div>


                    </div>


                    {/* Birth Place */}
                    <div className='flex justify-between py-4 border-b-2
                    border-lt-2/60'>
                      <div className='flex gap-2'>


                        <div className="flex gap-8 items-center">
                          <h1 className='h4'>Birth Place</h1>


                          <span className='p1 text-dark-2 font-bold mx-2'>{personData?.overview?.birthPlace}</span>


                        </div>
                      </div>


                    </div>

                    {/* Birth Date */}
                    <div className='flex justify-between py-4 border-b-2
                    border-lt-2/60'>
                      <div className='flex gap-2'>


                        <div className="flex gap-8 items-center">
                          <h1 className='h4'>Birth Date</h1>


                          <span className='p1 text-dark-2 font-bold mx-2'>{personData?.overview?.birthDate}</span>


                        </div>
                      </div>


                    </div>

                    {/* Birth Name*/}
                    <div className='flex justify-between py-4 border-b-2
                    border-lt-2/60'>
                      <div className='flex gap-2'>


                        <div className="flex gap-8 items-center">
                          <h1 className='h4'>Birth Name</h1>


                          <span className='p1 text-dark-2 font-bold mx-2'>{personData?.overview?.birthName}</span>


                        </div>
                      </div>


                    </div>






                  </div>


                </div>




                {/* Did you know */}

                <div className='flex flex-col gap-8'>

                  <div>
                    <span className='relative inline-block px-4  text-2xl text-n-1'>
                      <span className=' absolute left-0 w-1 h-full bg-n-1 rounded-xl '></span>
                      Did You Know</span>
                  </div>

                  {personData?.quotes?.items?.map((quotes, index) => {
                    return (

                      <div key={index} className="bg-dark-5 flex flex-col gap-2 p-4 border-2 border-lt-2/60">
                        <h3 className = "font-semibold" >Quote</h3>
                        <p className='text-dark-2'>{quotes.quote}</p>
                      </div>

                    )
                  })}




                </div>


                {/* FAQs */}

                {/* <div className='flex flex-col gap-8'>

                  <div>
                    <span className='relative inline-block px-4  text-2xl text-n-1'>
                      <span className=' absolute left-0 w-1 h-full bg-n-1 rounded-xl '></span>
                      FAQs</span>
                  </div>

                  <div className='flex justify-between py-4 border-b-2
                    border-lt-2/60'>
                    <div className='flex gap-2'>

                      <div className='w-8 h-12 bg-lt-2 h4-bold text-dark-5 '>
                        +
                      </div>
                      <div>
                        <h1 className='h4'>The Raja Saab</h1>
                        <span className='p1 text-blue-700'>In production</span>
                      </div>
                    </div>

                    <div>
                      <h1>2025</h1>
                    </div>

                  </div>


                </div> */}


              </div>
            </div>
          </div>

        </>

      }

      {
         !personData &&
        <div className="w-full h-screen flex justify-center items-center">

          <h1 className="text-4xl">Oops ! Something Went Wrong !! &#x1F623;</h1>

        </div>
      }




    </div >
  )
}

export default Celeb
