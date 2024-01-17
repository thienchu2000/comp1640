const express = require("express");
const router = express.Router();
const LogoutController = require("../controllers/LogoutController");

router.get("/", LogoutController.index);

module.exports = router;
