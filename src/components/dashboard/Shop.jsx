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

 



  return (
    <div className='shop'>
      {shop ?<Shop2 data = {shop} />  :<NoShop />}
    </div>
  )
}  

 const NoShop =()=>{

  const [openModal,  setOpenModal] = useState(false)

  const handleOpenModal = ()=>{
    setOpenModal(!openModal)
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
      <div className={openModal ?"overlay":"not-active"} onClick={handleOpenModal}></div>
      {openModal && <CreateShopModal/>}
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
          Edit 
        </button>
        </div>
        
      </section>
      <section className={"shopSec2b"}>
        <div className={'shopProfile'}>
          <div className={'shoppfsec1'}>
            <div className={"coverImage"}>
            <img src={data.coverImage} alt=''/>
            </div>
          </div>
          <div className={'shoppfsec2'}>
          <div className={"shopProfileDpHolder"}>
            <div className={"ShopProfileDp"}>
              <img src={data.shopProfile} alt=''/>
              
            </div>
            <MdVerifiedUser className='customcheckbox' color={data.verified ? "#0077ff":"grey"}/>
          </div>
          <div className={"shopDetails"}>
            <div>
              <p className={"txt2"}>{data.shopName}</p>
            </div>
            <div className={"shopDetailsSec2"}>

            <div>
            <div>
            {data.shopCategory === "Restaurant" ? (
              <>
                <MdOutlineInterests /> <p>Restaurant</p>
              </>
            ) : data.shopCategory === "Chef" ? (
              <>
                <SiCodechef /> <p>Chef</p>
              </>
            ) : (
              <> 
              </>
            )}
            </div> 
            <p> {data.shopCategory}</p>
            </div>
            <div>
            <MdOutlineLocationOn/> <p>{data.shopLocation}</p>
            </div>
            <div>
            <MdOutlineCalendarMonth/><p>{data.shopScehduel}</p>
            </div>
            <div>
            <GoClock/> <p>{data.shopTiming}</p>
            </div>
            <div>
            <MdOutlineLocalPhone/> <p>{data.shopContact}</p>
            </div>
          </div>
          </div>
          </div>
          </div>
      </section>
      {edit && <CreateShopModal/>}
      </div>
    )
  }