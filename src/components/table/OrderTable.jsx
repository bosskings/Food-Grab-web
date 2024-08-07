import React, { useState, useEffect ,useRef} from 'react';
import './table.css';
import { Dropdown } from '../dashboard/dropdown/Dropdown';
import OrderModal from '../modal/OrderModal';

const OrderTable = (props) => {
  const { columns, data, dropdownItems, setRefresh} = props;
  const [checkedItems, setCheckedItems] = useState({});
  const dropdownRefs = useRef([]);
  const [show,setShow] = useState(true)
  const handleShow = ()=>{
    setShow(!show)
  }
  
  const handleCheckboxChange = (event, id) => {
    setCheckedItems(prevState => ({
      ...prevState, 
      [id]: event.target.checked,
    }));
  };


  useEffect(() => {
    dropdownRefs.current = Array(data.length).fill().map(( _, index) => dropdownRefs.current[index] || React.createRef());
  }, [data]);
  
  const handleDropdownItemClick = (index, rowData) => {
    dropdownRefs.current[index].current.handleOpenModal(rowData);
  };
  



  const getFourthContentStyle = (value) => {
    if (value === 'DELIVERED') {
      return 'delivered';
    } else if (value === 'CANCELLED') {
      return 'cancelled';
    } else if (value === 'PACKAGED') {
      return 'packaged';
    } else if (value === 'IN-TRANSIT') {
      return 'in-transit';
    } else if (value === "PROCESSING") {
      return 'PROCESSING';
    }
  };

  console.log('this is the tableData', data)

  return (
    <div>
      <table className='table11'>
        <thead className={'colbox2'}>
          <tr className={'colwrapper2'}>
            {columns.map((column) => (
              <th key={column} className={'col2'}>
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className={'row2'}>
              <td>
                  <input
                    type='checkbox'
                    checked={checkedItems[row.id] || false}
                    onChange={(e) =>{ handleCheckboxChange(e, row.id)}}
                  />
              </td>
              {columns.map((column, index, rowIndex) => (
                <td key={index} className={`rowcontent2 ${index === 3 ? getFourthContentStyle(row[column]) : ''}`} 
                ref={dropdownRefs.current[rowIndex]}>
                  {index === 2 && column === 'Product' && (
                    <>
                    {<img src={row.Product[0].image} alt='' className={'productimage'} />}
                    {Array.isArray(row.Product) && row.Product.length > 0 && show ?(
                      <div>{row.Product[0].name}</div>
                    ):("")}
                    </>
                  )}
                  {index !== 2 &column !== 'Product' ? (row[column]) : ""}
                   {index === 5 && column === 'Action' && (
                    <Dropdown rowData={row}
                    dropdownItems={dropdownItems} 
                    onDropdownItemClick={() => handleDropdownItemClick(rowIndex, row)}
                    modalComponent={<OrderModal row={row} setRefresh={setRefresh} />} 
                    />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;