import React, { useState } from 'react'
import "./profile.css"
import { UpdateProfileModal } from '../modal/UpdateProfileModal'


export const Profile = () => {
  const [open, setopen] = useState(false)

  const handleOpen = ()=>{
    setopen(!open)
  }


  return (
    <div className={"profile1"}>
    <div className={"profileBox"}>
       <section  className={"profilesec1"}>
        <p className={"txt2"}>Profile</p>
        <p className={"ppsubtxt"}>Change and edit profile details</p>
      </section>
      <section className={"profilesec2"}>
      <div className='personal'>
      <div className={"personalfirstsec"}>
      <div>
      <p className={'txt3'}> Personal Information</p>
      <p className={'subtxt2'}> update your personal detials here </p>
      </div>
      <div>
      <button className={"editProfileBtn"} onClick={handleOpen}>
        Edit Profile
      </button>
      </div>
      </div>
     <div className={"personalSecondSec"}>
     <div className={"profileImage"}>
      <img src={""}  alt=''/>
      </div>
      <div className={"nameholder2"}>
      <p className={"txt2"}>Courage Mac Jude</p>
      <p className={"username2"}>@courage</p>
      </div>
     </div>
      </div>
        
        <div className={"profileCredentials"}>

        </div>
      </section>
      {open && <UpdateProfileModal closeComponent={handleOpen}/>}
    </div>
     
    </div>
  )
}
