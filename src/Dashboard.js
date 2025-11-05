import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'

function Dashboard() {

  const[oldUsername , setOldUsername ]= useState(localStorage.getItem("Username"))

  useEffect(() =>{
    toast.success("Welcome " + oldUsername)
  },[])

  return (
    <div>

      <ToastContainer/>
      
      Dashboard

    </div>
  )
}

export default Dashboard