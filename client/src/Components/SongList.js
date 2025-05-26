// SongList.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Reordering from './Reordering';

const SongList = ({ externalSongs, onDelete }) => {
  const navigate = useNavigate();
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    setSongs(externalSongs);
  }, [externalSongs]);

  const handleDelete = (id) => {
    onDelete(id);
  };

  const handleReorder = (result) => {
    if (!result.destination) return;

    const updatedSongs = Array.from(songs);
    const [movedSong] = updatedSongs.splice(result.source.index, 1);
    updatedSongs.splice(result.destination.index, 0, movedSong);

    setSongs(updatedSongs);
  };

  return (
    <div className="p-4">
      <Reordering
        songs={songs}
        onDelete={handleDelete}
        onNavigate={(id) => navigate(`/songs/${id}`)}   
        onDragEnd={handleReorder}
      />
    </div>
  );
};

export default SongList;
