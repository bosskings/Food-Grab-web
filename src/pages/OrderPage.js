import React from 'react'
import { Sidebar } from '../components/dashboard/Sidebar'
import { Orders } from '../components/dashboard/Orders'
import { Navabar3 } from '../components/navbar/Navabar3'

const OrderPage = () => {
  return (  
      <div className='dashboardbox'>
      <Sidebar />
      <div className={"dashbox"}>
      <Navabar3 />
      <Orders />
      </div>
  
    </div>
  )
}

export default OrderPage
