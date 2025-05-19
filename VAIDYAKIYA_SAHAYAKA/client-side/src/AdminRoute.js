import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
  const admin = localStorage.getItem('admin');

  if (!admin) {
    // Redirect to admin login page if not logged in
    return <Navigate to="/admin/login" />;
  }

  return children;
};

export default AdminRoute;
