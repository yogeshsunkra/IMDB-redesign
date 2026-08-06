import React, { Suspense , lazy} from 'react';
import { NavLink,Route,Routes } from 'react-router-dom';
const Celeb =  lazy(() =>  import( '../pages/Celeb'))
const Title  =  lazy(() =>  import( '../pages/Title'))
const Search =  lazy(() =>  import( '../pages/Search'))
const Explore =  lazy(() =>  import( '../pages/Explore'))
import HomePage  from  '../pages/HomePage' ;


const Content = () => {


  return (
    <div>
      <Suspense fallback = {<div className='w-full h-screen animate-pulse'></div>}>
      <Routes>
        <Route path='/home' element= {<HomePage/>}></Route>
        <Route path='/' element= {<HomePage/>}></Route>
        <Route path='/search/title/:id' element= {<Title/>}></Route>
        <Route path='/search/celeb/:id' element= {<Celeb/>}></Route>
        <Route path='/searchResults/:input' element= {<Search/>}></Route>
        <Route path='/search/explore/:key' element= {<Explore/>}></Route>
      </Routes>
      </Suspense>
    </div>
  )
}

export default Content
