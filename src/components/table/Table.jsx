import React from 'react'
import "./table.css"

export const Table = ({columns, tableData}) => {

  // const initialtableData = tableData.slice(0, 6);

  const getFourthContentStyle = (value) => {
    if (value === 'Delivered') {
      return 'delivered'; 
    } else if (value === 'Cancelled') {
      return 'cancelled'; 
    } else if (value === "Packaged"){
      return 'packaged';
    }else if (value === "In-transit"){
      return 'in-transit';
    }else{
      return ""
    }
  };

  console.log('this is the tableData', tableData)
 
  return (
    <div>
      <table className={`tabledsh`}>
        <thead className={"colbox"}>
          <tr className={"colwrapper"}>
            {columns.map(column =>(
              <th key={column} className={"col"}>{column}</th>
            ))}
          </tr>
        </thead>
        {tableData === undefined  ? <div>No Data </div> :(
        <tbody className={"rowcont"}>
          {tableData.map(row=>(
            <tr key={row.id} className={"row"}>
              {columns.map((column, index)=>(
                <td key={index} className={`rowcontent ${index === 4 ? getFourthContentStyle(row[column]) : ''}`}>{row[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
        )}
      </table>
    </div>
  )
}


