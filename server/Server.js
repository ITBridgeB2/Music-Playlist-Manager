// Load the environment variables
require('dotenv').config();


const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');



const musicApp = express();



// MIDDLEWARE
musicApp.use(cors());
musicApp.use(express.json());

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
musicApp.get('/songs/:id', (req, res) => {
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
musicApp.delete('/songs/:id', (req, res) => {
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






   const PORT = process.env.PORT;
musicApp.listen(PORT, () => console.log(`Server running on port ${PORT}`));