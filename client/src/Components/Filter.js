import React, { useState } from "react";
import axios from "axios";

const genres = ["Select Genre", "Rock","Pop","Jazz","Classical", "other"];

const MusicFilter = () => {
  const [selectedGenre, setSelectedGenre] = useState("Select Genre");
  const [musicList, setMusicList] = useState([]);
  const [hasSelected, setHasSelected] = useState(false);

  const handleGenreChange = async (e) => {
    const genre = e.target.value;
    setSelectedGenre(genre);
    setHasSelected(genre !== "Select Genre");

    if (genre === "Select Genre") {
      setMusicList([]);
      return;
    }

    try {
      const res = await axios.get("http://localhost:5000/api/music", {
        params: { genre },
      });
      setMusicList(res.data);
    } catch (error) {
      console.error("Error fetching music:", error);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow-lg rounded-2xl">
      <h1 className="text-3xl font-extrabold mb-6 text-purple-700 text-center">
        🎵 Filter Music by Genre
      </h1>

      <select
        className="w-full p-3 border-2 border-purple-400 rounded-lg mb-6 text-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
        value={selectedGenre}
        onChange={handleGenreChange}
      >
        {genres.map((genre) => (
          <option key={genre}>{genre}</option>
        ))}
      </select>

      {hasSelected && musicList.length === 0 && (
        <p className="text-center text-gray-500">No songs found for this genre.</p>
      )}

      {musicList.length > 0 && (
        <ul className="space-y-4">
          {musicList.map((song) => (
            <li
              key={song.id}
              className="p-4 bg-purple-100 border border-purple-300 rounded-xl hover:bg-purple-200 transition duration-300"
            >
              <strong className="text-purple-700">{song.title}</strong> by{" "}
              <span className="italic text-gray-700">{song.artist}</span> (
              <span className="text-purple-500">{song.genre}</span>)
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MusicFilter;