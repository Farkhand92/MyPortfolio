import React from 'react';
import { FaTrophy, FaCheck  } from "react-icons/fa";
const ServicesAchievements = () => {
  const bg = 'bg-gradient-to-br from-violet-800 to-black shadow-violet-800 shadow-lg text-white border-3 border-violet-500';
  
  const services = [
    'Full-stack MERN app development',
    'API creation & backend logic',
    'Responsive UI in React',
    'MongoDB database modeling',
    'Deployment & hosting'
  ];

  const achievements = [
    'Built 5+ full-stack MERN projects',
    "Completed FreeCodeCamp's JS Certificate",
    'Finished 100 Days of Code Challenge',
    'Published open-source components on GitHub'
  ];

  return (
    <>
      <div className={`${bg} w-[90%] min-h-[95%] flex flex-col items-center justify-start rounded-xl p-6`}>
        <h1 className='w-full text-4xl p-2 font-bold text-center border-violet-500 border-b-3 h1'>
          Services & Achievements
        </h1>

        <div className='w-full mt-4 grid grid-cols-1 lg:grid-cols-2 gap-5 px-4'>
          {/* Services Section */}
          <div className='bg-violet-900/30 backdrop-blur border border-violet-500/50 rounded-lg p-6'>
            <h2 className='text-2xl font-bold text-violet-300 mb-6 flex items-center gap-2 h1'>
              <FaCheck  className='w-6 h-6' />
              Services
            </h2>
            
            <div className='space-y-3'>
              {services.map((service, index) => (
                <div
                  key={index}
                  className='flex items-start gap-1 p-1 rounded-lg bg-black/20 hover:bg-violet-900/40 transition-all duration-300 font'
                >
                  <span className='text-green-400 text-xl mt-1 flex-shrink-0 font'>✓</span>
                  <span className='text-base font-medium text-gray-100 font'>
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div className='bg-violet-900/30 backdrop-blur border border-violet-500/50 rounded-lg p-6'>
            <h2 className='text-2xl font-bold text-violet-300 mb-6 flex items-center gap-2 h1'>
              <FaTrophy className='w-6 h-6 ' />
              Achievements
            </h2>
            
            <div className='space-y-3'>
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className='flex items-start gap-2 p-2 rounded-lg bg-amber-900/20 hover:bg-amber-900/40 transition-all duration-300 '
                >
                  <span className='text-amber-400 text-xl mt-1 flex-shrink-0 font'>🏆</span>
                  <span className='text-base font-medium text-gray-100 font'>
                    {achievement}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className='w-full mt-4 px-4 bg-violet-900/20 border border-violet-500/30 rounded-lg p-6'>
          <h3 className='text-xl font-bold text-violet-300 mb-3 h1'>
            What I Bring to the Table
          </h3>
          <p className='text-base text-gray-200 leading-relaxed font'>
            I offer end-to-end full-stack development services, from architecting robust backend systems and designing responsive user interfaces to deploying production-ready applications. With proven track record of completing complex MERN projects, industry certifications, and consistent dedication to continuous learning through challenges and open-source contributions, I'm committed to delivering high-quality, scalable solutions that drive real value for your business.
          </p>
        </div>
      </div>
    </>
  );
};

export default ServicesAchievements;