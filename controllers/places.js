const router = require("express").Router();

// GET /places
router.get("/", (req, res) => {
  let places = [
    {
      name: "H-Cafe-ML",
      city: "Seattle",
      state: "WA",
      cuisines: "American, Brunch",
      pic: "/images/thai.jpg",
      id: "thai",
    },
    {
      name: "Coding Bar",
      city: "Phoenix",
      state: "AZ",
      cuisines: "Alcohol, Drinks",
      pic: "/images/dog.jpg",
      id: "bar",
    },
  ];

  res.render("places/index", { places });
});

module.exports = router;
