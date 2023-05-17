import React from 'react'
import edit from "../utilities/images/pen.png"


function BillTable() {
  return (
    <>
         <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td className="bold">Paid</td>
              <td>
                <img src={edit} height="20" alt="" className="pointer" srcset="" />
                <span className="edit">Edit</span>
              </td>
            </tr>
    </>
  )
}

export default BillTable