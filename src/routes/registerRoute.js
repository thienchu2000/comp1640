const express = require("express");
const router = express.Router();
const RegisterController = require("../controllers/RegisterController");

router.post("/", RegisterController.register);
router.get("/", RegisterController.index);

module.exports = router;
