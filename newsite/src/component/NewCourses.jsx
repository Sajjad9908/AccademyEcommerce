import React, { useContext, useEffect } from 'react'
import './newcourses.css'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const NewCourses = () => {
    const boxes=useRef()
    const box2=useRef()
    const box4=useRef()
 useGSAP(()=>{
const tl=gsap.timeline({
defaults:{
opacity:0,
ease:"power1.inOut",
delay:0.2,},
scrollTrigger:{
    trigger:boxes.current,
    toggleActions: "restart none restart none",
    start:"top 60%",
    end:"bottom 40%",
   
 
  

}
})
tl.from(boxes.current,{y:20,stagger:0.5, duration:0.4})
tl.from(box2.current, {
    duration: 0.4,
    y: 20,
    stagger:0.5,
 })
 tl.from(box4.current,{stagger:0.5,duration:1,opacity:0.002,rotate:180,})
},[{ dependencies: []}])
   
  return (
   <>
   <div className='course-heading reveal-Newcourse '>
   <h1 ref={boxes} className='course-top-head'> 
   Start Now

   </h1>
   <h1 ref={box2} className='course-top-head-2'>
    Learn a new Course
   </h1>
   </div>
   <div className='course-main-flex'>
    <div className='easy-approch' ref={box4}>
        <img src='https://themewagon.github.io/Oinia/images/icon-1.png
'/>
<h6 className='easy-h-6'>An Easy <br/>Study Approach</h6>
<div className='easy-btn-dv'>
    <button className='easy-btn' >Read More</button>
</div>


    </div>
    <div className='easy-approch2'>
        <img src='	https://themewagon.github.io/Oinia/images/icon-2.png

'/>
<h6 className='easy-h-6'>Free <br/>Teaching Material</h6>
<div className='easy-btn-dv'>
    <button className='easy-btn' >Read More</button>
</div>
    </div>
    <div className='easy-approch'>
        <img src='https://themewagon.github.io/Oinia/images/icon-3.png
'/>
<h6 className='easy-h-6'>A Free <br/>Mobile Application</h6>
<div className='easy-btn-dv'>
    <button className='easy-btn' >Read More</button>
</div>


    </div>
    <div className='easy-approch'>
        <img src='https://themewagon.github.io/Oinia/images/icon-4.png
'/>
<h6 className='easy-h-6'>An<br/>Study Accrediated School</h6>
<div className='easy-btn-dv'>
    <button className='easy-btn' >Read More</button>
</div>

    </div>


   </div>
   </>
  )
}

export default NewCourses