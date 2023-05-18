import React from "react";
import refresh from "../utilities/images/refresh.png";

function FliterComponent() {
  return (
    <>
      <div className="filter">
        <div className="add_filter_left">
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            class="btn btn-outline-primary"
          >
            Add Bills
          </button>
        </div>
        
        <div className="add_filter_right">
          <div className="search">
            <input
              type="text"
              placeholder="Filter Records"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="date ml-10">
            <input
              type="date"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="button ml-10">
            <button type="button" class="btn btn-primary">
              Search
            </button>
          </div>
          <div className="button ml-10">
            <button type="button" class="btn refresh">
              <img src={refresh} height="20" alt="" srcset="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FliterComponent;
