import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';


function Signup1() {

  const [fname , setFname ] = useState('')
  const [lname , setLname ] = useState('')
  const [username , setUsername ] = useState('')  
  const [pass , setPass ] = useState('')

  const HandleSignup = (e) =>{
    e.preventDefault()
    if(fname === '' || lname === '' || username === ''|| pass === ''){
      toast.error("pls fill all the details")
    }else{
      localStorage.setItem("Username", username)
      localStorage.setItem("Password" , pass)
      toast.success("Signup Success")

      setTimeout(() => {
        window.location.href ="./Login1"
      }, 3000)
    }
  }

 


  return (
    <div>
      <ToastContainer/>
        <form onSubmit={HandleSignup}>
     <input 
     type='text' 
     placeholder='Enter your First name'
     value={fname}
     onChange={(e) => setFname (e.target.value)}>
     </input>
     <input 
     type='text' 
     placeholder='Enter your Last name'
     value={lname}
     onChange={(e) => setLname (e.target.value)}>
     </input>
     <input 
     type='text' 
     placeholder='Enter your User name'
     value={username}
     onChange={(e) => setUsername (e.target.value)}>
     </input>
     <input 
     type='password' 
     placeholder='Enter your Password'
     value={pass}
     onChange={(e) => setPass (e.target.value)}>
     </input>
     <button type='submit'>Sign up</button>
     </form>
    </div>
  )
}

export default Signup1