const mongoose = require("mongoose");

const schema = mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    publishedYear: { type: Number, required: true },
    pages: { type: Number, required: true },
});

module.exports = mongoose.model("Book", schema);
