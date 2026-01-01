import React from 'react';
import { NavLink,Route,Routes } from 'react-router-dom';
import Title from '../pages/Title'
import Search from '../pages/Search'
import Celeb from '../pages/Celeb'
import HomePage from '../pages/HomePage'

const Content = () => {



  return (
    <div>
      <Routes>
        <Route path='/home' element= {<HomePage/>}></Route>
        <Route path='/search/title/:id' element= {<Title/>}></Route>
        <Route path='/search/celeb/:id' element= {<Celeb/>}></Route>
        <Route path='/searchResults/:input' element= {<Search/>}></Route>
      </Routes>
    </div>
  )
}

export default Content
