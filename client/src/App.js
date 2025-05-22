import { useState } from 'react';
import AddSongModalForm from './Components/AddSongForm';
import { Toaster } from 'react-hot-toast';
import './index.css';


function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      {/* Toast notifications container */}
      <Toaster position="top-right" />

      <h1>🎵 Song Manager (Test)</h1>
      <button onClick={() => setModalOpen(true)}>+ Add Song</button>

      <AddSongModalForm isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

export default App;
