const express = require("express");
const router = express.Router();
const NewsController = require("../controllers/NewsController");

router.get("/product/adress", NewsController.adress);
router.get("/product", NewsController.product);
router.get("/", NewsController.index);

module.exports = router;
