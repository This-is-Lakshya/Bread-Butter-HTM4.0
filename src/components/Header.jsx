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
            <a href="">facebook/sharebite</a>
        </div>
        <div className='social_links'>
            <img src={youtube} alt="youtube" />
            <a href="https://www.youtube.com/@ShareBiteOfficail">youtube/sharebite</a>
        </div>
        <div className='social_links'>
            <img src={linkedin} alt="linkedin" />
            <a href="">linkedin/sharebite</a>
        </div>
        <div className='social_links'>
            <img src={twitter} alt="twitter" />
            <a href="">twitter/sharebite</a>
        </div>
    </header>
  )
}

export default Header;