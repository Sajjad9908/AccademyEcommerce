import React from 'react'
import'./events.css'

const Events = () => {
  return (
    <>
    <section className='events'>
    <div className='event-head'>
    <h1 className='head-text1 reveal-Newcourse txt1'>Events</h1>
    <p className='para-white'>It is a long established fact that a reader will be distracted by the readable c</p>
    </div>
    <div className='section-flex'>
        <div className='flex-1'>
              <div className='img-sec'>
                <img src="https://themewagon.github.io/Oinia/images/img-7.png"/>
                <div className='sec-txt'>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a</p>
                </div>
                </div>
                <div className='head-sec'>
                <h2 className='black'>
                    live event
                </h2>
                <h2 className='black  yellow'>04 Nov 2023</h2>
                </div>
'
        </div>
        <div className='flex-1'>
              <div className='img-sec'>
                <img src="https://themewagon.github.io/Oinia/images/img-8.png"/>
                <div className='sec-txt'>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a</p>
                </div>
                <div className='head-sec'>
                <h2 className='black'>
                    live event
                </h2>
                <h2 className='black yellow'>04 Nov 2023</h2>
                </div>
                </div>
'
        </div>
    </div>
    <div className='header-btn'>
    <button className='head-btn bt'>Read More</button>


   </div>
    </section>
    </>
  )
}

export default Events