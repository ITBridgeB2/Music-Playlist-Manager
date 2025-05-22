require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) throw err;
  console.log('✅ MySQL connected');
});

// POST /songs - Add new song
app.post('/songs', (req, res) => {
  const { title, artist, genre, duration } = req.body;

  if (!title || !artist || !genre || !duration) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const query = 'INSERT INTO songs (title, artist, genre, duration) VALUES (?, ?, ?, ?)';
  db.query(query, [title, artist, genre, duration], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });

    res.status(201).json({
      id: result.insertId,
      title,
      artist,
      genre,
      duration
    });
  });
});

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🎵 Server running at http://localhost:${PORT}`);
});
