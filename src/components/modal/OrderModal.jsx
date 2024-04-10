import React, { useState, useEffect } from 'react';
import "./modal.css"

const OrderModal = ({row}) => {


  const [click, setClick] = useState(false)
  // const [closeModal, setCloseModal] = useState("modall")
  const [customerAddress, setCustomerAddress] = useState('');
  const [paymentOption, setPaymentOption] = useState('');

  const handleClick = () =>{
    setClick(!click)
  }
  // const handleCloseModal =()=>{
  //   setCloseModal()
  // }


  useEffect(() => {
    const fetchCustomerDetails = async () => {
      try {
        const addressResponse = await fetch('CUSTOMER_ADDRESS_API_ENDPOINT');
        const addressData = await addressResponse.json();
        setCustomerAddress(addressData.address);

        const paymentResponse = await fetch('PAYMENT_OPTION_API_ENDPOINT');
        const paymentData = await paymentResponse.json();
        setPaymentOption(paymentData.paymentOption);
      } catch (error) {
        console.error('Error fetching customer details:', error);
      }
    };

    fetchCustomerDetails();
  }, []);

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
            <p>{customerAddress}</p>
          </div>
          <div>
            <h3>Payment Option</h3>
            <p>{paymentOption}</p>
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
          </div>
          </div>
        <div className="but">
          <button>Confirm Order</button>
          <button onClick={handleClick}>Close
          {click && "not-active"}
          </button>
        </div>
      </div>
      </div>
  );
};

export default OrderModal;
