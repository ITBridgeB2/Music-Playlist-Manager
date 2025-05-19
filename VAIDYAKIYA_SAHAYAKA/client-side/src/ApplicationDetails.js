import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import patientService from './patientService';

const ApplicationDetails = () => {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);
  const [illnesses, setIllnesses] = useState([]);

  useEffect(() => {
    patientService.getPatients()
      .then(res => {
        const found = res.data.find(p => p.id === parseInt(id));
        setPatient(found);
      });

    patientService.getIllnessesByPatientId(id)
      .then(res => setIllnesses(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!patient) return <p>Loading patient details...</p>;

  return (
    <div>
      <h2>Patient Details</h2>
      <p><strong>Name:</strong> {patient.first_name} {patient.last_name}</p>
      <p><strong>Phone:</strong> {patient.phone_number}</p>
      <p><strong>Age:</strong> {patient.age}</p>
      <p><strong>DOB:</strong> {patient.date_of_birth}</p>
      <p><strong>Gender:</strong> {patient.gender}</p>
      <p><strong>BPL Card:</strong> {patient.bpl_card_number}</p>
      <p><strong>Address:</strong> {patient.address}</p>

      <h3>Illness History</h3>
      {illnesses.length === 0 ? (
        <p>No illness records.</p>
      ) : (
        illnesses.map((illness, i) => (
          <div key={i} style={{ background: '#f9f9f9', padding: 10, marginBottom: 10 }}>
            <p><strong>Category:</strong> {
  (() => {
    if (Array.isArray(illness.category)) {
      return illness.category.join(', ');
    }
    try {
      const parsed = JSON.parse(illness.category);
      return Array.isArray(parsed) ? parsed.join(', ') : parsed;
    } catch {
      return illness.category;
    }
  })()
}</p>

            <p><strong>Symptoms:</strong> {illness.symptoms}</p>
            <p><strong>Symptom Days:</strong> {illness.symptom_days}</p>
            <p><strong>Genetic Condition:</strong> {illness.genetic_condition}</p>
            <p><strong>Terminally Ill:</strong> {illness.terminally_ill ? 'Yes' : 'No'}</p>
            <p><strong>Prescription:</strong> {illness.prescription}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ApplicationDetails;
