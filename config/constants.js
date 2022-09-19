require("dotenv").config();

const HOST = "https://soulbound-api-test.herokuapp.com";
const MONGO_URI = process.env.MONGO_URI;

module.exports = {
  HOST,
  MONGO_URI,
};
