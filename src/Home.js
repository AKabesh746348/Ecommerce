import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Home.scss"
import Moon from "./Images/Solo.jpg"
import Dante from "./Images/Dante.jpg"
import { MdAddLocationAlt } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import Header from './Common/Header';
import Cart from './Cart';

function Home() {


  let numbers = [1,2,3,4,5]
  console.log(numbers);
  
  let newnumbers = [...numbers , 6 , 7 , 8]
  console.log(newnumbers);

  let Obj = {name : "greens" , stack : "frontend"}

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

    const [data , setdata ] = useState(false)

     const [bckcolor , setbckcolor] = useState(false)

    const handleData = () =>{
      setdata(!data)
    }

      const handlebckcolor = () =>{
        setbckcolor(!bckcolor)
      }


  return (
    <div className={ bckcolor ? "lightmode" : "darkmode"}>
      
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

      <h1>{Obj.stack}</h1>

      <Cart name="World"/>

      <h1>{ data ? "user is valid " : "user is not valid"}</h1>

      <button onClick={handleData}>Change</button>

      <button onClick={handlebckcolor}>Change theme</button>
    </div>
  )
}

export default Home