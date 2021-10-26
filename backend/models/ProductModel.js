const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  ProductID: {
    type: Number,
    required: true,
  },
  DESCRIPTION: {
    type: String,
  },
  CD: {
    type: Number,
  },
  SD: {
    type: Number,
  },
  VAT: {
    type: Number,
  },
  RD: {
    type: Number,
  },
});

module.exports = mongoose.model("product", productSchema);
