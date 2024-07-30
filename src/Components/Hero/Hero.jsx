import React from 'react'
import './Hero.css' 
import dark_aarrow from '../../assets/icons8-arrow-30.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We Ensure butter eduction for the butter world</h1>
        <p>our cutting-edge curriculum is designed to empower students with the knowldege,skills and experiences neened to excel in the dynamic feild of eduction</p>
        <button className='btn'>Explore more <img src={dark_aarrow} alt="arrow" /></button>
      </div> 
    </div>
  )
}

export default Hero
