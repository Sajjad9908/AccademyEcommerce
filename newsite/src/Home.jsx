import React from 'react'
import Nav from './component/Nav'
import NewCourses from './component/NewCourses'
import HignQuality from './component/HignQuality'
import ScrollReveal from 'scrollreveal'
import About from './About'
import Courses from './Courses'
import Events from './Events'
import StudentReview from './StudentReview'
import ContactUs from './ContactUs'

const Home = () => {

   
  return (
    <>

    <Nav/>
        <NewCourses />
        <HignQuality/>
        <About/>
        <Courses/>
        <Events/>
        <StudentReview/>
       
    </>
  )
}

export default Home