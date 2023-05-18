import React from "react";
import edit from "../utilities/images/pen.png";

function BillTable({
  key,
  name,
  contact,
  date,
  tiffins,
  tiffin_type,
  total_amount,
}) {
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{contact}</td>
        <td>{date}</td>
        <td>{tiffins}</td>
        <td>TYPE
           <span className="bold" style={{marginLeft: "3px"}}>
           {tiffin_type}
           </span>
           
           </td>
        <td className="bold">{total_amount} Rs</td>
        <td>
          <img src={edit} height="20" alt="" className="pointer" srcset="" />
          <span className="edit">Edit</span>
        </td>
      </tr>
    </>
  );
}

export default BillTable;
