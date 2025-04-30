import React, { useEffect } from 'react'
import './nav.css'
import { IoSearch } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";
import ScrollReveal from 'scrollreveal';
import { Link } from 'react-router-dom';
import NavMain from './NavMain';


const Nav = () => {
    useEffect(()=>{
        ScrollReveal().reveal(".reveal",{
            delay:300,
            distance:"200px",
            origin:"top",
            reset:true,
            duration:1000,
            easing:"ease-in-out",
 
        })
        ScrollReveal().reveal(".navreveal",{
            delay:300,
            distance:"200px",
            origin:"left",
            reset:false,           duration:1000,
            easing:"ease-in-out",
 
        })

    },[])
  return (
 <>
<div className='header'>
    <div className='nav'>
            <div className='rounded-nav navreveal'>
                <div className='nav-logo'>
           
                 <img src='	https://themewagon.github.io/Oinia/images/logo.png'/>
                </div>
                <div className='links'>
                    <input type='checkbox' id='toggle-btn' className='hidden'/>
                    <label htmlFor='toggle-btn' className='menu-btn'>
                    <CiMenuBurger size={22} fontWeight={200} />
                    </label>
                    <ul>
                        <li className='li-nav'>
                            <Link to={'/'}>
                            <button className='links-btn active'>Home</button>
                            </Link>
                            <Link to={'/about'}>
                            <button className='links-btn'>About</button>
                            </Link>
                            <Link to={'/services'}>
                            <button className='links-btn'>Services</button>
                            </Link>
                            <Link to={'/contactus'}>
                            <button className='links-btn'>Contact Us</button>

                            <button className=' nav-btn'>Logout</button>
                            <IoSearch className='search-logout'/>
                            </Link>
                        </li>
                    </ul>
                </div>
               
                 
                       
                   
              
                
               
                
    
            </div>
            </div>
   <div className='banner reveal'>
    <p className='banner-para'>Computer Courses Accademy</p>
    <h1 className='banner-heading'>
        Any<br/>
        Courses You Want
    </h1>
   </div>
   <div className='header-btn'>
    <button className='head-btn reveal'>Read More</button>


   </div>


</div>
<div className='container'>
    <div className='container-img'>
        <img src='	https://themewagon.github.io/Oinia/images/play-icon.png'/>
    </div>
</div>
 </>
  )
}

export default Nav