const Musicalbum = require("../models/musicalbums");

exports.getAllMusicalbums = async (req, res) => {
    try {
        const result = await Musicalbum.find();
        if (result && result.length !== 0) {
            return res.status(200).send({
                msg: "Musicalbums found!",
                payload: result,
            });
        }
        res.status(404).send({ msg: "Musicalbums not found" });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getMusicalbumById = async (req, res) => {
    try {
        const result = await Musicalbum.findById(req.params.id);
        if (result) {
            return res.status(200).send({
                msg: "Musicalbum found",
                payload: result,
            });
        }
        res.status(404).send({ msg: "Musicalbum not found" });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.deleteMusicalbum = async (req, res) => {
    try {
        const result = await Musicalbum.findByIdAndDelete(req.params.id);
        if (result) {
            return res.status(200).send({
                msg: "Musicalbum deleted",
            });
        }
        res.status(500).send({ msg: "Something went wrong" });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateMusicalbum = async (req, res) => {
    try {
        const data = {
            title: req.body.title,
            artist: req.body.artist,
            releasedYear: req.body.releasedYear,
            genre: req.body.genre,
            numberOfTracks: req.body.numberOfTracks,
        };
        const result = await Musicalbum.findByIdAndUpdate(req.params.id, data);
        if (result) {
            return res.status(200).send({
                msg: "Musicalbum updated",
                payload: result,
            });
        }
        res.status(500).send({
            msg: "Musicalbum was not updated",
        });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.createMusicalbum = async (req, res) => {
    try {
        const data = new Musicalbum({
            title: req.body.title,
            artist: req.body.artist,
            releasedYear: req.body.releasedYear,
            genre: req.body.genre,
            numberOfTracks: req.body.numberOfTracks,
        });
        const result = await data.save();
        if (result) {
            return res.status(201).send({
                msg: "Musicalbum created",
                payload: result,
            });
        }
        res.status(500).send({
            msg: "Musicalbum was not created",
        });
    } catch (error) {
        res.status(500).send(error);
    }
};
