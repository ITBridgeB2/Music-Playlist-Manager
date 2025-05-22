require('dotenv').config();  // Load .env variables

const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// ✅ MySQL connection setup with promise, using .env vars
let db;

async function connectDB() {
  try {
    db = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
    console.log('✅ Connected to MySQL');
  } catch (err) {
    console.error('❌ MySQL connection error:', err);
  }
}

// ✅ Search API - fetch songs by title or artist
app.get('/songs', async (req, res) => {
  const search = req.query.q;
  if (!search) return res.json([]);

  const sql = `
    SELECT id, title, artist 
    FROM songs 
    WHERE title LIKE ? OR artist LIKE ?
    LIMIT 5
  `;
  const value = `%${search}%`;

  try {
    const [results] = await db.execute(sql, [value, value]);
    res.json(results);
  } catch (err) {
    console.error('Error fetching songs:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// ✅ Start server after DB connection, using .env port or default 5000
const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🎵 Server running at http://localhost:${PORT}`);
  });
});
