import React from 'react'
import { Link } from 'react-router-dom';
import { skills, project, services, certification } from '../assets';
import Card from '../components/Card.jsx';

const Home = () => {
  const contentClass = 'h1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-violet-800 to-black z-10 text-amber-100 font-bold text-2xl md:text-3xl px-6 py-3  shadow-2xl backdrop-blur-sm w-full text-center';
  
  const cardData = [
    {
      path: "/aboutMe",
      bgImg: certification,
      title: "ABOUT ME"
    },
    {
      path: "/skills",
      bgImg: skills,
      title: "SKILLS"
    },
    {
      path: "/projects",
      bgImg: project,
      title: "PROJECTS"
    },
    {
      path: "/services",
      bgImg: services,
      title: "BUILD & BEYOND"
    }
  ];

  return (
    <div className='w-full min-h-screen flex flex-wrap items-center justify-center md:justify-evenly'>
      {/* Cards - Smaller Cards */}
        {cardData.map((item, index) => (
          <Link 
            key={index}
            to={item.path}
            className='group transform transition-all duration-300 hover:scale-105 hover:z-10'
          >
            <Card 
              bgImg={item.bgImg} 
              cClass={contentClass} 
              content={item.title} 
              bgOpacity={'0.5'}
            />
          </Link>
        ))}
    </div>
  )
}

export default Home