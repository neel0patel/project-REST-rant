// Modules and Globals
require("dotenv").config();
const express = require("express");
const app = express();
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const seed = require("./seeders/seed-places");

// Express Settings
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

mongoose
  .connect(
    process.env.MONGO_URI,
    {
      // server: {
      //   socketOptions: {
      //     socketTimeoutMS: 0,
      //     connectionTimeout: 0,
      //   },
      // },
    },
    { family: 4 }

    //   function (err, connection) {
    //     // const db = require("./models");
    //     // connection.db('breads');
    //     console.log(
    //       "mongoose.connection.readyState",
    //       mongoose.connection.readyState
    //     );
    //     console.log("connected to DB!!!!!!");

    //     // Controllers & Routes

    //     // try {
    //     //   let place = await db.Place.find();
    //     //   console.log("Place!!!!", place);
    //     // } catch (err) {
    //     //   console.log("ERRR from place find;", err);
    //     // }

    //     // const seedPlaces = require("./seeders/seed-places");
    //     // const seedComments = require("./seeders/seed-comments.js");
    //     // seedComments();
    //     // seedPlaces();
    //   }
  )
  .then(function () {
    console.log("we r connected to dB!");
  });

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
