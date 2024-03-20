require("dotenv").config();
const express = require("express");
const mysql=require('mysql');
const cors=require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("From Backend running");
});

try {
  app.listen(PORT, () => {
    console.log(`${PORT} Conneted`);
  });
} catch (error) {
  console.log(error);
}

