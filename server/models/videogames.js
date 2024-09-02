const mongoose = require("mongoose");

const schema = mongoose.Schema({
    title: { type: String, required: true },
    developer: { type: String, required: true },
    releaseDate: { type: Date, default: Date.now },
    genres: { type: String, required: true },
    platforms: { type: String, required: true },
    rating: { type: Number, required: true },
    description: { type: String, required: true },
});

module.exports = mongoose.model("Videogame", schema);
