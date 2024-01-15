var express = require("express");
var router = express.Router();
var userController = require("../controllers/UserController");

router.get("/profile/email", userController.email);
router.get("/profile", userController.profile);
router.get("/", userController.index);

module.exports = router;
