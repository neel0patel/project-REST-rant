// Modules and Globals
require("dotenv").config();
const express = require("express");
const app = express();
const methodOverride = require("method-override");
const mongoose = require("mongoose");

// Express Settings
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

mongoose.connect(
  process.env.MONGO_URI,
  { family: 4 },
  function (err, connection) {
    // connection.db('breads');
    console.log("connected to DB!!");

    const seed = require("./seeders/seed-places");
    //seed();
  }
);

// Controllers & Routes
app.use("/places", require("./controllers/places"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("*", (req, res) => {
  res.render("error404");
});

// Listen for Connections
app.listen(process.env.PORT, function () {
  console.log("Server is alive!");
});
