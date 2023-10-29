import React from 'react';
import '../styles/wastageChart.css';

const WastageChart = () => {
  return (
    <div className='wastageChart'>
        <h1 className='heading_main'>FOOD WASTAGE ALL OVER INDIA</h1>
        <div className='chartBox'>
            <div className='chartParameters'>
                <h1>Restaurants</h1>
                <span className='yellow'>30%</span>
            </div>
            <div className='chartParameters'>
                <h1>Hotels</h1>
                <span className='red'>40%</span>
            </div>
            <div className='chartParameters'>
                <h1>Catering Services</h1>
                <span className='blue'>22%</span>
            </div>
            <div className='chartParameters'>
                <h1>Others</h1>
                <span className='gray'>8%</span>
            </div>
        </div>
    </div>
  )
}

export default WastageChart;