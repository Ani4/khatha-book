const mongoose = require("mongoose");

module.exports = (req, res, next) => {
  // filter not implemented yet
  res.locals.query = req.body || {};
  for (key in res.locals.query) {
    if (key.includes("_id")) {
      res.locals.query[key] = mongoose.Types.ObjectId(res.locals.query[key]);
    }
  }
  next();
};
