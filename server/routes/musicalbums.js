var express = require("express");
var router = express.Router();

const controller = require("../controllers/musicalbums");

router.get("/", controller.getAllMusicalbums);

//localhost:3000/cats/5sa4d949qw86d5sa4d6sa
//req.params.id

router.get("/:id", controller.getMusicalbumById);

router.delete("/:id", controller.deleteMusicalbum);

router.put("/:id", controller.updateMusicalbum);

router.post("/", controller.createMusicalbum);

module.exports = router;
