import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Login from './login';
import Register from './Register';
import Home from './Home';

import Profile from './Profile';
import DashBoard from './dashBoard';
import ProtectedRoute from './ProtectedRoute';

import LogoutButton from './LogoutButton';

// Admin
import AdminLogin from './AdminLogin';
import AdminDashboard from './admin_dashboard';
import ApplicationList from './ApplicationList';
import ApplicationDetails from './ApplicationDetails';
import AdminRoute from './AdminRoute';
import AddHospital from './AddHospital';
import HospitalList from './HospitalList';

function App() {
 

  return (
    <Router>
    <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        
        <Route
          path="/dashboard"
          element={
            
              <DashBoard />
            
          }
        />
        
        <Route path="/LogoutButton" element={<LogoutButton />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        
        <Route
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />
        
        <Route
          path="/admin/applications"
          element={
            <AdminRoute>
              <ApplicationList />
            </AdminRoute>
          }
        />
        
        <Route
          path="/admin/applications/:id"
          element={
            <AdminRoute>
              <ApplicationDetails />
            </AdminRoute>
          }
        />
        
        <Route
          path="/admin/add-hospital"
          element={
            <AdminRoute>
              <AddHospital />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/hospitals"
          element={
            <AdminRoute>
              <HospitalList />
            </AdminRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
