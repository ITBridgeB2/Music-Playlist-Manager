import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SongDetails from './Pages/SongDetails';
import EditDeleteForm from './Components/EditDeleteForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/songs/:id" element={<SongDetails />} />
        <Route path="/edit/:id" element={<EditDeleteForm />} />

      </Routes>
    </Router>
  );
}

export default App;