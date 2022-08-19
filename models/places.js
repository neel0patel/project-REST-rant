const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: String,
  cuisines: { type: String, required: true },
  city: { type: String, default: "Anytown" },
  state: { type: String, default: "USA" },
  founded: Number,
});

module.exports = mongoose.model("Place", placeSchema);

// module.exports = [
//   {
//     name: "H-Cafe-ML",
//     city: "Seattle",
//     state: "WA",
//     cuisines: "American, Brunch",
//     pic: "/images/thai.jpg",
//     id: "thai",
//   },
//   {
//     name: "Coding Bar",
//     city: "Phoenix",
//     state: "AZ",
//     cuisines: "Alcohol, Drinks",
//     pic: "/images/dog.jpg",
//     id: "bar",
//   },
// ];
