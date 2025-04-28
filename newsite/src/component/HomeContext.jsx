import React, { children, createContext,useState,useEffect } from 'react'
 const newContext=createContext();
import ScrollReveal from 'scrollreveal';

const HomeContext = ({children}) => {

    const [reveal,setreveal]=useState('')
    useEffect(()=>{
    if (reveal){
       ScrollReveal().reveal(".reveal-Newcourse",{
           delay:300,
           distance:"200px",
           origin:"left",
           reset:false,
           duration:1000,
           easing:"ease-in-out",
 
       })
       
    }
   },[reveal])
   const handleClick=()=>{
     setreveal(true)
   }
  return (
    <>
    <newContext.Provider value={{handleClick}}>
        {
            children
        }
    </newContext.Provider>
    </>
  )
}
export {newContext}
export default HomeContext
