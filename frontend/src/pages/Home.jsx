import "../App.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from "../emergent.jpg";
import LogoutButton from "./Logout";

const Books = () => {
  const [dues, setDues] = useState([]);
  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/dues");
        setDues(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8800/dues/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="home container-wrapper">
      <nav className="navbar bg-light">
        <img className="logo" src={logo} alt="emergent payment" />
        <div>
          <button className="btn btn-secondary margin-right">
            <Link to="/search">Clients</Link>
          </button>
          <button className="btn btn-secondary">
            <Link to="/transactions">Transactions</Link>
          </button>
        </div>
        <LogoutButton />
      </nav>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>balance</th>
            <th>Date</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {dues.map((dues) => (
            <tr key={dues.id}>
              <td>{dues.name}</td>
              <td>{dues.phone_number}</td>
              <td>{dues.balance}</td>
              <td>{dues.date}</td>
              <td>
                <button className="btn btn-success">
                  <Link to={`/update/${dues.id}`}>Update</Link>
                </button>
              </td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => handleDelete(dues.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn--middle btn-primary">
        <Link to="/add">Add New Client</Link>
      </button>
    </div>
  );
};

export default Books;
