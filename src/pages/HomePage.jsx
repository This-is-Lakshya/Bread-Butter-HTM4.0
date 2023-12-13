import React from 'react';
import '../styles/homePage.css';
import Banner from '../components/Banner';
import WastageChart from '../components/WastageChart';
import Request from '../components/Request';

const HomePage = () => {
  return (
    <div className='homePage'>
      <Banner />
      <Request />
      <WastageChart />
    </div>
  )
}

export default HomePage;