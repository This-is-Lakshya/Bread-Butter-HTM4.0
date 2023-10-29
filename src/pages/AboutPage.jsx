import React from 'react';
import about_ill from '../assets/images/aboutUs_illustration.svg';
import '../styles/aboutPage.css';

const AboutPage = () => {
  return (
    <>
        <div className='outerBox'>
            <div className='aboutPage'>
                <div className='left_sec'>
                    <h1 className='about_heading'>About Us</h1>
                    <img className='ill_img' src={about_ill} alt="" />
                </div>
                <div className='right_sec'>
                    <h3>Who we are?</h3>
                    <p>Our journey began with a simple yet profound belief: we can make the world a better place by working together. Our organization is driven by a passionate team that is committed to improving lives and building stronger, more resilient communities. We take pride in our collaborative approach, and it defines who we are.</p>

                    <h3>What we do?</h3>
                    <p>We are on a mission to create a brighter, healthier future for communities in need. We believe that collaboration is the key to success, which is why we partner with leading NGOs to make a meaningful impact. Our core initiatives center around providing better food and essential facilities to those who need it most.</p>

                    <h3>Help us</h3>
                    <p>Join us in our collaborative efforts to make the world a better place. Whether you're an NGO looking for a partner, an individual eager to volunteer, or a supporter willing to make a difference, your involvement can help us create a more equitable and just world. Together, we can achieve meaningful change."</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutPage;