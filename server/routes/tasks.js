var express = require("express");
var router = express.Router();

const controller = require("../controllers/tasks");

router.get("/", controller.getAllTasks);

//localhost:3000/cats/5sa4d949qw86d5sa4d6sa
//req.params.id

router.get("/:id", controller.getTaskById);

router.delete("/:id", controller.deleteTask);

router.put("/:id", controller.updateTask);

router.post("/", controller.createTask);

module.exports = router;
