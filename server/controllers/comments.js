const Comment = require("../models/comments");

exports.getAllComments = async (req, res) => {
    try {
        const result = await Comment.find();
        if (result && result.length !== 0) {
            return res.status(200).send({
                msg: "Comments found!",
                payload: result,
            });
        }
        res.status(404).send({ msg: "Comments not found" });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getCommentById = async (req, res) => {
    try {
        const result = await Comment.findById(req.params.id);
        if (result) {
            return res.status(200).send({
                msg: "Comment found",
                payload: result,
            });
        }
        res.status(404).send({ msg: "Comment not found" });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.deleteComment = async (req, res) => {
    try {
        const result = await Comment.findByIdAndDelete(req.params.id);
        if (result) {
            return res.status(200).send({
                msg: "Comment deleted",
            });
        }
        res.status(500).send({ msg: "Something went wrong" });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateComment = async (req, res) => {
    try {
        const data = {
            content: req.body.content,
            author: req.body.author,
            post: req.body.post,
            created_at: req.body.created_at,
            likes: req.body.likes,
        };
        const result = await Comment.findByIdAndUpdate(req.params.id, data);
        if (result) {
            return res.status(200).send({
                msg: "Comment updated",
                payload: result,
            });
        }
        res.status(500).send({
            msg: "Comment was not updated",
        });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.createComment = async (req, res) => {
    try {
        const data = new Comment({
            content: req.body.content,
            author: req.body.author,
            post: req.body.post,
            created_at: req.body.created_at,
            likes: req.body.likes,
        });
        const result = await data.save();
        if (result) {
            return res.status(201).send({
                msg: "Comment created",
                payload: result,
            });
        }
        res.status(500).send({
            msg: "Comment was not created",
        });
    } catch (error) {
        res.status(500).send(error);
    }
};
