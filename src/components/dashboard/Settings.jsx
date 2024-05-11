import React, { useState } from 'react'
import "./settings.css"
import { MdMailOutline } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { MdLockOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
import { UpdateProfileModal } from '../modal/UpdateProfileModal';
import { ChnagePasswordModal } from '../modal/ChnagePasswordModal';


export const Settings = () => {
  const [click, setClick] = useState(false)
  const [open, setOpen] = useState(false)

  const handleClick = ()=>{
        setClick(!click)
  }
    
  const handleOpen = ()=>{
    setOpen(!open)
  }

  return (
    <div className={"settings"} >
      <section className={"settingsSec1"}>
        <p className='txt2'>Settings</p>
        <p className={"take"}>Take a look at your policies and the new policy to see what is covered</p>
      </section>
      <section className={"settingsSec2"} onChange={()=>{
        setClick(false);
        setOpen(false)
      }}>
        <div className='setdiv'>
        <div className={"set"}>
        <div className={"iconcont"}>
        <MdMailOutline />
        </div>
        <div className={"setcontent"}>
          <p className={"setTitle"}>Email Settings</p>
          <p className={"subtext"}> thegabriellsmcpherson@email.com <span>Verified</span></p>
        </div>
        </div>
        <div className={"set"}>
        <div className={"iconcont"}>
        <BsPerson />
        </div>
        <div className={"setcontent"}>
          <p className={"setTitle"}>Profile</p>
          <p className={"subtext"}> Change and edit profile details</p>
        </div>
          <div className={"edit"}>
            <MdOutlineEdit onClick={handleClick}/>
          </div>
        </div>
          <div className={"set"}>
          <div className={"iconcont"}>
            <MdLockOutline />
          </div>
          <div className={"setcontent"}>
            <p className={"setTitle"}>Change Password</p>
            <p className={"subtext"}> Change Password and continue enjoying!!</p>
          </div>
          <Link to={""}>
          <div className={"edit"}>
            <MdOutlineEdit onClick={handleOpen}/>
          </div>
          </Link>
        </div>
        </div>
        
        { click && <UpdateProfileModal closeComponent={handleClick} /> }
        {open && <ChnagePasswordModal closeComponent={handleOpen} /> }
      </section>
    </div>
  )
}