import React from 'react';
import { NavLink,Route,Routes } from 'react-router-dom';
import Title from '../pages/Title'
import Search from '../pages/Search'

const Content = () => {
  return (
    <div>
      <Routes>
        <Route path='/search/query/:id' element= {<Title/>}></Route>
        <Route path='/searchResults/:input' element= {<Search/>}></Route>
      </Routes>
    </div>
  )
}

export default Content
