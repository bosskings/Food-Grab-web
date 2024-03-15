import React, { useCallback, useEffect, useState } from 'react'
import { Navbar1 } from '../components/navbar/Navbar1'
import { Navbar2 } from '../components/navbar/Navbar2'

export const Navbar = () => {
  const [navbar, setNavbar] = useState("")

  const refresh = () =>{
    window.location.reload()
  }

  useEffect(()=>{
   
      const path = window.location.pathname;
      if (path === "/"){
        setNavbar(<Navbar1 />)
      } else if (path === "/Merchantlogin" ||path === "/Merchantsignup" ){
        setNavbar(<Navbar2 />)
      }
      
  }, [])
  

  return (
    <div>
      {navbar}
    </div>
  )
}

