import React from 'react';
import "../styles/header.css";
import facebook from "../assets/images/facebook.png";
import youtube from "../assets/images/youtube.png";
import linkedin from "../assets/images/linkedin.png";
import twitter from "../assets/images/twitter.png";

const Header = () => {
  return (
    <header className='header'>
        <div className='social_links'>
            <img src={facebook} alt="facebook" />
            <a href="">facebook/bread&butter.com</a>
        </div>
        <div className='social_links'>
            <img src={youtube} alt="youtube" />
            <a href="">youtube/bread&butter.com</a>
        </div>
        <div className='social_links'>
            <img src={linkedin} alt="linkedin" />
            <a href="">linkedin/bread&butter.com</a>
        </div>
        <div className='social_links'>
            <img src={twitter} alt="twitter" />
            <a href="">twitter/bread&butter.com</a>
        </div>
    </header>
  )
}

export default Header;