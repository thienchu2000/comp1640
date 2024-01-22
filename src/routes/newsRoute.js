const express = require("express");
const router = express.Router();
const NewsController = require("../controllers/NewsController");

router.get("/product/address", NewsController.address);
router.get("/product", NewsController.product);
router.post("/create", NewsController.create);
router.get("/", NewsController.index);

module.exports = router;
