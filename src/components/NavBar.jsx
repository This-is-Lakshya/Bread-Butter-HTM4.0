import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import breadAndButter from '../assets/images/bread&butter_logo.png';
import {auth} from '../firebase';

import "../styles/navBar.css";

const NavBar = (props) => {

  const [loginRoute, setLoginRoute] = useState("/login");
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        setLoginRoute("/accountInfo");
      }
    });
  }, []);

  return (
    <nav className='navBar'>
      <div className='mainn_logo'>
        <div  className='logo_bg'>
          <img src={breadAndButter} alt='Logo' className='logo' />
        </div>
        <h3>ShareBite</h3>
      </div>
      <div className='nav_links'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link id="login__name" to={loginRoute}>{ props.name || "Login"}</Link>
      </div>
    </nav>
  )
}

export default NavBar;