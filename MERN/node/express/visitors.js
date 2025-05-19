const express = require("express");
const fsp = require("fs/promises");

const visitorapp = express();
visitorapp.use(express.json());

// Async function to read visitor data from a JSON file
async function readVisitor() {
    const data = await fsp.readFile('visitorDB.json', 'utf-8');
    return JSON.parse(data); // Parse and return JSON data
}

// Route to get all visitors
visitorapp.get("/visitors", async function (request, response) {
    try {
        const visitorData = await readVisitor();
        response.send(visitorData);
    } catch (err) {
        response.status(500).send("Failed to load visitor data");
    }
});

//  Only one correct POST route to save visitor
visitorapp.post("/visitors", async function (request, response) {
    try {
        const newVisitor = { ...request.body };

        // Step 1: Read existing visitors
        const data = await fsp.readFile('visitorDB.json', 'utf-8');
        const visitorList = JSON.parse(data);

        // Step 2: Add new visitor
        visitorList.push(newVisitor);

        // Step 3: Save updated list back to the file
        await fsp.writeFile('visitorDB.json', JSON.stringify(visitorList, null, 2));

        // Step 4: Respond to client
        response.send("Visitor saved: " + newVisitor.visitorName);
    } catch (err) {
        console.error("Error saving visitor:", err);
        response.status(500).send("Failed to save visitor");
    }
});
// DELETE: Remove a visitor by ID
visitorapp.delete("/visitors/:id", async function (request, response) {
    try {
        const { id } = request.params;

        const data = await fsp.readFile('visitorDB.json', 'utf-8');
        const visitorList = JSON.parse(data);

        // Filter out the visitor with matching id
        const updatedList = visitorList.filter(visitor => visitor.id != id);

        if (updatedList.length === visitorList.length) {
            return response.status(404).send("Visitor with ID " + id + " not found.");
        }

        await fsp.writeFile('visitorDB.json', JSON.stringify(updatedList, null, 2));
        response.send("Visitor deleted with ID: " + id);
    } catch (err) {
        console.error("Error deleting visitor:", err);
        response.status(500).send("Failed to delete visitor");
    }
});
// GET: Find all visitors with the same name
visitorapp.get("/visitors/name/:visitorName", async function (request, response) {
    try {
        const { visitorName } = request.params;

        const data = await fsp.readFile('visitorDB.json', 'utf-8');
        const visitorList = JSON.parse(data);

        // Filter visitors with matching name (case-insensitive)
        const matchingVisitors = visitorList.filter(
            visitor => visitor.visitorName.toLowerCase() === visitorName.toLowerCase()
        );

        if (matchingVisitors.length === 0) {
            return response.status(404).send("No visitors found with name: " + visitorName);
        }

        response.send(matchingVisitors);
    } catch (err) {
        console.error("Error fetching visitors by name:", err);
        response.status(500).send("Failed to fetch visitors by name");
    }
});


// Start the server
visitorapp.listen(9091, () => {
    console.log("Visitor server running on port 9091");
});
