import React from 'react'
import BillTable from "../components/BillTable";

function BillTableComponent() {
  return (
    <>
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Contact</th>
              <th scope="col">Date</th>
              <th scope="col">Tiffins</th>
              <th scope="col">Amount</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <BillTable />
            <BillTable />
            <BillTable />
            <BillTable />
            <BillTable />
            <BillTable />
            <BillTable />
            <BillTable />
            <BillTable />
            <BillTable />
            <BillTable />
          </tbody>
        </table>
    </>
  )
}

export default BillTableComponent