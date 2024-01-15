const express = require("express");
const router = express.Router();
var homeController = require("../controllers/HomeController");

router.get("/", homeController.index);

module.exports = router;
