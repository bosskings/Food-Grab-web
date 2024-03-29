import React, { useState, useEffect } from 'react';
import "./modal.css"
import "../dashboard/dashboard.css"

const OrderModal = ({ data }) => {

  const [click, setClick] = useState(false)
  const [customerAddress, setCustomerAddress] = useState('');
  const [paymentOption, setPaymentOption] = useState('');

  const handleClick = () =>{
    setClick(!click)
  }


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
    <div>
      <div className="modalbox">
      <div className={click? "overlay":"not-active"} onClick={handleClick}></div>
        <div className="customerName">
          <div>
            <h3>Customer Name</h3>
            <p>{data.Customer.id}</p>
          </div>
          <div>
            <h3>Order Id</h3>
            <p>{data.OrderId}</p>
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
          <div>
            {data.orderDetails.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
        <div className="but">
          <button>Confirm Order</button>
          <button>Close</button>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
