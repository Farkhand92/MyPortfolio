import React from 'react'
import { bgImage, myProfile } from "../assets";

const Header = () => {
  const bg = 'bg-gradient-to-br from-violet-800 to-black shadow-violet-800 shadow-lg'
  
  return (
    <div 
      className="w-full header md:fixed md:left-0 md:top-0 md:w-[290px] lg:w-[320px] 2xl:w-[380px] md:h-full bg-no-repeat bg-center bg-cover text-amber-50 backdrop-blur-sm border-b-2 border-r-2 border-violet-950"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 md:bg-black/40"></div>
      
      {/* Content */}
      <div className='w-full relative z-10 flex flex-col items-center justify-evenly p-2 md:p-6 h-full space-y-2 md:space-y-4'>
        
        {/* Profile Section */}
          <div className={`${bg} w-32 h-32 md:w-37 md:h-37 2xl:h-55 2xl:w-55 border-4 border-white/20 flex items-center justify-evenly rounded-full overflow-hidden transform transition-transform hover:scale-105 image`}>
            <img 
              src={myProfile} 
              alt="Muhammad Farkhand Waqar" 
              className='object-cover' 
            />
          </div>
          
          <div className='text-center'>
            <h1 className={`${bg} font-bold text-lg md:text-md p-1 border-2 border-white/30 rounded-xl backdrop-blur-sm font`}>
              MUHAMMAD FARKHAND WAQAR
            </h1>

          </div>
        
        {/* Introduction Box */}
        <div className={`${bg} w-full sm:min-h-80 md:min-h-70 :h-75 border-2 border-white/30 rounded-2xl font-bold backdrop-blur-sm overflow-hidden`}>
          <h2 className='text-center border-b-2 border-solid border-amber-50/50 text-lg py-1 lg:py-2 bg-black/30 h1'>
            INTRODUCTION
          </h2>
          <div className='pb-2 text-xs md:text-sm 2xl:text-lg'>
            {/* Add your introduction content here */}
            <p className='text-amber-50/90 text-center  p-2 xl:py-4'>
              I am a dedicated Full Stack MERN Developer skilled in building modern UIs and scalable backend systems. I work with React, Node.js, Express, MongoDB, Redux Toolkit, and Tailwind CSS to create complete, efficient applications. My projects reflect strong knowledge of REST APIs, ES6+, and clean development workflows using Git, GitHub, and Postman.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header