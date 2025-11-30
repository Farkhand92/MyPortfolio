import React from 'react';

const Skills = () => {
  const bg = 'bg-gradient-to-br from-violet-800 to-black shadow-violet-800 shadow-lg text-white border-3 border-violet-500';
  
  const skillCategories = [
    {
      category: 'Frontend Development',
      skills: ['React', 'Redux Toolkit', 'Tailwind CSS', 'JavaScript'],
      level: 'Intermediate'
    },
    {
      category: 'Backend Development',
      skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs'],
      level: 'Intermediate'
    },
    {
      category: 'Programming Fundamentals',
      skills: ['C++', 'SQL', 'Data Structures & Algorithms', 'Problem Solving'],
      level: 'Foundational'
    },
    {
      category: 'Design & Graphics',
      skills: ['Logo Design', 'Social Media Posts', 'Flyer Design', 'Visual Design'],
      level: 'Intermediate'
    },
    {
      category: 'Office & Productivity',
      skills: ['Microsoft Word', 'Microsoft Excel', 'Documentation', 'Data Organization'],
      level: 'Intermediate'
    },
    {
      category: 'Currently Learning',
      skills: ['Next.js', 'TypeScript', 'GraphQL', 'System Design'],
      level: 'Learning'
    }
  ];

  return (
    <>
      <div className={`${bg} w-[90%] min-h-[95%] flex flex-col items-center justify-start rounded-xl p-3 brea`}>
        <h1 className='w-full text-4xl p-2 font-bold text-center border-violet-500 border-b-3 h1'>
          Skills & Expertise
        </h1>
        
        {/* Replaced grid with flex + wrap */}
        <div className='w-full mt-5 flex flex-wrap gap-2 px-2 '>
          {skillCategories.map((skillGroup, index) => (
            <div
              key={index}
              className='bg-violet-900/30 backdrop-blur border border-violet-500 rounded-lg p-3 hover:bg-violet-900/50 transition-all duration-300 flex-grow basis-full md:basis-[48%] font'
            >
              <div className='flex items-center justify-between mb-3'>
                <h2 className='text-xl font-bold text-violet-100 h1'>
                  {skillGroup.category}
                </h2>
                <span className='text-xs bg-violet-600 px-3 py-1 rounded-full font'>
                  {skillGroup.level}
                </span>
              </div>
              
              <div className='flex flex-wrap gap-2'>
                {skillGroup.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className='bg-gradient-to-r from-violet-600 to-violet-700 px-3 py-1 rounded-md text-sm font-medium hover:from-violet-500 hover:to-violet-600 transition-all font'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className='w-full mt-3 px-4 bg-violet-900/20 border border-violet-500 rounded-lg p-3'>
          <h3 className='text-2xl font-bold text-violet-300 mb-2 h1'>
            Development Stack
          </h3>
          <p className='text-base text-gray-200 leading-relaxed font'>
            As a MERN Stack Developer, I have a comprehensive understanding of full-stack web development. My core competencies span across React and Redux Toolkit for dynamic frontend interfaces, with Tailwind CSS for modern styling, while on the backend, I leverage Node.js and Express to build robust APIs integrated with MongoDB for efficient data management. My strong foundation in C++, SQL, and Data Structures & Algorithms from my BSCS degree enables me to write optimized, scalable code. Additionally, I bring creative skills in graphic design for branding and visual content, and proficiency with office tools for professional documentation and data management.
          </p>
        </div>
      </div>
    </>
  );
};

export default Skills;
