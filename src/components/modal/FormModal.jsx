import React, { useState } from 'react'
import "./formmodal.css"

export const FormModal = () => {
  const [ click, setClick] = useState(false)
  const handleClick = ()=>{
    setClick(!click)
  }

  return (
    <div>
    <div className={click ? "not-active":"overlay"} onClick={handleClick}></div>
      <div className={click ? "not-active" : "formModal"}>
       <div>
       <h3 className='txt2'> Add New Food</h3>
        <p>Add the Name and Price Of the food</p>
       </div>
        <form 
        className='modalForm'
        onSubmit={""}
        method='POST'>
        <label>
          Name
        </label>
        <input 
          type='text'
          placeholder='Food Name'
        />

        <label>Description</label>
        <textarea 
        placeholder='write a short descripton'
        />
        <label>Price</label>
        <div className={"numHold"}>
        <p className='fl'>N</p>
        <input 
        className={"priceinput"}
          type='text'
          placeholder='0.00'
        />
        </div>
       
        <div className={"buttn"}>
          <button type='submit' className={"buttn1"}>
            Save
          </button>
          <button className={"buttn1 c"}>
            Close
          </button>
        </div>
        </form>
      </div>
    </div>
  )
}