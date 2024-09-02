var express = require("express");
var router = express.Router();

const controller = require("../controllers/podcasts");

router.get("/", controller.getAllPodcasts);

//localhost:3000/cats/5sa4d949qw86d5sa4d6sa
//req.params.id

router.get("/:id", controller.getPodcastById);

router.delete("/:id", controller.deletePodcast);

router.put("/:id", controller.updatePodcast);

router.post("/", controller.createPodcast);

module.exports = router;
