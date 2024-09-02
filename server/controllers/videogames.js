const Videogame = require("../models/videogames");

exports.getAllVideogames = async (req, res) => {
    try {
        const result = await Videogame.find();
        if (result && result.length !== 0) {
            return res.status(200).send({
                msg: "Videogames found!",
                payload: result,
            });
        }
        res.status(404).send({ msg: "Videogames not found" });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getVideogameById = async (req, res) => {
    try {
        const result = await Videogame.findById(req.params.id);
        if (result) {
            return res.status(200).send({
                msg: "Videogame found",
                payload: result,
            });
        }
        res.status(404).send({ msg: "Videogame not found" });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.deleteVideogame = async (req, res) => {
    try {
        const result = await Videogame.findByIdAndDelete(req.params.id);
        if (result) {
            return res.status(200).send({
                msg: "Videogame deleted",
            });
        }
        res.status(500).send({ msg: "Something went wrong" });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateVideogame = async (req, res) => {
    try {
        const data = {
            title: req.body.title,
            developer: req.body.developer,
            releaseDate: req.body.releaseDate,
            genres: req.body.genres,
            platforms: req.body.platforms,
            rating: req.body.rating,
            description: req.body.description,
        };
        const result = await Videogame.findByIdAndUpdate(req.params.id, data);
        if (result) {
            return res.status(200).send({
                msg: "Videogame updated",
                payload: result,
            });
        }
        res.status(500).send({
            msg: "Videogame was not updated",
        });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.createVideogame = async (req, res) => {
    try {
        const data = new Videogame({
            title: req.body.title,
            developer: req.body.developer,
            releaseDate: req.body.releaseDate,
            genres: req.body.genres,
            platforms: req.body.platforms,
            rating: req.body.rating,
            description: req.body.description,
        });
        const result = await data.save();
        if (result) {
            return res.status(201).send({
                msg: "Videogame created",
                payload: result,
            });
        }
        res.status(500).send({
            msg: "Videogame was not created",
        });
    } catch (error) {
        res.status(500).send(error);
    }
};
