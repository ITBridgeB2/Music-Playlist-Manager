import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RegisteredUsers = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/patients')
      .then(response => {
        setPatients(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching patients:', error);
        setError('Failed to fetch patients');
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-gray-600">Loading patients...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Registered Patients</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">First Name</th>
            <th className="border px-4 py-2">Last Name</th>
            <th className="border px-4 py-2">Phone Number</th>
            <th className="border px-4 py-2">Age</th>
            <th className="border px-4 py-2">DOB</th>
          </tr>
        </thead>
        <tbody>
          {patients.map(patient => (
            <tr key={patient.id} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{patient.first_name}</td>
              <td className="border px-4 py-2">{patient.last_name}</td>
              <td className="border px-4 py-2">{patient.phone_number}</td>
              <td className="border px-4 py-2">{patient.age}</td>
              <td className="border px-4 py-2">{new Date(patient.date_of_birth).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RegisteredUsers;
