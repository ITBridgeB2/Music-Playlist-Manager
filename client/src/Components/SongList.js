import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Reordering from './Reordering'; // no folder change

export default function SongList() {
  const [songs, setSongs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/songs')
      .then(response => {
        const sorted = response.data.sort((a, b) => a.position - b.position);
        setSongs(sorted);
      })
      .catch(error => console.error('Error fetching songs:', error));
  }, []);

  const handleDelete = async (id, e) => {
    e.stopPropagation();
    await axios.delete(`http://localhost:5000/songs/${id}`);
    setSongs(prev => prev.filter(song => song.id !== id));
  };

  const handleReorder = (result) => {
    if (!result.destination) return;

    const reordered = [...songs];
    const [moved] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, moved);
    setSongs(reordered);

    const orderPayload = reordered.map((song, index) => ({
      id: song.id,
      position: index,
    }));

    axios.put('http://localhost:5000/songs/reorder', { order: orderPayload })
      .then(res => console.log('Reorder saved:', res.data.message));
  };

  return (
    <div className="p-4">
      <Reordering
        songs={songs}
        onDelete={handleDelete}
        onNavigate={id => navigate(`/songs/${id}`)}
        onDragEnd={handleReorder}
      />
    </div>
  );
}
