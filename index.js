const express = require("express");
const path = require("path");
const connectDB = require("./config/db");
const Contract = require("./models/Contract");
const Badge = require("./models/Badge");

const PORT = process.env.PORT || 4000;
connectDB();

const app = express().set("port", PORT);

// Static public files
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.send("Welcome to Soulbound!");
});

app.get("/metadata/:address", async (req, res) => {
  try {
    const { address } = req.params;
    console.log(address);
    const contract = await Contract.findOne({ address: address.toLowerCase() });
    const { name, description, image, banner_image, external_link } = contract;
    res.json({
      name,
      description,
      image,
      banner_image,
      external_link,
      seller_fee_basis_points,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
});

app.get("/metadata/:contract_address/:token_id", async (req, res) => {
  try {
    const { contract_address, token_id } = req.params;
    const badge = await Badge.findOne({
      contract_address: contract_address.toLowerCase(),
      token_id,
    });
    const { name, image, external_url, description, background_color, attributes } = badge;
    // TODO: add expiry call with ethers
    res.json({
      name,
      image,
      external_url,
      description,
      background_color,
      attributes,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
});

app.listen(app.get("port"), function () {
  console.log("Node app is running on port", app.get("port"));
});
