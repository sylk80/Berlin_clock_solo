const express = require("express");
const app = express();


app.post("/clock", function (req, res) {
        res.status(400).json(null)
});

module.exports = app