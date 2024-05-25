import React, { useRef } from 'react'
import "./menu.css"
import { MenuAddDropdown } from './dropdown/MenuAddDropdown'
import { MenuDropdown } from './dropdown/MenuDropdown'
import { FormModal } from '../modal/FormModal'

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

            {/* <MenuAddDropdown onDropdownItemClick = {() => handleDropdownItemClick()} 
              modalComponent={<FormModal />}
            /> */}

            <button></button>
          </div>




          <div>
              <ul>
                <li>Menu Name</li>
                <li>Menu Price</li>
                <li>Menu State</li>
              </ul>
          </div>

          <div className={'secondsec'}>
            <MenuDropdown />
          </div>

        </div>
      </section>
    </div>
  )
}


