import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import "./dropdown.css"

export const Dropdown = ({ parentRef, rowData, modalComponent, dropdownItems }) => {
  const [click, setClick] = useState(false);
  const [open,setOpen]= useState(false)
  const [selectedItem, setSelectedItem] = useState(null);
  const dropdownMenuRef = useRef(null);

  
  const handleOpen = ()=>{
    setOpen(!open) 
  }
  const handleDropdown = () => {
    setClick(!click);
    setOpen(false)
  };

  const handleItemClick = (item) => {
    setSelectedItem(item)
    setClick(false);
    handleOpen()
  };

  // const OrderItem = [
  //   {
  //     title: 'View Details',
  //     path: "",
  //     cName: 'View Details'
  //   },
  //   {
  //     title: 'Confirm Order',
  //     path: "",
  //     cName: 'Confirm Order'
  //   }
  // ];
  return (
    <div className='dpbox'>
      <div className={'dropbox'} onClick={handleDropdown}>
        More <FaChevronDown />
      </div>
      {click && (
        <ul
          ref={dropdownMenuRef}
          className="dropdown-menu"
          style={{ top: parentRef ? parentRef.current.getBoundingClientRect().top + parentRef.current.getBoundingClientRect().height : 13,left: parentRef ? parentRef.current.getBoundingClientRect().left :-25 }}
          >
          {dropdownItems.map((item, index) => (
            <li key={index} onClick={()=>{handleItemClick(item)}}>
              <Link className={item.cName} to={item.path}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul> 
      )}
      {open && rowData && (
        <div className="modal-overlay">
          <div className="modal-content">
            {rowData && React.cloneElement(modalComponent, { data: rowData, selectedItem })}
          </div>
        </div>
      )}
    </div>
  );
};

