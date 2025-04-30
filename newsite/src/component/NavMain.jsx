import React from 'react'
import { IoSearch } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from 'react-router-dom';


const NavMain = () => {
  return (
    <>
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
        </>
  )
}

export default NavMain