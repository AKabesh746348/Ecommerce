import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Home.scss"
import Moon from "./Images/Solo.jpg"
import Dante from "./Images/Dante.jpg"
import { MdAddLocationAlt } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import Header from './Common/Header';

function Home() {

   const[num , setNum] = useState(0)
   const handleIncreament =() =>{
    setNum(num + 1)
   }
   
   const handleDecreament =() =>{
    setNum(num - 1)
   }


   const[sample , setSample] = useState("Hello")  
   
  const handlenext = () =>{
  
   setTimeout (()=>{
        window.location.href = "/Loginpage"
     },3000)

    }


  return (
    <div>
      
  <Header/>

      
      <h1 className='hlo'> Abesh Kumar </h1>


      <a href='SignupPage'> 
      <button> Sign up </button>
      </a>

      <img src={Moon} className='solo' alt='SOlo' ></img>


      <img src={Dante} className='dante' alt='dante'></img>


      <h1>{num}</h1>
      
      <button onClick={handleIncreament}>+</button>

      <button onClick={handleDecreament}>-</button>

      <button onClick={handlenext}>Next</button>
      <h1>{sample}</h1>



      <MdAddLocationAlt className='location'/>

      <FaInstagram  className='insta'/>

    </div>
  )
}

export default Home