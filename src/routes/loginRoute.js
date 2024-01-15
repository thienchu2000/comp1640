const express = require("express");
const router = express.Router();
const loginController = require("../controllers/LoginController");

router.get("/byFB", loginController.byFB);
router.get("/", loginController.index);

module.exports = router;
