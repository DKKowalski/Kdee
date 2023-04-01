import { useState, createContext, useContext, useEffect } from "react";
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("user") || null);

  localStorage.setItem("user", user);
  useEffect(() => {
    localStorage.setItem("user", user);
  }, [user]);

  const login = (user) => {
    setUser(user);
  };
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
