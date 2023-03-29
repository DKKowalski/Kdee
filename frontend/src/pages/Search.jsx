import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Search = () => {
  const [dues, setDues] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const fetchAClient = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8800/dues/search/${searchTerm}`
      );
      setDues(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8800/books/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="search">
      <h1>Staff</h1>
      <div className="search-field">
        <input
          className="search-input"
          type="text"
          placeholder="search name"
          name="name"
          onChange={handleChange}
        />
        <button className="btn" onClick={fetchAClient}>
          search
        </button>
      </div>

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
              <button className="update">
                <Link to={`/update/${dues.id}`}>Update</Link>
              </button>
            </td>
            <td>
              <button
                className="delete"
                onClick={() => handleDelete(dues.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default Search;
