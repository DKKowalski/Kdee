import "../App.css";
import React, { useState } from "react";
import axios from "axios";

const Transactions = () => {
  const [trans, setTrans] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const fetchAClient = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8800/trans/search/${searchTerm}`
      );
      setTrans(res.data);
    } catch  {
      alert("Data not found");
    }
  };
  console.log(searchTerm);

  /*const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8800/trans/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };*/

  return (
    <div className="container-wrapper search">
      <h1>Transactions</h1>
      <div className="search-field">
        <input
          className="search-input"
          type="text"
          placeholder="search name"
          name="name"
          onChange={handleChange}
        />
        <button className="btn btn-secondary round" onClick={fetchAClient}>
          search
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>status_code</th>
            <th>status_message</th>
            <th>trans_ref_no</th>
            <th>order_id</th>
            <th>Name</th>
            <th>Mobile</th>
          </tr>
        </thead>
        <tbody>
          {trans.map((trans) => (
            <tr key={trans.order_id}>
              <td>{trans.status_code}</td>
              <td>{trans.status_message}</td>
              <td>{trans.trans_ref_no}</td>
              <td>{trans.order_id}</td>
              <td>{trans.name}</td>
              <td>{trans.mobile}</td>

              {/*<td>
                <button className="update">
                  <Link to={`/update/${trans.id}`}>Update</Link>
                </button>
              </td>
              <td>
                <button
                  className="delete"
                  onClick={() => handleDelete(trans.id)}
                >
                  Delete
                </button>
          </td>*/}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
