import React from 'react'
import { Sidebar } from '../components/dashboard/Sidebar'
import { Profile } from '../components/dashboard/Profile'
import { Navabar3 } from '../components/navbar/Navabar3'

export const ProfilePage = () => {
  return (
    <div className={"dashboardbox"}>
      <Sidebar/>
      <div className={"dashbox"}>
      <Navabar3 />
      <Profile />
      </div>
    </div>
  )
}


