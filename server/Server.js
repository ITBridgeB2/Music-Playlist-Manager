const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
require('dotenv').config();

const userapp = express();

userapp.use(cors());
userapp.use(express.json());

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

// ✅ GET all songs
userapp.get("/songs", async (req, res) => {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const [result] = await connection.execute("SELECT * FROM songs ORDER BY position ASC");
    await connection.end();
    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching song list:", error);
    res.status(500).json({ error: "Failed to fetch songs" });
  }
});

// ✅ DELETE a song by ID
userapp.delete("/songs/:id", async (req, res) => {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const [result] = await connection.execute("DELETE FROM songs WHERE id = ?", [req.params.id]);
    await connection.end();

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Song not found" });
    }

    res.status(200).json({ message: "Song deleted successfully" });
  } catch (error) {
    console.error("Error deleting song:", error);
    res.status(500).json({ error: "Failed to delete song" });
  }
});

// ✅ PUT - Update order of songs (drag & drop)
userapp.put("/songs/reorder", async (req, res) => {
  const { order } = req.body;

  if (!Array.isArray(order)) {
    return res.status(400).json({ message: "Invalid order format" });
  }

  try {
    const connection = await mysql.createConnection(dbConfig);
    await connection.beginTransaction();

    const updatePromises = order.map(({ id, position }) =>
      connection.execute("UPDATE songs SET position = ? WHERE id = ?", [position, id])
    );

    await Promise.all(updatePromises);
    await connection.commit();
    await connection.end();

    res.status(200).json({ message: "Order updated successfully" });
  } catch (error) {
    console.error("Error updating song order:", error);
    res.status(500).json({ message: "Failed to update order" });
  }
});

const PORT = process.env.PORT || 5000;
userapp.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
