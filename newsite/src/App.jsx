import React, { useState,useEffect } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

import Home from './Home'
import AboutSec from './component/AboutSec'
import Layout from './Layout'
import Services from './component/Services'
import ContactUs from './ContactUs'
import CourseSec from './component/CourseSec'
import CourseDetail from './CourseDetail'
import BuyForm from './BuyForm'

const App = () => {
  
  
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutSec/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contactus' element={<CourseSec/>}/>
        <Route path='/course/:id' element={<CourseDetail/>}/>
        <Route path='/buyform/:id' element={<BuyForm/>}/>
        </Route>
      </Routes>
    </Router>
   
    </>
  )
}

export default App