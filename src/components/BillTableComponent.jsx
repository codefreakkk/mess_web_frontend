import React, { useEffect, useState } from "react";
import BillTable from "../components/BillTable";
import axios from "axios";

function BillTableComponent() {
  const [bills, setBills] = useState([]);
  const [billState, setBillState] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/getallbillsbyid", {
        headers: {
          Authorization: localStorage.getItem("mess_token"),
        },
      })
      .then((res) => {
        if (res.data.success === true) {
          console.log(res.data.data);
          setBills(res.data.data);
          setBillState(true);
          console.log(bills);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <table class="table table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Contact</th>
            <th scope="col">Date</th>
            <th scope="col">Tiffins</th>
            <th scope="col">Tiffin Type</th>
            <th scope="col">Amount</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
            {billState === true ? bills.map((data, index) => {
              return (
                <BillTable
                  key={index}
                  name={data.user_id.u_name}
                  contact={data.user_id.u_contact}
                  date={data.date}
                  tiffins={data.tiffins}
                  tiffin_type={data.tiffin_type}
                  total_amount={data.total_amount}
                />
              )
            }): ""}
        </tbody>
      </table>
    </>
  );
}

export default BillTableComponent;
