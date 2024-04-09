import React from 'react'
import { Sidebar } from '../components/dashboard/Sidebar'
import { Wallet } from '../components/dashboard/Wallet'
import { Navabar3 } from '../components/navbar/Navabar3'

export const WalletPage = () => {
  return (
    <div className={"dashboardbox"}>
      <Sidebar />
      <div className='dashbox'>
      <Navabar3 />
      <Wallet />
      </div>
      
    </div>
  )
}