const express = require("express");
const router = express.Router();
const EventsController = require("../controllers/EventsController");

router.get("/checkDelete", EventsController.checkDelete);
router.put("/isDelete/:isDeleteId", EventsController.isDelete);
router.delete("/delete/:deleteId", EventsController.delete);
router.put("/update/:id", EventsController.update);
router.post("/create", EventsController.create);
router.get("/", EventsController.index);

module.exports = router;
