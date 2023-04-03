import React, { useState, useEffect } from 'react';
import Image from '..//assets/id.png';
import { FaGithub, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { fadeIn } from '../variants';
import './Banner.css';

const Banner = () => {
  const [position, setPosition] = useState('bottom');

  useEffect(() => {
    setPosition('top');
  }, []);

  return (
    <section className="min-h-[85vh] lg:min-h-[78vh] flex-items-center mt-14" id='home'>
      <div className="container mx-auto">
        <div>
          <div className='mt-30'>
            <div className={`intro ${position}`}>
              <h3 className='my-5'>Hi! I'm Maycaela Enguito.</h3>
            </div>
            <div>
              <h3>
                <span>I am a</span>
                <span>
                  <TypeAnimation 
                    sequence={[
                      'Web Developer...',
                      2000,
                      'Problem Solver...',
                      2000,
                      'Visionary...',
                      2000
                    ]}
                    speed={20}
                    className='animation'
                    wrapper='span'
                    repeat={Infinity}
                  />
                </span>
              </h3>
            </div>
            <p className='description'>
              Hello, I'm an aspiring web developer and I love creating beautiful and responsive websites. I'm passionate about delivering the highest quality service and support to my clients, from start to finish. Let's create something amazing together!
            </p>
            <div className='con'>
              <button className='btn bnt-lg p-3 p- mr-4 mt-3'>Contact Me.</button>

            </div>
          </div>
        </div>
        <div className='mx-auto me max-w-[320px]'>
          <img src={Image} alt=""/>
        </div>
      </div>
    </section>
  );
};

export default Banner;
