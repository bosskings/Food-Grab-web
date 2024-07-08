import React, { useState, useEffect } from 'react';
import { AiOutlinePicture, AiOutlineCloudUpload } from "react-icons/ai";
import { MdVerifiedUser } from "react-icons/md";
import './createshop.css';
import { XCircle } from 'react-bootstrap-icons';
import DEF from "../media/default.png"
import RESTURANT from "../media/resturant.png"

export const CreateShopModal = ({ closeComponent }) => {
  const [open, setOpen] = useState(false);
  const [shop, setShop] = useState('');
  const [existingData, setExistingData]= useState('')
  const [success, setSuccess] = useState(false);

  const [image, setImage] = useState(''||RESTURANT);
  const [profileImage, setProfileImage] = useState(''||DEF);
  const [fileName, setFileName] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [errMessage, setErrMessage] = useState('');

  const [shopName, setShopName] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [addressDescription, setAddressDescription] = useState('')
  const [description, setDescription] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [type, setType] = useState('');
  const [backDrop, setBackdrop] = useState(null);
  const [logo, setLogo] = useState(null);



  let [token, setAuthTokens] = useState(() => localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null);

  console.log(token);
  const url = 'https://api.foodgrab.africa/merchants/api/v1/createShop';

  const handleShopSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append('shopName', shopName);
      formData.append('description', description);
      formData.append('street', street);
      formData.append('city', city);
      formData.append('state', state);
      formData.append('houseNumber', houseNumber);
      formData.append('type', type);
      formData.append('addressDescription', addressDescription)
      if (logo) {
        formData.append('logo', logo);
      }
      if (backDrop) {
        formData.append('backDrop', backDrop);
      }

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          "Authorization": `Bearer ${token.token}`,
        },
        body: formData,
      });

      if (response.ok) {
        setErrMessage('Post created successfully!');
        const data = await response.json();
        setShop(data.data);
        console.log(data.data);
        setIsLoading(false);
        setSuccess(true);
      } else {
        setErrMessage('Error creating post');
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Error:', error);
      setErrMessage('Error creating post');
      setIsLoading(false);
    }
  };


//   const url2 = 'https://api.foodgrab.africa/merchants/api/v1/getShop'
//   useEffect(()=>{

//    const fetchShopData = async ()=>{
//     setIsLoading(true);
//     try{
//       const response = await fetch(url2, {
//         method: 'GET',
//         headers : {
//           "Authorization": `Bearer ${token.token}`,
//         }
//       })

//       const result = await response.json();
//       if (response.ok) {
//         // Destructure the data object
//         const { data } = result;
//         setProfileImage(data|| DEF);
//         setImage(data || RESTURANT);
//         setExistingData(data);

//         // Optionally set individual state fields
//         setShopName(data.shopName || '');
//         setDescription(data.description || '');
//         setStreet(data.address?.street || '');
//         setCity(data.address?.city || '');
//         setState(data.address?.state || '');
//         setHouseNumber(data.address?.houseNumber || '');
//         setAddressDescription(data.address?.addressDescription || '');
//         setType(data.type || '');

