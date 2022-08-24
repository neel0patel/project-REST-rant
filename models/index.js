require("dotenv").config();
const mongoose = require("mongoose");

// mongoose.connect(process.env.MONGO_URI, {
//   //   server: {
//   //     socketOptions: {
//   //       socketTimeoutMS: 0,
//   //       connectionTimeout: 0,
//   //     },
//   //   },

//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

module.exports.Place = require("./places");
module.exports.Comment = require("./comment");
