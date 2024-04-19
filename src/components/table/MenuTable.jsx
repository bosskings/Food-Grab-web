import React, { useEffect, useState } from 'react'
import './menutable.css'


export const MenuTable = (props) => {
  const {columns, data}= props
  const [checkedItems, setCheckedItems] = useState({});
  const [selectedOption, setSelectedOption] = useState(()=>{
    const savedOption = localStorage.getItem('selectedOption')
    try{
      if (savedOption){
        return savedOption ? JSON.parse(savedOption):setSelectedOption(savedOption)
      }
    }
    catch (error) {
      console.error('Error parsing localStorage data:', error);
      return savedOption;
    }
  })


  const handleOptionChange =(e)=>{
    setSelectedOption(e.target.value)
  }
  useEffect(()=>{
    localStorage.setItem('selectedOption',selectedOption)
  },[selectedOption])

  useEffect(()=>{
    
    
  },[])


  const handleCheckboxChange =(event, id)=>{
    setCheckedItems(prevstate =>({
      ...prevstate,
      [id]: event.target.checked,
    }))
  }

  return (
    <div>
      <table className='menutable1'>
          <thead className={"menucol"}>
            <tr className={"menucolwrapper"}>
            {columns.map((column)=>(
              <th key={column} className={"column"}>
                {column}
              </th>
            ))}
            </tr>
          </thead>
          <tbody className={"rowbd"}>
          {data.map((row)=>(
            <tr key={row.id} className={"row3"}>
            <td>
            <input
                  className={"check"}
                  type='checkbox'
                  checked={checkedItems[row.id] || false}
                  onChange={(e) =>{ handleCheckboxChange(e, row.id)}}
                />
            </td>
           {columns.map((column, index)=>(
            <td key={index} className={"rowCont"}>
            {index===2 && column === "Stock" &&(
              <select className='stock' value={selectedOption} onChange={handleOptionChange}>
                <option value={"In-stock"}>In-Stock</option>
                <option value={"Out of Stock"}>Out of Stock </option>
              </select>
            )}
            {row[column]}
            </td>
           ))}
            </tr>
          ))}
          </tbody>
        </table>
    </div>
  )
}