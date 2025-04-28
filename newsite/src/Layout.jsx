import React from 'react'
import NavMain from './component/NavMain'
import ContactUs from './ContactUs'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
   <>
  
   <Outlet/>
   <ContactUs/>
      </>
  )
}

export default Layout