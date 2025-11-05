import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Signup.scss"
import Dante from "./Images/Dante.jpg"

function Signup() {
  return (
    <div>

      <img src={Dante} className='Dante' alt='dante'></img>
         
         <h1 className='hello'>Signup</h1>
       
       </div>
  )
}

export default Signup