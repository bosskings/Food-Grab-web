import React, { useState } from 'react'
import "./updateProfile.css"
import { AiOutlinePicture } from "react-icons/ai";
import { XCircle } from 'react-bootstrap-icons';

export const UpdateProfileModal = ({closeComponent}) => {
  const [image, setImage] = useState(null)
  const [imageUrl, setImageUrl]= useState(localStorage.getItem('profileImage') || '');
  const [close, setclose] =useState(false)
  const [input, setInput]= useState({
    firstname: '',
    lastname: '',
    username: '',
    email: 'cmacjude17@gmail.com',
    dateOfBirth: '',
    phoneNumber: '',
    gender: 'Male'
  })

  const handleInputChange = (e)=>{
    const{name,value} = e.target
    setInput((prevState)=>({...prevState,[name]:value}))
  }

  const handleClose = ()=>{
    setclose(!close)
  }

  const ClosePfModal = ()=>{
    return(
      <div>
      <XCircle className={"closePf"} onClick={closeComponent}/>
      </div>
    )
  }

  const handleImageChange = (e)=>{
      const file = e.target.files[0]
      setImage(file)
      const reader = new FileReader();
    reader.onloadend = () => {
      const imageDataUrl = reader.result;
      setImageUrl(imageDataUrl);
      localStorage.setItem('profileImage', imageDataUrl); 
    };
    reader.readAsDataURL(file);
    }

    const handleSubmit = async 
    

  return (
    <div className={close ? "not-active":"updatepff"}>
    <div className={"overlay"} onClick={closeComponent}></div>
    <div>
      <div className={close ? "not-active":"updateProfile"}>
      <div className={"profileModal"}>
        <section  className={"profileModalsec1"}>
        <div>
          <p className={"txt2"}>Profile</p>
          <p className={"ppsubtxt"}>Change and edit profile details</p>
        </div>
         <ClosePfModal onClick={handleClose}/>
      </section>
      <form
      method='PATCH'
      onSubmit={""}
      className=''>
      <section className={"ProfileModalSec3"}>
      <section className={"profileModalsec2"}>
        <div className={"profileImage"}>
        {<img src={imageUrl} alt='' className={''}/>}
        <div className="checkboxContainer">
        </div>
        </div>
        <div className={"profileCredentials"}>
          <p className={"txt3"}>Profile Picture</p>
          <p className={"subtxt2"}>This Picture will be displayed on your profile</p>
          <labbel className='change'>
          <input 
          type='file' 
          onChange={handleImageChange}
          />
          <AiOutlinePicture className={"ChIcon"}/>
          Change Photo
          </labbel>

        </div>

      <div className='frmsubmit'>
        <button type='submit' className={"updPfButton"}>
        Save Change 
        </button>
      </div>
      </section>
     
      <div className={"formproper"}>
      <p className={'txt3'}>Personal Information</p>
      <p className='ppsubtxt cc'>update your personal detials here</p>
      <div className='nameholder'>
      <div>
      <label>Firstname</label>
      <input 
        type='text' 
        placeholder='first name'
        required
        name='firstname'
        value={input.firstname}
        onChange={handleInputChange}
        />
      </div>
      <div>
      <label>Lastname</label>
      <input 
        type='text' 
        placeholder='lastname'
        required
        name='lastname'
        value={input.lastname}
        onChange={handleInputChange}

        />
      </div>
      </div>
      <label>Username</label>
      <input 
      type='text'
      name='username'
      value={input.username}
      placeholder='username'
      onChange={handleInputChange}
      required
      />
      <label>Email</label>
      <input 
        type='email'
        name='email'
        value={input.email}
        placeholder='Enter a Valid Email'
        onChange={handleInputChange}
        required
      />
            <div className='DOB'>
      <div>
      <label>Date of Birth</label>
      <input 
        type='text' 
        placeholder='02-05-2024'
        required
        name='firstname'
        />
      </div>
      <div>
      <label>Phone Number</label>
      <input 
        type='text' 
        placeholder='eg.12345678901'
        required
        name='lastname'
        />
      </div>
      </div>
      <label>Gender</label>
      <select className={"gender"} name='gender' value={input.gender} onChange={handleInputChange}>
        <option>Male</option>
        <option>Female</option>
      </select>
      </div>
      </section>
      </form>
    </div>
    </div>
   </div> 
   {closeComponent && close }
    </div>
  )
}