import "./nav.css"
import LOGO from "../components/media/Landscape Logo II_1- Transparent.png"
import { Link } from "react-router-dom"

export const Navbar = ()=>{
  return(
    <div>
      <nav className={"navbar"}>
      <div className="logobox">
      <Link to="/">
        <img className={"logo1"} src={LOGO} alt=""/>
      </Link>
      </div>
      <div className={"buttonholder"}>
      <Link to="/Merchantsignup">
        <button className={"btn1"}>
          Merchant Signup
        </button>
      </Link>
      <Link to="/Merchantlogin">
        <button className={"btn2"}>
          Merchant Login
        </button>
      </Link>
      </div>
      </nav>
    </div>
  )
}