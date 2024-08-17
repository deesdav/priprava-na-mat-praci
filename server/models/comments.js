const mongoose = require("mongoose");

const schema = mongoose.Schema({
    content: { type: String, required: true },
    author: { type: String, required: true },
    post: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    likes: { type: Number, default: 0 }
});

module.exports = mongoose.model("Comment", schema);
