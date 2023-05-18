import axios from "axios";
import { React, useEffect, useState } from "react";

function Modal() {
  const [user, setUser] = useState();
  const [userState, setUserState] = useState(false);
  const [email, setEmail] = useState("user email");
  const [alertState, setAlertState] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [tiffin_type, setTiffinType] = useState(0);
  const [total, setTotal] = useState(0);
  const [tiffinCount, setTiffinCount] = useState(0);

  function handleTiffinCount(e) {
    if (userState === true) {
      const t_count = parseInt(e.target.value);
      const t_type = parseInt(tiffin_type);
      setTotal(t_count * t_type);
      setTiffinCount(e.target.value);
    }
  }

  // handle bill
  function handleBill() {
    axios
      .get(`http://localhost:8000/api/v1/getuserbyemail/${email}`, {
        headers: {
          Authorization: localStorage.getItem("mess_token"),
        },
      })
      .then((res) => {
        if (res.data.success === true) {
          setUser(res.data.data);
          setAlertMsg("");
          setAlertState(false);
          setUserState(true);
          setTiffinType(res.data.data.tiffin_type);
        } else {
          setAlertMsg(`User with ${email} not found`);
          setAlertState(true);
          setUserState(false);
          setUser("");
        }
      })
      .catch((err) => console.log(err));
  }

  // add bill
  function handleSubmit() {
    if (userState === false) {
      setAlertMsg("Please fetch user first");
      setAlertState(true);
      return;
    }

    // validate tiffin count
    if (tiffinCount.length === 0 || tiffinCount === 0 || isNaN(tiffinCount)) {
      setAlertMsg("Please add tiffin count");
      setAlertState(true);
      return;
    }

    // if user is fetched then store bill into db
    if (userState === true) {
      axios
        .post(
          "http://localhost:8000/api/v1/addbill",
          {
            user_id: user._id,
            tiffins: tiffinCount,
            tiffin_type: tiffin_type,
            total_amount: total,
          },
          {
            headers: {
              Authorization: localStorage.getItem("mess_token"),
            },
          }
        )
        .then((res) => {
          if (res.data.success === false) {
            setAlertMsg(res.data.message);
            setAlertState(true);
            return;
          }

          // if meal is bought display alert
          setAlertMsg(res.data.message);
          setAlertState(true);
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  }

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
              {/* modal */}
              {alertState === true ? (
                <div class="alert alert-primary mb-4" role="alert">
                  {alertMsg}
                </div>
              ) : (
                ""
              )}

              <div className="name_cont mb-1">
                NAME :{" "}
                <span className="name">
                  {userState === true ? <span>{user.u_name}</span> : "NA"}
                </span>{" "}
              </div>
              <div className="name_cont mb-1">
                AMOUNT PER PLATE :{" "}
                <span className="name">
                  {userState === true ? <span>{user.tiffin_type}</span> : "0"}
                </span>{" "}
              </div>
              <div className="name_cont mb-3">
                TOTAL :{" "}
                <span className="name">
                  {isNaN(total) === true ? 0 : total}
                </span>{" "}
              </div>
              <div class="mb-3">
                <input
                  type="email"
                  placeholder="Email"
                  class="form-control"
                  id="exampleInputEmail1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <input
                  type="number"
                  placeholder="Tiffins"
                  class="form-control"
                  id="exampleInputEmail1"
                  onChange={handleTiffinCount}
                />
              </div>

              <div className="fetch_modal_cont">
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={handleBill}
                >
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
              <button
                type="button"
                class="btn btn-primary"
                onClick={handleSubmit}
              >
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
