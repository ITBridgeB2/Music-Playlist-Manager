import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaTrash } from 'react-icons/fa';

const HospitalList = () => {
  const [hospitals, setHospitals] = useState([]);

  const fetchHospitals = async () => {
    try {
      const res = await axios.get('http://localhost:5000/hospitals');
      setHospitals(res.data);
    } catch (err) {
      console.error('Failed to fetch hospitals:', err);
    }
  };

  const deleteHospital = async (id) => {
    if (window.confirm('Are you sure you want to delete this hospital?')) {
      try {
        await axios.delete(`http://localhost:5000/hospitals/${id}`);
        fetchHospitals();
      } catch (err) {
        console.error('Failed to delete hospital:', err);
      }
    }
  };

  useEffect(() => {
    fetchHospitals();
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-12 p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Registered Hospitals</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
          <thead className="bg-blue-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border">ID</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border">Name</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border">Contact</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border">Speciality</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {hospitals.map((h) => (
              <tr key={h.id} className="hover:bg-gray-50 transition">
                <td className="px-4 py-2 border text-sm">{h.id}</td>
                <td className="px-4 py-2 border text-sm font-medium text-gray-800">{h.name}</td>
                <td className="px-4 py-2 border text-sm">{h.contact_number}</td>
                <td className="px-4 py-2 border text-sm">{h.speciality}</td>
                <td className="px-4 py-2 border text-sm">
                  <button
                    onClick={() => deleteHospital(h.id)}
                    className="text-red-600 hover:text-red-800 flex items-center space-x-1"
                  >
                    <FaTrash className="text-sm" />
                    <span>Delete</span>
                  </button>
                </td>
              </tr>
            ))}
            {hospitals.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  No hospitals found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HospitalList;
