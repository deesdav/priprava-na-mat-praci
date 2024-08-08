var express = require("express");
var router = express.Router();

const controller = require("../controllers/playlists");

router.get("/", controller.getAllPlaylists);

//localhost:3000/cats/5sa4d949qw86d5sa4d6sa
//req.params.id

router.get("/:id", controller.getPlaylistById);

router.delete("/:id", controller.deletePlaylist);

router.put("/:id", controller.updatePlaylist);

router.post("/", controller.createPlaylist);

module.exports = router;
