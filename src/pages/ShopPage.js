import React from 'react'
import { Sidebar } from '../components/dashboard/Sidebar'
import { Navabar3 } from '../components/navbar/Navabar3'
import  Shop  from '../components/dashboard/Shop.Jsx'

export const ShopPage = () => {
  return (
    <div className={"dashboardbox"}>
    <Sidebar />
    <div className={"dashbox"}>
      <Navabar3 />
      <Shop />
    </div>
      
    </div>
  )
}