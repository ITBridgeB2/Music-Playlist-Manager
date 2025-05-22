import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SongDetails from './Pages/SongDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/songs/:id" element={<SongDetails />} />

      </Routes>
    </Router>
  );
}

export default App;