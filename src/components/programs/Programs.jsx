import React from 'react'
import Program1 from '../../assets/images/program-1.png'
import Program2 from '../../assets/images/program-2.png'
import Program3 from '../../assets/images/program-3.png'
import './programs.css'

const Programs = () => {
  return (
    <div className='container'>
     <div className='programs'>
     <div className='program'>
     <img src={ Program1} alt='program1'/>
    </div>
    <div className='program'>
     <img src={ Program2} alt='program1'/>
    </div>
    <div className='program'>
     <img src={ Program3} alt='program1'/>
    </div>
    <div> 

    
    </div>
     </div>
     </div>
  )
}

export default Programs