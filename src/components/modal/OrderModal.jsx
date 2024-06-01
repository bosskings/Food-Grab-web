import React, { useState, useEffect } from 'react';
import "./modal.css"

const OrderModal = ({row, selectedItem}) => {


  const [click, setClick] = useState(false)
  // const [closeModal, setCloseModal] = useState("modall")
  const [customerDetials, setCustomerDetials] = useState('');
  const [token, setAuthTokens]= useState(()=> localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null)

  const handleClick = () =>{
    setClick(!click)
  }
  // const handleCloseModal =()=>{
  //   setCloseModal()
  // }


  useEffect(() => {
    const fetchCustomerDetails = async () => {
      try {
        const response = await fetch(`https://api.foodgrab.africa/merchants/api/v1/getOrders`,{
          headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token.token}`
          }
        }
        );
        if (!response.ok){
          throw new Error('failed to fetch customer details')
        }
        const data = await response.json();
        setCustomerDetials(data);
        console.log('Response Data:', response)

      } catch (error) {
        console.error('Error fetching customer details:', error);
      }
    };

    fetchCustomerDetails();
  }, []);

  useEffect(()=>{
    const updateStatus = async()=>{
      const response = await fetch('',{
        headers:{
          'Content-Type':'application/json',
          'Authorization': `Bearer ${token.token}`
        }
      }) 
    }
  })

  return (
    <div className={click ?"not-active" :'modall'}>
    <div className={click ? "not-active":"overlay"} onClick={handleClick}></div>
      <div className={click ? "not-active" : "modalbox"}>
        <div className="customerName">
          <div>
            <h3>Customer Name</h3>
            <p>{row && row.Customer ?  row.Customer : 'No customer data' }</p>
          </div>
          <div>
            <h3>Order Id</h3>
            <p>{row && row['Order ID'] ? row['Order ID'] :'No order id' }</p>
          </div>
        </div>
        <div className="customerAdd">
        <div>
            <h3>Customer Address</h3>
            <p>{customerDetials.customerAddress}</p>
          </div>
          <div>
            <h3>Payment Option</h3>
            <p>{customerDetials.paymentOption}</p>
          </div>
        </div>
          <div className="orderDet">
          <h3>Ordered Items</h3>
          <div className={"orderdetailcontent"}>
            {row && row.Product && Array.isArray(row.Product) ? (
              row.Product.map((product, index) => (
                <div key={index} className={"rwprod"}>
                  <span>{product}</span>
                  <span>{row.Price && row.Price[index] ? ` - $${row.Price[index]}` : 'no price data'}</span>
                </div>
              ))
            ) : (
              <span>No product data</span>
            )}
          </div>
          <div className={"quantity"}>
          <p>Quantity</p>
          <p> {row && row.Quantity ? row.Quantity : 'Nill'} </p>
          </div>
          <div className={"total"}>
          <h3>Total</h3>
          <p>{customerDetials.total}</p>
          </div>
          </div>
        <div className="but">
        {selectedItem && selectedItem.title !== 'View Details' && 
        (<button type='submit'>Confirm</button>)
        }
          
          <button onClick={handleClick}>Close
          {click && "not-active"}
          </button>
        </div>
      </div>
      </div>
  );
};

export default OrderModal;
