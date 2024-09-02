const Podcast = require("../models/podcasts");

exports.getAllPodcasts = async (req, res) => {
    try {
        const result = await Podcast.find();
        if (result && result.length !== 0) {
            return res.status(200).send({
                msg: "Podcasts found!",
                payload: result,
            });
        }
        res.status(404).send({ msg: "Podcasts not found" });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getPodcastById = async (req, res) => {
    try {
        const result = await Podcast.findById(req.params.id);
        if (result) {
            return res.status(200).send({
                msg: "Podcast found",
                payload: result,
            });
        }
        res.status(404).send({ msg: "Podcast not found" });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.deletePodcast = async (req, res) => {
    try {
        const result = await Podcast.findByIdAndDelete(req.params.id);
        if (result) {
            return res.status(200).send({
                msg: "Podcast deleted",
            });
        }
        res.status(500).send({ msg: "Something went wrong" });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updatePodcast = async (req, res) => {
    try {
        const data = {
            title: req.body.title,
            host: req.body.host,
            releaseDate: req.body.releaseDate,
            episodes: req.body.episodes,
            description: req.body.description,
            categories: req.body.categories,
        };
        const result = await Podcast.findByIdAndUpdate(req.params.id, data);
        if (result) {
            return res.status(200).send({
                msg: "Podcast updated",
                payload: result,
            });
        }
        res.status(500).send({
            msg: "Podcast was not updated",
        });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.createPodcast = async (req, res) => {
    try {
        const data = new Podcast({
            title: req.body.title,
            host: req.body.host,
            releaseDate: req.body.releaseDate,
            episodes: req.body.episodes,
            description: req.body.description,
            categories: req.body.categories,
        });
        const result = await data.save();
        if (result) {
            return res.status(201).send({
                msg: "Podcast created",
                payload: result,
            });
        }
        res.status(500).send({
            msg: "Podcast was not created",
        });
    } catch (error) {
        res.status(500).send(error);
    }
};
