import React from 'react'
import { Outlet } from 'react-router-dom'
import NavMain from './NavMain'
import About from '../About'
import ContactUs from '../ContactUs'



const AboutSec = () => {
  return (
    <>
     <NavMain/> 
    <About/>
    {/* <ContactUs/> */}
    </>
  )
}

export default AboutSec