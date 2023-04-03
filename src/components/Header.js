import React from 'react';
import Logo from '../assets/mylogo.png';

const Header = () => {
  return <header className="py-8">
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <a href="##" className="logo container mx-auto">
          <img src={Logo} alt="logo" className='img-fluid'/>
          </a>
      </div>
    </div>
  </header>;
};

export default Header;
