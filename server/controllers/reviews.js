const Review = require("../models/reviews");

exports.getAllReviews = async (req, res) => {
    try {
        const result = await Review.find();
        if (result && result.length !== 0) {
            return res.status(200).send({
                msg: "Reviews found!",
                payload: result,
            });
        }
        res.status(404).send({ msg: "Reviews not found" });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getReviewById = async (req, res) => {
    try {
        const result = await Review.findById(req.params.id);
        if (result) {
            return res.status(200).send({
                msg: "Review found",
                payload: result,
            });
        }
        res.status(404).send({ msg: "Review not found" });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.deleteReview = async (req, res) => {
    try {
        const result = await Review.findByIdAndDelete(req.params.id);
        if (result) {
            return res.status(200).send({
                msg: "Review deleted",
            });
        }
        res.status(500).send({ msg: "Something went wrong" });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateReview = async (req, res) => {
    try {
        const data = {
            user: req.body. user,
            product: req.body.product,
            rating: req.body.rating,
            comment: req.body.comment,
        };
        const result = await Review.findByIdAndUpdate(req.params.id, data);
        if (result) {
            return res.status(200).send({
                msg: "Review updated",
                payload: result,
            });
        }
        res.status(500).send({
            msg: "Review was not updated",
        });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.createReview = async (req, res) => {
    try {
        const data = new Review({
            user: req.body. user,
            product: req.body.product,
            rating: req.body.rating,
            comment: req.body.comment,
        });
        const result = await data.save();
        if (result) {
            return res.status(201).send({
                msg: "Review created",
                payload: result,
            });
        }
        res.status(500).send({
            msg: "Review was not created",
        });
    } catch (error) {
        res.status(500).send(error);
    }
};
