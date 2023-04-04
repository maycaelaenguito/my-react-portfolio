import React from 'react';
import ProjOne from '../assets/project1.PNG';
import ProjTwo from '../assets/project2.PNG';
import ProjThree from '../assets/project3.PNG';
import ProjFour from '../assets/project4.PNG';

const Work = () => {
  return <div name='work' className="section w-full h-full" id='work'>
            <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full'>
              <div className='pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-[#b936ee]'>Work</p>
                <p className='py-6'>Take a look at my latest works.</p>
              </div>

              <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-6 mx-4'>
                <div style={{backgroundImage: `url(${ProjOne})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                  <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold tracking-wider'>
Mini-Project 1
                    </span>
                    <div className='pt-8 text-center'>
                      <a href="https://maycaelaenguito.github.io/">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg text-black'>Demo</button>
                      </a>
                      <a href="https://github.com/maycaelaenguito/maycaelaenguito.github.io">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg text-black'>Code</button>
                      </a>
                    </div>
                  </div>
                </div>

                <div style={{backgroundImage: `url(${ProjTwo})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                  <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold tracking-wider'>
Mini-Project 2
                    </span>
                    <div className='pt-8 text-center'>
                      <a href="https://maycaelaenguito.github.io/ape-technology/">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg text-black'>Demo</button>
                      </a>
                      <a href="https://github.com/maycaelaenguito/ape-technology">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg text-black'>Code</button>
                      </a>
                    </div>
                  </div>
                </div>

                <div style={{backgroundImage: `url(${ProjThree})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                  <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold tracking-wider'>
Clinic System
                    </span>
                    <div className='pt-8 text-center'>
                      <a href="https://maycaelaenguito.github.io/baybay-womens-clinic/">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg text-black'>Demo</button>
                      </a>
                      <a href="https://github.com/maycaelaenguito/baybay-womens-clinic">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg text-black'>Code</button>
                      </a>
                    </div>
                  </div>
                </div>
                <div style={{backgroundImage: `url(${ProjFour})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div sm:mb-40'>
                  <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold tracking-wider'>
E-Calculator
                    </span>
                    <div className='pt-8 text-center'>
                      <a href="https://maycaelaenguito.github.io/e-calculator-using-javascript/">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg text-black'>Demo</button>
                      </a>
                      <a href="https://github.com/maycaelaenguito/e-calculator-using-javascript">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg text-black'>Code</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>;
};

export default Work;
