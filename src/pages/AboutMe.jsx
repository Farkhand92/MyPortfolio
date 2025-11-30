import React from 'react'

const AboutMe = () => {
    const bg = 'bg-gradient-to-br from-violet-800 to-black shadow-violet-800 shadow-lg text-white border-3 border-violet-500'
  return (
    <>
     <div className={`${bg} w-[90%] min-height-[95%] flex flex-col items-center justify-center rounded-xl `}>
        <h1 className='w-full text-4xl lg:text-5xl p-3 font-bold text-shadow-black text-shadow-2xs border-violet-500 border-b-3 text-center h1'>About Me</h1>
        <p className='text-lg font-semibold text-center p-4 font'>
         I am a MERN Stack Developer with a strong passion for building scalable, efficient, and user-focused web applications. With hands-on experience in React, Redux Toolkit, Tailwind CSS, Node.js, Express, and MongoDB, I enjoy working across both the front-end and back-end to create clean, functional, and well-structured solutions.

My journey started with core programming fundamentals in C++, SQL, and Data Structures & Algorithms during my BSCS degree, which strengthened my analytical thinking and shaped the way I approach problem-solving today. Over time, I moved deeper into modern JavaScript development, exploring how great products are engineered — from UI/UX all the way to backend logic and system architecture.

I strive to write clean, maintainable code and continuously grow as a developer. At the moment, I'm expanding my skillset by learning Next.js, TypeScript, and GraphQL, while developing more complete full-stack systems. These technologies help me move closer to my long-term goal: becoming a System Design Engineer capable of architecting large-scale, high-performance applications.

Beyond coding, I enjoy experimenting with new tools, improving my understanding of AI and automation, and contributing to meaningful digital experiences. I love the challenge of turning ideas into real products and I'm always excited to learn, build, and improve.
</p>
      </div>
    </>
  )
}

export default AboutMe