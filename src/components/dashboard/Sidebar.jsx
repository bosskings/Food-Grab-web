import React, { useEffect, useState } from 'react'
import "./dashboard.css"
import LOGO from "../media/logo dashboard.png"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaCircleXmark, FaClipboardList} from "react-icons/fa6";
import { LiaHomeSolid } from "react-icons/lia";
import { RiWallet3Line } from "react-icons/ri";
import { SiJusteat } from "react-icons/si";
import { RxExit } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { MenuApp } from 'react-bootstrap-icons';
import { FaPlus } from "react-icons/fa6";

export const Sidebar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const  [active, setActive]= useState()
  const [click, setClick] = useState(false)
  const [profile, setProfile] = useState('')
  const [iconStyles, setIconStyles] = useState({
    icon1:{},
    icon2:{},
    icon3:{},
    icon4:{},
    icon5:{},
    icon6:{},
    icon7:{},
  })
  const [buttonStyles, setButtonStyles] = useState({
    one: {},
    two: {},
    three: {},
    four: {},
    five: {},
    six: {},
    seven:{},
  });

  const handleClick =()=>{
    setClick(!click)
  }

  useEffect(()=>{
    const path2 = window.location.pathname;
    const defaultStyles2 = {color: "#fff"}
    const activeStyles2 = {color: "#01ff01"}

    switch (active){
      case "icon1":
        setIconStyles({...iconStyles, icon1: activeStyles2})
        break
      case "icon2":
        setIconStyles({...iconStyles, icon2: activeStyles2})
        break
      case "icon3":
        setIconStyles({...iconStyles, icon3: activeStyles2})
        break
      case "icon4":
        setIconStyles({...iconStyles, icon4: activeStyles2})
        break
      case "icon5":
        setIconStyles({...iconStyles, icon5: activeStyles2})
        break
      case "icon6":
        setIconStyles({...iconStyles, icon6: activeStyles2})
        break
      case "icon7":
        setIconStyles({...iconStyles, icon7: activeStyles2})
        break
      
      default:
        if (path2 === "/Dashboard"){
          setIconStyles({
            icon1: activeStyles2,
            icon2: defaultStyles2,
            icon3: defaultStyles2,
            icon4: defaultStyles2,
            icon5: defaultStyles2,
            icon6: defaultStyles2,
            icon7: defaultStyles2,
          })
        }else if(path2 === '/order'){
          setIconStyles({
            icon1: defaultStyles2,
            icon2: activeStyles2,
            icon3: defaultStyles2,
            icon4: defaultStyles2,
            icon5: defaultStyles2,
            icon6: defaultStyles2
          })
        }else if (path2 === '/menu'){
          setIconStyles({
            icon1: defaultStyles2,
            icon2: defaultStyles2,
            icon3: activeStyles2,
            icon4: defaultStyles2,
            icon5: defaultStyles2,
            icon6: defaultStyles2,
            icon7: defaultStyles2,
          })
        }else if (path2 === '/wallet'){
          setIconStyles({
            icon1: defaultStyles2,
            icon2: defaultStyles2,
            icon3: defaultStyles2,
            icon4: activeStyles2,
            icon5: defaultStyles2,
            icon6: defaultStyles2,
            icon7: defaultStyles2,
          })
        }else if (path2 === '/support'){
          setIconStyles({
            icon1: defaultStyles2,
            icon2: defaultStyles2,
            icon3: defaultStyles2,
            icon4: defaultStyles2,
            icon5: activeStyles2,
            icon6: defaultStyles2,
            icon7: defaultStyles2,
          })
        }else if (path2 === '/settings'){
          setIconStyles({
            icon1: defaultStyles2,
            icon2: defaultStyles2,
            icon3: defaultStyles2,
            icon4: defaultStyles2,
            icon5: defaultStyles2,
            icon6: activeStyles2,
            icon7: defaultStyles2,
          })
        }else if (path2 === '/shop'){
          setIconStyles({
            icon1: defaultStyles2,
            icon2: defaultStyles2,
            icon3: defaultStyles2,
            icon4: defaultStyles2,
            icon5: defaultStyles2,
            icon6: defaultStyles2,
            icon7: activeStyles2,
          })
        }
    }
  }, [location.pathname, active])

  useEffect(() => {
    const path = window.location.pathname;
    const defaultStyles = { backgroundColor: "none" };
    const activeStyles = { backgroundColor: "#606060",};

    switch (active) {
      case "one":
        setButtonStyles({ ...buttonStyles, one: activeStyles });
        break;

      case "two":
        setButtonStyles({ ...buttonStyles, two: activeStyles });
        break;

      case "three":
        setButtonStyles({ ...buttonStyles, three: activeStyles });
        break;

      case "four":
        setButtonStyles({ ...buttonStyles, four: activeStyles });
        break;
      case "five":
        setButtonStyles({...buttonStyles, five: activeStyles})
        break
      case "six":
        setButtonStyles({...buttonStyles, six: activeStyles})
        break
      case "seven":
        setButtonStyles({...buttonStyles, seven: activeStyles})
        break

      default:
        if (path === "/Dashboard") {
          setButtonStyles({
            one: activeStyles,
            two: defaultStyles,
            three: defaultStyles,
            four: defaultStyles,
            five: defaultStyles,
            six: defaultStyles,
            seven: defaultStyles,
          });
        } else if (path === "/order") {
          setButtonStyles({
            one: defaultStyles,
            two: activeStyles,
            three: defaultStyles,
            four: defaultStyles,
            five: defaultStyles,
            six: defaultStyles,
            seven: defaultStyles,
          });
        } else if (path === "/menu") {
          setButtonStyles({
            one: defaultStyles,
            two: defaultStyles,
            three: activeStyles,
            four: defaultStyles,
            five: defaultStyles,
            six: defaultStyles,
            seven: defaultStyles,
          });
        } else if (path === "/wallet") {
          setButtonStyles({
            one: defaultStyles,
            two: defaultStyles,
            three: defaultStyles,
            four: activeStyles,
            five: defaultStyles,
            six: defaultStyles,
            seven: defaultStyles,
          });
        }else if (path === "/support"){
          setButtonStyles({
            one: defaultStyles,
            two: defaultStyles,
            three: defaultStyles,
            four: defaultStyles,
            five: activeStyles,
            six: defaultStyles,
            seven: defaultStyles,
          })
        }else if(path === '/settings'){
          setButtonStyles({
            one: defaultStyles,
            two: defaultStyles,
            three: defaultStyles,
            four: defaultStyles,
            five: defaultStyles,
            six: activeStyles,
            seven: defaultStyles,
          })
        }
        else if(path === '/shop'){
          setButtonStyles({
            one: defaultStyles,
            two: defaultStyles,
            three: defaultStyles,
            four: defaultStyles,
            five: defaultStyles,
            six: defaultStyles,
            seven: activeStyles,
          })
        }
    }
  }, [location.pathname, active]);

  useEffect(()=>{
    const fetchProfilePic =  async ()=>{
        
      try{
        const response = await fetch('')
        if(response.ok){
          throw new Error('Failed to fetch Profile Image')
        }
        const data = await response.json()
        setProfile(data)
      }
      catch (error) {
        console.error('Error fetching profile data:', error.mssg)
      }
    }
    // fetchProfilePic()
  },[])

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    navigate('/Merchantlogin');
  };


  return (
    <div>
    <div className={click? "overlay1":"not-active"} onClick={handleClick}></div>
     <div className={click? "sidebarsmall active":"sidebarsmall"}>
     <MenuApp className='dashHam' onClick={
        handleClick
      }
      onPointerDown={(e) => {
            e.target.setPointerCapture(e.pointerId);
          }}
      />
      <div className={"navigation"} >
      <div style={{
      display:"inline-flex", 
      justifyContent:'flex-end'}}> <FaCircleXmark 
      style={{color:"#fff"}} 
      onClick={()=>{
        handleClick()
      }}
      onPointerDown={(e) => {
            e.target.setPointerCapture(e.pointerId);
          }}
      /> </div>
      <div className='logobox1'>
        <Link to={'/Dashboard'}>
          <img src={LOGO} alt=''/>
        </Link>
      </div>
        <Link to={'/Dashboard'} className={"list"} onClick={()=>{
          setActive("one line1")
        }}
        style={buttonStyles.one}>
          <LiaHomeSolid className='dashicon' style={iconStyles.icon1} /> <p>Home</p>
        </Link>
        <Link to={'/order'} className={"list"} onClick={()=>{
          setActive("two line2")
        }}
        style={buttonStyles.two}>
         <FaClipboardList className='dashicon' style={iconStyles.icon2}/> <p>Orders</p>
        </Link>
        <Link to={'/menu'} className={"list"}
        onClick={()=>{
          setActive("three line3")
        }}
        style={buttonStyles.three}>
         <SiJusteat className='dashicon' style={iconStyles.icon3} /> <p>Menu</p>
        </Link>

        <Link to={'/wallet'} className={"list"}
        onClick={()=>{
          setActive("four line4")
        }}
        style={buttonStyles.four}>
         <RiWallet3Line className='dashicon' style={iconStyles.icon4}/>  <p>Wallet</p>
        </Link> 

           <Link to={'/shop'} className={"list"} 
        onClick={()=>{
          setActive("seven line7")
        }}
        style={buttonStyles.seven}>  
        <FaPlus className='dashicon' style={iconStyles.icon7}/><p>Shop</p>
        </Link>

      </div>
      
        <div className={"pref"}>
        <Link to={'/support'} className={"list"}
         onClick={()=>{
          setActive("five line5")
        }}
        style={buttonStyles.five}
        >
         <BiSupport className={"dashicon"} style={iconStyles.icon5} /> Support
        </Link>
        <Link to={'/settings'} className={"list"} 
         onClick={()=>{
          setActive("six line6")
        }}
        style={buttonStyles.six}>
        <IoSettingsOutline className={"dashicon"} style={iconStyles.icon6} /> Settings
        </Link>
        <div className={"pp"}>
       
        <Link to={""}>
          <div className={"profilepic"}>
            <img src={""} alt=''/>
          </div>
        </Link>
      <div className={"profiledetials"}>
          <p>{}</p>
          <p className={"username"}>@{}</p>
        </div>
        <Link to={""}>
        <RxExit className={"profileicon"} onClick={logout}/>
        </Link>
        </div>
      </div>  
      </div>
      <div className={"sidebar"}>
      <div className={"navigation"} >
      <div className='logobox1'>
        <Link to={'/Dashboard'}>
          <img src={LOGO} alt=''/>
        </Link>
      </div>
        <Link to={'/Dashboard'} className={"list"} onClick={()=>{
          setActive("one line1")
        }}
        style={buttonStyles.one}>
          <LiaHomeSolid className='dashicon' style={iconStyles.icon1} /> <p>Home</p>
        </Link>
        <Link to={'/order'} className={"list"} onClick={()=>{
          setActive("two line2")
        }}
        style={buttonStyles.two}>
         <FaClipboardList className='dashicon' style={iconStyles.icon2}/> <p>Orders</p>
        </Link>
        <Link to={'/menu'} className={"list"}
        onClick={()=>{
          setActive("three line3")
        }}
        style={buttonStyles.three}>
         <SiJusteat className='dashicon' style={iconStyles.icon3} /> <p>Menu</p>
        </Link>

        <Link to={'/wallet'} className={"list"}
        onClick={()=>{
          setActive("four line4")
        }}
        style={buttonStyles.four}>
         <RiWallet3Line className='dashicon' style={iconStyles.icon4}/>  <p>Wallet</p>
        </Link> 

        <Link to={'/shop'} className={"list"} 
        onClick={()=>{
          setActive("seven line")
        }}
        style={buttonStyles.seven}>  
        <FaPlus className='dashicon' style={iconStyles.icon7} /> <p>Shop</p>
        </Link>

      </div>
      
        <div className={"pref"}>
        <Link to={'/support'} className={"list"}
         onClick={()=>{
          setActive("five line5")
        }}
        style={buttonStyles.five}
        >
         <BiSupport className={"dashicon"} style={iconStyles.icon5} /> Support
        </Link>
        <Link to={'/settings'} className={"list"} 
         onClick={()=>{
          setActive("six line6")
        }}
        style={buttonStyles.six}>
        <IoSettingsOutline className={"dashicon"} style={iconStyles.icon6} /> Settings
        </Link>
        <div className={"pp"}>
       
        <Link to={'/profile'}>
          <div className={"profilepic"}>
            <img src={profile.profilePic} alt=''/>
          </div>
        </Link>
        <Link to={"/profile"}>  
          <div className={"profiledetials"}>
          <p>{profile.fullName}</p>
          <p className={"username"}>{profile.username}</p>
        </div>
        </Link>
        <RxExit className={"profileicon"}  onClick={logout}/>
        </div>
      </div>  
      </div>
    </div>
  )
}

