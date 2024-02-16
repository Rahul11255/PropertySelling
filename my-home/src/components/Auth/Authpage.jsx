import React from 'react'
import Navbar from '../navbar/Navbar'
import {  Outlet } from 'react-router-dom'

const Authpage = () => {
  return (
    <div>
    <div className="navbar_register_container">
    <Navbar/>
    </div>
    <div>
      {/* <NavLink to={"/auth"} style={{display:'none'}}>
        login
      </NavLink>
      <NavLink to={"/auth/register"}>
        Register
      </NavLink> */}

    </div>
    <Outlet/>
    </div>
  )
}

export default Authpage