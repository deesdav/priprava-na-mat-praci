const Photo = require("../models/photos");

exports.getAllPhotos = async (req, res) => {
    try {
        const result = await Photo.find();
        if (result && result.length !== 0) {
            return res.status(200).send({
                msg: "Photos found!",
                payload: result,
            });
        }
        res.status(404).send({ msg: "Photos not found" });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getPhotoById = async (req, res) => {
    try {
        const result = await Photo.findById(req.params.id);
        if (result) {
            return res.status(200).send({
                msg: "Photo found",
                payload: result,
            });
        }
        res.status(404).send({ msg: "Photo not found" });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.deletePhoto = async (req, res) => {
    try {
        const result = await Photo.findByIdAndDelete(req.params.id);
        if (result) {
            return res.status(200).send({
                msg: "Photo deleted",
            });
        }
        res.status(500).send({ msg: "Something went wrong" });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updatePhoto = async (req, res) => {
    try {
        const data = {
            title: req.body.title,
            photographer: req.body.photographer,
            uploadDate: req.body.uploadDate,
            location: req.body.location,
            description: req.body.description,
        };
        const result = await Photo.findByIdAndUpdate(req.params.id, data);
        if (result) {
            return res.status(200).send({
                msg: "Photo updated",
                payload: result,
            });
        }
        res.status(500).send({
            msg: "Photo was not updated",
        });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.createPhoto = async (req, res) => {
    try {
        const data = new Photo({
            title: req.body.title,
            photographer: req.body.photographer,
            uploadDate: req.body.uploadDate,
            location: req.body.location,
            description: req.body.description,
        });
        const result = await data.save();
        if (result) {
            return res.status(201).send({
                msg: "Photo created",
                payload: result,
            });
        }
        res.status(500).send({
            msg: "Photo was not created",
        });
    } catch (error) {
        res.status(500).send(error);
    }
};
