const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");
const cors = require("cors");

// Middleware making sure bodyParser runs for every route we are seeking
app.use(cors()); // so that clients on any other server can access the api
app.use(bodyParser.json());

//Import Routes
const teamsRoute = require("./routes/teams");

app.use("/teams", teamsRoute);

// ROUTES
app.get("/", (req, res) => {
  res.send("We are on home screen");
});

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("Connected to DB");
});

// How do we start listening to the server
app.listen(3000);
