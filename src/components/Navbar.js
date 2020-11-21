import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Button from '@material-ui/core/Button';

function Navbar() {
  const [click_state, setClick] = useState(false);
  const handleClick = () => setClick(!click_state);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            
            <i className='logo.ong' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click_state ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click_state ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/projects'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/experience'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Experience
              </Link>
            </li>

            <li>
              <Link
                to='/resume'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Resume
              </Link>
            </li>
          </ul>
          <Button onClick={(openPDF) => { alert('clicked') }}>Resume</Button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
