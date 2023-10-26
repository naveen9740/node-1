const mongoose = require("mongoose");
require('dotenv').config()

const dbConnection = async() => {
  try {
    await mongoose
    .connect(
      process.env.DBURL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    console.log("DB connected")
  } catch (error) {
    console.log("Error connecting",error)
  }
};

module.exports = { dbConnection };
