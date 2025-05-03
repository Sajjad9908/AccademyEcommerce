import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import './courses.css'
import { Context1 } from './CourseContext'
import { Link } from 'react-router-dom'
import useWindowWidth from './useWindowWidth'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const Courses = () => {

    const width = useWindowWidth();
    const isMobile = width < 768;
      let [data,setData]=useState([])
    
      const [seemore,setSeemore]=useState(false)
      const {course}=useContext(Context1)
       data= isMobile?( seemore? course :course.slice(0,2)):course;
    
  const box1=useRef()
  useGSAP(()=>{
gsap.from(box1.current ,{
        
          x: 100,
          opacity: 0,
          duration: 1,
          delay:.5,
       
        
       
      scrollTrigger:{
        trigger:box1.current,
        yoyo:true,
        start:"top 70%",
        end:"bottom 60%",
        toggleActions: "restart none restart none",
        markers:true,
        scrub:false,
       

      }
      
       
       
       


    })
  })
    
    useEffect(()=>{

        setData(course)
        
    },[])
  
      
   return(
  <>
  <section className='seemore'>
  <div ref={box1} className='high-text '>
  <h1 className='head-text1 reveal-Newcourse txt1'>Our Courses</h1>
  </div>
   <div  className='flex-product'>
   {data.slice(0,4).map((value) => (
   
               
               <Link to={`/course/${value.id}`} key={value.id} className='main-box'style={{textDecoration:'none'}}> 
                    <img src={value.image} alt={value.title} /> 
                    <h2>{value.title}</h2>
                    <p>{value.description}</p>
                    <div  className='circle'>
                    <h5>{value.price}</h5>
                    </div>
                    <div className='header-btn'>
    <button className='head-btn '>Buy Course</button>


   </div>

   </Link>
                    
                
            ))}
               
           
            </div>
            <button className='head-btn toggle-button' onClick={()=>{
                setSeemore(!seemore) 
               
               

             }}>{seemore?"See Less":"See More"}</button>
            </section>
           
            
  </>
  )
}

export default Courses