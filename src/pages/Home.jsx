import React from "react";
import Navbar from "../components/Navbar";
import FilterComponent from "../components/FliterComponent";
import BillTableComponent from "../components/BillTableComponent";
import Modal from "../components/Modal";

function Home() {
  return (
    <>
      <Navbar />
      <h3 className="admin_title">Dashboard</h3>
      <div className="admin_container">
        {/* filter */}
        <FilterComponent />
        <BillTableComponent />
        <Modal/>
      </div>
    </>
  );
}

export default Home;
