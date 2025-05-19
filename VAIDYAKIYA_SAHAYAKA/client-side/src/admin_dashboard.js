import React from 'react';
import { Link } from 'react-router-dom';
import { FaHospitalAlt, FaClipboardList, FaTools } from 'react-icons/fa';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Admin Dashboard</h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* View Applications */}
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <div className="flex items-center mb-4">
            <FaClipboardList className="text-blue-600 text-2xl mr-3" />
            <h3 className="text-xl font-semibold">Review Applications</h3>
          </div>
          <p className="text-gray-600 mb-4">View all patient applications and their medical histories.</p>
          <Link to="/admin/applications">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              View Applications
            </button>
          </Link>
        </div>

        {/* Add Hospital */}
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <div className="flex items-center mb-4">
            <FaHospitalAlt className="text-green-600 text-2xl mr-3" />
            <h3 className="text-xl font-semibold">Add Hospital</h3>
          </div>
          <p className="text-gray-600 mb-4">Register a new hospital into the system.</p>
          <Link to="/admin/add-hospital">
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Add Hospital
            </button>
          </Link>
        </div>

        {/* Manage Hospitals */}
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <div className="flex items-center mb-4">
            <FaTools className="text-yellow-600 text-2xl mr-3" />
            <h3 className="text-xl font-semibold">Manage Hospitals</h3>
          </div>
          <p className="text-gray-600 mb-4">View, edit, or remove hospitals from the database.</p>
          <Link to="/admin/hospitals">
            <button className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700">
              Manage Hospitals
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;
