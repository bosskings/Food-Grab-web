import React, { useEffect, useState } from 'react';
import "./formmodal.css";
import { Link, json, useNavigate } from 'react-router-dom';
import { FaCircleCheck } from "react-icons/fa6";


export const UpdateCuisineModal = ({ click, handleClick ,setRefresh, rowId}) => {

  const navigate = useNavigate()

  const [show, setShow] = useState(false)

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
;
  const [token] = useState(() => localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null);

  useEffect(() => {
    const fetchCuisineDetails = async () => {
      const url = `https://api.foodgrab.africa/merchants/api/v1/getCuisine`
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token.token}`
          }
        });
        if (response.ok) {
          const data = await response.json();
          const cuisine = data.data.find(cuisine => cuisine._id === rowId); // Find the specific cuisine
          if (cuisine) {
            setName(cuisine.name);
            setDescription(cuisine.description);
            setPrice(cuisine.price);
            setThumbnail(cuisine.thumbnail); 
          }
        } else {
          console.error('Failed to fetch cuisine details');
        }
      } catch (error) {
        console.error('Error fetching cuisine details:', error);
      }
    };

    if (rowId) {
      fetchCuisineDetails();
    }
  }, [rowId, token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const url = `https://api.foodgrab.africa/merchants/api/v1/updateCuisine/${rowId}`


    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('thumbnail', thumbnail);

    try {
      const response = await fetch(url, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token.token}`,
          'Content-Type': 'application/json'
        },
        body : formData
      });

      if (response.ok || response.status === 'SUCCESS') {
        const data = await response.json();
        console.log(data);
        localStorage.setItem('updateCus', "true")
        localStorage.setItem('mssg', JSON.stringify('Cuisine updated Successfully'))
        console.log('Cuisine updated Successfully');
        navigate('/menu')
        setShow(true);
        handleClick()
        setRefresh(prev => !prev)

      } else {
        console.log('There was an error');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log('rowId:', rowId);
  }, [rowId]);

  return (
    <div>
      <div className={click ? "not-active" : "menumodal"}>
        <div className={click ? "not-active" : "overlay"} onClick={handleClick}></div>

        <div className={click ? "not-active" : "formModal"}>
          <div>
            <h3 className='txt2'>Add New Food</h3>
            <p>Add the Name and Price Of the food</p>
          </div>

          <form className='modalForm' onSubmit={handleSubmit} method='POST'>
            <label>Name</label>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Food Name'
              required
            />

            <label>Price</label>
            <div className={"numHold"}>
              <input
                type='number'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder='0.00'
                required
              />
            </div>

            <label>Cuisine Image</label>
            <div className={"numHold"}>
              <input
                type='file'
                onChange={(e) => setThumbnail(e.target.files[0])}
              />
            </div>

            <label>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder='Write a short description'
              required
            />

            <div className={"buttn"}>
              <button type='submit' className={"buttn1"}>
                {isLoading ? 'Loading . . .' : 'Save'}
              </button>
              <div className={"c"} onClick={handleClick}>Close</div>
            </div>
          </form>
        </div>
      </div>

      {show === true && <SuccessModal show={show} setShow={setShow}/>}
    </div>
  );
};




const SuccessModal = ({show, setShow, setRefresh}) => {
  const navigate = useNavigate()

  const handleNavigate = ()=>{
    navigate('/menu')
    setRefresh(prev => !prev)
  }

  
  return (
    <div>
    <div className={"overlay"} onClick={setShow}></div>
      <div className='successmodal'>
        <p><FaCircleCheck /></p>
          <h2>Menu Updated</h2>
          <div className='btnsM'>
            <Link to={'/menu'} onClick={()=>{setShow(false)}} > <button className='bbns'>Menu</button></Link>
            <button onClick={()=>{setShow(false); handleNavigate()}}>Close</button>
          </div>
      </div>
    </div>
  )
}

export default SuccessModal
