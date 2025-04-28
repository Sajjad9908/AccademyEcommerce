import React, { useState } from 'react'
import'./contactus.css'
import { IoIosArrowRoundForward } from "react-icons/io";
import { number } from 'yup';
import * as yup from 'yup'; // ✅ Import yup correctly
import { ErrorMessage, Formik,Field,Form } from 'formik';


const ContactUs = () => {
    const [data,setData]=useState([])
const initialvalues={
    name:"",
    number:"",
    email:"",
    message:"",

}
const validate= yup.object({
    name:yup.string().min(6,"min 8 charc should be there in name").required("the field is Required"),
    number:yup.string().matches(/^[0-9]+$/, "Only digits are allowed").required("the field is required"),
    email:yup.string().required("field is required")
})




   
  return (
    <>
    <section className='contact-footer'>
        <div className='subscribe-letter'>
            <h1 className='head-subscribe'>
                Subscribe our Newsletter
            </h1>
          
        <div className='subscribe-input'>
        
            <input type='email' placeholder='Enter Your Email'/>
            
    
            <IoIosArrowRoundForward className='arrow' size={30}/>
      
        </div> 

        
        </div>

        <div className='get-in-touch'>
            <h1 className='get-in-head padding-last' >
                get in touch
            </h1>
           <div className='form'>
            <Formik initialValues={initialvalues}
            validationSchema={validate} 
            onSubmit={(values,{resetForm})=>{
                let getdata=JSON.parse(localStorage.getItem("values"))||[]
                console.log(Array.isArray(getdata))
                
                getdata.push(values)
                console.log(getdata)
                localStorage.setItem("values",JSON.stringify(getdata))
                resetForm()

            }}>
            {({handleSubmit,handleBlur,handleChange,values,errors,touched})=>(
           
            <Form onSubmit={handleSubmit}>
                <div className='text'>
                <input type='text'  name="name"
                onChange={handleChange} onBlur={handleBlur} value={values.name}
                placeholder={touched.name && errors.name ? "*** !!! Field is required":"Enter your Name"} className={touched.name && errors.name?"input-msg":""}/>


</div>
                   
                  <div className='text'>
                <Field type='number' name="number" value={values.number} placeholder={touched.number && errors.number ?"!*Field is required":"Enter your Number" } className={touched.number && errors.name?"input-msg":""}/>
               
                </div>

                <div className='text'>
                <Field type='email' name="email" value={values.email} placeholder={touched.email && errors.email ? "!! *Field is required":"Enter your Email" } className={touched.email && errors.email?"input-msg":""}/>
                
                </div>
               <div className='text'>
                <Field as="textarea" name="message" placeholder="Enter Message" cols={30} rows={6} />
<ErrorMessage name="message" component="div" className="error" />
</div>
            <button type='submit' className='head-btn left'>Send</button>
       
            </Form>
             )}
            </Formik>
           </div>
           <div className='contact'>
            <div className='number'>
                <img src='https://themewagon.github.io/Oinia/images/call-icon.png'/>
                <p className='set-num'>Call Now +92 3403269833</p>
            </div>
            <div className='email'>
                <img src='https://themewagon.github.io/Oinia/images/mail-icon.png'/>
                <p className='set-num'>gulbadan128@gmail.com</p>
            </div>
           </div>


           <div className='flex-Links'>
            <li><a href=' https://www.facebook.com'><img src='https://themewagon.github.io/Oinia/images/fb-icon.png'/></a></li>
            <li><a href=' https://www.facebook.com'><img src='	https://themewagon.github.io/Oinia/images/twitter-icon.png'/></a></li>

            <li><a href=' https://www.facebook.com'><img src='	https://themewagon.github.io/Oinia/images/linkedin-icon.png
'/></a></li>

            <li><a href=' https://www.facebook.com'><img src='	https://themewagon.github.io/Oinia/images/instagram-icon.png
'/></a></li>
           </div>
           <div className='footer'>
            <p className='foot-p'>
            2023 All Rights Reserved. Design Sajjad Hussian Memon
            </p>
        </div>
        </div>
       

    </section>
    </>
  )
}

export default ContactUs