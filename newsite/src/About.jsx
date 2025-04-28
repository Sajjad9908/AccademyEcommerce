import React from 'react'
import './about.css'

const About = () => {
  return (
    <>
    <div className='about'>
    <h1>About</h1>
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