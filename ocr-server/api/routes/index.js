const express = require("express");
const router = express.Router();
const multer = require("multer");

// Middleware
const FileMiddleware = require("../middlewares/FileMiddleware");
const FilterMiddleware = require("../middlewares/FilterMiddleware");
const withAuth = require("../middlewares/AuthMiddleware");

// Controllers
var BillController = require("../controllers/BillController");
var UserController = require("../controllers/UserController");

// router.get("/img/:id", BillController.img_process);
router.get("/checkToken", withAuth, function (req, res) {
    res.sendStatus(200);
});

router.post("/user/create", FilterMiddleware, UserController.create_user);

router.get("/user/logout", withAuth, UserController.logout);

router.post("/user/authenticate", UserController.authenticate);

router.get("/all", BillController.get_all_bill);

router.post("/create", BillController.create_bill);

router.post("/:id", BillController.get_bill);

router.post(
    "/upload/:moduleName/:elementId",
    withAuth,
    multer().any(),
    FileMiddleware.upload_file
);

router.get("/total", FilterMiddleware, BillController.total);

router.get("/total/:id", BillController.total);

router.get("/number_of_bills", BillController.number_of_bills);

module.exports = router;
