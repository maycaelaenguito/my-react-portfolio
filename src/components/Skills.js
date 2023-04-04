import React from 'react';
import './Skills.css';

const Skills = () => {
  return <div name='skills' className="section" id='skills'>
            <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full h-screen'>
              <div className='px-5'>
                <p className='text-4xl font-bold inline border-b-4 border-[#b936ee]'>Skills</p>
                <p className='py-4'>Technologies I've worked with.</p>
              </div>
      
              <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 pt-10 text-center'>
                  <div className='tech mx-auto hover:scale-110 duration-500 lg:my-2 xl:my-2'>
                    <p>HTML</p>
                  </div>

                  <div className='tech mx-auto hover:scale-110 duration-500 lg:my-2 xl:my-2'>
                    <p>CSS</p>
                  </div>

                  <div className='tech mx-auto hover:scale-110  duration-500 lg:my-2 xl:my-2'>
                    <p>JAVASCRIPT</p>
                  </div>

                  <div className='tech mx-auto hover:scale-110 duration-500 lg:my-2 xl:my-2'>
                    <p>MYSQL</p>
                  </div>

                  <div className='tech mx-auto hover:scale-110 duration-500 lg:my-2 xl:my-2'>
                    <p>REACTJS</p>
                  </div>

                  <div className='tech mx-auto hover:scale-110 duration-500 lg:my-2 xl:my-2'>
                    <p>GITHUB</p>
                  </div>
              </div>
              </div>  
            </div>;
};

export default Skills;
