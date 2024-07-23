const mongoose = require("mongoose");

const schema = mongoose.Schema({
    title: { type: String, required: true },
    director: { type: String, required: true },
    releaseYear: { type: Number, required: true },
    genre: { type: String, required: true },
    duration: { type: Number, required: true },
    rating: { type: Number, required: true },
});

module.exports = mongoose.model("Movie", schema);
