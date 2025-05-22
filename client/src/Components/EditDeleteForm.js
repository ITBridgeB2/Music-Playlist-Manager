import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';
import Select from 'react-select';

const genreOptions = [
  { value: 'Rock', label: 'Rock' },
  { value: 'Pop', label: 'Pop' },
  { value: 'Jazz', label: 'Jazz' },
  { value: 'Classical', label: 'Classical' },
  { value: 'Other', label: 'Other' },
];

const EditDeleteForm = ({ songId, onClose, onSongUpdated }) => {
  const [form, setForm] = useState({
    title: '',
    artist: '',
    genre: '',
    duration: ''
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:5000/songs/${songId}`)
      .then(res => {
        const song = res.data;
        setForm({
          title: song.title,
          artist: song.artist,
          genre: song.genre,
          duration: song.duration
        });
        setLoading(false);
      })
      .catch(() => {
        toast.error('Failed to fetch song details');
        setLoading(false);
      });
  }, [songId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleGenreChange = (selectedOption) => {
    setForm(prev => ({ ...prev, genre: selectedOption.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, artist, genre, duration } = form;
    if (!title || !artist || !genre || !duration || duration <= 0) {
      return toast.error('Please fill all fields correctly');
    }

    axios.put(`http://localhost:5000/songs/${songId}`, form)
      .then(res => {
        toast.success('Song updated successfully');
        onSongUpdated(res.data);
        onClose();
      })
      .catch(() => toast.error('Failed to update song'));
  };

  const handleDelete = () => {
    if (!window.confirm("Are you sure you want to delete this song?")) return;

    axios.delete(`http://localhost:5000/songs/${songId}`)
      .then(() => {
        toast.success('Song deleted');
        onSongUpdated(null);
        onClose();
      })
      .catch(() => toast.error('Failed to delete song'));
  };

  if (loading) {
    return (
      <div className="text-center text-purple-500 py-10 text-lg font-semibold">
        Loading song data...
      </div>
    );
  }

  return (
    <>
      <Toaster position="top-right" />
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-2xl w-full max-w-lg mx-4 p-6 relative"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold"
              aria-label="Close modal"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold text-purple-600 mb-6 text-center">Edit Song Details</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Title */}
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  value={form.title}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
              </div>

              {/* Artist */}
              <div>
                <label htmlFor="artist" className="block text-sm font-medium text-gray-700 mb-1">Artist</label>
                <input
                  id="artist"
                  name="artist"
                  type="text"
                  value={form.artist}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
              </div>

              {/* Genre */}
              <div>
                <label htmlFor="genre" className="block text-sm font-medium text-gray-700 mb-1">Genre</label>
                <Select
                  id="genre"
                  value={genreOptions.find(opt => opt.value === form.genre)}
                  onChange={handleGenreChange}
                  options={genreOptions}
                  className="text-sm"
                />
              </div>

              {/* Duration */}
              <div>
                <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">Duration (seconds)</label>
                <input
                  id="duration"
                  name="duration"
                  type="number"
                  min="1"
                  value={form.duration}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
              </div>

              {/* Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <button
                  type="submit"
                  className="bg-purple-500 text-white px-5 py-2 rounded-md hover:bg-purple-600 font-medium transition-all duration-150"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={handleDelete}
                  className="text-red-600 border border-red-600 px-5 py-2 rounded-md hover:bg-red-100 font-medium transition-all duration-150"
                >
                  Delete Song
                </button>
              </div>
            </form>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default EditDeleteForm;
