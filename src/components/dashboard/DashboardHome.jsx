import React, {useEffect, useState}from 'react'
import "./dashboard.css"
import BOXES from "../media/boxes.png"
// import { RiInformationFill } from "react-icons/ri";
import { FaChevronRight } from "react-icons/fa6";
import { Table } from '../table/Table';
// import axios, { all } from 'axios';
import { XCircle } from 'react-bootstrap-icons';
import { Swiper, SwiperSlide } from 'swiper/react';


import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCube, Pagination, Navigation, Autoplay, } from "swiper/modules";


// const data = [
//   {id:1, 'Order ID': "Order#585939",Qty:'5', Price: "₦ 20,000.00", 'Order Date': "08:00 PM, 02 Dec, 2021", Status: "Delivered" },
//   {id:2, 'Order ID': "Order#585939",Qty:'5', Price: "₦ 20,000.00", 'Order Date': "08:00 PM, 02 Dec, 2021", Status: "Delivered" },
//   {id:3, 'Order ID': "Order#585939",Qty:'5', Price: "₦ 20,000.00", 'Order Date': "08:00 PM, 02 Dec, 2021", Status: "Cancelled" },
//   {id:4, 'Order ID': "Order#585939",Qty:'5', Price: "₦ 20,000.00", 'Order Date': "08:00 PM, 02 Dec, 2021", Status: "In-transit" },
//   {id:5, 'Order ID': "Order#585939",Qty:'5', Price: "₦ 20,000.00", 'Order Date': "08:00 PM, 02 Dec, 2021", Status: "Packaged" },
//   {id:6, 'Order ID': "Order#585939",Qty:'5', Price: "₦ 20,000.00", 'Order Date': "08:00 PM, 02 Dec, 2021", Status: "Cancelled" },
//   {id:7, 'Order ID': "Order#585939",Qty:'5', Price: "₦ 20,000.00", 'Order Date': "08:00 PM, 02 Dec, 2021", Status: "Packaged" },
//   {id:8, 'Order ID': "Order#585939",Qty:'5', Price: "₦ 20,000.00", 'Order Date': "08:00 PM, 02 Dec, 2021", Status: "Packaged" },
//   {id:9, 'Order ID': "Order#585939",Qty:'5', Price: "₦ 20,000.00", 'Order Date': "08:00 PM, 02 Dec, 2021", Status: "Packaged" },
//   {id:10, 'Order ID': "Order#585939",Qty:'5', Price: "₦ 20,000.00", 'Order Date': "08:00 PM, 02 Dec, 2021", Status: "Delivered" },
//   {id:11, 'Order ID': "Order#585939",Qty:'5', Price: "₦ 20,000.00", 'Order Date': "08:00 PM, 02 Dec, 2021", Status: "Cancelled" },
//   {id:12, 'Order ID': "Order#585939",Qty:'5', Price: "₦ 20,000.00", 'Order Date': "08:00 PM, 02 Dec, 2021", Status: "Delivered" },
//   {id:13, 'Order ID': "Order#585939",Qty:'5', Price: "₦ 20,000.00", 'Order Date': "08:00 PM, 02 Dec, 2021", Status: "Cancelled" },
//   {id:14, 'Order ID': "Order#585939",Qty:'5', Price: "₦ 20,000.00", 'Order Date': "08:00 PM, 02 Dec, 2021", Status: "Delivered" },
//   {id:15, 'Order ID': "Order#585939",Qty:'5', Price: "₦ 20,000.00", 'Order Date': "08:00 PM, 02 Dec, 2021", Status: "Cancelled" },
// ]
const columns = ['Order ID', 'Qty','Price', 'Order Date', 'Status'];

