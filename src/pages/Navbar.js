import React, { useEffect, useState } from 'react'
import { Navbar1 } from '../components/navbar/Navbar1'
import { Navbar2 } from '../components/navbar/Navbar2'
import { useLocation } from 'react-router-dom'

export const Navbar = () => {
  const [navbar, setNavbar] = useState(null)
  const location = useLocation()

  useEffect(()=>{
    const path = window.location.pathname;
      if (path === "/"){
        setNavbar(<Navbar1 />)
      } else if (path === "/Merchantlogin" || path === "/Merchantsignup" ){
        setNavbar(<Navbar2 />)
      } else {
        setNavbar(null); 
      }
      
  }, [location.pathname])
  

  return (
    <div>
      {navbar}
    </div>
  )
}

