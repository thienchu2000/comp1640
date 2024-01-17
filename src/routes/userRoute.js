var express = require("express");
var router = express.Router();
var userController = require("../controllers/UserController");

router.post("/update", userController.update);
router.post("/", userController.create);
router.get("/profile/email/image_user", userController.image_user);
router.get("/profile/email", userController.email);
router.get("/profile", userController.profile);
router.get("/", userController.index);

module.exports = router;
