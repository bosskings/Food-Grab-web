import React from 'react'
import "./profile.css"



export const Profile = () => {
  return (
    <div className={"profile1"}>
    <div className={"profileBox"}>
       <section  className={"profilesec1"}>
        <p className={"txt2"}>Profile</p>
        <p className={"ppsubtxt"}>Change and edit profile details</p>
      </section>
      <section className={"profilesec2"}>
      <div className='personal'>
      <p className={'txt2'}> Personal Information</p>
      <p className={'subtxt'}> update your </p>
      <div className={"profileImage"}>

        </div>
      </div>
        
        <div className={"profileCredentials"}>

        </div>
      </section>
    </div>
     
    </div>
  )
}
