const mongoose = require("mongoose");

const schema = mongoose.Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    releasedYear: { type: Number, required: true },
    genre: { type: String, required: true },
    numberOfTracks: { type: Number, required: true },
});

module.exports = mongoose.model("Musicalbum", schema);
