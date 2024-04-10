import React, { useEffect, useState } from 'react'
import "./dashboard.css"
import "./order.css"
import  OrderTable  from '../table/OrderTable'

const data = [
  {id:1, 'Order ID': "Order#585939", Customer: "Kingsley Temi", Product: ['yam porridge','Rice'], Quantity: "2", 'Order Date': "08:00 PM, 02 Dec, 2021" },
  {id:2, 'Order ID': "Order#585939", Customer: "Collins Uzoma", Product: ['yam porridge'], Quantity: "2", 'Order Date': "08:00 PM, 02 Dec, 2021"},
  {id:3, 'Order ID': "Order#585939", Customer: "Kingsley Temi", Product: ['yam porridge','Rice'], Quantity: "2", 'Order Date': "08:00 PM, 02 Dec, 2021"},
  {id:4, 'Order ID': "Order#585939", Customer: "Kingsley Temi", Product: ['yam porridge'], Quantity: "2", 'Order Date': "08:00 PM, 02 Dec, 2021"},
]
const data2 = [
  {id:1, 'Order ID': "Order#585939", Customer: "Kingsley Temi", Product: ['yam porridge'], Status: "Processing", 'Order Date': "08:00 PM, 02 Dec, 2021" },
  {id:2, 'Order ID': "Order#585939", Customer: "Collins Uzoma", Product: ["yam porridge"], Status: "Processing", 'Order Date': "08:00 PM, 02 Dec, 2021"},
  {id:3, 'Order ID': "Order#585939", Customer: "Kingsley Temi", Product: ["yam porridge"], Status: "Processing", 'Order Date': "08:00 PM, 02 Dec, 2021"},
  {id:4, 'Order ID': "Order#585939", Customer: "Kingsley Temi", Product: ["yam porridge"], Status: "Processing", 'Order Date': "08:00 PM, 02 Dec, 2021"},
]
const data3 = [
  {id:1, 'Order ID': "Order#585939", Customer: "Kingsley Temi", Product: ['yam porridge'], Status: "Packaged", 'Order Date': "08:00 PM, 02 Dec, 2021" },
  {id:2, 'Order ID': "Order#585939", Customer: "Collins Uzoma", Product: ["yam porridge"], Status: "Packaged", 'Order Date': "08:00 PM, 02 Dec, 2021"},
  {id:3, 'Order ID': "Order#585939", Customer: "Kingsley Temi", Product: ["yam porridge"], Status: "Packaged", 'Order Date': "08:00 PM, 02 Dec, 2021"},
  {id:4, 'Order ID': "Order#585939", Customer: "Kingsley Temi", Product: ["yam porridge"], Status: "Packaged", 'Order Date': "08:00 PM, 02 Dec, 2021"},
]
const data4 = [
  {id:1, 'Order ID': "Order#585939", Customer: "Kingsley Temi", Product: ['yam porridge'], Status: "In-transit", 'Order Date': "08:00 PM, 02 Dec, 2021" },
  {id:2, 'Order ID': "Order#585939", Customer: "Collins Uzoma", Product: ["yam porridge"], Status: "In-transit", 'Order Date': "08:00 PM, 02 Dec, 2021"},
  {id:3, 'Order ID': "Order#585939", Customer: "Kingsley Temi", Product: ["yam porridge"], Status: "In-transit", 'Order Date': "08:00 PM, 02 Dec, 2021"},
  {id:4, 'Order ID': "Order#585939", Customer: "Kingsley Temi", Product: ["yam porridge"], Status: "In-transit", 'Order Date': "08:00 PM, 02 Dec, 2021"},
]
const data5 = [
  {id:1, 'Order ID': "Order#585939", Customer: "Kingsley Temi", Product: ['yam porridge'], Status: "Delivered", 'Order Date': "08:00 PM, 02 Dec, 2021" },
  {id:2, 'Order ID': "Order#585939", Customer: "Collins Uzoma", Product: ['yam porridge'], Status: "Delivered", 'Order Date': "08:00 PM, 02 Dec, 2021"},
  {id:3, 'Order ID': "Order#585939", Customer: "Kingsley Temi", Product: ['yam porridge'], Status: "Delivered", 'Order Date': "08:00 PM, 02 Dec, 2021"},
  {id:4, 'Order ID': "Order#585939", Customer: "Kingsley Temi", Product: ['yam porridge'], Status: "Delivered", 'Order Date': "08:00 PM, 02 Dec, 2021"},
]
const data6 = [
  {id:1, 'Order ID': "Order#585939", Customer: "Kingsley Temi", Product: ['yam porridge'], Status: "Cancelled", 'Order Date': "08:00 PM, 02 Dec, 2021" },
  {id:2, 'Order ID': "Order#585939", Customer: "Collins Uzoma", Product: ['yam porridge'], Status: "Cancelled", 'Order Date': "08:00 PM, 02 Dec, 2021"},
  {id:3, 'Order ID': "Order#585939", Customer: "Kingsley Temi", Product: ['yam porridge'], Status: "Cancelled", 'Order Date': "08:00 PM, 02 Dec, 2021"},
  {id:4, 'Order ID': "Order#585939", Customer: "Kingsley Temi", Product: ['yam porridge'], Status: "Cancelled", 'Order Date': "08:00 PM, 02 Dec, 2021"},
]

