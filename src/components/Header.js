import React from 'react';
import Logo from '../assets/mylogo.png';
import {Link} from 'react-scroll';

const Header = () => {
  return <header className="bg-black pt-5">
    <div className="container mx-auto">
      <div className="flex justify-end items-center">
      <Link to="home" activeClass="active" smooth={true} spy={true} className="logo container mx-auto mt-5">
        <img src={Logo} alt="logo" className='img-fluid'/>
        </Link>

          <Link to="contact" activeClass="active" smooth={true} spy={true}><button className='btn px-3 xs:py-5 xs:px-4 sm:px-4 sm:py-3 lg:px-4 lg:py-3 md:py-3 md:px-4 xl:py-3 xl-px-3 mt-5'>Let's Connect!</button></Link> 
         
      </div>
    </div>
  </header>;
};

export default Header;
