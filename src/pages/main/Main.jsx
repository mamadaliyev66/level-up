import React, { useState,useEffect } from 'react'
import './components/styles.css'
import Section2 from './components/section2'
import Section3 from './components/section3'
import Section4 from './components/section4'
import Section5 from './components/section5'
import Section6 from './components/section6'
import Section7 from './components/section7'
import Section8 from './components/section8'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import bgvideo from './../../assets/gif.mp4'
import { useRef } from 'react'
export default function Main() {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [btnClass,setBtnClass]=useState('mt-9   ml-3 bg-blue-500 text-white rounded text-2xl w-52 h-16 relative z-40 hover:bg-transparent hover:border-blue-500 hover:border-2 hover:text-blue-500 transition duration-300')
  const [btn2Class,setBtn2Class]=useState('mt-9 ml-3 hover:bg-blue-300 hover:text-white rounded text-2xl w-52 h-16 relative z-40 bg-transparent border-blue-300 border-2 text-blue-500 transition duration-300')

  
  const btnClicked= ()=>{
    setBtnClass('mt-9  animate-ping   ml-3 bg-blue-500 text-white rounded text-2xl w-52 h-16 relative z-10 hover:bg-transparent hover:border-blue-500 hover:border-2 hover:text-blue-500 transition duration-300')
    setTimeout(() => {
      
      navigate('/register')
    }, 200);
  }



  const btn2Clicked= ()=>{
    setBtn2Class('mt-9 animate-ping ml-3 hover:bg-blue-300 hover:text-white rounded text-2xl w-52 h-16 relative z-10 bg-transparent border-blue-300 border-2 text-blue-500 transition duration-300')
    setTimeout(() => {
      
      navigate('/courses')
    }, 200);
  }


  useEffect(() => {
    
    if(window.innerWidth>1200){

      videoRef.current.playbackRate = 0.5
    }
  }, []);
  
  return (


    <div className=''>
         
       <div className='my-9' >
      
          <div className="context">
            

                <div>
                  <h1 className='text-4xl my-5 text-center  relative z-40'>Start your learning journey <span className='text-blue-600 font-bold'>today !</span> </h1>
                  <h2 className='text-2xl text-center z-40 relative '> <span className='text-blue-600'>Ready to learn?</span> Join our community and begin your journey with engaging courses and passionate learners. <span className='text-blue-600 font-bold'>Start now!</span> </h2>


                  <div className='text-center '>
                    <Link ><button onClick={btnClicked}  className={btnClass}>Join for Free</button></Link>
                    <Link ><button onClick={btn2Clicked}  className={btn2Class}>Explore Courses</button></Link>
                  
                  
                  </div>

                </div>


          </div>
          {window.innerWidth<1200?(
            <div className="area" >
                      <ul className="circles">
                              <li></li>
                              <li></li>
                              <li></li>
                              <li></li>
                              <li></li>
                              <li></li>
                              <li></li>
                              <li></li>
                              <li></li>
                              <li></li>
                      </ul>
          </div >
          
          ):(
            <header class="relative flex items-center  
            justify-center h-screen mb-12  
            overflow-hidden"> 
        
        <video  autoPlay loop muted ref={videoRef} 
        
             
            class="absolute z-10 w-auto  
            min-w-full min-h-full max-w-none"> 
            <source src={bgvideo}
                type="video/mp4"/> 
        </video> 
    </header> 
          )}
          
        </div>




      <Section3/>
      <Section4/>
      <Section2/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Section8/>

    </div>


  )
}
