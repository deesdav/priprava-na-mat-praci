const Car = require("../models/cars");

exports.getAllCars = async (req, res) => {
    try {
        const result = await Car.find();
        if (result && result.length !== 0) {
            return res.status(200).send({
                msg: "Cars found!",
                payload: result,
            });
        }
        res.status(404).send({ msg: "Cars not found" });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getCarById = async (req, res) => {
    try {
        const result = await Car.findById(req.params.id);
        if (result) {
            return res.status(200).send({
                msg: "Car found",
                payload: result,
            });
        }
        res.status(404).send({ msg: "Car not found" });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.deleteCar = async (req, res) => {
    try {
        const result = await Car.findByIdAndDelete(req.params.id);
        if (result) {
            return res.status(200).send({
                msg: "Car deleted",
            });
        }
        res.status(500).send({ msg: "Something went wrong" });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateCar = async (req, res) => {
    try {
        const data = {
            brand: req.body.brand,
            model: req.body.model,
            year: req.body.year,
            color: req.body.color,
            price: req.body.price,
            isElectric: req.body.isElectric
        };
        const result = await Car.findByIdAndUpdate(req.params.id, data);
        if (result) {
            return res.status(200).send({
                msg: "Car updated",
                payload: result,
            });
        }
        res.status(500).send({
            msg: "Car was not updated",
        });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.createCar = async (req, res) => {
    try {
        const data = new Car({
            brand: req.body.brand,
            model: req.body.model,
            year: req.body.year,
            color: req.body.color,
            price: req.body.price,
            isElectric: req.body.isElectric
        });
        const result = await data.save();
        if (result) {
            return res.status(201).send({
                msg: "Car created",
                payload: result,
            });
        }
        res.status(500).send({
            msg: "Car was not created",
        });
    } catch (error) {
        res.status(500).send(error);
    }
};
