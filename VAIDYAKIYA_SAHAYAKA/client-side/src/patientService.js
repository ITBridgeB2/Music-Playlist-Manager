// patientService.js
import axios from 'axios';

const API_BASE = 'http://localhost:5000';

const api = axios.create({
  baseURL: API_BASE
});

// Automatically attach token if available (optional)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // if you're using auth tokens
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Login API call — saves patientId to localStorage
const login = async (credentials) => {
  try {
    const response = await api.post(`/login`, credentials);  // use api instance
    const patient = response.data.patient;
    localStorage.setItem('patientId', patient.id); // Save patientId for future use
    return response.data; // return patient data for frontend use
  } catch (error) {
    throw error;
  }
};
// Other methods (unchanged)
const savePatient = (patientData) => api.post('/patients', patientData);
const saveIllness = (patientId, illnessData) =>
  api.post('/illness', { ...illnessData, patientId });
const getPatients = () => api.get('/patients');
const getIllnessesByPatientId = (patientId) => api.get(`/illness/${patientId}`);
const getMatchedHospitals = (patientId) =>
  api.get('/matched-hospitals', { params: { patientId } });
const getProfile = () => api.get('/user/profile');
const updateProfile = (patientId, data) => api.put(`/user/profile/${patientId}`, data); // You may need this

const patientService = {
  login,
  savePatient,
  saveIllness,
  getPatients,
  getIllnessesByPatientId,
  getMatchedHospitals,
  getProfile,
  updateProfile
};

export default patientService;
