import React from 'react';
import {Link} from 'react-router-dom';
import breadAndButter from '../assets/images/bread&butter_logo.png';
import "../styles/navBar.css";

const NavBar = () => {
  return (
    <nav className='navBar'>
      <div className='mainn_logo'>
        <div  className='logo_bg'>
          <img src={breadAndButter} alt='Logo' className='logo' />
        </div>
        <h3>Bread&Butter</h3>
      </div>
      <div className='nav_links'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  )
}

export default NavBar;