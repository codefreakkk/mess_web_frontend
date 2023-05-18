import axios from "axios";
import { React, useState, useEffect } from "react";

function ViewUsersTable() {
  const [user, setUser] = useState([]);
  const [state, setState] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/getallusers", {
        headers: {
          Authorization: localStorage.getItem("mess_token")
        }
      })
      .then((res) => {
        setUser(res.data.data);
        setState(true);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h3 className="mb-3">View Users</h3>
      <table class="table table-">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Profile</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Contact</th>
            <th scope="col">Registration Date</th>
          </tr>
        </thead>
        <tbody>
          {state === true
            ? user.map((data, index) => {
                const registrationDate = data.createdAt.split("T")[0];
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>
                      <img
                        src={data.u_image}
                        height="55"
                        width="55"
                        alt="image"
                      />
                    </td>
                    <td>{data.u_name}</td>
                    <td>{data.u_email}</td>
                    <td>{data.u_password}</td>
                    <td>{data.u_contact}</td>
                    <td>{registrationDate}</td>
                  </tr>
                );
              })
            : ""}
        </tbody>
      </table>
    </>
  );
}

export default ViewUsersTable;
