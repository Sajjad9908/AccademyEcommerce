import React, { useRef } from 'react'
import './about.css'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);

const About = () => {
const aboutText=useRef([])
const ContainerRef=useRef()
useGSAP(()=>{
const tl=gsap.timeline({
    opacity:0,
   
    defaults:{
      delay:.2,
      duration:1,

    },
scrollTrigger:{
trigger:ContainerRef.current,
toggleActions: "restart none restart none",
start:"top 20%",
end:"bottom 60%",


}
})
aboutText.current.forEach(el=> {
    tl.from(el,{stagger:0.4,y:20,opacity:0,})
});
},[])
  return (
    <>
    <div className='about' ref={ContainerRef}>
    <h1 ref={(el)=>aboutText.current[0]=el}>About</h1>
    </div>
     <div className='about-txt'>
        <div className='About-img'>
            <img src='https://themewagon.github.io/Oinia/images/img-1.png'/>
            <div className='About-img2'>
                <img src='https://themewagon.github.io/Oinia/images/play-icon-2.png'/>
            </div>
        </div>
        <div className='About-txt'>
            <h1>
                Best training Courses Center
            </h1>
            <p>
        Language School It is a long established fact that a reader will be distracted by the readable content of a pageIt is a long established fact that a reader will be distracted by the readable content of a page
            </p>
            <button className='high-btn'>Read More

            </button>
        </div>

 
    </div>
    </>
  )

}

export default About