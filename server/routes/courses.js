var express = require("express");
var router = express.Router();

const controller = require("../controllers/courses");

router.get("/", controller.getAllCourses);

//localhost:3000/cats/5sa4d949qw86d5sa4d6sa
//req.params.id

router.get("/:id", controller.getCourseById);

router.delete("/:id", controller.deleteCourse);

router.put("/:id", controller.updateCourse);

router.post("/", controller.createCourse);

module.exports = router;
