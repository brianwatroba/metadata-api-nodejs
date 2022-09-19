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
    externalLink: {
      type: String,
      required: true,
    },
    sellerFeeBasisPoints: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = Contract = mongoose.model("Contract", ContractSchema);