export const Orders = ( n) => {
  const columns = ['Order ID', 'Customer', 'Product', 'Quantity', 'Order Date','Action'];
  const columns2 = ['Order ID', 'Customer', 'Product', 'Status', 'Order Date','Action'];


  const[active, setactive]= useState('table1')
  const [activeHeader, setActiveHeader] = useState("tableA")
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

  const tables={
    table1: <OrderTable columns={columns} data={data} />,
    table2: <OrderTable columns={columns2} data={data2} />,
    table3: <OrderTable columns={columns2} data={data3} />,
    table4: <OrderTable columns={columns2} data={data4} />,
    table5: <OrderTable columns={columns2} data={data5} />,
    table6: <OrderTable columns={columns2} data={data6} />,
  }

  const selectedTable = {
    tableA : "New Order",
    tableB : "Processing",
    tableC : "Packaged & ready",
    tableD : "In-transit",
    tableE : "Delivered Order",
    tableF : "Cancelled Order",
  }

  useEffect(()=>{
    const tableLoca = tables
  const defaultStlyes = {color: "##b8b8b8", borderBottom: "solid 2px #fff"}
  const activeStyles = {color: "#383838", borderBottom: "solid 2px rgba(56, 56, 56, 1)" }
  switch (active){
    case 'border1':
      setBorder({...border, border1: activeStyles}); 
      break
    case 'border2':
      setBorder({...border, border2: activeStyles}); 
      break
    case 'border3':
      setBorder({...border, border3: activeStyles})
      break
    case 'border4':
      setBorder({...border, border4: activeStyles})
      break
    case 'border5':
      setBorder({...border, border5: activeStyles})
      break
    case 'border6':
      setBorder({...border, border6: activeStyles})
      break
    default:
      if (tableLoca === 'table1'){
        setBorder({
          border1:activeStyles,
          border2:defaultStlyes,
          border3:defaultStlyes,
          border4:defaultStlyes,
          border5:defaultStlyes,
          border6:defaultStlyes,
        })
      }else if(tableLoca === 'table2'){
        setBorder({
          border1:defaultStlyes,
          border2:activeStyles,
          border3:defaultStlyes,
          border4:defaultStlyes,
          border5:defaultStlyes,
          border6:defaultStlyes,
        })
      }else if(tableLoca === 'table3'){
        setBorder({
          border1:defaultStlyes,
          border2:defaultStlyes,
          border3:activeStyles,
          border4:defaultStlyes,
          border5:defaultStlyes,
          border6:defaultStlyes,
        })
      }  else if(tableLoca === 'table4'){
        setBorder({
          border1:defaultStlyes,
          border2:defaultStlyes,
          border3:defaultStlyes,
          border4:activeStyles,
          border5:defaultStlyes,
          border6:defaultStlyes,
        })
      }else if(tableLoca === 'table5'){
        setBorder({
          border1:defaultStlyes,
          border2:defaultStlyes,
          border3:defaultStlyes,
          border4:defaultStlyes,
          border5:activeStyles,
          border6:defaultStlyes,
        })
      }
      else if(tableLoca === 'table6'){
        setBorder({
          border1:defaultStlyes,
          border2:defaultStlyes,
          border3:defaultStlyes,
          border4:defaultStlyes,
          border5:defaultStlyes,
          border6:activeStyles,
        })
      }
  }
  console.log(activeHeader)
  },[active])
  

  const handleTables = (tableKey) =>{
    setactive(tableKey) && setActiveHeader(tableKey)
  }


  return (
    <div className='order'>
    <section className='ordersec1'>
    <p className='txt2'>Orders</p>
    <div className='headers'>
      <p 
      className={`headerTxt ${active === 'table1' ? 'active' : ''}`} 
      onClick={()=> 
      {handleTables('table1'); 
      setBorder("border1");
      setActiveHeader("tableA");
      }} 
      style={border.border1} >New Orders</p>


      <p 
      className={`headerTxt ${active === 'table2' ? 'active' : ''}`} 
      onClick={()=> {handleTables('table2'); setBorder("border2");setActiveHeader("tableB")}} style={border.border2} >Processing</p> 


      <p className={`headerTxt ${active === 'table3' ? 'active' : ''}`} onClick={()=> {handleTables('table3'); setBorder("border3");setActiveHeader("tableC")}} style={border.border3} >Package & Ready</p>


      <p className={`headerTxt ${active === 'table4' ? 'active' : ''}`} onClick={()=> {handleTables('table4'); setBorder("border4");setActiveHeader("tableD")}} style={border.border4} >In-transit</p>


      <p className={`headerTxt ${active === 'table5' ? 'active' : ''}`} onClick={()=> {handleTables('table5'); setBorder("border5");setActiveHeader("tableE")}} style={border.border5} >Delivered Order</p>


      <p className={`headerTxt ${active === 'table6' ? 'active' : ''}`} onClick={()=> {handleTables('table6'); setBorder("border6");setActiveHeader("tableF")}} style={border.border6} >Cancelled Order</p>


    </div>
    </section>
    <section className={"ordersec2"}>
      <div className={"orderTablebox"}>
      <p className={'txt2'}>{selectedTable[activeHeader]}</p>
      {tables[active]}

      </div>
    </section>
    </div>
  )
}