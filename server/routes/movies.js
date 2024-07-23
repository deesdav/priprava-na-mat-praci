var express = require("express");
var router = express.Router();

const controller = require("../controllers/movies");

router.get("/", controller.getAllMovies);

//localhost:3000/cats/5sa4d949qw86d5sa4d6sa
//req.params.id

router.get("/:id", controller.getMovieById);

router.delete("/:id", controller.deleteMovie);

router.put("/:id", controller.updateMovie);

router.post("/", controller.createMovie);

module.exports = router;
