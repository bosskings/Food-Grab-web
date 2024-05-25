import React, { useRef, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "./menuadd.css"



export const MenuAddDropdown = ({parentRef, modalComponent}) => {
  const [click, setClick] = useState(false)
  const [open, setOpen] = useState(false)
  const dropdownMenuRef = useRef(null);

  const dpItems = [
    {
    title: "Add new foods",
    path: "",
    cName: "dropdown-link",
  },  
]

  const handleClick = ()=>{
    setClick(!click);
    setOpen(false)
  }

  const handleOpen = ()=>{
    setOpen(!open)
  }
  return (
    <div>
    <div className={"dpbox2"}>
    <div className={"dropbox2"} onClick={handleClick}>
      Add to Menu <FaChevronDown />
    </div>
    {click &&(
      <ul 
      ref={dropdownMenuRef}
      className="dropdown-menu2"
      style={{top:parentRef ? parentRef.current.getBoundingClientRect().top+parentRef.current.getBoundingClientRect().height:40,left : parentRef ? parentRef.current.getBoundingClientRect().left:3}}
      >
      {dpItems.map((item, index)=>(
        <li key={index} onClick={()=>{handleClick(); handleOpen()}}>
        <Link className={item.cName} to={item.path}>
        {item.title}
        </Link>
        </li>
      ))}
      </ul>
    )
    }
    </div>
    {open && (
      <div>
      {modalComponent}
      </div>
      )
    }
    </div>
  )
}