import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import grains from '../assets/images/grains.jpg'
import wasteFood from '../assets/images/wastingfood.png';
import neddy from '../assets/images/needy.png';
import '../styles/banner.css';

const Banner = () => {
  return (
    <Carousel fade indicators={false} >
        <Carousel.Item>
            <img className="d-block w-100" src={grains} alt="First Slide" id='bannerImage' />
            <Carousel.Caption>
              <h3 className='caption'>SAVE SOME GRAINS</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100" src={neddy} alt="First Slide" id='bannerImage' />
            <Carousel.Caption>
              <h3 className='caption'>A NEEDY IS WAITING</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100" src={wasteFood} alt="First Slide" id='bannerImage' />
            <Carousel.Caption>
              <h3 className='caption'>DONT WASTE IT</h3>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  )
}

export default Banner;