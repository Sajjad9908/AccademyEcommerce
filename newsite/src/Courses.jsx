import React, { createContext, useContext, useEffect, useState } from 'react'
import './courses.css'
import { Context1 } from './CourseContext'
import { Link } from 'react-router-dom'


const Courses = () => {
    const[data,setData]=useState([])
    const {course}=useContext(Context1)
    useEffect(()=>{
        setData(course)
        
    },[])
   return(
  <>
  <div className='high-text'>
  <h1 className='head-text1 reveal-Newcourse txt1'>Our Courses</h1>
  </div>
   <div className='flex-product'>
   {data.slice(0,4).map((value) => (
   
               
               <Link to={`/course/${value.id}`} key={value.id} className='main-box'style={{textDecoration:'none'}}> 
                    <img src={value.image} alt={value.title} /> 
                    <h2>{value.title}</h2>
                    <p>{value.description}</p>
                    <div className='circle'>
                    <h5>{value.price}</h5>
                    </div>
                    <div className='header-btn'>
    <button className='head-btn reveal'>Buy Course</button>


   </div>

   </Link>
                    
                
            ))}
            </div>
  </>
  )
}

export default Courses