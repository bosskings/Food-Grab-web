import React, { useState, useEffect } from 'react'
import { FaChevronDown } from "react-icons/fa6";
import { FiMoreVertical } from "react-icons/fi";
import "./group.css"
import { MenuTable } from '../../table/MenuTable';
import Menu from "../../media/Menu.jpg"


const columns=['Product', 'Price', 'Stock']

// const data = [{Product: "yam", Price: "300"}]

const Group = ({parentRef}) => {
  const [click, setClick] = useState(true)
  const [tableData, setTableData] = useState([]);
  // const [openSub, setOpenSub] = useState(false)
  // const [image, setImage] = useState(null)
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('YOUR_ENDPOINT');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setTableData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleClick =()=>{
    setClick(!click)
  }


  // const handleOpenSub =()=>{
  //   setOpenSub(!openSub)
  // }
  
  // const handleImageChange = (e)=>{
  //   const file = e.target.files[0]
  //   setImage(file)
  // }
  // URL.createObjectURL(image)

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

  const NoData = ()=>{
    return(
      <div className={"nodatcont"}>
      <div className={"noDataImage"}>
      <img src={Menu} alt=''/>
      </div>
      <p className={"mssg"}> No Menu Data Please Add A Meal...</p>
      </div>
    )
  }

  return (
    <div className={"groupbox"}>
    <div className={"groupdp"}>
    <div className={"firstdiv"}>
    <FaChevronDown className={click ? "" : "open"} onClick={()=>{handleClick()}}/> 
    {<img src={""} alt='' className={'groupimg'}/>}
    <p className={"openMenu"} onClick={handleClick}>My Menu</p>
    </div>
    <div>
    <FiMoreVertical/>
    </div>
    </div>
    {click && (
        <div className={"grouploader"} style={{top:parentRef ? parentRef.current.getBoundingclient().top+parentRef.current.getBoundingclient().height:0,left : parentRef ? parentRef.current.getBoundingclient().left :0}}>{
          tableData.length > 0 ?  <MenuTable columns={columns} data={tableData}/> : <NoData />
        }
        </div>
      )
      }
    </div>
  )
}

export default Group
