// Load environment variables
require('dotenv').config();

// Import packages
const express = require('express');
const mysql = require('mysql2');

// Initialize app
const app = express();
app.use(express.json());

// Create MySQL connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
}).promise();

// ======== API Routes for EDIT, DELETE, UPDATE ======== //

// READ ONE - Get a song by ID (for edit page)
app.get('/songs/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [song] = await pool.query('SELECT * FROM songs WHERE id = ?', [id]);
    if (!song.length) return res.status(404).json({ error: 'Song not found' });
    res.json(song[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE - Update a song by ID
app.put('/songs/:id', async (req, res) => {
  const { title, artist, genre, duration } = req.body;
  const { id } = req.params;
  try {
    const [existing] = await pool.query('SELECT * FROM songs WHERE id = ?', [id]);
    if (!existing.length) return res.status(404).json({ error: 'Song not found' });

    await pool.execute(
      'UPDATE songs SET title = ?, artist = ?, genre = ?, duration = ? WHERE id = ?',
      [title, artist, genre, duration, id]
    );

    const [updated] = await pool.query('SELECT * FROM songs WHERE id = ?', [id]);
    res.json(updated[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// DELETE - Delete a song by ID
app.delete('/songs/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [existing] = await pool.query('SELECT * FROM songs WHERE id = ?', [id]);
    if (!existing.length) return res.status(404).json({ error: 'Song not found' });

    await pool.execute('DELETE FROM songs WHERE id = ?', [id]);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ======== Start Server ======== //
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
