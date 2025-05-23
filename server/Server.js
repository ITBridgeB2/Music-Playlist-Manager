// Load the environment variables
require('dotenv').config();


const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');



const app = express();



// MIDDLEWARE
app.use(cors());
app.use(express.json());

// MySQL connection using .env
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL');
  });


  // GET /songs/:id - Get a single song by ID
app.get('/songs/:id', (req, res) => {
  const songId = req.params.id;

  const query = 'SELECT * FROM songs WHERE id = ?';
  db.query(query, [songId], (err, results) => {
    if (err) {
      console.error('Error fetching song:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: 'Song not found' });
    }

    res.status(200).json(results[0]);
  });
});

// DELETE /songs/:id - Delete a song by ID
app.delete('/songs/:id', (req, res) => {
  const songId = req.params.id;

  const query = 'DELETE FROM songs WHERE id = ?';
  db.query(query, [songId], (err, result) => {
    if (err) {
      console.error('Error deleting song:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Song not found' });
    }

    res.status(200).json({ message: 'Song deleted successfully' });
  });
});

// PUT /songs/:id - Update a song by ID
app.put('/songs/:id', (req, res) => {
  const { id } = req.params;
  const { title, artist, genre, duration } = req.body;

  // Check if all required fields are present and valid
  if (!title || !artist || !genre || !duration || duration <= 0) {
    return res.status(400).json({ error: 'Please provide valid title, artist, genre and duration' });
  }

  // First check if song exists
  const checkQuery = 'SELECT * FROM songs WHERE id = ?';
  db.query(checkQuery, [id], (err, results) => {
    if (err) {
      console.error('Error checking song existence:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: 'Song not found' });
    }

    // Update the song
    const updateQuery = 'UPDATE songs SET title = ?, artist = ?, genre = ?, duration = ? WHERE id = ?';
    db.query(updateQuery, [title, artist, genre, duration, id], (err, updateResult) => {
      if (err) {
        console.error('Error updating song:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      // Return the updated song details
      db.query(checkQuery, [id], (err, updatedResults) => {
        if (err) {
          console.error('Error fetching updated song:', err);
          return res.status(500).json({ error: 'Internal Server Error' });
        }

        res.json(updatedResults[0]);
      });
    });
  });
});







   const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));