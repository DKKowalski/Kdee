import React, {  useState } from "react";
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
    <div>
      <h1>KD Book Shop</h1>
      <input
        type="text"
        placeholder="search name"
        name="name"
        onChange={handleChange}
      />
      <button onClick={fetchAClient}>search</button>
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
    </div>
  );
};

export default Search;
