import React from 'react'
import './Hero.css'
import Background from '../../../assets/images/hero.png'
import Darkarrow from '../../../assets/images/dark-arrow.png'
import Globe from '../../Globe/Globe'

const Hero = () => {
  return (
    <div className='hero container'>

  
        <div className='hero-text'>
        
         <h1>We ensure better education for a better world</h1>
         <p>Education transforms lives and is at the heart of UNESCO’s mission to build peace, eradicate poverty and drive sustainable development. It is a human right for all throughout life. </p>
         <button className='btn'>Explore more<img src={Darkarrow} alt='arrow' className='arrow'/></button>
         
        </div>
        <div><Globe/></div>
        
    </div>
  )
}

export default Hero