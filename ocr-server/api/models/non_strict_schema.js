"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = new Schema(
  {
    _id: Schema.Types.ObjectId,
  },
  { strict: false }
);
