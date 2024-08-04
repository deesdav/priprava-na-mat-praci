const Event = require("../models/events");

exports.getAllEvents = async (req, res) => {
    try {
        const result = await Event.find();
        if (result && result.length !== 0) {
            return res.status(200).send({
                msg: "Events found!",
                payload: result,
            });
        }
        res.status(404).send({ msg: "Events not found" });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getEventById = async (req, res) => {
    try {
        const result = await Event.findById(req.params.id);
        if (result) {
            return res.status(200).send({
                msg: "Event found",
                payload: result,
            });
        }
        res.status(404).send({ msg: "Event not found" });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.deleteEvent = async (req, res) => {
    try {
        const result = await Event.findByIdAndDelete(req.params.id);
        if (result) {
            return res.status(200).send({
                msg: "Event deleted",
            });
        }
        res.status(500).send({ msg: "Something went wrong" });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateEvent = async (req, res) => {
    try {
        const data = {
            title: req.body.title,
            year: req.body.year,
            location: req.body.location,
            description: req.body.description,
        };
        const result = await Event.findByIdAndUpdate(req.params.id, data);
        if (result) {
            return res.status(200).send({
                msg: "Event updated",
                payload: result,
            });
        }
        res.status(500).send({
            msg: "Event was not updated",
        });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.createEvent = async (req, res) => {
    try {
        const data = new Event({
            title: req.body.title,
            year: req.body.year,
            location: req.body.location,
            description: req.body.description,
        });
        const result = await data.save();
        if (result) {
            return res.status(201).send({
                msg: "Event created",
                payload: result,
            });
        }
        res.status(500).send({
            msg: "Event was not created",
        });
    } catch (error) {
        res.status(500).send(error);
    }
};
