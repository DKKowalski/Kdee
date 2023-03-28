import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Update from "./pages/Update";
import Add from "./pages/Add";
import Home from "./pages/Home";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/add" element={<Add />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
