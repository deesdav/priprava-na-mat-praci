const Movie = require("../models/movies");

exports.getAllMovies = async (req, res) => {
    try {
        const result = await Movie.find();
        if (result && result.length !== 0) {
            return res.status(200).send({
                msg: "Movies found!",
                payload: result,
            });
        }
        res.status(404).send({ msg: "Movies not found" });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getMovieById = async (req, res) => {
    try {
        const result = await Movie.findById(req.params.id);
        if (result) {
            return res.status(200).send({
                msg: "Movie found",
                payload: result,
            });
        }
        res.status(404).send({ msg: "Movie not found" });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.deleteMovie = async (req, res) => {
    try {
        const result = await Movie.findByIdAndDelete(req.params.id);
        if (result) {
            return res.status(200).send({
                msg: "Movie deleted",
            });
        }
        res.status(500).send({ msg: "Something went wrong" });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateMovie = async (req, res) => {
    try {
        const data = {
            title: req.body.title,
            director: req.body.director,
            releaseYear: req.body.releaseYear,
            genre: req.body.genre,
            duration: req.body.duration,
            rating: req.body.rating
        };
        const result = await Movie.findByIdAndUpdate(req.params.id, data);
        if (result) {
            return res.status(200).send({
                msg: "Movie updated",
                payload: result,
            });
        }
        res.status(500).send({
            msg: "Movie was not updated",
        });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.createMovie = async (req, res) => {
    try {
        const data = new Movie({
            title: req.body.title,
            director: req.body.director,
            releaseYear: req.body.releaseYear,
            genre: req.body.genre,
            duration: req.body.duration,
            rating: req.body.rating
        });
        const result = await data.save();
        if (result) {
            return res.status(201).send({
                msg: "Movie created",
                payload: result,
            });
        }
        res.status(500).send({
            msg: "Movie was not created",
        });
    } catch (error) {
        res.status(500).send(error);
    }
};
