var express = require("express");
var router = express.Router();

const controller = require("../controllers/videogames");

router.get("/", controller.getAllVideogames);

//localhost:3000/cats/5sa4d949qw86d5sa4d6sa
//req.params.id

router.get("/:id", controller.getVideogameById);

router.delete("/:id", controller.deleteVideogame);

router.put("/:id", controller.updateVideogame);

router.post("/", controller.createVideogame);

module.exports = router;
