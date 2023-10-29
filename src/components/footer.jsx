import React from 'react'
import '../styles/footer.css';
import fb from '../assets/images/facebook_w.png'
import tw from '../assets/images/twitter_w.png'
import yt from '../assets/images/youtube_w.png'
import lk from '../assets/images/linkedin_w.png'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer_links'>
        <div className='footer_section'>
          <h3>QUICK LINKS</h3>
          <div>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
          </div>
        </div>
        <div className='footer_section'>
          <h3>ABOUT US</h3>
          <div>
            <a href="">About</a>
          </div>
        </div>
        <div className='footer_section'>
          <h3>SOCAIL LINKS</h3>
          <div>
            <a href="">Twitter</a>
            <a href="">Facebook</a>
            <a href="">YouTube</a>
            <a href="">LinkedIn</a>
          </div>
        </div>
        <div className='footer_section'>
          <h3>JOIN US</h3>
          <div>
            <a href="">Login</a>
            <a href="">Register</a>
          </div>
        </div>
      </div>

      <div className='social_icons'>
        <a href=""><img src={fb} alt="" /></a>
        <a href=""><img src={yt} alt="" /></a>
        <a href=""><img src={lk} alt="" /></a>
        <a href=""><img src={tw} alt="" /></a>
      </div>
    </footer>
  )
}

export default Footer;