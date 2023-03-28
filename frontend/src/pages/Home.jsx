import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
      await axios.delete("http://localhost:8800/books/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>KD Book Shop</h1>
      <div>
        <button>
          <Link to="/search">Search</Link>
        </button>
      </div>
      <div>
        {dues.map((dues) => (
          <div className="book" key={dues.id}>
            <h2>{dues.name}</h2>
            <p> {dues.phone_number} </p>
            <p> {dues.balance} </p>
            <p> {dues.date} </p>
            <button className="update">
              <Link to={`/update/${dues.id}`}>Update</Link>
            </button>
            <button className="delete" onClick={() => handleDelete(dues.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
      <button>
        <Link to="/add">Add New Client</Link>
      </button>
    </div>
  );
};

export default Books;
