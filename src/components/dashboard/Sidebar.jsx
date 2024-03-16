import React from 'react'
import "./dashboard.css"
import LOGO from "../media/logo dashboard.png"
import { useNavigate } from 'react-router-dom'
import { Login } from '../login/Login'
import { House } from 'react-bootstrap-icons'


export const Sidebar = () => {
  const navigate = useNavigate()


  return (
    <div className={"dashboardbox"}>
      <div className={"sidebar"}>

      <div className='logobox'>
        <img src={LOGO} alt=''  onClick={navigate('/Dashboard')}/>
      </div>
      <ul>
        <div className={"list"}><House /> Dashboard</div>
        <div className={"list"}>  Orders</div>
        <div className={"list"}>Menu</div>
        <div className={"list"}>Wallet</div>
      </ul>
      </div>
    </div>
  )
}

