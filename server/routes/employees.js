var express = require("express");
var router = express.Router();

const controller = require("../controllers/employees");

router.get("/", controller.getAllEmployees);

//localhost:3000/cats/5sa4d949qw86d5sa4d6sa
//req.params.id

router.get("/:id", controller.getEmployeeById);

router.delete("/:id", controller.deleteEmployee);

router.put("/:id", controller.updateEmployee);

router.post("/", controller.createEmployee);

module.exports = router;
