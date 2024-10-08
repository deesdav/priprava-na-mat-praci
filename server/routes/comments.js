var express = require("express");
var router = express.Router();

const controller = require("../controllers/comments");

router.get("/", controller.getAllComments);

//localhost:3000/cats/5sa4d949qw86d5sa4d6sa
//req.params.id

router.get("/:id", controller.getCommentById);

router.delete("/:id", controller.deleteComment);

router.put("/:id", controller.updateComment);

router.post("/", controller.createComment);

module.exports = router;
