import { React, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    axios
      .post("http://localhost:8000/api/v1/messlogin", {
        mess_email: email,
        mess_password: password,
      })
      .then((res) => {
        if (res.data.success === true) {
          localStorage.setItem("mess_token", res.data.token);
          localStorage.setItem("mess_email", res.data.mess_email);
          navigate("/");
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      {/* <Navbar /> */}
      <div className="container mt-5" style={{ width: "40%" }}>
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="button" class="btn btn-primary" onClick={handleLogin}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
