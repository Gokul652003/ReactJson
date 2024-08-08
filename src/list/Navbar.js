import React from 'react'
import './Navbar.css'

const Navbar = ({nav}) => {
  return (
    <div className='app-header'>
        <span className='header-title'>React</span>
        <span onClick={()=>nav("home")}>Home</span>
        <span onClick={()=>nav("usage")}>Usage</span>
        <span onClick={()=>nav("setting")}>Settings</span>
        <span onClick={()=>nav("logout")}>Logout</span>
    </div>
  )
}

export default Navbar