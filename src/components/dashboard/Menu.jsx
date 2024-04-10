import React, { useRef } from 'react'
import "./menu.css"
import { MenuAddDropdown } from './dropdown/MenuAddDropdown'

export const Menu = () => {
  const dropdownRefs=useRef([])

  const handleDropdownItemClick = (index) => {
    dropdownRefs.current[index].current.handleOpenModal();
  };

  return (
    <div className='menu'>
      <section className={"menusec1"}>
        <p className={"txt2"}>Food Menu</p>
      </section>
      <section className={"menusec2"}>
      <div className={"menubox"}>
      <div className={"firstsec"}>
      <p>My Menu</p>
      <MenuAddDropdown onDropdownItemClick = {() => handleDropdownItemClick()} />
      </div>
      <div className={'secondsec'}>
      
      </div>
      </div>
      </section>
    </div>
  )
}