//         setIsLoading(false);
//       } else {
//         setIsLoading(false);
//         setErrMessage('Failed to fetch shop data');
//       }
//     } catch (error) {
//       console.error('Error fetching Shop data:', error);
//       setIsLoading(false);
//       setErrMessage('Error fetching shop data');
//     }
//   };
//   fetchShopData();
// }, [token]);


  const handleOpen = ()=>{
    setOpen(!open)
  }

  const ClosePfModal = ()=>{
    return(
      <div>
      <XCircle className={"closePf"} onClick={closeComponent}/>
      </div>
    )
  }

  return (
    <div className={open ? "not-active" : "createshdiv"}>
     <div className={"overlay"} onClick={closeComponent}></div>
      <div className={open ? "not-active" :"createShop"}>
        <div className='closeBar'>
          <div>
            <p className='txt2'>Shop Profile</p>
            <p className='ppsubtxt'>change and edit shop profile details</p>
          </div>
          <div>
         <ClosePfModal onClick={handleOpen} />
          </div>
        </div>

        <form className="createshform" onSubmit={handleShopSubmit}>
          <section className={image ? "creatshopSecOne" : 'creatshopSecOnea'}
            onClick={() => document.querySelector(".input-field").click()}>
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
                      // setFileName(selectedFile.name);
                      // setImage(URL.createObjectURL(selectedFile));
                      // setBackdrop(selectedFile);

                      // if (image.width === 1350 && image.height === 320) {
                        setFileName(selectedFile.name);
                        setImage(URL.createObjectURL(selectedFile));
                        setBackdrop(selectedFile);
                      // } else {
                      //   alert('Image dimensions must be 1350x320 pixels.');
                      // }
                    };
                  }
                }}
              />
              {image ?
                <div className='innerImage'><img src={image.backdropPic} alt='' /> 
                <div className={"IconTextDiv"}>
                  <p className='textIcon'><AiOutlineCloudUpload /></p>
                  <p>Upload Cover Image </p>
                  </div>
                </div> :
                <div className='uploadIconTextDiv'>
                <img src={RESTURANT} alt=''/>
                  <div className={"IconTextDiv"}>
                  <p className='textIcon'><AiOutlineCloudUpload /></p>
                  <p>Upload Cover Image </p>
                  </div>
                </div>
              }
            </div>
          </section>

          <section className={"createShopSec2"}>
            <div className="createShopSecTwo">
              <div className='profileImageFlex'>
                <div className={"profileImage"}>
                  <input type="file" accept='image/*' className='input-field2' hidden
                    onChange={({ target: { files } }) => {
                      files[0] && setFileName(files[0].name)
                      if (files) {
                        setProfileImage(URL.createObjectURL(files[0]));
                        setLogo(files[0]);
                      }
                    }}
                  />
                  {profileImage ? 
                  <img src={profileImage.logo} alt='' className={''} /> :
                  <img src={DEF} alt='' className={''} />
                  }
                  <div className="checkboxContainer2">
                    <MdVerifiedUser className='customcheckbox2' color={shop && shop.verified ? '#0077ff' : 'grey'} />
                  </div>
                </div>
                <div className="profileCredentials">
                  <p className={"txt3"}>Business Logo</p>
                  <p className={"subtxt2"}>This Picture will be displayed on your profile</p>
                  <p className='change' onClick={() => document.querySelector(".input-field2").click()}>
                    <AiOutlinePicture className={"ChIcon"} />
                    Change Photo
                  </p>
                </div>
              </div>
              <div className={"submitShopProfile"}>
                <p className={'txt3'}>Shop Information</p>
                <p className='ppsubtxt cc'>update your personal details here</p>
                <button type='submit' className={"updPfButton"} >{isLoading === true ? 'Loading . . ' : 'Submit'}</button>
              </div>
            </div>
            <div className={"createShopFormProper"}>
              <label className={"subtxt"}>Business name</label>
              <input
                className={"createinput"}
                type='text'
                name='business'
                placeholder='business name'
                onChange={(e) => setShopName(e.target.value)}
                value={shopName}
                required
              />
              <label className={"subtxt"}>Description</label>
              <input
                className={"createinput"}
                type='text'
                name='description'
                placeholder='description'
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                required
              />
              <label className={"txt3"}>Category</label>
              <select className={"cate"}
                value={type? type : existingData.type}
                onChange={(e) => setType(e.target.value)}
              >
                <option>Select type</option>
                <option value={'RESTAURANT'}>RESTAURANT</option>
                <option value={'CHEF'}>CHEF</option>
              </select>
              <label className={"txt3"}>State</label>
              <input
                className={"createinput"}
                type='text'
                name='state'
                placeholder='E.g Lagos State'
                onChange={(e) => setState(e.target.value)}
                value={state}
                required
              />
              <label className={"txt3"}>City</label>
              <input
                className={"createinput"}
                type='text'
                name='city'
                placeholder='E.g Port Harcourt'
                onChange={(e) => setCity(e.target.value)}
                value={city}
                required
              />
              <label className={"txt3"}>House Number</label>
              <input
                className={"createinput"}
                type='text'
                name='houseNumber'
                placeholder='E.g, 64'
                onChange={(e) => setHouseNumber(e.target.value)}
                value={houseNumber}
                required
              />
              <label className={"txt3"}>Street</label>
              <input
                className={"createinput"}
                type='text'
                name='street'
                placeholder='E.g, D/Line Street'
                onChange={(e) => setStreet(e.target.value)}
                value={street}
                required
              />
               <label className={"txt3"}>Address Description</label>
               <textarea
               className={"createinput"}
               name='addressDescription'
               placeholder='E.g, oppsite Zenith bank by gra junction'
               onChange={e => setAddressDescription(e.target.value)}
               value={addressDescription}
               required
               />
            </div>
          </section>
        </form>
      </div>
    </div>
  );
};
