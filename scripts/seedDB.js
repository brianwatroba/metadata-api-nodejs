const { BADGES, CONTRACTS } = require("../config/constants");
const connectDB = require("../config/db");
const Contract = require("../models/Contract");
const Badge = require("../models/Badge");

(async () => {
  try {
    await connectDB();

    await Contract.collection.drop();
    await Badge.collection.drop();
    console.log("Dropped collections");

    const contracts = CONTRACTS.map((contract) => {
      return new Contract(contract);
    });
    await Contract.insertMany(contracts);
    console.log("Inserted contracts");

    const badges = BADGES.map((badge) => {
      return new Badge(badge);
    });
    await Badge.insertMany(badges);
    console.log("Inserted badges");

    return true;
  } catch (error) {
    console.log(error);
    return error;
  }
})();
