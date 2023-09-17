import React from 'react'
import {Link} from "react-router-dom";
import Glow from './Glow';
const Footer = () => {
  return (
    <div className='footer'>
    
  
    <p className='text-center mt-3'>
    <Glow /> 
        <Link to="/about">About</Link>|
        <Link to="/contact">Contact</Link>|
        <Link to="/policy">Privacy Policy</Link>
        
    </p>
    </div>
  )
}

export default Footer