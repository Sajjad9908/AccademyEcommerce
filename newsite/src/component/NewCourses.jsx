import React, { useContext, useEffect } from 'react'
import './newcourses.css'


const NewCourses = () => {
    
  return (
   <>
   <div className='course-heading reveal-Newcourse '>
   <h1 className='course-top-head'> 
   Start Now

   </h1>
   <h1 className='course-top-head-2'>
    Learn a new Course
   </h1>
   </div>
   <div className='course-main-flex'>
    <div className='easy-approch'>
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