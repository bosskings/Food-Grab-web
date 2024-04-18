import React from 'react'
import "./settings.css"
import { MdMailOutline } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { MdLockOutline } from "react-icons/md";
import { Link } from 'react-router-dom';


export const Settings = () => {

  return (
    <div className={"settings"}>
      <section className={"settingsSec1"}>
        <p className='txt2'>Settings</p>
        <p className={"take"}>Take a look at your policies and the new policy to see what is covered</p>
      </section>
      <section className={"settingsSec2"}>
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
        <Link to={"/profile"}>
          <div className={"edit"}>
            <MdOutlineEdit />
          </div>
          </Link>
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
            <MdOutlineEdit />
          </div>
          </Link>
        </div>
        </div>
      </section>
    </div>
  )
}