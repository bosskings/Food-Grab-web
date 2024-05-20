  import React, { useState, useEffect } from 'react'
  import { Camera } from 'react-bootstrap-icons'
  import './createshop.css'
  import { AiOutlinePicture } from "react-icons/ai";
  import { MdVerifiedUser } from "react-icons/md";
  import { GoClock } from "react-icons/go";
  import { FaRegCalendarAlt } from "react-icons/fa";
  import { AiOutlineCloudUpload } from "react-icons/ai";


  export const CreateShopModal = ({handleCloseModal}) => {
    const [open, setOpen] = useState(false)
    const [shop, setShop]= useState('')

    const [cover_image, setCover_image] = useState(null)
    const [image, setImage] = useState(null)
    
    const [profileImage, setProfileImage] = useState(null)
    const [fileName, setFileName] = useState(null)
    const [cover_image2, setCover_image2] = useState(null)



    const [errMessage, setErrMessage] = useState('')


    const [shopName, setShopName] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [houseNumber, setHouseNumber] = useState('')


    const [address, setAddress] = useState({
      street : street,
      city : city,
      state : state,
      houseNumber : houseNumber

    })

    const [category, setCategory] = useState('')
    let [token, setAuthTokens] = useState(()=> localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null)

    const url = 'https://api.foodgrab.africa/merchants/api/v1/createShop'

    const handleShopSubmit = async (e) => {
      e.preventDefault();
  
      const formData = new FormData();
      formData.append('shopName', shopName);
      formData.append('address', address);
      formData.append('category', category);
  
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token.token}`,
          },
          body: formData
        });


        console.log(response);

  
        if (response.ok) {
          setErrMessage('Post created successfully!');
          setShopName('');
          setAddress('');
          setCategory('');
          
        } else {
          setErrMessage('Error creating post');
        }
      } catch (error) {
        console.error('Error:', error);
        setErrMessage('Error creating post');
      }
    };


    return (
    <div className={open ?"not-active":"createshdiv "} >


        <div className={open ? "not-active" : "createShop" } >
          <div className='closeBar'>
            <div>
              <p className='txt2'>Shop Profile</p>
              <p className='ppsubtxt'>change and edit shop profile detials</p>
            </div>

            <p onClick={handleCloseModal} className='closeP'>X</p>
          </div>

          
          <form className="createshform" onSubmit={handleShopSubmit}>
            <section className="creatshopSecOne"  
              onClick={()=> document.querySelector(".input-field").click()}>
                <div>
                <input
                  type="file"
                  accept='image/*'
                  className='input-field'
                  hidden
                  onChange={({ target: { files } }) => {
                    const selectedFile = files[0];
                    
                    if (selectedFile) {
                      const image = new Image();
                      image.src = URL.createObjectURL(selectedFile);
                      image.onload = () => {
                        if (image.width === 1350 && image.height === 320) {
                          setFileName(selectedFile.name);
                          setImage(URL.createObjectURL(selectedFile));
                          setCover_image(files[0])
                        } else {
                          // Notify the user that the image dimensions are incorrect
                          alert('Please upload an image with dimensions 1350 by 32 pixels.');
                        }
                      };
                    }
                  }}
                />


                {image ? 
                    <img src={image} alt=''/> : 
                    
                    <div className='uploadIconTextDiv'>
                        <p className='textIcon'><AiOutlineCloudUpload /></p>
                        <p>Upload Cover Image </p>
                    </div>
                }
              </div>
            </section>


                <section className={"createShopSec2"}>
            
                  <div className="createShopSecTwo">

                    <div className='profileImageFlex'>
                    
                      <div className={"profileImage"}>

                          <input type="file" accept='image/*' className='input-field2' hidden
                            onChange={({target: {files}}) =>{
                                files[0] && setFileName(files[0].name)
                                if(files){
                                    setProfileImage(URL.createObjectURL(files[0]))
                                    setCover_image2(files[0])
                                }
                            }}
                        />



                        <img src={profileImage} alt='' className={''}/>


                        <div className="checkboxContainer2">
                          <MdVerifiedUser className='customcheckbox2' color={shop && shop.verified ? '#0077ff' : 'grey'}/>
                        </div>
                
                      </div>

                      <div className="profileCredentials">

                        <p className={"txt3"}>Business Logo</p>
                        <p className={"subtxt2"}>This Picture will be displayed on your profile</p>

                        <labbel className='change' onClick={()=> document.querySelector(".input-field2").click()}>
                          <AiOutlinePicture className={"ChIcon"}/>
                          Change Photo
                        </labbel>

                      </div>

                    </div>


                    <div className={"submitShopProfile"}>
                      <p className={'txt3'}>Shop Information</p>
                      <p className='ppsubtxt cc'>update your personal detials here</p>
                      <button type='submit' className={"updPfButton"}>Save Changes</button>
                    </div>

                  </div>

                  <div className={"createShopFormProper"}>

                    <label className={"subtxt"}>Business name</label>
                    <input
                      className={"createinput"}
                        type='text'
                        name='business'
                        placeholder='business name'
                        onChange={(e)=>setShopName(e.target.value)}
                        value={shopName}
                        required
                    />

                    <label className={"txt3"}>Category</label>
                    <select className={"cate"}
                        value={category} 
                        onChange={(e) =>setCategory(e.target.value)} 
                    >
                      <option value={'RESTURANT'}>Resturant</option>
                      <option value={'CHIEF'}>Chef</option>
                    </select>

                    <label className={"txt3"}>State</label>
                    <input 
                      className={"createinput"}
                        type='text'
                        name='state'
                        placeholder='E.g Lagos State'
                        onChange={(e)=>setState(e.target.value)}
                        required
                    />


                    <label className={"txt3"}>City</label>
                    <input 
                      className={"createinput"}
                        type='text'
                        name='city'
                        placeholder='E.g Port Hracourt'
                        onChange={(e)=>setCity(e.target.value)}
                        required
                    />

                    <label className={"txt3"}>House Number</label>
                    <input 
                      className={"createinput"}
                        type='text'
                        name='houseNumber'
                        placeholder='E.g, 64'
                        onChange={(e)=>setHouseNumber(e.target.value)}
                        required
                    />


                    <label className={"txt3"}>Street</label>
                    <input 
                      className={"createinput"}
                        type='text'
                        name='street'
                        placeholder='E.g, D/Line Street'
                        onChange={(e)=>setStreet(e.target.value)}
                        required
                    />

                  </div>
                </section>
          </form>
        </div>
      
    </div>
  )
}