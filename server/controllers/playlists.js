const Playlist = require("../models/playlists");

exports.getAllPlaylists = async (req, res) => {
    try {
        const result = await Playlist.find();
        if (result && result.length !== 0) {
            return res.status(200).send({
                msg: "Playlists found!",
                payload: result,
            });
        }
        res.status(404).send({ msg: "Playlists not found" });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getPlaylistById = async (req, res) => {
    try {
        const result = await Playlist.findById(req.params.id);
        if (result) {
            return res.status(200).send({
                msg: "Playlist found",
                payload: result,
            });
        }
        res.status(404).send({ msg: "Playlist not found" });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.deletePlaylist = async (req, res) => {
    try {
        const result = await Playlist.findByIdAndDelete(req.params.id);
        if (result) {
            return res.status(200).send({
                msg: "Playlist deleted",
            });
        }
        res.status(500).send({ msg: "Something went wrong" });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updatePlaylist = async (req, res) => {
    try {
        const data = {
            name: req.body.name,
            description: req.body.description,
            createdBy: req.body.createdBy,
            createdDate: req.body.createdDate,
            numberOfSongs: req.body.numberOfSongs,
        };
        const result = await Playlist.findByIdAndUpdate(req.params.id, data);
        if (result) {
            return res.status(200).send({
                msg: "Playlist updated",
                payload: result,
            });
        }
        res.status(500).send({
            msg: "Playlist was not updated",
        });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.createPlaylist = async (req, res) => {
    try {
        const data = new Playlist({
            name: req.body.name,
            description: req.body.description,
            createdBy: req.body.createdBy,
            createdDate: req.body.createdDate,
            numberOfSongs: req.body.numberOfSongs,
        });
        const result = await data.save();
        if (result) {
            return res.status(201).send({
                msg: "Playlist created",
                payload: result,
            });
        }
        res.status(500).send({
            msg: "Playlist was not created",
        });
    } catch (error) {
        res.status(500).send(error);
    }
};
