
var express = require("express");
var fsp = require('fs/promises');
const mysql = require("mysql");
var cors = require("cors");
var visitorapp = express();
visitorapp.use(express.json());
visitorapp.use(cors())
visitorapp.use(express.urlencoded());
let db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: 'root',
    database: 'itbridge'
});
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});
//get all
visitorapp.get("/visitors", async function (request, response) {    
    const query = "SELECT * FROM visitors"
    db.query(query, (err, data) => {
        if (err)
            return response.json(err)
        return response.json(data)
    })
})

visitorapp.listen(3090)