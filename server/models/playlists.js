const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    createdBy: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },
    numberOfSongs: { type: Number, required: true },
});

module.exports = mongoose.model("Playlist", schema);
