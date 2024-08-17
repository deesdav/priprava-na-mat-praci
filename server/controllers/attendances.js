const Attendance = require("../models/attendances");

exports.getAllAttendances = async (req, res) => {
    try {
        const result = await Attendance.find();
        if (result && result.length !== 0) {
            return res.status(200).send({
                msg: "Attendances found!",
                payload: result,
            });
        }
        res.status(404).send({ msg: "Attendances not found" });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getAttendanceById = async (req, res) => {
    try {
        const result = await Attendance.findById(req.params.id);
        if (result) {
            return res.status(200).send({
                msg: "Attendance found",
                payload: result,
            });
        }
        res.status(404).send({ msg: "Attendance not found" });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.deleteAttendance = async (req, res) => {
    try {
        const result = await Attendance.findByIdAndDelete(req.params.id);
        if (result) {
            return res.status(200).send({
                msg: "Attendance deleted",
            });
        }
        res.status(500).send({ msg: "Something went wrong" });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateAttendance = async (req, res) => {
    try {
        const data = {
            studentName: req.body.studentName,
            date: req.body.date,
            status: req.body.status,
            notes: req.body.notes,
        };
        const result = await Attendance.findByIdAndUpdate(req.params.id, data);
        if (result) {
            return res.status(200).send({
                msg: "Attendance updated",
                payload: result,
            });
        }
        res.status(500).send({
            msg: "Attendance was not updated",
        });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.createAttendance = async (req, res) => {
    try {
        const data = new Attendance({
            studentName: req.body.studentName,
            date: req.body.date,
            status: req.body.status,
            notes: req.body.notes,
        });
        const result = await data.save();
        if (result) {
            return res.status(201).send({
                msg: "Attendance created",
                payload: result,
            });
        }
        res.status(500).send({
            msg: "Attendance was not created",
        });
    } catch (error) {
        res.status(500).send(error);
    }
};
