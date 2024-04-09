import React from 'react'
import "./table.css"

export const Table = ({columns, data}) => {

  // const initialData = data.slice(0, 6);

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
        <tbody className={"rowcont"}>
          {data.map(row=>(
            <tr key={row.id} className={"row"}>
              {columns.map((column, index)=>(
                <td key={index} className={`rowcontent ${index === 3 ? getFourthContentStyle(row[column]) : ''}`}>{row[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}


