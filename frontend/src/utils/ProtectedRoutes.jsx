import React from 'react'
import { Navigate } from 'react-router-dom'
const ProtectedRoutes = ({ children }) => {
  const token = localStorage.getItem('token');
  const user = localStorage.getItem('user');
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const hasValidToken = Boolean(token && token !== 'undefined' && token !== 'null');
  const hasValidUser = Boolean(user && user !== 'undefined' && user !== 'null');

  if (!isLoggedIn || (!hasValidToken && !hasValidUser)) {
    return <Navigate to='/login' replace />;
  }

  return <>{children}</>;
}

export default ProtectedRoutes