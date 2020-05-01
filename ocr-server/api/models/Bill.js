"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const NonStrictSchema = require("./non_strict_schema.js");

const BillSchema = new Schema(
  {
    bill_no: String,
    bill_name: String,
    // customer_id: Schema.Types.ObjectId,
    bill_content: {
      type: Object,
    },
    bill_img: { type: String, required: true },
    total: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Bill", BillSchema);
