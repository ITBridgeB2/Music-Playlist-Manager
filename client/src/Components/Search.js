import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import debounce from 'lodash.debounce';
import toast from 'react-hot-toast';
import './../input.css';

function SongSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const fetchSongs = async (value) => {
    if (value.trim() === '') {
      setResults([]);
      return;
    }

    try {
      const res = await axios.get(`http://localhost:5000/songs?q=${value}`);
      if (res.data.length === 0) {
        setResults([{ id: null, title: 'No song found', artist: '' }]);
      } else {
        setResults(res.data.slice(0, 5));
      }
    } catch (error) {
      console.error('Error fetching songs:', error);
      toast.error('Failed to fetch songs. Please try again.');
      setResults([{ id: null, title: 'Error fetching data', artist: '' }]);
    }
  };

  const debouncedFetch = useCallback(debounce(fetchSongs, 500), []);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    debouncedFetch(value);
  };

  const handleSongClick = (id) => {
    if (id) {
      navigate(`/songs/${id}`);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <input
        type="text"
        className="w-full px-4 py-3 pr-12 rounded-lg bg-purple-500 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-700"
        placeholder="Search by title or artist..."
        value={query}
        onChange={handleChange}
        style={{
          backgroundImage: "url('https://cdn.jsdelivr.net/npm/bootstrap-icons/icons/search.svg')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 12px center',
          backgroundSize: '20px',
        }}
      />

      {results.length > 0 && (
        <div className="mt-4 bg-white rounded-lg shadow-lg divide-y divide-gray-200">
          {results.map((song, index) => (
            <div
              key={index}
              onClick={() => handleSongClick(song.id)}
              className={`px-4 py-3 cursor-${song.id ? 'pointer' : 'default'} hover:bg-purple-100 rounded-t-lg`}
            >
              <strong className="text-purple-700">{song.title}</strong>
              {song.artist && (
                <span className="text-purple-500"> ({song.artist})</span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SongSearch;
