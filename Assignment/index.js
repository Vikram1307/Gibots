const express = require("express");
require('../Assignment/src/Db/db');

const Details = require('../Assignment/src/models/data');

const app = express();
app.use(express.json());

// Post Method
app.post('/data', async (req, res) => {
    try {
        const addingDetails = new Details(req.body)
        const insertData = await addingDetails.save();
        res.send(insertData);
    } catch (e) {
        res.send(e);
    }
})

//GET Method
app.get('/data', async (req, res) => {
    try {
        const getData = await Details.find().sort( { Age: 1 });
        res.send(getData);
    } catch (e) {
        res.send(e);
    }
})


app.listen(8000, () => {
    console.log("Server is running at port 8000")
})