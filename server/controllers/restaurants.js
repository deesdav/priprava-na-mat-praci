const Restaurant = require("../models/restaurants");

exports.getAllRestaurants = async (req, res) => {
    try {
        const result = await Restaurant.find();
        if (result && result.length !== 0) {
            return res.status(200).send({
                msg: "Restaurants found!",
                payload: result,
            });
        }
        res.status(404).send({ msg: "Restaurants not found" });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getRestaurantById = async (req, res) => {
    try {
        const result = await Restaurant.findById(req.params.id);
        if (result) {
            return res.status(200).send({
                msg: "Restaurant found",
                payload: result,
            });
        }
        res.status(404).send({ msg: "Restaurant not found" });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.deleteRestaurant = async (req, res) => {
    try {
        const result = await Restaurant.findByIdAndDelete(req.params.id);
        if (result) {
            return res.status(200).send({
                msg: "Restaurant deleted",
            });
        }
        res.status(500).send({ msg: "Something went wrong" });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateRestaurant = async (req, res) => {
    try {
        const data = {
            name: req.body.name,
            owner: req.body.owner,
            cuisine: req.body.cuisine,
            ratings: req.body.ratings,
        };
        const result = await Restaurant.findByIdAndUpdate(req.params.id, data);
        if (result) {
            return res.status(200).send({
                msg: "Restaurant updated",
                payload: result,
            });
        }
        res.status(500).send({
            msg: "Restaurant was not updated",
        });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.createRestaurant = async (req, res) => {
    try {
        const data = new Restaurant({
            name: req.body.name,
            owner: req.body.owner,
            cuisine: req.body.cuisine,
            ratings: req.body.ratings,
        });
        const result = await data.save();
        if (result) {
            return res.status(201).send({
                msg: "Restaurant created",
                payload: result,
            });
        }
        res.status(500).send({
            msg: "Restaurant was not created",
        });
    } catch (error) {
        res.status(500).send(error);
    }
};
