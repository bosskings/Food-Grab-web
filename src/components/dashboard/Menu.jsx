import React, { useRef } from 'react'
import "./menu.css"
import { MenuAddDropdown } from './dropdown/MenuAddDropdown'
import { MenuDropdown } from './dropdown/MenuDropdown'
import { FormModal } from '../modal/FormModal'
import { TbCircleDotFilled } from "react-icons/tb";


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

            <button>Add Cusines</button>
          </div>




          <div className='cusineTitle'>
            <ul>
              <li>Menu Name</li>
              <li className='middle'>Menu Price</li>
              <li className='last'>Menu State</li>
            </ul>
          </div>


          <div className='cusineBody'>
            <ul>
              <li><TbCircleDotFilled className='ics'/>Fried Rice</li>
              <li className='middle'>₦ 3,500.00</li>
              <select className='last'>
                <option value="">In-Stock</option>
                <option value="">Out-Of-Stock</option>
              </select>
            </ul>
          </div>

          {/* <div className={'secondsec'}>
            <MenuDropdown />
          </div> */}

        </div>
      </section>
    </div>
  )
}


