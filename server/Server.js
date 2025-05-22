const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// 🔧 Update these with your actual DB credentials
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "MUSICDB",
});

// Get songs by genre
app.get("/api/music", (req, res) => {
  const { genre } = req.query;

  if (!genre || genre === "Select Genre") {
    return res.json([]); // Return empty if genre is not selected
  }

  db.query(
    "SELECT * FROM songs WHERE genre = ?",
    [genre],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(results);
    }
  );
});

app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});