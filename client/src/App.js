import React, { useState } from 'react';
import './App.css';
import EditDeleteForm from './Components/EditDeleteForm';

function App() {
  const [songs, setSongs] = useState([
    { id: 1, title: "Imagine", artist: "John Lennon" },
    { id: 2, title: "Billie Jean", artist: "Michael Jackson" },
    { id: 3, title: "Bohemian Rhapsody", artist: "Queen" },
  ]);
  const [selectedSongId, setSelectedSongId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleEditClick = (id) => {
    setSelectedSongId(id);
    setShowModal(true);
  };

  const handleSongUpdated = (updatedSong) => {
    if (updatedSong) {
      // Update the song in local state
      setSongs(prev =>
        prev.map(song => song.id === updatedSong.id ? updatedSong : song)
      );
    } else {
      // Song was deleted
      setSongs(prev =>
        prev.filter(song => song.id !== selectedSongId)
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-purple-600 mb-8">Music Playlist Manager</h1>

      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-4">
        <ul className="divide-y divide-gray-200">
          {songs.map((song) => (
            <li key={song.id} className="py-4 flex justify-between items-center">
              <div>
                <p className="text-lg font-medium">{song.title}</p>
                <p className="text-sm text-gray-500">{song.artist}</p>
              </div>
              <button
                onClick={() => handleEditClick(song.id)}
                className="bg-purple-500 text-white px-4 py-1 rounded hover:bg-purple-600 transition"
              >
                Edit
              </button>
            </li>
          ))}
        </ul>
      </div>

      {showModal && selectedSongId && (
        <EditDeleteForm
          songId={selectedSongId}
          onClose={() => setShowModal(false)}
          onSongUpdated={handleSongUpdated}
        />
      )}
    </div>
  );
}

export default App;
