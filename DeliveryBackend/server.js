const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());
const port = process.env.PORT || 5001;
const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB Connection Success!");
});

const deliverDetails = require("./routes/deliverRoute");
app.use("/deliverDetails", deliverDetails);

const locationDetails = require("./routes/locationRoute");
app.use("/locationDetails", locationDetails);

app.listen(port, () => {
  console.log("Server is running on " + port);
});
