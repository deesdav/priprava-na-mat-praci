var express = require("express");
var router = express.Router();

const controller = require("../controllers/restaurants");

router.get("/", controller.getAllRestaurants);

//localhost:3000/cats/5sa4d949qw86d5sa4d6sa
//req.params.id

router.get("/:id", controller.getRestaurantById);

router.delete("/:id", controller.deleteRestaurant);

router.put("/:id", controller.updateRestaurant);

router.post("/", controller.createRestaurant);

module.exports = router;
