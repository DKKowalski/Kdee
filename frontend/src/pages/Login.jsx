import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom";
import logo from "../emergent.jpg";
const Login = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const auth = useAuth();
  const navigate = useNavigate();

  /*const handleLogin = async () => {
    auth.login(user);
    navigate("/home");
  };*/

  const handleChange = (e) => {
    e.preventDefault();
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(`http://localhost:8800/login/`, {
        params: values,
      });

      if (res.data) {
        auth.login(res.data);
        navigate("/");
        window.alert("login success");
      } else {
        console.log(res.data);
        window.alert("User not found");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-color vh-100">
      <div>
        <img className="logo-login" src={logo} alt="emergent payment" />
      </div>
      <div className="p-3 rounded w-25">
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="Username">
              <strong>Username</strong>
            </label>
            <input
              type="text"
              required
              placeholder="Enter Username"
              className="form-control rounded-0"
              onChange={handleChange}
              name="username"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              required
              placeholder="Enter password"
              className="form-control rounded-0"
              onChange={handleChange}
              name="password"
            />
          </div>
          <button type="submit" className="btn btn-success w-100">
            <strong>Log in</strong>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
