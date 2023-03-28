import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Add = () => {
  const [dues, setDues] = useState({
    name: "",
    phone_number: "",
    balance: "",
    date: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setDues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/dues", dues);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="form">
      <h1>Add New Book</h1>
      <input
        type="text"
        placeholder="name"
        name="name"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="phone_number"
        name="phone_number"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="balance"
        name="balance"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="date"
        name="date"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default Add;
