import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserProfile = () => {
  const patientId = localStorage.getItem('patientId');
  const [formData, setFormData] = useState({
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

  // State to handle editing mode
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    // Fetch patient data when the component is mounted
    axios.get(`http://localhost:5000/user/profile?patientId=${patientId}`)
      .then(res => {
        setFormData(res.data);
      })
      .catch(err => {
        console.error('Error fetching profile:', err);
      });
  }, [patientId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    // Update profile API call
    axios.put(`http://localhost:5000/user/profile/${patientId}`, formData)
      .then(res => {
        alert('Profile updated!');
        setEditMode(false); // Exit edit mode after successful update
      })
      .catch(err => {
        console.error('Update error:', err);
        alert('Failed to update profile');
      });
  };

  return (
    <div>
      <h2>User Profile</h2>
      
      {/* Display form fields */}
      {Object.entries(formData).map(([key, value]) => (
        <div key={key}>
          <label>{key.replace(/([A-Z])/g, ' $1').toUpperCase()}:</label>
          <input
            type="text"
            name={key}
            value={value || ''}
            onChange={handleChange}
            disabled={!editMode} // Disable input fields when not in edit mode
          />
        </div>
      ))}

      {/* Edit and Update buttons */}
      {!editMode ? (
        <button onClick={() => setEditMode(true)}>Edit</button> // Show Edit button when not in edit mode
      ) : (
        <div>
          <button onClick={handleUpdate}>Update Profile</button>
          <button onClick={() => setEditMode(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
