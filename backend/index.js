const express = require("express");

require("dotenv").config();

const app = express();

app.use(express.json());




app.get("/", (req, res) => {
  res.send("welcome to the todos api...");
});


const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port: ${port}...`);
});


