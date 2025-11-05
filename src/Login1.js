import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';


function Login1() {

   const [username , setUsername ] = useState('')  
   const [pass , setPass ] = useState('')


   const[oldUsername , setOldUsername ] = useState(localStorage.getItem("Username"))
   const[oldPassword , setOldPassword ] = useState(localStorage.getItem("Password"))

   const HandleLogin = (e) =>{
       e.preventDefault()
       if(username === oldUsername && pass === oldPassword){
         toast.success("Login Successful")
         
        setTimeout(() => {
           window.location.href ="./Dashboard"
         }, 3000)

       }else{
         toast.error("Login Error")

        }
      }

  return (
    <div>
       <ToastContainer/>
    <form onSubmit={HandleLogin}>
     <input 
     type='text' 
     placeholder='Enter your Username'
     value={username}
     onChange={(e) => setUsername (e.target.value)}>
     </input>
     <input 
     type='password' 
     placeholder='Enter your Password' 
     value={pass}
     onChange={(e) => setPass (e.target.value)}>
     </input>
     <button type='submit'>Login</button>
        
        </form>
        </div>
  )
}

export default Login1