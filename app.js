const express = require("express");
const app = express();


app.post("/clock", function (req, res) {
        res.status(400).json({"error":""})
});

module.exports = app