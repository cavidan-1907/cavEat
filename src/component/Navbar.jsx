import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import { Button } from 'react-bootstrap';

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [scroll, setScroll] = useState(false);

  const openMenu = () => {
    setMenu(!menu);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed p-[10px] top-0 z-30 w-[100%] ${scroll || menu ? 'bg-black' : 'bg-transparent'} transition-colors duration-300`}>
      <nav className='container flex justify-between items-center'>
        <Link to="/" className='text-[20px] font-bold text-white'>Cavidicano</Link>
        <ul className='hidden md:flex gap-4 text-white'>
          <li className='text-[19px]'><Link to="/">Home</Link></li>
          <li className='text-[19px]'><Link to="/about">About</Link></li>
          <li className='text-[19px]'><Link to="/menu">Menu</Link></li>
          <li className='text-[19px]'><Link to="/stories">Stories</Link></li>
          <li className='text-[19px]'><Link to="/contact">Contact</Link></li>
          <li className='text-[19px]'><Link>Book a table</Link></li>
        </ul>
        <BiMenu onClick={openMenu} className='text-[30px] text-white cursor-pointer md:hidden' />
      </nav>
      <div className={`md:hidden overflow-hidden transition-max-height duration-1000 ${menu ? 'bg-black' : 'bg-transparent'} ${menu ? 'max-h-screen' : 'max-h-0'}`}>
        <ul className='container flex flex-col gap-4 mt-4 text-white'>
          <li className='text-[19px]'><Link to="/">Home</Link></li>
          <li className='text-[19px]'><Link to="/about">About</Link></li>
          <li className='text-[19px]'><Link to="/menu">Menu</Link></li>
          <li className='text-[19px]'><Link to="/stories">Stories</Link></li>
          <li className='text-[19px]'><Link to="/contact">Contact</Link></li>
          <li className='text-[19px]'><Link>Book a table</Link></li>
        </ul>
      </div>
      <hr />
    </div>
  );
}

export default Navbar;
