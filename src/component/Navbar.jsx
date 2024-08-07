import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [user, setUser] = useState(localStorage.getItem('currentUser3') ? JSON.parse(localStorage.getItem('currentUser3')) : null);

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

  const handleLogout = () => {
    localStorage.removeItem('currentUser3');
    setUser(null);
    window.location.href = '/login';
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed p-2 top-0 z-30 w-full ${scroll || menu ? 'bg-black' : 'bg-transparent'} transition-colors duration-300`}>
      <nav className='container mx-auto flex justify-between items-center'>
        <Link to="/" className='text-2xl font-bold text-white'>Cavidicano</Link>
        <ul className='hidden md:flex gap-4 text-white'>
          <li className='text-lg'><Link to="/">Home</Link></li>
          <li className='text-lg'><Link>About</Link></li>
          <li className='text-lg'><Link to="/basket">Basket({user ? user.basket.length : 0})</Link></li>
          <li className='text-lg'><Link to="/favorites">Favorites({user ? user.fav.length : 0})</Link></li>
          {user ? (
            <>
              <li className='text-lg'><Link to="/profile">{user.name}</Link></li>
              <li className='text-lg'>
                <button className='text-white hover:underline' onClick={handleLogout}>Logout</button>
              </li>
            </>
          ) : (
            <li className='text-lg'><Link to="/login">Login</Link></li>
          )}
          <li className='text-lg'><Link to="/book-table" className="hover:underline" data-aos="fade-left">Order Now</Link></li>
        </ul>
        <BiMenu onClick={openMenu} className='text-4xl text-white cursor-pointer md:hidden' />
      </nav>
      <div className={`md:hidden overflow-hidden transition-max-height duration-1000 ${menu ? 'bg-black' : 'bg-transparent'} ${menu ? 'max-h-screen' : 'max-h-0'}`}>
        <ul className='container mx-auto flex flex-col gap-4 mt-4 text-white'>
          <li className='text-lg'><Link to="/" className="hover:underline" data-aos="fade-left">Home</Link></li>
          <li className='text-lg'><Link className="hover:underline" data-aos="fade-left">About</Link></li>
          <li className='text-lg'><Link to="/basket">Basket({user ? user.basket.length : 0})</Link></li>
          <li className='text-lg'><Link to="/favorites">Favorites({user ? user.fav.length : 0})</Link></li>
          {user ? (
            <>
              <li className='text-lg'><Link to="/profile">{user.name}</Link></li>
              <li className='text-lg'>
                <button className='text-white hover:underline' onClick={handleLogout}>Logout</button>
              </li>
            </>
          ) : (
            <li className='text-lg'><Link to="/login">Login</Link></li>
          )}
          <li className='text-lg'><Link className="hover:underline" data-aos="fade-left">Order Now</Link></li>
        </ul>
      </div>
      <hr />
    </div>
  );
}

export default Navbar;
