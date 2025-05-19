const express = require("express");
const customerapp = express();
const fsp = require("fs/promises");

customerapp.use(express.json());
customerapp.use(express.urlencoded({ extended: true }));

// Function to read customer data
async function readCustomer() {
    const data = await fsp.readFile('customerDB.json', 'utf-8');
    return JSON.parse(data); // Parse the JSON content
}

// Route to get all customers
customerapp.get('/customer', async function (req, res) {
    try {
        const data = await readCustomer();
        res.json(data);
    } catch (err) {
        res.status(500).send("Error reading customer data");
    }
});

// Route to display only customer names
customerapp.get("/customer/displayCustomerName", async function (req, res) {
    try {
        const data = await readCustomer();
        const names = data.map(cust => cust.customerName); // Assuming each customer has a `customerName` field
        res.json(names);
    } catch (err) {
        res.status(500).send("Error extracting customer names");
    }
});
//route to get all the customer bill details
customerapp.get("/customer/billDetails",
    async function (request, response) {
        const data = await readCustomer()
        var billDetails = new Array();
        data.forEach(element => {
            billDetails.push(element.customerName + " has bill of :" + element.billAmount);
        });
        response.send(billDetails)
    })

// Start the server on port 9090
customerapp.listen(9090, () => {
    console.log("Server started on port: 9090");
});
