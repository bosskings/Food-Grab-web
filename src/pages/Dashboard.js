import React, { useEffect, useState } from 'react'
import { Sidebar } from '../components/dashboard/Sidebar'
import { DashboardHome } from '../components/dashboard/DashboardHome'
import { Navabar3 } from '../components/navbar/Navabar3'



export const Dashboard = () => {

  
  return (
    <div className='dashboardbox'>
      <Sidebar />

      <div className='dashbox'>
        <Navabar3 />
        <DashboardHome />
      </div>
    </div>
  )
}

