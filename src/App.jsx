 import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Navbar/Hero/Hero'
import Programs from './components/programs/Programs'
import Globe from './components/Globe/Globe'
import { Routes ,Route, Router } from 'react-router-dom'
import Program from './pages/Program'
import About from './pages/About'
import Campus from './pages/Campus'
import Testimonials from './pages/Testimonials'
import Contactus from './pages/Contactus'
import Home from './pages/Home'
 
 const App = () => {
   return (
     <div>
      <Navbar/>
       
       <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Program' element={<Program/>}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path='/Campus' element={<Campus/>}></Route>
          <Route path='/Testimonials' element={<Testimonials/>}></Route>
          <Route path='/Contactus' element={<Contactus/>}></Route>
       </Routes>
      
     </div>
   )
 }
 
 export default App