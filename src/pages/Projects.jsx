import { useState } from 'react';
import Card from '../components/Card';
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from "react-icons/fa";
import {expenzaa, portfolio, aiChatBot , mini_yt} from "../assets"

const projects = [
  {
    title: "Expense Tracker",
    image: expenzaa,
    description: "Full-stack expense tracker using React, Tailwind, Redux Tool Kit, Node.js, Express, and MongoDB.",
    github: "https://github.com/Farkhand92/Expenzaa-frontend",
    live: "#",
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    description: "A personal portfolio with polish and fully responsive UI built with React and Tailwind CSS.",
    github: "https://github.com/Farkhand92/MyPortfolio",
    live: "#",
  },
  {
    title: "Backend Youtube Mini",
    image :mini_yt,
    description: "Practice to implement some features of youtube backends using Node, Express and MongoDB",
    github: "https://github.com/Farkhand92/Backend",
    live: "#",
  },
  {
    title: "BMI with AI Chatbot",
    image: aiChatBot,
    description: "BMI web with AI chatbot using vanilla HTML , CSS , JS and Gemini",
    github: "https://github.com/Farkhand92/BMI-HTML-CSS-JS-",
    live: "#",
  },
];

const Projects = () => {
  const bg = 'bg-gradient-to-br from-violet-800 to-black shadow-violet-800 shadow-lg text-white'
  const contentClass = `${bg} h1 backdrop-blur-sm text-white text-sm absolute bottom-0 left-0 w-full p-1 rounded-b-xl`;

  const cardProps = {
    cClass: contentClass,
    bg:bg,
    bgSize:'bg-contain'
  }; 
  const [flippedIndex, setFlippedIndex] = useState(null);

  return (
   <div className='w-full min-h-screen flex flex-col items-center justify-center'>
        <div className={`${bg} text-4xl px-16 py-2 rounded-2xl h1`}>
         Projects
        </div>
        <div className='w-full flex flex-wrap items-center justify-evenly p-4 md:p-8 fade-in'>
        {/* Cards - Smaller Cards */}
        {projects.map((project, index) => (
        <Card
          key={index}
          {...cardProps}
          bgImg= {project.image}
          isFlipped={flippedIndex === index}
          onFlipToggle={() =>
            setFlippedIndex(flippedIndex === index ? null : index)
          }
          content={
            <div className="flex flex-col items-center justify-center h-full h1 ">
              <p className="font-bold text-base md:text-lg xl:text-xl font">{project.title}</p>

              {/* Links */}
              <div className="flex gap-10 my-1 2xl:pb-4 ">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-700 transition-all duration-200 hover:scale-110 icon-scale"
                  title="View on GitHub"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-all duration-200 hover:scale-110 icon-scale"
                  title="Live Demo"
                >
                  <FaExternalLinkAlt size={22}  />
                </a>
               <FaInfoCircle 
                 size={22}
                 className="hover:text-blue-500 transition-all duration-200 hover:scale-110 cursor-pointer icon-scale"
                 onClick={() => setFlippedIndex(flippedIndex === index ? null : index)}
               />
              </div>
            </div>
          }
          backSideContent={project.description}
        />

        ))}
        </div>
   </div>
  )
}

export default Projects


