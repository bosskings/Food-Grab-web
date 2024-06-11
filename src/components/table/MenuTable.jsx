import React, { useEffect, useState } from 'react'
import './menutable.css'


export const MenuTable = (props) => {
  const {columns, data, thumbnails}= props
  // const [thumbnail, setThumbnail]= useState({})
  // const [token, setAuthTokens]=useState(()=> localStorage.getItem('token')? JSON.parse(localStorage.getItem('token')):null)
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


  // useEffect(() => {
  //   const fetchProductImages = async () => {
  //     try {
  //       const response = await fetch(`https://api.foodgrab.africa/merchants/api/v1/getCuisine`,{
  //         headers:{
  //           'Content-Type': 'application/json',
  //           'Authorization': `Bearer ${token.token}`
  //         }
  //       });
  //       const imageData = await response.json();
  //       const imageMap = {};
  //       imageData.data.forEach(item => {
  //         imageMap[item.id] = item.thumbnail;
  //       });
  //       setThumbnail(imageMap);
  //     } catch (error) {
  //       console.error('Error fetching product images:', error);
  //     }
  //   };

  //   fetchProductImages();
  // }, []);

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
           {columns.map((column, index)=>(
            <td key={`${row.id}-${index}`} className={"rowCont"}>
            {index===0 && column === 'Thumbnail' && (
              <>
                      {thumbnails[row.id] ? (
                        <div className={"thumbpics"}>
                        <img src={thumbnails[row.id]} alt='thumbnail' />
                        </div>
                      ):(
                        <span>No Image</span>
                      )}
                    </>
              
            )}
            {index===4 && column === "Stock Option" &&(
              <select className='stock' value={selectedOption} onChange={handleOptionChange}>
                <option value={"In-stock"}>In-Stock</option>
                <option value={"Out of Stock"}>Out of Stock </option>
              </select>
            )}
            {column !== 'Thumbnail' && column !== 'Stock Option' && row[column]}
            </td>
           ))}
            </tr>
          ))}
          </tbody>
        </table>
    </div>
  )
}