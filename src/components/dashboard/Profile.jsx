import React, { useEffect, useState } from 'react'
import "./profile.css"
import { UpdateProfileModal } from '../modal/UpdateProfileModal'


export const Profile = () => {
  const [open, setopen] = useState(false)
  const [profile, setProfile] = useState('')

  useEffect(()=>{
    const fetchProfileData = async()=>{
      try{
        const response = await fetch('')
        if (response.ok){
          throw new Error('Failed to fetch profile data')
        }
        const data = await response.json()
        setProfile(data)
      }
      catch (error){
        console.error('Error fetching profile data:', error.message)
      }
    }
    fetchProfileData();
  },[])

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
      <img src={profile.profileImg}  alt=''/>
      </div>
      <div className={"nameholder2"}>
      <p className={"txt2"}>{profile.name}</p>
      <p className={"username2"}> {profile.username} </p>
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
              {profile.username}
            </div>
            <p className={"txt3"}>Email Address</p>
          <div className={"credDisplay emaildisplay" }>
              {profile.email}
            </div>
            <div className={"nameCred"}>
          <div className={"fstName"}>
            <p className='txt3'>Date of Birth </p>
            <div className={"credDisplay"}>
              {profile.dob}
            </div>
          </div>
          <div className={"lstname"}>
          <p className='txt3'>Phone Number</p>
            <div className={"credDisplay"}>
              {profile.phone}
            </div>
          </div>
        </div>
        <p className={"txt3"}>Gender</p>
          <div className={"credDisplay" }>
              {profile.gender}
            </div>
        </div>
      </section>
      {open && <UpdateProfileModal closeComponent={handleOpen}/>}
    </div>
     
    </div>
  )
}
