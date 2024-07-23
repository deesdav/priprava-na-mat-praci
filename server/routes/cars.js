var express = require("express");
var router = express.Router();

const controller = require("../controllers/cars");

router.get("/", controller.getAllCars);

//localhost:3000/cats/5sa4d949qw86d5sa4d6sa
//req.params.id

router.get("/:id", controller.getCarById);

router.delete("/:id", controller.deleteCar);

router.put("/:id", controller.updateCar);

router.post("/", controller.createCar);

module.exports = router;
