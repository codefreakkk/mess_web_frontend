import React from "react";
import Navbar from "../components/Navbar";
import ViewUsersTable from "../components/ViewUsersTable";

function Viewusers() {
  return (
    <>
      <Navbar />
      <div className="container view_users">
        <ViewUsersTable/>
      </div>
    </>
  );
}

export default Viewusers;
