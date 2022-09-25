require("dotenv").config();
const { ethers } = require("ethers");
const { BigNumber } = require("ethers");
const MONGO_URI = process.env.MONGO_URI;

const ownerAddress = "0x2A45243809A32867C99bDc777e5Cc00c813C4220"; // kevin's address
const tcAthleticContract = "";
const tcDiveContract = "";

const encodeTokenId = (badgeType, address) => {
  return ethers.utils.solidityPack(["uint96", "address"], [badgeType, address]);
};

const BADGES = [
  {
    token_id: encodeTokenId(BigNumber.from("1"), ownerAddress),
    badge_type: "1",
    name: "TC Marathon - 2022 Finisher",
    image: "https://res.cloudinary.com/dfuyisjqi/image/upload/v1664036016/Traverse%20City%20Athletic%20Association/TCM_spjlbq.png",
    external_url: "https://www.traversecitymarathon.com",
    description: "This badge represents completion of the 2022 Traverse City Marathon",
    background_color: "FFFFFF",
    contract_address: tcAthleticContract,
    attributes: [
      {
        display_type: "number",
        trait_type: "Placement",
        value: 138,
      },
      {
        trait_type: "Year",
        value: "2022",
      },
      {
        trait_type: "Location",
        value: "Old Mission Peninsula, MI",
      },
      {
        trait_type: "Gender Division",
        value: "Men",
      },
      {
        trait_type: "Team affiliation",
        value: "Traverse City Elks Club",
      },
      {
        trait_type: "Age Group",
        value: "30-39",
      },
      {
        trait_type: "Finishing time",
        value: "4:20:54",
      },
      {
        display_type: "date",
        trait_type: "Date issued",
        value: 1661375134,
      },
    ],
  },
  {
    token_id: encodeTokenId(BigNumber.from("2"), ownerAddress),
    badge_type: "2",
    name: "TC Triathalon - 2022 Finisher",
    image: " https://res.cloudinary.com/dfuyisjqi/image/upload/v1664036011/Traverse%20City%20Athletic%20Association/TCA_ckpf4w.png",
    external_url: "https://www.traversecitytriathalon.com",
    description: "This badge represents completion of the 2022 Traverse City Triathalon",
    background_color: "FFFFFF",
    contract_address: tcAthleticContract,
    attributes: [
      {
        display_type: "number",
        trait_type: "Placement",
        value: 55,
      },
      {
        trait_type: "Year",
        value: "2022",
      },
      {
        trait_type: "Location",
        value: "Suttons Bay, MI",
      },

      {
        trait_type: "Gender Division",
        value: "Female",
      },
      {
        trait_type: "Age Group",
        value: "21-30",
      },
      {
        trait_type: "Finishing time",
        value: "3:10:52",
      },
      {
        trait_type: "Swim time",
        value: "0:33:52",
      },
      {
        trait_type: "Team affiliation",
        value: "Traverse City Tri Club",
      },
      {
        trait_type: "Cycling time",
        value: "1:17:20",
      },
      {
        trait_type: "Running time",
        value: "0:57:34",
      },
      {
        display_type: "date",
        trait_type: "Issued date",
        value: 1661375134,
      },
    ],
  },

  {
    token_id: encodeTokenId(BigNumber.from("3"), ownerAddress),
    badge_type: "3",
    name: "TC Sailing Regatta - 2022 Participant",
    image: "https://res.cloudinary.com/dfuyisjqi/image/upload/v1664036014/Traverse%20City%20Athletic%20Association/TCS_ofjlh6.png",
    external_url: "https://www.traversecitymarathon.com",
    description: "This badge represents completion of the 2022 Traverse City Sailing regatta",
    background_color: "FFFFFF",
    contract_address: tcAthleticContract,
    attributes: [
      {
        display_type: "number",
        trait_type: "Placement",
        value: 12,
      },
      {
        trait_type: "Gender Division",
        value: "Men",
      },
      {
        trait_type: "Age Group",
        value: "50+",
      },
      {
        trait_type: "Finishing time",
        value: "1:19:54",
      },
      {
        display_type: "date",
        trait_type: "Issued date",
        value: 1661375134,
      },
    ],
  },
  {
    token_id: encodeTokenId(BigNumber.from("1"), ownerAddress),
    badge_type: "1",
    name: "Certified Open Water Diver",
    image: "https://res.cloudinary.com/dfuyisjqi/image/upload/v1664035990/Traverse%20City%20Dive/TCOW_klihdt.png",
    description: "This badge represents completion of the PADI Open Water Diver course. This diver is fully certified for open diving",
    background_color: "FFFFFF",
    external_url: "https://www.traversecitydive.com",
    contract_address: tcDiveContract,
    attributes: [
      {
        trait_type: "Dive Location",
        value: "Grand Traverse Bay - Traverse City, MI",
      },
      {
        trait_type: "Training Depth - Max (ft)",
        value: "61",
      },
      {
        display_type: "bumber",
        trait_type: "92",
        value: "Grand Traverse Bay - Traverse City, MI",
      },
      {
        trait_type: "Issued date",
        value: 1661375134,
      },
      {
        display_type: "date",
        trait_type: "Issued date",
        value: 1661375134,
      },

      {
        display_type: "date",
        trait_type: "Expiration date",
        value: 1695663121,
      },
    ],
  },
  {
    token_id: encodeTokenId(BigNumber.from("2"), ownerAddress),
    badge_type: "2",
    name: "Certified Underwater Hunter",
    image: "https://res.cloudinary.com/dfuyisjqi/image/upload/v1664035999/Traverse%20City%20Dive/TCUW_ehgwls.png",
    description: "This badge represents completion of the PADI Underwater Hunter course. This diver is certified for underwater hunting",
    background_color: "FFFFFF",
    external_url: "https://www.traversecitydive.com",
    contract_address: tcDiveContract,
    attributes: [
      {
        trait_type: "Dive Location",
        value: "Lake Superior - Marquette, MI",
      },
      {
        trait_type: "Hunting Type",
        value: "Spearfishing",
      },
      {
        display_type: "date",
        trait_type: "Issued date",
        value: 1661375134,
      },
      {
        display_type: "date",
        trait_type: "Expiration date",
        value: 1706466721,
      },
    ],
  },
  {
    token_id: encodeTokenId(BigNumber.from("3"), ownerAddress),
    badge_type: "3",
    name: "Certified Master Diver",
    image: "https://res.cloudinary.com/dfuyisjqi/image/upload/v1664035992/Traverse%20City%20Dive/TCMD_ueni6i.png",
    description:
      "This badge represents completion of the PADI Master Diver course. Holders of this badge are able to teach and certify new divers",
    background_color: "FFFFFF",
    external_url: "https://www.traversecitydive.com",
    contract_address: tcDiveContract,
    attributes: [
      {
        trait_type: "Dive Location",
        value: "Grand Haven, MI",
      },
      {
        display_type: "date",
        trait_type: "Issued date",
        value: 1661375134,
      },
      {
        display_type: "date",
        trait_type: "Expiration date",
        value: 1716658321,
      },
    ],
  },
];

