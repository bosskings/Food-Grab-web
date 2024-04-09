import React, { useState } from 'react'
import "./navbar3.css"
import { IoNotifications, IoPerson } from "react-icons/io5";
import { Link } from 'react-router-dom';



export const Navabar3 = () => {
 
  return (
    <div className='navbar3'>
    <div>
    </div>
    <div>
      <div className='linebar'></div>
      <div className='navicons'>
      <div className="NT">
      <div className='num'>
        4
      </div>
      <IoNotifications className={"dashicons"} />
      </div>
      <Link to={""}>
        <button className={"profile"}>
        <IoPerson className={"person"} />
        </button>
      </Link>
      </div>
      </div>
    </div>
  )
}

