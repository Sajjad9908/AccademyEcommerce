import React from 'react'
import './highquality.css'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const HignQuality = () => {
  const box1=useRef([])
  const containerRef=useRef(null)
  const imgRef=useRef();

useGSAP(()=>{
 const tl= gsap.timeline({

  defaults:{
 
  y:30,
  delay:0.1,
  duration:0.5,
  },
  scrollTrigger:{
    trigger:containerRef.current,
    toggleActions: "restart none restart none",
    start:"top 60%",
    end:"bottom 60%",
    
  }
 })
box1.current.forEach((el)=>{
  tl.from(el,{ opacity:0,stagger:0.4,

  })

})
const t2=gsap.timeline({
  defaults:{
    delay:1,
    duration:1.2},
  scrollTrigger:{
    trigger:imgRef.current,
    toggleActions: "restart none restart none",
    start:"top 60%",
    end:"bottom 60%",
  
  },
  
})
t2.from(imgRef.current,{
  opacity:0.3,
  repeat:-1,
  yoyo:true,

})
  
},[])
  return (
    <div className='high-flex'>
        
        <div className='high-text' ref={containerRef}>
            <h1 ref={(el)=> (box1.current[0]=el)} className='head-text1 reveal-Newcourse'>High Quality</h1>
            <h1 ref={(el)=>(box1.current[1]=el)} className='head-text1 text2 reveal-Newcourse'>
            Let's Start Your Education!
            </h1>
            <p ref={(el)=> box1.current[2]=el} className='high-para reveal-Newcourse'>It is a long established fact that a reader will be distracted by the readable</p>
            <button className='high-btn'>Make Appointment</button>
            </div>
            <div className='img-1'ref={imgRef}>
                <img src="https://themewagon.github.io/Oinia/images/img-1.png
" alt="image1" />
            </div>
            <div className='img-2'>
                <img src='https://themewagon.github.io/Oinia/images/img-2.png
' alt='imaage2'/>
            </div>

        
    </div>
  )
}

export default HignQuality