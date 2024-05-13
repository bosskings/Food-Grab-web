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
     <div className={"profileImage2"}>
      <img src={""}  alt=''/>
      </div>
      <div className={"nameholder2"}>
      <p className={"txt2"}>Courage Mac Jude</p>
      <p className={"username2"}>@courage</p>
      </div>
     </div>
      </div>
        <div className={"profileCredentials2"}>
        <div className={"nameCred"}>
          <div className={"fstName"}>
            <p className='txt3'>First Name</p>
            <div className={"credDisplay"}>
              {}
            </div>
          </div>
          <div className={"lstname"}>
          <p className='txt3'>Last Name</p>
            <div className={"credDisplay"}>
              {}
            </div>
          </div>
        </div>
        <p className={"txt3"}>Username</p>
          <div className={"credDisplay"}>
              {}
            </div>
            <p className={"txt3"}>Email Address</p>
          <div className={"credDisplay emaildisplay" }>
              {}
            </div>
            <div className={"nameCred"}>
          <div className={"fstName"}>
            <p className='txt3'>Date of Birth </p>
            <div className={"credDisplay"}>
              {}
            </div>
          </div>
          <div className={"lstname"}>
          <p className='txt3'>Phone Number</p>
            <div className={"credDisplay"}>
              {}
            </div>
          </div>
        </div>
        <p className={"txt3"}>Gender</p>
          <div className={"credDisplay" }>
              {}
            </div>
        </div>
      </section>
      {open && <UpdateProfileModal closeComponent={handleOpen}/>}
    </div>
     
    </div>
  )
}
