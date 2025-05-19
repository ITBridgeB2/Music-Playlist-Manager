import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './AuthContext';
import App from './App';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='Bimg'>
    <AuthProvider>
    <App />
  </AuthProvider>
  </div>
  
);
