import React, { useEffect, useState } from 'react'
import './menutable.css'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { json, useNavigate } from 'react-router-dom';
import { UpdateCuisineModal } from '../modal/UpdateCuisineModal';


export const MenuTable = (props) => {
  const {columns, data, thumbnails, setRefresh}= props
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false)
  const [deleteRowId, setDeleteRowId] = useState(null);
  const [token, setAuthTokens]=useState(()=> localStorage.getItem('token')? JSON.parse(localStorage.getItem('token')):null)
  const [selectedOption, setSelectedOption] = useState(()=>{
    const savedOption = localStorage.getItem('selectedOption')
    try{
      if (savedOption){
        return savedOption ? JSON.parse(savedOption):{}
      }
    }
    catch (error) {
      console.error('Error parsing localStorage data:', error);
      return {};
    }
  })


  const handleOptionChange = async (e,rowId)=>{
    const newStatus = e.target.value
    const newOptions = {
      ...selectedOption,
      [rowId]:e.target.value,
    };
    setSelectedOption(newOptions)
    const url2 =`https://api.foodgrab.africa/merchants/api/v1/updateCuisine/${rowId}`

    try{
      const response = await fetch(url2,{
        method:'PATCH',
        headers:{
          'Content-Type': 'applicaton/json',
          'Authorization': `Bearer ${token.token}`
        },
        body: JSON.stringify({
          status:newStatus
        })
      })
      const statusData = await response.json()
      if (!response.ok){
        throw new Error('Failed to update stock status')
      }

      setRefresh(prev=>!prev)
      localStorage.setItem("Stats", "true")
      localStorage.setItem("mssg",JSON.stringify(statusData.mssg))
    }
    catch (error){
      console.error('Error updating stock status:', error)
    }
  }
  useEffect(() => {
    localStorage.setItem('selectedOption', JSON.stringify(selectedOption));
  }, [selectedOption]);

  const handleDelete = async (rowId)=> {
    const url =`https://api.foodgrab.africa/merchants/api/v1/deleteCuisine/${rowId}`

    try{
      const response = await fetch(url, {
        method: 'DELETE',
        headers:{
          'Authorization': `Bearer ${token.token}`
        }
      })
      const deleteCus = await response.json()
      if (!response.ok){

        throw new Error("delete cuisine failed")
      }

            

      console.log(deleteCus)
      localStorage.setItem("deleteCuisine", "true")
      localStorage.setItem("mssg",JSON.stringify(deleteCus.mssg))
      showDeleteModal(false)
      setRefresh(prev => !prev)
    }
    catch (error){
      console.log(error)
    }
  }
  const confirmDelete = (rowId) => {
    setDeleteRowId(rowId);
    setShowDeleteModal(true);
  };

  const handleEdit = ()=>{
    setShowEditModal(true)
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
              <select className='stock' value={selectedOption[row.id] || row.Status} onChange={(e)=>handleOptionChange(e, row.id)}>
                <option value={"In-stock"}>In-Stock</option>
                <option value={"Out of Stock"}>Out of Stock </option>
              </select>
            )}
            {column !== 'Thumbnail' && column !== 'Stock Option' && row[column]}
            {index ===5 && column === "Edit" && (
              <div className={'editMenu'}>
              <RiDeleteBin6Line className={'icon del'} onClick={()=> confirmDelete(row.id)}/>
              <FaEdit className={'icon edi'} onClick={()=> handleEdit(row.id)}/>
              </div>
            )}
            </td>
           ))}
            </tr>
          ))}
          </tbody>
        </table>

        {showDeleteModal && (
        <Delete
          onConfirm={() => {
            handleDelete(deleteRowId);
            setShowDeleteModal(false);
          }}
          onCancel={() => setShowDeleteModal(false)}
        />
      )};

      {showEditModal && (
        <UpdateCuisineModal handleClick={()=> setShowEditModal(false)} />
      )}

        
    </div>
  )
}


const Delete = ({onCancel, onConfirm, setRefresh})=>{
  const navigate = useNavigate()
  const handleNavigate = ()=>{
    navigate('/menu')
    setRefresh(prev => !prev)
  }
  return(
    <div>
    <div className={"overlay"} onClick={onCancel}></div>
      <div className={"delModal"}>
        <p>Delete Cuisine</p>
        <div className={"buttonDiv"}>
        <button onClick={()=>{onConfirm();handleNavigate()}}>Delete</button>
        <button onClick={onCancel}>Cancle</button>
        </div>
      </div>

    </div>
  )
}