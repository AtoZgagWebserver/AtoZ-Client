import React from "react";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component }) => {
  const authenticated = localStorage.getItem("isAuthenticated");

  return authenticated === "true" ? Component : <Navigate to="/login" />;
};

export default PrivateRoute;
