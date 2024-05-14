  import React, { useState,useEffect } from 'react'
  import { Camera, XCircle } from 'react-bootstrap-icons'
  import './createshop.css'
  import { AiOutlinePicture } from "react-icons/ai";
  import { MdVerifiedUser } from "react-icons/md";
  import { GoClock } from "react-icons/go";
  import { FaRegCalendarAlt } from "react-icons/fa";
  import { AiOutlineCloudUpload } from "react-icons/ai";


  export const CreateShopModal = ({closeComponent}) => {
    const [coverImage, setCoverImage] = useState(localStorage.getItem('profileImg') || '')
    const [imageUrl, setImageUrl] = useState(localStorage.getItem('coverImg') || '')
    const [open, setOpen] = useState(false)
    const [edit, setEdit]= useState('not-active')


    const [shop, setShop]= useState('')
  useEffect(()=>{

   const fetchShopData = async ()=>{
    try{
      const response = await fetch('')
      if (!response.ok){
        throw new Error('failed to fetch shop data')
      }
      const data = await response.json();
    setShop(data)
    }
    catch (error){
      console.error('Error fetching Shop data:', error.message)
    }
   }
   fetchShopData();
  },[])

    
    useEffect(() => {
      fetchDefaultCoverImage(); 
    }, []);
  
    const fetchDefaultCoverImage = async () => {
      try {
        const response = await fetch('your_backend_api_url');
        if (!response.ok) {
          throw new Error('Failed to fetch default cover image');
        }
        const data = await response.json();
        setImageUrl(data.defaultCoverImageUrl);
      } catch (error) {
        console.error('Error fetching default cover image:', error);
      }
    };
  
    const handleEdit = () => {
      setEdit('uploadCvImg');
    };
  
    const handleMouseLeave = () => {
      setEdit('not-active');
    };
  
    const handleImageChange = async (e) => {
      const file = e.target.files[0];
      setCoverImage(file);
      const formData = new FormData();
      formData.append('coverImg', file);
      
      try {
        const response = await fetch('', {
          method: 'POST',
          body: formData,
        });
        if (!response.ok) {
          throw new Error('Failed to upload cover image');
        }
        const data = await response.json();
        setImageUrl(data.updatedCoverImageUrl); 
      } catch (error) {
        console.error('Error uploading cover image:', error);
      }
    };

    const handleOpen =()=>{
      setOpen(!open)
    }

    const CloseCrModal = ()=>{
      return(
        <div>
        <XCircle className={"closePf"} onClick={closeComponent}/>
        </div>
      )
    }



    const [image, setImage] = useState(null)
    const [cover_image, setCover_image] = useState(null)
    const [fileName, setFileName] = useState("No Selected File Name")

    return (
      <div className={open ?"not-active":"createshdiv"}>
      <div className={open ? "not-active" : "createShop"}>
      <div>
          <p className='txt2'>Shop Profile</p>
        <p className='ppsubtxt'>change and edit shop profile detials</p>
        </div>
      <form
      onSubmit={''}
      method='POST'
      className={"createshform"}>
        <section className={"creatshopSec1"}>
        <div className={'screatehoppfsec1'}>
        <div className={'cvholder'} onMouseEnter={handleEdit} onMouseLeave={handleMouseLeave}>
          <div className={edit} onClick={handleImageChange}>
                <Camera /> <p>click to add cover image</p>
                <input 
                type='file'
                />
              </div>
              <div className={"coverImage update"}>
              <img src={coverImage} alt=''/>
              </div>
        </div>
        </div>
      </section>
      <section className={"createShopSec2"}>
        <div className={"profileImage"}>
        {<img src={imageUrl} alt='' className={''}/>}
        <div className="checkboxContainer2">
        <MdVerifiedUser className='customcheckbox2' color={shop && shop.verified ? '#0077ff' : 'grey'}/>
        </div>
   
        </div>
        <div className={"profileCredentials"}>
          <p className={"txt3"}>Business Logo</p>
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
      <section className={"createShopSec2"}>
        <div className={"submitShopProfile"}>
        <p className={'txt3'}>Shop Information</p>
        <p className='ppsubtxt cc'>update your personal detials here</p>
        <button type='submit' className={"updPfButton"}>
          Save Changes
        </button>
        </div>
        <div className={"createShopFormProper"}>
        <label className={"subtxt"}>Business name</label>
        <input
        className={"createinput"}
          type='text'
          name='business'
          placeholder='business name'
          required
        />
        <label className={"txt3"}>Location</label>
        <input 
        className={"createinput"}
          type='text'
          name='location'
          placeholder='location'
          required
        />
        <label className={"txt3"}>Category</label>
        <select className={"cate"}>
          <option>Resturant</option>
          <option>Chef</option>
        </select>
         <label className={"txt3"}>Work Hours</label>
        <div className={"work"}>
          <div className={"workHours"}>
          <p className={'inittxt'}>From:</p>
          <input 
          className='workinput'
          type='text'
          name='location'
          required
        />
        <GoClock  className={"clock"}/>
          </div>
          <div className={"workHours"}>
          <p className={'inittxt'}>To:</p>
          <input 
          className='workinput'
          type='text'
          name='location'
          required
        />
        <GoClock className={"clock"}/>
          </div>
        </div>
        <label className={"txt3"}>Work Days</label>
        <div className={"work"}>
          <div className={"workHours"}>
          <p className={'inittxt'}>From:</p>
          <input 
          className='workinput'
          type='text'
          name='location'
          required
        />
        <FaRegCalendarAlt  className={"clock"}/>
          </div>
          <div className={"workHours"}>
          <p className={'inittxt'}>To:</p>
          <input 
          className='workinput'
          type='text'
          name='location'
          required
        />
        <FaRegCalendarAlt className={"clock"}/>
          </div>
        </div>

                  </div>
                </section>
              </div>

          </form>
          
        </div>
      
    </div>
  )
}