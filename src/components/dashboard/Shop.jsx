import React, { useEffect, useState } from 'react'
import "./shop.css"

export const Shop = () => {

  const [shop, setShop]= useState(null)

  useEffect(()=>{
    const isShopCreated = shop
    if (isShopCreated){
      setShop(<Shop2/>)
    }else{
      setShop(<NoShop/>)
    }
  },[])

  const NoShop =()=>{
    return(
      <div className='empty'>
      <p className={"txt3"}>You have not created any shop yet!</p>
      <p className={"subtxt2"}>Create a shop to get orders, recieve orders and perform various transactions</p>
      <button className='createShopBtn'>create Shop</button>
      </div>
    )
  }

  const Shop2 =()=>{
    return(
      <div>
      </div>
    )
  }

  return (
    <div className='shop'>
      <section className='shopSec1'>
        <p className='txt2'>Shop</p>
        <p className='ppsubtxt'>create and edit shop</p>
      </section>
      <section className={"shopSec2"}>
      <div>
        {shop}
      </div>
      </section>
    </div>
  )
}