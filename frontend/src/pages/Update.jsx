import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Update = () => {
  const [dues, setDues] = useState({
    name: "",
    phone_number: "",
    balance: "",
    date: "",
  });
  const navigate = useNavigate();
  const location = useLocation();
  const clientId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setDues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:8800/dues/" + clientId, dues);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="form">
      <h1>Update Client Data</h1>
      <input
        className="input"
        type="text"
        placeholder="name"
        name="name"
        onChange={handleChange}
      />
      <input
        className="input"
        type="text"
        placeholder="phone_number"
        name="phone_number"
        onChange={handleChange}
      />
      <input
        className="input"
        type="text"
        placeholder="balance"
        name="balance"
        onChange={handleChange}
      />
      <input
        className="input"
        type="text"
        placeholder="date"
        name="date"
        onChange={handleChange}
      />
      <button className="btn" onClick={handleClick}>
        Update
      </button>
    </div>
  );
};

export default Update;
