const express = require("express");
const router = express.Router();
const multer = require("multer");

// Middleware
const FileMiddleware = require("../middlewares/FileMiddleware");
const FilterMiddleware = require("../middlewares/FilterMiddleware");

// Controllers
var BillController = require("../controllers/BillController.js");

router.get("/all", BillController.get_all_bill);

router.post(
  "/upload/:moduleName/:elementId",
  multer().any(),
  FileMiddleware.upload_file
);
router.post("/create", BillController.create_bill);

router.get("/total", FilterMiddleware, BillController.total);

router.get("/total/:id", BillController.total);

router.get("/number_of_bills", BillController.number_of_bills);

module.exports = router;