const CONTRACTS = [
  {
    address: tcAthleticContract,
    name: "Northern Michigan Athletic Association",
    description:
      "Upper Michigan's premier outdoor sporting organization. We manage recreational events, races, and family outdoor activities across Leelenau, Grand Traverse, Benzie, and Manistee counties",
    image: "https://res.cloudinary.com/dfuyisjqi/image/upload/v1664109748/Traverse%20City%20Athletic%20Association/nmaa_ihucbl.png",
    banner_image:
      "https://res.cloudinary.com/dfuyisjqi/image/upload/v1664110639/Traverse%20City%20Athletic%20Association/banner6_t54upl.jpg",
    external_link: "https://www.traversecity.com",
    seller_fee_basis_points: 0,
  },
  {
    address: tcDiveContract,
    name: "Traverse City Dive",
    description:
      "Northern Michigan's premier scuba dive shop. We offer Padi licensed dive certification courses, scuba and snorkeling gear, and well as chartered excursions to Michigan's best dive destinations.",
    image: "https://res.cloudinary.com/dfuyisjqi/image/upload/v1664035987/Traverse%20City%20Dive/TCD_jeheky.png",
    banner_image: "https://res.cloudinary.com/dfuyisjqi/image/upload/v1664115222/Traverse%20City%20Dive/divingbanner_sb429d.jpg",
    external_link: "https://www.traversecity.com",
    seller_fee_basis_points: 0,
  },
];

module.exports = {
  MONGO_URI,
  BADGES,
  CONTRACTS,
};
