const Course = require("../models/courses");

exports.getAllCourses = async (req, res) => {
    try {
        const result = await Course.find();
        if (result && result.length !== 0) {
            return res.status(200).send({
                msg: "Courses found!",
                payload: result,
            });
        }
        res.status(404).send({ msg: "Courses not found" });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getCourseById = async (req, res) => {
    try {
        const result = await Course.findById(req.params.id);
        if (result) {
            return res.status(200).send({
                msg: "Course found",
                payload: result,
            });
        }
        res.status(404).send({ msg: "Course not found" });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.deleteCourse = async (req, res) => {
    try {
        const result = await Course.findByIdAndDelete(req.params.id);
        if (result) {
            return res.status(200).send({
                msg: "Course deleted",
            });
        }
        res.status(500).send({ msg: "Something went wrong" });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateCourse = async (req, res) => {
    try {
        const data = {
            title: req.body.title,
            description: req.body.description,
            instructor: req.body.instructor,
            duration: req.body.duration,
        };
        const result = await Course.findByIdAndUpdate(req.params.id, data);
        if (result) {
            return res.status(200).send({
                msg: "Course updated",
                payload: result,
            });
        }
        res.status(500).send({
            msg: "Course was not updated",
        });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.createCourse = async (req, res) => {
    try {
        const data = new Course({
            title: req.body.title,
            description: req.body.description,
            instructor: req.body.instructor,
            duration: req.body.duration,
        });
        const result = await data.save();
        if (result) {
            return res.status(201).send({
                msg: "Course created",
                payload: result,
            });
        }
        res.status(500).send({
            msg: "Course was not created",
        });
    } catch (error) {
        res.status(500).send(error);
    }
};
