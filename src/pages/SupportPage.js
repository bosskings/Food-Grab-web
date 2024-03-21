import React from 'react'
import { Sidebar } from '../components/dashboard/Sidebar'
import { Navabar3 } from '../components/navbar/Navabar3'
import { Support } from '../components/dashboard/Support'


export const SupportPage = () => {

  return (
    <div className={"dashboardbox"}>
    <Sidebar />
    <div className={"dashbox"}>
      <Navabar3 />
      <Support />
    </div>
    </div>
  )
}