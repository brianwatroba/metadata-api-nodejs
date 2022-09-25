const mongoose = require("mongoose");

const ContractSchema = new mongoose.Schema(
  {
    address: {
      type: String,
      required: true,
      length: 42,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    banner_image: {
      type: String,
      required: true,
    },
    external_link: {
      type: String,
      required: true,
    },
    seller_fee_basis_points: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = Contract = mongoose.model("Contract", ContractSchema);
