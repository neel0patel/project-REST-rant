const db = require("../models");

console.log("this is DB", db.Place);

function seed() {
  db.Place.create([
    {
      name: "H-Thai-ML",
      city: "Seattle",
      state: "WA",
      cuisines: "Thai, Pan-Asian",
      pic: "/images/thai.jpg",
      founded: 1989,
    },
    {
      name: "Coding Cat Cafe",
      city: "Phoenix",
      state: "AZ",
      cuisines: "Coffee, Bakery",
      pic: "/images/dog.jpg",
      founded: 2020,
    },
  ])
    .then(() => {
      console.log("Success!");
      process.exit();
    })
    .catch((err) => {
      console.log("Failure!", err);
      process.exit();
    });
}

module.exports = seed;
