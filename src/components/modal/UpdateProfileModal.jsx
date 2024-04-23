import React, { useState } from 'react'
import "./updateProfile.css"
import { AiOutlinePicture } from "react-icons/ai";
import { XCircle } from 'react-bootstrap-icons';

export const UpdateProfileModal = ({CloseComponent}) => {
  const [image, setImage] = useState(null)
  const [imageUrl, setImageUrl]= useState(localStorage.getItem('profileImage') || '');
  const [close, setclose] =useState(false)

  const handleClose = ()=>{
    setclose(!close)
  }

  const ClosePfModal = ()=>{
    return(
      <div>
      <XCircle className={"closePf"} onClick={handleClose}/>
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
    

  return (
    <div>
    <div className={close ?"not-active":"overlay"} onClick={handleClose}></div>
    <div>
      <div className={close ? "not-active":"updateProfile"}>
      <div className={"profileModal"}>
        <section  className={"profileModalsec1"}>
        <div>
          <p className={"txt2"}>Profile</p>
          <p className={"ppsubtxt"}>Change and edit profile details</p>
        </div>
        {CloseComponent = <ClosePfModal />}
      </section>
      <section className={"profileModalsec2"}>
        <div className={"profileImage"}>
        {<img src={imageUrl} alt='' className={''}/>}
        <div className="checkboxContainer">
              <inputImage
                type='checkbox'
                className={"verified"}
                id="verified"
              />
              <span className="customCheckbox"></span>
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
      </section>
      <section className={"ProfileModalSec3"}>
      <form
      onSubmit={""}
      method={"POST"}
      className={"ProfilemodalFrom"}
      >
      <div className='frmsubmit'>
      <p className={'txt3'}>Personal Information</p>
      <p className='ppsubtxt cc'>update your personal detials here</p>
      <button type='submit' className={"updPfButton"}>
        Save Changes
      </button>
      </div>
      <div className={"formproper"}>
      <div className='nameholder'>
      <div>
      <label>Firstname</label>
      <input 
        type='text' 
        placeholder='first name'
        required
        name='firstname'
        />
      </div>
      <div>
      <label>Lastname</label>
      <input 
        type='text' 
        placeholder='lastname'
        required
        name='lastname'
        />
      </div>
      </div>
      <label>Username</label>
      <input 
      type='text'
      name='username'
      placeholder='username'
      required
      />
      <label>Email</label>
      <input 
        type='email'
        name='email'
        value='cmacjude17@gmail.com'
        placeholder='Enter a Valid Email'
        readOnly
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
      <select className={"gender"}>
        <option>Male</option>
        <option>Female</option>
      </select>
      </div>
      </form>
      </section>
    </div>
    </div>
   </div> 
   {CloseComponent && close }
    </div>
  )
}