import React, { useState } from 'react';
import './Register.css';
import patientService from './patientService';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const Navigate = useNavigate();
  const [patient, setPatient] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    age: '',
    dateOfBirth: '',
    gender: '',
    bplCardNumber: '',
    address: '',
    bystanderName: '',
    bystanderNumber: '',
    relationToPatient: ''
  });

  const [illness, setIllness] = useState({
    category: '',
    symptomDays: '',
    symptoms: '',
    prescription: '',
    geneticCondition: false,
    terminallyIll: false
  });

  const [patientId, setPatientId] = useState(null);

  const handlePatientChange = (e) => {
    const { name, value } = e.target;
    setPatient((prev) => ({ ...prev, [name]: value }));
  };

  const handleIllnessChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setIllness((prev) => ({ ...prev, [name]: val }));
  };

  const validatePhoneNumber = (num) => /^\d{10}$/.test(num);
  const isFutureDate = (dateStr) => new Date(dateStr) > new Date();

  const handlePatientSubmit = (e) => {
    e.preventDefault();

    // Validations
    if (!validatePhoneNumber(patient.phoneNumber)) {
      alert('Patient phone number must be 10 digits');
      return;
    }
    if (patient.bystanderNumber && !validatePhoneNumber(patient.bystanderNumber)) {
      alert('Bystander phone number must be 10 digits');
      return;
    }
    if (isFutureDate(patient.dateOfBirth)) {
      alert('Date of birth cannot be in the future');
      return;
    }
    if (patient.age <= 0 || patient.age > 120) {
      alert('Enter a valid age');
      return;
    }

    // Save patient
    patientService.savePatient(patient)
      .then(res => {
        alert("Patient data saved");
        setPatientId(res.data.patientId);
        
      })
      .catch(err => console.error("Error saving patient:", err));
  };

  const handleIllnessSubmit = (e) => {
    e.preventDefault();
  
    if (!patientId) {
      alert("Please submit patient data first.");
      return;
    }
  
    if (illness.symptomDays < 0) {
      alert("Symptom days must be zero or positive");
      return;
    }
  
    patientService.saveIllness(patientId, {
      ...illness,
      category: illness.category[0]

    })
    .then(() => {
      alert('Illness data saved');
      Navigate('/dashBoard');
    })
    .catch(err => {
      console.error('Error saving illness:', err);
      alert('Failed to save illness');
    });
  };
  


  return (
    <div>
      <h2>Patient Registration</h2>
      <form onSubmit={handlePatientSubmit}>
        <table>
          <tbody>
            <tr><td>First Name: <input name="firstName" required onChange={handlePatientChange} /></td></tr>
            <tr><td>Last Name: <input name="lastName" onChange={handlePatientChange} /></td></tr>
            <tr><td>Phone Number: <input name="phoneNumber" maxLength="10" required onChange={handlePatientChange} /></td></tr>
            <tr><td>Age: <input name="age" type="number" required onChange={handlePatientChange} /></td></tr>
            <tr><td>Date of Birth: <input name="dateOfBirth" type="date" required onChange={handlePatientChange} /></td></tr>
            <tr><td>
              Gender:
              <select name="gender" required onChange={handlePatientChange}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </td></tr>
            <tr><td>BPL Card Number: <input name="bplCardNumber" onChange={handlePatientChange} /></td></tr>
            <tr><td>Address: <textarea name="address" required onChange={handlePatientChange} /></td></tr>
            <tr><td>Bystander Name: <input name="bystanderName" onChange={handlePatientChange} /></td></tr>
            <tr><td>Bystander Number: <input name="bystanderNumber" maxLength="10" onChange={handlePatientChange} /></td></tr>
            <tr><td>Relation to Patient: <input name="relationToPatient" onChange={handlePatientChange} /></td></tr>
            <tr><td><button type="submit">Submit Patient Details</button></td></tr>
          </tbody>
        </table>
      </form>

      <form onSubmit={handleIllnessSubmit}>
        <h3>Illness Details</h3>
        <table>
          <tbody>
            <tr><td>
              Category:
              <select
  name="category"
  multiple
  required
  onChange={(e) => {
    const options = Array.from(e.target.selectedOptions).map(opt => opt.value);
    setIllness((prev) => ({ ...prev, category: options }));
  }}
>
  <option value="Cardiology">Cardiology</option>
  <option value="Neurology">Neurology</option>
  <option value="Orthopedic">Orthopedic</option>
  <option value="Pulmonary Disease">Respiratory</option>
  <option value="Dermatology">Dermatologist</option>
  <option value="Oncology">Oncology</option>
  <option value="Other">Other</option>
</select>


            </td></tr>
            <tr><td>Symptom Days: <input name="symptomDays" type="number" min="0" onChange={handleIllnessChange} /></td></tr>
            <tr><td>Symptoms: <textarea name="symptoms" onChange={handleIllnessChange} /></td></tr>
            <tr><td>Prescription: <textarea name="prescription" onChange={handleIllnessChange} /></td></tr>
            <tr><td>
              Genetic Condition:
              <input type="checkbox" name="geneticCondition" onChange={handleIllnessChange} />
            </td></tr>
            <tr><td>
              Terminally Ill:
              <input type="checkbox" name="terminallyIll" onChange={handleIllnessChange} />
            </td></tr>
            <tr><td><button type="submit">Submit Illness Details</button></td></tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
