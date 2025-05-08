import React  from 'react'
import { useState , useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import { IoPersonSharp } from 'react-icons/io5';
import { IoMdFilm } from 'react-icons/io';

const Search = () => {

  const [title,setTitle] = useState([]);
  const [people,setPeople] = useState([]);
  const params = useParams();
  const location = useLocation();

  const query = params.input;
  const data = location.state.searchResults;

  useEffect(()=>{

    

      const peopleData = data.filter((item) => !item.q);
      const titleData = data.filter((item) => item.q);

      setPeople(peopleData);
      setTitle(titleData);

      console.log("PEOPLE", people);
      console.log("TITLE", title);

  


  },[data])


  console.log("SEARCHPAGE", data);

  
  
 



  return (
    <div className=' h-full w-full   '>
      <div className=' bg-dark-4 bg-opacity-40 backdrop-blur-3xl  w-full my-12 py-6'>
        <p className='h2'>Search <span className='text-n-1'>{query}</span> </p>
      </div>

      <div className=' bg-dark-4 bg-opacity-40 backdrop-blur-3xl  w-full my-12 py-6'>
        <div>
        <span className='relative inline-block px-10  text-2xl text-n-1'>
          <span className=' absolute left-4 w-1 h-full bg-n-1 rounded-xl '></span>
           People</span>
        </div>

          {
            people && (
              people.map((item,index) => (

                <NavLink key = {index} className=' w-full flex items-center border-b-2 border-b-white/10 py-4 '>

                <div className='rounded-full mx-2 overflow-hidden w-16 h-16 mr-4 bg-dark-4 '>
                  {
                    item.i ? (
                      <img src={`${item.i.imageUrl}`} />
                    ) : (
                      <div className="text-lt-2 text-[2rem]  flex items-center justify-center my-[25%]">
                      {item.q ? <IoMdFilm/> : <IoPersonSharp/>}
                    </div>
                    )
                  }
                  
                </div>
                <div>
                  <h1>{item.l}</h1>
                  <p>{item.s} </p>
                </div>
              </NavLink>
              

              ))
            )
          }



      </div>

      <div className=' bg-dark-4 bg-opacity-40 backdrop-blur-3xl  w-full my-8'>
        <div>
        <span className='relative inline-block px-10  text-2xl text-n-1'>
          <span className=' absolute left-4 w-1 h-full bg-n-1 rounded-xl '></span>
           Title</span>
        </div>


        {
            title && (
              title.map((item,index) => (

                <NavLink key = {index} className=' w-full flex items-center border-b-2 border-b-white/10 py-4 '>

                <div className='rounded-full mx-2 overflow-hidden w-16 h-16 mr-4 bg-dark-4 '>
                  {
                    item.i ? (
                      <img src={`${item.i.imageUrl}`} />
                    ) : (
                      <div className="text-lt-2 text-[2rem]  flex items-center justify-center my-[25%]">
                      {item.q ? <IoMdFilm/> : <IoPersonSharp/>}
                    </div>
                    )
                  }
                  
                </div>
                <div>
                  <h1>{item.l}</h1>
                  <p>{item.s} </p>
                </div>
              </NavLink>
              

              ))
            )
          }



      </div>



    </div>
  )
}

export default Search
