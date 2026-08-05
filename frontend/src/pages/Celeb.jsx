import React, { useEffect, useState } from 'react'
import { useRef, useMemo } from 'react'
import { useParams } from 'react-router-dom';
import LazyComponent from 'src/components/LazyComponent';
import Skeleton from 'src/components/Skeleton';
import Slider from 'src/components/Slider';
import { useCelebData } from 'src/hooks/useCelebData';
import { simplifiedPersonResponse } from 'src/utils/utilsData';
import Error from 'src/components/Error';


const Celeb = () => {


  const [activeIndex, setActiveIndex] = useState();
  const [personData, setPersonData] = useState();
  const [credits, setCredits] = useState();

  const box = useRef(null);


  const params = useParams();
  const id = params.id
  console.log(id);


  const {
    data: celebData,
    isLoading: loading,
    error: error,
    refetch

  } = useCelebData(id);



  const testLoading = loading;
  useEffect(() => {

    if (celebData && !loading) {

      setPersonData(simplifiedPersonResponse(celebData))
      

    }

  }, [loading, celebData])


  useEffect(() => {
    if (!personData?.knownFor) return;

    const groupedCredits = Object.values(
      personData.knownFor.reduce((acc, credit) => {
        if (!acc[credit.role]) {
          acc[credit.role] = {
            role: credit.role,
            data: [],
          };
        }

        acc[credit.role].data.push(credit);

        return acc;
      }, {})
    );

    setCredits(groupedCredits);
  }, [personData]);

  if(error){
    return(
    <Error onRetry={refetch} className='!min-h-screen'  />
    )
  }

  const loaderArray = Array.from({length:10});

  const query = loading ? loaderArray:personData;


  const handleToggle = (index) => {

    if (activeIndex !== index) {
      setActiveIndex(index);
    }
    else {
      setActiveIndex(null)
    }

  }




  return (
    <div className='w-full '>

      {query &&

        <>

          < div className='w-full min-h-screen justify-center  bg-no-repeat bg-clip-border bg-center  '
            style={{ backgroundImage: `url(${'https://m.media-amazon.com/images/M/MV5BZTA0MzU0YzItZWRjZC00YzllLWFmYjMtZWYzZDgyYzRjYTg5XkEyXkFqcGc@._V1_.jpg'})` }}>

            <div className='w-full min-h-screen  backdrop-blur-2xl bg-gradient-to-t from-dark-4 to-dark-4/70 drop-shadow-2xl '>

              <div className='w-full h-full flex  p-8 xl:w-[80%] mx-auto flex-col gap-4'>


                {/* Name */}

                <Skeleton loading={testLoading} className={`w-max flex flex-col gap-1 `} skeletonClass="w-[15rem] h-8 bg-dark-4/40  animate-pulse">
                  <span className="flex gap-2 items-end leading-none ">
                    <h1 className='text-3xl'>{personData?.overview.name}</h1>
                    <p className="text-dark-2 p1 ">{"( I )"}</p>
                  </span>
                  <p className='p1 text-dark-2 font-semibold'>Actor</p>
                </Skeleton>



                <div className='w-full h-full grid grid-cols-5 gap-4 '>

                  {/* black screen or video player */}
                  <Skeleton loading={testLoading} className='w-full h-full min-h-52 rounded-lg bg-black col-span-5 order-1
              md:order-2 md:col-span-4 lg:col-span-3'  ></Skeleton>

                  {/* Videos and images btns */}
                  <div className='w-full flex gap-4  col-span-5 order-2 md:order-3 lg:col-span-1 lg:flex-col min-h-8'>

                    <Skeleton loading={testLoading} className='flex w-1/2 text-center items-center justify-center bg-dark-2/30  py-2 rounded-2xl lg:h-1/2 lg:w-full '> <p>
                      16 videos</p></Skeleton>

                    <Skeleton loading={testLoading} className=' flex w-1/2 text-center items-center justify-center bg-dark-2/30 py-2 rounded-2xl  lg:h-1/2 lg:w-full '> <p>{`${personData?.images.total > 100 ? "99+" : personData?.images?.total} photos`}</p></Skeleton>
                  </div>

                  {/* profile photo */}
                  <Skeleton loading={testLoading} className={`w-full h-full rounded-r-2xl rounded-bl-2xl overflow-hidden col-span-2 order-3 aspect-[2/3]  
              md:order-1 md:col-span-1 bg-dark-2/20 `} >
                    <img className='text-center object-cover object-center aspect-[2/3]' src={personData?.overview?.image}
                      alt="No Image"
                      loading="lazy" />
                  </Skeleton>

                  {/* synopsis */}
                  <Skeleton loading={testLoading} className='w-full h-full flex flex-col gap-2   col-span-3 order-4 md:col-span-5 lg:col-span-3  overflow-hidden '>
                    <p className='line-clamp-5 text-clip'>
                      {personData?.overview?.bio}
                    </p>
                    <span className='flex gap-2'>
                      <p className="font-semibold">Born</p>
                      <p>{personData?.overview?.birthDate}</p>
                    </span>
                  </Skeleton>

                  {/*  */}
                  <Skeleton loading={testLoading} className='flex justify-center items-center w-full col-span-5 order-5 lg:col-span-2 min-h-8  rounded-3xl'>
                    <div className='flex w-full   bg-n-1 py-3 px-4 text-dark-3'>
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

                <div className='border-[1px] border-n-1 rounded-md overflow-hidden mb-12'>
                  <div className='w-full bg-n-1 h-8'></div>
                  <Skeleton loading={testLoading} className='flex my-4 relative h-8'>
                    <h1 className='h4-bold text-n-1 mx-2 inline-block'>Awards</h1>
                    <p className='p text-lt-2 '>{`${personData?.awards?.wins} wins & ${personData?.awards?.nominations} Nominations`}</p>
                    <div className='absolute right-10'> X </div>
                  </Skeleton>
                </div>


                {/* Images  */}
                <div className='my-32 flex flex-col gap-4'>
                  <div>
                    <span className='relative inline-block px-4  text-2xl text-n-1'>
                      <span className=' absolute left-0 w-1 h-full bg-n-1 rounded-xl '></span>
                      Photos</span>
                  </div>

                  <Skeleton loading={testLoading} className='flex  flex-wrap  w-full h-full gap-2 lg:gap-4 overflow-hidden p-8 clamp ' skeletonClass='h-[500px]' >


                    {personData?.images?.items?.map((item, index) => {

                      if (index <= 6) {

                        return (
                          <div key={index} className='w-max h-max rounded-xl overflow-hidden bg-dark-4/30'>
                            <img className='  object-contain min-w-max max-h-[calc(120.8px)] min-h-[calc(82.6px)]  xl:max-h-[calc(172.8px)] xl:min-h-[calc(82.6px)] '
                              src={`${item?.image} `} loading='lazy'
                            />
                          </div>

                        )
                      }
                    })}

                  </Skeleton>



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
                  <LazyComponent>

                    <Slider items={personData?.knownFor} loading={loading} query={(item) => item} error={error} />
                  </LazyComponent>

                </div>

                {/* Credits */}
                <div className='flex flex-col gap-8'>
                  <div>
                    <span className='relative inline-block px-4  text-2xl text-n-1'>
                      <span className=' absolute left-0 w-1 h-full bg-n-1 rounded-xl '></span>
                      Credits</span>
                  </div>


                  <div className='flex flex-col gap-4'>

                    {

                      credits?.map((credit, index) => {

                        console.log(credit, "Credits");

                        return (

                          <>


                            {/* Actor / Writer / Producer */}

                            <div key={index} className='flex flex-col gap-2'>
                              <h1 className='h4-bold text-n-1'>{credit?.role}</h1>


                              <div className='p-4 border-2 border-lt-2/60' onClick={() => handleToggle(index)}>

                                {/* UPcoming/released /etc */}

                                <div className='relative flex flex-col gap-6'>

                                  <div className='flex gap-2 items-center'>
                                    <h1 className="h4 font-bold">Total </h1>

                                    {/* dynamic no of upcoming movies */}
                                    <span className='text-lt-2 font-normal p1'>{credit?.data?.length}</span>
                                  </div>

                                  {/* List */}

                                  <div className={`${index === activeIndex ? 'block' : 'hidden'}`}>

                                    {credit?.data?.map((item, index) => {

                                      return (

                                        <div className='flex items-center border-b-2 border-lt-2/60 justify-between h-max'>

                                          <div className='flex py-2 gap-4 '>
                                            <div className='flex gap-2'>

                                              <div className='w-12 h-max bg-lt-2 h4-bold text-dark-5 overflow-hidden rounded-tr-xl'>
                                                <img className='text-center object-cover object-center aspect-[2/3]' src={item?.image}
                                                  alt="No Image"
                                                  loading="lazy" />
                                              </div>
                                            </div>
                                            <div>
                                              <h1 className='h4'>{item?.title}</h1>
                                              <span className='p1 text-blue-700'>{item?.type}</span>
                                            </div>


                                          </div>


                                          <div>
                                            <h1>{item?.year}</h1>
                                          </div>



                                        </div>




                                      )

                                    })}

                                  </div>




                                  <div className='absolute right-0 top-0' >V</div>
                                </div>



                              </div>

                            </div >

                            {/* Accordion */}


                          </>
                        )



                      })
                    }



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
                        <h3 className="font-semibold" >Quote</h3>
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





    </div >
  )
}

export default Celeb
