import React, {useEffect, useState}from 'react'
import "./dashboard.css"
import BOXES from "../media/boxes.png"
import { FaChevronRight } from "react-icons/fa6";
import { Table } from '../table/Table';
import { XCircle } from 'react-bootstrap-icons';
import gif from '../media/gif2.gif'
import { Swiper, SwiperSlide } from 'swiper/react';


import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCube, Pagination, Navigation, Autoplay, } from "swiper/modules";



const columns = ['Order ID','Price', 'Order Date', 'Status'];

export const DashboardHome = () => {

  let [token, setAuthTokens] = useState(()=> localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null)
  




  const [show,setShow] = useState(false)
  const [tableData, setTableData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [successMssg, setSuccessMssg] = useState()

  const [dataOverview, setDataOverview] = useState({})

  const handleShow = ()=>{
    setShow(!show)
  }

  const handleTableData = [
    
  ]

  const SeeAll = ()=>{
    return(
    <div className={"seeallModal"}>
    <div className={"seealltable"}>
    <XCircle className={"closeModal"} onClick={handleShow}/>
    <Table columns={columns} data={tableData} />
    {tableData.length === 0 && (
            <div className='noData'>
              You don't have any orders yet
              <img src={gif} alt="" />
            </div>
          )}
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
      }
      const data = await response.json();
      const formattedData = data.data.map(orders=>({
        id:orders.id,
        'Order ID': orders._id,
        // Qty: orders.items.length,
        Price:orders.items.reduce((sum,item)=> sum + item.price, 0).toLocaleString(),
        'Order Date': new Date(orders.date).toLocaleString(),
        Status : orders.requestStatus
      }))
      console.log('Response Data:', data)
      console.log(formattedData)
      setTableData(formattedData)
    }
    catch (error){
      console.error('Error fetching table data')
    }finally{
      setIsLoading(false)
    }

  }

   if (token) {
      fetchTableData();
    }
},[token])

//================= SUCCESS MSSG ===============

useEffect(()=>{
  const storedMssg = localStorage.getItem('loginSuccess')
  if (storedMssg){
    setSuccessMssg('Login Successful')
    setTimeout(()=> setSuccessMssg(''),3000)
    localStorage.removeItem('loginSuccess')
  }
},[])



// ========== DATA OVERVIEW ===============

const url = 'https://api.foodgrab.africa/merchants/api/v1/overview'

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/',
          'Authorization': `Bearer ${token.token}`
        },
      })

      if(response.status === 400 || response.status ===200 || response.ok){
        const data = await response.json()
        setDataOverview(data.data)
        console.log(data);
        setIsLoading(false)
      }

      else{
        console.log('There was an error');
        setIsLoading(false)
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  console.log(dataOverview);

  

  return (
    <div className='dashHome'>
    <section className={"dashsec1"}>
    <div>
      <p className="txt2">Dashboard</p>
      {successMssg && <div className='successful'>{successMssg}</div> }
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
            tableData={tableData.slice(0,6)}
          />

          {tableData.length === 0 && (
            <div className='noData'>
              You don't have any orders yet
              <img src={gif} alt="" />
            </div>
          )}
        </div>
      </div>

      <div className={"toporder"} >
        <div>
          <h1>Top Order</h1>
        </div>
      </div>

    </section>
    {show && <SeeAll /> }
    </div>
  )
}

