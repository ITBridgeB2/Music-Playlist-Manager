const express = require("express");
const fsp = require("fs/promises");
const app = express();
const PORT = 9092;

app.use(express.json());

// Utility to read data
async function readVisitors() {
    const data = await fsp.readFile("visitorsDB.json", "utf-8");
    return JSON.parse(data);
}

// Get all visitors
app.get("/visitors", async (req, res) => {
    try {
        const data = await readVisitors();
        res.json(data);
    } catch (err) {
        res.status(500).send("Error reading visitors");
    }
});

// Get visitor by ID
app.get("/visitors/id/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const visitors = await readVisitors();
        const visitor = visitors.find(v => v.id === id);
        if (!visitor) {
            return res.status(404).send(`Visitor with ID ${id} not found.`);
        }
        res.json(visitor);
    } catch (err) {
        res.status(500).send("Error finding visitor by ID");
    }
});

// Get visitor by Name
app.get("/visitors/name/:visitorName", async (req, res) => {
    try {
        const name = req.params.visitorName.toLowerCase();
        const visitors = await readVisitors();
        const filtered = visitors.filter(v => v.visitorName.toLowerCase() === name);
        if (filtered.length === 0) {
            return res.status(404).send(`No visitors found with name: ${name}`);
        }
        res.json(filtered);
    } catch (err) {
        res.status(500).send("Error finding visitor by name");
    }
});

// Add a visitor
app.post("/visitors", async (req, res) => {
    try {
        const newVisitor = req.body;

        const visitors = await readVisitors();
        visitors.push(newVisitor);

        await fsp.writeFile("visitorsDB.json", JSON.stringify(visitors, null, 2));
        res.send(`Visitor added: ${newVisitor.visitorName}`);
    } catch (err) {
        res.status(500).send("Error adding visitor");
    }
});

// Delete visitor by ID
app.delete("/visitors/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const visitors = await readVisitors();

        const updated = visitors.filter(v => v.id !== id);
        if (updated.length === visitors.length) {
            return res.status(404).send(`Visitor with ID ${id} not found.`);
        }

        await fsp.writeFile("visitorsDB.json", JSON.stringify(updated, null, 2));
        res.send(`Visitor with ID ${id} deleted.`);
    } catch (err) {
        res.status(500).send("Error deleting visitor");
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Visitor server running at http://localhost:${PORT}`);
});
