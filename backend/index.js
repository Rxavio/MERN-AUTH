const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const todos = require("./routes/todos");
const signUp = require("./routes/signUp");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/todos", todos);
app.use("/api/signup", signUp);

app.get("/", (req, res) => {
  res.send("welcome to the todos api...");
});

const uri = process.env.MongoUrl;
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port: ${port}...`);
});

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB connected..."))
  .catch((error) => console.error("MongoDB connection failed:", error.message));


