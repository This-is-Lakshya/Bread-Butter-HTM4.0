import React from 'react'
import '../styles/footer.css';
import fb from '../assets/images/facebook_w.png'
import tw from '../assets/images/twitter_w.png'
import yt from '../assets/images/youtube_w.png'
import lk from '../assets/images/linkedin_w.png'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer_links'>
        <div className='footer_section'>
          <h3>QUICK LINKS</h3>
          <div>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      
        <div className='footer_section'>
          <h3>JOIN US</h3>
          <div>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>

      <div className='social_icons'>
        <a href="#"><img src={fb} alt="" /></a>
        <a href="https://www.youtube.com/@ShareBiteOfficail"><img src={yt} alt="" /></a>
        <a href="#"><img src={lk} alt="" /></a>
        <a href="#"><img src={tw} alt="" /></a>
      </div>
    </footer>
  )
}

export default Footer;