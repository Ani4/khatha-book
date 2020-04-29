var mongoose = require("mongoose");
//models in use
var Bill = mongoose.model("Bill");

// create bill
exports.create_bill = (req, res, next) => {
  let body = req.body;
  Bill.create(body, (err, bill) => {
    if (err) res.send(err);
    else res.json(bill);
  });
};

// get all bills
exports.get_all_bill = (req, res, next) => {
  Bill.find({}, (err, bill) => {
    if (err) res.send(err);
    else res.json(bill);
  });
};
