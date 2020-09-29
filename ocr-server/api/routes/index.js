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

router.put("/user/update/:id", UserController.user_update);

router.post("/all", withAuth, BillController.get_all_bill);

router.post("/create", withAuth, BillController.create_bill);

router.post("/:id", withAuth, BillController.get_bill);

router.post(
    "/upload/:moduleName/:elementId",
    withAuth,
    multer().any(),
    FileMiddleware.upload_file
);

router.get(
    "/totals/:customer_id",
    withAuth,
    FilterMiddleware,
    BillController.total
);

router.get("/total/:id", withAuth, BillController.total);

router.get(
    "/number_of_bills/:customer_id",
    withAuth,
    BillController.number_of_bills
);

module.exports = router;
