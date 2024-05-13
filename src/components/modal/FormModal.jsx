import React, { useEffect, useState } from 'react'
import "./formmodal.css"

export const FormModal = () => {
  const [ click, setClick] = useState(false)
  const [food, setFood] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const handleClick = ()=>{
    setClick(!click)
  }

    const handleSubmit = async (e)=>{
      e.preventDefault();
     
      try{
        const response = await fetch('lksdlsak',{
      
          method:'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({food, description, price})
        })
        if (response.ok || response.status === 200){
          const data = await response.json()
          console.log(data)
        }else{
          const data = await response.json();
          // setError(data.message)
        }
      }
    catch (error) {
      console.error('Error:', error);
        // setError('An error occurred while logging in.')
    }
  }


  return (
    <div className={click ? "not-active":"menumodal"}>
    <div className={click ? "not-active":"overlay"} onClick={handleClick}></div>
      <div className={click ? "not-active" : "formModal"}>
       <div>
       <h3 className='txt2'> Add New Food</h3>
        <p>Add the Name and Price Of the food</p>
       </div>
        <form 
        className='modalForm'
        onSubmit={handleSubmit}
        method='POST'>
        <label>
          Name
        </label>
        <input 
          type='text'
          name={"food"}
          placeholder='Food Name'
        />

        <label>Description</label>
        <textarea 
        name={"description"}
        placeholder='write a short descripton'
        />
        <label>Price</label>
        <div className={"numHold"}>
        <h6 className={'fl'}>N</h6>
        <input 
          type='text'
          name={"price"}
          placeholder='0.00'
        />
        </div>
       
        <div className={"buttn"}>
          <button type='submit' className={"buttn1"}>
            Save
          </button>
          <div className={"c"} onClick={handleClick}>
            Close
          </div>
        </div>
        </form>
      </div>
    </div>
  )
}