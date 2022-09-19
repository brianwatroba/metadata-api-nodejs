const express = require("express");
const path = require("path");
const { HOST } = require("./config/constants");
const connectDB = require("./config/db");
const Contract = require("./models/Contract");

const PORT = process.env.PORT || 4000;
connectDB();

const app = express().set("port", PORT);

// Static public files
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.send("Welcome to soulbound");
});

app.get("/metadata/:address", async (req, res) => {
  try {
    const { address } = req.params;
    const contract = await Contract.findOne({ address });
    res.json({
      name: contract.name,
      description: contract.description,
      image: contract.image,
      external_link: contract.externalLink,
      seller_fee_basis_points: contract.sellerFeeBasisPoints,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
});

app.listen(app.get("port"), function () {
  console.log("Node app is running on port", app.get("port"));
});
