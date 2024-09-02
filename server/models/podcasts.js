const mongoose = require("mongoose");

const schema = mongoose.Schema({
    title: { type: String, required: true },
    host: { type: String, required: true },
    releaseDate: { type: Date, default: Date.now },
    episodes: { type: Number, required: true },
    description: { type: String, required: true },
    categories: { type: String, required: true }
});

module.exports = mongoose.model("Podcast", schema);
