import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const [göster,setGöster]=useState(true)
    const navigate=useNavigate()
    const handleClick=()=>{
      setGöster(!göster)
      if(göster){
        navigate("form")
      }else{
        navigate(-1);
      }
    }
    
   
  return (
    <div>
        <h1 className='mt-5 text-danger border border-5 rounded-2 p-3 mb-5 w-75 mx-auto'>Checkout Page</h1>
        <button onClick={handleClick} className='btn btn-warning'>{göster? "Show Product Bar" :"Hide Product Bar"}</button>



    </div>
  )
}

export default Header