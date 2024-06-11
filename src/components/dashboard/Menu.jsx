import React, { useEffect, useState } from 'react'
import "./menu.css"
import { MenuAddDropdown } from './dropdown/MenuAddDropdown'
import { MenuDropdown } from './dropdown/MenuDropdown'
import { FormModal } from '../modal/FormModal'
import { TbCircleDotFilled } from "react-icons/tb";

import gif from '../media/gif2.gif'
import { MenuTable } from '../table/MenuTable'

const column = ['Thumbnail','Menu Name','Menu Price','Status','Stock Option']
export const Menu = () => {
  const [ click, setClick] = useState(true)

  const handleClick = ()=>{
    setClick(!click)
  }

  let [token, setAuthTokens] = useState(()=> localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null)
  

  const [menuData, setMenuData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [thumbnails, setThunbnails]= useState({})

  const url = 'https://api.foodgrab.africa/merchants/api/v1/getCuisine' 

  const getMenuData = async () => {
    setIsLoading(true)
    try {
      const response = await fetch (url, {
        method: 'GET',
        headers : {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token.token}`

        }
      })
      
      setIsLoading(false)
      if(response.status === 200 || response.ok) {
        const data = await response.json()
        const formattedData = data.data.map(cuisine=>({
          id: cuisine._id, 
          'Menu Name': cuisine.name, 
          'Menu Price': cuisine.price.toLocaleString(), 
          Status: cuisine.status,
        }))
        const imageMap = {};
        data.data.forEach(item => {
          imageMap[item._id] = item.thumbnail;
        });
        setMenuData(formattedData)
        setThunbnails(imageMap)

        }

      else{
        console.log('There was an error');
      }
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(()=>{
    getMenuData();
  }, [])


console.log(menuData);

  return (
    <div className='menu'>
      <section className={"menusec1"}>
        <p className={"txt2"}>Food Menu</p>
      </section>

      
      <section className={"menusec2"}>
        <div className={"menubox"}>

          <div className={"firstsec"}>
            <p>My Menu</p>
            <button onClick={handleClick}>Add Cusines</button>
          </div>

          <MenuTable columns={column} data={menuData} thumbnails={thumbnails} />

          {menuData.length === 0 && (
            <div className='noData'>
              No Data Found
              <img src={gif} alt="" />
            </div>
          )}

          <FormModal click={click} setClick={setClick} handleClick={handleClick}/>
        </div>
      </section>
    </div>
  )
}


