const express = require("express");
const path = require("path");
const moment = require("moment");
const { HOST } = require("./src/constants");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 4000;
connectDB();

const app = express()
  .set("port", PORT)
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs");

// Static public files
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.send("Get ready for OpenSea!");
});

app.get("/api/token/:token_id", function (req, res) {
  const tokenId = parseInt(req.params.token_id).toString();
  const data = {
    name: "Soulbound Test",
    image: `${HOST}/images/${tokenId}.png`,
    attributes: [
      { trait_type: "Eyes", value: "Crazy" },
      { trait_type: "Background", value: "Army Green" },
      { trait_type: "Mouth", value: "Small Grin" },
      { trait_type: "Fur", value: "Golden Brown" },
      { trait_type: "Clothes", value: "Blue Dress" },
    ],
  };
  res.send(data);
});

app.listen(app.get("port"), function () {
  console.log("Node app is running on port", app.get("port"));
});
