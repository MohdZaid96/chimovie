import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home';
import SinglePage from '../Pages/SinglePage';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';





const AllRoutes = () => {
  return (
      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/movie/:imdbID' element={<SinglePage />}></Route>
          <Route path='/login'  element={<Login />}></Route>
          <Route path='/signup'  element={<Signup />}></Route>
      </Routes>
  )
}


export default AllRoutes;

