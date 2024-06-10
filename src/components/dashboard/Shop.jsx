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
  
  const [isLoading, setIsLoading] = useState(false)
  let [token, setAuthTokens] = useState(()=> localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null)
  const [shopData, setShopData]= useState({})


  
  const url = 'https://api.foodgrab.africa/merchants/api/v1/getShop'
  useEffect(()=>{

   const fetchShopData = async ()=>{
    setIsLoading(true);
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
        setIsLoading(false)
      }
      
      else{
        console.log('There was an error');
        setIsLoading(false)
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
      {shopData ? <Shop2 data = {shopData} isLoading={isLoading} /> : <NoShop />}
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
      {openModal && <CreateShopModal closeComponent={handleCloseModal}/>}
      </div>
    )
  }

  
const Shop2 =({data, isLoading})=>{
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


          {isLoading === true ? (

            <div className='loaderModal'>
                <span className="loader"></span>
            </div>
          ) : (

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
                      <MdOutlineInterests iconn /> <p>{data.type}</p>
                    </div>

                  </div> 

                  <div className='shopAddress'>
                    <MdOutlineLocationOn className='iconn'/> 
                      {data.address && (
                        <p>
                            {data.address.houseNumber} {data.address.street} , {data.address.city} , {data.address.state}
                        </p>
                      )}
                  </div>

                </div>
              </div>
            </div>
          )}


        </div>
      </section>

      {edit && <CreateShopModal closeComponent={handleEdit}/>}

    </div>
    )
  }