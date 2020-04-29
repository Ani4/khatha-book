var fs = require("fs");
var bill_api_url = "http://127.0.0.1:5000";
var rootDirectory = require("../../").rootDirectory;

exports.upload_document = (req, res, next) => {
  console.log(res.locals);
  var splits = req.files[0].originalname.split(".");
  var dirname = `${rootDirectory}/Files/cust-${res.locals.customer._id}/Documents/${req.body.document_type}/bill-${res.locals.bill._id}`;
  if (fs.existsSync(dirname)) {
    fs.writeFileSync(
      dirname +
        `/car-${res.locals.car._id}/${
          req.body.document_name || req.body.document_type
        }.${splits[splits.length - 1]}`,
      req.files[0].buffer
    );
  } else {
    fs.mkdirSync(dirname, { recursive: true });
    fs.writeFileSync(
      dirname +
        `/${req.body.document_name || req.body.document_type}.${
          splits[splits.length - 1]
        }`,
      req.files[0].buffer
    );
  }
  res.locals.document_path = `${bill_api_url}/Files/cust-${
    res.locals.customer._id
  }/Documents/${req.body.document_type}/car-${res.locals.car._id}/${
    req.body.document_name
  }.${splits[splits.length - 1]}`;
  next();
};
