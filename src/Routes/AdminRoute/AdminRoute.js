import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useAdmin from "../../hooks/useAdmin";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  if (loading || isAdminLoading) {
    return <progress className='progress w-56'></progress>;
  }
  if (user && isAdmin) {
    return children;
  }

  return <Navigate state={{ from: location }} replace to='/'></Navigate>;
};

export default PrivateRoute;
