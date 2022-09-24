const mongoose = require("mongoose");

const BadgeSchema = new mongoose.Schema(
  {
    token_id: {
      type: String,
      required: true,
    },
    contract_address: {
      type: String,
      required: true,
    },
    badge_type: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    external_url: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    background_color: {
      type: String,
      required: true,
    },
    attributes: [
      {
        display_type: {
          type: String,
        },
        trait_type: {
          type: String,
          required: true,
        },
        value: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = Badge = mongoose.model("Badge", BadgeSchema);
