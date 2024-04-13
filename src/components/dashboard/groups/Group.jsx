import React, { useState } from 'react'
import { FaChevronDown } from "react-icons/fa6";
import { FiMoreVertical } from "react-icons/fi";
import "./group.css"
import { MenuTable } from '../../table/MenuTable';


const columns=['Product', 'Price', 'Stock']

const data= [
  {id: 1, Product: "Poridge Yam", Price: '# 2,000'},
  {id: 2, Product: "Poridge Yam", Price: '# 2,000'},
]

const Group = ({parentRef}) => {
  const [click, setClick] = useState(false)
  // const [openSub, setOpenSub] = useState(false)
  const [image, setImage] = useState(null)

  const handleClick =()=>{
    setClick(!click)
  }
  // const handleOpenSub =()=>{
  //   setOpenSub(!openSub)
  // }
  
  const handleImageChange = (e)=>{
    const file = e.target.files[0]
    setImage(file)
  }

  // const SubTable = ({row})=>{
  //   const [checked, setChecked] = useState({})

  //   const handleChecked = (event, id)=>{
  //     setChecked(prevstate =>({
  //       ...prevstate,
  //       [id]: event.target.checked,
  //     }))
  //   }

  //   return(
  //     <div className={"subbox"}>
  //     <div className={"subdp"}>
  //     <div className={'div2'}>
  //     <input type='checkbox' onClick={handleChecked} 
  //     />
  //       <FaChevronDown onClick={handleOpenSub} className={"dp"}/>
  //       <p className={"dp"} onClick={handleOpenSub}>Drinks</p>
  //     </div>
  //     <div>
  //     <select className='stock'>
  //       <option>In-Stock</option>
  //       <option>Out of Stock </option>
  //     </select>
  //     </div>
  //     </div>
  //     {openSub && (
  //       <MenuTable columns={columns} data={data}/>
  //     )      
  //     }
  //     </div>
  //   )
  // }

  return (
    <div className={"groupbox"}>
    <div className={"groupdp"}>
    <div className={"firstdiv"}>
    <FaChevronDown className={click ? "open" : ""} onClick={handleClick}/> 
    {image ? <img src={URL.createObjectURL(image)} alt='' className={'groupimg'}/>:<img src={""} alt='' className={'groupimg'}/>}
    <p className={"openMenu"} onClick={handleClick}>My Menu</p>
    </div>
    <div>
    <FiMoreVertical/>
    </div>
    </div>
    {click && (
        <div className={"grouploader"} style={{top:parentRef ? parentRef.current.getBoundingclient().top+parentRef.current.getBoundingclient().height:0,left : parentRef ? parentRef.current.getBoundingclient().left :0}}>
          <MenuTable columns={columns}data={data}/>
        </div>
      )
      }
    </div>
  )
}

export default Group
