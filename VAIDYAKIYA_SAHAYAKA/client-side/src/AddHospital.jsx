import React, { useState } from 'react';
import axios from 'axios';

const AddHospital = () => {
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [speciality, setSpeciality] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/hospitals', {
        name,
        contact_number: contactNumber,
        speciality,
      });
      alert('Hospital added successfully!');
      setName('');
      setContactNumber('');
      setSpeciality('');
    } catch (error) {
      console.error(error);
      alert('Failed to add hospital');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 shadow rounded-xl">
      <h2 className="text-2xl font-bold mb-4">Add New Hospital</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Hospital Name"
          className="w-full p-2 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Contact Number"
          className="w-full p-2 border rounded"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Speciality"
          className="w-full p-2 border rounded"
          value={speciality}
          onChange={(e) => setSpeciality(e.target.value)}
          required
        />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Add Hospital
        </button>
      </form>
    </div>
  );
};

export default AddHospital;
