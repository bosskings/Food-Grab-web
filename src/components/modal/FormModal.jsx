import React, { useState } from 'react';
import "./formmodal.css";

export const FormModal = ({ click, handleClick }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const url = 'https://api.foodgrab.africa/merchants/api/v1/createCuisine';
  const [token] = useState(() => localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    // if (image) {
    //   formData.append('image', image);
    // }

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token.token}`,
          'Content-Type': 'application/json'
        },
        body : JSON.stringify({
          name: name,
          price : price,
          description : description,
          // thumbnail : thumbnail
      })
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        console.log('Cuisine Created Successfully');
      } else {
        console.log('There was an error');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

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
    </div>
  );
};
