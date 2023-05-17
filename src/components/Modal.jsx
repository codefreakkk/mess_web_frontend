import React from "react";

function Modal() {
  return (
    <>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Add Bills
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="name_cont mb-1">
                NAME : <span className="name">NA</span>{" "}
              </div>
              <div className="name_cont mb-1">
                AMOUNT PER PLATE : <span className="name">NA</span>{" "}
              </div>
              <div className="name_cont mb-3">
                TOTAL : <span className="name">NA</span>{" "}
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  placeholder="Contact"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <input
                  type="number"
                  placeholder="Tiffins"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <input
                  type="date"
                  placeholder="Contact"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              
              <div className="fetch_modal_cont">
                <button type="button" class="btn btn-primary">
                  Fetch
                </button>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
