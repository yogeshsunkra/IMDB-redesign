import React, { useState } from 'react'
import { useRef } from 'react'


const Celeb = () => {

  const [translate, setTranslate] = useState(0);
  const [active, setActive] = useState(false);

  const box = useRef(null);

  console.log(translate, "px")

  // const width = box.current.clientWidth;

  // console.log(width,'width')s

  const handlePrev = () => {




    setTranslate((translate) => translate - 30);



  }
  const handleNext = () => {


    setTranslate((translate) => translate + 30)
  }

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
      <div className='w-full justify-center  bg-no-repeat bg-clip-border bg-center  '
        style={{ backgroundImage: `url(${'https://m.media-amazon.com/images/M/MV5BZTA0MzU0YzItZWRjZC00YzllLWFmYjMtZWYzZDgyYzRjYTg5XkEyXkFqcGc@._V1_.jpg'})` }}>

        <div className='w-full  backdrop-blur-2xl bg-gradient-to-t from-dark-4 to-dark-4/70 drop-shadow-2xl '>

          <div className='flex  p-8 xl:w-[90%] mx-auto flex-col'>
            <h1 className='text-4xl'>Prabhas</h1>


            <div className='grid grid-cols-5 gap-1 '>
              <div className='w-full h-full min-h-56 rounded-lg bg-black col-span-5 order-1
              md:order-2 md:col-span-4 lg:col-span-3' ></div>
              <div className='w-full flex gap-4 my-2 col-span-5 order-2 md:order-3 lg:col-span-1 lg:flex-col '>
                <div className='flex w-1/2 text-center items-center justify-center bg-dark-2/30  py-2 rounded-2xl lg:h-1/2 lg:w-full '>34 Videos</div>
                <div className=' flex w-1/2 text-center items-center justify-center bg-dark-2/30 py-2 rounded-2xl lg:h-1/2 lg:w-full '> 99+ photos</div>
              </div>
              <div className='w-full rounded-r-2xl rounded-bl-2xl overflow-hidden col-span-2 order-3 min-h-16  
              md:order-1 md:col-span-1 xl:min-h-96 '>
                <img src='https://m.media-amazon.com/images/M/MV5BZTA0MzU0YzItZWRjZC00YzllLWFmYjMtZWYzZDgyYzRjYTg5XkEyXkFqcGc@._V1_.jpg' />
              </div>
              <div className='h-40 overflow-hidden col-span-3 order-4 md:col-span-5 lg:col-span-3 mx-2'>
                <p>Prabhas is an Indian actor who works in Telugu cinema. One of the highest-paid and highest-grossing actor in Indian cinema. Prabhas is hailed as the "First Pan-Indian Superstar". Prabhas was born in a Telugu family to late U. Suryanarayana Raju and Siva Kumari. His family hails from Mogalthur, Andhra Pradesh. He is the youngest of three children and is the nephew of Telugu actor Uppalapati Krishnam Raju. Prabhas did his schooling at Don Bosco Matriculation Higher Secondary School, Chennai, and at DNR High School, Bhimavaram. He then completed his intermediate education from Nalanda College, Hyderabad. He later went on to pursue Bachelor of Technology (BTech) from Sri Chaitanya College, Hyderabad.Prabhas made his acting debut with drama Eeswar, and later attained his breakthrough with the action romance Varsham. He went on to act in other commercially successful films such as Chatrapathi, Bujjigadu, Billa, Darling, Mr. Perfect, and Mirchi winning the Nandi Award for Best Actor for his performance in the lattermost. He went on to play a dual role in the epic action film Baahubali: The Beginning which received national and international acclaim, and became a record-breaking box office success. He reprised his role in the sequel, Baahubali 2: The Conclusion which rewrote several box office records and emerged as the highest-grossing Indian film at that point, establishing Prabhas as the first pan-Indian star. Commercial success has since varied, with action thrillers Saaho and Salaar: Part 1 - Ceasefire, both of which rank among the highest-grossing Indian films. He is the first Indian actor ever to have four 100+ crore opening films worldwide, a feat unheard of in Indian cinema.Prabhas is referred to in the media and by his fandom as the "Rebel Star" and "Darling", he has appeared in over 20 films, and earned numerous accolades. He has been featuring in Forbes India's Celebrity 100 list since 2015. He was added to the Forever Desirable list of Hyderabad Times in 2019. He was the most searched actor on Google for the year 2019. He is the only actor from south cinema to feature in the magazine Eastern Eye's 2019 listing of the 10 Sexiest Asian Men. He was also featured in the GQ in their listing of the most influential young Indians of 2017. Prabhas stood alone as the only Indian actor in the "Top 10 Most Used Hashtags on Twitter" list in 2023.
                  Born
                  October 23, 1979</p>
              </div>
              <div className='col-span-5 order-5 lg:col-span-2 my-4'>
                <div className='w-full mx-8 rounded-3xl bg-n-1 py-4 px-2 text-dark-3'>
                  + Add to List
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div>
        <div className='w-full bg-dark-3 py-8'>
          <div className='px-6 w-full'>

            <div className='border-[1px] border-n-1 rounded-md overflow-hidden mb-12'>
              <div className='w-full bg-n-1 h-8'></div>
              <div className='flex my-4 relative'>
                <h1 className='h4-bold text-n-1 mx-2 inline-block'>Awards</h1>
                <p className='p text-lt-2 '>5 wins & 18 Nominations</p>
                <div className='absolute right-10'> X </div>
              </div>
            </div>

            <div className='my-32'>
              <div>
                <span className='relative inline-block px-4  text-2xl text-n-1'>
                  <span className=' absolute left-0 w-1 h-full bg-n-1 rounded-xl '></span>
                  Photos</span>
              </div>

              <div className='flex flex-auto py-2 flex-grow gap-x-4' >

                <div className=' rounded-xl overflow-hidden'>
                  <img className=' object-cover w-full  max-h-[calc(162.8px)] min-h-[calc(82.6px)]'
                    src='https://m.media-amazon.com/images/M/MV5BMDZmODVhOTItYjUzZi00MjEzLWExNmUtZTg3OGYwMDI2MzU4XkEyXkFqcGc@._V1_.jpg'
                  />
                </div>

                <div className=' rounded-xl overflow-hidden'>
                  <img className=' object-cover w-full  max-h-[calc(162.8px)] min-h-[calc(82.6px)]' src='https://m.media-amazon.com/images/M/MV5BMGM1MjQ4YmItYzRhOC00MjAyLTgwZGMtY2E4NGZmOTEzOThlXkEyXkFqcGc@._V1_.jpg'
                  />
                </div>

                <div className=' rounded-lg overflow-hidden'>
                  <img className=' object-cover w-full  max-h-[calc(162.8px)] min-h-[calc(82.6px)] ' src='https://m.media-amazon.com/images/M/MV5BN2FiNjlmN2UtMTk0OC00MmU2LWIyNzktNDcyOTVjZjkwNzMzXkEyXkFqcGc@._V1_.jpg'
                  />
                </div>


              </div>
              <div className='flex flex-auto py-2 gap-x-4'>

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


              </div>
            </div>


            <div className='mb-32'>
              <div>
                <span className='relative inline-block px-4  text-2xl text-n-1'>
                  <span className=' absolute left-0 w-1 h-full bg-n-1 rounded-xl '></span>
                  Known for</span>
              </div>

              <div className='py-8 relative overflow-hidden'>
                <div className='absolute flex right-0 -top-4'>
                  <div className='rounded-full overflow-hidden bg-white p-4 mx-1 text-black'
                    onClick={() => handlePrev()}> p </div>
                  <div className='rounded-full overflow-hidden bg-red-600 p-4 mx-1'
                    onClick={() => handleNext()}>N </div>

                </div>
                <div ref={box} className={`flex    scroll-auto -translate-x-[${translate}px]`}>
                  <div className='h-24  bg-black w-1/2 px-40'> 1 </div>
                  {/* <div className='h-24 mx-8 bg-black w-1/2 px-40'>2</div>
                  <div className='h-24 mx-8 bg-black w-1/2 px-40'>3</div> */}


                </div>
              </div>
            </div>

            {/* Credits */}
            <div className='mb-32'>
              <div>
                <span className='relative inline-block px-4  text-2xl text-n-1'>
                  <span className=' absolute left-0 w-1 h-full bg-n-1 rounded-xl '></span>
                  Credits</span>
              </div>

              <div className='p-4'>
                {/* filters div  */}
                <div></div>

                <div className='py-4 border-b-2 border-lt-2/60'>
                  <h1 className='h4-bold text-n-1'>Actor</h1>
                </div>

                {/* Accordion */}
                <div className='py-4 border-b-2 border-lt-2/60' onClick={() => handleToggle()}>

                  <div className='relative'>
                    <div>
                      <h1>Upcoming <span className='text-lt-2'>6</span></h1>
                    </div>
                    {/* List */}
                    <div className={`${active ? 'block' : 'hidden'}  `}>

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


                    </div>



                    <div className='absolute right-0 top-0' >X</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Videos */}


            {/* Personal details */}

            <div className='mb-32'>

              <div>
                <span className='relative inline-block px-4  text-2xl text-n-1'>
                  <span className=' absolute left-0 w-1 h-full bg-n-1 rounded-xl '></span>
                  Personal details</span>
              </div>

              <div></div>


            </div>

            {/* Did you know */}

            {/* FAQs */}


          </div>
        </div>
      </div>



    </div>
  )
}

export default Celeb
