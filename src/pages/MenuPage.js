import React from 'react'
import { Sidebar } from '../components/dashboard/Sidebar'
import { Menu } from '../components/dashboard/Menu'
import { Navabar3 } from '../components/navbar/Navabar3'

export const MenuPage = () => {
  return (
    <div className={"dashboardbox"}>
      <Sidebar />
      <div className='dashbox'>
      <Navabar3 />
      <Menu />
      </div>
      
    </div>
  )
}