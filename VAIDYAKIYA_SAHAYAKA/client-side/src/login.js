import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import patientService from './patientService';
import { useAuth } from './AuthContext';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [credentials, setCredentials] = useState({
    phoneNumber: '',
    dateOfBirth: ''
  });
  
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: name === 'dateOfBirth' ? value.slice(0, 10) : value // Ensure only date part is used
    }));
  };

  // Phone number validation function
  const validatePhone = (phone) => /^\d{10}$/.test(phone);

  // Form submission logic
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    if (!validatePhone(credentials.phoneNumber)) {
      setError('Phone number must be 10 digits');
      return;
    }
  
    if (!credentials.dateOfBirth) {
      setError('Date of birth is required');
      return;
    }
  
    try {
      const res = await patientService.login(credentials);
      console.log('Login response:', res); // Log entire response object
  
      if (res?.data?.patient) {  // Safely check if patient exists in the response
        const user = res.data.patient;
        localStorage.setItem('user', JSON.stringify(user));
        login(user); // Update auth context
  
        localStorage.setItem('token', res.data.token);
        navigate('/dashboard');  // Navigate to dashboard
      } else {
        setError('Invalid login response. No patient data returned.');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Invalid phone number or date of birth');
    }
  };
  
  

  return (
    <div>
      <h2>Patient Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            maxLength="10"
            required
            value={credentials.phoneNumber}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dateOfBirth"
            required
            value={credentials.dateOfBirth}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
}
