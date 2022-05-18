const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

app = express();

//Setup middleware
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.json({ message: "Hi, there" });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));