export const DashboardHome = () => {

  let [token, setAuthTokens] = useState(()=> localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null)
  
  console.log(token);

  const id = '' 

  const [show,setShow] = useState(false)
  // const [balance, setBalance] = useState('')
  const [tableData, setTableData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [mssg, setMssg] = useState('')

  const [dataOverview, setDataOverview] = useState({})

  const handleShow = ()=>{
    setShow(!show)
  }

  const SeeAll = ()=>{
    return(
    <div className={"seeallModal"}>
    <div className={"seealltable"}>
    <XCircle className={"closeModal"} onClick={handleShow}/>
    <Table columns={columns} data={tableData} />
    </div>
     <div className={show? "overlay":"not-active"} onClick={handleShow}></div>
    </div>
  )}
  const pagination = ('.swiper-pagination', {
    dynamicBullets: false,
    clickable:true,

  renderBullet: function ( index ,className) {
    return '<span class="' + className + '">' + (index + 1)+ '</span>';
  }
});

useEffect(()=>{
  const fetchTableData = async ()=>{
    try{
      const response = await fetch(`https://api.foodgrab.africa/merchants/api/v1/getOrders`, {
        headers : {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${token.token}`
        }
      });
      if(!response.ok){
        throw new Error('Failed to fetch table data')
        setMssg("An Error occurredError: Merchant doesn't have any shops")
      }
      const data = await response.json();
      console.log('Response Data:', data)
      setTableData(data.data)
      setIsLoading(false)
    }
    catch (error){
      console.error('Error fetching table data')
    }
  }

  fetchTableData()
},[id, token])







// ========== DATA OVERVIEW ===============
useEffect(() => {
  const fetchData = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('https://api.foodgrab.africa/merchants/api/v1/overview', {
        method : 'GET',
        headers : {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${token.token}`,
        }
      })
      if (!response.ok){
        throw new Error('Failed to fetch data')
      };

      const data = await response.json();
      setDataOverview(data.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    }
  };

  fetchData();
}, [token]);


  // console.log(dataOverview);

  return (
    <div className='dashHome'>
    <section className={"dashsec1"}>
    <div>
      <p className="txt2">Dashboard</p>
    </div>

    
    <div className={"dashcardcont2"}>
    <Swiper
    className={"dashswiper"}
        modules={[Autoplay,EffectCube, Pagination, Navigation,]}
         effect={"cards"}
        grabCursor={ true }
        centeredSlides={ true }
        // autoplay={{delay: 5000,
        //   disableOnInteraction: true,
        // }}
        loop= { true }
        slidesPerView={ 'auto' }
        cardsEffect={{ 
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 7.0,
  
          }}

          pagination={pagination}
    >
      <SwiperSlide className={'dashslide'}>
      <div className="cd">
        <p className='init1'>Available Balance</p>
        <h3 className='money'>₦ {dataOverview.accountBalance}<span>.00</span> </h3>
        <div className='balance'>
        <img src={BOXES} alt='' className='bgimg' />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className={'dashslide'}>
      <div className="s">
        <p className='init1'>Total Orders</p>
        <h3 className='money'>{dataOverview.totalOrders} </h3>
        <div className='balance'>
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide className={'dashslide'}>
     
      <div className="t">
        <p className='init1'>Pending Orders</p>
        <h3 className='money'>{dataOverview.pendingOrders}</h3>
        <div className='balance'>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className={'dashslide'}>
      <div className="u">
        <p className='init1'>Successful Orders</p>
        <h3 className='money'>{dataOverview.successfulOrders}</h3>
        <div className='balance'>
        </div>
      </div>
      </SwiperSlide>
    
  
      </Swiper>
   
    </div>
    
      {isLoading === true ? 
        <div className='loaderModal'>
              <span className="loader"></span>
        </div> :
        ''
        }

        <div className={"dashcardcont"}>
          <div className="cd">
          <p className='init1'>Available Balance</p>
            <h3 className='money'>{dataOverview.accountBalance}<span>.00</span> </h3>
            <div className='balance'>
            <img src={BOXES} alt='' className='bgimg' />
            </div>
          </div>
          <div className="s">
            <p className='init1'>Total Orders</p>
            <h3 className='money'>{dataOverview.totalOrders} </h3>
            <div className='balance'>
            </div>
          </div>
          <div className="t">
            <p className='init1'>Pending Orders</p>
            <h3 className='money'> {dataOverview.pendingOrders} </h3>
            <div className='balance'>
            {/* <p>Payout Balance:</p><span>$139,900.99</span> */}
            </div>
          </div>
          <div className="u">
            <p className='init1'>Successful Orders</p>
            <h3 className='money'>{dataOverview.successfulOrders}</h3>
            <div className='balance'>

            </div>
          </div>
        </div>



    </section>
    <section className={"dashsec2"}>
      <div className={"tablebox"}>
      <div className={"toptb"}>
        <h2>Order History</h2>
      <div>
      <p onClick={handleShow}>see all</p> <FaChevronRight className={"topbicon"}/>
      </div>
      
      </div>
        <div className={"tablecont"}>
        <Table 
          columns={columns}
          tableData={tableData.slice(0,6)}/>
        </div>
      </div>
      <div className={"toporder"} >
        <div>
          <h1>Top Order</h1>
        </div>
        <div>
        </div>
      </div>
    </section>
    {show && <SeeAll /> }
    </div>
  )
}

