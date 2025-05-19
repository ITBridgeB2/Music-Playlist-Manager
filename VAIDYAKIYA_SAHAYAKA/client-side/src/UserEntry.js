import React from 'react';
import { Link } from 'react-router-dom';

export default function UserEntry() {
  return (
    <div style={{ padding: '30px', textAlign: 'center' }}>
      <h1>Welcome to Vaidyakiya Sahayaka</h1>
      <p>Your assistant for healthcare needs.</p>
      <div style={{ marginTop: '20px' }}>
        <Link to="/login"><button>Login</button></Link>
        <Link to="/register"><button style={{ marginLeft: '10px' }}>Register</button></Link>
      </div>
    </div>
  );
}
