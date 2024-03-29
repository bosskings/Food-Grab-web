/* eslint-disable no-undef */
import React, { useState } from 'react';
import { OrderItem } from "./OrderItem";
import { Link } from 'react-router-dom';
import "./dropdown.css";

export const Dropdown = ({xPos, yPos  }) => {
  const [click, setClick] =  useState(false);

  const handleClick = () => setClick(!click);

  // const { top, left, height } = parentRef.current.getBoundingClientRect();
  // const xPos = left;
  // const yPos = top + height;

  return (
    <>
      <ul onClick={handleClick} className={click ? "dropdown-menu clicked" : 'dropdown-menu'}
      style={{ top: yPos, left: xPos}}
      >
        {OrderItem.map((item, index) => (
          <li key={index}>
            <Link className={item.cName} to={item.path} onClick={() => { setClick(false) }}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
