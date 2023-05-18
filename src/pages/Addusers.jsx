import { React, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

function Addusers() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [profile, setProfile] = useState(null);
  const [state, setState] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [tiffinAmount, setTiffinAmount] = useState("0");
  const [tiffinCount, setTiffinCount] = useState("0");

  function handleProfile(e) {
    setProfile(e.target.files[0]);
  }

  function handleSubmit() {
    setState(false);
    if (profile === null) {
      setState(true);
      setAlertMsg("Please select profile photo");
      return;
    }

    // api request for adding user into db
    axios({
      method: "POST",
      url: "http://localhost:8000/api/v1/signup",
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.getItem("mess_token"),
      },
      data: {
        u_name: name,
        u_email: email,
        u_password: password,
        u_contact: contact,
        profile,
        tiffin_type: tiffinAmount,
        tiffin_count: tiffinCount,
      },
    })
      .then((res) => {
        setState(true);
        setAlertMsg(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <Navbar />
      <div className="container addcust">
        {state === true ? (
          <div
            class="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            {alertMsg}
          </div>
        ) : (
          ""
        )}

        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Password
            </label>
            <input
              type="text"
              class="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Contact
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Profile
            </label>
            <input
              type="file"
              class="form-control"
              id="exampleInputEmail1"
              onChange={handleProfile}
              aria-describedby="emailHelp"
            />

            <div class="mb-3 mt-3">
              <label for="exampleInputEmail1" class="form-label">
                Tiffin Amount per plate
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                value={tiffinAmount}
                onChange={(e) => setTiffinAmount(e.target.value)}
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3 mt-3">
              <label for="exampleInputEmail1" class="form-label">
                Tiffin Count
              </label>
              <input
                type="number"
                class="form-control"
                id="exampleInputEmail1"
                value={tiffinCount}
                onChange={(e) => setTiffinCount(e.target.value)}
                aria-describedby="emailHelp"
              />
            </div>
          </div>
          <button type="button" onClick={handleSubmit} class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Addusers;
