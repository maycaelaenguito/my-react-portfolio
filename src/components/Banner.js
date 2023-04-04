
// import Image from '..//assets/id.png';
import { BsArrowRight } from 'react-icons/bs';
import './Banner.css';
import {Link} from 'react-scroll';

const Banner = () => {

  return (
    <section name='home' className="section w-full h-screen bg-black" id='home'>
     
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-yellow-500'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#b936ee] name'>Maycaela Enguito</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#ba36eea1] name2 py-3'>An aspiring Software Engineer</h2>
            <p className='text-[#ba36eec7] mb-4 intro'>I am passionate about pushing my limits and embracing new challenges. Currently, my focus is on mastering all aspects of Full Stack Development.</p>

            <div>
              <Link to="work"  activeClass="active" smooth={true} spy={true}> 
              <button className='border-2 group px-6 py-3 my-2 flex items-center text-white work-btn'>View Work 
              <span className='group-hover:rotate-90 duration-300'><BsArrowRight/></span>
              </button>
            </Link>
            </div>
      </div>

    </section>
  );
};

export default Banner;
