"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const NonStrictSchema = require("./non_strict_schema.js");

const BillSchema = new Schema(
    {
        bill_no: String,
        bill_name: String,
        bill_content: {
            type: Object,
        },
        bill_img: String,
        total: Number,
        bill_raw_data: String,
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Bill", BillSchema);
