import { Navigate } from "react-router-dom";
import { useAuth } from "./auth";

export const RequireAuth = ({ children }) => {
  const auth = useAuth();
  if (auth.user === "success") {
    console.log(auth.user);
    return children;
  }

  return <Navigate to="/login" />;
};
