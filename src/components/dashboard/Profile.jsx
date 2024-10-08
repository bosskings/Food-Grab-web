import React, { useEffect, useState } from 'react'
import "./profile.css"
import { UpdateProfileModal } from '../modal/UpdateProfileModal'
import { MdVerifiedUser } from "react-icons/md";


export const Profile = () => {
  const [open, setopen] = useState(false)
  const [profile, setProfile] = useState([])
  const [token, setAuthTokens]= useState(()=> localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')):null)

  useEffect(()=>{
    const fetchProfileData = async()=>{
      try{
        const response = await fetch(`https://api.foodgrab.africa/merchants/api/v1/getProfile`, {
          method: 'GET',
          headers:{
            'Content-Type': 'application/json',
          "Authorization": `Bearer ${token.token}`
          }
        });
        if (!response.ok){
          throw new Error('Failed to fetch profile data')
        }
        const profileDetials = await response.json()
        setProfile(profileDetials.data  )
        console.log('this is the response:', profileDetials)
      }
      catch (error){
        console.error('Error fetching profile data:', error.message)
      }
    }
    fetchProfileData();
    
  },[token])

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
      <img src={profile.pictureAddress}  alt=''/>
      <div className="checkboxContainer2">
        <MdVerifiedUser className='customcheckbox2' color={profile && profile.verificationStatus ? 'grey' :  '#0077ff'} />
      </div>      
      </div>
      <div className={"nameholder2"}>
      <p className={"txt2"}>{profile.firstname}</p>
      <p className={"username2"}> {profile.firstname}</p>
      </div>
     </div>
      </div>
        <div className={"profileCredentials2"}>
        <div className={"nameCred"}>
          <div className={"fstName"}>
            <p className='txt3'>First Name</p>
            <div className={"credDisplay"}>
              {profile.firstname}
            </div>
          </div>
          <div className={"lstname"}>
          <p className='txt3'>Last Name</p>
            <div className={"credDisplay"}>
              {profile.lastname}
            </div>
          </div>
        </div>
        <p className={"txt3"}>Username</p>
          <div className={"credDisplay"}>
              {profile.firstname}
            </div>
            <p className={"txt3"}>Email Address</p>
          <div className={"credDisplay emaildisplay" }>
              {profile.email}
            </div>
            <div className={"nameCred"}>
          {/* <div className={"fstName"}>
            <p className='txt3'>Date of Birth </p>
            <div className={"credDisplay"}>
              {profile.dob}
            </div>
          </div> */}
          <div className={"lstname"}>
          <p className='txt3'>Phone Number</p>
            <div className={"credDisplay"}>
              {profile.phone}
            </div>
          </div>
        </div>
        {/* <p className={"txt3"}>Gender</p>
          <div className={"credDisplay" }>
              {profile.gender}
            </div> */}
        </div>
      </section>
      {open && <UpdateProfileModal closeComponent={handleOpen}/>}
    </div>
     
    </div>
  )
}
