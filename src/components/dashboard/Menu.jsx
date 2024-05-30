import React, { useEffect, useState } from 'react'
import "./menu.css"
import { MenuAddDropdown } from './dropdown/MenuAddDropdown'
import { MenuDropdown } from './dropdown/MenuDropdown'
import { FormModal } from '../modal/FormModal'
import { TbCircleDotFilled } from "react-icons/tb";

import gif from '../media/gif2.gif'


export const Menu = () => {
  const [ click, setClick] = useState(true)

  const handleClick = ()=>{
    setClick(!click)
  }

  let [token, setAuthTokens] = useState(()=> localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null)
  

  const [menuData, setMenuData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

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
      


      if(response.status === 200 || response.ok) {
        const data = await response.json()
        setMenuData(data.data)
        setIsLoading(false)
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

          <div className='cusineTitle'>
            <ul>
              <li className=''>Thumbnail</li>
              <li className=''>Menu Name</li>
              <li className='middle'>Menu Price</li>
              <li className='middle'>Status</li>
              <li className='last'>Stock Option</li>
            </ul>
          </div>

          {isLoading === true ? (
              <div className='loaderModal'>
                <span className="loader"></span>
              </div>
          ) : (

            <div className='cusineBody'>
              {menuData.map((data, index)=>(
                <ul key={index}>
                  <p><img src={data.thumbnail} alt=''/></p>
                  <li><TbCircleDotFilled className='ics'/>{data.name}</li>
                  <li className='middle'>₦ {data.price}</li>
                  <li className='middle' id='mystatus'>{data.status}</li>
                  
                  <select className='last'>
                    <option value="">In-Stock</option>
                    <option value="">Out-Of-Stock</option>
                  </select>
                  
                </ul>
              ))}
            </div>
          )}


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


