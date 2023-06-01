import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillHome, AiFillSetting } from "react-icons/ai";

function Navbar() {
  return (
    <>
      <div className='navlink'><Link to="/"><AiFillHome /></Link></div>
      <div className='navlink'><Link to="/settings"><AiFillSetting /></Link></div>
    </>
  )
}

export default Navbar