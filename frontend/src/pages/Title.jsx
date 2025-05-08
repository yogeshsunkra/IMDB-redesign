import React from 'react'
import { useParams } from 'react-router-dom'

const Title = () => {

  const params = useParams();
  console.log(params, 'PARAMETER');
  console.log(params.id, 'PARAMETER ID');



  return (
    <div className='w-full '>
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




    </div>
  )
}

export default Title
