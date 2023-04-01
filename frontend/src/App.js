import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Update from "./pages/Update";
import Add from "./pages/Add";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Login from "./pages/Login";
import Transactions from "./pages/Transactions";

import { AuthProvider } from "./pages/auth";
import { RequireAuth } from "./pages/RequireAuth";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route
              path="/update/:id"
              element={
                <RequireAuth>
                  <Update />
                </RequireAuth>
              }
            />
            <Route
              path="/add"
              element={
                <RequireAuth>
                  <Add />
                </RequireAuth>
              }
            />
            <Route
              path="/search"
              element={
                <RequireAuth>
                  <Search />
                </RequireAuth>
              }
            />
            <Route
              path="/transactions"
              element={
                <RequireAuth>
                  <Transactions />
                </RequireAuth>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
