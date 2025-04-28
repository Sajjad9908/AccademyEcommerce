import React, { useEffect } from 'react'
import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Context1 } from './CourseContext'
import './coursedetail.css'
import NavMain from './component/NavMain'
import { AddToCart,RemoveFromCart,DecreaseQuantity } from './addtocart/AddCartSlice'
import {  useDispatch,useSelector } from 'react-redux'


const CourseDetail = () => {
   
  const cart=useSelector((state)=>state.cart)
  const dispatch=useDispatch();
  const handleAddToCart=(course1)=>{
         dispatch(AddToCart(course1))
  }
  const handleDecreaseFromCart=(coursedecrese)=>{
         dispatch(DecreaseQuantity(coursedecrese))
  }
  const handleRemoveFromCart=(courseId)=>{
dispatch(RemoveFromCart(courseId))
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
    const {id}=useParams()
    const {course}=useContext(Context1)
    const selectedcourse=course.find((c)=>c.id==id)
    if(!selectedcourse) return <h1>...Course not Found</h1>

  return (
    <>
    <NavMain/>
    <div className='buy-form'>
        <h1>Buy Product</h1>
        </div>
    <div className='course-flex'>
    <div className='main-box  box-detail'>
    <img src={selectedcourse.image} alt={selectedcourse.title} />
        <h2>{selectedcourse.title}</h2>
        <p>{selectedcourse.description}</p>
                    <div className='circle'>
                    <h5>{selectedcourse.price}</h5>
                    </div>
                    <div className='header-btn'>
    <Link style={{textDecoration:"none"}} to={`/buyform/${selectedcourse.id}`}>
    <button className='head-btn reveal'>Buy Course</button>
    </Link>
    </div>
    </div>
    <div className='detailCourse'>
      <h1 className='course-detail-h1'>Course Detail</h1>
      <h3 className='c-title'>{selectedcourse.title}</h3>
      <p className='fees-des'>its {selectedcourse.price} Are You ready ro join Our course</p>
      <h3 className='what-learn'>What will You Learn</h3>
      <p className='Moredescrip'>{selectedcourse.MoreDescrip}</p>
      <Link style={{textDecoration:"none"}} to={`/buyform/${selectedcourse.id}`}>
    <button className='head-btn reveal'>Buy Course</button>
    
       
      
    </Link>
      <button className='btn-reducer' onClick={()=>handleAddToCart(selectedcourse)}>AddToCard</button>
      <button className='btn-reducer' onClick={()=>handleRemoveFromCart(selectedcourse.id)}>RemoveFromCart</button>
      <button className='btn-reducer' onClick={()=>handleDecreaseFromCart(selectedcourse.id)}>DecreaseQuantity</button>
      
      {cart.map((items)=>
        <li className='li' key={cart.id}><span>{items.title} </span>Quantity:{items.quantity}</li>
        )}
    </div>
    
    </div>
    
    </>
  )
}

export default CourseDetail