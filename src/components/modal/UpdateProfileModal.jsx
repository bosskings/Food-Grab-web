import React, { useState } from 'react'
import "./updateProfile.css"
import { AiOutlinePicture } from "react-icons/ai";

export const UpdateProfileModal = () => {
  const [image, setImage] = useState(null)
  const [imageUrl, setImageUrl]= useState(localStorage.getItem('profileImage') || '');


  const handleImageChange = (e)=>{
      const file = e.target.files[0]
      setImage(file)
      const reader = new FileReader();
    reader.onloadend = () => {
      const imageDataUrl = reader.result;
      setImageUrl(imageDataUrl);
      localStorage.setItem('profileImage', imageDataUrl); // Store the image in local storage
    };
    reader.readAsDataURL(file);
    }
    

  return (
    <div>
      <div className={"updateProfile"}>
      <div className={"profileModal"}>
        <section  className={"profileModalsec1"}>
          <p className={"txt2"}>Profile</p>
          <p className={"ppsubtxt"}>Change and edit profile details</p>
      </section>
      <section className={"profileModalsec2"}>
        <div className={"profileImage"}>
        {<img src={imageUrl} alt='' className={''}/>}
        <div className="checkboxContainer">
              <input
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
          <AiOutlinePicture />
          Change Image
          </labbel>

        </div>
      </section>
    </div>
     
    </div>
    </div>
  )
}