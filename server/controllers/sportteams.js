const Sportteam = require("../models/sportteams");

exports.getAllSportteams = async (req, res) => {
    try {
        const result = await Sportteam.find();
        if (result && result.length !== 0) {
            return res.status(200).send({
                msg: "Sportteams found!",
                payload: result,
            });
        }
        res.status(404).send({ msg: "Sportteams not found" });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getSportteamById = async (req, res) => {
    try {
        const result = await Sportteam.findById(req.params.id);
        if (result) {
            return res.status(200).send({
                msg: "Sportteam found",
                payload: result,
            });
        }
        res.status(404).send({ msg: "Sportteam not found" });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.deleteSportteam = async (req, res) => {
    try {
        const result = await Sportteam.findByIdAndDelete(req.params.id);
        if (result) {
            return res.status(200).send({
                msg: "Sportteam deleted",
            });
        }
        res.status(500).send({ msg: "Something went wrong" });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateSportteam = async (req, res) => {
    try {
        const data = {
            name: req.body.name,
            city: req.body.city,
            founded: req.body.founded,
            championshipsWon: req.body.championshipsWon,
        };
        const result = await Sportteam.findByIdAndUpdate(req.params.id, data);
        if (result) {
            return res.status(200).send({
                msg: "Sportteam updated",
                payload: result,
            });
        }
        res.status(500).send({
            msg: "Sportteam was not updated",
        });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.createSportteam = async (req, res) => {
    try {
        const data = new Sportteam({
            name: req.body.name,
            city: req.body.city,
            founded: req.body.founded,
            championshipsWon: req.body.championshipsWon,
        });
        const result = await data.save();
        if (result) {
            return res.status(201).send({
                msg: "Sportteam created",
                payload: result,
            });
        }
        res.status(500).send({
            msg: "Sportteam was not created",
        });
    } catch (error) {
        res.status(500).send(error);
    }
};
