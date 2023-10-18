const express = require("express");
const app = express();
const port = 3000;

app.get("/clock", function (req, res) {
    res.json({"back" :"Hello World!"});
});

module.exports = app