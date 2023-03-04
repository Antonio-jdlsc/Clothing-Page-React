import React from 'react';
import styles from '../Styles/header.css';

function Header() {
  return (
    <header className='header'>
      <a href="/" className='logo'>NARVARO.</a>
      <nav className='nav'>
        <ul className='menu'>
          <li className='menuItem'>
            <a href="#" className='menuLink'>Home</a>
          </li>
          <li className='menuItem'>
            <a href="#" className='menuLink'>About Us</a>
          </li>
          <li className='menuItem'>
            <a href="#" className='menuLink'>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
