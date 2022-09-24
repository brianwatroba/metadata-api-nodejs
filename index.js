const express = require("express");
const path = require("path");
const { HOST } = require("./config/constants");
const connectDB = require("./config/db");
const Contract = require("./models/Contract");
const Badge = require("./models/Badge");

const PORT = process.env.PORT || 4000;
connectDB();

const app = express().set("port", PORT);

// Static public files
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.send("Welcome to soulbound");
});

// contracts
app.get("/metadata/:address", async (req, res) => {
  try {
    const { address } = req.params;
    console.log(address);
    const contract = await Contract.findOne({ address: address.toLowerCase() });
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

app.get("/metadata/:contract_address/:token_id", async (req, res) => {
  try {
    const { contract_address, token_id } = req.params;
    const badge = await Badge.findOne({
      contract_address: contract_address.toLowerCase(),
      token_id,
    });
    const { name, image, external_url, description, background_color, attributes } = badge;
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

// app.get("/createcontract", async (req, res) => {
//   try {
//     const contract = new Contract({
//       address: "0x0000000000000000000000000000000000000001",
//       name: "Traverse City Dive",
//       description:
//         "Northern Michigan's premier scuba dive shop. We offer Padi licensed dive certification courses, scuba and snorkeling gear, and well as chartered excursions to Michigan's best dive destinations.",
//       image:
//         "https://res.cloudinary.com/dfuyisjqi/image/upload/v1664035987/Traverse%20City%20Dive/TCD_jeheky.png",
//       externalLink: "https://www.traversecity.com",
//       sellerFeeBasisPoints: 0,
//     });
//     await contract.save();
//     res.send(`Contract created: ${contract.name}`);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("Server error");
//   }
// });

// app.get("/createbadge", async (req, res) => {
//   const metadata = {
//     tokenId: "1",
//     name: "Traverse City Marathon - 2022 Finisher",
//     image:
//       "https://res.cloudinary.com/dfuyisjqi/image/upload/v1664036016/Traverse%20City%20Athletic%20Association/TCM_spjlbq.png",
//     external_url: "https://www.traversecitymarathon.com",
//     description: "This badge represents completion of the 2022 Traverse City Marathon",
//     background_color: "FFFFFF",
//     attributes: [
//       {
//         display_type: "number",
//         trait_type: "Placement",
//         value: 138,
//       },
//       {
//         trait_type: "Gender Division",
//         value: "Men",
//       },
//       {
//         trait_type: "Age Group",
//         value: "30-39",
//       },
//       {
//         trait_type: "Finishing time",
//         value: "4:20:54",
//       },
//       {
//         display_type: "date",
//         trait_type: "Issued date",
//         value: 1661375134,
//       },
//     ],
//   };
//   try {
//     const badge = new Badge(metadata);
//     await badge.save();
//     res.send(`Badge created: ${badge.name}`);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("Server error");
//   }
// });

app.listen(app.get("port"), function () {
  console.log("Node app is running on port", app.get("port"));
});
