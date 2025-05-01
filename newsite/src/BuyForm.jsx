import React, { useContext, useEffect } from 'react'
import './buyform.css'
import NavMain from './component/NavMain'
import * as Yup from 'yup';
import { ErrorMessage, Field, Formik } from 'formik';
import { useParams } from 'react-router-dom';
import { Context1 } from './CourseContext';
import {  useSelector } from 'react-redux'





const BuyForm = () => {

const {id}=useParams()
const {course}=useContext(Context1)
const courseDetail=course.find((c)=>c.id.toString()===id)
if(!courseDetail) return <h1>...CourseNotFound</h1>
const cart=useSelector((state)=>state.cart)
const CartItem=cart.find((items)=>items.id==courseDetail.id)
const quantity= CartItem?CartItem.quantity : 1

  const initialvalues={
    name:"",
    email:"",
    number:"",
    gender:"",
    country:"india"
  }
const validation=Yup.object({
  name:Yup.string().required("field is required"),
  email:Yup.string().email("Invalid Email").required("field is required"),
  number:Yup.string().matches(/^\d+$/, "Only numbers are allowed").required("the field is required"),
  gender:Yup.string().required("the field is required"),
  country:Yup.string()
  .required("Country is required")
  
})
useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  return (
    <>
    <NavMain/>
    
    <div className='buy-form'>
        <h1>Buy Product</h1>
        </div>
        <div className='course-flex2'>
        <div className=' detail-crc'>
        <img className='form-img' src={courseDetail.image} alt={courseDetail.title} />
        <h2 className='crc-title'>{courseDetail.title}</h2>
        <h3 className='crc-title'>{courseDetail.description}
        </h3>
       
    <p className='quan' >Quantity:{quantity}</p>
      
        </div>
        <div className='form2'>
          <Formik initialValues={initialvalues} 
          validationSchema={validation}  
          onSubmit={(values,{resetForm})=>{
            console.log(values)
            resetForm();
          }}>
            {({handleSubmit})=>(
        <form onSubmit={handleSubmit}>
           <div className='name'>
            <h3>Name</h3>
            <Field type='text' placeholder='Enter your name' name="name"/>
            <ErrorMessage component="div" className='error' name="name"/>
           </div>
           <div className='name'>
            <h3>Email</h3>
            <Field type='Email' placeholder='Enter your Email' name="email"/>
            <ErrorMessage component="div" className='error' name="email"/>
           </div>
           <div className='name'>
            <h3>Number:</h3>
            <Field type='number' placeholder='Enter your Phone Number' name="number"/>
            <ErrorMessage component="div" className='error' name="number"/>
           </div>
           <div className='name for-margin'>
            <h3>Gender:</h3>
            <label htmlFor='male'>male</label>
            <Field className='radio' type='radio' name='gender'  value='male'/>
            <label htmlFor='female'>female</label>
            <Field className='radio' type='radio' name='gender'  value='female'/>
           <ErrorMessage name='gender' component="div" className='error'/>
           </div>
           <div className='name name2'>
           <h3>select country:</h3>
           <Field as='select' name='country' className="country">
            <option value="pakistan">Pakistan</option>
            <option value="india">India</option>
            <option value="china">China</option>
            <option value="afghanistan">Afghanistan</option>
            <option value="australia">Australia</option>
            </Field>


           </div>
           <button className='head-btn bt'>submit </button>



        </form>
        )}
        </Formik>
        

    </div>
    </div>
    </>
  )
}

export default BuyForm