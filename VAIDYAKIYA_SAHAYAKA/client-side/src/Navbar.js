import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={styles.navbar}>
      <h3 style={styles.logo}>Vaidyakiya Sahayaka</h3>
      <ul style={styles.navLinks}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        
        <li><Link to="/profile" style={styles.link}>User Profile</Link></li>
        <li><Link to="/login" style={styles.link}>Login</Link></li>
        <li><Link to="/register" style={styles.link}>Register</Link></li>
        <li><Link to="/dashBoard" style={styles.link}>Dashboard</Link></li>
        
        <li><Link to="/LogoutButton" style={styles.link} >Logout</Link></li>
        
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    background: '#004d40',
    color: '#fff',
    padding: '10px 20px'
  },
  logo: {
    margin: 0,
    fontSize: '20px'
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    gap: '15px',
    margin: 0,
    padding: 0
  },
  link: {
    color: 'white',
    textDecoration: 'none'
  }
};
