import React, { useState } from 'react'
import "./dashboard.css"
import "./order.css"
import  OrderTable  from '../table/OrderTable'

const data = [
  {id:1, 'Order ID': "Order#585939", Customer: "Kingsley Temi", Product: "Yam Porridge", Quantity: "2", 'Order Date': "08:00 PM, 02 Dec, 2021" },
  {id:2, 'Order ID': "Order#585939", Customer: "Kingsley Temi", Product: "Yam Porridge", Quantity: "2", 'Order Date': "08:00 PM, 02 Dec, 2021"},
  {id:3, 'Order ID': "Order#585939", Customer: "Kingsley Temi", Product: "Yam Porridge", Quantity: "2", 'Order Date': "08:00 PM, 02 Dec, 2021"},
  {id:4, 'Order ID': "Order#585939", Customer: "Kingsley Temi", Product: "Yam Porridge", Quantity: "2", 'Order Date': "08:00 PM, 02 Dec, 2021"},
]

export const Orders = () => {
  const columns = ['Order ID', 'Customer', 'Product', 'Quantity', 'Order Date','Action'];

  const[active, setactive]= useState()
  const [orderTable, setOrderTable] = useState({

  })
  
  const [border, setBorder]= useState([
    {
      border1:{},
      border2:{},
      border3:{},
      border4:{},
      border5:{},
      border6:{}
    }
  ])
    
  switch (active){

  }


  return (
    <div className='order'>
    <section className='ordersec1'>
    <p className='txt2'>Orders</p>
    <div className='headers'>
      <p className={"headerTxt"}>New Orders</p>
      <p className={"headerTxt"}>Processing</p>
      <p className={"headerTxt"}>Package & Ready</p>
      <p className={"headerTxt"}>In-transit</p>
      <p className={"headerTxt"}>Delivered Order</p>
      <p className={"headerTxt"}>Cancelled Order</p>
    </div>
    </section>
    <section className={"ordersec2"}>
      <div className={"orderTablebox"}>
        <OrderTable columns={columns} data={data}/>
      </div>
    </section>
    </div>
  )
}


