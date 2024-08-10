const City = require("../models/cities");

exports.getAllCities = async (req, res) => {
    try {
        const result = await City.find();
        if (result && result.length !== 0) {
            return res.status(200).send({
                msg: "Cities found!",
                payload: result,
            });
        }
        res.status(404).send({ msg: "Cities not found" });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getCityById = async (req, res) => {
    try {
        const result = await City.findById(req.params.id);
        if (result) {
            return res.status(200).send({
                msg: "City found",
                payload: result,
            });
        }
        res.status(404).send({ msg: "City not found" });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.deleteCity = async (req, res) => {
    try {
        const result = await City.findByIdAndDelete(req.params.id);
        if (result) {
            return res.status(200).send({
                msg: "City deleted",
            });
        }
        res.status(500).send({ msg: "Something went wrong" });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateCity = async (req, res) => {
    try {
        const data = {
            name: req.body.name,
            country: req.body.country,
            population: req.body.population,
            established: req.body.established,
        };
        const result = await City.findByIdAndUpdate(req.params.id, data);
        if (result) {
            return res.status(200).send({
                msg: "City updated",
                payload: result,
            });
        }
        res.status(500).send({
            msg: "City was not updated",
        });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.createCity = async (req, res) => {
    try {
        const data = new City({
            name: req.body.name,
            country: req.body.country,
            population: req.body.population,
            established: req.body.established,
        });
        const result = await data.save();
        if (result) {
            return res.status(201).send({
                msg: "City created",
                payload: result,
            });
        }
        res.status(500).send({
            msg: "City was not created",
        });
    } catch (error) {
        res.status(500).send(error);
    }
};
