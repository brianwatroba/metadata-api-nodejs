const mongoose = require("mongoose");
const { MONGO_URI } = require("./constants");

const connectDB = async () => {
  try {
    console.log("MONGO_URI", MONGO_URI);
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected...");
  } catch (err) {
    console.error(err);
    // exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
