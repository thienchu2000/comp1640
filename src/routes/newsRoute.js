const express = require("express");
const router = express.Router();
const NewsController = require("../controllers/NewsController");

router.get("/createDay", NewsController.createDay);
router.put("/isDelete/:id", NewsController.isDelete);
router.put("/update/:id", NewsController.update);
router.post("/create", NewsController.create);
router.get("/", NewsController.index);

module.exports = router;
