import React, { useEffect, useState } from 'react'
import "./shop.css"
import { MdOutlineCalendarMonth } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { GoClock } from "react-icons/go";
import { MdOutlineInterests } from "react-icons/md";
import { SiCodechef } from "react-icons/si";
import { MdVerifiedUser } from "react-icons/md";
import { CreateShopModal } from '../modal/CreateShopModal';

export const Shop = () => {

  let [token, setAuthTokens] = useState(()=> localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null)

  const [shopData, setShopData]= useState({})

  const url = 'https://api.foodgrab.africa/merchants/api/v1/getShop'
  useEffect(()=>{

   const fetchShopData = async ()=>{
    try{
      const response = await fetch(url, {
        method: 'GET',
        headers : {
          "Authorization": `Bearer ${token.token}`,
        }
      })

      const data = await response.json();
      setShopData(data.data)

      if (response.ok){
        console.log(data);
      }

      else{
        console.log('There was an error');
      }
    }

    catch (error){
      console.error('Error fetching Shop data:', error)
    }
   }
   fetchShopData();
  },[])

 



  return (
    <div className='shop'>
      {shopData ? <Shop2 data = {shopData} /> : <NoShop />}
    </div>
  )
}  

 const NoShop =()=>{

  const [openModal,  setOpenModal] = useState(false)

  const handleOpenModal = ()=>{
    setOpenModal(true)
  }

  const handleCloseModal = ()=>{
    setOpenModal(false)
  }
    return(
      <div className={"noshdiv"}>
      <section className='shopSec1'>
      <div>
        <p className='txt2'>Shop</p>
        <p className='ppsubtxt'>create and edit shop</p>
      </div>  
      </section>
      <section className={"shopSec2a"}>
        <div className='empty'>
        <p className={"txt3"}>You have not created any shop yet!</p>
        <p className={"subtxt2"}>Create a shop to get orders, recieve orders and perform various transactions</p>
        <button className='createShopBtn' onClick={handleOpenModal}>create Shop</button>
        </div>
      </section>
      {openModal === true && <CreateShopModal handleCloseModal={handleCloseModal} handleOpenModal={handleOpenModal} han/>}
      </div>
    )
  }

  
const Shop2 =({data})=>{
  const [edit, setEdit] = useState(false)

  const handleEdit = ()=>{
    setEdit(!edit)
  }

    return(
      <div>
      <section className='shopSec1'>
        <div className={"shopCreatedfirstdiv"}>
        <div>
        <p className='txt2'>Shop</p>
        <p className='ppsubtxt'>create and edit shop</p>
        </div>
        <button className={'editshop'} onClick={handleEdit}>
          Edit Shop 
        </button>
        </div>
        
      </section>
      <section className={"shopSec2b"}>
        <div className={'shopProfile'}>

          <div className={'shoppfsec1'}>
            <div className={"coverImage"}>
              <img src={data.backdropPic} alt=''/>
            </div>
          </div>


          <div className={'shoppfsec2'}>

              <div className={"shopProfileDpHolder"}>
                <div className={"ShopProfileDp"}>
                  <img src={data.logo} alt=''/>
                </div>
                <MdVerifiedUser className='customcheckbox' color={data.verified ? "#0077ff":"grey"}/>
              </div>

            <div className={"shopDetails"}>
              <h2 >{data.shopName}</h2>
              <p className='desc'>{data.description}</p>
              
              <div className={"shopDetailsSec2"}>
                  <div className='shopType'>
        
                    <div>
                      <MdOutlineInterests /> <p>{data.type}</p>
                    </div>

                  </div> 

                  <div className='shopAddress'>
                    <MdOutlineLocationOn/> 
                    <p>
                      {data.address.houseNumber} {data.address.street} , {data.address.city} , {data.address.state}
                    </p>
                  </div>


              {/* <div>
              <MdOutlineCalendarMonth/><p>{shopDdataata.shopScehduel}</p>
              </div>
              <div>
              <GoClock/> <p>{shopData.shopTiming}</p>
              </div>
              <div>
              <MdOutlineLocalPhone/> <p>{shopData.shopContact}</p>
              </div> */}
            </div>
            </div>

          </div>

        </div>
      </section>
      {edit && <CreateShopModal closeComponent={handleEdit}/>}
      </div>
    )
  }