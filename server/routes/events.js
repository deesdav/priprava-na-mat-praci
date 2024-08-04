var express = require("express");
var router = express.Router();

const controller = require("../controllers/events");

router.get("/", controller.getAllEvents);

//localhost:3000/cats/5sa4d949qw86d5sa4d6sa
//req.params.id

router.get("/:id", controller.getEventById);

router.delete("/:id", controller.deleteEvent);

router.put("/:id", controller.updateEvent);

router.post("/", controller.createEvent);

module.exports = router;
