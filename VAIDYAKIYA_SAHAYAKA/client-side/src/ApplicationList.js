import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import patientService from './patientService'; // Your axios client

const ApplicationList = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    patientService.getPatients()
      .then(res => setPatients(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Received Applications</h2>
      {patients.length === 0 ? (
        <p>No applications found</p>
      ) : (
        <div>
          {patients.map(patient => (
            <div key={patient.id} style={{ border: '1px solid #ccc', padding: 10, margin: 10 }}>
              <h4>{patient.first_name} {patient.last_name}</h4>
              <p>Phone: {patient.phone_number}</p>
              <Link to={`/admin/applications/${patient.id}`}>View Details</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ApplicationList;
