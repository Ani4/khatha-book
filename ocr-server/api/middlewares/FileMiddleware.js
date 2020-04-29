const fs = require("fs");
const rootDir = require("../..").rootDirectory;
const mongoose = require("mongoose");
const Bill = mongoose.model("Bill");

const baseUrl = "http://127.0.0.1:5000";

exports.upload_file = (req, res, next) => {
  const splits = req.files[0].originalname.split(".");
  const dirPath = `${rootDir}/Files/${req.params.moduleName}/`;
  const filePath = `${rootDir}/Files/${req.params.moduleName}/${
    req.params.elementId
  }.${splits[splits.length - 1]}`;
  if (fs.existsSync(dirPath)) {
    fs.writeFileSync(filePath, req.files[0].buffer);
  } else {
    fs.mkdirSync(dirPath, { recursive: true });
    fs.writeFileSync(filePath, req.files[0].buffer);
  }
  const networkPath = `${baseUrl}/Files/${req.params.moduleName}/${
    req.params.elementId
  }.${splits[splits.length - 1]}`;
  switch (req.params.moduleName) {
    case "bill":
      Bill.findOneAndUpdate(
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
