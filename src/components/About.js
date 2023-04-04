import React from 'react';
import './About.css';

const About = () => {
  return <div name='about' className="section w-full h-screen bg-black" id='about'>

      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#b936ee]'>About</p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p className='welcome'>Hi, I'm Maycaela. Welcome to my portfolio.</p>
            </div>
            <div className='description'>
              <p>I'm a fullstack developer who loves everything about the web. My passion for software development is matched only by my commitment to delivering excellent customer service. You can count on me to provide top-notch technical skills and a seamless experience from start to finish.</p>
            </div>
          </div>
      </div>
  </div>;
};

export default About;
