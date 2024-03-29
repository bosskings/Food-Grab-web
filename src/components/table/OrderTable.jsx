import React, { useState, useEffect ,useRef} from 'react';
import './table.css';
import { Dropdown } from '../dashboard/dropdown/Dropdown';
import { FaChevronDown } from 'react-icons/fa';
import OrderModal from '../modal/OrderModal';

const OrderTable = (props) => {
  const { columns, data } = props;
  const [checkedItems, setCheckedItems] = useState({});
  const [dropdownStates, setDropdownStates] = useState(Array(data.length).fill(false));
  const [productImages, setProductImages] = useState({});
  const [seeMmodal, setSeeModal] = useState({})
  // const dropdownRefs = useRef([]);

  
  const handleCheckboxChange = (event, id) => {
    setCheckedItems(prevState => ({
      ...prevState,
      [id]: event.target.checked,
    }));
  };

  useEffect(() => {
    const fetchProductImages = async () => {
      try {
        const response = await fetch('');
        const imageData = await response.json();
        setProductImages(imageData);
      } catch (error) {
        console.error('Error fetching product images:', error);
      }
    };

    fetchProductImages();
  }, []);

  // useEffect(() => {
  //   dropdownRefs.current = Array(data.length).fill().map((_, index) => dropdownRefs.current[index] || React.createRef());
  // }, [data]);

  const handleDropdown = (index) => {
    setDropdownStates((prevState) => {
      const newDropdownStates = [...prevState];
      newDropdownStates[index] = !newDropdownStates[index];
      return newDropdownStates;
    });
  };
  
  const Seemodal = ()=>{
    <OrderModal/>
  }

  const handleSeeModal = ()=>{
    setSeeModal(<Seemodal />)
  }

  const getFourthContentStyle = (value) => {
    if (value === 'Delivered') {
      return 'delivered';
    } else if (value === 'Cancelled') {
      return 'cancelled';
    } else if (value === 'Packaged') {
      return 'packaged';
    } else if (value === 'In-transit') {
      return 'in-transit';
    } else {
      return '';
    }
  };

  return (
    <div>
      <p className={'txt2'}>New Order</p>
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
          {data.map((row, rowIndex) => (
            <tr key={row.id} className={'row2'}>
              <td>
                <input
                  type='checkbox'
                  checked={checkedItems[row.id] || false}
                  onChange={(e) => handleCheckboxChange(e, row.id)}
                />
              </td>
              {columns.map((column, index) => (
                <td key={index} className={`rowcontent2 ${index === 3 ? getFourthContentStyle(row[column]) : ''}`}>
                  {index === 2 && column === 'Product' && (
                    <img src={productImages[row.id]} alt='' className={'productimage'} />
                  )}
                  {row[column]}
                   {index === 5 && column === 'Action' && (
                    <div className={'dropbox'} onClick={() => handleDropdown(rowIndex)}>
                      More <FaChevronDown />
                      {dropdownStates[rowIndex]&&
                        <Dropdown xPos={1230} yPos={306}  />
                      }

                      {/* && dropdownRefs.current[rowIndex].current && ( */}
{/* parentRef={dropdownRefs.current[rowIndex].current} */}
                    </div>
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