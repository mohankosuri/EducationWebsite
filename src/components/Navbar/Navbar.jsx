import React from 'react'

import Logo from '../../assets/images/logo.png'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='container'>
      <img src={Logo} alt='logo' className='logo'/>
      <ul> 
       <NavLink to={'/'}><li>Home</li></NavLink>
       <NavLink to={'/Program'}><li>Program</li></NavLink>
       <NavLink to={'/About'}><li>About Us</li></NavLink>
       <NavLink to={'/Campus'}><li>Campus</li></NavLink>
       <NavLink to={'/Testimonials'}><li>Testimonials</li></NavLink>
       <NavLink to={'/Contactus'}><li><button className='btn'>Contact Us</button></li></NavLink>
      
      
      </ul>

       
    </nav>
  )
}

export default Navbar