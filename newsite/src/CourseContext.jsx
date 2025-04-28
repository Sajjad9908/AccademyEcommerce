import React, { createContext, useEffect, useState } from 'react'

export const Context1=createContext();


const CourseContext = ({children}) => {
    const course = [
        {
          id: 1,
          title: "Web Development Mastery",
          description: "Learn HTML, CSS, JavaScript, and React",
          image:
            "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
          price: "$29",
          url: "https://example.com/course/web-dev",
          MoreDescrip:"Dive into the world of web development with this comprehensive course Learn front-end and back-end technologies, including HTML, CSS, JavaScript, React, and Node.js. Gain hands-on experience to build dynamic, responsive websites and web applications.",
        },
        {
          id: 2,
          title: "Python for Data Science",
          description: "Master Python, NumPy, and Pandas",
          image:
          "https://cdn.buttercms.com/t349DUJUReydclxkbGiA",

          price: "Free",
          url: "https://example.com/course/python-data-science",
          MoreDescrip:"Unlock the power of Python for data science with this course. Explore essential libraries like Pandas, NumPy, and Matplotlib to analyze and visualize data. Learn how to clean, manipulate, and model data, preparing you for real-world data science tasks.",
        },
        {
          id: 3,
          title: "Machine Learning Basics",
          description: "Introduction to ML algorithms and applications",
          image:
          "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80", // New URL for Machine Learning
          price: "$49",
          url: "https://example.com/course/machine-learning",
          MoreDescrip:"Get started with machine learning in this beginner-friendly course. Understand the fundamentals of algorithms, models, and data preprocessing. Learn how to build and evaluate machine learning models using popular Python libraries like scikit-learn.",
        },
        {
          id: 4,
          title: "UI/UX Design Fundamentals",
          description: "Design stunning user interfaces with Figma and Adobe XD",
          image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
          price: "$19",
          url: "https://example.com/course/ui-ux-design",
          MoreDescrip:"Master the basics of UI/UX design in this practical course. Learn the principles of creating user-friendly and visually appealing designs. Explore design tools, wireframing, prototyping, and user testing to deliver exceptional digital experiences.",
        },
        {
          id: 5,
          title: "Cybersecurity Essentials",
          description: "Learn ethical hacking and network security",
          image:
            "https://images.unsplash.com/photo-1553484771-208d94f0a39f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
          price: "$39",
          url: "https://example.com/course/cybersecurity",
        },
      ];
      
    
   
    useEffect(()=>{
        course.map((value)=>
            console.log(value)
        )
        
    },[])


  return (
    <>
    <Context1.Provider value={{course}} >
        {children} 
    </Context1.Provider>
    </>
  )
}

export default CourseContext