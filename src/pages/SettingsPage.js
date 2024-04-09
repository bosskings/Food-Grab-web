import React from 'react'
import { Sidebar } from '../components/dashboard/Sidebar'
import { Navabar3 } from '../components/navbar/Navabar3'
import { Settings } from '../components/dashboard/Settings'

export const SettingsPage = () => {
  return (
    <div className={"dashboardbox"}>
    <Sidebar />
    <div className={"dashbox"}>
      <Navabar3 />
      <Settings />
    </div>
      
    </div>
  )
}