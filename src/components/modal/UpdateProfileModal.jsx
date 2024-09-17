import React, { useState, useEffect } from 'react'
import "./updateProfile.css"
import { AiOutlinePicture } from "react-icons/ai";
import { XCircle } from 'react-bootstrap-icons';

export const UpdateProfileModal = ({closeComponent}) => {
  const [image, setImage] = useState(null)
  const [imageUrl, setImageUrl]= useState('');
  const [close, setClose] =useState(false)
  const [token, setAuthTokens]= useState(localStorage.getItem('token')? JSON.parse(localStorage.getItem('token')):null)
  const [input, setInput]= useState({
    firstname: '',
    lastname: '',
    username: '',
    email: 'cmacjude17@gmail.com',
    dateOfBirth: '',
    phoneNumber: '',
    gender: 'Male'
  })
  const [isLoading, setIsLaoading] = useState(false)

  const handleInputChange = (e)=>{
    const{name,value} = e.target
    setInput((prevState)=>({...prevState,[name]:value}))
  }

  const handleClose = ()=>{
    setClose(!close)
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
      // localStorage.setItem('profileImage', imageDataUrl); 
    };
    reader.readAsDataURL(file);
    }

    useEffect(() => {
      const fetchCuisineDetails = async () => {
        const url = `https://api.foodgrab.africa/merchants/api/v1/getProfile`
        try {
          const response = await fetch(url, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token.token}`
            }
          });
          if (response.ok) {
            const data = await response.json();
            const profile = data.data
            if (profile) {
              setInput({
                firstname: profile.firstname,
                 lastname: profile.lastname,
                 username: profile.firstname,
                 email: profile.email,
                 phoneNumber: profile.phone,
              })
              setImageUrl(profile.pictureAddress)
            }
          } else {
            console.error('Failed to fetch profile details');
          }
        } catch (error) {
          console.error('Error fetching profile details:', error);
        }
      };
        
      fetchCuisineDetails();
      
    }, [token]);

    const handleSubmit = async (e)=>{
      e.preventDefault()
      setIsLaoading(true)

      const url = 'https://api.foodgrab.africa/merchants/api/v1/updateProfile'

      const formData = new FormData();
      formData.append('firstname', input.firstname);
      formData.append('lastname', input.lastname);
      formData.append('username', input.username);
      formData.append('email', input.email);
      // formData.append('dateOfBirth', input.dateOfBirth);
      formData.append('phoneNumber', input.phoneNumber);
      // formData.append('gender', input.gender);
      if (image) {
        formData.append('profilePicture', image);
      }
      try{
        const response = await fetch(url,{
          method: 'PATCH',
          headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token.token}`
          },
          body: formData
        })
        if (response.ok){
          const data = await response.json();
          console.log(data)
          localStorage.setItem('profileUpdate', "true");
          console.log('Profile updated successfully');
          setClose(true);
          closeComponent();
      } else {
        console.log('There was an error');
      }
      }
      catch(error){
        console.error(error)
      }
      finally{
        setIsLaoading(false)
      }
    }
    

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
      onSubmit={handleSubmit}
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
      {/* <div>
      <label>Date of Birth</label>
      <input 
        type='text' 
        placeholder='02-05-2024'
        required
        name='firstname'
        />
      </div> */}
      <div>
      <label>Phone Number</label>
      <input 
        type='text' 
        value={input.phoneNumber}
        placeholder='eg.12345678901'
        onChange={handleInputChange}
        required
        name='phoneNumber'
        />
      </div>
      </div>
      {/* <label>Gender</label>
      <select className={"gender"} name='gender' value={input.gender} onChange={handleInputChange}>
        <option>Male</option>
        <option>Female</option>
      </select> */}
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