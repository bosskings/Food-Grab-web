import React, { useEffect, useState } from 'react'
import "./wallet.css"
import { RiInformationFill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";
import { WitdhrawalModal } from '../modal/WitdhrawalModal';
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import { FaStarOfLife } from "react-icons/fa";

const data = [
  {Customer: "Kingsley temi", PaymentStatus : "Rceieved", Price:"1500", Date: "March 05 2024", Time : "02:00PM"},
  {Customer: "Kingsley temi", PaymentStatus : "Withdrawn", Price:"1500", Date: "April 15 2024", Time : "02:00PM"},
  {Customer: "Kingsley temi", PaymentStatus : "Withdrawn", Price:"1500", Date: "April 16 2024", Time : "02:00PM"},
]

export const Wallet = () => {
  const [timeFrame, setTimeFrame] = useState('Today');
  const [show, setShow] = useState(false)
  const [click, setClick] = useState(() => {
    const savedVisibility = localStorage.getItem('balanceVisibility');
    try {
      return savedVisibility ? JSON.parse(savedVisibility) : true;
    } catch (error) {
      console.error('Error parsing localStorage data:', error);
      return true;
    }
  });

  const handleClick = ()=>{
    setClick(!click)
  }
  const handleShow =() =>{
   setShow(!show)
  }

  useEffect(() => {
    localStorage.setItem('balanceVisibility', JSON.stringify(click));
  }, [click]);
  
  const DAY_IN_A_WEEk = 7;

  const isSameDay = (date1, date2) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  const handleTimeFrameChange = (e) => {
    setTimeFrame(e.target.value);
  };
   const filterData = data.filter((transaction)=>{
    const transactionDate = new Date(transaction.Date)


    if (timeFrame === 'Today'){
     const today = new Date()
     return isSameDay(transactionDate, today)
    }else if (timeFrame === 'Yesterday') {
      const yesterday = new Date()
      yesterday.setDate(yesterday.getDate() -1)
      return isSameDay(transactionDate, yesterday)
    } else if (timeFrame === 'Last 1 Week') {
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - DAY_IN_A_WEEk);
      return transactionDate >= oneWeekAgo;
    } else if (timeFrame === 'Older') {
      const older = new Date();
      older.setDate(older.getDate() - DAY_IN_A_WEEk)
      return transactionDate <= older;
    }
   })

  const updateCredit = (value)=>{
    if(value === 'Rceieved'){
      return "arrowdiv"
    } else if (value === 'Withdrawn'){
      return "withdrawndiv"
    }
  }

  return (
    <div className='wallet'>
      <section className={"walletsec1"}>
        <p className={"txt2"}>Wallet</p>
      </section>
      <section className={"walletsec2"}>
        <div className={"firstq"}>
        <div className="cy">
        <div className={"avialableblance"}>  <p className='init1'>Available Balance </p>
        <div className='eye3' onClick={()=>{handleClick();}}>
          <FaRegEyeSlash  className={click ? "not-active":"eyeslash"}/>
          <FaRegEye className={click ? "active":"eyenot-slash"}/>
        </div>
        </div>
        <div className={"activediv"}>
        {click ? 
        (<div className={"active11"}>
            <h3 className='money'>₦ 140,000<span>.00</span> </h3>
            <div className='balance'>
            {/* <p>Payout Balance:</p><span>$139,900.99</span> <RiInformationFill className={"balicon"}/> */}
            </div> 
           </div>
          ):(
            <div className={"star"}>
            <FaStarOfLife/>
            <FaStarOfLife/>
            <FaStarOfLife/>
            <FaStarOfLife/>
            <FaStarOfLife/> 
            </div> 
          )}
          </div> 
      </div>
          <div className={"withdrawButton"}>
            <button className={"withdraw"} onClick={()=>{handleShow()}}> Withdraw</button>
          </div>
        </div>

        <div className='History'>
          <div className={"tsfirstsec"}>
            <p className={"txt2"}>Transactions</p>
            <select className={"tranHistory"} value={timeFrame} onChange={handleTimeFrameChange}>
              <option value={"Today"}>
                Today
              </option>
              <option value={"Yesterday"}>
                Yesterday
              </option>
              <option value={"Last 1 Week"}>
              Last 1 Week
              </option>
              <option value={"Older"}>
                Older
              </option>
            </select>
          </div>
          <div className={'tssecondsec'}>
            {filterData.map((Transaction, index)=>(
              <div className={"historyCont"}>
              
              <div key={index}>
              <div className={"transactiondiv"}>
              <div  className={updateCredit(Transaction.PaymentStatus)}> <FaArrowRight/> </div>
              <div>
              <p className={"customerId"}>  {Transaction.Customer} </p>
              <p className={"alertStatus"}> {Transaction.PaymentStatus} </p>
              </div>
              </div>
              </div>
              <div>
              <p className={"price"}>  {Transaction.Price} </p>
              <p className={"dateTime"}> {Transaction.Date} @ {Transaction.Time} </p>
              </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className={show ? "overlay":"not-active"} onClick={handleShow}></div>
      {show &&  <WitdhrawalModal/>}
    </div>
  )
}