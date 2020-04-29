const fs = require("fs");
const rootDir = require("../..");
const mongoose = require("mongoose");
const Bill = mongoose.model("Bill");

const admin_api_url = "http://127.0.0.1:3004";
// importing controller
const BillControllers = require("../controllers/BillController");

exports.upload_file = (req, res, next) => {
  var splits = req.files[0].originalname.split(".");
  var dirPath = `${rootDir}/Files/${req.params.moduleName}/`;
  var filePath = `${rootDir}/Files/${req.params.moduleName}/${
    req.params.elementId
  }.${splits[splits.length - 1]}`;
  if (fs.existsSync(dirPath)) {
    fs.writeFileSync(filePath, req.files[0].buffer);
  } else {
    fs.mkdirSync(dirPath, { recursive: true });
    fs.writeFileSync(filePath, req.files[0].buffer);
  }
  var networkPath = `${admin_api_url}/Files/${req.params.moduleName}/${
    req.params.elementId
  }.${splits[splits.length - 1]}`;
  switch (req.params.moduleName) {
    case "brand":
      Brand.findOneAndUpdate(
        { _id: req.params.elementId },
        { bill_img: networkPath },
        { new: true }
      ).exec((err, brand) => {
        if (err) res.send(err);
        else res.json(brand);
      });
      break;

    default:
      res.json("Specify a Module Name to upload a file");
      break;
  }
};
