import "./nav.css"
import LOGO from "../components/media/Landscape Logo II_1- Transparent.png"
import { Link } from "react-router-dom"
import { MenuButtonFill, XCircle } from "react-bootstrap-icons"
import { useState } from "react"

export const Navbar = ()=>{
  const [menu, setMenu] = useState('')
  const [nav1, setNav1] = useState('')
  const [menu1, setMenu1] = useState('not-active')
  const [overlay, setOverlay] = useState('not-active')

  let hamburger = {}
  let hamburger2 = {}
  switch(menu){
    case 'menubtn1':
      hamburger = {display :"none"}
      break;

    case 'close':
      hamburger2 = {display :"none"}
      break

    default:
      hamburger = {}
  }

  let mobilenav1 = {}
  switch(nav1){
    case 'open':
      mobilenav1 = {left: "0",transition: "all ease 0.5s"}
      break
    case 'close2':
      mobilenav1 = {left: "-80%",
        transition: "all ease 0.5s"}
      break
    default:
      mobilenav1 ={}
  }


  return(
    <div>
    <div className={"hamburger"} style={mobilenav1}>
    <div>
    <Link to="/">
        <img className={"logo1"} src={LOGO} alt="" onClick={()=> { setNav1("close2"); setMenu('close');setOverlay('not-active')}}/>
      </Link>
      <Link to="/Merchantsignup" onClick={()=> { setNav1("close2"); setMenu('close');setOverlay('not-active')}}>
        <button className={"btn1"}>
          Merchant Signup
        </button>
      </Link>
      <Link to="/Merchantlogin" onClick={()=> { setNav1("close2"); setMenu('close');setOverlay('not-active')}}>
        <button className={"btn2"}>
          Merchant Login
        </button>
      </Link>
    </div>
    </div>
    <div className={`overlay ${overlay}`} onClick={()=>{setNav1("close"); setMenu('close');setOverlay('not-active')}}>
    </div>
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
      <div className={"iconbox"}>
        <MenuButtonFill className={`menubtn`} onClick={()=> {setMenu('menubtn1');setNav1('open');setMenu1('close');setOverlay('is-active')}} style={hamburger} />
        <XCircle className={`close ${menu1}`} onClick={()=> {setMenu('close');setNav1('close2');setOverlay('not-active')}} style={hamburger2} />
      </div>
      
      </nav>
    </div>
  )
}